var e, o = require("../../@babel/runtime/helpers/typeof"),
  a = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../util/regenerator-runtime/runtime")) && e.__esModule;
var t, s, i = require("../../util/util.js"),
  c = require("../../util/rsa_encry.js"),
  l = getApp();
Page({
  data: {
    currentMode: "",
    toggleModeVisible: !1,
    motto: "平安码丨平安白云",
    userInfo: {},
    hasUserInfo: !1,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    hide_register: !0,
    hide_qrcode: !0,
    hide_mode: !0,
    hide_driver_license: !0,
    hide_drop: !0,
    hide_index: !0,
    hide_personal_information: !0,
    button_type_my_info: "default",
    msg: "",
    show_ask_send_msg: !1,
    buttons_send_msg: [{
      type: "default",
      className: "",
      text: "取消",
      value: 0
    }, {
      type: "primary",
      className: "",
      text: "我要订阅",
      value: 1
    }],
    nick_name: "云小盾",
    avatar: "https://qv1.pinganbaiyun.cn/img/img_13202_0_6.png"
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: "../component/pages/form/form"
    })
  },
  onLoad: function() {
    wx.removeStorageSync("agent_entry"), wx.removeStorageSync("rent_house_owner_id_card"), wx.removeStorageSync("admin_phone"), wx.removeStorageSync("busi_type"), wx.removeStorageSync("cry_type"), wx.removeStorageSync("show_type"), wx.removeStorageSync("encry_id")
  },
  onShow: (s = n(a().mark((function e() {
    var o, n, t, s, c, r, d, g, _;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (o = this, n = wx.getStorageSync("avatar"), t = wx.getStorageSync("nick_name"), s = wx.getStorageSync("nick_name_last_date"), c = wx.getStorageSync("ask_nick_name_today"), null == t || null == t || "" == t || "微信用户" == t) {
            e.next = 12;
            break
          }
          o.setData({
            avatar: n
          }), o.setData({
            nick_name: t
          }), o.setData({
            login_tip: "我的信息"
          }), e.next = 26;
          break;
        case 12:
          return e.prev = 12, r = {
            openId: l.globalData.openid
          }, e.next = 17, i.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_01/get_wx_user_info", r);
        case 17:
          "" == (d = e.sent).data[0].user_info ? (o.setData({
            sho_login_flag: 0
          }), o.setData({
            nick_name: "云小盾",
            avatar: "https://qv1.pinganbaiyun.cn/img/img_13202_0_6.png",
            login_tip: "我的信息"
          })) : (g = JSON.parse(d.data[0].user_info), n = g.avatarUrl, "微信用户" != (t = g.nickName) ? (wx.setStorageSync("avatar", n), wx.setStorageSync("nick_name", t), o.setData({
            nick_name: t,
            avatar: n,
            login_tip: "我的信息"
          })) : (o.setData({
            sho_login_flag: 0
          }), o.setData({
            nick_name: "云小盾",
            avatar: "https://qv1.pinganbaiyun.cn/img/img_13202_0_6.png",
            login_tip: "我的信息"
          }))), e.next = 26;
          break;
        case 21:
          e.prev = 21, e.t0 = e.catch(12), console.log("获取保存的用户信息 e", e.t0), o.setData({
            sho_login_flag: 0
          }), o.setData({
            nick_name: "云小盾",
            avatar: "https://qv1.pinganbaiyun.cn/img/img_13202_0_6.png",
            login_tip: "我的信息"
          });
        case 26:
          if (_ = (new Date).getTime(), null == c || null == c || "" == c) {
            e.next = 39;
            break
          }
          if (!(_ - c > 864e5)) {
            e.next = 36;
            break
          }
          if (!(_ - s > 2592e6)) {
            e.next = 33;
            break
          }
          return e.abrupt("return");
        case 33:
        case 34:
          e.next = 37;
          break;
        case 36:
        case 37:
          e.next = 40;
          break;
        case 39:
          return e.abrupt("return");
        case 40:
          o = this, wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), wx.login({
            success: function(e) {
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
                method: "POST",
                dataType: "json",
                data: {
                  code: e.code
                },
                success: function(e) {
                  if (console.log("拉取login", e), "000000000000" == e.data[0].resp_code) {
                    l.globalData.openid = e.data[1].openid, l.globalData.session_key = e.data[1].session_key;
                    var a = {
                      openId: l.globalData.openid,
                      oper_type: "MY_QRCODE"
                    };
                    wx.request({
                      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                      method: "POST",
                      dataType: "json",
                      data: a,
                      success: function(e) {
                        return wx.hideLoading(), console.log("检查进度结果", e), "000000000001" == e.data[0].resp_code || "000000000002" == e.data[0].resp_code ? (o.setData({
                          hide_register: !1,
                          hide_qrcode: !0,
                          hide_drop: !0,
                          hide_index: !1,
                          hide_personal_information: !0,
                          hide_driver_license: !0,
                          button_type_my_info: "default"
                        }), o.setData({
                          msg: "体验生成我的凭证，需要您实名注册"
                        }), void o.setData({
                          msg_go_index: "暂不注册 继续浏览"
                        })) : "000000000003" == e.data[0].resp_code ? void o.setData({
                          hide_register: !0,
                          hide_qrcode: !1,
                          hide_drop: !1,
                          hide_index: !1,
                          hide_personal_information: !1,
                          hide_driver_license: !1,
                          button_type_my_info: "primary",
                          hide_mode: !1,
                          msg: "",
                          msg_go_index: "返回首页"
                        }) : "000000000004" == e.data[0].resp_code ? void o.setData({
                          hide_register: !1,
                          hide_qrcode: !0,
                          hide_drop: !0,
                          hide_index: !1,
                          hide_personal_information: !0,
                          hide_driver_license: !0,
                          button_type_my_info: "primary",
                          msg: "体验生成我的凭证，需要您实名注册",
                          msg_go_index: "暂不注册 继续浏览"
                        }) : (o.setData({
                          hide_register: !1
                        }), o.setData({
                          hide_qrcode: !0
                        }), o.setData({
                          hide_drop: !0
                        }), o.setData({
                          hide_index: !1
                        }), o.setData({
                          hide_driver_license: !0
                        }), o.setData({
                          button_type_my_info: "default"
                        }), o.setData({
                          msg: "体验生成我的凭证，需要您实名注册"
                        }), void o.setData({
                          msg_go_index: "暂不注册 继续浏览"
                        }))
                      },
                      fail: function(e) {
                        console.log("查询进度异常,-0032", e), wx.showModal({
                          title: "提示",
                          content: "查询进度异常," + e.errMsg,
                          showCancel: !1
                        })
                      }
                    })
                  } else wx.showModal({
                    title: "服务异常",
                    content: "获取用户信息失败-03166,程序退出," + e.data[0].resp_code + e.data[0].resp_msg,
                    showCancel: !1
                  })
                },
                fail: function(e) {
                  console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
                    title: "服务异常",
                    content: "获取用户信息失败-03168,程序退出," + e.errMsg,
                    showCancel: !1
                  })
                }
              })
            },
            fail: function(e) {
              console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "服务异常",
                content: "获取用户信息失败-03169,程序退出," + e,
                showCancel: !1
              })
            }
          });
        case 44:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [12, 21]
    ])
  }))), function() {
    return s.apply(this, arguments)
  }),
  bindtap_update_avatar: function() {
    wx.showLoading({
      title: "请稍等...",
      mask: !0
    }), wx.login({
      success: function(e) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: e.code
          },
          success: function(e) {
            if (console.log("拉取login", e), "000000000000" == e.data[0].resp_code) {
              l.globalData.openid = e.data[1].openid, l.globalData.session_key = e.data[1].session_key;
              var o = {
                openId: l.globalData.openid,
                oper_type: "INDEX"
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: o,
                success: function(e) {
                  if (wx.hideLoading(), console.log("检查进度结果", e), "000000000003" == e.data[0].resp_code) {
                    var o = e.data[0].access_token;
                    return l.globalData.access_token = o, void wx.navigateTo({
                      url: "../third_part/pages/avatar/form"
                    })
                  }
                  return l.globalData.back_url = "INDEX", void wx.showModal({
                    title: "平安码丨平安白云",
                    content: "体验更新头像功能，需要您实名注册。",
                    showCancel: !0,
                    cancelText: "暂不注册",
                    confirmText: "现在注册",
                    success: function(e) {
                      1 == e.confirm && wx.navigateTo({
                        url: "../../../index/index"
                      })
                    }
                  })
                },
                fail: function(e) {
                  wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-1," + e.errMsg,
                    showCancel: !1
                  })
                }
              })
            } else wx.hideLoading(), wx.showModal({
              title: "提示",
              content: "获取状态异常-3:" + e.data[0].resp_code + e.data[0].resp_msg,
              showCancel: !1
            })
          },
          fail: function(e) {
            wx.hideLoading(), console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + e.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(e) {
        wx.hideLoading(), console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
          title: "提示",
          content: "获取状态异常," + e.errMsg,
          showCancel: !1
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log("getUserInfo...."), console.log(e), l.globalData.userInfo = e.detail.userInfo, this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: !0
    })
  },
  apply: function() {
    console.log("apply...."), wx.navigateTo({
      url: "../component/pages/form/form"
    })
  },
  use_barcode_manual: function() {
    wx.login({
      success: function(e) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: e.code
          },
          success: function(e) {
            if (console.log("拉取login", e), "000000000000" == e.data[0].resp_code) {
              l.globalData.openid = e.data[1].openid, l.globalData.session_key = e.data[1].session_key;
              var o = {
                openId: l.globalData.openid
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: o,
                success: function(e) {
                  if (console.log("检查进度结果", e), "000000000003" == e.data[0].resp_code) {
                    var o;
                    if (-1 != wx.getSystemInfoSync().model.indexOf("iPhone")) return void wx.navigateTo({
                      url: "../component/pages/camera_barcode/camera"
                    });
                    wx.showModal({
                      title: "提示",
                      content: "请拍照刷脸打开二维码",
                      showCancel: !1,
                      success: function() {
                        return o = ["camera"], void wx.chooseImage({
                          count: 1,
                          sizeType: ["compressed"],
                          sourceType: o,
                          success: function(e) {
                            if (e.tempFilePaths.length > 0) {
                              wx.showLoading({
                                title: "核验中..."
                              });
                              var o = e.tempFilePaths[0];
                              wx.getLocation({
                                type: "wgs84",
                                altitude: !0,
                                success: function(e) {
                                  var a = e.latitude,
                                    n = e.longitude;
                                  wx.uploadFile({
                                    url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_and_compare",
                                    filePath: o,
                                    name: "upload",
                                    header: {
                                      "Content-Type": "multipart/form-data"
                                    },
                                    formData: {
                                      openId: l.globalData.openid,
                                      latitude: a,
                                      longitude: n
                                    },
                                    success: function(e) {
                                      var o = JSON.parse(e.data);
                                      wx.hideLoading(), "000000000000" == o[0].resp_code ? (l.globalData.page_qrcode_qr_code = o[0].png_string, l.globalData.page_qrcode_name = o[0].name, l.globalData.page_qrcode_id_card = o[0].id_card, l.globalData.page_qrcode_mobile_phone = o[0].mobile_phone, l.globalData.page_qrcode_expire_date = o[0].timestamp, l.globalData.page_qrcode_avatar = o[0].avatar_string, wx.navigateTo({
                                        url: "../component/pages/form_03/form"
                                      })) : (wx.hideLoading(), wx.showModal({
                                        title: "提示",
                                        content: "" + o[0].resp_msg,
                                        showCancel: !1
                                      }))
                                    }
                                  })
                                },
                                fail: function(e) {
                                  console.log("getLocation fail", e)
                                }
                              })
                            } else wx.showModal({
                              title: "您未拍照",
                              content: "请拍照",
                              showCancel: !1
                            })
                          },
                          fail: function(e) {
                            console.log("error:", e), wx.showModal({
                              title: "拍照异常",
                              content: "拍照异常-3211",
                              showCancel: !1
                            })
                          }
                        })
                      }
                    })
                  } else wx.showModal({
                    title: "提示",
                    content: "您还未有,请申请",
                    showCancel: !1
                  })
                },
                fail: function(e) {
                  console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-1," + e.errMsg,
                    showCancel: !1
                  })
                }
              })
            } else wx.showModal({
              title: "提示",
              content: "获取状态异常-3:" + e.data[0].resp_code + e.data[0].resp_msg,
              showCancel: !1
            })
          },
          fail: function(e) {
            console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + e.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(e) {
        console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
          title: "提示",
          content: "获取状态异常," + e.errMsg,
          showCancel: !1
        })
      }
    })
  },
  toggleModeHidden: function() {
    this.setData({
      toggleModeVisible: !1
    })
  },
  toggleModeShow: function() {
    this.setData({
      toggleModeVisible: !0,
      currentMode: wx.getStorageSync("current_mode") || "mode_default"
    })
  },
  radioModelChange: function(e) {
    var o = e.detail.value;
    wx.setStorageSync("current_mode", "mode_simple" === o ? "mode_simple" : "mode_default"), o && wx.reLaunch({
      url: "mode_simple" === o ? "/module_004/simple/simple" : "/page/index_01/pages/my/my",
      success: function() {}
    })
  },
  use_barcode_face_check: function() {
    wx.login({
      success: function(e) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: e.code
          },
          success: function(e) {
            if (console.log("拉取login", e), "000000000000" == e.data[0].resp_code) {
              l.globalData.openid = e.data[1].openid, l.globalData.session_key = e.data[1].session_key;
              var t = {
                openId: l.globalData.openid,
                oper_type: "MY_QRCODE"
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: t,
                success: (s = n(a().mark((function e(n) {
                  var t, s, r, d, g, _, p, u;
                  return a().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (console.log("检查进度结果", n), "000000000003" != n.data[0].resp_code) {
                          e.next = 62;
                          break
                        }
                        return t = n.data[0].access_token, l.globalData.access_token = t, e.prev = 4, s = {
                          access_token: l.globalData.access_token
                        }, r = JSON.stringify(s), e.next = 9, c.encrypt_rsa_fun(r);
                      case 9:
                        return d = e.sent, s = {
                          key: d
                        }, g = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_008_get_face_check_log", e.next = 14, i.wx_request(g, s);
                      case 14:
                        if (n = e.sent, console.log("res:", g, o(n), n), "000000000000" != n.data[0].resp_code) {
                          e.next = 53;
                          break
                        }
                        if (_ = n.data[0].last_used_time, console.log("last_date:", _), p = (new Date).getTime(), u = p - _, console.log("diff_date", _, p, u), !(u > 6048e5)) {
                          e.next = 26;
                          break
                        }
                        wx.showModal({
                          title: "平安码丨平安白云",
                          content: "我的凭证需要您刷脸验证",
                          showCancel: !0,
                          cancelText: "暂不验证",
                          confirmText: "刷脸验证",
                          success: function(e) {
                            1 != e.confirm || wx.navigateTo({
                              url: "../component/pages/camera_plugin_barcode/form"
                            })
                          }
                        }), e.next = 51;
                        break;
                      case 26:
                        return e.prev = 26, s = {
                          access_token: l.globalData.access_token
                        }, g = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_009_get_my_qrcode", e.next = 31, i.wx_request(g, s);
                      case 31:
                        if (n = e.sent, console.log("res:", g, o(n), n), "000000000000" != n.data[0].resp_code) {
                          e.next = 44;
                          break
                        }
                        return l.globalData.page_qrcode_qr_code = n.data[0].png_string, l.globalData.page_qrcode_name = n.data[0].name, l.globalData.page_qrcode_id_card = n.data[0].id_card, l.globalData.page_qrcode_mobile_phone = n.data[0].mobile_phone, l.globalData.page_qrcode_expire_date = n.data[0].timestamp, l.globalData.page_qrcode_avatar = n.data[0].avatar_string, wx.navigateTo({
                          url: "../component/pages/form_03/form"
                        }), e.abrupt("return");
                      case 44:
                        wx.showModal({
                          title: "提示",
                          content: n.data[0].resp_msg + n.data[0].resp_code,
                          showCancel: !1
                        });
                      case 45:
                        e.next = 51;
                        break;
                      case 47:
                        e.prev = 47, e.t0 = e.catch(26), console.log("异常 e", e.t0), wx.showModal({
                          title: "异常",
                          content: e.t0,
                          showCancel: !1
                        });
                      case 51:
                        e.next = 54;
                        break;
                      case 53:
                        wx.showModal({
                          title: "提示",
                          content: n.data[0].resp_msg + n.data[0].resp_code,
                          showCancel: !1
                        });
                      case 54:
                        e.next = 60;
                        break;
                      case 56:
                        e.prev = 56, e.t1 = e.catch(4), console.log("获取保存的用户信息 e", e.t1), wx.showModal({
                          title: "异常",
                          content: e.t1,
                          showCancel: !1
                        });
                      case 60:
                        e.next = 63;
                        break;
                      case 62:
                        wx.showModal({
                          title: "提示",
                          content: "您还未登录 请先登录",
                          showCancel: !1
                        });
                      case 63:
                      case "end":
                        return e.stop()
                    }
                  }), e, null, [
                    [4, 56],
                    [26, 47]
                  ])
                }))), function(e) {
                  return s.apply(this, arguments)
                }),
                fail: function(e) {
                  console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-1," + e.errMsg,
                    showCancel: !1
                  })
                }
              })
            } else wx.showModal({
              title: "提示",
              content: "获取状态异常-3:" + e.data[0].resp_code + e.data[0].resp_msg,
              showCancel: !1
            });
            var s
          },
          fail: function(e) {
            console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + e.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(e) {
        console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
          title: "提示",
          content: "获取状态异常," + e.errMsg,
          showCancel: !1
        })
      }
    })
  },
  perfecting_personal_information: (t = n(a().mark((function e() {
    var o, n, t, s;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), o = wx.getStorageSync("openid"), n = wx.getStorageSync("unionid"), "" == o || null == o || null == o || "[object Undefined]" == o || "" == n || null == n || null == n || "[object Undefined]" == n) {
            e.next = 9;
            break
          }
          l.globalData.unionid = n, l.globalData.openid = o, e.next = 31;
          break;
        case 9:
          return e.prev = 9, e.next = 12, i.wx_login();
        case 12:
          if (t = e.sent, console.log("login_result:", t), "000000000000" != t.data[0].resp_code) {
            e.next = 22;
            break
          }
          l.globalData.openid = t.data[1].openid, l.globalData.unionid = t.data[1].unionid, l.globalData.session_key = t.data[1].session_key, wx.setStorageSync("openid", l.globalData.openid), wx.setStorageSync("unionid", l.globalData.unionid), e.next = 24;
          break;
        case 22:
          return wx.showModal({
            title: "提示",
            content: t.data[0].resp_msg + "(" + t.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 24:
          e.next = 31;
          break;
        case 26:
          return e.prev = 26, e.t0 = e.catch(9), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 31:
          s = {
            openId: l.globalData.openid,
            oper_type: "INDEX"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: s,
            success: function(e) {
              if (wx.hideLoading(), console.log("检查进度结果", e), "000000000003" == e.data[0].resp_code) {
                var o = e.data[0].access_token;
                return l.globalData.access_token = o, void wx.navigateTo({
                  url: "../../../../third_part/pages/personal_information/form"
                })
              }
              wx.showModal({
                title: "提示",
                content: "您还未注册,请先注册",
                showCancel: !1,
                success: function() {
                  wx.navigateTo({
                    url: "../../../../index/index"
                  })
                }
              })
            },
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 32:
        case "end":
          return e.stop()
      }
    }), e, null, [
      [9, 26]
    ])
  }))), function() {
    return t.apply(this, arguments)
  }),
  go_driver_license: function(e) {
    wx.navigateTo({
      url: "/module_001/page_008_driver_license/driver_license_list/driver_license_list"
    })
  },
  go_inspection_report: function(e) {
    wx.navigateTo({
      url: "/module_001/p_009_housenumber/my_inspection_report/my_inspection_report"
    })
  },
  drop_id_card: function() {
    l.globalData.register_type = "SELF";
    var e = this;
    wx.showModal({
      title: "提示",
      content: "您确定注销?",
      showCancel: !0,
      success: function(o) {
        o.confirm ? wx.login({
          success: function(o) {
            wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
              method: "POST",
              dataType: "json",
              data: {
                code: o.code
              },
              success: function(o) {
                if (console.log("拉取login", o), "000000000000" == o.data[0].resp_code) {
                  l.globalData.openid = o.data[1].openid, l.globalData.session_key = o.data[1].session_key;
                  var a = {
                    openId: l.globalData.openid
                  };
                  wx.request({
                    url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                    method: "POST",
                    dataType: "json",
                    data: a,
                    success: function(o) {
                      if (console.log("检查进度结果", o), "000000000003" == o.data[0].resp_code) {
                        wx.showLoading({
                          title: "注销中..."
                        });
                        var a = {
                          openId: l.globalData.openid
                        };
                        console.log(a);
                        wx.request({
                          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/drop_id_card",
                          method: "POST",
                          dataType: "json",
                          data: a,
                          success: function(o) {
                            wx.hideLoading(), console.log("挂失结果", o), "000000000000" == o.data[0].resp_code ? (console.log("注销成功"), wx.removeStorageSync("goHomeObj"), wx.removeStorageSync("guards"), wx.removeStorageSync("private_verify_code"), e.setData({
                              hide_register: !1,
                              hide_qrcode: !0,
                              hide_drop: !0,
                              hide_index: !1,
                              hide_personal_information: !0,
                              hide_driver_license: !0
                            }), wx.showModal({
                              title: "提示",
                              content: "注销成功",
                              showCancel: !1,
                              success: function(e) {}
                            })) : (console.log("err:", o), wx.showModal({
                              title: "提示",
                              content: "注销失败," + o.data[0].resp_code + o.data[0].resp_msg,
                              showCancel: !1
                            }))
                          },
                          fail: function(e) {
                            wx.hideLoading(), console.log("注销失败，", e), wx.showModal({
                              title: "异常",
                              content: "注销异常-0158," + e.errMsg,
                              showCancel: !1
                            })
                          }
                        })
                      } else wx.showModal({
                        title: "提示",
                        content: "您还未有,请申请",
                        showCancel: !1
                      })
                    },
                    fail: function(e) {
                      console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                        title: "提示",
                        content: "获取状态异常-10," + e.errMsg,
                        showCancel: !1
                      })
                    }
                  })
                } else wx.showModal({
                  title: "提示",
                  content: "获取状态异常-30:" + o.data[0].resp_code + o.data[0].resp_msg,
                  showCancel: !1
                })
              },
              fail: function(e) {
                console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
                  title: "提示",
                  content: "获取状态异常-40," + e.errMsg,
                  showCancel: !1
                })
              }
            })
          },
          fail: function(e) {
            console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
              title: "提示",
              content: "获取状态异常-50," + e.errMsg,
              showCancel: !1
            })
          }
        }) : o.cancel
      }
    })
  },
  dev_function: function() {
    console.log("apply...."), wx.navigateTo({
      url: "../index_01/pages/form_ocr_04/form"
    })
  },
  go_index: function() {
    wx.reLaunch({
      url: "/page/index_01/pages/my/my"
    })
  },
  bindtap_input_company: function() {
    wx.login({
      success: function(e) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: e.code
          },
          success: function(e) {
            if (console.log("拉取login", e), "000000000000" == e.data[0].resp_code) {
              l.globalData.openid = e.data[1].openid, l.globalData.session_key = e.data[1].session_key;
              var o = {
                openId: l.globalData.openid
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: o,
                success: function(e) {
                  console.log("检查进度结果", e), "000000000003" == e.data[0].resp_code ? wx.showModal({
                    title: "提示",
                    content: "您将扫描认证企业二维码",
                    showCancel: !1,
                    success: function() {
                      wx.scanCode({
                        onlyFromCamera: !0,
                        scanType: "qrCode",
                        success: function(e) {
                          console.log(e);
                          var o = e.result;
                          wx.showLoading({
                            title: "提交中..."
                          });
                          var a = {
                            openId: l.globalData.openid,
                            company_qrcode: o
                          };
                          console.log("post_data:", a), wx.request({
                            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/get_company_by_qrcode",
                            method: "POST",
                            dataType: "json",
                            data: a,
                            success: function(e) {
                              if (wx.hideLoading(), console.log("get_company_by_qrcode", e), "000000000000" == e.data[0].resp_code) {
                                console.log("提交成功");
                                var a = e.data[0].company_name,
                                  n = e.data[0].pre_company_name,
                                  t = "";
                                return t = "" != n ? "您是否要加入 " + a + "?并注销您上家公司:" + n : "您是否要加入 " + a + "?", void wx.showModal({
                                  title: "提示",
                                  content: t,
                                  showCancel: !0,
                                  success: function(e) {
                                    if (e.confirm) {
                                      wx.showLoading({
                                        title: "提交中..."
                                      });
                                      var a = {
                                        openId: l.globalData.openid,
                                        company_qrcode: o
                                      };
                                      console.log("post_data:", a), wx.request({
                                        url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/input_company",
                                        method: "POST",
                                        dataType: "json",
                                        data: a,
                                        success: function(e) {
                                          return wx.hideLoading(), console.log("提交信息", e), "000000000000" == e.data[0].resp_code ? (console.log("提交成功"), void wx.showModal({
                                            title: "提示",
                                            content: "录入企业 " + e.data[0].company_name + " 成功",
                                            showCancel: !1,
                                            success: function(e) {}
                                          })) : void wx.showModal({
                                            title: "提示",
                                            content: "提交失败," + e.data[0].resp_msg + "," + e.data[0].resp_code,
                                            showCancel: !1,
                                            success: function() {}
                                          })
                                        },
                                        fail: function(e) {
                                          wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                                            title: "后台服务器异常",
                                            content: "提交失败-0168," + e.errMsg,
                                            showCancel: !1
                                          })
                                        }
                                      })
                                    }
                                  }
                                })
                              }
                              wx.showModal({
                                title: "提示",
                                content: "提交失败," + e.data[0].resp_msg + "," + e.data[0].resp_code,
                                showCancel: !1,
                                success: function() {}
                              })
                            },
                            fail: function(e) {
                              wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                                title: "后台服务器异常",
                                content: "提交失败-0168," + e.errMsg,
                                showCancel: !1
                              })
                            }
                          })
                        },
                        fail: function(e) {
                          console.log("fail......")
                        },
                        complete: function(e) {
                          console.log("complete......")
                        }
                      })
                    }
                  }) : wx.showModal({
                    title: "提示",
                    content: "您还未有,请申请",
                    showCancel: !1
                  })
                },
                fail: function(e) {
                  console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-1," + e.errMsg,
                    showCancel: !1
                  })
                }
              })
            } else wx.showModal({
              title: "提示",
              content: "获取状态异常-3:" + e.data[0].resp_code + e.data[0].resp_msg,
              showCancel: !1
            })
          },
          fail: function(e) {
            console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + e.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(e) {
        console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
          title: "提示",
          content: "获取状态异常," + e.errMsg,
          showCancel: !1
        })
      }
    })
  },
  apply_id_card: function() {
    l.globalData.register_type = "SELF";
    wx.showLoading({
      title: "请稍等..."
    }), wx.login({
      success: function(e) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: e.code
          },
          success: function(e) {
            if (console.log("拉取login", e), "000000000000" == e.data[0].resp_code) {
              l.globalData.openid = e.data[1].openid, l.globalData.session_key = e.data[1].session_key;
              var o = {
                openId: l.globalData.openid
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: o,
                success: function(e) {
                  return wx.hideLoading(), console.log("检查进度结果", e), "000000000001" == e.data[0].resp_code ? (console.log("apply...."), void wx.navigateTo({
                    url: "../component/pages/form_ocr_01/form"
                  })) : "000000000002" == e.data[0].resp_code ? (l.globalData.page_verify_code_msg = "您已提交身份证资料,请进行基于生物识别的人脸核身", l.globalData.XM = e.data[0].XM, l.globalData.ZJHM = e.data[0].ZJHM, l.globalData.mobile_phone = e.data[0].mobile_phone, console.log("submit code...."), void wx.navigateTo({
                    url: "../component/pages/form_ocr_03/form"
                  })) : "000000000003" == e.data[0].resp_code ? void wx.showModal({
                    title: "提示",
                    content: "您的已生成,请勿重复申请",
                    showCancel: !1,
                    success: function(e) {}
                  }) : "000000000004" == e.data[0].resp_code ? (l.globalData.page_verify_code_msg = "已发送短信验证码,请输入短信验证码", console.log("submit code...."), void wx.navigateTo({
                    url: "../component/pages/form_ocr_04/form"
                  })) : void wx.showModal({
                    title: "提示",
                    content: "查询进度异常" + e.data[0].resp_code + e.data[0].resp_msg,
                    showCancel: !1
                  })
                },
                fail: function(e) {
                  console.log("查询进度异常,-0032", e), wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: "查询进度异常," + e.errMsg,
                    showCancel: !1
                  })
                }
              })
            } else wx.showModal({
              title: "服务异常",
              content: "获取用户信息失败-03166,程序退出," + e.data[0].resp_code + e.data[0].resp_msg,
              showCancel: !1
            })
          },
          fail: function(e) {
            console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.hideLoading(), wx.showModal({
              title: "服务异常",
              content: "获取用户信息失败-03168,程序退出," + e.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(e) {
        console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.hideLoading(), wx.showModal({
          title: "服务异常",
          content: "获取用户信息失败-03169,程序退出," + e,
          showCancel: !1
        })
      }
    })
  },
  bindtap_subscribe: function() {
    this.setData({
      show_ask_send_msg: !0
    })
  },
  buttontap_send_msg: function(e) {
    var o = this;
    wx.requestSubscribeMessage({
      tmplIds: ["CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ"],
      success: function(e) {
        o.setData({
          show_ask_send_msg: !1
        }), "accept" != e.CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ ? wx.showModal({
          title: "平安码丨平安白云",
          content: "订阅消息不成功,您确定不接收平安码丨平安白云审批消息提醒？",
          showCancel: !0,
          cancelText: "暂不接收",
          confirmText: "接收提醒",
          success: function(e) {
            1 == e.confirm && wx.openSetting({
              success: function(e) {}
            })
          }
        }) : wx.showModal({
          title: "平安码丨平安白云",
          content: "您已成功订阅消息,平安码丨平安白云审批消息",
          showCancel: !1
        })
      },
      fail: function(e) {
        o.setData({
          show_ask_send_msg: !1
        }), wx.showModal({
          title: "平安码丨平安白云",
          content: "订阅消息不成功,您确定不接收平安码丨平安白云审批消息提醒？",
          showCancel: !0,
          cancelText: "暂不接收",
          confirmText: "接收提醒",
          success: function(e) {
            1 == e.confirm && wx.openSetting({
              success: function(e) {}
            })
          }
        })
      }
    })
  },
  end_methods: function() {}
});