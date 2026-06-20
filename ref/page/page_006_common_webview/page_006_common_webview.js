var e, t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../@babel/runtime/helpers/typeof");
(e = require("../../util/regenerator-runtime/runtime")) && e.__esModule;
var n, s, c, r = require("../../util/util.js"),
  i = getApp();
Page({
  data: {
    showModal_location: !1,
    show_toptip_msg: "",
    src: "",
    jump_url: "",
    params: "",
    check_register: "YES",
    show_webview: !1,
    show_anti_cheat: !0,
    show_ask_send_msg: !1,
    buttons_send_msg: [{
      type: "primary",
      className: "",
      text: "订阅穗安防诈消息",
      value: 1
    }],
    load_options: {},
    project_key: "",
    questionare_token_for_jump: "",
    timeoutID: "",
    questionare_name: "",
    questionare_qrcode: ""
  },
  end_data: function() {},
  onLoad: function(e) {
    var n = this;
    if (console.log("page_006_common_webview options", e), "p_081_online_court" == e.buzi_type) {
      var s = "https://xcx.pinganbaiyun.cn/p_083_online_court/public/xcx/dist/#/?access_token=" + e.access_token;
      return console.log("src", s), void n.setData({
        src: s,
        show_webview: !0
      })
    }
    if ("fireworks_report" == e.buzi_type) {
      s = "https://xcx.pinganbaiyun.cn/strike_black/third_part/p_058_cs_msg_jump/p_045_fireworks_report/www/index.html";
      return console.log("src", s), void n.setData({
        src: s,
        show_webview: !0
      })
    }
    if ("address_search" == e.buzi_type) n.setData({
      src: "https://bywg.by.gov.cn/miniWeb/#/query-address",
      show_webview: !0
    });
    else if ("grid_billboard" == e.buzi_type) n.setData({
      src: "https://bywg.by.gov.cn/miniWeb/#/grid-wechat-group?gridCode=440111-003-014-002",
      show_webview: !0
    });
    else {
      if ("market_place" == e.buzi_type) {
        s = "https://zhnm.by.gov.cn?access_token=" + e.access_token;
        return console.log("1729751729807 src", s), void n.setData({
          src: s,
          show_webview: !0
        })
      }
      if ("grid_officer" == e.buzi_type) return void n.sv_021_get_grid_officer_role();
      if ("p_120_fda_address_pdf" == e.buzi_type) {
        s = "https://xcx.pinganbaiyun.cn/p_120_fda_address_server/address_lib_guid_pdf.pdf";
        return console.log("src", s), void n.setData({
          src: s,
          show_webview: !0
        })
      }
      if ("p_147_agriculture" == e.buzi_type) {
        s = "https://xcx.pinganbaiyun.cn/strike_black/third_part/p_147_agriculture/index_new.html";
        return void n.setData({
          src: s,
          show_webview: !0
        })
      }
      if ("p_148_zongzhi_map" == e.buzi_type) {
        s = "https://xcx.pinganbaiyun.cn/strike_black/third_part/p_148_zongzhi_map/map_mobile_new.html";
        return void n.setData({
          src: s,
          show_webview: !0
        })
      }
      if ("p_146_china_post_map" == e.buzi_type) {
        s = "https://xcx.pinganbaiyun.cn/strike_black/third_part/p_146_china_post_map/post_map_complete.html";
        return void n.setData({
          src: s,
          show_webview: !0
        })
      }
      if ("volunteer_service" == e.buzi_type) {
        s = "https://bywg.by.gov.cn/miniWeb/#/homepage?query=" + encodeURIComponent('{"assessToken":"' + e.access_token + '","redirect":"postList"}');
        return void n.setData({
          src: s,
          show_webview: !0
        })
      }
      if ("volunteer_signin" == e.buzi_type) {
        s = "https://bywg.by.gov.cn/miniWeb/#/homepage?query=" + encodeURIComponent('{"assessToken":"' + e.access_token + '","redirect":"postList"}');
        return void n.setData({
          src: s,
          show_webview: !0
        })
      }
      if ("volunteer_address" == e.buzi_type) {
        s = "https://bywg.by.gov.cn/miniWeb/#/homepage?query=" + encodeURIComponent('{"assessToken":"' + e.access_token + '","redirect":"QueryAddress"}');
        return void n.setData({
          src: s,
          show_webview: !0
        })
      }
    }
    var c = decodeURIComponent(e.url),
      _ = decodeURIComponent(e.params);
    console.log("jump_url :", c, o(_), _), console.log("1730081656697 options :", e), n.setData({
      jump_url: c,
      params: _
    });
    var l = decodeURIComponent(e.check_register);
    if (console.log("check_register", o(l), l), null != l && "undefined" != l && "null" != l || (l = "YES"), n.setData({
        check_register: l
      }), "NO" == l) {
      if ("china_mobile" == e.scene) {
        s = "https://gd.10086.cn/gmccapp/webpage/singlePage/index.html?id=a21835e8fce44884a2390e28bc96fed6";
        return console.log("src", s), void n.setData({
          src: s,
          show_webview: !0
        })
      }
      s = c + "?&params=" + _;
      return console.log("src", s), void n.setData({
        src: s,
        show_webview: !0
      })
    }
    if (110 == e.scene) n.data.scene = e.scene, l = !0;
    else {
      if ("dyfzm" == e.scene) {
        return void wx.redirectTo({
          url: "../page_005_qrcode/form?q=https%3A%2F%2Fxcx.pinganbaiyun.cn%2Fqrcode%2F%3Ftype%3Dfzm%26id%3DRhGDPbgq2DkzTZgTCAut%2BQ%3D%3D"
        })
      }
      if ("anti_cheat_remind" == e.scene) n.data.scene = e.scene, l = !0;
      else if ("anti_cheat_sms" == e.scene) n.data.scene = e.scene, l = !0;
      else {
        if (111 == e.scene) {
          return void wx.redirectTo({
            url: "../../page/strike_black/form?scene=111"
          })
        }
        "que" == e.scene || "fraud_frontd" == e.scene || "transcript" == e.scene || "MEETING_SHOW" == e.scene ? (console.log("que 问卷"), n.data.scene = e.scene, l = "YES") : "national_anti_fraud" == e.scene ? (n.data.scene = e.scene, l = "YES") : "grid_officer_housing_administrator" == e.buzi_type || "grid_officer_housing_patrol_approval" == e.buzi_type ? (n.data.buzi_type = e.buzi_type, l = "YES") : (n.data.scene = e.scene, n.data.buzi_type = e.buzi_type, l = "YES")
      }
    }
    n.data.load_options = e, console.log("check_register 001", l), wx.showLoading({
      title: "请稍等...",
      mask: !0
    }), "YES" != l && 1 != l || wx.login({
      success: function(s) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: s.code
          },
          success: function(s) {
            if (console.log("拉取login", s), "000000000000" == s.data[0].resp_code) {
              i.globalData.openid = s.data[1].openid, i.globalData.session_key = s.data[1].session_key;
              var c = {
                openId: i.globalData.openid,
                oper_type: "INDEX"
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: c,
                success: (_ = a(t().mark((function a(s) {
                  var c, _, l, u, p, d, g, h, w, b, f, x, y, m, k, v, S, D, q, z, L, M, C, T, E, j, N, I, A, O, P, R, U, Y, J, F, B, G, H, W, V, Z, Q, X, K, $, ee, te;
                  return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (wx.hideLoading(), console.log("检查进度结果", s), "000000000003" != s.data[0].resp_code) {
                          t.next = 223;
                          break
                        }
                        if (c = s.data[0].access_token, i.globalData.access_token = c, 110 != n.data.scene) {
                          t.next = 12;
                          break
                        }
                        return _ = "https://xcx.pinganbaiyun.cn/gzjy/gzjy_fort/main.html", console.log("src", _), n.setData({
                          src: _,
                          show_webview: !0
                        }), t.abrupt("return");
                      case 12:
                        if ("anti_cheat_remind" != n.data.scene) {
                          t.next = 20;
                          break
                        }
                        return l = {
                          launch_type: "LAUNCH_APP"
                        }, u = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_017_anti_cheat_remind", r.wx_request(u, l), wx.showModal({
                          title: "穗安防诈",
                          content: "您好，这里是白云公安反诈中心，经研判，您为高危易受骗人群，请您点击关注“广州反诈”服务号，注册“穗安防诈”小程序，我们将时刻关注，为您及时推送反诈预警。",
                          confirmText: "马上关注",
                          showCancel: !1,
                          success: function(e) {
                            n.go_anti_cheat()
                          }
                        }), t.abrupt("return");
                      case 20:
                        if ("anti_cheat_sms" != n.data.scene) {
                          t.next = 44;
                          break
                        }
                        return l = {
                          launch_type: "FROM_SMS"
                        }, u = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_017_anti_cheat_remind", r.wx_request(u, l), p = null, t.next = 27, r.wx_show_modal("穗安防诈", "您好，这里是白云公安反诈中心，经研判，您为高危易受骗人群，请您点击关注“广州反诈”服务号，注册“穗安防诈”小程序，我们将时刻关注，为您及时推送反诈预警。", !1, "订阅防诈");
                      case 27:
                        return t.sent, t.next = 30, n.async_subscribe();
                      case 30:
                        if (p = t.sent, console.log("res_subscribe", p), "success" == p) {
                          t.next = 37;
                          break
                        }
                        return n.setData({
                          show_ask_send_msg: !0
                        }), t.abrupt("return");
                      case 37:
                        n.go_anti_cheat(), l = {
                          launch_type: "SMS_SUBSCRIBE"
                        }, u = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_017_anti_cheat_remind", r.wx_request(u, l);
                      case 41:
                        return t.abrupt("return");
                      case 44:
                        if ("que" != n.data.scene) {
                          t.next = 96;
                          break
                        }
                        return t.prev = 45, d = {
                          type: n.data.load_options.scene,
                          encry_id: n.data.load_options.encry_id
                        }, g = wx.getStorageSync("q_before_process_buzi_type"), h = wx.getStorageSync("q_before_process_buzi_code"), wx.removeStorageSync("q_before_process_buzi_type"), wx.removeStorageSync("q_before_process_buzi_code"), d.before_process_buzi_type = g, d.before_process_buzi_code = h, w = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_001_health_passport/sv_013_get_questionare_key", wx.showLoading({
                          title: "请稍等...",
                          mask: !0
                        }), t.next = 57, r.wx_request(w, d);
                      case 57:
                        if (b = t.sent, console.log("sv_013_get_questionare_key res:", d, w, o(b), b), wx.hideLoading(), "000000000000" != b.data[0].resp_code) {
                          t.next = 85;
                          break
                        }
                        if (f = b.data[0].project_key, x = b.data[0].questionare_token, y = b.data[0].questionare_name, b.data[0].questionare_qrcode, m = b.data[0].byyd_task_q, console.log("sv_013_get_questionare_key project_key", f, b.data[0].before_process_param), n.data.questionare_name = y, null == b.data[0].before_process_param || null == b.data[0].before_process_param) {
                          t.next = 76;
                          break
                        }
                        if ("HAVE_VEHICLE_PASSPORT" != b.data[0].before_process_param.buzi_type) {
                          t.next = 76;
                          break
                        }
                        if ("YES" != n.data.load_options.refill) {
                          t.next = 74;
                          break
                        }
                        t.next = 76;
                        break;
                      case 74:
                        return wx.reLaunch({
                          url: "../../module_001/p_015_vehicle_access_code/vehicle_access_code"
                        }), t.abrupt("return");
                      case 76:
                        return k = "https://qv1.pinganbaiyun.cn/index.html#/project/write?key=" + f + "&token=" + x, !0 === m && ((v = {}).form_id = f, v.group_id = b.data[0].group_id, v.byyd_task_q_submit_token = b.data[0].byyd_task_q_submit_token, v.jump_to = "xcx_submit_q", v.questionare_name = b.data[0].questionare_name, n.data.questionare_name = b.data[0].questionare_name, n.data.load_options.hasOwnProperty("init_data") && (v.init_data = n.data.load_options.init_data), n.data.load_options.hasOwnProperty("xcx_view_initiate") && (v.jump_to = "xcx_view_initiate"), "hcXwVMZR7kSCAMi52NIIP%2BEHC8jcSeJr" == n.data.load_options.encry_id && (S = {
                          field2827874120238: b.data[0].name,
                          field6573274123703: b.data[0].mobile_phone
                        }, D = JSON.stringify(S), v.init_data = D), q = JSON.stringify(v), k = "https://qv1.pinganbaiyun.cn/p_122_byyd_task/dist/#/forward?cloud_shield_token=" + x + "&params_json=" + q), console.log("1729473629326 跳转问卷 jump_url", k), console.log("1729473629326 跳转问卷 questionare_token", x), n.setData({
                          src: k,
                          show_webview: !0
                        }), "bdd525198bc043fb8755577b5ab53e48" != f && "e511bac1565f4ee587cfbcc92650772b" != f || (n.data.project_key = f, n.data.questionare_token_for_jump = x, n.sv_020_get_questionare_state()), t.abrupt("return");
                      case 85:
                        return wx.showModal({
                          title: "提示",
                          content: b.data[0].resp_msg + "(" + b.data[0].resp_code + ")",
                          showCancel: !1
                        }), t.abrupt("return");
                      case 87:
                        t.next = 94;
                        break;
                      case 89:
                        return t.prev = 89, t.t0 = t.catch(45), console.log("sv_013_get_questionare_key e", t.t0), wx.showModal({
                          title: "提示",
                          content: "程序异常" + t.t0,
                          showCancel: !1
                        }), t.abrupt("return");
                      case 94:
                        t.next = 213;
                        break;
                      case 96:
                        if ("national_anti_fraud" != n.data.scene) {
                          t.next = 105;
                          break
                        }
                        return c = s.data[0].access_token, i.globalData.access_token = c, wx.setStorageSync("access_token", i.globalData.access_token), wx.setStorageSync("openid", i.globalData.openid), wx.redirectTo({
                          url: "../../module_004/p_001_fanzha/install_fanzha_app/install_fanzha_app"
                        }), t.abrupt("return");
                      case 105:
                        if ("fraud_frontd" != n.data.scene) {
                          t.next = 116;
                          break
                        }
                        return console.log("this_page.data.load_options.encry_id", n.data.load_options), z = {
                          rec_id: n.data.load_options.encry_id
                        }, L = JSON.stringify(z), M = "GO_FRAUD_FRONTD@@@" + L, _ = "https://xcx.pinganbaiyun.cn/strike_black/third_part/p_030_volunteer/www/index.html?access_token=" + i.globalData.access_token + "&jump_to=" + M, console.log("fraud_frontd 检查登录后的src", _), n.setData({
                          src: _,
                          show_webview: !0
                        }), t.abrupt("return");
                      case 116:
                        if ("MEETING_SHOW" != n.data.scene) {
                          t.next = 129;
                          break
                        }
                        return console.log("this_page.data.load_options.encry_id", n.data.load_options), C = {
                          rec_id: n.data.load_options.encry_id
                        }, null != (T = n.data.load_options.scence_id) && null != T && "" != T && (C.scence_id = T, C.from_scan = 1), E = JSON.stringify(C), j = "MEETING_SHOW@@@" + E, _ = "https://xcx.pinganbaiyun.cn/p_016_meeting_server/dist/#/?access_token=" + i.globalData.access_token + "&jump_to=" + j, console.log("MEETING_SHOW 检查登录后的src", _), n.setData({
                          src: _,
                          show_webview: !0
                        }), t.abrupt("return");
                      case 129:
                        if ("transcript" != n.data.scene) {
                          t.next = 140;
                          break
                        }
                        return console.log("1742274999461 this_page.data.load_options.encry_id", n.data.load_options), N = {
                          rec_id: n.data.load_options.encry_id
                        }, I = JSON.stringify(N), A = "aaa100aaa" + I, _ = "https://qv1.pinganbaiyun.cn/p_129_llm/transcript/out/index.html#/chat?access_token=" + i.globalData.access_token + "&jump_to=" + A, console.log("fraud_frontd 检查登录后的src", _), n.setData({
                          src: _,
                          show_webview: !0
                        }), t.abrupt("return");
                      case 140:
                        if ("grid_officer_housing_administrator" != n.data.buzi_type) {
                          t.next = 167;
                          break
                        }
                        return O = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_001_health_passport/sv_021_get_grid_officer_role", P = {
                          foo: "bar"
                        }, wx.showLoading({
                          title: "请稍等...",
                          mask: !0
                        }), t.next = 146, r.wx_request(O, P);
                      case 146:
                        if (R = t.sent, console.log("sv_021_get_grid_officer_role res:", O, o(R), R), wx.hideLoading(), "000000000000" != R.data[0].resp_code) {
                          t.next = 164;
                          break
                        }
                        if (!0 !== R.data[0].show_wgy_modlue) {
                          t.next = 161;
                          break
                        }
                        return U = R.data[0].cloud_shield_token, Y = n.data.load_options.rent_house_code, J = {
                          rent_house_code: Y
                        }, F = JSON.stringify(J), B = "https://xcx.pinganbaiyun.cn/p_077_yzy_health/www/index.html?code=".concat(U, "&param_value=jump_to@@@grid_officer_housing_administrator@@@").concat(F), console.log("src", B, n.data.load_options), n.setData({
                          src: B,
                          show_webview: !0
                        }), t.abrupt("return");
                      case 161:
                        wx.showModal({
                          title: "提示",
                          content: "您不是网格员.请返回",
                          showCancel: !1,
                          success: function(e) {
                            wx.reLaunch({
                              url: "../../page/index_01/pages/my/my"
                            })
                          }
                        });
                      case 162:
                        t.next = 165;
                        break;
                      case 164:
                        wx.showModal({
                          title: "提示",
                          content: "您不是网格员.请返回",
                          showCancel: !1,
                          success: function(e) {
                            wx.reLaunch({
                              url: "../../page/index_01/pages/my/my"
                            })
                          }
                        });
                      case 165:
                        t.next = 213;
                        break;
                      case 167:
                        if ("grid_officer_housing_patrol_approval" != n.data.buzi_type) {
                          t.next = 194;
                          break
                        }
                        return G = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_001_health_passport/sv_021_get_grid_officer_role", H = {
                          foo: "bar"
                        }, wx.showLoading({
                          title: "请稍等...",
                          mask: !0
                        }), t.next = 173, r.wx_request(G, H);
                      case 173:
                        if (W = t.sent, console.log("sv_021_get_grid_officer_role res:", G, o(W), W), wx.hideLoading(), "000000000000" != W.data[0].resp_code) {
                          t.next = 191;
                          break
                        }
                        if (!0 !== W.data[0].show_wgy_modlue) {
                          t.next = 188;
                          break
                        }
                        return V = W.data[0].cloud_shield_token, Z = n.data.load_options.grid_code, Q = n.data.load_options.grid_name, X = JSON.stringify({
                          grid_code: Z,
                          grid_name: Q
                        }), K = "https://xcx.pinganbaiyun.cn/p_077_yzy_health/www/index.html?code=".concat(V, "&param_value=jump_to@@@grid_officer_housing_patrol_approval@@@").concat(X), console.log("src", K, n.data.load_options), n.setData({
                          src: K,
                          show_webview: !0
                        }), t.abrupt("return");
                      case 188:
                        wx.showModal({
                          title: "提示",
                          content: "您不是网格员.请返回",
                          showCancel: !1,
                          success: function(e) {
                            wx.reLaunch({
                              url: "../../page/index_01/pages/my/my"
                            })
                          }
                        });
                      case 189:
                        t.next = 192;
                        break;
                      case 191:
                        wx.showModal({
                          title: "提示",
                          content: "您不是网格员.请返回",
                          showCancel: !1,
                          success: function(e) {
                            wx.reLaunch({
                              url: "../../page/index_01/pages/my/my"
                            })
                          }
                        });
                      case 192:
                        t.next = 213;
                        break;
                      case 194:
                        if ("tonghe_gov" != n.data.scene) {
                          t.next = 201;
                          break
                        }
                        return _ = "https://visitor.gzsyxsj.com:50443/visitorApp/#/pages/login?access_token=" + i.globalData.access_token, console.log("1729751729807 src", _), n.setData({
                          src: _,
                          show_webview: !0
                        }), t.abrupt("return");
                      case 201:
                        if ("one_day_in_police_station" != n.data.scene) {
                          t.next = 208;
                          break
                        }
                        return _ = "https://csyxzx.by.gov.cn:8888/hxg/h5/?access_token=" + i.globalData.access_token, console.log("1778052312422 src", _), n.setData({
                          src: _,
                          show_webview: !0
                        }), t.abrupt("return");
                      case 208:
                        if ("zhnm" != n.data.scene) {
                          t.next = 213;
                          break
                        }
                        return _ = "https://zhnm.by.gov.cn?access_token=" + i.globalData.access_token + "&id=" + n.data.load_options.encry_id, console.log("1729751729807 src", _), n.setData({
                          src: _,
                          show_webview: !0
                        }), t.abrupt("return");
                      case 213:
                        return $ = n.data.jump_url, ee = n.data.params, console.log("检查登录后的 params", o(ee), ee), -1 == ee.indexOf("https://xcx.pinganbaiyun.cn/qrcode/?type=rent") && -1 == ee.indexOf("https://xcx.pinganbaiyun.cn/qrcode/?type=company") && -1 == ee.indexOf("https://xcx.pinganbaiyun.cn/qrcode/?type=person") || (ee = encodeURIComponent(ee)), _ = $ + "?access_token=" + i.globalData.access_token + "&params=" + ee, console.log("检查登录后的src", _), n.setData({
                          src: _,
                          show_webview: !0
                        }), t.abrupt("return");
                      case 223:
                        return i.globalData.back_url = "COMMON_WEBVIEW", te = "需要您实名注册体验服务。", 110 == n.data.scene ? (wx.setStorageSync("scene", n.data.scene), te = "云安警营开放活动日需要您实名注册体验服务。") : "que" == n.data.scene ? (te = "问卷填写需要您实名注册。", "yfaMNU5LprySDisUZ0rvXwABEFJi2fSZ" == e.encry_id && (te = "散装汽油购买预登记需要您实名注册。")) : "national_anti_fraud" == n.data.scene && (te = "国家反诈中心app需要您实名注册。"), wx.showModal({
                          title: "平安码丨平安白云",
                          content: te,
                          showCancel: !0,
                          cancelText: "暂不注册",
                          confirmText: "现在注册",
                          success: function(e) {
                            1 == e.confirm ? (110 == n.data.scene ? wx.setStorageSync("scene", n.data.scene) : "gzbydx" == n.data.scene ? (i.globalData.back_url = "ANTI_CHEAT", console.log("app.globalData.back_url")) : "que" == n.data.scene ? (wx.setStorageSync("scene", n.data.scene), wx.setStorageSync("load_options", n.data.load_options)) : "national_anti_fraud" == n.data.scene ? (i.globalData.back_url = "NATIONAL_ANTI_FRAUD", console.log("app.globalData.back_url")) : (wx.setStorageSync("jump_url", n.data.jump_url), wx.setStorageSync("jump_params", n.data.params)), wx.navigateTo({
                              url: "../component/pages/form_ocr_01/form"
                            })) : n.go_index()
                          }
                        }), t.abrupt("return");
                      case 228:
                      case "end":
                        return t.stop()
                    }
                  }), a, null, [
                    [45, 89]
                  ])
                }))), function(e) {
                  return _.apply(this, arguments)
                }),
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
              content: "获取状态异常-3:" + s.data[0].resp_code + s.data[0].resp_msg,
              showCancel: !1
            });
            var _
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
  onShow: function() {
    console.log("onShow")
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
      t = i;
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
    console.log("get_role_result", e), null != i.globalData.location_info && null != i.globalData.location_info || this.get_location()
  },
  get_location: function() {
    var e = this,
      t = i;
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
  go_anti_cheat: function() {
    var e = this;
    wx.navigateToMiniProgram({
      appId: "wxec0b921a4d97c684",
      envVersion: "release",
      success: function(e) {
        console.log("穗安反诈 success", e);
        r.wx_request("https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_017_anti_cheat_remind", {
          launch_type: "CLICK_APP"
        })
      },
      fail: function(t) {
        console.log("穗安反诈 fail", t), wx.showModal({
          title: "穗安防诈",
          content: "您好，这里是白云公安反诈中心，经研判，您为高危易受骗人群，请您点击关注“广州反诈”服务号，注册“穗安防诈”小程序，我们将时刻关注，为您及时推送反诈预警。",
          confirmText: "马上关注",
          showCancel: !1,
          success: function(t) {
            e.go_anti_cheat()
          }
        })
      }
    })
  },
  async_subscribe: function() {
    return new Promise((function(e, t) {
      wx.requestSubscribeMessage({
        tmplIds: ["CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ"],
        success: function(t) {
          "accept" != t.CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ ? (console.log("async_subscribe not accept", t), e("fail")) : e("success")
        },
        fail: function(t) {
          console.log("async_subscribe fail", t), e("fail")
        }
      })
    }))
  },
  buttontap_send_msg: function() {
    var e = this;
    wx.requestSubscribeMessage({
      tmplIds: ["CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ"],
      success: function(t) {
        if ("accept" != t.CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ) console.log(t, "--- fail ---"), e.setData({
          show_ask_send_msg: !0
        }), wx.showModal({
          title: "穗安防诈",
          content: "请您订阅穗安防诈消息",
          showCancel: !1,
          confirmText: "马上订阅",
          success: function(e) {
            wx.openSetting({
              success: function(e) {}
            })
          }
        });
        else {
          e.setData({
            show_ask_send_msg: !1
          }), e.go_anti_cheat();
          r.wx_request("https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_017_anti_cheat_remind", {
            launch_type: "SMS_SUBSCRIBE"
          })
        }
      },
      fail: function(t) {
        console.log(t, "--- fail ---"), e.setData({
          show_ask_send_msg: !0
        }), wx.showModal({
          title: "穗安防诈",
          content: "请您订阅穗安防诈消息",
          showCancel: !1,
          confirmText: "马上订阅",
          success: function(e) {
            wx.openSetting({
              success: function(e) {}
            })
          }
        })
      }
    })
  },
  sv_020_get_questionare_state: (c = a(t().mark((function e() {
    var a, n, s, c, i, _, l, u, p, d;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return n = {
            questionare_token_for_jump: (a = this).data.questionare_token_for_jump
          }, s = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_001_health_passport/sv_020_get_questionare_state", e.next = 5, r.wx_request(s, n);
        case 5:
          if (c = e.sent, console.log("sv_020_get_questionare_state res:", s, o(c), c), "000000000000" != c.data[0].resp_code) {
            e.next = 25;
            break
          }
          if (1 != c.data[0].finish_questioniare) {
            e.next = 25;
            break
          }
          if ("bdd525198bc043fb8755577b5ab53e48" != a.data.project_key) {
            e.next = 21;
            break
          }
          return clearTimeout(a.data.timeoutID), i = wx.getStorageSync("encry_id"), _ = wx.getStorageSync("busi_type"), l = wx.getStorageSync("cry_type"), u = wx.getStorageSync("show_type"), p = "/page/component/pages/pass_document_green/component?encry_id=" + i + "&busi_type=" + _ + "&cry_type=" + l + "&show_type=" + u, console.log("encodeURIComponent url", p), wx.redirectTo({
            url: p
          }), e.abrupt("return");
        case 21:
          if ("e511bac1565f4ee587cfbcc92650772b" != a.data.project_key) {
            e.next = 25;
            break
          }
          return clearTimeout(a.data.timeoutID), wx.reLaunch({
            url: "../../module_001/p_016_staff_work_permit/staff_work_permit"
          }), e.abrupt("return");
        case 25:
          d = setTimeout(a.sv_020_get_questionare_state, 2500), a.data.timeoutID = d;
        case 27:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function() {
    return c.apply(this, arguments)
  }),
  sv_021_get_grid_officer_role: (s = a(t().mark((function e() {
    var a, n, s, c, i, _;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return a = this, n = {
            foo: "bar"
          }, s = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_001_health_passport/sv_021_get_grid_officer_role", wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), e.next = 6, r.wx_request(s, n);
        case 6:
          if (c = e.sent, console.log("sv_021_get_grid_officer_role res:", s, o(c), c), wx.hideLoading(), "000000000000" != c.data[0].resp_code) {
            e.next = 21;
            break
          }
          if (!0 !== c.data[0].show_wgy_modlue) {
            e.next = 18;
            break
          }
          return i = c.data[0].cloud_shield_token, _ = "https://xcx.pinganbaiyun.cn/p_077_yzy_health/www/index.html?code=" + i + "&param_value=jump_to@@@grid_officer_index", console.log("1732026676291 src", _), a.setData({
            src: _,
            show_webview: !0
          }), e.abrupt("return");
        case 18:
          wx.showModal({
            title: "提示",
            content: "您不是网格员.请返回",
            showCancel: !1,
            success: function(e) {
              wx.reLaunch({
                url: "../../page/index_01/pages/my/my"
              })
            }
          });
        case 19:
          e.next = 22;
          break;
        case 21:
          wx.showModal({
            title: "提示",
            content: "您不是网格员.请返回",
            showCancel: !1,
            success: function(e) {
              wx.reLaunch({
                url: "../../page/index_01/pages/my/my"
              })
            }
          });
        case 22:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function() {
    return s.apply(this, arguments)
  }),
  onShareAppMessage: function(e) {},
  onShareTimeline: function(e) {},
  oper_questionare_buzi: (n = a(t().mark((function e(a, o) {
    var n, s, c, i, _, l, u, p;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return n = this, e.prev = 1, wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), s = {}, c = "", i = "", "REJECT_BY_SELF" != a && "REJECT_BY_SELF_THEN_APPLY" != a || (s.rec_id = o.rec_id, s.buzi_type = o.buzi_type, c = "https://xcx.pinganbaiyun.cn/health_passport/api_004_motorcycles/sv_010_reject_passport_self", i = "您已撤回申请，您可再次申请。"), e.next = 9, r.wx_request(c, s);
        case 9:
          if (_ = e.sent, wx.hideLoading(), "000000000000" != _.data[0].resp_code) {
            e.next = 22;
            break
          }
          if ("REJECT_BY_SELF_THEN_APPLY" != a) {
            e.next = 19;
            break
          }
          return l = o.project_key, u = o.questionare_token, p = "https://qv1.pinganbaiyun.cn/index.html#/project/write?key=" + l + "&token=" + u, console.log("jump_url", p), n.setData({
            src: p,
            show_webview: !0
          }), e.abrupt("return");
        case 19:
          wx.showModal({
            title: "提示",
            content: i,
            showCancel: !1,
            success: function(e) {
              wx.reLaunch({
                url: "../../page/index_01/pages/my/my"
              })
            }
          }), e.next = 24;
          break;
        case 22:
          return wx.showModal({
            title: "提示",
            content: _.data[0].resp_msg + "(" + _.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {
              wx.reLaunch({
                url: "../../page/index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 24:
          e.next = 31;
          break;
        case 26:
          return e.prev = 26, e.t0 = e.catch(1), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + e.t0,
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 31:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [1, 26]
    ])
  }))), function(e, t) {
    return n.apply(this, arguments)
  }),
  end_method: function() {}
});