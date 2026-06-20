package cn.huacheng.safebaiyun.unlock

import android.content.Context
import android.content.SharedPreferences
import androidx.core.content.edit
import cn.huacheng.safebaiyun.util.ContextHolder
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import java.util.UUID

@Serializable
data class UnlockConfig(
    val id: String = UUID.randomUUID().toString(),
    val name: String,
    val bluetoothName: String,
    val productKey: String
)

@Serializable
private data class ConfigStore(
    @SerialName("selected_id")
    val selectedId: String? = null,
    val configs: List<UnlockConfig> = emptyList()
)

object DataRepo {

    private const val storeKey = "config_store"
    private val json = Json {
        ignoreUnknownKeys = true
        prettyPrint = false
    }

    private val preferences: SharedPreferences by lazy {
        ContextHolder.get().getSharedPreferences("data", Context.MODE_PRIVATE)
    }

    fun readConfigs(): List<UnlockConfig> {
        return readStore().configs
    }

    fun readSelectedConfig(): UnlockConfig? {
        val store = readStore()
        val selected = store.selectedId?.let { selectedId ->
            store.configs.firstOrNull { it.id == selectedId }
        }
        return selected ?: store.configs.firstOrNull()
    }

    fun readData(): UnlockConfig {
        return readSelectedConfig() ?: UnlockConfig(
            name = "",
            bluetoothName = "",
            productKey = ""
        )
    }

    fun upsert(config: UnlockConfig, selectAfterSave: Boolean = true) {
        val normalized = config.copy(
            name = config.name.trim(),
            bluetoothName = config.bluetoothName.trim(),
            productKey = config.productKey.trim().uppercase()
        )
        val oldStore = readStore()
        val mutableConfigs = oldStore.configs.toMutableList()
        val existingIndex = mutableConfigs.indexOfFirst { it.id == normalized.id }
        if (existingIndex >= 0) {
            mutableConfigs[existingIndex] = normalized
        } else {
            mutableConfigs.add(normalized)
        }
        writeStore(
            ConfigStore(
                selectedId = if (selectAfterSave) normalized.id else oldStore.selectedId,
                configs = mutableConfigs
            )
        )
    }

    fun save(name: String, bluetoothName: String, productKey: String) {
        upsert(
            UnlockConfig(
                name = name,
                bluetoothName = bluetoothName,
                productKey = productKey
            )
        )
    }

    fun delete(configId: String) {
        val oldStore = readStore()
        val newConfigs = oldStore.configs.filterNot { it.id == configId }
        val newSelectedId = when {
            newConfigs.isEmpty() -> null
            oldStore.selectedId == configId -> newConfigs.first().id
            else -> oldStore.selectedId
        }
        writeStore(ConfigStore(selectedId = newSelectedId, configs = newConfigs))
    }

    fun select(configId: String) {
        val store = readStore()
        if (store.configs.any { it.id == configId }) {
            writeStore(store.copy(selectedId = configId))
        }
    }

    fun importConfig(config: UnlockConfig, selectAfterImport: Boolean = true): UnlockConfig {
        val sanitized = config.copy(
            id = if (config.id.isBlank()) UUID.randomUUID().toString() else config.id,
            name = config.name.trim(),
            bluetoothName = config.bluetoothName.trim(),
            productKey = config.productKey.trim().uppercase()
        )
        upsert(sanitized, selectAfterImport)
        return sanitized
    }

    private fun readStore(): ConfigStore {
        val encoded = preferences.getString(storeKey, null)
        if (!encoded.isNullOrBlank()) {
            return runCatching { json.decodeFromString<ConfigStore>(encoded) }.getOrElse {
                ConfigStore()
            }
        }

        val legacyBluetoothName = preferences.getString("bluetooth_name", "") ?: ""
        val legacyProductKey = preferences.getString("product_key", "") ?: ""
        if (legacyBluetoothName.isNotBlank() && legacyProductKey.isNotBlank()) {
            val migrated = UnlockConfig(
                name = "默认门禁",
                bluetoothName = legacyBluetoothName,
                productKey = legacyProductKey
            )
            val store = ConfigStore(selectedId = migrated.id, configs = listOf(migrated))
            writeStore(store)
            preferences.edit {
                remove("bluetooth_name")
                remove("product_key")
                remove("mac")
                remove("key")
            }
            return store
        }

        return ConfigStore()
    }

    private fun writeStore(store: ConfigStore) {
        preferences.edit {
            putString(storeKey, json.encodeToString(ConfigStore.serializer(), store))
        }
    }
}
