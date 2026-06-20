var a = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: "",
    canvas_height: 0,
    canvas_width: 0,
    camera_height: 800,
    camera_height_inner_01: 1e3,
    camera_height_inner_02: 740,
    camera_height_inner_03: 770,
    camera_height_inner_04: 770,
    button_top: 0,
    button_left: 0,
    show_button: ""
  },
  pickerConfirm: function(a) {
    this.setData({
      pickerHidden: !0
    }), this.setData({
      chosen: a.detail.value
    })
  },
  pickerCancel: function(a) {
    this.setData({
      pickerHidden: !0
    })
  },
  pickerShow: function(a) {
    this.setData({
      pickerHidden: !1
    })
  },
  formSubmit: function(a) {
    console.log("form发生了submit事件，携带数据为：", a.detail.value)
  },
  formReset: function(a) {
    console.log("form发生了reset事件，携带数据为：", a.detail.value), this.setData({
      chosen: ""
    })
  },
  onShow: function() {
    var e = a.globalData.SYSTEMINFO.pixelRatio;
    console.log("pixelRatio:", e);
    var t = a.globalData.SYSTEMINFO.windowHeight;
    console.log("screen_height:", t), this.setData({
      camera_height: t
    });
    var i = a.globalData.SYSTEMINFO.model;
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
    e = a.globalData.SYSTEMINFO.pixelRatio, t = a.globalData.SYSTEMINFO.windowHeight / 4;
    var n = a.globalData.SYSTEMINFO.screenWidth / 4;
    console.log("canvas screen_height:", t), this.setData({
      canvas_height: t,
      canvas_width: n
    }), this.setData({
      button_left: a.globalData.SYSTEMINFO.windowWidth / 2 - 35
    }), this.setData({
      button_top: a.globalData.SYSTEMINFO.windowHeight - 170
    }), a.globalData.XM = null, a.globalData.ZJHM = null, a.globalData.mobile_phone = null
  },
  takePhoto: function() {
    var e = this,
      t = "low",
      i = a.globalData.SYSTEMINFO.model; - 1 == i.indexOf("iPhone 6") && -1 == i.indexOf("iPhone 5") && -1 == i.indexOf("iPhone 4") && -1 == i.indexOf("iPhone 3") || (t = "low"), wx.createCameraContext().takePhoto({
      quality: t,
      success: function(t) {
        wx.showLoading({
          title: "识别中..."
        });
        var i = e;
        i.setData({
          show_button: "none"
        });
        var n = t.tempImagePath;
        wx.getLocation({
          type: "wgs84",
          altitude: !1,
          success: function(e) {
            var t = e.latitude,
              o = e.longitude;
            wx.uploadFile({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_and_compare",
              filePath: n,
              name: "upload",
              header: {
                "Content-Type": "multipart/form-data"
              },
              formData: {
                openId: a.globalData.openid,
                latitude: t,
                longitude: o
              },
              success: function(e) {
                var t = JSON.parse(e.data);
                wx.hideLoading(), i.setData({
                  show_button: ""
                }), "000000000000" == t[0].resp_code ? (a.globalData.page_qrcode_qr_code = t[0].png_string, a.globalData.page_qrcode_name = t[0].name, a.globalData.page_qrcode_id_card = t[0].id_card, a.globalData.page_qrcode_mobile_phone = t[0].mobile_phone, a.globalData.page_qrcode_expire_date = t[0].timestamp, a.globalData.page_qrcode_avatar = t[0].avatar_string, wx.navigateTo({
                  url: "../form_03/form"
                })) : wx.showModal({
                  title: "提示",
                  content: "" + t[0].resp_msg,
                  showCancel: !1
                })
              }
            })
          },
          fail: function(a) {
            console.log("getLocation fail", a)
          }
        })
      }
    })
  },
  error: function(a) {
    console.log(a.detail)
  },
  cancel: function() {
    wx.navigateBack()
  }
});