package cn.huacheng.safebaiyun.util

data class OpenDoorResult(
    val success: Boolean,
    val message: String,
    val raw: String
)

object LockBiz {

    fun buildOpenDoorPacket(randomValue: ByteArray, bluetoothName: String, productKey: String): ByteArray {
        val n = bluetoothName.substring(3, 5).toInt(16)
        val r = bluetoothName.substring(5, 7).toInt(16)
        val i = bluetoothName.substring(7, 9).toInt(16)
        val c = bluetoothName.substring(9, 11).toInt(16)

        val keyBytes = ByteUtil.hexToBytes(productKey)
        var sum = 0
        randomValue.forEach { sum += it.toInt() and 0xff }
        keyBytes.forEach { sum += it.toInt() and 0xff }

        val body = byteArrayOf(
            (sum and 0xff).toByte(),
            (sum shr 8 and 0xff).toByte(),
            randomValue[0],
            randomValue[1],
            randomValue[2],
            randomValue[3],
            0,
            0
        )

        val encryptedBlock = FDes.encryptData(body, keyBytes).copyOfRange(0, 8)
        val packet = byteArrayOf(
            0xA5.toByte(),
            20,
            5,
            n.toByte(),
            r.toByte(),
            i.toByte(),
            c.toByte(),
            0,
            1,
            7,
            encryptedBlock[0],
            encryptedBlock[1],
            encryptedBlock[2],
            encryptedBlock[3],
            encryptedBlock[4],
            encryptedBlock[5],
            encryptedBlock[6],
            encryptedBlock[7],
            0,
            0x5A.toByte()
        )

        var checksum = 0
        packet.forEach { checksum += it.toInt() and 0xff }
        packet[packet.lastIndex - 1] = (checksum.inv() and 0xff).toByte()
        return packet
    }

    fun parseOpenDoorResult(responseHex: String, productKey: String): OpenDoorResult? {
        if (responseHex.length != 40) return null
        if (responseHex.substring(18, 20) != "87") return null

        val encryptedBody = ByteUtil.hexToBytes(responseHex.substring(20, 36))
        val decrypted = FDes.decryptData(encryptedBody, ByteUtil.hexToBytes(productKey))
        val decryptedHex = ByteUtil.bytesToHex(decrypted)
        if (decryptedHex.length != 16) {
            return OpenDoorResult(success = false, message = "解密失败", raw = decryptedHex)
        }

        return when (decryptedHex.substring(4, 6)) {
            "00" -> OpenDoorResult(success = true, message = "开门成功", raw = decryptedHex)
            "02" -> OpenDoorResult(success = true, message = "门已打开", raw = decryptedHex)
            else -> OpenDoorResult(success = false, message = "开门密码无效", raw = decryptedHex)
        }
    }
}
