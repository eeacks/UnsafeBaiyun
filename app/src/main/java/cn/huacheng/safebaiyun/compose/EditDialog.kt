package cn.huacheng.safebaiyun.compose

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ModalBottomSheet
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import cn.huacheng.safebaiyun.unlock.UnlockConfig

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EditDialog(
    state: MutableState<Boolean>,
    config: UnlockConfig,
    onSave: (UnlockConfig) -> Unit
) {
    var name by remember(config.id) { mutableStateOf(config.name) }
    var bluetoothName by remember(config.id) { mutableStateOf(config.bluetoothName) }
    var productKey by remember(config.id) { mutableStateOf(config.productKey) }

    ModalBottomSheet(onDismissRequest = { state.value = false }) {
        Column(
            modifier = Modifier.padding(bottom = 24.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            val modifier = Modifier
                .padding(8.dp)
                .fillMaxWidth()

            OutlinedTextField(
                modifier = modifier,
                value = name,
                onValueChange = { name = it },
                label = { Text(text = "名称") }
            )
            OutlinedTextField(
                modifier = modifier,
                value = bluetoothName,
                onValueChange = { bluetoothName = it },
                label = { Text(text = "Bluetooth Name") }
            )
            OutlinedTextField(
                modifier = modifier,
                value = productKey,
                onValueChange = { productKey = it },
                label = { Text(text = "Product Key") }
            )
            Button(
                modifier = Modifier.padding(8.dp),
                onClick = {
                    onSave(
                        config.copy(
                            name = name,
                            bluetoothName = bluetoothName,
                            productKey = productKey
                        )
                    )
                    state.value = false
                }
            ) {
                Text(text = "保存")
            }
        }
    }
}
