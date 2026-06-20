var a = getApp();
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
    a.globalData.SYSTEMINFO.pixelRatio;
    var e = a.globalData.SYSTEMINFO.windowHeight;
    console.log("screen_height:", e), this.setData({
      camera_height: e
    }), this.setData({
      camera_height_inner_01: 410
    }), this.setData({
      camera_height_inner_02: 490
    }), this.setData({
      camera_height_inner_04: e - 80 - 410
    }), this.setData({
      camera_height_inner_03: e - 100
    });
    a.globalData.SYSTEMINFO.pixelRatio, e = a.globalData.SYSTEMINFO.windowHeight / 4;
    var o = a.globalData.SYSTEMINFO.screenWidth / 4;
    console.log("canvas screen_height:", e), this.setData({
      canvas_height: e,
      canvas_width: o
    }), this.setData({
      button_left: a.globalData.SYSTEMINFO.windowWidth / 2 - 35
    }), this.setData({
      button_top: a.globalData.SYSTEMINFO.windowHeight - 170
    }), a.globalData.XM = null, a.globalData.ZJHM = null, a.globalData.mobile_phone = null
  },
  take_photo: function() {
    var e = this,
      o = "low",
      t = a.globalData.SYSTEMINFO.model; - 1 == t.indexOf("iPhone 6") && -1 == t.indexOf("iPhone 5") && -1 == t.indexOf("iPhone 4") && -1 == t.indexOf("iPhone 3") || (o = "low"), wx.createCameraContext().takePhoto({
      quality: o,
      success: function(o) {
        var t = a.globalData.openid;
        "AGENT" == a.globalData.register_type.substr(0, 5) && (t = a.globalData.register_type + t), "RENTER" == a.globalData.register_type.substr(0, 6) && (t = a.globalData.register_type + t), "COMPANY" == a.globalData.register_type.substr(0, 7) && (t = a.globalData.register_type + t);
        var n = {
          XM: a.globalData.XM_iphone_ocr_03,
          ZJHM: a.globalData.ZJHM_iphone_ocr_03,
          LXDH: a.globalData.LXDH_iphone_ocr_03,
          WXSJ: a.globalData.purePhoneNumber,
          GPS: JSON.stringify(a.globalData.location_info),
          USERINFO: JSON.stringify(a.globalData.USERINFO_post),
          SYSTEMINFO: JSON.stringify(a.globalData.SYSTEMINFO),
          openId: t,
          upload_file_id_ocr_01: a.globalData.upload_file_id_ocr_01,
          remark: a.globalData.remark_iphone_ocr_03
        };
        console.log(n), e.setData({
          show_button: "none"
        }), wx.showLoading({
          title: "识别中..."
        });
        var l = o.tempImagePath;
        wx.uploadFile({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_img_ocr_02",
          filePath: l,
          name: "upload",
          header: {
            "Content-Type": "multipart/form-data"
          },
          formData: n,
          success: function(n) {
            var l = JSON.parse(n.data);
            if (console.log(l), wx.hideLoading(), e.setData({
                show_button: ""
              }), "000000000000" == l[0].resp_code) {
              console.log("提交成功"), a.globalData.XM = a.globalData.XM_iphone_ocr_03, a.globalData.ZJHM = a.globalData.ZJHM_iphone_ocr_03, a.globalData.mobile_phone = a.globalData.LXDH_iphone_ocr_03;
              var i = 1;
              "闪光识别" == a.globalData.verify_type ? i = 1 : "读数识别" == a.globalData.verify_type && (i = 0), wx.startFacialRecognitionVerify({
                name: a.globalData.XM,
                idCardNumber: a.globalData.ZJHM,
                mobile: a.globalData.mobile_phone,
                checkAliveType: i,
                success: function(e) {
                  if ("0" == e.errCode) return function(a, e) {
                    wx.showLoading({
                      title: "正在发送短信验证码..."
                    });
                    var o = {
                      openId: a,
                      verify_result: e
                    };
                    wx.request({
                      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/send_verify_result",
                      method: "POST",
                      dataType: "json",
                      data: o,
                      success: function(a) {
                        wx.hideLoading(), "000000000000" == a.data[0].resp_code || ("-32198" == a.data[0].resp_code ? wx.showModal({
                          title: "提示",
                          content: "本次注册已超时,请重新注册",
                          showCancel: !1,
                          success: function(a) {
                            wx.navigateTo({
                              url: "../../../index/index"
                            })
                          }
                        }) : "000000000003" == a.data[0].resp_code ? wx.showModal({
                          title: "提示",
                          content: "您已注册",
                          showCancel: !1,
                          success: function(a) {
                            wx.navigateTo({
                              url: "../../../index/index"
                            })
                          }
                        }) : "000000000004" == a.data[0].resp_code ? wx.showModal({
                          title: "提示",
                          content: "验证成功,已发送短信验证码",
                          showCancel: !1,
                          success: function(a) {
                            wx.navigateTo({
                              url: "../form_ocr_04/form"
                            })
                          }
                        }) : (console.log("err:", a), wx.showModal({
                          title: "异常",
                          content: "发送短信验证码失败," + a.data[0].resp_code + a.data[0].resp_msg,
                          showCancel: !1
                        })))
                      },
                      fail: function(a) {
                        wx.hideLoading(), console.log("提交失败，", a), wx.showModal({
                          title: "异常",
                          content: "发送短信验证码失败-0168," + a.errMsg,
                          showCancel: !1
                        })
                      }
                    })
                  }(t, 1), void wx.showModal({
                    title: "识别成功",
                    content: "识别成功,将发送短信验证码",
                    showCancel: !1,
                    success: function() {
                      a.globalData.page_verify_code_msg = "", a.globalData.face_verify_result = e.verifyResult, wx.navigateTo({
                        url: "../form_ocr_04/form"
                      })
                    }
                  });
                  var o = e.errCode + e.errMsg;
                  return -1 != e.errMsg.indexOf("not support") && (o = "您的微信版本不支持人脸识别,请升级微信版本或使用其他手机"), void wx.showModal({
                    title: "识别失败",
                    content: o,
                    showCancel: !1,
                    success: function() {}
                  })
                },
                fail: function(a) {
                  var e = a.errCode + a.errMsg; - 1 != a.errMsg.indexOf("not support") && (e = "您的微信版本不支持人脸识别,请升级微信版本或使用其他手机"), wx.showModal({
                    title: "识别失败",
                    content: e,
                    showCancel: !1,
                    success: function() {}
                  })
                }
              })
            } else if ("-000000001669" == l[0].resp_code) {
              console.log("提交失败");
              var r = o.data[0].register_token;
              "" != r && null != r && null != r && wx.setStorageSync("register_token", r), a.globalData.XM = a.globalData.XM_iphone_ocr_03, a.globalData.ZJHM = a.globalData.ZJHM_iphone_ocr_03, a.globalData.mobile_phone = a.globalData.LXDH_iphone_ocr_03, wx.navigateTo({
                url: "../form_ocr_03/form"
              })
            } else "-000000001688" == l[0].resp_code ? (console.log("提交失败"), a.globalData.page_verify_code_msg = "您已通过生物识别的人脸核身,请输入收到的短信验证码", wx.showModal({
              title: "提示",
              content: "您已通过生物识别的人脸核身,请输入收到的短信验证码",
              showCancel: !1,
              success: function(a) {
                wx.navigateTo({
                  url: "../form_ocr_04/form"
                })
              }
            })) : "000000000003" == l[0].resp_code ? wx.showModal({
              title: "提示",
              content: "您已注册",
              showCancel: !1,
              success: function(a) {
                wx.navigateTo({
                  url: "../../../index/index"
                })
              }
            }) : (console.log("err:", l), wx.showModal({
              title: "异常",
              content: "验证失败-0169," + l[0].resp_code + l[0].resp_msg,
              showCancel: !1
            }))
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