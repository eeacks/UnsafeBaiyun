var e = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: "",
    camera_height: 800,
    camera_height_inner_01: 1e3,
    camera_height_inner_02: 740,
    camera_height_inner_03: 770,
    camera_height_inner_04: 770,
    button_top: 0,
    button_left: 0,
    show_button: "",
    jump_source: ""
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
    var a = e.globalData.SYSTEMINFO.pixelRatio;
    console.log("pixelRatio:", a);
    var t = e.globalData.SYSTEMINFO.windowHeight;
    console.log("screen_height:", t), this.setData({
      camera_height: t
    });
    var i = e.globalData.SYSTEMINFO.model;
    console.log("model:", i), -1 != i.indexOf("iPhone 4") && this.setData({
      camera_height_inner_01: 374
    }), -1 != i.indexOf("iPhone 5") && this.setData({
      camera_height_inner_01: 374
    }), -1 != i.indexOf("iPhone 6") && this.setData({
      camera_height_inner_01: 448
    }), -1 != i.indexOf("iPhone 6 Plus") && this.setData({
      camera_height_inner_01: 502
    }), -1 != i.indexOf("iPhone 7") && this.setData({
      camera_height_inner_01: 448
    }), -1 != i.indexOf("iPhone 7 Plus") && this.setData({
      camera_height_inner_01: 502
    }), -1 != i.indexOf("iPhone 8") && this.setData({
      camera_height_inner_01: 569
    }), -1 != i.indexOf("iPhone X") && this.setData({
      camera_height_inner_01: 569
    }), this.setData({
      camera_height_inner_02: 490
    }), this.setData({
      camera_height_inner_04: t - 80 - 410
    }), this.setData({
      camera_height_inner_03: t - 100
    });
    a = e.globalData.SYSTEMINFO.pixelRatio, t = e.globalData.SYSTEMINFO.windowHeight / 4;
    var n = e.globalData.SYSTEMINFO.screenWidth / 4;
    console.log("canvas screen_height:", t), this.setData({
      canvas_height: t,
      canvas_width: n
    }), this.setData({
      button_left: e.globalData.SYSTEMINFO.windowWidth / 2 - 35
    }), this.setData({
      button_top: e.globalData.SYSTEMINFO.windowHeight - 170
    }), e.globalData.XM = null, e.globalData.ZJHM = null, e.globalData.mobile_phone = null
  },
  onLoad: function(e) {
    var a = decodeURIComponent(e.register_type);
    console.log("camera register_type:", a), this.setData({
      jump_source: a
    })
  },
  takePhoto: function() {
    var a = this,
      t = "low",
      i = e.globalData.SYSTEMINFO.model; - 1 == i.indexOf("iPhone 6") && -1 == i.indexOf("iPhone 5") && -1 == i.indexOf("iPhone 4") && -1 == i.indexOf("iPhone 3") || (t = "low"), wx.createCameraContext().takePhoto({
      quality: t,
      success: function(t) {
        wx.showLoading({
          title: "识别中..."
        });
        var i = a;
        i.setData({
          show_button: "none"
        });
        var n = t.tempImagePath;
        wx.uploadFile({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_and_compare",
          filePath: n,
          name: "upload",
          header: {
            "Content-Type": "multipart/form-data"
          },
          formData: {
            openId: e.globalData.openid
          },
          success: function(e) {
            var a = JSON.parse(e.data);
            if (wx.hideLoading(), i.setData({
                show_button: ""
              }), "000000000000" == a[0].resp_code) return "LF_LAUNCH_REGISTER" == i.data.jump_source ? void wx.navigateTo({
              url: "../../../yun_yi_an_launch_app/pages/form_ios_bind/form?oper_type=FINISH_BIND&jump_source=LF_LAUNCH_REGISTER"
            }) : void wx.navigateTo({
              url: "../../../yun_yi_an_launch_app/pages/form_ios_bind/form?oper_type=FINISH_BIND"
            });
            wx.showModal({
              title: "提示",
              content: "" + a[0].resp_msg,
              showCancel: !1
            })
          }
        })
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