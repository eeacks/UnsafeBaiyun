package cn.huacheng.safebaiyun

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.animation.slideIn
import androidx.compose.animation.slideOut
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.dp
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import cn.huacheng.safebaiyun.compose.HelpView
import cn.huacheng.safebaiyun.compose.LogTopBar
import cn.huacheng.safebaiyun.compose.LogView
import cn.huacheng.safebaiyun.compose.MainView
import cn.huacheng.safebaiyun.theme.SafeBaiyunTheme


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            SafeBaiyunTheme {
                val navController = rememberNavController()
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background
                ) {
                    NavHost(
                        navController = navController,
                        startDestination = "main",
                    ) {
                        composable("main", enterTransition = {
                            slideIn {
                                IntOffset(-it.width, 0)
                            }
                        }, exitTransition = {
                            slideOut {
                                IntOffset(-it.width, 0)
                            }
                        }) {
                            MainView(navController)
                        }

                        composable("helper", enterTransition = {
                            slideIn {
                                IntOffset(it.width, 0)
                            }
                        }, exitTransition = {
                            slideOut {
                                IntOffset(it.width, 0)
                            }
                        }) {
                            HelpView(navController)
                        }

                        composable("logs", enterTransition = {
                            slideIn {
                                IntOffset(it.width, 0)
                            }
                        }, exitTransition = {
                            slideOut {
                                IntOffset(it.width, 0)
                            }
                        }) {
                            Surface(
                                modifier = Modifier.fillMaxSize(),
                                color = MaterialTheme.colorScheme.background
                            ) {
                                androidx.compose.foundation.layout.Column {
                                    LogTopBar(navController)
                                    LogView(
                                        modifier = Modifier
                                            .fillMaxSize()
                                            .padding(8.dp)
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
