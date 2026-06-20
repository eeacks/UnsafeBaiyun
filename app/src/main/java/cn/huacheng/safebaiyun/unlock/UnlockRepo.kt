package cn.huacheng.safebaiyun.unlock

import android.annotation.SuppressLint
import android.bluetooth.BluetoothAdapter
import android.bluetooth.BluetoothDevice
import android.bluetooth.BluetoothGatt
import android.bluetooth.BluetoothGattCallback
import android.bluetooth.BluetoothGattCharacteristic
import android.bluetooth.BluetoothGattDescriptor
import android.bluetooth.BluetoothGattService
import android.bluetooth.BluetoothManager
import android.bluetooth.le.ScanSettings
import android.bluetooth.le.ScanCallback
import android.bluetooth.le.ScanResult
import android.content.Context
import android.location.LocationManager
import android.os.Build
import cn.huacheng.safebaiyun.util.ByteUtil
import cn.huacheng.safebaiyun.util.ContextHolder
import cn.huacheng.safebaiyun.util.LockBiz
import cn.huacheng.safebaiyun.util.showToast
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.launch

@SuppressLint("MissingPermission")
object UnlockRepo {

    private const val SERVICE_UUID = "14839ac4-7d7e-415c-9a42-167340cf2339"
    private const val CHARACTERISTIC_UUID = "0734594a-a8e7-4b1a-a6b1-cd5243059a57"
    private const val SCAN_TIMEOUT_MS = 8000L
    private const val CONNECT_TIMEOUT_MS = 10000L

    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.IO)

    private var gatt: BluetoothGatt? = null
    private var ioCharacteristic: BluetoothGattCharacteristic? = null
    private var autoDisconnectJob: Job? = null
    private var stopScanJob: Job? = null
    private var scanCallback: ScanCallback? = null
    private var config: UnlockConfig = UnlockConfig(
        name = "",
        bluetoothName = "",
        productKey = ""
    )
    private var opened = false
    private val logList = mutableListOf<String>()
    val logFlow = MutableStateFlow<List<String>>(emptyList())
    private var scanHitCount = 0

    fun unlock() {
        val bluetoothAdapter =
            (ContextHolder.get().getSystemService(Context.BLUETOOTH_SERVICE) as BluetoothManager).adapter
        config = DataRepo.readData()
        resetLogs()
        log("==== 开始一次新的解锁流程 ====")
        log("当前配置 bluetoothName=${config.bluetoothName}, productKey=${maskProductKey(config.productKey)}")
        log("系统蓝牙开关 enabled=${bluetoothAdapter.isEnabled}")
        log("本机蓝牙名称 name=${bluetoothAdapter.name ?: "<null>"} address=${bluetoothAdapter.address ?: "<null>"}")
        log("系统定位开关 enabled=${isLocationEnabled()}")

        if (config.bluetoothName.isBlank() || config.productKey.length != 16) {
            showToast("请先配置 bluetoothName 和 16 位 productKey")
            log("配置不合法，终止")
            return
        }

        if (!bluetoothAdapter.isEnabled) {
            showToast("请先打开蓝牙")
            log("蓝牙未打开，终止")
            return
        }

        cleanupConnection()
        log("准备开始扫描蓝牙设备")
        startScan(bluetoothAdapter)
    }

    private fun startScan(bluetoothAdapter: BluetoothAdapter) {
        log("进入 startScan()")
        val scanner = bluetoothAdapter.bluetoothLeScanner ?: run {
            showToast("当前设备不支持 BLE 扫描")
            log("bluetoothLeScanner 为空")
            return
        }
        log("bluetoothLeScanner 获取成功")

        opened = false
        scanHitCount = 0
        val callback = object : ScanCallback() {
            override fun onScanResult(callbackType: Int, result: ScanResult) {
                logScanResult(result)
                val device = result.device ?: return
                val record = result.scanRecord
                val name = device.name ?: record?.deviceName
                if (name == null) return
                if (name.equals(config.bluetoothName, ignoreCase = true)) {
                    log("扫描命中设备 $name ${device.address}")
                    stopScan(scanner)
                    connect(device)
                }
            }

            override fun onBatchScanResults(results: MutableList<ScanResult>) {
                log("收到批量扫描结果 count=${results.size}")
                results.forEach { result ->
                    logScanResult(result)
                    val device = result.device ?: return@forEach
                    val record = result.scanRecord
                    val name = device.name ?: record?.deviceName
                    if (name != null && name.equals(config.bluetoothName, ignoreCase = true)) {
                        log("批量结果命中设备 $name ${device.address}")
                        stopScan(scanner)
                        connect(device)
                        return
                    }
                }
            }

            override fun onScanFailed(errorCode: Int) {
                stopScan(scanner)
                log("扫描失败 errorCode=$errorCode")
                showToast("扫描失败: $errorCode")
            }
        }
        log("扫描回调已创建")
        scanCallback = callback
        val settings = ScanSettings.Builder()
            .setScanMode(ScanSettings.SCAN_MODE_LOW_LATENCY)
            .setReportDelay(0L)
            .build()
        log("即将调用 scanner.startScan(null, lowLatencySettings, callback)")
        scanner.startScan(null, settings, callback)
        log("scanner.startScan(null, lowLatencySettings, callback) 已调用，目标蓝牙名=${config.bluetoothName}")

        stopScanJob?.cancel()
        stopScanJob = scope.launch {
            log("扫描超时计时器已启动 timeout=${SCAN_TIMEOUT_MS}ms")
            delay(SCAN_TIMEOUT_MS)
            stopScan(scanner)
            log("扫描超时，$SCAN_TIMEOUT_MS ms 内未命中目标设备")
            showToast("扫描超时，未找到门锁")
        }
    }

    private fun logScanResult(result: ScanResult) {
        val device = result.device
        val record = result.scanRecord
        val name = device?.name ?: record?.deviceName
        val serviceUuids = record?.serviceUuids?.joinToString { it.uuid.toString() } ?: "<none>"
        val recordBytes = record?.bytes?.let { ByteUtil.bytesToHex(it) } ?: "<none>"
        val manufacturerSummary = buildString {
            val data = record?.manufacturerSpecificData
            if (data == null || data.size() == 0) {
                append("<none>")
            } else {
                for (index in 0 until data.size()) {
                    val key = data.keyAt(index)
                    val value = data.valueAt(index)
                    if (index > 0) append("; ")
                    append(key)
                    append("=")
                    append(ByteUtil.bytesToHex(value))
                }
            }
        }
        scanHitCount++
        log("扫描结果[$scanHitCount] name=${name ?: "<null>"} address=${device?.address ?: "<null>"} rssi=${result.rssi}")
        log("扫描结果[$scanHitCount] serviceUuids=$serviceUuids manufacturer=$manufacturerSummary")
        log("扫描结果[$scanHitCount] scanRecord=$recordBytes")
    }

    private fun stopScan(scanner: android.bluetooth.le.BluetoothLeScanner) {
        stopScanJob?.cancel()
        stopScanJob = null
        scanCallback?.let { scanner.stopScan(it) }
        scanCallback = null
        log("停止扫描")
    }

    private fun connect(device: BluetoothDevice) {
        gatt = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            device.connectGatt(
                ContextHolder.get(),
                false,
                callback,
                BluetoothDevice.TRANSPORT_LE
            )
        } else {
            device.connectGatt(ContextHolder.get(), false, callback)
        }
        log("开始连接 ${device.address}")

        autoDisconnectJob?.cancel()
        autoDisconnectJob = scope.launch {
            delay(CONNECT_TIMEOUT_MS)
            log("连接超时，准备断开")
            cleanupConnection()
            showToast("连接超时")
        }
    }

    private val callback = object : BluetoothGattCallback() {
        override fun onConnectionStateChange(gatt: BluetoothGatt, status: Int, newState: Int) {
            log("连接状态改变 status=$status newState=$newState")
            if (newState == BluetoothGatt.STATE_CONNECTED) {
                autoDisconnectJob?.cancel()
                log("连接成功，开始发现服务")
                gatt.discoverServices()
            } else if (newState == BluetoothGatt.STATE_DISCONNECTED) {
                log("连接断开")
                cleanupConnection(closeGatt = false)
            }
        }

        override fun onServicesDiscovered(gatt: BluetoothGatt, status: Int) {
            log("服务发现 status=$status")
            val services = gatt.services.joinToString { it.uuid.toString() }
            log("发现服务列表: $services")
            handleService(gatt.getService(java.util.UUID.fromString(SERVICE_UUID)))
        }

        override fun onDescriptorWrite(
            gatt: BluetoothGatt,
            descriptor: BluetoothGattDescriptor,
            status: Int
        ) {
            log("descriptor 写入 status=$status")
            if (status == BluetoothGatt.GATT_SUCCESS) {
                log("descriptor 写入成功，开始读取特征值")
                ioCharacteristic?.let {
                    gatt.readCharacteristic(it)
                }
            }
        }

        override fun onCharacteristicChanged(
            gatt: BluetoothGatt,
            characteristic: BluetoothGattCharacteristic,
            value: ByteArray
        ) {
            handleIncomingValue(value)
        }

        @Deprecated("Deprecated in Java")
        override fun onCharacteristicChanged(
            gatt: BluetoothGatt?,
            characteristic: BluetoothGattCharacteristic?
        ) {
            val value = characteristic?.value ?: return
            handleIncomingValue(value)
        }

        override fun onCharacteristicRead(
            gatt: BluetoothGatt,
            characteristic: BluetoothGattCharacteristic,
            value: ByteArray,
            status: Int
        ) {
            log("特征读取 status=$status size=${value.size}")
            if (status == BluetoothGatt.GATT_SUCCESS) handleIncomingValue(value)
            else log("特征读取失败")
        }

        @Deprecated("Deprecated in Java")
        override fun onCharacteristicRead(
            gatt: BluetoothGatt?,
            characteristic: BluetoothGattCharacteristic?,
            status: Int
        ) {
            val value = characteristic?.value ?: return
            log("特征读取 status=$status size=${value.size}")
            if (status == BluetoothGatt.GATT_SUCCESS) handleIncomingValue(value)
            else log("特征读取失败")
        }

        override fun onCharacteristicWrite(
            gatt: BluetoothGatt,
            characteristic: BluetoothGattCharacteristic,
            status: Int
        ) {
            log("特征写入 status=$status")
            if (status != BluetoothGatt.GATT_SUCCESS) {
                showToast("开门指令写入失败")
                cleanupConnection()
            } else {
                log("开门指令写入成功，等待门锁响应")
            }
        }
    }

    private fun handleService(service: BluetoothGattService?) {
        if (service == null) {
            showToast("未找到目标服务")
            log("未找到目标服务 $SERVICE_UUID")
            cleanupConnection()
            return
        }

        log("命中目标服务 ${service.uuid}")
        log("目标服务下特征列表: ${service.characteristics.joinToString { it.uuid.toString() + "/prop=" + it.properties }}")
        val characteristic = service.getCharacteristic(java.util.UUID.fromString(CHARACTERISTIC_UUID))
        if (characteristic == null) {
            showToast("未找到目标特征")
            log("未找到目标特征 $CHARACTERISTIC_UUID")
            cleanupConnection()
            return
        }

        ioCharacteristic = characteristic
        val currentGatt = gatt ?: return
        log("命中目标特征 ${characteristic.uuid}，properties=${characteristic.properties}")
        currentGatt.setCharacteristicNotification(characteristic, true)

        val descriptor = characteristic.descriptors.firstOrNull()
        if (descriptor != null) {
            log("准备写 descriptor ${descriptor.uuid}")
            descriptor.value = BluetoothGattDescriptor.ENABLE_NOTIFICATION_VALUE
            currentGatt.writeDescriptor(descriptor)
        } else {
            log("没有 descriptor，直接读取特征值")
            currentGatt.readCharacteristic(characteristic)
        }
    }

    private fun handleIncomingValue(value: ByteArray) {
        val currentGatt = gatt ?: return
        log("收到数据 ${ByteUtil.bytesToHex(value)}")

        if (!opened && value.size == 4) {
            opened = true
            log("收到 4 字节随机数，准备生成开门指令")
            val packet = LockBiz.buildOpenDoorPacket(
                randomValue = value,
                bluetoothName = config.bluetoothName,
                productKey = config.productKey
            )
            log("生成开门指令 ${ByteUtil.bytesToHex(packet)}")
            val characteristic = ioCharacteristic ?: return
            characteristic.value = packet
            characteristic.writeType = BluetoothGattCharacteristic.WRITE_TYPE_DEFAULT
            currentGatt.writeCharacteristic(characteristic)
            return
        }

        val responseHex = ByteUtil.bytesToHex(value)
        val result = LockBiz.parseOpenDoorResult(responseHex, config.productKey)
        if (result == null) {
            log("当前响应不是开门结果包，忽略")
            return
        }
        log("解析开门结果 success=${result.success} raw=${result.raw}")
        showToast(result.message)
        cleanupConnection()
    }

    private fun cleanupConnection(closeGatt: Boolean = true) {
        autoDisconnectJob?.cancel()
        autoDisconnectJob = null
        stopScanJob?.cancel()
        stopScanJob = null
        ioCharacteristic = null
        opened = false
        if (closeGatt) {
            log("清理解锁状态并关闭 GATT")
            gatt?.disconnect()
            gatt?.close()
        }
        gatt = null
    }

    fun clearLogs() {
        resetLogs()
        log("日志已清空")
    }

    private fun resetLogs() {
        logList.clear()
        logFlow.value = emptyList()
    }

    private fun maskProductKey(productKey: String): String {
        if (productKey.length <= 4) return productKey
        return productKey.take(4) + "*".repeat(productKey.length - 4)
    }

    private fun isLocationEnabled(): Boolean {
        val locationManager = ContextHolder.get().getSystemService(Context.LOCATION_SERVICE) as? LocationManager
            ?: return false
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            locationManager.isLocationEnabled
        } else {
            locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER) ||
                locationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER)
        }
    }

    private fun log(msg: String) {
        val finalMsg = "${System.currentTimeMillis()} | $msg"
        println(finalMsg)
        logList += finalMsg
        if (logList.size > 300) {
            logList.removeAt(0)
        }
        logFlow.value = logList.toList()
    }
}
