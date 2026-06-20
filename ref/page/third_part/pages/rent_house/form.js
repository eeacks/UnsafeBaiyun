var e, a = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/typeof"),
  o = require("../../../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../../../util/regenerator-runtime/runtime")) && e.__esModule;
var n = require("../../../../util/util.js"),
  r = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: "",
    jump_path: "helper-package/SafetyPayment",
    show_jump: !1,
    extra_data: {},
    seconds: 0
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
    var c = this;
    return o(a().mark((function o() {
      var d, _, i, s, l, u, g, S, p, m, y, w, x, h, v, f, b, k, D;
      return a().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (console.log("rent_house onload:", e), d = "https://qv1.pinganbaiyun.cn/p_055_rent_house_xcx/www/index.html", _ = c, i = wx.getStorageSync("openid"), s = wx.getStorageSync("unionid"), "" == i || null == i || null == i || "[object Undefined]" == i || "" == s || null == s || null == s || "[object Undefined]" == s) {
              a.next = 10;
              break
            }
            r.globalData.unionid = s, r.globalData.openid = i, a.next = 33;
            break;
          case 10:
            return a.prev = 10, wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), a.next = 14, n.wx_login();
          case 14:
            if (l = a.sent, console.log("login_result:", l), wx.hideLoading(), "000000000000" != l.data[0].resp_code) {
              a.next = 24;
              break
            }
            r.globalData.openid = l.data[1].openid, r.globalData.unionid = l.data[1].unionid, wx.setStorageSync("openid", r.globalData.openid), wx.setStorageSync("unionid", r.globalData.unionid), a.next = 26;
            break;
          case 24:
            return wx.showModal({
              title: "提示",
              content: l.data[0].resp_msg + "(" + l.data[0].resp_code + ")",
              showCancel: !1,
              success: function(e) {}
            }), a.abrupt("return");
          case 26:
            a.next = 33;
            break;
          case 28:
            return a.prev = 28, a.t0 = a.catch(10), console.log("e:", a.t0), wx.showModal({
              title: "提示",
              content: "" + JSON.stringify(a.t0),
              showCancel: !1,
              success: function(e) {}
            }), a.abrupt("return");
          case 33:
            if (a.prev = 33, u = e.yjm_param, g = e.type, null == u || null == u || null == g || null == g) {
              a.next = 41;
              break
            }
            return S = d + "?yjm_param=" + u + "&yjm_type=" + g + "&openId=" + r.globalData.openid, console.log("粤居码的处理 jump src:", S), c.setData({
              src: S
            }), a.abrupt("return");
          case 41:
            a.next = 46;
            break;
          case 43:
            a.prev = 43, a.t1 = a.catch(33);
          case 46:
            if ((null == r.globalData.access_token || null == r.globalData.access_token || "" == r.globalData.access_token || "[object Undefined]" == r.globalData.access_token) && "{}" !== JSON.stringify(e)) {
              a.next = 107;
              break
            }
            if (r.globalData.back_url = null, a.prev = 48, "", p = decodeURIComponent(e.param_type), console.log("param_type", t(p), p), "undefined" == p || "null" == p || "" == p) {
              a.next = 57;
              break
            }
            return S = "https://xcx.pinganbaiyun.cn/strike_black/third_part/crack_down_black/vue/p_085_mass_prevention/www/index.html?access_token=" + r.globalData.access_token + "&param_type=" + p + "&param_value=" + e.param_value, c.setData({
              src: S
            }), console.log("带参数跳转的", S), a.abrupt("return");
          case 57:
            a.next = 62;
            break;
          case 59:
            a.prev = 59, a.t2 = a.catch(48), console.log("onLoad e", a.t2);
          case 62:
            m = "";
            try {
              "mode_simple" === wx.getStorageSync("current_mode") && (m += "&hua_jia=true")
            } catch (e) {}
            if ("", y = "", a.prev = 66, r.globalData.back_url = null, r.globalData.access_token, y = decodeURIComponent(e.jump_to), w = decodeURIComponent(e.manager_rec_id), "GO_MANAGER" != y) {
              a.next = 77;
              break
            }
            return S = d + "?access_token=" + r.globalData.access_token + "&jump_to=" + y + "&manager_rec_id=" + w + m, S = encodeURI(S), console.log("ret_house jump src:", S), c.setData({
              src: S
            }), a.abrupt("return");
          case 77:
            if ("" == y || null == y || null == y || "undefined" == y) {
              a.next = 83;
              break
            }
            return S = d + "?access_token=" + r.globalData.access_token + "&jump_to=" + y + m, S = encodeURI(S), console.log("ret_house jump src:", S), c.setData({
              src: S
            }), a.abrupt("return");
          case 83:
            a.next = 90;
            break;
          case 85:
            a.prev = 85, a.t3 = a.catch(66), console.log("onLoad e", a.t3), "", y = "";
          case 90:
            return x = "", h = "", v = "", f = "", b = "", k = "", e.oper_type && (x = e.oper_type), e.rent_house_code && (h = e.rent_house_code), e.rent_house_attribute && (k = e.rent_house_attribute), e.room_code && (f = e.room_code), e.perfect_type && (b = e.perfect_type), e.renter_rec_id && (v = e.renter_rec_id), S = d + "?access_token=" + r.globalData.access_token + m + "&oper_type=" + x + "&rent_house_code=" + h + "&renter_rec_id=" + v + "&rent_house_attribute=" + k + "&room_code=" + f + "&perfect_type=" + b, S = encodeURI(S), console.log("ret_house normal src:", S), c.setData({
              src: S
            }), a.abrupt("return");
          case 107:
            wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), "RENT_HOUSE", D = {
              openId: r.globalData.openid,
              oper_type: "RENT_HOUSE"
            }, "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
              method: "POST",
              dataType: "json",
              data: D,
              success: function(a) {
                if (wx.hideLoading(), console.log("检查进度结果", a), "000000000003" != a.data[0].resp_code) return r.globalData.back_url = "RENT_HOUSE", void wx.showModal({
                  title: "安居助手",
                  content: "体验房屋自主申报及入住登记功能，需要您实名注册。",
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
                });
                var o = a.data[0].access_token;
                r.globalData.access_token = o;
                try {
                  var n;
                  if (n = decodeURIComponent(e.param_type), console.log("param_type", t(n), n), "undefined" != n && "null" != n && "" != n) {
                    var c = "https://xcx.pinganbaiyun.cn/strike_black/third_part/crack_down_black/vue/p_085_mass_prevention/www/index.html?access_token=" + r.globalData.access_token + "&param_type=" + n + "&param_value=" + e.param_value;
                    return _.setData({
                      src: c
                    }), void console.log("带参数跳转的", c)
                  }
                } catch (e) {
                  console.log("onLoad e", e)
                }
                o = "";
                var i = "";
                try {
                  r.globalData.back_url = null, o = r.globalData.access_token, i = decodeURIComponent(e.jump_to);
                  var s = decodeURIComponent(e.manager_rec_id);
                  if ("GO_MANAGER" == i) {
                    c = d + "?access_token=" + r.globalData.access_token + "&jump_to=" + i + "&manager_rec_id=" + s;
                    return c = encodeURI(c), console.log("ret_house jump src:", c), void _.setData({
                      src: c
                    })
                  }
                  if ("" != i && null != i && null != i && "undefined" != i) {
                    c = d + "?access_token=" + r.globalData.access_token + "&jump_to=" + i;
                    return c = encodeURI(c), console.log("ret_house jump src:", c), void _.setData({
                      src: c
                    })
                  }
                } catch (e) {
                  console.log("onLoad e", e), o = "", i = ""
                }
              },
              fail: function(e) {
                wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                  title: "提示",
                  content: "获取状态异常-1," + e.errMsg,
                  showCancel: !1
                })
              }
            });
          case 109:
          case "end":
            return a.stop()
        }
      }), o, null, [
        [10, 28],
        [33, 43],
        [48, 59],
        [66, 85]
      ])
    })))()
  },
  onShow: function() {
    console.log("onShow")
  },
  onUnload: function() {
    console.log("onUnload")
  },
  bindmessage: function(e) {
    console.log(e.detail.data[0], "数据");
    var t, n, c = "",
      d = "",
      _ = "";
    try {
      c = e.detail.data[0].company_add_foreign_jump_to, d = e.detail.data[0].openId, _ = e.detail.data[0].src
    } catch (e) {
      c = "", d = ""
    }
    if ("rent_house_add_foreign_jump_to" == c && "undefined" != c && null != c) {
      console.log("小程序出租屋录入境外人员数据"), c = e.detail.data[0].company_add_foreign_jump_to;
      var i = e.detail.data[0].company_of_community,
        s = e.detail.data[0].company_rec_id,
        l = e.detail.data[0].country,
        u = e.detail.data[0].file_id_ocr,
        g = e.detail.data[0].gender,
        S = e.detail.data[0].id_card,
        p = e.detail.data[0].latitude,
        m = e.detail.data[0].live_address,
        y = e.detail.data[0].login_id_card,
        w = e.detail.data[0].login_name,
        x = e.detail.data[0].longitude,
        h = e.detail.data[0].manual_recording_other_reason,
        v = e.detail.data[0].manual_recording_reason,
        f = e.detail.data[0].mobile_phone,
        b = e.detail.data[0].name,
        k = e.detail.data[0].police_station,
        D = e.detail.data[0].remark,
        j = e.detail.data[0].department_code,
        R = e.detail.data[0].expired_month_foreign,
        T = e.detail.data[0].date_unit_foreign;
      wx.removeStorageSync("company_add_foreign_jump_to"), wx.removeStorageSync("company_of_community"), wx.removeStorageSync("company_rec_id"), wx.removeStorageSync("country"), wx.removeStorageSync("file_id_ocr"), wx.removeStorageSync("gender"), wx.removeStorageSync("id_card"), wx.removeStorageSync("latitude"), wx.removeStorageSync("live_address"), wx.removeStorageSync("login_id_card"), wx.removeStorageSync("login_name"), wx.removeStorageSync("longitude"), wx.removeStorageSync("manual_recording_other_reason"), wx.removeStorageSync("manual_recording_reason"), wx.removeStorageSync("mobile_phone"), wx.removeStorageSync("name"), wx.removeStorageSync("police_station"), wx.removeStorageSync("remark"), wx.removeStorageSync("department_code"), wx.removeStorageSync("expired_month_foreign"), wx.removeStorageSync("date_unit_foreign"), wx.setStorageSync("company_add_foreign_jump_to", c), wx.setStorageSync("company_of_community", i), wx.setStorageSync("company_rec_id", s), wx.setStorageSync("country", l), wx.setStorageSync("file_id_ocr", u), wx.setStorageSync("gender", g), wx.setStorageSync("id_card", S), wx.setStorageSync("latitude", p), wx.setStorageSync("live_address", m), wx.setStorageSync("login_id_card", y), wx.setStorageSync("login_name", w), wx.setStorageSync("longitude", x), wx.setStorageSync("manual_recording_other_reason", h), wx.setStorageSync("manual_recording_reason", v), wx.setStorageSync("mobile_phone", f), wx.setStorageSync("name", b), wx.setStorageSync("police_station", k), wx.setStorageSync("remark", D), wx.setStorageSync("department_code", j), wx.setStorageSync("expired_month_foreign", R), wx.setStorageSync("date_unit_foreign", T)
    } else if ("" != d && "undefined" != d && null != d) {
      console.log("根据openId判断是否是出租屋审批租客后跳过来的下发模板消息给租客");
      var E = e.detail.data[0].oper_type,
        I = e.detail.data[0].house_type,
        U = e.detail.data[0].renter_rec_id;
      wx.removeStorageSync("openId"), wx.removeStorageSync("oper_type"), wx.removeStorageSync("house_type"), wx.removeStorageSync("renter_rec_id"), wx.setStorageSync("openId", d), wx.setStorageSync("oper_type", E), wx.setStorageSync("house_type", I), wx.setStorageSync("renter_rec_id", U)
    } else if ("HOUSE_MANAGER" == _) {
      var M = e.detail.data[0].rent_house_code,
        C = e.detail.data[0].busi_code,
        L = e.detail.data[0].event_type,
        O = e.detail.data[0].cloud_shield_token;
      wx.removeStorageSync("rent_house_code"), wx.removeStorageSync("busi_code"), wx.removeStorageSync("event_type"), wx.removeStorageSync("house_manager_token"), wx.setStorageSync("rent_house_code", M), wx.setStorageSync("busi_code", C), wx.setStorageSync("event_type", L), wx.setStorageSync("house_manager_token", O)
    } else if ("EVENT_REPORTING_BLUETOOTH" == _) {
      var N = e.detail.data[0].guard_code,
        q = (M = e.detail.data[0].rent_house_code, O = e.detail.data[0].cloud_shield_token, e.detail.data[0].community_name),
        H = e.detail.data[0].police_station_name;
      wx.removeStorageSync("guard_code"), wx.removeStorageSync("rent_house_code"), wx.removeStorageSync("cloud_shield_token"), wx.removeStorageSync("pay_bluetooth_community_name"), wx.removeStorageSync("pay_bluetooth_police_station_name"), wx.setStorageSync("guard_code", N), wx.setStorageSync("rent_house_code", M), wx.setStorageSync("cloud_shield_token", O), wx.setStorageSync("pay_bluetooth_community_name", q), wx.setStorageSync("pay_bluetooth_police_station_name", H)
    } else if ("EVENT_REPORTING_IM_CHAT" == _) {
      M = e.detail.data[0].rent_house_code, O = e.detail.data[0].cloud_shield_token;
      wx.removeStorageSync("rent_house_code"), wx.removeStorageSync("cloud_shield_token"), wx.setStorageSync("rent_house_code", M), wx.setStorageSync("cloud_shield_token", O)
    } else if ("EVENT_REPORTING_BLUETOOTH_MULTI" == _) {
      M = e.detail.data[0].rent_house_code, O = e.detail.data[0].cloud_shield_token;
      var P = e.detail.data[0].guard_codes,
        A = e.detail.data[0].rec_id,
        G = e.detail.data[0].room_code,
        V = e.detail.data[0].upload_file_id,
        B = e.detail.data[0].phone;
      wx.removeStorageSync("rent_house_code"), wx.removeStorageSync("cloud_shield_token"), wx.removeStorageSync("guard_codes"), wx.removeStorageSync("rec_id"), wx.removeStorageSync("room_code"), wx.removeStorageSync("upload_file_id"), wx.removeStorageSync("phone"), wx.setStorageSync("rent_house_code", M), wx.setStorageSync("cloud_shield_token", O), wx.setStorageSync("guard_codes", P), wx.setStorageSync("rec_id", A), wx.setStorageSync("room_code", G), wx.setStorageSync("upload_file_id", V), wx.setStorageSync("phone", B)
    } else if ("Baiyun_e_Renting" == _) {
      var Y = e.detail.data[0].wx_appid,
        J = e.detail.data[0].path,
        Q = e.detail.data[0].extraData;
      console.log("extraData", Q), wx.navigateToMiniProgram({
        appId: Y,
        path: J,
        extraData: Q,
        envVersion: "release",
        success: (n = o(a().mark((function e(t) {
          return a().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                console.log("police_verify success", t);
              case 1:
              case "end":
                return e.stop()
            }
          }), e)
        }))), function(e) {
          return n.apply(this, arguments)
        }),
        fail: function(e) {
          console.log("police_verify fail", e), wx.showModal({
            title: "白云e租房跳转失败",
            content: e,
            showCancel: !1,
            success: function() {}
          })
        }
      })
    } else {
      if ("Baiyun_feiji" == _) {
        var W = "../../../../page/page_006_common_webview/page_006_common_webview?scene=que&encry_id=hnvrM529UbAQFcV2bwVrospuiQCItPmB&check_register=YES";
        return console.log("1732089972184 url", W), void wx.redirectTo({
          url: W
        })
      }
      if ("WATER_SUPPLY_YWBL" == _) {
        var F = e.detail.data[0].wx_appid,
          z = e.detail.data[0].path;
        wx.navigateToMiniProgram({
          appId: F,
          path: z,
          extraData: {},
          envVersion: "release",
          success: (t = o(a().mark((function e(t) {
            return a().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  console.log("police_verify success", t);
                case 1:
                case "end":
                  return e.stop()
              }
            }), e)
          }))), function(e) {
            return t.apply(this, arguments)
          }),
          fail: function(e) {
            console.log("police_verify fail", e), wx.showModal({
              title: "供水服务跳转失败",
              content: e,
              showCancel: !1,
              success: function() {}
            })
          }
        })
      } else if ("questionare_jump" == _) {
        var K = "/page/page_006_common_webview/page_006_common_webview?scene=que&encry_id=" + e.detail.data[0].question_encry_id + "&check_register=YES";
        wx.navigateTo({
          url: K
        })
      } else {
        console.log("待人录入套间 代人注册"), r.globalData.register_type = "RENTER_" + Math.random().toString(36).substr(2, 5) + "_";
        M = e.detail.data[0].rent_house_code, G = e.detail.data[0].room_code;
        var X = e.detail.data[0].room_name,
          Z = e.detail.data[0].expired_month,
          $ = e.detail.data[0].date_unit,
          ee = e.detail.data[0].rent_period,
          ae = e.detail.data[0].admin_phone,
          te = e.detail.data[0].rent_house_owner_id_card,
          oe = e.detail.data[0].agent_entry;
        console.log("rent_period,admin_phone,rent_house_owner_id_card", ee, ae, te), wx.removeStorageSync("rent_house_code"), wx.removeStorageSync("room_code"), wx.removeStorageSync("room_name"), wx.removeStorageSync("expired_month"), wx.removeStorageSync("date_unit"), wx.removeStorageSync("rent_period"), wx.removeStorageSync("admin_phone"), wx.removeStorageSync("rent_house_owner_id_card"), wx.removeStorageSync("agent_entry"), wx.setStorageSync("rent_house_code", M), wx.setStorageSync("room_code", G), wx.setStorageSync("room_name", X), wx.setStorageSync("expired_month", Z), wx.setStorageSync("date_unit", $), wx.setStorageSync("rent_period", ee), wx.setStorageSync("admin_phone", ae), wx.setStorageSync("rent_house_owner_id_card", te), wx.setStorageSync("agent_entry", oe)
      }
    }
  }
});