Page({
  data: {
    platform: "",
    phone_location: !1,
    phone_bluetooth: !1,
    wx_mini_bluetooth: !1,
    app_bluetooth: !1,
    app_location: !1,
    app_nearby_device: !0
  },
  onLoad: function(o) {
    console.log("options22", o), this.setData({
      platform: o.platform
    })
  },
  onReady: function() {},
  onShow: function() {
    var o = this,
      t = !1,
      e = !1,
      n = !1,
      i = !1,
      c = !1;
    o.check_nearby_device();
    var a = wx.getSystemSetting();
    console.log(a), console.log("bluetoothEnabled", a.bluetoothEnabled), console.log("deviceOrientation", a.deviceOrientation), console.log("locationEnabled", a.locationEnabled), console.log("wifiEnabled", a.wifiEnabled), 1 == a.bluetoothEnabled && (e = !0), 1 == a.locationEnabled && (t = !0);
    var l = wx.getAppAuthorizeSetting();
    console.log("bluetoothAuthorized", l.bluetoothAuthorized), console.log("locationAuthorized", l.locationAuthorized), "authorized" == l.bluetoothAuthorized && (n = !0), "authorized" == l.locationAuthorized && (i = !0), wx.getSetting({
      withSubscriptions: !0,
      success: function(a) {
        console.log("getSetting", a.authSetting), 0 == a.authSetting["scope.bluetooth"] || (c = !0), o.setData({
          phone_location: t,
          phone_bluetooth: e,
          app_bluetooth: n,
          app_location: i,
          wx_mini_bluetooth: c
        })
      }
    })
  },
  check_auth: function(o) {
    var t = o.currentTarget.dataset.index;
    console.log("index", t);
    var e = "确定";
    wx.openAppAuthorizeSetting && (e = "去设置"), 1 == t ? (this.data.phone_location, "ios" != this.data.platform && wx.showModal({
      title: "提示",
      content: "请打开手机控制中心（屏幕右上角往下滑动出现的页面），然后打开【定位服务】或者【位置信息】",
      showCancel: !1,
      confirmText: "确定",
      complete: function(o) {
        o.cancel, o.confirm
      }
    })) : 2 == t ? (this.data.phone_bluetooth, "ios" != this.data.platform ? wx.openSystemBluetoothSetting && wx.openSystemBluetoothSetting({
      success: function(o) {
        console.log(o)
      }
    }) : wx.showModal({
      title: "提示",
      content: "请打开手机控制中心（屏幕右上角往下滑动出现的页面），然后打开蓝牙",
      showCancel: !1,
      confirmText: "确定",
      complete: function(o) {
        o.cancel, o.confirm
      }
    })) : 3 == t ? (this.data.wx_mini_bluetooth, wx.openSetting({
      withSubscriptions: !0
    })) : 4 == t ? wx.showModal({
      title: "提示",
      content: "请按以下步骤开启微信的【蓝牙】权限：手机设置->微信(没有的话找到APP，进去再找到微信)->蓝牙->允许",
      showCancel: !0,
      confirmText: e,
      complete: function(o) {
        o.cancel, o.confirm && "去设置" == e && wx.openAppAuthorizeSetting({
          success: function(o) {
            console.log(o)
          }
        })
      }
    }) : 5 == t ? (this.data.app_location, "ios" != this.data.platform && wx.showModal({
      title: "提示",
      content: "请按以下步骤开启微信的【位置信息】权限：手机设置->应用管理->微信->权限管理->位置信息->允许",
      showCancel: !0,
      confirmText: "去设置",
      complete: function(o) {
        o.cancel, o.confirm && wx.openAppAuthorizeSetting({
          success: function(o) {
            console.log(o)
          }
        })
      }
    })) : 6 == t && ("android" == this.data.platform ? wx.showModal({
      title: "提示",
      content: "请按以下步骤开启微信的【附近设备】权限：手机设置->应用管理->微信->权限管理->附近设备->允许",
      showCancel: !0,
      confirmText: e,
      complete: function(o) {
        o.cancel, o.confirm && "去设置" == e && wx.openAppAuthorizeSetting({
          success: function(o) {
            console.log(o)
          }
        })
      }
    }) : wx.showModal({
      title: "提示",
      content: "请按以下步骤开启微信的【设备发现和连接】权限：手机设置->应用管理->微信->权限管理->设备发现和连接->允许",
      showCancel: !0,
      confirmText: e,
      complete: function(o) {
        o.cancel, o.confirm && "去设置" == e && wx.openAppAuthorizeSetting({
          success: function(o) {
            console.log(o)
          }
        })
      }
    }))
  },
  backClick: function() {
    wx.navigateBack()
  },
  check_nearby_device: function() {
    var o = this;
    wx.closeBluetoothAdapter({
      complete: function(t) {
        wx.openBluetoothAdapter({
          success: function(t) {
            console.log(t), o.setData({
              app_nearby_device: !0
            })
          },
          fail: function(t) {
            console.log("openBluetoothAdapter err", t);
            var e = t.errMsg; - 1 != e.indexOf("system permission denied") || -1 != e.indexOf("systempermission denied") ? o.setData({
              app_nearby_device: !1
            }) : -1 == e.indexOf("permission not grant") && -1 == e.indexOf("permission notgrant") || o.setData({
              app_nearby_device: !1
            })
          }
        })
      }
    })
  },
  onHide: function() {
    wx.stopBluetoothDevicesDiscovery({
      success: function(o) {}
    }), wx.closeBluetoothAdapter({
      success: function(o) {}
    })
  },
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});