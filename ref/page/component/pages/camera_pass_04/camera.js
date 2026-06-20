var a, t = require("../../../../@babel/runtime/helpers/defineProperty"),
  e = getApp(),
  o = 0,
  i = 0,
  n = null;

function l(o) {
  console.log(o), wx.getSystemInfo({
    success: function(i) {
      var l = i.windowWidth,
        s = i.windowHeight;
      wx.getImageInfo({
        src: o,
        success: function(i) {
          var r = wx.createCanvasContext("id_canvas_img", n);
          console.log("teste" + l, s), r.drawImage(o, 0, 0, l, s), wx.showLoading({
            title: "数据处理中...",
            icon: "loading",
            duration: 1e4
          }), console.log(22, 20), r.strokeRect(22, 20, l, s / 2), r.draw(), setTimeout((function() {
            var i;
            wx.canvasToTempFilePath((t(i = {
              canvasId: "id_canvas_img",
              x: 22,
              y: 20,
              width: l,
              height: s / 2,
              destWidth: l,
              destHeight: s / 2
            }, "canvasId", "id_canvas_img"), t(i, "fileType", "jpg"), t(i, "quality", 1), t(i, "success", (function(t) {
              console.log("tempFilePath success", t);
              var i = t.tempFilePath;
              console.log(i), a = t.tempFilePath, r.clearRect(o, 0, 0, l, s), wx.showLoading({
                title: "识别中..."
              }), n.setData({
                show_button: "none"
              });
              var _ = e.globalData.openid;
              "AGENT" == e.globalData.register_type.substr(0, 5) && (_ = e.globalData.register_type + _), "RENTER" == e.globalData.register_type.substr(0, 6) && (_ = e.globalData.register_type + _), "COMPANY" == e.globalData.register_type.substr(0, 7) && (_ = e.globalData.register_type + _);
              var c = "";
              "ID_CARD" == e.globalData.cert_type ? c = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_img_ocr_01" : "PASSPORT" == e.globalData.cert_type && (c = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_img_ocr_passport"), console.log("cert_type url", e.globalData.cert_type, c);
              var p = t.tempFilePath;
              wx.uploadFile({
                url: c,
                filePath: p,
                name: "upload",
                header: {
                  "Content-Type": "multipart/form-data"
                },
                formData: {
                  openId: _
                },
                success: function(a) {
                  var t = JSON.parse(a.data);
                  if (console.log(t), n.setData({
                      show_button: ""
                    }), "000000000000" == t[0].resp_code) {
                    if (console.log("photo_src:", p), "ID_CARD" == e.globalData.cert_type) {
                      e.globalData.upload_file_id_ocr_01 = t[0].upload_file_id_ocr_01, e.globalData.ocr_name = t[0].name, e.globalData.ocr_id = t[0].id;
                      var o = this_page.getOpenerEventChannel(),
                        i = {
                          upload_file_id_ocr_01: t[0].file_id_ocr,
                          ocr_name: t[0].pass_port_name,
                          ocr_id: t[0].pass_port_number
                        };
                      o.emit("callback_ocr", {
                        data: i
                      }), setTimeout((function() {
                        wx.hideLoading(), wx.navigateBack()
                      }), 1500)
                    } else if ("PASSPORT" == e.globalData.cert_type) {
                      e.globalData.upload_file_id_ocr_01 = t[0].file_id_ocr, e.globalData.ocr_name = t[0].pass_port_name, e.globalData.ocr_id = t[0].pass_port_number, e.globalData.birthday = t[0].pass_port_birthday;
                      var l = t[0].pass_port_nationality;
                      wx.request({
                        url: "https://xcx.pinganbaiyun.cn/health_passport/api_001_health_passport/get_nationality",
                        method: "POST",
                        dataType: "json",
                        data: {
                          key_word001: l
                        },
                        success: function(a) {
                          a.data.length >= 2 && (e.globalData.country = a.data[1].three_letter + a.data[1].cn_name);
                          var o = n.getOpenerEventChannel(),
                            i = {
                              upload_file_id_ocr_01: t[0].file_id_ocr,
                              ocr_name: t[0].pass_port_name,
                              ocr_id: t[0].pass_port_number,
                              birthday: t[0].pass_port_birthday,
                              country: a.data[1].three_letter + a.data[1].cn_name
                            };
                          o.emit("callback_ocr", {
                            data: i
                          }), setTimeout((function() {
                            wx.hideLoading(), wx.navigateBack()
                          }), 1500)
                        }
                      })
                    }
                  } else wx.showModal({
                    title: "异常",
                    content: "" + t[0].resp_msg,
                    showCancel: !1
                  })
                }
              })
            })), t(i, "fail", (function(a) {
              console.log(a)
            })), i))
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
      success: function(i) {
        if (console.log(i), i.tempFilePaths.length > 0) {
          wx.showLoading({
            title: "loading..."
          });
          var l = {
              open_id: t
            },
            s = i.tempFilePaths[0];
          wx.uploadFile({
            url: o,
            filePath: s,
            name: "upload",
            header: {
              "Content-Type": "multipart/form-data"
            },
            formData: l,
            success: function(t) {
              var o = JSON.parse(t.data);
              if (console.log(o), "000000000000" == o[0].resp_code) {
                o = JSON.parse(t.data);
                if (console.log(o), wx.hideLoading(), n.setData({
                    show_button: ""
                  }), "ID_CARD" == e.globalData.cert_type) {
                  e.globalData.upload_file_id_ocr_01 = o[0].upload_file_id_ocr_01, e.globalData.ocr_name = o[0].name, e.globalData.ocr_id = o[0].id;
                  var i = a.getOpenerEventChannel(),
                    l = {
                      upload_file_id_ocr_01: o[0].file_id_ocr,
                      ocr_name: o[0].pass_port_name,
                      ocr_id: o[0].pass_port_number
                    };
                  i.emit("callback_ocr", {
                    data: l
                  }), setTimeout((function() {
                    wx.hideLoading(), wx.navigateBack()
                  }), 1500)
                } else if ("PASSPORT" == e.globalData.cert_type) {
                  e.globalData.upload_file_id_ocr_01 = o[0].file_id_ocr, e.globalData.ocr_name = o[0].pass_port_name, e.globalData.ocr_id = o[0].pass_port_number, e.globalData.birthday = o[0].pass_port_birthday;
                  var s = o[0].pass_port_surname,
                    r = o[0].pass_port_given_name,
                    _ = o[0].pass_port_nationality;
                  wx.request({
                    url: "https://xcx.pinganbaiyun.cn/health_passport/api_001_health_passport/get_nationality",
                    method: "POST",
                    dataType: "json",
                    data: {
                      key_word001: _
                    },
                    success: function(t) {
                      t.data.length >= 2 && (e.globalData.country = t.data[1].three_letter + t.data[1].cn_name);
                      var i = a.getOpenerEventChannel(),
                        n = {
                          upload_file_id_ocr_01: o[0].file_id_ocr,
                          ocr_name: o[0].pass_port_name,
                          ocr_id: o[0].pass_port_number,
                          birthday: o[0].pass_port_birthday,
                          country: t.data[1].three_letter + t.data[1].cn_name,
                          pass_port_surname: s,
                          pass_port_given_name: r
                        };
                      i.emit("callback_ocr", {
                        data: n
                      }), setTimeout((function() {
                        wx.hideLoading(), wx.navigateBack()
                      }), 1500)
                    }
                  })
                }
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
    n = this;
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
    ++i;
    i % 2 == 0 ? this.setData({
      device_position: "font"
    }) : this.setData({
      device_position: "back"
    })
  },
  takePhoto: function() {
    var a = e.globalData.SYSTEMINFO.model; - 1 != a.indexOf("iPhone 6") || -1 != a.indexOf("iPhone 5") || -1 != a.indexOf("iPhone 4") || a.indexOf("iPhone 3"), wx.createCameraContext().takePhoto({
      quality: "high",
      success: function(a) {
        l(a.tempImagePath)
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