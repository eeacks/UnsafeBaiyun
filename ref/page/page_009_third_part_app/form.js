var e, a = require("../../@babel/runtime/helpers/typeof"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../util/regenerator-runtime/runtime")) && e.__esModule;
var n, r = require("../../util/util.js"),
  c = require("../../config.js"),
  s = getApp();
Page({
  data: {
    options_data: null,
    app_config_data: {
      app_name: "请稍等...",
      face_check: !1
    },
    show_dialog_choose: !0,
    checked_type: !0,
    look_agreement_type: !1,
    show_apply_person_type: !1,
    name: "",
    id_card: "",
    mobile_phone: "",
    registered: !1,
    showModal_camera: !1
  },
  end_data: function() {},
  onLoad: (n = o(t().mark((function e(n) {
    var i, p, d, l, _, u, g, h, f;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (i = this, console.log("page_009_third_part_app form.js options", n), null == i.data.options_data && null != n && null != n && (i.data.options_data = n), null != i.data.options_data.app_id && null != i.data.options_data.app_id && "" != i.data.options_data.app_id) {
            e.next = 6;
            break
          }
          return wx.showModal({
            title: "参数异常",
            content: "参数app_id为空,请检查",
            showCancel: !1,
            confirmText: "返回",
            confirmColor: "#4a8eff",
            success: function() {
              var e = o(t().mark((function e(a) {
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return wx.navigateBackMiniProgram({
                        extraData: {
                          res_code: "000000000001"
                        },
                        success: function() {
                          console.log("返回上一个小程序成功！")
                        }
                      }), e.abrupt("return");
                    case 2:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }()
          }), e.abrupt("return");
        case 6:
          if (p = wx.getStorageSync("openid"), d = wx.getStorageSync("unionid"), "" == p || null == p || null == p || "[object Undefined]" == p || "" == d || null == d || null == d || "[object Undefined]" == d) {
            e.next = 13;
            break
          }
          s.globalData.unionid = d, s.globalData.openid = p, e.next = 33;
          break;
        case 13:
          return e.prev = 13, e.next = 16, r.wx_login();
        case 16:
          if ("000000000000" != (l = e.sent).data[0].resp_code) {
            e.next = 24;
            break
          }
          s.globalData.openid = l.data[1].openid, s.globalData.unionid = l.data[1].unionid, wx.setStorageSync("openid", s.globalData.openid), wx.setStorageSync("unionid", s.globalData.unionid), e.next = 26;
          break;
        case 24:
          return wx.showModal({
            title: "提示",
            content: l.data[0].resp_msg + "(" + l.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 26:
          e.next = 33;
          break;
        case 28:
          return e.prev = 28, e.t0 = e.catch(13), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 33:
          if ("wx2ecf14f64dfeb646" != i.data.options_data.app_id && "wxf655eb1e70360417" != i.data.options_data.app_id && "wx53434a4ea1da81db" != i.data.options_data.app_id && "wxaf2949351bfef114" != i.data.options_data.app_id && "help_agriculture" != i.data.options_data.buzi_type) {
            e.next = 39;
            break
          }
          return i.setData({
            show_dialog_choose: !1
          }), i.data.options_data.app_name = decodeURIComponent(i.data.options_data.app_name), console.log("this_page.data.options_data", i.data.options_data), wx.showModal({
            title: "平安码助农平台",
            content: "您将打开【" + i.data.options_data.app_name + "】小程序",
            showCancel: !1,
            success: function(e) {
              wx.navigateToMiniProgram({
                appId: i.data.options_data.app_id,
                envVersion: "release",
                success: function(e) {
                  return o(t().mark((function a() {
                    return t().wrap((function(a) {
                      for (;;) switch (a.prev = a.next) {
                        case 0:
                          console.log("page_009_third_part_app navigateToMiniProgram res", e), wx.navigateBack({
                            delta: 0
                          });
                        case 2:
                        case "end":
                          return a.stop()
                      }
                    }), a)
                  })))()
                },
                fail: function(e) {
                  return o(t().mark((function a() {
                    return t().wrap((function(a) {
                      for (;;) switch (a.prev = a.next) {
                        case 0:
                          console.log("page_009_third_part_app navigateToMiniProgram res", e), wx.navigateBack({
                            delta: 0
                          });
                        case 2:
                        case "end":
                          return a.stop()
                      }
                    }), a)
                  })))()
                }
              })
            }
          }), e.abrupt("return");
        case 39:
          if (_ = wx.getLaunchOptionsSync(), console.log("getLaunchOptionsSync", _), "1154" != _.scene) {
            e.next = 43;
            break
          }
          return e.abrupt("return", 0);
        case 43:
          return u = c.get_url() + "p_021_health_passport/api_004_motorcycles/sv_011_get_third_part_app_config", g = {
            app_id: i.data.options_data.app_id
          }, e.prev = 45, wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), e.next = 49, r.wx_request(u, g);
        case 49:
          if (h = e.sent, console.log("sv_011_get_third_part_app_config", a(h), h), "000000000000" != h.data[0].resp_code) {
            e.next = 57;
            break
          }
          f = !1, "是" == h.data[0].face_check && (f = !0), i.setData({
            app_config_data: {
              app_name: h.data[0].app_name,
              icon_name: h.data[0].icon_name,
              face_check: f
            }
          }), e.next = 59;
          break;
        case 57:
          return wx.showModal({
            title: "提示",
            content: h.data[0].resp_msg + "(" + h.data[0].resp_code + ")",
            showCancel: !1,
            confirmText: "返回",
            confirmColor: "#4a8eff",
            success: function() {
              var e = o(t().mark((function e(a) {
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return");
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }()
          }), e.abrupt("return");
        case 59:
          e.next = 64;
          break;
        case 61:
          e.prev = 61, e.t1 = e.catch(45), wx.showModal({
            title: "提示",
            content: "异常" + JSON.stringify(e.t1),
            showCancel: !1
          });
        case 64:
          g = {
            openId: s.globalData.openid,
            oper_type: "GET_TOKEN"
          }, u = "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
            url: u,
            method: "POST",
            dataType: "json",
            data: g,
            success: function() {
              var e = o(t().mark((function e(a) {
                var n, p, d, l;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", a), "000000000003" != a.data[0].resp_code) {
                        e.next = 32;
                        break
                      }
                      return n = a.data[0].access_token, s.globalData.access_token = n, console.log("已注册"), i.data.registered = !0, p = c.get_url() + "p_021_health_passport/api_004_motorcycles/sv_012_get_name_for_third_part_app", d = {
                        foo: "bar"
                      }, e.prev = 9, e.next = 12, r.wx_request(p, d);
                    case 12:
                      if (l = e.sent, wx.hideLoading(), "000000000000" != l.data[0].resp_code) {
                        e.next = 21;
                        break
                      }
                      i.data.name = l.data[0].name, i.data.id_card = l.data[0].id_card, i.data.mobile_phone = l.data[0].mobile_phone, i.setData({
                        name: l.data[0].name,
                        id_card: l.data[0].id_card,
                        mobile_phone: l.data[0].mobile_phone,
                        registered: i.data.registered
                      }), e.next = 23;
                      break;
                    case 21:
                      return wx.showModal({
                        title: "提示",
                        content: l.data[0].resp_msg + "(" + l.data[0].resp_code + ")",
                        showCancel: !1,
                        confirmText: "确定",
                        confirmColor: "#4a8eff",
                        success: function() {
                          var e = o(t().mark((function e(a) {
                            return t().wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  return e.abrupt("return");
                                case 1:
                                case "end":
                                  return e.stop()
                              }
                            }), e)
                          })));
                          return function(a) {
                            return e.apply(this, arguments)
                          }
                        }()
                      }), e.abrupt("return");
                    case 23:
                      e.next = 29;
                      break;
                    case 25:
                      e.prev = 25, e.t0 = e.catch(9), wx.hideLoading(), wx.showModal({
                        title: "提示",
                        content: "异常" + JSON.stringify(e.t0),
                        showCancel: !1
                      });
                    case 29:
                      return e.abrupt("return");
                    case 32:
                      return wx.hideLoading(), console.log("未注册"), i.data.registered = !1, e.abrupt("return");
                    case 36:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [9, 25]
                ])
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }(),
            fail: function(e) {
              wx.hideLoading(), console.log("check_state false", e), wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 65:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [13, 28],
      [45, 61]
    ])
  }))), function(e) {
    return n.apply(this, arguments)
  }),
  onShow: function(e) {
    console.log("page_009_third_part_app form.js onShow", e);
    var a = wx.getLaunchOptionsSync();
    console.log("page_009_third_part_app form.js getLaunchOptionsSync", a);
    var t = wx.getUpdateManager();
    t.onCheckForUpdate((function(e) {
      console.log("page_009_third_part_app onCheckForUpdate", e.hasUpdate)
    })), t.onUpdateReady((function() {
      t.applyUpdate(), wx.showModal({
        title: "更新提示",
        content: "新版本平安码丨平安白云已经准备好，请您再次进入",
        showCancel: !1,
        success: function(e) {
          e.confirm
        }
      })
    })), t.onUpdateFailed((function() {
      wx.showModal({
        title: "更新提示",
        content: "新版本您未更新好，请重新更新",
        showCancel: !1,
        success: function(e) {
          e.confirm && t.applyUpdate()
        }
      })
    }));
    var o = this;
    wx.getSetting({
      success: function(e) {
        console.log("获取用户授权设置..."), console.log(e), null == e.authSetting["scope.camera"] || null == e.authSetting["scope.camera"] ? (console.log("用户未设置过授权,弹出请求授权界面 camera..."), wx.authorize({
          scope: "scope.camera",
          success: function(e) {
            console.log("authorize scope.camera success...", e)
          },
          fail: function(e) {
            console.log("authorize scope.camera fail 用户不允许授权...", e), o.setData({
              showModal_camera: !0
            })
          }
        })) : 1 == e.authSetting["scope.camera"] ? console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 camera...") : 0 == e.authSetting["scope.camera"] && (console.log("用户已设置过授权,且授权拒绝,再次弹出授权页面 camera..."), o.setData({
          showModal_camera: !0
        }))
      }
    })
  },
  onUnload: function() {
    console.log("onUnload")
  },
  go_index: function() {
    wx.redirectTo({
      url: "../../page/index_01/pages/my/my"
    })
  },
  radioChange: function() {
    this.setData({
      checked_type: !0
    })
  },
  look_agreement: function() {
    this.setData({
      look_agreement_type: !0,
      show_apply_person_type: !0
    })
  },
  close: function() {
    this.setData({
      look_agreement_type: !1,
      show_apply_person_type: !1
    })
  },
  agree_btn: function() {
    if (0 != this.data.checked_type) {
      if (1 == this.data.registered) {
        if (0 == this.data.app_config_data.face_check) {
          if ("1720770039" == this.data.options_data.app_id) {
            console.log("app.globalData.access_token", s.globalData.access_token);
            var e = this.data.options_data.busi_code;
            return wx.setStorageSync("openid", s.globalData.openid), wx.setStorageSync("access_token", s.globalData.access_token), void wx.redirectTo({
              url: "/module_004/p_003_policing_room/order_detail/order_detail?busi_code=".concat(e)
            })
          }
          return void wx.navigateBackMiniProgram({
            extraData: {
              res_code: "000000000000",
              access_token: s.globalData.access_token
            },
            success: function() {
              console.log("返回上一个小程序成功！")
            }
          })
        }
        var a = "../component/pages/camera_plugin_barcode/form?buzi_type=THIRD_PARTY_APP&buzi_code=" + this.data.options_data.app_id;
        return console.log("url_jump", a), void wx.navigateTo({
          url: a
        })
      }
      this.data.registered;
      var t = "../component/pages/form_ocr_01/form?back_param=&come_param=THIRD_PARTY_APP";
      return console.log("未注册的 url_jump", t), void wx.redirectTo({
        url: t
      })
    }
    wx.showToast({
      title: "请勾选同意用户授权协议",
      icon: "none",
      duration: 2e3
    })
  },
  deny_btn: function() {
    wx.navigateBackMiniProgram({
      extraData: {
        res_code: "000000000001"
      },
      success: function() {
        console.log("返回上一个小程序成功！")
      }
    })
  },
  register_again: function() {
    console.log("register_again");
    var e = "../component/pages/form_ocr_01/form?back_param=THIRD_PARTY_APP&come_param=";
    console.log("未注册的 url_jump", e), wx.redirectTo({
      url: e
    })
  },
  hideModal_location: function() {},
  get_camera_role_result: function(e) {
    console.log("get_camera_role_result", e), 0 == e.detail.authSetting["scope.camera"] ? (this.setData({
      showModal_camera: !0
    }), console.log("用户选择了否")) : (console.log("用户选择了是"), this.setData({
      showModal_camera: !1
    }))
  },
  end_method: function() {}
});