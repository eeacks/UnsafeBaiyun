var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  n = getApp();
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
  onLoad: function(o) {
    var r = this;
    return t(e().mark((function t() {
      var c, s, i, d, l, _, g, S, u;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (c = r, n.globalData.back_url = null, console.log("onLoa strike_black form.js", o, a(o)), "" != o && null != o && null != o) {
              e.next = 7;
              break
            }
            return e.abrupt("return");
          case 7:
          case 8:
            if (null == c.src) {
              e.next = 12;
              break
            }
            if ("" === c.src) {
              e.next = 12;
              break
            }
            return console.log("1724233027100 this_page.src", c.src), e.abrupt("return");
          case 12:
            s = "", i = "", d = "";
            try {
              s = decodeURIComponent(o.report_type)
            } catch (e) {
              s = ""
            }
            if (console.log("report_type:", s, a(s)), "supervisor" != s) {
              e.next = 24;
              break
            }
            return l = "https://xcx.pinganbaiyun.cn/strike_black/third_part/crack_down_black/index.html?access_token=" + n.globalData.access_token + "&report_type=" + s, r.setData({
              src: l
            }), console.log("小程序码扫码进入 线索举报的进入", l), e.abrupt("return");
          case 24:
            if ("clue_report" != s) {
              e.next = 31;
              break
            }
            return l = "https://xcx.pinganbaiyun.cn/strike_black/third_part/crack_down_black/index.html?access_token=" + n.globalData.access_token + "&report_type=" + s, r.setData({
              src: l
            }), console.log("小程序码扫码进入 线索举报的进入", l), e.abrupt("return");
          case 31:
            try {
              i = decodeURIComponent(o.access_token), d = decodeURIComponent(o.jump_to)
            } catch (e) {
              console.log("jump_to", e), i = "", d = ""
            }
            if (console.log("access_token:", i, a(i), a(d), d), "" == n.globalData.access_token || null == n.globalData.access_token || null == n.globalData.access_token || "undefined" == n.globalData.access_token) {
              e.next = 39;
              break
            }
            return console.log("found app.globalData...", n.globalData), l = "https://xcx.pinganbaiyun.cn/strike_black/third_part/p_030_volunteer/www/index.html?access_token=" + n.globalData.access_token + "&jump_to=" + d, r.setData({
              src: l
            }), console.log("从首页进入的", l), e.abrupt("return");
          case 39:
            if ("" == i || null == i || null == i || "undefined" == i) {
              e.next = 45;
              break
            }
            return console.log("found access_token...", i), l = "https://xcx.pinganbaiyun.cn/strike_black/third_part/p_030_volunteer/www/index.html?access_token=" + i + "&jump_to=" + d, r.setData({
              src: l
            }), console.log("页面间跳转如首页跳入，或者注册后跳入 001", l), e.abrupt("return");
          case 45:
            if (l = "", "" != i && "" != d) {
              e.next = 51;
              break
            }
            if ("" != n.globalData.access_token && null != n.globalData.access_token && null != n.globalData.access_token) {
              e.next = 50;
              break
            }
            return wx.showModal({
              title: "提示",
              content: "参数异常请登录",
              showCancel: !1
            }), e.abrupt("return");
          case 50:
            l = "https://xcx.pinganbaiyun.cn/strike_black/third_part/p_030_volunteer/www/index.html?access_token=" + n.globalData.access_token;
          case 51:
            if (_ = wx.getStorageSync("openid"), g = wx.getStorageSync("unionid"), "" == _ || null == _ || null == _ || "[object Undefined]" == _ || "" == g || null == g || null == g || "[object Undefined]" == g) {
              e.next = 58;
              break
            }
            n.globalData.unionid = g, n.globalData.openid = _, e.next = 81;
            break;
          case 58:
            return e.prev = 58, wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), e.next = 62, util.wx_login();
          case 62:
            if (S = e.sent, console.log("login_result:", S), wx.hideLoading(), "000000000000" != S.data[0].resp_code) {
              e.next = 72;
              break
            }
            n.globalData.openid = S.data[1].openid, n.globalData.unionid = S.data[1].unionid, wx.setStorageSync("openid", n.globalData.openid), wx.setStorageSync("unionid", n.globalData.unionid), e.next = 74;
            break;
          case 72:
            return wx.showModal({
              title: "提示(1769593005693)",
              content: S.data[0].resp_msg + "(" + S.data[0].resp_code + ")",
              showCancel: !1,
              success: function(e) {}
            }), e.abrupt("return");
          case 74:
            e.next = 81;
            break;
          case 76:
            return e.prev = 76, e.t0 = e.catch(58), console.log("1769593005694 e:", e.t0), wx.showModal({
              title: "提示(1769593005694)",
              content: e.t0,
              showCancel: !1,
              success: function(e) {}
            }), e.abrupt("return");
          case 81:
            wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), "RENT_HOUSE", u = {
              openId: n.globalData.openid,
              oper_type: "RENT_HOUSE"
            }, "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
              method: "POST",
              dataType: "json",
              data: u,
              success: function(e) {
                if (wx.hideLoading(), console.log("检查进度结果", e), "000000000003" == e.data[0].resp_code) {
                  var a = e.data[0].access_token;
                  return n.globalData.access_token = a, l = "https://xcx.pinganbaiyun.cn/strike_black/third_part/p_030_volunteer/www/index.html?access_token=" + a + "&jump_to=" + d, l = encodeURI(l), c.setData({
                    src: l
                  }), void console.log("页面带参数跳转，如随手记录入采集后 002", l)
                }
                return n.globalData.back_url = "STRIKE_BLACK", void wx.showModal({
                  title: "网格上报",
                  content: "体验网格上报功能，需要您实名注册。",
                  showCancel: !0,
                  cancelText: "暂不注册",
                  confirmText: "现在注册",
                  success: function(e) {
                    return 1 == e.confirm ? void wx.reLaunch({
                      url: "/page/index_01/pages/my/my"
                    }) : void wx.reLaunch({
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
          case 83:
          case "end":
            return e.stop()
        }
      }), t, null, [
        [58, 76]
      ])
    })))()
  },
  onShow: function(e) {},
  bindmessage_foreign: function(e) {
    var a = e.detail.data[0].latitude,
      t = e.detail.data[0].longitude,
      n = e.detail.data[0].login_name,
      o = e.detail.data[0].police_station,
      r = e.detail.data[0].login_id_card,
      c = e.detail.data[0].name,
      s = e.detail.data[0].id_card,
      i = e.detail.data[0].mobile_phone,
      d = e.detail.data[0].manual_recording_reason,
      l = e.detail.data[0].manual_recording_other_reason,
      _ = e.detail.data[0].file_id_ocr,
      g = e.detail.data[0].company_rec_id,
      S = e.detail.data[0].live_address,
      u = e.detail.data[0].dzbm,
      p = e.detail.data[0].company_of_community,
      m = e.detail.data[0].country,
      x = e.detail.data[0].gender,
      y = e.detail.data[0].remark,
      w = e.detail.data[0].issue_date,
      b = e.detail.data[0].expiry_date,
      h = e.detail.data[0].permanent_detail_address,
      k = e.detail.data[0].permanent_address_list,
      v = e.detail.data[0].cloud_shield_token,
      f = e.detail.data[0].company_name,
      D = e.detail.data[0].post_data_conflict,
      j = "",
      C = "",
      L = "",
      R = "",
      T = "",
      U = "",
      H = "",
      I = "",
      M = "",
      E = "",
      q = "",
      z = "",
      O = "";
    try {
      L = e.detail.data[0].department_code, R = e.detail.data[0].company_add_foreign_jump_to, T = e.detail.data[0].whether_verify, j = e.detail.data[0].abroad_relevance_people_code, C = e.detail.data[0].abroad_relevance_goods_code, U = e.detail.data[0].contacts_id_card_type, H = e.detail.data[0].contacts_id_card, I = e.detail.data[0].relationship, M = e.detail.data[0].first_name, E = e.detail.data[0].last_name, q = e.detail.data[0].birthday, z = e.detail.data[0].contacts_name, O = e.detail.data[0].contacts_phone
    } catch (e) {
      L = "", R = "", T = "", j = "", C = ""
    }
    wx.removeStorageSync("latitude"), wx.removeStorageSync("longitude"), wx.removeStorageSync("login_name"), wx.removeStorageSync("police_station"), wx.removeStorageSync("login_id_card"), wx.removeStorageSync("name"), wx.removeStorageSync("id_card"), wx.removeStorageSync("mobile_phone"), wx.removeStorageSync("manual_recording_reason"), wx.removeStorageSync("manual_recording_other_reason"), wx.removeStorageSync("file_id_ocr"), wx.removeStorageSync("company_rec_id"), wx.removeStorageSync("live_address"), wx.removeStorageSync("dzbm"), wx.removeStorageSync("company_of_community"), wx.removeStorageSync("country"), wx.removeStorageSync("gender"), wx.removeStorageSync("remark"), wx.removeStorageSync("department_code"), wx.removeStorageSync("company_add_foreign_jump_to"), wx.removeStorageSync("whether_verify"), wx.removeStorageSync("issue_date"), wx.removeStorageSync("expiry_date"), wx.removeStorageSync("permanent_detail_address"), wx.removeStorageSync("permanent_address_list"), wx.removeStorageSync("cloud_shield_token"), wx.removeStorageSync("company_name"), wx.removeStorageSync("abroad_relevance_people_code"), wx.removeStorageSync("abroad_relevance_goods_code"), wx.removeStorageSync("contacts_id_card_type"), wx.removeStorageSync("contacts_id_card"), wx.removeStorageSync("relationship"), wx.removeStorageSync("first_name"), wx.removeStorageSync("last_name"), wx.removeStorageSync("birthday"), wx.removeStorageSync("contacts_name"), wx.removeStorageSync("contacts_phone"), wx.removeStorageSync("post_data_conflict"), wx.setStorageSync("latitude", a), wx.setStorageSync("longitude", t), wx.setStorageSync("login_name", n), wx.setStorageSync("police_station", o), wx.setStorageSync("login_id_card", r), wx.setStorageSync("name", c), wx.setStorageSync("id_card", s), wx.setStorageSync("mobile_phone", i), wx.setStorageSync("manual_recording_reason", d), wx.setStorageSync("manual_recording_other_reason", l), wx.setStorageSync("file_id_ocr", _), wx.setStorageSync("company_rec_id", g), wx.setStorageSync("live_address", S), wx.setStorageSync("dzbm", u), wx.setStorageSync("company_of_community", p), wx.setStorageSync("country", m), wx.setStorageSync("gender", x), wx.setStorageSync("remark", y), wx.setStorageSync("department_code", L), wx.setStorageSync("company_add_foreign_jump_to", R), wx.setStorageSync("whether_verify", T), wx.setStorageSync("issue_date", w), wx.setStorageSync("expiry_date", b), wx.setStorageSync("permanent_detail_address", h), wx.setStorageSync("permanent_address_list", k), wx.setStorageSync("cloud_shield_token", v), wx.setStorageSync("company_name", f), wx.setStorageSync("abroad_relevance_people_code", j), wx.setStorageSync("abroad_relevance_goods_code", C), wx.setStorageSync("contacts_id_card_type", U), wx.setStorageSync("contacts_id_card", H), wx.setStorageSync("relationship", I), wx.setStorageSync("first_name", M), wx.setStorageSync("last_name", E), wx.setStorageSync("birthday", q), wx.setStorageSync("contacts_name", z), wx.setStorageSync("contacts_phone", O), wx.setStorageSync("post_data_conflict", D)
  },
  onUnload: function() {},
  bindmessage: function(e) {},
  go_index: function() {
    wx.redirectTo({
      url: "../../../index_01/pages/my/my"
    })
  }
});