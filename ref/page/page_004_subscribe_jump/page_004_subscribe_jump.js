var o, e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
(o = require("../../util/regenerator-runtime/runtime")) && o.__esModule;
require("../../util/util.js");
var a, n = getApp();
Page({
  data: {
    showModal_location: !1,
    show_toptip_msg: "",
    src: "",
    jump_url: "",
    params: ""
  },
  end_data: function() {},
  onLoad: function(o) {
    var a = this,
      c = decodeURIComponent(o.url),
      i = decodeURIComponent(o.params);
    console.log("1747117621202 jump_url :", o, c, i), a.setData({
      jump_url: c,
      params: i
    }), wx.showLoading({
      title: "请等待....",
      mask: !0
    }), wx.login({
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
              n.globalData.openid = o.data[1].openid, n.globalData.session_key = o.data[1].session_key;
              var c = {
                openId: n.globalData.openid,
                oper_type: "INDEX"
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: c,
                success: (i = t(e().mark((function o(t) {
                  var c, i, l, s;
                  return e().wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        if (wx.hideLoading(), console.log("检查进度结果", t), "000000000003" != t.data[0].resp_code) {
                          o.next = 13;
                          break
                        }
                        return c = t.data[0].access_token, n.globalData.access_token = c, i = a.data.jump_url, l = a.data.params, s = i + "?access_token=" + n.globalData.access_token + "&params=" + l, console.log("1747129576735 src", s), a.setData({
                          src: s
                        }), o.abrupt("return");
                      case 13:
                        return n.globalData.back_url = "INDEX", wx.showModal({
                          title: "平安码丨平安白云",
                          content: "社区通知，需要您实名注册。",
                          showCancel: !0,
                          cancelText: "暂不注册",
                          confirmText: "现在注册",
                          success: function(o) {
                            1 == o.confirm ? wx.navigateTo({
                              url: "../component/pages/form_ocr_01/form"
                            }) : a.go_index()
                          }
                        }), o.abrupt("return");
                      case 16:
                      case "end":
                        return o.stop()
                    }
                  }), o)
                }))), function(o) {
                  return i.apply(this, arguments)
                }),
                fail: function(o) {
                  wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", o), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-1," + o.errMsg,
                    showCancel: !1
                  })
                }
              })
            } else wx.hideLoading(), wx.showModal({
              title: "提示",
              content: "获取状态异常-3:" + o.data[0].resp_code + o.data[0].resp_msg,
              showCancel: !1
            });
            var i
          },
          fail: function(o) {
            wx.hideLoading(), console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", o), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + o.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(o) {
        wx.hideLoading(), console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", o), wx.showModal({
          title: "提示",
          content: "获取状态异常," + o.errMsg,
          showCancel: !1
        })
      }
    })
  },
  onShow: function() {
    console.log("1747117621203 onShow")
  },
  onUnload: function() {
    console.log("onUnload")
  },
  go_index: function() {
    wx.redirectTo({
      url: "../../page/index_01/pages/my/my"
    })
  },
  get_location_role: function() {
    var o = this,
      e = n;
    wx.getSetting({
      success: function(t) {
        console.log("获取用户授权设置..."), console.log(t), null == t.authSetting["scope.userLocation"] || null == t.authSetting["scope.userLocation"] ? (console.log("用户未设置过授权,弹出请求授权界面 userLocation..."), wx.authorize({
          scope: "scope.userLocation",
          success: function(t) {
            console.log("authorize scope.userLocation success...", t), wx.getLocation({
              type: "wgs84",
              altitude: !1,
              success: function(o) {
                console.log("res.getLocation:", o), e.globalData.location_info = o;
                o.accuracy, o.altitude, o.horizontalAccuracy, o.latitude, o.longitude, o.speed, o.verticalAccuracy
              },
              fail: function(t) {
                console.log("getLocation fail", t), e.globalData.get_role_01 = !1, o.setData({
                  showModal_location: !0
                })
              }
            })
          },
          fail: function(t) {
            console.log("authorize scope.userLocation fail 用户不允许授权...", t), e.globalData.get_role_01 = !1, o.setData({
              showModal_location: !0
            })
          }
        })) : 1 == t.authSetting["scope.userLocation"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 userLocation..."), wx.getLocation({
          type: "wgs84",
          altitude: !1,
          success: function(o) {
            e.globalData.location_info = o;
            o.accuracy, o.altitude, o.horizontalAccuracy, o.latitude, o.longitude, o.speed, o.verticalAccuracy
          },
          fail: function(o) {
            console.log("getLocation fail", o)
          }
        })) : 0 == t.authSetting["scope.userLocation"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 userLocation..."), e.globalData.get_role_01 = !1, o.setData({
          showModal_location: !0
        }))
      }
    })
  },
  hideModal_location: function() {},
  get_location_role_result: function(o) {
    console.log("get_role_result", o), null != n.globalData.location_info && null != n.globalData.location_info || this.get_location()
  },
  get_location: function() {
    var o = this,
      e = n;
    wx.getLocation({
      type: "wgs84",
      altitude: !1,
      success: function(t) {
        console.log("res.getLocation:", t), e.globalData.location_info = t;
        t.accuracy, t.altitude, t.horizontalAccuracy, t.latitude, t.longitude, t.speed, t.verticalAccuracy;
        o.setData({
          showModal_location: !1
        })
      },
      fail: function(e) {
        console.log("getLocation fail", e), o.setData({
          showModal_location: !0
        })
      }
    })
  },
  permission_deny: function() {
    this.go_index()
  },
  bindmessage: (a = t(e().mark((function o(t) {
    return e().wrap((function(o) {
      for (;;) switch (o.prev = o.next) {
        case 0:
          console.log("1747127495092 bindmessage", t);
        case 1:
        case "end":
          return o.stop()
      }
    }), o)
  }))), function(o) {
    return a.apply(this, arguments)
  }),
  sleep: function(o) {
    return new Promise((function(e, t) {
      setTimeout((function() {
        e("success")
      }), o)
    }))
  },
  end_method: function() {}
});