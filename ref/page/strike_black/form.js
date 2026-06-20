var e, t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../util/regenerator-runtime/runtime")) && e.__esModule;
var a, n, s = require("../../util/util.js"),
  r = require("../../config.js"),
  i = require("../../util/rsa_encry.js"),
  l = getApp();
Page({
  data: {
    flag: !0,
    show_ask_get_info: !1,
    buttons_get_info: [{
      type: "primary",
      className: "",
      text: "登录授权",
      value: 1,
      opentype: "getPhoneNumber"
    }],
    show_ask_user_info: !1,
    buttons_user_info: [{
      type: "primary",
      className: "",
      text: "下一步",
      value: 1,
      opentype: "getUserInfo"
    }],
    mobile_phone: "",
    register: 100,
    term_of_validity: "",
    report_type: "report"
  },
  onLoad: function(e) {
    var a = this;
    console.log("option666", e);
    var n = e.scene,
      s = e.strike_code,
      r = e.type,
      i = e.fireworks;
    e.style;
    a.data.style = e.style, "100" == n && (a.data.report_type = "supervisor"), "111" == n && (a.data.report_type = "clue_report"), wx.showLoading({
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
              l.globalData.openid = e.data[1].openid;
              var n = {
                openId: l.globalData.openid,
                oper_type: "JUMP_WEBVIEW"
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: n,
                success: (c = o(t().mark((function e(o) {
                  var n;
                  return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (wx.hideLoading(), console.log("检查进度结果", o), "000000000003" != o.data[0].resp_code) {
                          e.next = 9;
                          break
                        }
                        n = o.data[0].access_token, l.globalData.access_token = n, wx.setStorageSync("access_token", l.globalData.access_token), wx.getLocation({
                          type: "wgs84",
                          altitude: !1,
                          success: function(e) {
                            console.log("res.getLocation:", e), l.globalData.location_info = e
                          },
                          fail: function(e) {
                            console.log("getLocation fail", e)
                          },
                          complete: function(e) {
                            if (console.log(e), null != s && null != s && "" != s) a.get_sfz(n, s, r);
                            else {
                              var t = "/module_001/p_013_volunteer_service/volunteer_index/volunteer_index?report_type=" + a.data.report_type + "&style=" + a.data.style;
                              i && (t += "&fireworks=" + i), wx.redirectTo({
                                url: t
                              })
                            }
                          }
                        }), e.next = 11;
                        break;
                      case 9:
                        return a.setData({
                          show_ask_get_info: !0
                        }), e.abrupt("return");
                      case 11:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                }))), function(e) {
                  return c.apply(this, arguments)
                }),
                fail: function(e) {
                  wx.hideLoading(), console.log("获取用户信息失败，", e), wx.showModal({
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
            });
            var c
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
  get_sfz: function(e, t, o) {
    console.log("sdk_url", "");
    var a = "https://xcx.pinganbaiyun.cn/strike_black/api_05_rent_house_mini_program/get_sfz?third_part_app_id=MJXT&third_part_secret_key=f773304547114db5&access_token=" + e + "&sdk_url=";
    wx.request({
      url: a,
      success: function(e) {
        if ("000000000000" == e.data[0].resp_code) {
          console.log("获取token，", e.data);
          e.data[0].cloud_shield_token;
          wx.redirectTo({
            url: "../../page/strike_black/form?scene=111&fireworks=2"
          })
        } else null != e.data[0].resp_msg && null != e.data[0].resp_msg && wx.showToast({
          icon: "none",
          title: "获取token失败，" + e.data[0].resp_msg
        })
      },
      fail: function(e) {
        console.log("fail233555", e), wx.showToast({
          icon: "none",
          title: e
        })
      }
    })
  },
  get_mobile_phone: (n = o(t().mark((function e(o) {
    var a, n, r;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return console.log("get_mobile_phone", o), a = this, e.prev = 3, e.next = 6, s.wx_login("get_token");
        case 6:
          if (n = e.sent, console.log("login_result form_ocr_01:", n), "000000000000" != n.data[0].resp_code) {
            e.next = 15;
            break
          }
          l.globalData.openid = n.data[1].openid, l.globalData.unionid = n.data[1].unionid, wx.setStorageSync("openid", l.globalData.openid), wx.setStorageSync("unionid", l.globalData.unionid), e.next = 17;
          break;
        case 15:
          return wx.showModal({
            title: "提示",
            content: n.data[0].resp_msg + "(" + n.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 17:
          e.next = 24;
          break;
        case 19:
          return e.prev = 19, e.t0 = e.catch(3), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 24:
          wx.showLoading({
            title: "请稍等"
          }), r = {
            openId: l.globalData.openid,
            encryptedData: o.detail.detail.encryptedData,
            iv: o.detail.detail.iv
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/dencryp",
            method: "POST",
            dataType: "json",
            data: r,
            success: function(e) {
              if (wx.hideLoading(), console.log("获取解码信息 mobile_phone", e), "000000000000" == e.data[0].resp_code) {
                var t = e.data[1].purePhoneNumber;
                a.setData({
                  mobile_phone: t
                }), l.globalData.purePhoneNumber = t, a.setData({
                  show_ask_get_info: !1
                }), a.setData({
                  show_ask_user_info: !0
                })
              } else wx.showModal({
                title: "提示",
                content: "请再次自动获取手机号",
                showCancel: !1
              })
            },
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "后台服务器异常",
                content: "获取用户手机号失败-01259,程序退出," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 25:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [3, 19]
    ])
  }))), function(e) {
    return n.apply(this, arguments)
  }),
  get_user_info: (a = o(t().mark((function e(o) {
    var a, n, c, d, u, _, p;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return a = this, l.globalData.USERINFO_post = o.detail.detail.rawData, wx.showLoading({
            title: "请稍等"
          }), n = {
            LXDH: (a = this).data.mobile_phone,
            GPS: JSON.stringify(l.globalData.location_info),
            USERINFO: JSON.stringify(l.globalData.USERINFO_post),
            SYSTEMINFO: JSON.stringify(l.globalData.SYSTEMINFO),
            openId: l.globalData.openid
          }, c = JSON.stringify(n), e.next = 8, i.encrypt_rsa_fun(c);
        case 8:
          return d = e.sent, c = {
            key: d
          }, u = r.get_url() + "strike_black/api_05_rent_house_mini_program/record_unregistered_user_info", e.next = 13, s.wx_request(u, c);
        case 13:
          _ = e.sent, wx.hideLoading(), "000000000000" == _.data[0].resp_code ? (p = _.data[0].access_token, l.globalData.access_token = p, u = "/module_001/p_013_volunteer_service/volunteer_index/volunteer_index?report_type=" + a.data.report_type + "&fireworks=2&style=" + a.data.style, console.log("urlllll", u), wx.redirectTo({
            url: u
          })) : wx.showModal({
            title: "平安码丨平安白云",
            content: "获取用户信息失败",
            showCancel: !1
          });
        case 16:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(e) {
    return a.apply(this, arguments)
  }),
  close: function() {
    this.setData({
      show_ask_send_msg: !1
    })
  },
  end_method: function() {}
});