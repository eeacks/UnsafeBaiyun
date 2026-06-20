package cn.huacheng.safebaiyun.compose

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ModalBottomSheet
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.unit.dp
import cn.huacheng.safebaiyun.unlock.UnlockConfig
import cn.huacheng.safebaiyun.util.ConfigTransfer
import cn.huacheng.safebaiyun.util.QrCodeUtil

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ConfigExportDialog(
    config: UnlockConfig,
    onDismiss: () -> Unit,
    onShareUrl: (String) -> Unit
) {
    val url = ConfigTransfer.toUrl(config)
    val qrBitmap = QrCodeUtil.create(url)
    ModalBottomSheet(onDismissRequest = onDismiss) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = config.name)
            Image(
                bitmap = qrBitmap.asImageBitmap(),
                contentDescription = "config_qr",
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 16.dp)
            )
            Button(
                onClick = { onShareUrl(url) },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text("分享 URL")
            }
        }
    }
}
