var a, t = require("../../../../@babel/runtime/helpers/defineProperty"),
  e = getApp(),
  o = 0,
  l = 0,
  i = null;
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: "",
    tempFilePaths: "",
    canvas_height: 0,
    canvas_width: 0,
    camera_height: 800,
    camera_height_inner_01: 740,
    camera_height_inner_02: 740,
    camera_height_inner_03: 770,
    flash: "off",
    device_position: "back",
    button_top: 0,
    button_left: 0,
    show_button: "",
    image: a
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
  chooseimage: function() {
    var a = this;
    a.setData({
      show_button: "none"
    });
    var t = e.globalData.openid;
    "AGENT" == e.globalData.register_type.substr(0, 5) && (t = e.globalData.register_type + t), "RENTER" == e.globalData.register_type.substr(0, 6) && (t = e.globalData.register_type + t), "COMPANY" == e.globalData.register_type.substr(0, 7) && (t = e.globalData.register_type + t);
    var o = "";
    "ID_CARD" == e.globalData.cert_type ? o = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_img_ocr_01" : "PASSPORT" == e.globalData.cert_type && (o = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_img_ocr_passport"), console.log("cert_type url", e.globalData.cert_type, o), wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      success: function(l) {
        if (console.log(l), l.tempFilePaths.length > 0) {
          wx.showLoading({
            title: "loading..."
          });
          var n = {
              open_id: t
            },
            s = l.tempFilePaths[0];
          wx.uploadFile({
            url: o,
            filePath: s,
            name: "upload",
            header: {
              "Content-Type": "multipart/form-data"
            },
            formData: n,
            success: function(t) {
              var o = JSON.parse(t.data);
              if (console.log(o), wx.hideLoading(), "000000000000" == o[0].resp_code) {
                o = JSON.parse(t.data);
                console.log(o), i.setData({
                  show_button: ""
                }), "ID_CARD" == e.globalData.cert_type ? (e.globalData.upload_file_id_ocr_01 = o[0].upload_file_id_ocr_01, e.globalData.ocr_name = o[0].name, e.globalData.ocr_id = o[0].id) : "PASSPORT" == e.globalData.cert_type && (e.globalData.upload_file_id_ocr_01 = o[0].file_id_ocr, e.globalData.ocr_name = o[0].pass_port_name, e.globalData.ocr_id = o[0].pass_port_number);
                var l = a.getOpenerEventChannel(),
                  n = {
                    upload_file_id_ocr_01: o[0].file_id_ocr,
                    ocr_name: o[0].name,
                    ocr_id: o[0].id
                  };
                l.emit("callback_ocr", {
                  data: n
                }), setTimeout((function() {
                  wx.hideLoading(), wx.navigateBack()
                }), 1500)
              } else wx.showModal({
                title: "异常",
                content: "" + o[0].resp_msg,
                showCancel: !1
              })
            }
          })
        } else wx.showModal({
          title: "您未选相册",
          content: "请选相册",
          showCancel: !1
        })
      },
      fail: function(a) {
        console.log("error:", a), wx.showModal({
          title: "拍照异常",
          content: "拍照异常-3211",
          showCancel: !1
        })
      }
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
    i = this, null != e.globalData.SYSTEMINFO && null != e.globalData.SYSTEMINFO || (e.globalData.SYSTEMINFO = wx.getSystemInfoSync());
    e.globalData.SYSTEMINFO.pixelRatio;
    var a = e.globalData.SYSTEMINFO.windowHeight;
    console.log("screen_height:", a), this.setData({
      camera_height: a
    }), this.setData({
      camera_height_inner_01: a - 60
    }), this.setData({
      camera_height_inner_02: a - 30
    }), this.setData({
      camera_height_inner_03: a - 130
    });
    e.globalData.SYSTEMINFO.pixelRatio, a = e.globalData.SYSTEMINFO.screenHeight / 2;
    var t = e.globalData.SYSTEMINFO.screenWidth / 2;
    console.log("canvas screen_height:", a), this.setData({
      canvas_height: a,
      canvas_width: t
    }), this.setData({
      button_left: e.globalData.SYSTEMINFO.windowWidth / 2 - 35
    }), this.setData({
      button_top: e.globalData.SYSTEMINFO.windowHeight - 170
    }), e.globalData.upload_file_id_ocr_01 = null, e.globalData.ocr_name = null, e.globalData.ocr_id = null
  },
  changeflash: function() {
    ++o;
    o % 2 == 0 ? this.setData({
      flash: "on"
    }) : this.setData({
      flash: "off"
    }), console.log(o)
  },
  changedevice: function() {
    ++l;
    l % 2 == 0 ? this.setData({
      device_position: "font"
    }) : this.setData({
      device_position: "back"
    })
  },
  takePhoto: function() {
    null != e.globalData.SYSTEMINFO && null != e.globalData.SYSTEMINFO || (e.globalData.SYSTEMINFO = wx.getSystemInfoSync());
    var o = e.globalData.SYSTEMINFO.model; - 1 != o.indexOf("iPhone 6") || -1 != o.indexOf("iPhone 5") || -1 != o.indexOf("iPhone 4") || o.indexOf("iPhone 3"), wx.createCameraContext().takePhoto({
      quality: "high",
      success: function(o) {
        var l;
        l = o.tempImagePath, console.log("draw_canvas:", l), wx.getSystemInfo({
          success: function(o) {
            var n = o.windowWidth,
              s = o.windowHeight;
            wx.getImageInfo({
              src: l,
              success: function(o) {
                var c = wx.createCanvasContext("id_canvas_img", i);
                console.log("teste 1001 " + n, s), c.drawImage(l, 0, 0, n, s), wx.showLoading({
                  title: "数据处理中...",
                  icon: "loading",
                  duration: 1e4
                }), console.log(22, 20), c.strokeRect(22, 20, n, s / 2), c.draw(), setTimeout((function() {
                  var o;
                  wx.canvasToTempFilePath((t(o = {
                    canvasId: "id_canvas_img",
                    x: 22,
                    y: 20,
                    width: n,
                    height: s / 2,
                    destWidth: n,
                    destHeight: s / 2
                  }, "canvasId", "id_canvas_img"), t(o, "fileType", "jpg"), t(o, "quality", 1), t(o, "success", (function(t) {
                    console.log("tempFilePath success", t);
                    var o = t.tempFilePath;
                    console.log(o), a = t.tempFilePath, c.clearRect(l, 0, 0, n, s), wx.showLoading({
                      title: "识别中..."
                    }), i.setData({
                      show_button: "none"
                    });
                    var r = e.globalData.openid;
                    "AGENT" == e.globalData.register_type.substr(0, 5) && (r = e.globalData.register_type + r), "RENTER" == e.globalData.register_type.substr(0, 6) && (r = e.globalData.register_type + r), "COMPANY" == e.globalData.register_type.substr(0, 7) && (r = e.globalData.register_type + r);
                    var _ = "";
                    "ID_CARD" == e.globalData.cert_type ? _ = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_img_ocr_01" : "PASSPORT" == e.globalData.cert_type && (_ = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_img_ocr_passport"), console.log("cert_type url", e.globalData.cert_type, _);
                    var g = t.tempFilePath;
                    wx.uploadFile({
                      url: _,
                      filePath: g,
                      name: "upload",
                      header: {
                        "Content-Type": "multipart/form-data"
                      },
                      formData: {
                        openId: r
                      },
                      success: function(a) {
                        var t = JSON.parse(a.data);
                        if (console.log(t), i.setData({
                            show_button: ""
                          }), "000000000000" == t[0].resp_code) {
                          console.log("photo_src:", g), "ID_CARD" == e.globalData.cert_type ? (e.globalData.upload_file_id_ocr_01 = t[0].upload_file_id_ocr_01, e.globalData.ocr_name = t[0].name, e.globalData.ocr_id = t[0].id) : "PASSPORT" == e.globalData.cert_type && (e.globalData.upload_file_id_ocr_01 = t[0].file_id_ocr, e.globalData.ocr_name = t[0].pass_port_name, e.globalData.ocr_id = t[0].pass_port_number);
                          var o = i.getOpenerEventChannel(),
                            l = {
                              upload_file_id_ocr_01: t[0].file_id_ocr,
                              ocr_name: t[0].name,
                              ocr_id: t[0].id
                            };
                          o.emit("callback_ocr", {
                            data: l
                          }), setTimeout((function() {
                            wx.hideLoading(), wx.navigateBack()
                          }), 1500)
                        } else wx.hideLoading(), wx.showModal({
                          title: "异常",
                          content: "" + t[0].resp_msg,
                          showCancel: !1
                        })
                      }
                    })
                  })), t(o, "fail", (function(a) {
                    console.log(a)
                  })), o))
                }))
              },
              fail: function(a) {
                wx.showModal({
                  title: "异常",
                  content: "获取拍照信息异常-03119",
                  showCancel: !1
                })
              }
            })
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