var e = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: "",
    canvas_height: 0,
    canvas_width: 0,
    camera_height: 800,
    camera_height_inner_01: 740,
    camera_height_inner_02: 740,
    camera_height_inner_03: 770,
    button_top: 0,
    button_left: 0
  },
  pickerConfirm: function(e) {
    this.setData({
      pickerHidden: !0
    }), this.setData({
      chosen: e.detail.value
    })
  },
  pickerCancel: function(e) {
    this.setData({
      pickerHidden: !0
    })
  },
  pickerShow: function(e) {
    this.setData({
      pickerHidden: !1
    })
  },
  formSubmit: function(e) {
    console.log("form发生了submit事件，携带数据为：", e.detail.value)
  },
  formReset: function(e) {
    console.log("form发生了reset事件，携带数据为：", e.detail.value), this.setData({
      chosen: ""
    })
  },
  onShow: function() {
    e.globalData.SYSTEMINFO.pixelRatio;
    var t = e.globalData.SYSTEMINFO.screenHeight;
    console.log("screen_height:", t), this.setData({
      camera_height: t
    }), this.setData({
      camera_height_inner_01: t - 60
    }), this.setData({
      camera_height_inner_02: t - 30
    }), this.setData({
      camera_height_inner_03: t - 130
    });
    e.globalData.SYSTEMINFO.pixelRatio, t = e.globalData.SYSTEMINFO.screenHeight / 4;
    var a = e.globalData.SYSTEMINFO.screenWidth / 4;
    console.log("canvas screen_height:", t), this.setData({
      canvas_height: t,
      canvas_width: a
    }), this.setData({
      button_left: e.globalData.SYSTEMINFO.windowWidth / 2 - 35
    }), this.setData({
      button_top: e.globalData.SYSTEMINFO.windowHeight - 170
    })
  },
  takePhoto: function() {
    var t = "low",
      a = e.globalData.SYSTEMINFO.model; - 1 == a.indexOf("iPhone 6") && -1 == a.indexOf("iPhone 5") && -1 == a.indexOf("iPhone 4") && -1 == a.indexOf("iPhone 3") || (t = "normal"), wx.createCameraContext().takePhoto({
      quality: t,
      success: function(e) {
        ! function(e) {
          for (var t = getCurrentPages(), a = null, i = 0; i < t.length; i++)
            if ("page/component/pages/form/form" == t[i].route) {
              a = t[i];
              break
            } wx.navigateBack(), setTimeout((function() {
            a.iOS_draw_canvas(e)
          }), 2e3)
        }(e.tempImagePath)
      }
    })
  },
  error: function(e) {
    console.log(e.detail)
  },
  cancel: function() {
    wx.navigateBack()
  }
});