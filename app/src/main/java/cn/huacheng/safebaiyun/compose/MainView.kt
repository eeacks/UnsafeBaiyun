package cn.huacheng.safebaiyun.compose

import android.Manifest
import android.content.ClipDescription
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import cn.huacheng.safebaiyun.R
import cn.huacheng.safebaiyun.unlock.DataRepo
import cn.huacheng.safebaiyun.unlock.UnlockConfig
import cn.huacheng.safebaiyun.unlock.UnlockRepo
import cn.huacheng.safebaiyun.util.ConfigTransfer
import cn.huacheng.safebaiyun.util.showToast
import com.journeyapps.barcodescanner.ScanContract
import com.journeyapps.barcodescanner.ScanOptions

/**
 *
 *@description:
 *@author: guangzhou
 *@create: 2024-05-10
 */

@Composable
fun MainView(navController: NavHostController) {

    val context = LocalContext.current
    val clipboardManager = remember {
        context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
    }

    val hasPermission = remember {
        mutableStateOf(false)
    }

    var configs by remember { mutableStateOf(DataRepo.readConfigs()) }
    var selectedConfig by remember { mutableStateOf(DataRepo.readSelectedConfig()) }
    val showEditDialog = remember { mutableStateOf(false) }
    var editingConfig by remember {
        mutableStateOf(
            UnlockConfig(
                name = "",
                bluetoothName = "",
                productKey = ""
            )
        )
    }
    var exportConfig by remember { mutableStateOf<UnlockConfig?>(null) }

    fun refreshConfigs() {
        configs = DataRepo.readConfigs()
        selectedConfig = DataRepo.readSelectedConfig()
    }

    val scanLauncher = rememberLauncherForActivityResult(ScanContract()) { result ->
        val contents = result.contents?.trim().orEmpty()
        if (contents.isBlank()) {
            showToast("未识别到二维码内容")
            return@rememberLauncherForActivityResult
        }
        val imported = ConfigTransfer.parse(contents)
        if (imported == null) {
            showToast("二维码配置无效")
            return@rememberLauncherForActivityResult
        }
        DataRepo.importConfig(imported)
        refreshConfigs()
        showToast("已导入配置：${imported.name}")
    }

    val requestCameraLauncher =
        rememberLauncherForActivityResult(contract = ActivityResultContracts.RequestPermission()) { granted ->
            if (granted) {
                scanLauncher.launch(
                    ScanOptions().apply {
                        setDesiredBarcodeFormats(ScanOptions.QR_CODE)
                        setPrompt("扫描门禁配置二维码")
                        setBeepEnabled(false)
                        setOrientationLocked(false)
                    }
                )
            } else {
                showToast("未授予相机权限")
            }
        }

    SideEffect {
        hasPermission.value = when {
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
                context.checkSelfPermission(Manifest.permission.BLUETOOTH_CONNECT) == PackageManager.PERMISSION_GRANTED &&
                    context.checkSelfPermission(Manifest.permission.BLUETOOTH_SCAN) == PackageManager.PERMISSION_GRANTED &&
                    context.checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED
            }
            else -> context.checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED
        }
    }

    Column {
        MainTopBar(onImportScanClick = {
            if (context.checkSelfPermission(Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED) {
                scanLauncher.launch(
                    ScanOptions().apply {
                        setDesiredBarcodeFormats(ScanOptions.QR_CODE)
                        setPrompt("扫描门禁配置二维码")
                        setBeepEnabled(false)
                        setOrientationLocked(false)
                    }
                )
            } else {
                requestCameraLauncher.launch(Manifest.permission.CAMERA)
            }
        }, onImportClipboardClick = {
            val text = readClipboardText(context, clipboardManager)
            if (text.isNullOrBlank()) {
                showToast("剪切板中没有可导入内容")
            } else {
                val imported = ConfigTransfer.parse(text)
                if (imported == null) {
                    showToast("剪切板内容不是有效配置")
                } else {
                    DataRepo.importConfig(imported)
                    refreshConfigs()
                    showToast("已导入配置：${imported.name}")
                }
            }
        }, onHelperClick = {
            navController.navigate("helper")
        }, onLogClick = {
            navController.navigate("logs")
        })
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(8.dp)
        ) {
            Text(
                text = selectedConfig?.let { "当前配置：${it.name}" } ?: "当前没有可用配置",
                modifier = Modifier.padding(bottom = 8.dp),
                style = MaterialTheme.typography.titleMedium
            )
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(120.dp),
                contentAlignment = Alignment.Center
            ) {
                if (hasPermission.value) {
                    UnlockView(enabled = selectedConfig != null)
                } else {
                    PermissionView(hasPermission)
                }
            }
            Button(
                onClick = {
                    editingConfig = UnlockConfig(
                        name = "门禁 ${configs.size + 1}",
                        bluetoothName = "",
                        productKey = ""
                    )
                    showEditDialog.value = true
                },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 8.dp)
            ) {
                Text("手动新建")
            }
            HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))
            if (configs.isEmpty()) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(180.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Text("还没有配置，可手动新建、扫码导入或读取剪切板导入")
                }
            } else {
                LazyColumn(
                    modifier = Modifier.fillMaxSize(),
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    items(configs, key = { it.id }) { config ->
                        ConfigRow(
                            config = config,
                            selected = selectedConfig?.id == config.id,
                            onSelect = {
                                DataRepo.select(config.id)
                                refreshConfigs()
                            },
                            onEdit = {
                                editingConfig = config
                                showEditDialog.value = true
                            },
                            onExport = {
                                exportConfig = config
                            },
                            onDelete = {
                                DataRepo.delete(config.id)
                                refreshConfigs()
                            }
                        )
                    }
                }
            }
        }
        if (showEditDialog.value) {
            EditDialog(
                state = showEditDialog,
                config = editingConfig,
                onSave = {
                    DataRepo.upsert(it)
                    refreshConfigs()
                }
            )
        }
        exportConfig?.let { config ->
            ConfigExportDialog(
                config = config,
                onDismiss = { exportConfig = null },
                onShareUrl = { url ->
                    val shareIntent = Intent(Intent.ACTION_SEND).apply {
                        type = "text/plain"
                        putExtra(Intent.EXTRA_TEXT, url)
                    }
                    context.startActivity(Intent.createChooser(shareIntent, "分享门禁配置"))
                }
            )
        }
    }

}

@Composable
private fun UnlockView(enabled: Boolean) {
    Button(onClick = {
        showToast("开始解锁门禁")
        UnlockRepo.unlock()
    }, enabled = enabled, modifier = Modifier.size(144.dp, 56.dp)) {
        Text(text = stringResource(id = R.string.unlock_door), fontSize = 18.sp)
    }
}

@Composable
private fun PermissionView(hasPermission: MutableState<Boolean>) {
    val requestPermissionLauncher =
        rememberLauncherForActivityResult(contract = ActivityResultContracts.RequestMultiplePermissions()) { result ->
            hasPermission.value = result.values.all { it }
        }

    Button(modifier = Modifier.size(144.dp, 56.dp),
        onClick = {
            val permissions = when {
                Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> arrayOf(
                    Manifest.permission.BLUETOOTH_CONNECT,
                    Manifest.permission.BLUETOOTH_SCAN,
                    Manifest.permission.ACCESS_FINE_LOCATION
                )
                else -> arrayOf(Manifest.permission.ACCESS_FINE_LOCATION)
            }
            requestPermissionLauncher.launch(permissions)
        }) {
        Text(text = stringResource(id = R.string.request_permission), fontSize = 18.sp)

    }
}

@Composable
private fun ConfigRow(
    config: UnlockConfig,
    selected: Boolean,
    onSelect: () -> Unit,
    onEdit: () -> Unit,
    onExport: () -> Unit,
    onDelete: () -> Unit
) {
    var showMenu by remember { mutableStateOf(false) }
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(onClick = onSelect)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 12.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = config.name.ifBlank { "未命名配置" },
                    style = MaterialTheme.typography.titleMedium
                )
                Text(
                    text = if (selected) "当前使用" else "点击设为当前使用",
                    style = MaterialTheme.typography.bodySmall
                )
            }
            Box {
                IconButton(onClick = { showMenu = true }) {
                    Icon(
                        imageVector = Icons.Default.MoreVert,
                        contentDescription = "more"
                    )
                }
                DropdownMenu(
                    expanded = showMenu,
                    onDismissRequest = { showMenu = false }
                ) {
                    DropdownMenuItem(
                        text = { Text("修改") },
                        onClick = {
                            showMenu = false
                            onEdit()
                        }
                    )
                    DropdownMenuItem(
                        text = { Text("导出二维码 / 分享 URL") },
                        onClick = {
                            showMenu = false
                            onExport()
                        }
                    )
                    DropdownMenuItem(
                        text = { Text("删除") },
                        onClick = {
                            showMenu = false
                            onDelete()
                        }
                    )
                }
            }
        }
    }
}

private fun readClipboardText(context: Context, clipboardManager: ClipboardManager): String? {
    if (!clipboardManager.hasPrimaryClip()) return null
    val description = clipboardManager.primaryClipDescription ?: return null
    val isText = description.hasMimeType(ClipDescription.MIMETYPE_TEXT_PLAIN) ||
        description.hasMimeType(ClipDescription.MIMETYPE_TEXT_HTML)
    if (!isText) return null
    val item = clipboardManager.primaryClip?.getItemAt(0) ?: return null
    return item.text?.toString() ?: item.coerceToText(context).toString()
}
