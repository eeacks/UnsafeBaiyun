package cn.huacheng.safebaiyun.util

import android.net.Uri
import android.util.Base64
import cn.huacheng.safebaiyun.unlock.UnlockConfig
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

@Serializable
private data class TransferConfig(
    val name: String,
    val bluetoothName: String,
    val productKey: String
)

object ConfigTransfer {

    private const val scheme = "safeby"
    private const val host = "import"
    private const val dataParam = "data"

    private val json = Json {
        ignoreUnknownKeys = true
        prettyPrint = false
    }

    fun toUrl(config: UnlockConfig): String {
        val payload = json.encodeToString(
            TransferConfig.serializer(),
            TransferConfig(
                name = config.name,
                bluetoothName = config.bluetoothName,
                productKey = config.productKey
            )
        )
        val encoded = Base64.encodeToString(
            payload.toByteArray(),
            Base64.URL_SAFE or Base64.NO_WRAP or Base64.NO_PADDING
        )
        return "$scheme://$host?$dataParam=$encoded"
    }

    fun parse(raw: String): UnlockConfig? {
        val input = raw.trim()
        if (input.isBlank()) return null

        val decodedJson = when {
            input.startsWith("$scheme://") -> {
                val uri = Uri.parse(input)
                val encoded = uri.getQueryParameter(dataParam) ?: return null
                runCatching {
                    String(Base64.decode(encoded, Base64.URL_SAFE or Base64.NO_WRAP))
                }.getOrNull()
            }
            input.startsWith("{") -> input
            else -> null
        } ?: return null

        val transfer = runCatching {
            json.decodeFromString(TransferConfig.serializer(), decodedJson)
        }.getOrNull() ?: return null

        if (transfer.name.isBlank() || transfer.bluetoothName.isBlank() || transfer.productKey.isBlank()) {
            return null
        }

        return UnlockConfig(
            name = transfer.name,
            bluetoothName = transfer.bluetoothName,
            productKey = transfer.productKey
        )
    }
}
