var e, a = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../../../util/regenerator-runtime/runtime")) && e.__esModule;
var n = require("../../../../util/util.js"),
  c = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: ""
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
    var r = this;
    return t(a().mark((function t() {
      var d, i, l, s, _, m, g, u, p, S, y, x, w;
      return a().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            console.log("company options", e), d = r, i = "https://qv1.pinganbaiyun.cn/p_056_company_xcx/www/index.html", l = "", s = "", _ = "";
            try {
              l = decodeURIComponent(e.access_token), s = decodeURIComponent(e.jump_to), _ = decodeURIComponent(e.param_type)
            } catch (e) {
              l = "", s = "", _ = ""
            }
            console.log("1699242935026", l, s, _), -1 != (s += "").indexOf("E_RENTER_HOUSE_ENTER") && (l = "", c.globalData.access_token = ""), m = "", g = "";
            try {
              m = decodeURIComponent(e.company_rec_id), g = decodeURIComponent(e.department_code)
            } catch (e) {
              m = "", g = ""
            }
            u = "";
            try {
              "mode_simple" === wx.getStorageSync("current_mode") && (u += "&hua_jia=true")
            } catch (e) {}
            if (console.log("onload:", o(l), l, o(s), s), "register" != s) {
              a.next = 22;
              break
            }
            p = i + "?access_token=" + l + "&jump_to=" + s + u, r.setData({
              src: p
            }), console.log("onload:", l, s, "---jump_to---", p), a.next = 47;
            break;
          case 22:
            if ("company_add_foreign_jump_to" != s) {
              a.next = 28;
              break
            }
            p = i + "?access_token=" + l + "&jump_to=" + s + "&company_rec_id=" + m + "&department_code=" + g + u, r.setData({
              src: p
            }), console.log("onload:", l, s, "---jump_to---", p), a.next = 47;
            break;
          case 28:
            if (-1 == s.indexOf("GO_CANCEL_STAFF")) {
              a.next = 35;
              break
            }
            return p = i + "?access_token=" + c.globalData.access_token + "&jump_to=" + s + u, console.log("company jump src:", p), r.setData({
              src: p
            }), a.abrupt("return");
          case 35:
            if ("" == _ || "undefined" == _ || null == _ || null == _) {
              a.next = 42;
              break
            }
            return p = i + "?access_token=" + c.globalData.access_token + "&param_type=" + _ + "&param_value=" + e.param_value + u, r.setData({
              src: p
            }), console.log("带参数跳转的", p), a.abrupt("return");
          case 42:
            if ("" == c.globalData.access_token || null == c.globalData.access_token || null == c.globalData.access_token) {
              a.next = 47;
              break
            }
            return p = i + "?access_token=" + c.globalData.access_token + u, r.setData({
              src: p
            }), console.log("onload:", c.globalData.access_token, "---no_jump_to---", p), a.abrupt("return");
          case 47:
            if (S = wx.getStorageSync("openid"), y = wx.getStorageSync("unionid"), "" == S || null == S || null == S || "[object Undefined]" == S || "" == y || null == y || null == y || "[object Undefined]" == y) {
              a.next = 54;
              break
            }
            c.globalData.unionid = y, c.globalData.openid = S, a.next = 77;
            break;
          case 54:
            return a.prev = 54, wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), a.next = 58, n.wx_login();
          case 58:
            if (x = a.sent, console.log("login_result:", x), wx.hideLoading(), "000000000000" != x.data[0].resp_code) {
              a.next = 68;
              break
            }
            c.globalData.openid = x.data[1].openid, c.globalData.unionid = x.data[1].unionid, wx.setStorageSync("openid", c.globalData.openid), wx.setStorageSync("unionid", c.globalData.unionid), a.next = 70;
            break;
          case 68:
            return wx.showModal({
              title: "提示",
              content: x.data[0].resp_msg + "(" + x.data[0].resp_code + ")",
              showCancel: !1,
              success: function(e) {}
            }), a.abrupt("return");
          case 70:
            a.next = 77;
            break;
          case 72:
            return a.prev = 72, a.t0 = a.catch(54), console.log("e:", a.t0), wx.showModal({
              title: "提示",
              content: "" + JSON.stringify(a.t0),
              showCancel: !1,
              success: function(e) {}
            }), a.abrupt("return");
          case 77:
            wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), "COMPANY", w = {
              openId: c.globalData.openid,
              oper_type: "COMPANY"
            }, "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
              method: "POST",
              dataType: "json",
              data: w,
              success: function(a) {
                if (wx.hideLoading(), console.log("检查进度结果", a), "000000000003" == a.data[0].resp_code) {
                  var o = a.data[0].access_token;
                  if (c.globalData.access_token = o, -1 != s.indexOf("E_RENTER_HOUSE_ENTER")) {
                    var t = i + "?access_token=" + c.globalData.access_token + "&jump_to=" + s + u;
                    return console.log("e renter jump src:", t), void d.setData({
                      src: t
                    })
                  }
                  if (-1 != s.indexOf("GO_COMPANY_PATORL_MSG")) {
                    t = i + "?access_token=" + c.globalData.access_token + "&jump_to=" + s + "&parm=" + decodeURIComponent(e.parm);
                    return t = encodeURI(t), console.log("GO_COMPANY_PATORL_MSG jump src:", t), void d.setData({
                      src: t
                    })
                  }
                  t = i + "?access_token=" + c.globalData.access_token + u;
                  return d.setData({
                    src: t
                  }), void console.log("onload:", c.globalData.access_token, "---1695653720515 no_jump_to---", t)
                }
                c.globalData.back_url = "COMPANY";
                var n = "乐业管家",
                  r = "体验乐业管家功能，需要您实名注册。";
                return -1 != s.indexOf("E_RENTER_HOUSE_ENTER") && (n = "白云e租房备案录入", r = "体验白云e租房备案录入功能，需要您实名注册。"), void wx.showModal({
                  title: n,
                  content: r,
                  showCancel: !0,
                  cancelText: "暂不注册",
                  confirmText: "现在注册",
                  success: function(e) {
                    1 == e.confirm ? wx.navigateTo({
                      url: "../../../component/pages/form_ocr_01/form"
                    }) : wx.reLaunch({
                      url: "../../../../page/index_01/pages/my/my"
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
          case 79:
          case "end":
            return a.stop()
        }
      }), t, null, [
        [54, 72]
      ])
    })))()
  },
  onShow: function() {
    if (console.log("onShow:", c.globalData.access_token), c.globalData.back_url = null, "" != c.globalData.access_token);
  },
  onUnload: function() {
    console.log("onUnload")
  },
  bindmessage: function(e) {
    if ("destroy_mini" != e.detail.data[0].destroy_mini) {
      var a = e.detail.data[0].company_rec_id,
        o = e.detail.data[0].company_admin_id_card;
      if (console.log("小程序企业境外人员录入company_rec_id", a, e.detail.data[0]), "" != a && "undefined" != a && "null" != a && null != a) {
        console.log("小程序企业境外人员录入进来了");
        var t = e.detail.data[0].company_of_community,
          n = (a = e.detail.data[0].company_rec_id, e.detail.data[0].country),
          r = e.detail.data[0].file_id_ocr,
          d = e.detail.data[0].gender,
          i = e.detail.data[0].id_card,
          l = e.detail.data[0].latitude,
          s = e.detail.data[0].live_address,
          _ = e.detail.data[0].login_id_card,
          m = e.detail.data[0].login_name,
          g = e.detail.data[0].longitude,
          u = e.detail.data[0].manual_recording_other_reason,
          p = e.detail.data[0].manual_recording_reason,
          S = e.detail.data[0].mobile_phone,
          y = e.detail.data[0].name,
          x = e.detail.data[0].police_station,
          w = e.detail.data[0].remark,
          f = e.detail.data[0].cloud_shield_token,
          b = e.detail.data[0].company_add_foreign_jump_to,
          k = "";
        try {
          k = e.detail.data[0].department_code
        } catch (e) {
          k = ""
        }
        wx.removeStorageSync("company_of_community"), wx.removeStorageSync("company_rec_id"), wx.removeStorageSync("country"), wx.removeStorageSync("file_id_ocr"), wx.removeStorageSync("gender"), wx.removeStorageSync("id_card"), wx.removeStorageSync("latitude"), wx.removeStorageSync("live_address"), wx.removeStorageSync("login_id_card"), wx.removeStorageSync("login_name"), wx.removeStorageSync("longitude"), wx.removeStorageSync("manual_recording_other_reason"), wx.removeStorageSync("manual_recording_reason"), wx.removeStorageSync("mobile_phone"), wx.removeStorageSync("name"), wx.removeStorageSync("police_station"), wx.removeStorageSync("remark"), wx.removeStorageSync("company_add_foreign_jump_to"), wx.removeStorageSync("department_code"), wx.removeStorageSync("cloud_shield_token"), wx.setStorageSync("company_of_community", t), wx.setStorageSync("company_rec_id", a), wx.setStorageSync("country", n), wx.setStorageSync("file_id_ocr", r), wx.setStorageSync("gender", d), wx.setStorageSync("id_card", i), wx.setStorageSync("latitude", l), wx.setStorageSync("live_address", s), wx.setStorageSync("login_id_card", _), wx.setStorageSync("login_name", m), wx.setStorageSync("longitude", g), wx.setStorageSync("manual_recording_other_reason", u), wx.setStorageSync("manual_recording_reason", p), wx.setStorageSync("mobile_phone", S), wx.setStorageSync("name", y), wx.setStorageSync("police_station", x), wx.setStorageSync("remark", w), wx.setStorageSync("company_add_foreign_jump_to", b), wx.setStorageSync("department_code", k), wx.setStorageSync("cloud_shield_token", f)
      } else if (null != o) {
        o = e.detail.data[0].company_admin_id_card;
        var v = e.detail.data[0].company_admin_name,
          h = e.detail.data[0].company_code;
        wx.removeStorageSync("company_admin_id_card"), wx.removeStorageSync("company_admin_name"), wx.removeStorageSync("company_code"), wx.setStorageSync("company_admin_id_card", o), wx.setStorageSync("company_admin_name", v), wx.setStorageSync("company_code", h)
      } else {
        c.globalData.register_type = "COMPANY_" + Math.random().toString(36).substr(2, 5) + "_";
        h = e.detail.data[0].company_code, k = e.detail.data[0].department_code, s = e.detail.data[0].live_address, w = e.detail.data[0].remark;
        if (null == h || null == h || "undefined" == h || "" == h) return void wx.showModal({
          title: "提示",
          content: "数据异常 单位编号为空 10035",
          showCancel: !1,
          success: function(e) {}
        });
        wx.removeStorageSync("company_code"), wx.removeStorageSync("department_code"), wx.removeStorageSync("live_address"), wx.removeStorageSync("remark"), wx.setStorageSync("company_code", h), wx.setStorageSync("department_code", k), wx.setStorageSync("live_address", s), wx.setStorageSync("remark", w)
      }
    } else wx.navigateBackMiniProgram({
      extraData: {
        res_code: "000000000000",
        access_token: ""
      },
      success: function() {
        console.log("返回上一个小程序成功！")
      },
      fail: function() {
        console.log("返回上一个小程序失败！")
      }
    })
  }
});