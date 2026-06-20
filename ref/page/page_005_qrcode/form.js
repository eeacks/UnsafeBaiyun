var e, t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/typeof"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../util/regenerator-runtime/runtime")) && e.__esModule;
var o, r, c, s, i, d = require("../../util/util.js"),
  u = require("../../config.js"),
  l = getApp();
Page({
  data: {
    showModal_location: !1,
    show_toptip_msg: "",
    src: "",
    type: "",
    encry_id: "",
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
    scene: null,
    gohome_today_date: "",
    options_data: null,
    bg_img: "data:image/png;base64,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"
  },
  end_data: function() {},
  onLoad: (i = n(t().mark((function e(o) {
    var r, c, s, i, p, _, g, x, b, f, w, h, m, y, v, k, S, D, T, O, M, j, P;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (r = this, console.log("1757072183046 options", o), r.data.options_data = o, JSON.stringify(o), c = o.q, console.log("qrcode_text before decode", c), c = decodeURIComponent(c), console.log("qrcode_text decode", c), s = r.get_type(c), console.log("type:", s), i = r.get_encry_id(c), console.log("encry_id 001:", i), i = encodeURIComponent(i), console.log("encodeURIComponent encry_id 002:", i), r.setData({
              type: s
            }), r.setData({
              encry_id: i
            }), "passed" != s && "xlm" != s && "fzm" != s) {
            e.next = 54;
            break
          }
          if (wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), "dhiBX4SPcAvregJhShzssxjFmF6DCHdz" != i && "dhiBX4SPcAuVb9C01bPwQ29BvDiz1P3z" != i && "dhiBX4SPcAuVb9C01bPwQ29BvDiz1P3z" != i || "passed" != s) {
            e.next = 24;
            break
          }
          return console.log("办证大厅通行码，则直接到通行码页面，不检查注册..."), p = "/page/component/pages/pass_document_green/component?encry_id=" + i + "&busi_type=2&cry_type=cry&show_type=", console.log("encodeURIComponent url", p), wx.redirectTo({
            url: p
          }), e.abrupt("return");
        case 24:
          if (_ = wx.getStorageSync("openid"), g = wx.getStorageSync("unionid"), "" == _ || null == _ || null == _ || "[object Undefined]" == _ || "" == g || null == g || null == g || "[object Undefined]" == g) {
            e.next = 32;
            break
          }
          l.globalData.unionid = g, l.globalData.openid = _, e.next = 53;
          break;
        case 32:
          return e.prev = 32, e.next = 35, d.wx_login();
        case 35:
          if (x = e.sent, console.log("login_result:", x), "000000000000" != x.data[0].resp_code) {
            e.next = 44;
            break
          }
          l.globalData.openid = x.data[1].openid, l.globalData.unionid = x.data[1].unionid, wx.setStorageSync("openid", l.globalData.openid), wx.setStorageSync("unionid", l.globalData.unionid), e.next = 46;
          break;
        case 44:
          return wx.showModal({
            title: "提示",
            content: x.data[0].resp_msg + "(" + x.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 46:
          e.next = 53;
          break;
        case 48:
          return e.prev = 48, e.t0 = e.catch(32), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 53:
          b = "GET_TOKEN", f = {
            openId: l.globalData.openid,
            oper_type: b
          }, p = "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
            url: p,
            method: "POST",
            dataType: "json",
            data: f,
            success: function() {
              var e = n(t().mark((function e(n) {
                var c, s, i, u, p, _, g, x, b, f, w, h, m, y, v, k, S, D, T, O, M, j, P, X;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", n), "000000000003" != n.data[0].resp_code) {
                        e.next = 148;
                        break
                      }
                      return c = n.data[0].access_token, l.globalData.access_token = c, s = r.data.type, i = r.data.encry_id, e.prev = 7, u = {
                        type: s,
                        encry_id: i,
                        sys_id: "tencent"
                      }, p = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_001_health_passport/sv_006_motor_qrcode", wx.showLoading({
                        title: "请稍等...",
                        mask: !0
                      }), e.next = 13, d.wx_request(p, u);
                    case 13:
                      if (_ = e.sent, console.log("sv_006_motor_qrcode res:", f, a(_), _), wx.hideLoading(), "000000000000" != _.data[0].resp_code) {
                        e.next = 24;
                        break
                      }
                      return g = _.data[0].company_code, x = "/module_004/traffic_improve/traffic_questionnaire?company_code=" + g + "&access_token=" + c, console.log("encodeURIComponent url", x), wx.redirectTo({
                        url: x
                      }), e.abrupt("return");
                    case 24:
                      if ("000000000001" != _.data[0].resp_code) {
                        e.next = 35;
                        break
                      }
                      return b = 0, "passed" == s && (b = 2), "xlm" == s && (b = 3), "fzm" == s && (b = 4), f = "/page/component/pages/pass_document_green/component?encry_id=" + i + "&busi_type=" + b + "&cry_type=cry&show_type=", console.log("encodeURIComponent url", f), wx.redirectTo({
                        url: f
                      }), e.abrupt("return");
                    case 35:
                      if ("000000000002" != _.data[0].resp_code) {
                        e.next = 52;
                        break
                      }
                      return b = 0, "passed" == s && (b = 2), "xlm" == s && (b = 3), "fzm" == s && (b = 4), wx.setStorageSync("access_token", l.globalData.access_token), wx.setStorageSync("openid", l.globalData.openid), console.log("给独立包首次装载后使用", wx.getStorageSync("access_token")), wx.setStorageSync("encry_id", i), wx.setStorageSync("busi_type", b), wx.setStorageSync("cry_type", "cry"), wx.setStorageSync("show_type", ""), "zc" == o.source && wx.setStorageSync("acid_source", "zc"), wx.redirectTo({
                        url: "../../module_004/addPersonInfo/inform?show_update_str=NO"
                      }), e.abrupt("return");
                    case 52:
                      if ("0000000556389" != _.data[0].resp_code || "passed" != s) {
                        e.next = 65;
                        break
                      }
                      return w = _.data[0].company_code, h = _.data[0].company_name, m = {
                        company_code: w,
                        company_name: h
                      }, y = JSON.stringify(m), v = "../../page/third_part/pages/company/form?param_type=COMPANY_DETAIL&param_value=" + y, v = encodeURI(v), console.log("jum_url", v), wx.navigateTo({
                        url: v
                      }), e.abrupt("return");
                    case 65:
                      if ("0000000005335" != _.data[0].resp_code) {
                        e.next = 80;
                        break
                      }
                      return wx.setStorageSync("access_token", l.globalData.access_token), wx.setStorageSync("openid", l.globalData.openid), console.log("给独立包首次装载后使用", wx.getStorageSync("access_token")), wx.setStorageSync("encry_id", i), wx.setStorageSync("busi_type", b), wx.setStorageSync("cry_type", "cry"), wx.setStorageSync("show_type", ""), k = _.data[0].company_code, S = "/module_001/p_014_bank_apply/bank_apply_index/form?company_code=" + k, console.log("encodeURIComponent2 url", S), wx.redirectTo({
                        url: S
                      }), e.abrupt("return");
                    case 80:
                      if ("0000000005336" != _.data[0].resp_code) {
                        e.next = 92;
                        break
                      }
                      return wx.setStorageSync("access_token", l.globalData.access_token), wx.setStorageSync("openid", l.globalData.openid), console.log("给独立包首次装载后使用", wx.getStorageSync("access_token")), wx.setStorageSync("encry_id", i), wx.setStorageSync("busi_type", b), wx.setStorageSync("cry_type", "cry"), wx.setStorageSync("show_type", ""), f = "../page_006_common_webview/page_006_common_webview?scene=que&encry_id=tPF72fJqhceJmbI0wyUMhQ%3D%3D&check_register=YES", wx.redirectTo({
                        url: f
                      }), e.abrupt("return");
                    case 92:
                      return b = 0, "passed" == s && (b = 2), "xlm" == s && (b = 3), "fzm" == s && (b = 4), u = {
                        foo: "bar",
                        type: s,
                        encry_id: i,
                        busi_type: b
                      }, p = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_001_health_passport/sv_008_get_guarantee_update", wx.showLoading({
                        title: "请稍等...",
                        mask: !0
                      }), e.next = 101, d.wx_request(p, u, l.globalData.access_token);
                    case 101:
                      if (_ = e.sent, console.log("res:", f, a(_), _), wx.hideLoading(), "000000000000" != _.data[0].resp_code) {
                        e.next = 135;
                        break
                      }
                      if (1 != _.data[0].go_update_info_page) {
                        e.next = 125;
                        break
                      }
                      if (b = 0, "passed" == s && (b = 2), "xlm" == s && (b = 3), "fzm" == s && (b = 4), wx.setStorageSync("access_token", l.globalData.access_token), wx.setStorageSync("openid", l.globalData.openid), wx.setStorageSync("encry_id", i), wx.setStorageSync("busi_type", b), wx.setStorageSync("cry_type", "cry"), wx.setStorageSync("show_type", ""), 1 != _.data[0].need_update) {
                        e.next = 121;
                        break
                      }
                      return wx.redirectTo({
                        url: "../../module_004/addPersonInfo/inform?show_update_str=NO"
                      }), e.abrupt("return");
                    case 121:
                      return wx.redirectTo({
                        url: "../../module_004/addPersonInfo/inform?show_update_str=YES"
                      }), e.abrupt("return");
                    case 123:
                      e.next = 133;
                      break;
                    case 125:
                      return b = 0, "passed" == s && (b = 2), "xlm" == s && (b = 3), "fzm" == s && (b = 4), f = "/page/component/pages/pass_document_green/component?encry_id=" + i + "&busi_type=" + b + "&cry_type=cry&show_type=", console.log("encodeURIComponent url", f), wx.redirectTo({
                        url: f
                      }), e.abrupt("return");
                    case 133:
                      e.next = 137;
                      break;
                    case 135:
                      return wx.showModal({
                        title: "提示",
                        content: _.data[0].resp_msg + "(" + _.data[0].resp_code + ")",
                        showCancel: !1
                      }), e.abrupt("return");
                    case 137:
                      e.next = 144;
                      break;
                    case 139:
                      return e.prev = 139, e.t0 = e.catch(7), console.log("sv_006_motor_qrcode e", e.t0), wx.showModal({
                        title: "提示",
                        content: "程序异常" + e.t0,
                        showCancel: !1
                      }), e.abrupt("return");
                    case 144:
                      return wx.showModal({
                        title: "提示",
                        content: "程序异常(199913)",
                        showCancel: !1
                      }), e.abrupt("return");
                    case 148:
                      return s = r.data.type, i = r.data.encry_id, D = "", T = "平安码丨平安白云", e.prev = 152, O = {
                        type: s,
                        encry_id: i,
                        sys_id: "tencent"
                      }, M = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_001_health_passport/sv_006_motor_qrcode", wx.showLoading({
                        title: "请稍等...",
                        mask: !0
                      }), e.next = 158, d.wx_request(M, O);
                    case 158:
                      j = e.sent, console.log("res:", M, a(j), j), wx.hideLoading(), "000000000000" == j.data[0].resp_code ? (P = j.data[0].company_code, l.globalData.back_url = "BACK_TO_MOTOR_MNG", wx.setStorageSync("company_code_let", P), D = "摩电安全行驶,需要您实名注册") : "0000000005335" == j.data[0].resp_code ? (X = j.data[0].company_code, l.globalData.back_url = "BACK_TO_OPEN_BANK", wx.setStorageSync("company_code_let", X), D = "银行网点扫码开户,需要您实名注册", wx.setStorageSync("encry_id", i), wx.setStorageSync("busi_type", b), wx.setStorageSync("cry_type", "cry"), wx.setStorageSync("show_type", "")) : (D = "扫码通行，需要您实名注册。", b = 0, "passed" == s && (b = 2), "xlm" == s && (b = 3), "fzm" == s && (b = 4, D = "穗安防诈，需要您实名注册。"), l.globalData.back_url = "WISHI_YOU_HEALTH", wx.setStorageSync("encry_id", i), wx.setStorageSync("busi_type", b), wx.setStorageSync("cry_type", "cry"), wx.setStorageSync("show_type", "")), e.next = 169;
                      break;
                    case 164:
                      return e.prev = 164, e.t1 = e.catch(152), console.log("sv_006_motor_qrcode e", e.t1), wx.showModal({
                        title: "提示",
                        content: "程序异常" + e.t1,
                        showCancel: !1
                      }), e.abrupt("return");
                    case 169:
                      return wx.showModal({
                        title: T,
                        content: D,
                        showCancel: !1,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          wx.redirectTo({
                            url: "../component/pages/form_ocr_01/form"
                          })
                        }
                      }), e.abrupt("return");
                    case 171:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [7, 139],
                  [152, 164]
                ])
              })));
              return function(t) {
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
        case 54:
          if ("guard" != s) {
            e.next = 58;
            break
          }
          return p = "/module_001/p_006_scan_remote_unlock/remote_unlock?encry_id=" + i, wx.redirectTo({
            url: p
          }), e.abrupt("return");
        case 58:
          if ("activity" != s) {
            e.next = 96;
            break
          }
          if ("sports" != r.get_buzi_type(c)) {
            e.next = 68;
            break
          }
          return p = "/module_003_online_buzi/component/sports_add/form?encry_id=" + i, console.log("encodeURIComponent url", p), wx.redirectTo({
            url: p
          }), e.abrupt("return");
        case 68:
          return e.prev = 68, f = {
            type: s,
            encry_id: i,
            sys_id: "tencent"
          }, p = "https://xcx.pinganbaiyun.cn/qrcode/api_001_qrcode/sv_002_get_qrcode_decry", e.next = 73, d.wx_request(p, f);
        case 73:
          if (w = e.sent, console.log("res:", p, a(w), w), wx.hideLoading(), "000000000000" != w.data[0].resp_code) {
            e.next = 87;
            break
          }
          return w.data[0].url, h = w.data[0].scence, w.data[0].jump_type, p = "/page/page_006_common_webview/page_006_common_webview?scene=MEETING_SHOW&access_token=" + l.globalData.access_token + "&encry_id=1742274729078&scence_id=" + h, console.log("1729751478205 url", p), p = encodeURI(p), wx.redirectTo({
            url: p
          }), e.abrupt("return");
        case 87:
          return wx.showModal({
            title: "提示",
            content: w.data[0].resp_msg + w.data[0].resp_code,
            showCancel: !1
          }), e.abrupt("return");
        case 89:
          e.next = 96;
          break;
        case 91:
          return e.prev = 91, e.t1 = e.catch(68), console.log("获取保存的用户信息 e", e.t1), wx.showModal({
            title: "提示19993",
            content: e.t1,
            showCancel: !1
          }), e.abrupt("return");
        case 96:
          if ("wifi" != s) {
            e.next = 100;
            break
          }
          return p = "/module_001/p_007_wifi/wifi?encry_id=" + i, wx.redirectTo({
            url: p
          }), e.abrupt("return");
        case 100:
          if ("que" != s && "fraud_frontd" != s && "tonghe_gov" != s && "zhnm" != s && "transcript" != s && "MEETING_SHOW" != s) {
            e.next = 104;
            break
          }
          return p = "../page_006_common_webview/page_006_common_webview?scene=" + s + "&encry_id=" + i + "&check_register=YES", wx.redirectTo({
            url: p
          }), e.abrupt("return");
        case 104:
          if ("my_room" != s) {
            e.next = 113;
            break
          }
          return (m = {}).buzi_type = "my_room", y = JSON.stringify(m), v = "../third_part/pages/rent_house/form?jump_to=GO_RENTER_INDEX@@@params:" + y, v = encodeURI(v), console.log("jump_url", v), wx.redirectTo({
            url: v
          }), e.abrupt("return");
        case 113:
          if ("fireworks_report" != s) {
            e.next = 117;
            break
          }
          return wx.redirectTo({
            url: "/page/page_006_common_webview/page_006_common_webview?buzi_type=fireworks_report&check_register=NO"
          }), e.abrupt("return");
        case 117:
          if ("tsjb" != s) {
            e.next = 121;
            break
          }
          return wx.redirectTo({
            url: "../../page/strike_black/form?scene=111"
          }), e.abrupt("return");
        case 121:
          if ("fjzxx" != s) {
            e.next = 124;
            break
          }
          return r.check_mailbox_register_then_jump(), e.abrupt("return");
        case 124:
          if ("go_home" != s) {
            e.next = 134;
            break
          }
          return k = new Date, S = k.getFullYear(), D = k.getMonth() + 1, T = k.getDate(), D < 10 && (D = "0" + D), T < 10 && (T = "0" + T), this.data.gohome_today_date = S + "/" + D + "/" + T, r.go_home(), e.abrupt("return");
        case 134:
          if ("p_120_fda_address_lib" != s) {
            e.next = 138;
            break
          }
          return wx.redirectTo({
            url: "../../module_002_fda/p_001_fda/address_lib/middle_page/middle_page"
          }), e.abrupt("return");
        case 138:
          if ("p_120_fda_address_pdf" != s) {
            e.next = 142;
            break
          }
          return O = "../page_006_common_webview/page_006_common_webview?buzi_type=" + s + "&encry_id=" + i + "&check_register=NO", wx.redirectTo({
            url: O
          }), e.abrupt("return");
        case 142:
          if ("GGAQSPBADJ" != s) {
            e.next = 146;
            break
          }
          return p = "/module_003_online_buzi/p_005_public_video_filing/public_video_filing_login_page/public_video_filing_login_page", wx.redirectTo({
            url: p
          }), e.abrupt("return");
        case 146:
          if ("t_001_uav_map" != s) {
            e.next = 150;
            break
          }
          return M = "/module_004/uav_map/uav_map?q=" + r.data.options_data.q, wx.redirectTo({
            url: M
          }), e.abrupt("return");
        case 150:
          if ("t_002_uav_map" != s) {
            e.next = 154;
            break
          }
          return j = "/module_004/uav_map_v2/uav_map_v2?q=" + r.data.options_data.q, wx.redirectTo({
            url: j
          }), e.abrupt("return");
        case 154:
          if ("passed" != s && "guard" != s && "xlm" != s && "fzm" != s && "activity" != s && "que" != s && "tq" != s && "my_room" != s && "wifi" != s) {
            e.next = 156;
            break
          }
          return e.abrupt("return");
        case 156:
          if (wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), null != (P = o.scene) && null != P && "" != P && r.setData({
              scene: P
            }), _ = wx.getStorageSync("openid"), g = wx.getStorageSync("unionid"), "" == _ || null == _ || null == _ || "[object Undefined]" == _ || "" == g || null == g || null == g || "[object Undefined]" == g) {
            e.next = 167;
            break
          }
          l.globalData.unionid = g, l.globalData.openid = _, e.next = 188;
          break;
        case 167:
          return e.prev = 167, e.next = 170, d.wx_login();
        case 170:
          if (x = e.sent, console.log("login_result:", x), "000000000000" != x.data[0].resp_code) {
            e.next = 179;
            break
          }
          l.globalData.openid = x.data[1].openid, l.globalData.unionid = x.data[1].unionid, wx.setStorageSync("openid", l.globalData.openid), wx.setStorageSync("unionid", l.globalData.unionid), e.next = 181;
          break;
        case 179:
          return wx.showModal({
            title: "提示",
            content: x.data[0].resp_msg + "(" + x.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 181:
          e.next = 188;
          break;
        case 183:
          return e.prev = 183, e.t2 = e.catch(167), console.log("e:", e.t2), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t2),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 188:
          b = "GET_TOKEN", f = {
            openId: l.globalData.openid,
            oper_type: b
          }, p = "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
            url: p,
            method: "POST",
            dataType: "json",
            data: f,
            success: function() {
              var e = n(t().mark((function e(n) {
                var o, c, s, i, p, _, g, x, b, f, w, h, m, y, v, k, S, D, T, O, M, j, P, X, z, A, H, L, N, I, C, E, J;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (console.log("检查进度结果", n), "000000000003" != n.data[0].resp_code) {
                        e.next = 276;
                        break
                      }
                      if (o = n.data[0].access_token, l.globalData.access_token = o, c = r.data.type, s = r.data.encry_id, "zc" != c) {
                        e.next = 60;
                        break
                      }
                      return e.prev = 7, i = {
                        access_token: l.globalData.access_token
                      }, p = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_008_get_face_check_log", e.next = 12, d.wx_request(p, i);
                    case 12:
                      if (n = e.sent, console.log("res:", p, a(n), n), "000000000000" != n.data[0].resp_code) {
                        e.next = 52;
                        break
                      }
                      if (_ = n.data[0].last_used_time, console.log("last_date:", _), g = (new Date).getTime(), x = g - _, console.log("diff_date", _, g, x), !(x > 6048e5)) {
                        e.next = 25;
                        break
                      }
                      wx.hideLoading(), wx.showModal({
                        title: "平安码丨平安白云",
                        content: "平安码需要您刷脸验证",
                        showCancel: !1,
                        cancelText: "暂不验证",
                        confirmText: "刷脸验证",
                        success: function(e) {
                          1 != e.confirm || wx.navigateTo({
                            url: "../../page/component/pages/camera_plugin_barcode/form"
                          })
                        }
                      }), e.next = 50;
                      break;
                    case 25:
                      return e.prev = 25, i = {
                        access_token: l.globalData.access_token
                      }, p = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_009_get_my_qrcode", e.next = 30, d.wx_request(p, i);
                    case 30:
                      if (n = e.sent, console.log("res:", p, a(n), n), "000000000000" != n.data[0].resp_code) {
                        e.next = 43;
                        break
                      }
                      return l.globalData.page_qrcode_qr_code = n.data[0].png_string, l.globalData.page_qrcode_name = n.data[0].name, l.globalData.page_qrcode_id_card = n.data[0].id_card, l.globalData.page_qrcode_mobile_phone = n.data[0].mobile_phone, l.globalData.page_qrcode_expire_date = n.data[0].timestamp, l.globalData.page_qrcode_avatar = n.data[0].avatar_string, wx.navigateTo({
                        url: "../../page/component/pages/form_03/form"
                      }), e.abrupt("return");
                    case 43:
                      wx.showModal({
                        title: "提示",
                        content: n.data[0].resp_msg + n.data[0].resp_code,
                        showCancel: !1
                      });
                    case 44:
                      e.next = 50;
                      break;
                    case 46:
                      e.prev = 46, e.t0 = e.catch(25), console.log("异常 e", e.t0), wx.showModal({
                        title: "异常",
                        content: e.t0,
                        showCancel: !1
                      });
                    case 50:
                      e.next = 53;
                      break;
                    case 52:
                      wx.showModal({
                        title: "提示",
                        content: n.data[0].resp_msg + n.data[0].resp_code,
                        showCancel: !1
                      });
                    case 53:
                      e.next = 59;
                      break;
                    case 55:
                      e.prev = 55, e.t1 = e.catch(7), console.log("获取保存的用户信息 e", e.t1), wx.showModal({
                        title: "异常",
                        content: e.t1,
                        showCancel: !1
                      });
                    case 59:
                      return e.abrupt("return");
                    case 60:
                      if ("jwsbykj" != c) {
                        e.next = 64;
                        break
                      }
                      return wx.setStorageSync("access_token", o), wx.redirectTo({
                        url: "/module_004/p_003_policing_room/index/index"
                      }), e.abrupt("return");
                    case 64:
                      if ("yhfxcxby" != c) {
                        e.next = 68;
                        break
                      }
                      return wx.request({
                        url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/get_user_is_bank_staff",
                        method: "POST",
                        data: {},
                        header: {
                          "Content-type": "application/json",
                          cloud_shield_token: l.globalData.access_token
                        },
                        success: function(e) {
                          console.log("bank_res", e), wx.hideLoading(), "000000000000" == e.data[0].resp_code ? e.data[0].is_bank_staff ? wx.redirectTo({
                            url: "/module_004/p_009_bank_search/customer_info_search?access_token=" + o
                          }) : wx.showModal({
                            title: "提示",
                            content: "您非银行职员，请先登记为银行职员"
                          }) : wx.showModal({
                            title: "提示",
                            content: e.data[0].resp_msg + "(" + e.data[0].resp_code + ")"
                          })
                        },
                        fail: function(e) {
                          wx.hideLoading(), wx.showModal({
                            title: "提示",
                            content: "请求失败" + e
                          })
                        }
                      }), e.abrupt("return");
                    case 68:
                      if ("meeting" != c) {
                        e.next = 100;
                        break
                      }
                      return e.prev = 69, i = {
                        type: c,
                        encry_id: s,
                        sys_id: "tencent",
                        openId: l.globalData.openid,
                        access_token: o
                      }, p = u.get_url() + "p_021_health_passport/api_002_rent_house_company/sv_011_inner_meeting", e.next = 74, d.wx_request(p, i);
                    case 74:
                      if (b = e.sent, console.log("res:", p, a(b), b), wx.hideLoading(), "000000000000" != b.data[0].resp_code) {
                        e.next = 91;
                        break
                      }
                      return f = b.data[0].meeting_code, w = b.data[0].rec_id, h = u.get_url() + "p_004_rent_house/p_010_inner_meeting/www/index.html", console.log("jump_url_post", h), m = {
                        meeting_code: f,
                        rec_id: w
                      }, y = JSON.stringify(m), p = "/page/page_006_common_webview/page_006_common_webview?url=" + h + "&params=" + y + "&check_register=NO", console.log("url", p), p = encodeURI(p), wx.redirectTo({
                        url: p
                      }), e.abrupt("return");
                    case 91:
                      wx.showModal({
                        title: "提示",
                        content: b.data[0].resp_msg + b.data[0].resp_code,
                        showCancel: !1
                      });
                    case 92:
                      e.next = 99;
                      break;
                    case 94:
                      return e.prev = 94, e.t2 = e.catch(69), console.log("获取保存的用户信息 e", e.t2), wx.showModal({
                        title: "提示19993",
                        content: e.t2,
                        showCancel: !1
                      }), e.abrupt("return");
                    case 99:
                      return e.abrupt("return");
                    case 100:
                      if ("qh" != c || "wdsJbPm4Z5MpMbfUJNCdsQ==" != decodeURIComponent(s)) {
                        e.next = 106;
                        break
                      }
                      return wx.setStorageSync("access_token", l.globalData.access_token), wx.setStorageSync("openid", l.globalData.openid), wx.hideLoading(), wx.showActionSheet({
                        itemList: ["请选择取号业务", "出入境业务", "户政业务"],
                        success: function(e) {
                          1 == e.tapIndex ? wx.redirectTo({
                            url: "../../module_001/online_take_num/index/index?type=0"
                          }) : 2 == e.tapIndex && wx.redirectTo({
                            url: "../../module_001/online_take_num/index/index?type=1"
                          }), console.log(e.tapIndex)
                        },
                        fail: function(e) {
                          console.log(e.errMsg)
                        }
                      }), e.abrupt("return");
                    case 106:
                      if ("qh" != c || "PducuZASRZ9+Ix9ypyD1MA==" != decodeURIComponent(s)) {
                        e.next = 112;
                        break
                      }
                      return wx.setStorageSync("access_token", l.globalData.access_token), wx.setStorageSync("openid", l.globalData.openid), wx.hideLoading(), wx.redirectTo({
                        url: "../../module_001/online_take_num/index/index?type=1&src=scan_code"
                      }), e.abrupt("return");
                    case 112:
                      if ("qh" != c || "iHpOzkuvgv2/0++CVxLO3g==" != decodeURIComponent(s)) {
                        e.next = 118;
                        break
                      }
                      return wx.setStorageSync("access_token", l.globalData.access_token), wx.setStorageSync("openid", l.globalData.openid), wx.hideLoading(), wx.redirectTo({
                        url: "../../module_001/online_take_num/index/index?type=0&src=scan_code"
                      }), e.abrupt("return");
                    case 118:
                      if (110 != r.data.scene) {
                        e.next = 125;
                        break
                      }
                      return wx.setStorageSync("access_token", l.globalData.access_token), wx.setStorageSync("openid", l.globalData.openid), console.log("户政业务现场取号"), wx.hideLoading(), wx.redirectTo({
                        url: "../../module_001/online_take_num/index/index?type=1&src=take_num_live"
                      }), e.abrupt("return");
                    case 125:
                      if ("concert" != c) {
                        e.next = 132;
                        break
                      }
                      return wx.setStorageSync("access_token", l.globalData.access_token), wx.setStorageSync("openid", l.globalData.openid), console.log("1747906167368 演唱会"), wx.hideLoading(), wx.redirectTo({
                        url: "../../module_004/p_004_concert/p_004_concert"
                      }), e.abrupt("return");
                    case 132:
                      if ("face_scan" != c) {
                        e.next = 137;
                        break
                      }
                      return v = "../../page/index_01/pages/my/my?buzi_type=" + c + "&encry_id=" + s, console.log("1757073949276 url_let", v), wx.redirectTo({
                        url: v
                      }), e.abrupt("return");
                    case 137:
                      if ("t_003_scan_fly" != c) {
                        e.next = 143;
                        break
                      }
                      return wx.setStorageSync("access_token", l.globalData.access_token), wx.setStorageSync("openid", l.globalData.openid), wx.redirectTo({
                        url: "/module_004/baiyun_scan_fly/baiyun_scan_fly"
                      }), e.abrupt("return");
                    case 143:
                      return e.prev = 143, i = {
                        type: c,
                        encry_id: s,
                        sys_id: "tencent"
                      }, p = "https://xcx.pinganbaiyun.cn/qrcode/api_001_qrcode/sv_002_get_qrcode_decry", e.next = 148, d.wx_request(p, i);
                    case 148:
                      if (b = e.sent, console.log("res:", p, a(b), b), wx.hideLoading(), "000000000000" != b.data[0].resp_code) {
                        e.next = 265;
                        break
                      }
                      if (k = b.data[0].url, S = b.data[0].scence, b.data[0].jump_type, "rent" != c && "room" != c && "garden" != c) {
                        e.next = 215;
                        break
                      }
                      return D = S, T = l.globalData.openid, i = {
                        rent_house_rec_id: D,
                        openId: T
                      }, "room" == c && (O = S, i.room_rec_id = O, i.rent_house_rec_id = ""), "garden" == c && (i.scence = S, i.busi_type = c), i.src = "SCAN_QRCODE", p = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_005_get_live_info", e.next = 165, d.wx_request(p, i);
                    case 165:
                      if (n = e.sent, wx.hideLoading(), "000000000000" != n.data[0].resp_code) {
                        e.next = 176;
                        break
                      }
                      return p = "/page/component/pages/pass_document_green/component?encry_id=" + D + "&busi_type=1&cry_type=plain_text", "room" == c && (p = "/page/component/pages/pass_document_green/component?encry_id=" + (O = S) + "&busi_type=5&cry_type=plain_text"), "garden" == c && (O = S, p = "/page/component/pages/pass_document_green/component?encry_id=" + S + "&busi_type=6&cry_type=plain_text"), console.log("encodeURIComponent url", p), wx.redirectTo({
                        url: p
                      }), e.abrupt("return");
                    case 176:
                      if ("0000000030566" != n.data[0].resp_code) {
                        e.next = 180;
                        break
                      }
                      e.next = 210;
                      break;
                    case 180:
                      if ("0000000030581" != n.data[0].resp_code && "00000130581" != n.data[0].resp_code && "00000130583" != n.data[0].resp_code) {
                        e.next = 184;
                        break
                      }
                      e.next = 210;
                      break;
                    case 184:
                      if ("0000000030582" != n.data[0].resp_code) {
                        e.next = 196;
                        break
                      }
                      return D = n.data[0].rent_house_rec_id, M = {
                        rent_house_rec_id: D
                      }, j = JSON.stringify(M), P = "../../page/third_part/pages/rent_house/form?param_type=HOUSE_DETAIL&param_value=" + j, P = encodeURI(P), console.log("jum_url", P), wx.navigateTo({
                        url: P
                      }), e.abrupt("return");
                    case 196:
                      if ("0000221330583" != n.data[0].resp_code) {
                        e.next = 207;
                        break
                      }
                      return X = n.data[0].before_process_buzi_code, wx.setStorageSync("q_before_process_buzi_type", "Q_ASK_LIVE_INFO_AT_DOOR"), wx.setStorageSync("q_before_process_buzi_code", X), p = "../page_006_common_webview/page_006_common_webview?scene=que&encry_id=HgVS5h3euoSFvnyop9XXHw%3D%3D&check_register=YES", wx.redirectTo({
                        url: p
                      }), e.abrupt("return");
                    case 207:
                      return console.log("err:", n), wx.showModal({
                        title: "提示",
                        content: n.data[0].resp_msg + n.data[0].resp_code,
                        showCancel: !1
                      }), e.abrupt("return");
                    case 210:
                      return "rent" == c ? k = k + "?scene=" + S : "room" == c ? k = k + "?scene=" + (O = S) + "&busi_type=5" : "garden" == c && (k = k + "?scene=" + S + "&busi_type=6"), console.log("jump_url:", k), wx.redirectTo({
                        url: k
                      }), e.abrupt("return");
                    case 215:
                      if ("company" != c) {
                        e.next = 256;
                        break
                      }
                      return z = S, T = l.globalData.openid, i = {
                        company_rec_id: z,
                        openId: T
                      }, p = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_016_get_work_info", e.next = 222, d.wx_request(p, i);
                    case 222:
                      if (n = e.sent, wx.hideLoading(), "000000000000" != n.data[0].resp_code) {
                        e.next = 231;
                        break
                      }
                      return p = "/page/component/pages/pass_document_green/component?encry_id=" + s + "&busi_type=2", console.log("encodeURIComponent url", p), wx.redirectTo({
                        url: p
                      }), e.abrupt("return");
                    case 231:
                      if ("0000000030566" != n.data[0].resp_code) {
                        e.next = 236;
                        break
                      }
                      return wx.showModal({
                        title: "提示",
                        content: n.data[0].resp_msg + n.data[0].resp_code,
                        showCancel: !1
                      }), e.abrupt("return");
                    case 236:
                      if ("0000000030581" != n.data[0].resp_code) {
                        e.next = 240;
                        break
                      }
                      e.next = 256;
                      break;
                    case 240:
                      if ("0000000666386" != n.data[0].resp_code) {
                        e.next = 253;
                        break
                      }
                      return A = n.data[0].company_code, H = n.data[0].company_name, L = {
                        company_code: A,
                        company_name: H
                      }, N = JSON.stringify(L), I = "../../page/third_part/pages/company/form?param_type=COMPANY_DETAIL&param_value=" + N, I = encodeURI(I), console.log("jum_url", I), wx.navigateTo({
                        url: I
                      }), e.abrupt("return");
                    case 253:
                      return console.log("err:", n), wx.showModal({
                        title: "提示",
                        content: n.data[0].resp_msg + n.data[0].resp_code,
                        showCancel: !1
                      }), e.abrupt("return");
                    case 256:
                      if ("md" != c) {
                        e.next = 261;
                        break
                      }
                      return C = "/module_001/p_003_motor_register/form?scene=" + S, console.log("encodeURIComponent url", C), wx.redirectTo({
                        url: C
                      }), e.abrupt("return");
                    case 261:
                      return k = k + "?scene=" + S, console.log("jump_url:", k), wx.redirectTo({
                        url: k
                      }), e.abrupt("return");
                    case 265:
                      wx.showModal({
                        title: "提示",
                        content: b.data[0].resp_msg + b.data[0].resp_code,
                        showCancel: !1
                      });
                    case 266:
                      e.next = 273;
                      break;
                    case 268:
                      return e.prev = 268, e.t3 = e.catch(143), console.log("获取保存的用户信息 e", e.t3), wx.showModal({
                        title: "提示19993",
                        content: e.t3,
                        showCancel: !1
                      }), e.abrupt("return");
                    case 273:
                      return e.abrupt("return");
                    case 276:
                      if (c = r.data.type, s = r.data.encry_id, console.log("type", c), "rent" != c && "room" != c && "garden" != c) {
                        e.next = 306;
                        break
                      }
                      return c = r.data.type, s = r.data.encry_id, e.prev = 282, i = {
                        type: c,
                        encry_id: s,
                        sys_id: "tencent"
                      }, p = "https://xcx.pinganbaiyun.cn/qrcode/api_001_qrcode/sv_002_get_qrcode_decry", e.next = 287, d.wx_request(p, i);
                    case 287:
                      if (b = e.sent, console.log("res:", p, a(b), b), wx.hideLoading(), "000000000000" != b.data[0].resp_code) {
                        e.next = 298;
                        break
                      }
                      return k = b.data[0].url, S = b.data[0].scence, b.data[0].jump_type, "rent" == c ? k = k + "?scene=" + S : "room" == c ? k = k + "?scene=" + (O = S) + "&busi_type=5" : "garden" == c && (k = k + "?scene=" + S + "&busi_type=6"), console.log("未注册的进入房屋中间页的jump_url:", k), wx.redirectTo({
                        url: k
                      }), e.abrupt("return");
                    case 298:
                      wx.showModal({
                        title: "提示",
                        content: b.data[0].resp_msg + b.data[0].resp_code,
                        showCancel: !1
                      });
                    case 299:
                      e.next = 304;
                      break;
                    case 301:
                      e.prev = 301, e.t4 = e.catch(282), console.log("获取保存的用户信息 e", e.t4);
                    case 304:
                      e.next = 310;
                      break;
                    case 306:
                      if ("meeting" != c) {
                        e.next = 310;
                        break
                      }
                      return wx.hideLoading(), r.setData({
                        show_ask_get_info: !0
                      }), e.abrupt("return");
                    case 310:
                      E = "", J = "", wx.hideLoading(), "md" == c ? (l.globalData.back_url = "MOTOR_REGISTER", wx.setStorageSync("motor_code", S), J = "摩电登记", E = "摩电登记，需要您实名注册。") : "qh" == c ? (l.globalData.back_url = "TAKE_NUM", wx.setStorageSync("encry_id", s), J = "平安码丨平安白云", E = "取号业务，需要您实名注册。") : 110 == r.data.scene ? (l.globalData.back_url = "TAKE_NUM", wx.setStorageSync("encry_id", s), 110 == r.data.scene && wx.setStorageSync("scene", r.data.scene), J = "平安码丨平安白云", E = "现场取号业务需要您实名注册") : "zc" == c ? (l.globalData.back_url = "MY_QRCODE_ZC", J = "平安码丨平安白云", E = "平安码，需要您实名注册。") : "concert" == c ? (l.globalData.back_url = "CONCERT", wx.setStorageSync("encry_id", s), J = "平安码丨平安白云", E = "场馆通行，需要您实名注册。") : (l.globalData.back_url = "INDEX", J = "平安码丨平安白云", E = "体验平安码丨平安白云功能，需要您实名注册。"), wx.showModal({
                        title: J,
                        content: E,
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          1 == e.confirm ? wx.navigateTo({
                            url: "../component/pages/form_ocr_01/form"
                          }) : r.go_index()
                        }
                      });
                    case 315:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [7, 55],
                  [25, 46],
                  [69, 94],
                  [143, 268],
                  [282, 301]
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
        case 189:
          return e.abrupt("return");
        case 190:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [32, 48],
      [68, 91],
      [167, 183]
    ])
  }))), function(e) {
    return i.apply(this, arguments)
  }),
  onShow: function() {
    var e = wx.getUpdateManager();
    e.onCheckForUpdate((function(e) {
      console.log("page_005 onCheckForUpdate", e.hasUpdate)
    })), e.onUpdateReady((function() {
      e.applyUpdate(), wx.showModal({
        title: "更新提示",
        content: "新版本平安码丨平安白云已经准备好，请您再次扫码进入",
        showCancel: !1,
        success: function(e) {
          e.confirm
        }
      })
    })), e.onUpdateFailed((function() {
      wx.showModal({
        title: "更新提示",
        content: "新版本您未更新好，请重新更新",
        showCancel: !1,
        success: function(t) {
          t.confirm && e.applyUpdate()
        }
      })
    }))
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
    var e = this,
      t = l;
    wx.getSetting({
      success: function(a) {
        console.log("获取用户授权设置..."), console.log(a), null == a.authSetting["scope.userLocation"] || null == a.authSetting["scope.userLocation"] ? (console.log("用户未设置过授权,弹出请求授权界面 userLocation..."), wx.authorize({
          scope: "scope.userLocation",
          success: function(a) {
            console.log("authorize scope.userLocation success...", a), wx.getLocation({
              type: "wgs84",
              altitude: !1,
              success: function(e) {
                console.log("res.getLocation:", e), t.globalData.location_info = e;
                e.accuracy, e.altitude, e.horizontalAccuracy, e.latitude, e.longitude, e.speed, e.verticalAccuracy
              },
              fail: function(a) {
                console.log("getLocation fail", a), t.globalData.get_role_01 = !1, e.setData({
                  showModal_location: !0
                })
              }
            })
          },
          fail: function(a) {
            console.log("authorize scope.userLocation fail 用户不允许授权...", a), t.globalData.get_role_01 = !1, e.setData({
              showModal_location: !0
            })
          }
        })) : 1 == a.authSetting["scope.userLocation"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 userLocation..."), wx.getLocation({
          type: "wgs84",
          altitude: !1,
          success: function(e) {
            t.globalData.location_info = e;
            e.accuracy, e.altitude, e.horizontalAccuracy, e.latitude, e.longitude, e.speed, e.verticalAccuracy
          },
          fail: function(e) {
            console.log("getLocation fail", e)
          }
        })) : 0 == a.authSetting["scope.userLocation"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 userLocation..."), t.globalData.get_role_01 = !1, e.setData({
          showModal_location: !0
        }))
      }
    })
  },
  hideModal_location: function() {},
  get_location_role_result: function(e) {
    console.log("get_role_result", e), null != l.globalData.location_info && null != l.globalData.location_info || this.get_location()
  },
  get_location: function() {
    var e = this,
      t = l;
    wx.getLocation({
      type: "wgs84",
      altitude: !1,
      success: function(a) {
        console.log("res.getLocation:", a), t.globalData.location_info = a;
        a.accuracy, a.altitude, a.horizontalAccuracy, a.latitude, a.longitude, a.speed, a.verticalAccuracy;
        e.setData({
          showModal_location: !1
        })
      },
      fail: function(t) {
        console.log("getLocation fail", t), e.setData({
          showModal_location: !0
        })
      }
    })
  },
  permission_deny: function() {
    this.go_index()
  },
  check_mailbox_register_then_jump: (s = n(t().mark((function e() {
    var a, n, o, r, c;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (e.prev = 0, a = wx.getStorageSync("openid"), n = wx.getStorageSync("unionid"), "" != a && null != a && null != a && "[object Undefined]" != a && "" != n && null != n && null != n && "[object Undefined]" != n) {
            e.next = 19;
            break
          }
          return e.next = 6, d.wx_login();
        case 6:
          if (o = e.sent, console.log("check_mailbox_register_then_jump login_result:", o), "000000000000" != o.data[0].resp_code) {
            e.next = 15;
            break
          }
          l.globalData.openid = o.data[1].openid, l.globalData.unionid = o.data[1].unionid, wx.setStorageSync("openid", l.globalData.openid), wx.setStorageSync("unionid", l.globalData.unionid), e.next = 17;
          break;
        case 15:
          return wx.showModal({
            title: "提示",
            content: o.data[0].resp_msg + "(" + o.data[0].resp_code + ")",
            showCancel: !1
          }), e.abrupt("return");
        case 17:
          e.next = 21;
          break;
        case 19:
          l.globalData.unionid = n, l.globalData.openid = a;
        case 21:
          return r = {
            openId: l.globalData.openid,
            oper_type: "STRIKE_BLACK"
          }, e.next = 24, d.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", r);
        case 24:
          if (c = e.sent, console.log("check_mailbox_register_then_jump check_state:", c), 200 != c.statusCode || "000000000003" != c.data[0].resp_code) {
            e.next = 31;
            break
          }
          return l.globalData.access_token = c.data[0].access_token, wx.setStorageSync("access_token", l.globalData.access_token), wx.redirectTo({
            url: "../../page/strike_black/form?scene=111&fireworks=2"
          }), e.abrupt("return");
        case 31:
          return l.globalData.back_url = "STRIKE_BLACK", l.globalData.register_type = "SELF", wx.setStorageSync("strike_black_fireworks", "2"), wx.showModal({
            title: "平安码丨平安白云",
            content: "体验分局长信箱功能，需要您实名注册。",
            showCancel: !0,
            cancelText: "暂不注册",
            confirmText: "去注册",
            success: function(e) {
              1 == e.confirm && (wx.setStorageSync("mailbox_auto_login", "YES"), wx.reLaunch({
                url: "/page/index_01/pages/my/my"
              }))
            }
          }), e.abrupt("return");
        case 38:
          return e.prev = 38, e.t0 = e.catch(0), console.log("check_mailbox_register_then_jump e", e.t0), wx.redirectTo({
            url: "../../page/strike_black/form?scene=111&fireworks=2"
          }), e.abrupt("return");
        case 43:
        case "end":
          return e.stop()
      }
    }), e, null, [
      [0, 38]
    ])
  }))), function() {
    return s.apply(this, arguments)
  }),
  get_type: function(e) {
    var t = "",
      a = [],
      n = e.indexOf("type=");
    if (-1 != n) {
      a = (e = e.substr(n, e.length - n)).split("&");
      for (var o = 0; o < a.length; o++) {
        var r = a[o].split("=");
        "type" == r[0] && (t = r[1])
      }
    }
    return t
  },
  get_encry_id: function(e) {
    var t = "",
      a = [],
      n = e.indexOf("id=");
    return -1 != n && (a = (e = e.substr(n, e.length - n)).split("&"), console.log("url_param_arr", a), t = a[0].substr(3, a[0].length - 3), console.log("wechat_code:", t)), t
  },
  get_buzi_type: function(e) {
    var t = "",
      a = [],
      n = e.indexOf("buzi_type=");
    return -1 != n && (a = (e = e.substr(n, e.length - n)).split("&"), console.log("url_param_arr", a), t = a[0].substr(10, a[0].length - 10), console.log("wechat_code:", t)), t
  },
  get_ts: function(e) {
    var t = "",
      a = [],
      n = e.indexOf("ts=");
    return -1 != n && (a = (e = e.substr(n, e.length - n)).split("&"), console.log("url_param_arr", a), t = a[0].substr(3, a[0].length - 3), console.log("wechat_code:", t)), t
  },
  get_mobile_phone: (c = n(t().mark((function e(a) {
    var o;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          console.log("get_mobile_phone", a), console.log("e.detail.iv:", a.detail.detail.iv), o = this, wx.checkSession({
            success: function(e) {
              console.log("res_check_session", e), wx.showLoading({
                title: "请稍等"
              });
              var t = {
                openId: l.globalData.openid,
                encryptedData: a.detail.detail.encryptedData,
                iv: a.detail.detail.iv
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/dencryp",
                method: "POST",
                dataType: "json",
                data: t,
                success: function(e) {
                  if (wx.hideLoading(), console.log("获取解码信息 mobile_phone", e), "000000000000" == e.data[0].resp_code) {
                    var t = e.data[1].purePhoneNumber;
                    o.setData({
                      mobile_phone: t
                    }), l.globalData.purePhoneNumber = t, o.setData({
                      show_ask_get_info: !1
                    }), o.setData({
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
              })
            },
            fail: function() {
              return n(t().mark((function e() {
                var n, r;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.prev = 1, e.next = 4, d.wx_login("get_token");
                    case 4:
                      if (n = e.sent, console.log("login_result form_ocr_01:", n), "000000000000" != n.data[0].resp_code) {
                        e.next = 13;
                        break
                      }
                      l.globalData.openid = n.data[1].openid, l.globalData.unionid = n.data[1].unionid, wx.setStorageSync("openid", l.globalData.openid), wx.setStorageSync("unionid", l.globalData.unionid), e.next = 15;
                      break;
                    case 13:
                      return wx.showModal({
                        title: "提示",
                        content: n.data[0].resp_msg + "(" + n.data[0].resp_code + ")",
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 15:
                      e.next = 22;
                      break;
                    case 17:
                      return e.prev = 17, e.t0 = e.catch(1), console.log("e:", e.t0), wx.showModal({
                        title: "提示",
                        content: "" + JSON.stringify(e.t0),
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 22:
                      wx.showLoading({
                        title: "请稍等"
                      }), r = {
                        openId: l.globalData.openid,
                        encryptedData: a.detail.detail.encryptedData,
                        iv: a.detail.detail.iv
                      }, wx.request({
                        url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/dencryp",
                        method: "POST",
                        dataType: "json",
                        data: r,
                        success: function(e) {
                          if (wx.hideLoading(), console.log("获取解码信息 mobile_phone", e), "000000000000" == e.data[0].resp_code) {
                            var t = e.data[1].purePhoneNumber;
                            o.setData({
                              mobile_phone: t
                            }), l.globalData.purePhoneNumber = t, o.setData({
                              show_ask_get_info: !1
                            }), o.setData({
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
                    case 23:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [1, 17]
                ])
              })))()
            }
          });
        case 4:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(e) {
    return c.apply(this, arguments)
  }),
  get_user_info: (r = n(t().mark((function e(n) {
    var o, r, c, s, i, p, _, g, x, b;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (o = this, l.globalData.USERINFO_post = n.detail.detail.rawData, r = o.data.type, o.data.encry_id, "meeting" != r) {
            e.next = 37;
            break
          }
          return e.prev = 5, c = {
            type: r,
            sys_id: "tencent",
            access_token: "",
            LXDH: o.data.mobile_phone,
            GPS: "",
            USERINFO: JSON.stringify(l.globalData.USERINFO_post),
            SYSTEMINFO: JSON.stringify(l.globalData.SYSTEMINFO),
            openId: l.globalData.openid,
            encry_id: o.data.encry_id,
            cry_type: "cry"
          }, s = u.get_url() + "p_021_health_passport/api_002_rent_house_company/sv_011_inner_meeting", e.next = 10, d.wx_request(s, c);
        case 10:
          if (i = e.sent, console.log("res:", s, a(i), i), wx.hideLoading(), "000000000000" != i.data[0].resp_code) {
            e.next = 28;
            break
          }
          return p = i.data[0].meeting_code, _ = i.data[0].rec_id, g = u.get_url() + "p_004_rent_house/p_010_inner_meeting/www/index.html", console.log("jump_url_post", g), x = {
            meeting_code: p,
            rec_id: _
          }, b = JSON.stringify(x), s = "/page/page_006_common_webview/page_006_common_webview?url=" + g + "&params=" + b + "&check_register=NO", console.log("url", s), s = encodeURI(s), wx.redirectTo({
            url: s
          }), e.abrupt("return");
        case 28:
          wx.showModal({
            title: "提示",
            content: i.data[0].resp_msg + i.data[0].resp_code,
            showCancel: !1
          });
        case 29:
          e.next = 36;
          break;
        case 31:
          return e.prev = 31, e.t0 = e.catch(5), console.log("获取保存的用户信息 e", e.t0), wx.showModal({
            title: "提示19993",
            content: e.t0,
            showCancel: !1
          }), e.abrupt("return");
        case 36:
          return e.abrupt("return");
        case 37:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [5, 31]
    ])
  }))), function(e) {
    return r.apply(this, arguments)
  }),
  go_home: (o = n(t().mark((function e() {
    var a, n, o, r, c, s, i;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (a = this, wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), n = wx.getStorageSync("openid"), o = wx.getStorageSync("unionid"), "" == n || null == n || null == n || "[object Undefined]" == n || "" == o || null == o || null == o || "[object Undefined]" == o) {
            e.next = 10;
            break
          }
          l.globalData.unionid = o, l.globalData.openid = n, e.next = 32;
          break;
        case 10:
          return e.prev = 10, e.next = 13, d.wx_login();
        case 13:
          if (r = e.sent, console.log("login_result:", r), "000000000000" != r.data[0].resp_code) {
            e.next = 22;
            break
          }
          l.globalData.openid = r.data[1].openid, l.globalData.unionid = r.data[1].unionid, wx.setStorageSync("openid", l.globalData.openid), wx.setStorageSync("unionid", l.globalData.unionid), e.next = 24;
          break;
        case 22:
          return wx.showModal({
            title: "提示",
            content: r.data[0].resp_msg + "(" + r.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 24:
          e.next = 32;
          break;
        case 26:
          return e.prev = 26, e.t0 = e.catch(10), console.log("e:", e.t0), "" != (c = wx.getStorageSync("goHomeObj")) && null != c && null != c ? (s = "../../page/opendoor/opendoor_index?phone=" + c.phone + "&name=" + c.name + "&id_card=" + c.id_card + "&login_token=" + c.login_token + "&gohome_today_date=" + a.data.gohome_today_date, wx.redirectTo({
            url: s
          })) : wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 32:
          i = {
            openId: l.globalData.openid,
            oper_type: "INDEX"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: i,
            success: function(e) {
              if (wx.hideLoading(), console.log("检查进度结果", e), "000000000003" != e.data[0].resp_code) return l.globalData.back_url = "INDEX", void wx.showModal({
                title: "平安回家",
                content: "体验平安回家开锁功能请您注册",
                showCancel: !0,
                cancelText: "暂不注册",
                confirmText: "确定",
                success: function(e) {
                  1 == e.confirm && wx.navigateTo({
                    url: "../../../component/pages/form_ocr_01/form"
                  })
                }
              });
              var t = e.data[0].access_token,
                n = wx.getStorageSync("goHomeObj"),
                o = "";
              "" != n && null != n && null != n && (o = n.login_token), wx.request({
                url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/go_home_service_login",
                method: "POST",
                data: {
                  openId: l.globalData.openid,
                  login_token: o
                },
                header: {
                  "Content-type": "application/json",
                  cloud_shield_token: t
                },
                success: function(e) {
                  if (console.log("go_home_login", e), "000000000000" != e.data[0].resp_code) {
                    var n = wx.getStorageSync("goHomeObj");
                    if (console.log("goHomeObj 55001023", n), "" != n && null != n && null != n) {
                      var o = "../../page/opendoor/opendoor_index?access_token=" + t + "&phone=" + n.phone + "&name=" + n.name + "&id_card=" + n.id_card + "&login_token=" + n.login_token + "&gohome_today_date=" + a.data.gohome_today_date;
                      wx.redirectTo({
                        url: o
                      })
                    } else wx.showModal({
                      title: "提示",
                      content: e.data[0].resp_msg
                    })
                  } else {
                    var r = e.data[0].phone,
                      c = e.data[0].name,
                      s = e.data[0].id_card,
                      i = e.data[0].token,
                      d = {
                        phone: r,
                        name: c,
                        id_card: s,
                        login_token: i
                      };
                    wx.setStorageSync("goHomeObj", d);
                    var u = "../../page/opendoor/opendoor_index?access_token=" + t + "&phone=" + r + "&name=" + c + "&id_card=" + s + "&login_token=" + i + "&gohome_today_date=" + a.data.gohome_today_date;
                    wx.redirectTo({
                      url: u
                    })
                  }
                },
                fail: function(e) {
                  var n = wx.getStorageSync("goHomeObj");
                  if ("" != n && null != n && null != n) {
                    var o = "../../page/opendoor/opendoor_index?access_token=" + t + "&phone=" + n.phone + "&name=" + n.name + "&id_card=" + n.id_card + "&login_token=" + n.login_token + "&gohome_today_date=" + a.data.gohome_today_date;
                    wx.redirectTo({
                      url: o
                    })
                  } else wx.showModal({
                    title: "提示",
                    content: "请检查网络"
                  })
                }
              })
            },
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e);
              var t = wx.getStorageSync("goHomeObj");
              if ("" != t && null != t && null != t) {
                var n = "../../page/opendoor/opendoor_index?phone=" + t.phone + "&name=" + t.name + "&id_card=" + t.id_card + "&login_token=" + t.login_token + "&gohome_today_date=" + a.data.gohome_today_date;
                wx.redirectTo({
                  url: n
                })
              } else wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 33:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [10, 26]
    ])
  }))), function() {
    return o.apply(this, arguments)
  }),
  end_method: function() {}
});