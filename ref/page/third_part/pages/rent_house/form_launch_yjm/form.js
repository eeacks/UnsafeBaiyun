var e, t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../../../../@babel/runtime/helpers/typeof");
(e = require("../../../../../util/regenerator-runtime/runtime")) && e.__esModule;
var n, r = require("../../../../../util/util.js"),
  s = (require("../../../../../config.js"), getApp());
Page({
  data: {
    scene: null,
    isShowModel_yjm_res: !1
  },
  onLoad: function(e) {
    "YJM_REGISTER_HOUSE" == e.scene && this.yjm_buzi()
  },
  onShow: function() {
    console.log("form_launch_yjm onShow");
    var e = wx.getEnterOptionsSync(),
      t = e.referrerInfo;
    if (console.log("form_launch_yjm referrerInfo", t), console.log("form_launch_yjm referrerInfo options", e), null != t && null != t && "page/third_part/pages/rent_house/form_launch_yjm/form" == e.path && 1038 == e.scene && (console.log("form_launch_yjm referrerInfo.extraData", t.extraData, o(t.extraData)), null != t.extraData && null != t.extraData && t.extraData.hasOwnProperty("res_code") && 0 == t.extraData.res_code)) try {
      var a = {
          buzi_type: "yjm_apply_house"
        },
        n = "../../../../../page/third_part/pages/rent_house/form?jump_to=HOUSE_LIST@@@params:" + JSON.stringify(a);
      return n = encodeURI(n), console.log("jump_url", n), void wx.redirectTo({
        url: n
      })
    } catch (e) {
      console.log("调用页面方法异常5551915", e)
    } else;
  },
  onUnload: function() {
    console.log("onUnload lauch ")
  },
  yjm_buzi: (n = a(t().mark((function e() {
    var o, n, c, l, i;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (o = this, console.log("yjm_buzi"), wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), n = wx.getStorageSync("openid"), c = wx.getStorageSync("unionid"), "" == n || null == n || null == n || "[object Undefined]" == n || "" == c || null == c || null == c || "[object Undefined]" == c) {
            e.next = 11;
            break
          }
          s.globalData.unionid = c, s.globalData.openid = n, e.next = 33;
          break;
        case 11:
          return e.prev = 11, e.next = 14, r.wx_login();
        case 14:
          if (l = e.sent, console.log("login_result:", l), "000000000000" != l.data[0].resp_code) {
            e.next = 24;
            break
          }
          s.globalData.openid = l.data[1].openid, s.globalData.unionid = l.data[1].unionid, s.globalData.session_key = l.data[1].session_key, wx.setStorageSync("openid", s.globalData.openid), wx.setStorageSync("unionid", s.globalData.unionid), e.next = 26;
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
          return e.prev = 28, e.t0 = e.catch(11), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 33:
          i = {
            openId: s.globalData.openid,
            oper_type: "INDEX"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: i,
            success: function() {
              var e = a(t().mark((function e(a) {
                var n, c, l, i, u;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", a), "000000000003" != a.data[0].resp_code) {
                        e.next = 38;
                        break
                      }
                      return n = a.data[0].access_token, s.globalData.access_token = n, e.prev = 5, wx.showLoading({
                        title: "请稍等...",
                        mask: !0
                      }), c = {
                        foo: "bar"
                      }, e.next = 11, r.wx_request("https://xcx.pinganbaiyun.cn/health_passport/api_004_motorcycles/sv_001_get_gd_security_authcode", c);
                    case 11:
                      if (l = e.sent, wx.hideLoading(), "000000000000" != l.data[0].resp_code) {
                        e.next = 21;
                        break
                      }
                      return i = l.data[0].code, u = "pages/common/thirdPartyRouter/thirdPartyRouter?feat=houseDeclaration&refer=paby&authcode=" + i, console.log("gd_security_path form_launch_yjm", u), wx.navigateToMiniProgram({
                        appId: "wx9f75b01dcb4b1a79",
                        path: u,
                        extraData: {},
                        envVersion: "release",
                        success: function(e) {
                          o.setData({
                            isShowModel_yjm_res: !0
                          })
                        }
                      }), e.abrupt("return");
                    case 21:
                      if ("-00000350001" != l.data[0].resp_code) {
                        e.next = 26;
                        break
                      }
                      wx.showModal({
                        title: "提示",
                        content: "请您再次申报",
                        showCancel: !1,
                        success: function(e) {}
                      }), wx.navigateBack({
                        delta: 1,
                        success: function() {
                          console.log("返回上一级页面。成功！")
                        }
                      }), e.next = 28;
                      break;
                    case 26:
                      return wx.showModal({
                        title: "提示",
                        content: l.data[0].resp_msg + "(" + l.data[0].resp_code + ")",
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 28:
                      e.next = 36;
                      break;
                    case 30:
                      return e.prev = 30, e.t0 = e.catch(5), wx.hideLoading(), console.log("e:", e.t0), wx.showModal({
                        title: "提示",
                        content: "" + JSON.stringify(e.t0),
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 36:
                      e.next = 41;
                      break;
                    case 38:
                      return s.globalData.back_url = "INDEX", wx.showModal({
                        title: "平安码丨平安白云",
                        content: "粤居码申报功能，需要您实名注册。",
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          1 == e.confirm && wx.navigateTo({
                            url: "../../../../component/pages/form_ocr_01/form"
                          })
                        }
                      }), e.abrupt("return");
                    case 41:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [5, 30]
                ])
              })));
              return function(t) {
                return e.apply(this, arguments)
              }
            }(),
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 34:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [11, 28]
    ])
  }))), function() {
    return n.apply(this, arguments)
  }),
  apply_again: function() {
    console.log("apply_again..."), this.setData({
      isShowModel_yjm_res: !1
    });
    var e = {
        buzi_type: "yjm_apply_house"
      },
      t = "../../../../../page/third_part/pages/rent_house/form?jump_to=APPLY_HOUSE@@@params:" + JSON.stringify(e);
    t = encodeURI(t), console.log("jump_url", t), wx.redirectTo({
      url: t
    })
  },
  apply_success: function() {
    console.log("apply_success..."), this.setData({
      isShowModel_yjm_res: !1
    });
    var e = {
        buzi_type: "yjm_apply_house"
      },
      t = "../../../../../page/third_part/pages/rent_house/form?jump_to=HOUSE_LIST@@@params:" + JSON.stringify(e);
    t = encodeURI(t), console.log("jump_url", t), wx.redirectTo({
      url: t
    })
  }
});