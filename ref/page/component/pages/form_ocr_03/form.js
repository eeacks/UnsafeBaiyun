var e, t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../../../util/regenerator-runtime/runtime")) && e.__esModule;
var o, r = require("../../../../util/util.js"),
  n = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: "",
    flag: 0,
    checked_flash: !1,
    checked_number: !1,
    open_id_post: "",
    private_verify_code: ""
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
  onLoad: function(e) {
    var t = wx.getStorageSync("private_verify_code");
    "" != t && null != t && null != t && (this.data.private_verify_code = t), "ID_CARD" == n.globalData.cert_type && this.setData({
      flag: 0
    }), "PASSPORT" == n.globalData.cert_type && this.setData({
      flag: 1
    }), "微警认证" == n.globalData.verify_type ? this.setData({
      checked_flash: !0,
      checked_number: !1
    }) : "腾讯认证" == n.globalData.verify_type && this.setData({
      checked_flash: !1,
      checked_number: !0
    }), "HK_MACAO_TW" == n.globalData.cert_type && this.setData({
      flag: 1
    })
  },
  onShow: function() {
    console.log("onShow"), "HK_MACAO_TW" == n.globalData.cert_type && this.setData({
      flag: 1
    })
  },
  onUnload: function() {
    console.log("onUnload")
  },
  startFacialRecognitionVerify: function() {
    var e = this;
    if (null != n.globalData.XM)
      if (null != n.globalData.ZJHM)
        if (null != n.globalData.mobile_phone) {
          var t = n.globalData.openid;
          "AGENT" == n.globalData.register_type.substr(0, 5) && (t = n.globalData.register_type + t), "RENTER" == n.globalData.register_type.substr(0, 6) && (t = n.globalData.register_type + t), "COMPANY" == n.globalData.register_type.substr(0, 7) && (t = n.globalData.register_type + t), e.setData({
            open_id_post: t
          }), wx.showModal({
            title: "姓名【" + n.globalData.XM + "】?",
            content: "您的姓名:" + n.globalData.XM + " 身份证:" + n.globalData.ZJHM + " ?",
            showCancel: !0,
            cancelText: "返回修改",
            success: function(a) {
              if (a.confirm)
                if ("ID_CARD" == n.globalData.cert_type) e.tencent_face_verify(t);
                else {
                  if ("PASSPORT" != n.globalData.cert_type) return n.globalData.cert_type, void e.police_verify();
                  e.start_face_check()
                }
              else wx.redirectTo({
                url: "../form_ocr_01/form"
              })
            }
          })
        } else wx.showModal({
          title: "异常",
          content: "您提交的手机号码为空,请重新申请",
          showCancel: !1
        });
    else wx.showModal({
      title: "异常",
      content: "您提交的证件号码为空,请重新申请",
      showCancel: !1
    });
    else wx.showModal({
      title: "异常",
      content: "您提交的姓名为空,请重新申请",
      showCancel: !1
    })
  },
  tencent_face_verify: function(e) {
    var o, c, s = this,
      i = 1;
    "微警认证" != n.globalData.verify_type ? ("读数识别" == n.globalData.verify_type && (i = 0), i = 1, wx.startFacialRecognitionVerify({
      name: n.globalData.XM,
      idCardNumber: n.globalData.ZJHM,
      mobile: n.globalData.mobile_phone,
      checkAliveType: i,
      success: (c = a(t().mark((function o(c) {
        var i, l, _, u, d, f;
        return t().wrap((function(o) {
          for (;;) switch (o.prev = o.next) {
            case 0:
              if (console.log("success_startFacialRecognitionVerify", c), "0" != c.errCode) {
                o.next = 13;
                break
              }
              if ("" != c.verifyResult && null != c.verifyResult && null != c.verifyResult) {
                o.next = 5;
                break
              }
              return wx.showModal({
                title: "人脸核身数据异常,请再次核验",
                content: f,
                showCancel: !1,
                success: function() {}
              }), o.abrupt("return");
            case 5:
              return n.globalData.face_verify_result = c.verifyResult, i = c.verifyResult, l = c.errCode, _ = c.errMsg, wx.showLoading({
                title: "正在校验数据..."
              }), u = {
                openId: e,
                tencent_verify_result_string: i,
                error_code: l,
                error_msg: _
              }, console.log(u), d = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_tencent_verify_result_string", wx.request({
                url: d,
                method: "POST",
                dataType: "json",
                data: u,
                success: function(t) {
                  if (wx.hideLoading(), "000000000000" == t.data[0].resp_code) {
                    var a = s.check_should_send_verify_code(),
                      o = "识别成功,将发送短信验证码";
                    0 == a ? (o = "识别成功,将进行下一步操作", s.send_verify_result(e, 1, 2)) : s.send_verify_result(e, 1, 1), wx.showModal({
                      title: "识别成功",
                      content: o,
                      showCancel: !1,
                      success: function() {
                        n.globalData.page_verify_code_msg = "", 0 == a ? wx.navigateTo({
                          url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                        }) : wx.navigateTo({
                          url: "../form_ocr_04/form"
                        })
                      }
                    })
                  } else console.log("upload_tencent_verify_result_string focr_03 err:", t), wx.showModal({
                    title: "异常",
                    content: "校验数据异常,请再次核验(003)," + t.data[0].resp_code + t.data[0].resp_msg,
                    showCancel: !1,
                    success: function() {}
                  })
                },
                fail: function(e) {
                  wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                    title: "异常",
                    content: "校验数据异常-0168," + e.errMsg,
                    showCancel: !1
                  })
                }
              }), o.abrupt("return");
            case 13:
              if (console.log("fail_startFacialRecognitionVerify 1005:", c), f = c.errCode + c.errMsg, -1 == c.errMsg.indexOf("not support")) {
                o.next = 20;
                break
              }
              return f = "您的微信版本不支持人脸识别,请升级微信版本或使用其他手机1005", o.next = 19, r.wx_show_modal("识别异常", f, !1);
            case 19:
              return o.abrupt("return");
            case 20:
              i = c.verifyResult, l = c.errCode, _ = c.errMsg, u = {
                openId: e,
                tencent_verify_result_string: i,
                error_code: l,
                error_msg: _
              }, console.log("upload_tencent_verify_result_error_string:", u), d = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_tencent_verify_result_error_string", wx.request({
                url: d,
                method: "POST",
                dataType: "json",
                data: u,
                success: function() {
                  var o = a(t().mark((function a(o) {
                    var r, c;
                    return t().wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          if (wx.hideLoading(), "000000000000" != o.data[0].resp_code) {
                            t.next = 8;
                            break
                          }
                          r = s.check_should_send_verify_code(), c = "系统已识别处理,将发送短信验证码", 0 == r && (c = "系统已识别处理,将进行下一步操作"), wx.showModal({
                            title: "系统已识别处理",
                            content: c,
                            showCancel: !1,
                            success: function() {
                              n.globalData.page_verify_code_msg = "", 0 == r ? (s.send_verify_result(e, 1, 2), wx.navigateTo({
                                url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                              })) : (s.send_verify_result(e, 1, 1), wx.navigateTo({
                                url: "../form_ocr_04/form"
                              }))
                            }
                          }), t.next = 18;
                          break;
                        case 8:
                          console.log("upload_tencent_verify_result_error_string form_ocr_03 err:", o), t.next = 17;
                          break;
                        case 13:
                          if (1 != t.sent.confirm) {
                            t.next = 17;
                            break
                          }
                          return wx.navigateTo({
                            url: "../cloud_shield_face_check/form"
                          }), t.abrupt("return");
                        case 17:
                          return t.abrupt("return");
                        case 18:
                        case "end":
                          return t.stop()
                      }
                    }), a)
                  })));
                  return function(e) {
                    return o.apply(this, arguments)
                  }
                }(),
                fail: function(e) {
                  wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                    title: "异常",
                    content: "校验数据异常-0168," + e.errMsg,
                    showCancel: !1
                  })
                }
              });
            case 24:
            case "end":
              return o.stop()
          }
        }), o)
      }))), function(e) {
        return c.apply(this, arguments)
      }),
      fail: (o = a(t().mark((function o(c) {
        var i, l, _, u;
        return t().wrap((function(o) {
          for (;;) switch (o.prev = o.next) {
            case 0:
              if (console.log("fail_startFacialRecognitionVerify 1005:", c), c.errCode, c.errMsg, -1 == c.errMsg.indexOf("not support")) {
                o.next = 7;
                break
              }
              return o.next = 6, r.wx_show_modal("识别异常", "您的微信版本不支持人脸识别,请升级微信版本或使用其他手机1005", !1);
            case 6:
              return o.abrupt("return");
            case 7:
              i = c.verifyResult, l = c.errCode, _ = c.errMsg, u = {
                openId: e,
                tencent_verify_result_string: i,
                error_code: l,
                error_msg: _
              }, console.log("upload_tencent_verify_result_error_string:", u), wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_tencent_verify_result_error_string",
                method: "POST",
                dataType: "json",
                data: u,
                success: function() {
                  var o = a(t().mark((function a(o) {
                    var r, c;
                    return t().wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          if (wx.hideLoading(), "000000000000" != o.data[0].resp_code) {
                            t.next = 8;
                            break
                          }
                          r = s.check_should_send_verify_code(), c = "系统已识别处理,将发送短信验证码", 0 == r && (c = "系统已识别处理,将进行下一步操作"), wx.showModal({
                            title: "系统已识别处理",
                            content: c,
                            showCancel: !1,
                            success: function() {
                              n.globalData.page_verify_code_msg = "", 0 == r ? (s.send_verify_result(e, 1, 2), wx.navigateTo({
                                url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                              })) : (s.send_verify_result(e, 1, 1), wx.navigateTo({
                                url: "../form_ocr_04/form"
                              }))
                            }
                          }), t.next = 18;
                          break;
                        case 8:
                          console.log("err:", o), t.next = 17;
                          break;
                        case 13:
                          if (1 != t.sent.confirm) {
                            t.next = 17;
                            break
                          }
                          return s.start_face_check(), t.abrupt("return");
                        case 17:
                          return t.abrupt("return");
                        case 18:
                        case "end":
                          return t.stop()
                      }
                    }), a)
                  })));
                  return function(e) {
                    return o.apply(this, arguments)
                  }
                }(),
                fail: function(e) {
                  wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                    title: "异常",
                    content: "校验数据异常-0168," + e.errMsg,
                    showCancel: !1
                  })
                }
              });
            case 11:
            case "end":
              return o.stop()
          }
        }), o)
      }))), function(e) {
        return o.apply(this, arguments)
      })
    })) : s.police_verify()
  },
  radio_change: function(e) {
    var t = n;
    t.globalData.verify_type = e.detail.value, console.log("this_app.globalData.verify_type:", t.globalData.verify_type)
  },
  start_face_check: function() {
    var e = this,
      t = "/page/page_007_face_check/page_007_face_check?name=" + n.globalData.XM + "&id_card=" + n.globalData.ZJHM + "&cert_type=" + n.globalData.cert_type;
    console.log("url:", t), t = encodeURI(t), wx.navigateTo({
      url: t,
      events: {
        callback_face_check: function(t) {
          console.log(t), e.callback_face_check(t)
        },
        someEvent: function(e) {
          console.log("someEvent", e)
        }
      }
    })
  },
  callback_face_check: function(e) {
    console.log("callback_face_check");
    if ("success" == e.data) {
      var t = this.data.open_id_post,
        a = this.check_should_send_verify_code(),
        o = "识别成功,将发送短信验证码.success send sms verify code";
      0 == a ? (o = "识别成功,将进行下一步操作.success,the next step will be taken", this.send_verify_result(t, 1, 2)) : this.send_verify_result(t, 1, 1), wx.showLoading({
        title: "请稍等...",
        mask: !0
      }), setTimeout((function() {
        wx.hideLoading(), wx.showModal({
          title: "识别成功 success",
          content: o,
          showCancel: !1,
          success: function() {
            n.globalData.page_verify_code_msg = "", 0 == a ? wx.navigateTo({
              url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
            }) : wx.navigateTo({
              url: "../form_ocr_04/form"
            })
          }
        })
      }), 3e3)
    } else wx.showModal({
      title: "核验未成功",
      content: "",
      showCancel: !1
    })
  },
  police_verify: (o = a(t().mark((function e() {
    var a, o, c, s, i, l, _, u, d;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return a = this, o = "", e.prev = 2, c = JSON.stringify({
            name: n.globalData.XM,
            id_card: n.globalData.ZJHM,
            openId: n.globalData.openid
          }), "HK_MACAO_TW" == n.globalData.cert_type && (s = wx.getStorageSync("HK_MACAO_TW_sex"), i = wx.getStorageSync("HK_MACAO_TW_expired_date"), l = wx.getStorageSync("HK_MACAO_TW_birthday"), c = JSON.stringify({
            name: n.globalData.XM,
            id_card: n.globalData.ZJHM,
            openId: n.globalData.openid,
            cert_type: n.globalData.cert_type,
            sex: s,
            expired_date: i,
            birthday: l
          })), wx.showLoading({
            title: "请稍等..."
          }), e.next = 9, r.wx_request("https://xcx.pinganbaiyun.cn/p_021_health_passport/api_006_img_token/sv_003_get_police_verify_token", c);
        case 9:
          if (_ = e.sent, wx.hideLoading(), console.log("sv_003_get_police_verify_token", _), "000000000000" == _.data[0].resp_code) {
            e.next = 15;
            break
          }
          return wx.showModal({
            title: "提示",
            content: _.data[0].resp_msg + _.data[0].resp_code,
            showCancel: !1
          }), e.abrupt("return");
        case 15:
          o = _.data[0].cert_token, n.globalData.certToken = o, e.next = 23;
          break;
        case 19:
          return e.prev = 19, e.t0 = e.catch(2), wx.showModal({
            title: "微警认证失败",
            content: e.t0,
            showCancel: !1,
            success: function() {}
          }), e.abrupt("return");
        case 23:
          u = a.check_should_send_verify_code(), n.globalData.should_send = u, n.globalData.private_verify_code = a.data.private_verify_code, d = {
            certToken: o
          }, console.log("extraData", d), wx.navigateToMiniProgram({
            appId: "wx318893774c9bfdd2",
            path: "pages/thirdCheck/thirdCheck",
            extraData: d,
            envVersion: "release",
            success: function(e) {
              console.log("police_verify success", e)
            },
            fail: function(e) {
              console.log("police_verify fail", e), wx.showModal({
                title: "微警认证失败",
                content: e,
                showCancel: !1,
                success: function() {}
              })
            }
          });
        case 29:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [2, 19]
    ])
  }))), function() {
    return o.apply(this, arguments)
  }),
  check_should_send_verify_code: function() {
    var e = wx.getStorageSync("private_verify_code");
    return "" != n.globalData.mobile_phone && null != n.globalData.mobile_phone && null != n.globalData.mobile_phone && "" != n.globalData.purePhoneNumber && null != n.globalData.purePhoneNumber && null != n.globalData.purePhoneNumber && n.globalData.mobile_phone != n.globalData.purePhoneNumber && (e = ""), "" == e || null == e || null == e
  },
  send_verify_result: function(e, t, a) {
    2 == a ? wx.showLoading({
      title: "正在操作...",
      mask: !0
    }) : wx.showLoading({
      title: "正在发送短信验证码...",
      mask: !0
    });
    var o = {
      openId: e,
      verify_result: t
    };
    2 == a && (o.private_verify_code = wx.getStorageSync("private_verify_code")), console.log("send_verify_result form_ocr_03", o);
    wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/send_verify_result",
      method: "POST",
      dataType: "json",
      data: o,
      header: {
        session_key: n.globalData.session_key_token
      },
      success: function(e) {
        if (wx.hideLoading(), "000000000000" == e.data[0].resp_code);
        else if ("-632198" == e.data[0].resp_code) n.globalData.purePhoneNumber = "", wx.removeStorageSync("private_verify_code"), wx.showModal({
          title: "提示",
          content: e.data[0].resp_msg,
          showCancel: !1,
          success: function(e) {
            wx.reLaunch({
              url: "../form_ocr_01/form"
            })
          }
        });
        else if ("-32198" == e.data[0].resp_code) wx.showModal({
          title: "提示",
          content: "本次注册已超时,请重新注册",
          showCancel: !1,
          success: function(e) {
            wx.navigateTo({
              url: "../../../index/index"
            })
          }
        });
        else if ("000000000003" == e.data[0].resp_code) wx.showModal({
          title: "提示",
          content: "您已注册",
          showCancel: !1,
          success: function(e) {
            wx.navigateTo({
              url: "../../../index/index"
            })
          }
        });
        else if ("000000000004" == e.data[0].resp_code) {
          var t = "验证成功,已发送短信验证码";
          2 == a && (t = "已验证成功"), wx.showModal({
            title: "提示",
            content: t,
            showCancel: !1,
            success: function(e) {
              2 == a ? wx.navigateTo({
                url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
              }) : wx.navigateTo({
                url: "../form_ocr_04/form"
              })
            }
          })
        } else console.log("err:", e), wx.showModal({
          title: "异常",
          content: "数据校验失败," + e.data[0].resp_code + e.data[0].resp_msg,
          showCancel: !1
        })
      },
      fail: function(e) {
        wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
          title: "异常",
          content: "发送短信验证码失败-0168," + e.errMsg,
          showCancel: !1
        })
      }
    })
  },
  end_method: function() {}
});