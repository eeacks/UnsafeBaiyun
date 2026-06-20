require("../../../../@babel/runtime/helpers/Arrayincludes");
var e, a = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/typeof"),
  o = require("../../../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../../../util/regenerator-runtime/runtime")) && e.__esModule;
var r, n, s = getApp(),
  c = require("../../../../util/util.js"),
  _ = require("../../../../config.js");
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    msg: "后台审核大概需要3分钟,请耐心等待短信验证码",
    button_msg: "再次获取验证码",
    button_disabled: !0,
    showModal_launch: !1,
    launch_app_param: "",
    app_parameter: null,
    showModal_launch_yun_yi_an: !1,
    showModal_lf_launch: !1,
    DEFINE_TIMER: 60,
    times: 60,
    timeoutID: 0,
    show_button: !1,
    reload_phone: !0,
    mobile_phone: "",
    verify_code: "",
    show_ask_send_msg: !1,
    show_success_info: "",
    buttons_send_msg: [{
      type: "default",
      className: "",
      text: "取消",
      value: 0
    }, {
      type: "primary",
      className: "",
      text: "允许发送",
      value: 1
    }],
    show_page: "",
    private_verify_code: ""
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
  error: function(e) {
    console.log(e.detail)
  },
  onLoad: function(e) {},
  onShow: function() {
    console.log("onShow form_ocr_04");
    null != s.globalData.page_verify_code_msg && this.setData({
      msg: s.globalData.page_verify_code_msg
    }), this.setData({
      times: this.data.DEFINE_TIMER
    }), this.run_timer();
    var e = wx.getStorageSync("private_verify_code");
    console.log("1730310363145", s.globalData.verify_type, e), e = "", "" != s.globalData.mobile_phone && null != s.globalData.mobile_phone && null != s.globalData.mobile_phone && "" != s.globalData.purePhoneNumber && null != s.globalData.purePhoneNumber && null != s.globalData.purePhoneNumber && s.globalData.mobile_phone === s.globalData.purePhoneNumber && (e = s.globalData.purePhoneNumber), "" != e && (this.setData({
      private_verify_code: "请稍后...",
      verify_code: "请稍后...",
      msg: "后台审核大概需要1~3分钟,请耐心等待"
    }), this.submit_verify_code())
  },
  onUnload: function() {
    console.log("onUnload")
  },
  submit_verify_code: function() {
    console.log("submit_verify_code form_ocr_04");
    var e = this;
    if (null != s.globalData.openid && null != s.globalData.openid && "" != s.globalData.openid)
      if ("RENTER" == s.globalData.openid.substr(0, 6) && (console.log("房东代录入的，没有获取微信绑定手机功能"), e.setData({
          reload_phone: !1
        })), null != e.data.verify_code && null != e.data.verify_code && "" != e.data.verify_code) {
        var r = wx.getStorageSync("private_verify_code");
        wx.showLoading({
          title: "请稍后...",
          mask: !0
        });
        var n = s.globalData.openid,
          l = wx.getStorageSync("volunteer_password");
        null != l && null != l && "" != l ? n = s.globalData.openid : l = "";
        var i = {};
        (i = "" != s.globalData.back_url ? {
          verify_code: e.data.verify_code,
          openId: n,
          oper_type: s.globalData.back_url,
          face_verify_result: s.globalData.face_verify_result,
          volunteer_password: l,
          private_verify_code: r
        } : {
          verify_code: e.data.verify_code,
          openId: n,
          face_verify_result: s.globalData.face_verify_result,
          private_verify_code: r
        }).verify_result_OK_token = s.globalData.verify_result_OK_token, console.log("1730315213293 post_data", i), console.log("1730315213294 globalData", s.globalData.verify_result_OK_token);
        var u;
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/submit_verify_code",
          method: "POST",
          dataType: "json",
          data: i,
          header: {
            session_key: s.globalData.session_key_token
          },
          success: (u = o(a().mark((function o(r) {
            var i, u, d, g, p, m, b, x, w, h, y, f, S, v, k, D, L, M, E, C, N, O, I, T, R, A, P, j, q, U, B, F, H, J, G, z, Y, K, Q, W, Z, V, X, $, ee, ae;
            return a().wrap((function(a) {
              for (;;) switch (a.prev = a.next) {
                case 0:
                  if (wx.hideLoading(), console.log("返回信息", r), "000000000000" != r.data[0].resp_code) {
                    a.next = 419;
                    break
                  }
                  if (console.log("返回成功"), i = r.data[0].access_token, s.globalData.access_token = i, wx.removeStorageSync("private_verify_code"), s.globalData.purePhoneNumber = "", wx.removeStorageSync("register_token"), null != l && null != l && "" != l && (wx.removeStorageSync("openId"), wx.removeStorageSync("XM"), wx.removeStorageSync("ZJHM"), wx.removeStorageSync("mobile_phone"), wx.removeStorageSync("volunteer_password")), s.globalData.verify_result_OK_token = "", u = _.get_url() + "mini_program/api_05_rent_house_mini_program/send_remind_616_register", d = {
                      openId: n
                    }, g = JSON.stringify(d), console.log("检查是否潜在616人员，是的话就发推送", u, g), c.wx_request(u, g), null != s.globalData.input_company_id) {
                    a.next = 21;
                    break
                  }
                  a.next = 23;
                  break;
                case 21:
                  return wx.showModal({
                    title: "提示",
                    content: "注册成功，您将开始加入单位【" + s.globalData.input_company_name + "】",
                    showCancel: !1,
                    success: function(e) {
                      wx.showLoading({
                        title: "提交中..."
                      });
                      var a = {
                        openId: n,
                        company_rec_id: s.globalData.input_company_id,
                        department_code: s.globalData.department_code,
                        live_city: s.globalData.live_city,
                        live_area: s.globalData.live_area,
                        live_address: s.globalData.live_address
                      };
                      console.log("post_data:", a), wx.request({
                        url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/input_company_by_id",
                        method: "POST",
                        dataType: "json",
                        data: a,
                        success: function(e) {
                          return wx.hideLoading(), console.log("提交信息", e), "000000000000" == e.data[0].resp_code ? (console.log("提交成功"), void wx.showModal({
                            title: "提示",
                            content: "加入单位【 " + e.data[0].company_name + "】成功",
                            showCancel: !1,
                            success: function(e) {
                              wx.reLaunch({
                                url: "../../../company/pages/form_my_company_of_staff/form"
                              }), s.globalData.live_city = "", s.globalData.live_area = "", s.globalData.live_address = "", s.globalData.department_code = ""
                            }
                          })) : void wx.showModal({
                            title: "提示",
                            content: "加入单位失败," + e.data[0].resp_msg + "," + e.data[0].resp_code,
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
                  }), a.abrupt("return");
                case 23:
                  if (null != s.globalData.input_rent_house_rec_id) {
                    a.next = 28;
                    break
                  }
                  a.next = 55;
                  break;
                case 28:
                  return u = _.get_url() + "mini_program/api_05_rent_house_mini_program/is_need_renter_perfect_infomation", d = {
                    openId: s.globalData.openid
                  }, g = JSON.stringify(d), a.next = 34, c.wx_request(u, g);
                case 34:
                  if ("000000000000" != (p = a.sent).data[0].resp_code) {
                    a.next = 46;
                    break
                  }
                  if (m = p.data[0].nation, b = p.data[0].province_code, x = p.data[0].is_has_permanent_detail_address, "65" != b || 1 != [void 0, null, "", "维吾尔族"].includes(m) && "false" != x) {
                    a.next = 43;
                    break
                  }
                  return s.globalData.input_rent_house_rec_id = s.globalData.input_rent_house_rec_id, wx.reLaunch({
                    url: "../../../rent_house/pages/form_616_person_jion_rent_house/form_616_person_jion_rent_house"
                  }), a.abrupt("return");
                case 43:
                  console.log("不用完善信息"), a.next = 48;
                  break;
                case 46:
                  return wx.showModal({
                    title: "后台服务器异常",
                    content: "提交失败-0168," + p,
                    showCancel: !1
                  }), a.abrupt("return");
                case 48:
                  wx.showLoading({
                    title: "申请入住中...",
                    mask: !0
                  }), w = wx.getStorageSync("join_rent_house_post_data"), h = JSON.parse(w), console.log("join_rent_house post_data:", g), u = "https://xcx.pinganbaiyun.cn/mini_program/api_05_rent_house_mini_program/join_rent_house", wx.request({
                    url: u,
                    method: "POST",
                    dataType: "json",
                    data: h,
                    success: function(a) {
                      if (wx.hideLoading(), console.log("join_rent_house返回信息", a), "000000000000" != a.data[0].resp_code) {
                        if ("000000000001" == a.data[0].resp_code || "0000000023128" == a.data[0].resp_code || "000000023121" == a.data[0].resp_code || "000000023111" == a.data[0].resp_code) {
                          var t = "/page/component/pages/pass_document_green/component?encry_id=" + h.rent_house_rec_id + "&busi_type=1&cry_type=plain_text";
                          return console.log("encodeURIComponent url", t), void wx.reLaunch({
                            url: t
                          })
                        }
                        wx.showModal({
                          title: "平安码丨平安白云",
                          content: a.data[0].resp_msg + "," + a.data[0].resp_code,
                          showCancel: !1,
                          success: function() {
                            wx.reLaunch({
                              url: "../../../index_01/pages/my/my"
                            })
                          }
                        })
                      } else {
                        console.log("提交成功");
                        var o = a.data[0].renter_rec_id,
                          r = a.data[0].attribute;
                        wx.setStorageSync("joint_rent_house_rec_id", o), wx.setStorageSync("joint_rent_house_attr", r), e.setData({
                          state: "已提交入住申请,等待管理员审核"
                        }), wx.removeStorageSync("joint_rent_house_room_name"), wx.removeStorageSync("joint_rent_house_room_code"), wx.removeStorageSync("month_index"), s.globalData.input_rent_house_rec_id = null;
                        var n = "申请入住【" + s.globalData.input_rent_house_address + "】已受理,请等待管理员审批";
                        e.setData({
                          show_success_info: n,
                          show_ask_send_msg: !0
                        })
                      }
                    },
                    fail: function(e) {
                      wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                        title: "后台服务器异常",
                        content: "提交失败-0168," + e.errMsg,
                        showCancel: !1
                      })
                    }
                  });
                case 54:
                  return a.abrupt("return");
                case 55:
                  if ("RENTER" != s.globalData.register_type.substr(0, 6)) {
                    a.next = 70;
                    break
                  }
                  return s.globalData.register_type = "SELF", y = wx.getStorageSync("rent_house_code"), f = wx.getStorageSync("room_code"), S = wx.getStorageSync("room_name"), v = wx.getStorageSync("expired_month"), "日租" == (k = wx.getStorageSync("date_unit")) && (k = "天", v = wx.getStorageSync("rent_period")), wx.showLoading({
                    title: "正在申请入住套间..."
                  }), g = {
                    renter_open_id: n,
                    agent_open_id: s.globalData.openid,
                    rent_house_code: y,
                    room_code: f,
                    room_name: S,
                    expired_month: v,
                    date_unit: k
                  }, u = "https://xcx.pinganbaiyun.cn/mini_program/api_05_rent_house_mini_program/add_renter_by_admin", console.log("post_data:", g, u), wx.request({
                    url: u,
                    method: "POST",
                    dataType: "json",
                    data: g,
                    success: function(e) {
                      if (wx.hideLoading(), console.log("提交信息", e), wx.removeStorageSync("rent_house_code"), wx.removeStorageSync("room_code"), wx.removeStorageSync("room_name"), wx.removeStorageSync("expired_month"), wx.removeStorageSync("date_unit"), wx.removeStorageSync("rent_period"), "000000000000" != e.data[0].resp_code) "000000000001" != e.data[0].resp_code ? wx.showModal({
                        title: "提示",
                        content: "加入套间失败," + e.data[0].resp_msg + "," + e.data[0].resp_code,
                        showCancel: !1,
                        success: function() {}
                      }) : (console.log("提交成功"), a = e.data[0].name, t = e.data[0].renter_rec_id, wx.showModal({
                        title: "提示",
                        content: a + "您好,您已入住套间【" + S + "】成功,不再重复申请",
                        showCancel: !1,
                        success: function(e) {
                          wx.reLaunch({
                            url: "../../../index_01/pages/my/my"
                          })
                        }
                      }));
                      else {
                        var a = e.data[0].name,
                          t = e.data[0].renter_rec_id,
                          o = e.data[0].dzbm;
                        wx.showModal({
                          title: "提示",
                          content: a + "您好,入住套间【" + S + "】成功",
                          showCancel: !1,
                          success: function(e) {
                            if (1 == e.confirm) {
                              s.globalData.register_type = "SELF";
                              var a = "jump_to=GO_FERFECT_RENTER@@@",
                                r = {};
                              r.rent_house_code = y, r.room_code = f, r.dzbm = o, r.renter_rec_id = t;
                              var n = "../../../third_part/pages/rent_house/form?" + (a += JSON.stringify(r));
                              wx.reLaunch({
                                url: n
                              })
                            }
                          }
                        })
                      }
                    },
                    fail: function(e) {
                      wx.hideLoading(), console.log("提交失败，", e), wx.removeStorageSync("rent_house_code"), wx.removeStorageSync("room_code"), wx.removeStorageSync("room_name"), wx.removeStorageSync("expired_month"), wx.removeStorageSync("rent_period"), wx.showModal({
                        title: "后台服务器异常,入住套间失败",
                        content: "提交失败-0168," + e.errMsg,
                        showCancel: !1
                      })
                    }
                  }), wx.reLaunch({
                    url: "../../../index_01/pages/my/my"
                  }), a.abrupt("return");
                case 70:
                  if ("COMPANY" != s.globalData.register_type.substr(0, 7)) {
                    a.next = 86;
                    break
                  }
                  if (s.globalData.register_type = "SELF", D = wx.getStorageSync("company_code"), L = wx.getStorageSync("department_code"), M = wx.getStorageSync("live_address"), E = wx.getStorageSync("remark"), null != D && null != D && "undefined" != D && "" != D) {
                    a.next = 79;
                    break
                  }
                  return wx.showModal({
                    title: "提示",
                    content: "数据异常 单位编号为空 10036",
                    showCancel: !1,
                    success: function(e) {}
                  }), a.abrupt("return");
                case 79:
                  return wx.showLoading({
                    title: "正在加入单位..."
                  }), g = {
                    staff_open_id: n,
                    agent_open_id: s.globalData.openid,
                    company_code: D,
                    department_code: L,
                    live_address: M,
                    remark: E
                  }, u = "https://xcx.pinganbaiyun.cn/mini_program/api_01/input_staff_by_agent", console.log("post_data:", g, u), wx.request({
                    url: u,
                    method: "POST",
                    dataType: "json",
                    data: g,
                    success: function(e) {
                      if (wx.hideLoading(), console.log("提交信息", e), wx.removeStorageSync("company_code"), wx.removeStorageSync("department_code"), wx.removeStorageSync("live_address"), wx.removeStorageSync("remark"), "000000000000" != e.data[0].resp_code) "-0000000036188" != e.data[0].resp_code ? wx.showModal({
                        title: "提示",
                        content: "加入单位部门失败," + e.data[0].resp_msg + "," + e.data[0].resp_code,
                        showCancel: !1,
                        success: function() {}
                      }) : (console.log("提交成功"), a = e.data[0].name, t = e.data[0].company_name, o = e.data[0].department_name, wx.showModal({
                        title: "提示",
                        content: e.data[0].resp_msg,
                        showCancel: !1,
                        success: function(e) {
                          wx.reLaunch({
                            url: "../../../index_01/pages/my/my"
                          })
                        }
                      }));
                      else {
                        var a = e.data[0].name,
                          t = e.data[0].company_name,
                          o = e.data[0].department_name;
                        wx.showModal({
                          title: "提示",
                          content: a + "您好,加入单位部门【" + t + o + "】成功",
                          showCancel: !1,
                          success: function(e) {
                            s.globalData.register_type = "SELF", wx.reLaunch({
                              url: "../../../index_01/pages/my/my"
                            })
                          }
                        })
                      }
                    },
                    fail: function(e) {
                      wx.hideLoading(), console.log("提交失败，", e), wx.removeStorageSync("company_code"), wx.removeStorageSync("department_code"), wx.removeStorageSync("live_address"), wx.removeStorageSync("remark"), wx.showModal({
                        title: "后台服务器异常,加入单位部门失败",
                        content: "提交失败-0168," + e.errMsg,
                        showCancel: !1
                      })
                    }
                  }), wx.reLaunch({
                    url: "../../../index_01/pages/my/my"
                  }), a.abrupt("return");
                case 86:
                  if ("APP_LAUNCH_REGISTER" != s.globalData.register_type) {
                    a.next = 98;
                    break
                  }
                  if (s.globalData.register_type = "SELF", console.log("app跳转小程序进来的"), null == s.globalData.third_part_img_file_id || null == s.globalData.third_part_img_file_id || "" == s.globalData.third_part_img_file_id) {
                    a.next = 94;
                    break
                  }
                  return e.sv_014_get_ble_img_verify(), a.abrupt("return");
                case 94:
                  return u = "../../../launch_app/index?oper_state=FINISH&register=0", console.log(u, "url"), wx.reLaunch({
                    url: u
                  }), a.abrupt("return");
                case 98:
                  if ("YUN_YI_AN_LAUNCH_REGISTER" != s.globalData.register_type) {
                    a.next = 102;
                    break
                  }
                  return e.setData({
                    showModal_launch_yun_yi_an: !0
                  }), s.globalData.register_type = "", a.abrupt("return");
                case 102:
                  if ("LF_LAUNCH_REGISTER" != s.globalData.register_type) {
                    a.next = 106;
                    break
                  }
                  return e.setData({
                    showModal_lf_launch: !0
                  }), s.globalData.register_type = "", a.abrupt("return");
                case 106:
                  if (console.log("form_ocr_04 app.globalData.back_url", s.globalData.back_url), "GATE" != s.globalData.back_url) {
                    a.next = 114;
                    break
                  }
                  return i = r.data[0].access_token, s.globalData.access_token = i, wx.reLaunch({
                    url: "../../../third_part/pages/gate/form"
                  }), a.abrupt("return");
                case 114:
                  if ("RENT_HOUSE" != s.globalData.back_url) {
                    a.next = 121;
                    break
                  }
                  return i = r.data[0].access_token, s.globalData.access_token = i, wx.reLaunch({
                    url: "../../../third_part/pages/rent_house/form"
                  }), a.abrupt("return");
                case 121:
                  if ("COMPANY" != s.globalData.back_url) {
                    a.next = 128;
                    break
                  }
                  return i = r.data[0].access_token, s.globalData.access_token = i, wx.reLaunch({
                    url: "../../../third_part/pages/company/form"
                  }), a.abrupt("return");
                case 128:
                  if ("STRIKE_BLACK" != s.globalData.back_url) {
                    a.next = 140;
                    break
                  }
                  if (i = r.data[0].access_token, s.globalData.access_token = i, "2" != wx.getStorageSync("strike_black_fireworks")) {
                    a.next = 136;
                    break
                  }
                  return wx.removeStorageSync("strike_black_fireworks"), wx.reLaunch({
                    url: "../../../strike_black/form?scene=111&fireworks=2"
                  }), a.abrupt("return");
                case 136:
                  return wx.reLaunch({
                    url: "../../../third_part/pages/strike_black/form"
                  }), a.abrupt("return");
                case 140:
                  if ("EXPRESS" != s.globalData.back_url) {
                    a.next = 147;
                    break
                  }
                  return i = r.data[0].access_token, s.globalData.access_token = i, wx.reLaunch({
                    url: "../../../third_part/pages/express/form"
                  }), a.abrupt("return");
                case 147:
                  if ("HOT_LINE_12345" != s.globalData.back_url) {
                    a.next = 154;
                    break
                  }
                  return i = r.data[0].access_token, s.globalData.access_token = i, wx.reLaunch({
                    url: "../../../../module_001/p_010_municipal_government/municipal_government_index"
                  }), a.abrupt("return");
                case 154:
                  if ("BOOK_LIVE_CARD" != s.globalData.back_url) {
                    a.next = 161;
                    break
                  }
                  return i = r.data[0].access_token, s.globalData.access_token = i, wx.reLaunch({
                    url: "../../../../module_001/p_001_book_live_guard/form"
                  }), a.abrupt("return");
                case 161:
                  if ("MEETING" != s.globalData.back_url) {
                    a.next = 168;
                    break
                  }
                  return i = r.data[0].access_token, s.globalData.access_token = i, wx.reLaunch({
                    url: "../../../meeting/meeting_reception/component"
                  }), a.abrupt("return");
                case 168:
                  if ("PASS_PORT" != s.globalData.back_url) {
                    a.next = 175;
                    break
                  }
                  return i = r.data[0].access_token, s.globalData.access_token = i, wx.reLaunch({
                    url: "../../../traffic_permit/traffic_permit"
                  }), a.abrupt("return");
                case 175:
                  if ("PASSPORT_REGION" != s.globalData.back_url) {
                    a.next = 183;
                    break
                  }
                  return i = r.data[0].access_token, s.globalData.access_token = i, C = s.globalData.passport_region_id, wx.reLaunch({
                    url: "../../../traffic_permit_region/traffic_permit_region?scene=" + C
                  }), a.abrupt("return");
                case 183:
                  if ("JOIN_MEETING" != s.globalData.back_url) {
                    a.next = 190;
                    break
                  }
                  return N = wx.getStorageSync("meeting_rec_id"), wx.removeStorageSync("meeting_rec_id"), wx.reLaunch({
                    url: "../../../meeting/meeting_attend_confirm/component?rec_id=" + N
                  }), a.abrupt("return");
                case 190:
                  if ("MOTOR_REGISTER" != s.globalData.back_url) {
                    a.next = 197;
                    break
                  }
                  return O = wx.getStorageSync("motor_code"), wx.removeStorageSync("motor_code"), wx.reLaunch({
                    url: "../../../../module_001/p_003_motor_register/form?scene=" + O
                  }), a.abrupt("return");
                case 197:
                  if ("LOTTERY" != s.globalData.back_url) {
                    a.next = 202;
                    break
                  }
                  return wx.reLaunch({
                    url: "../../../page_001_lottery/form?scene=100"
                  }), a.abrupt("return");
                case 202:
                  if ("FDA_CONFRIM" != s.globalData.back_url) {
                    a.next = 207;
                    break
                  }
                  return wx.reLaunch({
                    url: "../../../../module_002_fda/p_001_fda/cloud_comfirm/cloud_comfirm_index/cloud_comfirm_index"
                  }), a.abrupt("return");
                case 207:
                  if ("FDA_ADDRESS_LIB" != s.globalData.back_url) {
                    a.next = 212;
                    break
                  }
                  return wx.reLaunch({
                    url: "../../../../module_002_fda/p_001_fda/address_lib/index/index"
                  }), a.abrupt("return");
                case 212:
                  if ("FDA" != s.globalData.back_url) {
                    a.next = 217;
                    break
                  }
                  return wx.reLaunch({
                    url: "../../../../module_002_fda/p_001_fda/Food_index/Food_index"
                  }), a.abrupt("return");
                case 217:
                  if ("FDA_LEGAL_PERSON_CONFIRM" != s.globalData.back_url) {
                    a.next = 226;
                    break
                  }
                  return I = wx.getStorageSync("unite_trust_code_json_str"), wx.reLaunch({
                    url: "../../../../module_002_fda/p_001_fda/Query_results/Query_results?show=show1&request_type=true&data_obj2=" + I
                  }), wx.removeStorageSync("unite_trust_code_json_str"), a.abrupt("return");
                case 226:
                  if ("TAKE_NUM" != s.globalData.back_url) {
                    a.next = 253;
                    break
                  }
                  if (T = wx.getStorageSync("encry_id"), wx.removeStorageSync("encry_id"), "wdsJbPm4Z5MpMbfUJNCdsQ==" != decodeURIComponent(T) && "all" != T) {
                    a.next = 234;
                    break
                  }
                  return wx.setStorageSync("access_token", s.globalData.access_token), wx.setStorageSync("openid", s.globalData.openid), wx.showActionSheet({
                    itemList: ["请选择取号业务", "出入境业务", "户政业务"],
                    success: function(e) {
                      1 == e.tapIndex ? wx.reLaunch({
                        url: "../../../../module_001/online_take_num/index/index?type=0"
                      }) : 2 == e.tapIndex && wx.reLaunch({
                        url: "../../../../module_001/online_take_num/index/index?type=1"
                      }), console.log(e.tapIndex)
                    },
                    fail: function(e) {
                      console.log(e.errMsg)
                    }
                  }), a.abrupt("return");
                case 234:
                  if ("PducuZASRZ9+Ix9ypyD1MA==" != decodeURIComponent(T)) {
                    a.next = 239;
                    break
                  }
                  return wx.setStorageSync("access_token", s.globalData.access_token), wx.setStorageSync("openid", s.globalData.openid), wx.reLaunch({
                    url: "../../../../module_001/online_take_num/index/index?type=1"
                  }), a.abrupt("return");
                case 239:
                  if ("iHpOzkuvgv2/0++CVxLO3g==" != decodeURIComponent(T)) {
                    a.next = 244;
                    break
                  }
                  return wx.setStorageSync("access_token", s.globalData.access_token), wx.setStorageSync("openid", s.globalData.openid), wx.reLaunch({
                    url: "../../../../module_001/online_take_num/index/index?type=0"
                  }), a.abrupt("return");
                case 244:
                  if (R = wx.getStorageSync("scene"), wx.removeStorageSync("scene"), 110 != R) {
                    a.next = 251;
                    break
                  }
                  return wx.setStorageSync("access_token", s.globalData.access_token), wx.setStorageSync("openid", s.globalData.openid), wx.reLaunch({
                    url: "../../../../module_001/online_take_num/index/index?type=1&src=take_num_live"
                  }), a.abrupt("return");
                case 251:
                  a.next = 404;
                  break;
                case 253:
                  if ("WBYW" != s.globalData.back_url) {
                    a.next = 270;
                    break
                  }
                  return wx.setStorageSync("access_token", s.globalData.access_token), wx.setStorageSync("openid", s.globalData.openid), A = wx.getStorageSync("busi_type"), P = wx.getStorageSync("second_type"), wx.removeStorageSync("busi_type"), wx.removeStorageSync("second_type"), j = "../../../index/index", "wbyw_query_household_register" == A && ("人员查询" == P ? j = "../../../../module_003_online_buzi/p_001_online_buzi/Personal_inquiry1/Personal_inquiry1" : "单位查询" == P && (j = "../../../../module_003_online_buzi/p_001_online_buzi/Unit_query1/Unit_query1")), "wbyw_no_criminal_record" == A && (j = "../../../../module_003_online_buzi/p_001_online_buzi/No_crime_prove/No_crime_prove"), "wbyw_Business_record" == A && (j = "../../../../module_003_online_buzi/p_001_online_buzi/Business_record/Business_record"), "wbyw_border_cer" == A && (j = "../../../../module_003_online_buzi/p_001_online_buzi/Border_defense_certificate1/Border_defense_certificate1"), console.log("jump_url", j), wx.reLaunch({
                    url: j
                  }), a.abrupt("return");
                case 270:
                  if ("GGAQSPBADJ" != s.globalData.back_url) {
                    a.next = 276;
                    break
                  }
                  wx.setStorageSync("access_token", s.globalData.access_token), wx.setStorageSync("openid", s.globalData.openid), wx.reLaunch({
                    url: "/module_003_online_buzi/p_005_public_video_filing/register_form/register_form"
                  }), a.next = 404;
                  break;
                case 276:
                  if ("JWS" != s.globalData.back_url) {
                    a.next = 282;
                    break
                  }
                  wx.setStorageSync("access_token", s.globalData.access_token), wx.setStorageSync("openid", s.globalData.openid), wx.reLaunch({
                    url: "/module_004/p_003_policing_room/index/index"
                  }), a.next = 404;
                  break;
                case 282:
                  if ("COMMON_WEBVIEW" != s.globalData.back_url) {
                    a.next = 305;
                    break
                  }
                  if (R = wx.getStorageSync("scene"), wx.removeStorageSync("scene"), "que" != R) {
                    a.next = 294;
                    break
                  }
                  return q = wx.getStorageSync("load_options"), wx.removeStorageSync("load_options"), console.log("que load_options", t(q), q), console.log("que load_options 001:", t(wx.getStorageSync("load_options")), wx.getStorageSync("load_options")), U = "../../../page_006_common_webview/page_006_common_webview?scene=que&check_register=YES&encry_id=" + q.encry_id, console.log("que jum_url", U), wx.reLaunch({
                    url: U
                  }), a.abrupt("return");
                case 294:
                  return j = "../../../page_006_common_webview/page_006_common_webview?scene=" + R, j = wx.getStorageSync("jump_url"), wx.removeStorageSync("jump_url"), B = wx.getStorageSync("jump_params"), wx.removeStorageSync("jump_params"), null != j && null != j && "" != j && (-1 == B.indexOf("https://xcx.pinganbaiyun.cn/qrcode/?type=rent") && -1 == B.indexOf("https://xcx.pinganbaiyun.cn/qrcode/?type=company") && -1 == B.indexOf("https://xcx.pinganbaiyun.cn/qrcode/?type=person") || (B = encodeURIComponent(B)), j = "../../../page_006_common_webview/page_006_common_webview?url=" + j + "&params=" + B), console.log("COMMON_WEBVIEW jump_url", j), wx.reLaunch({
                    url: j
                  }), a.abrupt("return");
                case 305:
                  if ("WISHI_YOU_HEALTH" != s.globalData.back_url) {
                    a.next = 328;
                    break
                  }
                  if (wx.setStorageSync("access_token", s.globalData.access_token), wx.setStorageSync("openid", s.globalData.openid), F = wx.getStorageSync("encry_id"), H = wx.getStorageSync("busi_type"), J = wx.getStorageSync("cry_type"), G = wx.getStorageSync("show_type"), 2 != H || "ZupAU2G7SRBtoQSnfHvpY89mYFZI8PpL" != F && "ZupAU2G7SRBtoQSnfHvpYy%2B7vziDXmpT" != F) {
                    a.next = 318;
                    break
                  }
                  return wx.reLaunch({
                    url: "../../../../module_004/addPersonInfo/inform?show_update_str=NO"
                  }), console.log("encodeURIComponent url", u), wx.reLaunch({
                    url: u
                  }), a.abrupt("return");
                case 318:
                  return wx.removeStorageSync("encry_id"), wx.removeStorageSync("busi_type"), wx.removeStorageSync("cry_type"), wx.removeStorageSync("show_type"), u = "/page/component/pages/pass_document_green/component?encry_id=" + F + "&busi_type=" + H + "&cry_type=" + J + "&show_type=" + G, console.log("encodeURIComponent url", u), wx.reLaunch({
                    url: u
                  }), a.abrupt("return");
                case 328:
                  if ("BACK_TO_MOTOR_MNG" != s.globalData.back_url) {
                    a.next = 337;
                    break
                  }
                  return wx.getStorageSync("company_code_let"), wx.removeStorageSync("company_code_let"), console.log("BACK_TO_MOTOR_MNG encodeURIComponent url", u), wx.reLaunch({
                    url: u
                  }), a.abrupt("return");
                case 337:
                  if ("BACK_TO_OPEN_BANK" != s.globalData.back_url) {
                    a.next = 346;
                    break
                  }
                  return z = wx.getStorageSync("company_code_let"), wx.removeStorageSync("company_code_let"), u = "/module_001/p_014_bank_apply/bank_apply_index/form?company_code=" + z, console.log("encodeURIComponent url3", u), wx.reLaunch({
                    url: u
                  }), a.abrupt("return");
                case 346:
                  if ("SCAN_HOUSE_NUMBER_CODE" != s.globalData.back_url) {
                    a.next = 356;
                    break
                  }
                  return A = wx.getStorageSync("busi_type"), wx.removeStorageSync("busi_type"), j = "../../../index/index", "REPORT_NEW" == A ? (Y = wx.getStorageSync("house_number_code"), wx.removeStorageSync("house_number_code"), j = "../../../../module_001/p_009_housenumber/newreport_house/newreport_house?house_number_code=" + Y) : "REPORT_HOUSE_NUMBER" == A ? (K = wx.getStorageSync("index"), wx.removeStorageSync("index"), Q = wx.getStorageSync("nameAddress"), wx.removeStorageSync("nameAddress"), W = wx.getStorageSync("companyName"), wx.removeStorageSync("companyName"), Z = wx.getStorageSync("moveout"), wx.removeStorageSync("moveout"), V = wx.getStorageSync("params_obj"), wx.removeStorageSync("params_obj"), j = "0" == K ? "../../../../module_001/p_009_housenumber/report_house/report_house?nameAddress=" + Q + "&moveout=" + Z + "&obj=" + JSON.stringify(V) : "../../../../module_001/p_009_housenumber/report_house/report_house?companyName=" + W + "&moveout=" + Z + "&obj=" + JSON.stringify(V)) : "OTHER_CLUE" == A && (K = wx.getStorageSync("index"), wx.removeStorageSync("index"), V = wx.getStorageSync("params_obj"), wx.removeStorageSync("params_obj"), j = "1" == K ? "../../../../module_001/p_009_housenumber/otherclues_house/otherclues_house?obj=" + JSON.stringify(V) : "../../../../module_001/p_009_housenumber/otherclues_company/otherclues_company?obj=" + JSON.stringify(V)), console.log("jump_url", j), wx.reLaunch({
                    url: j
                  }), a.abrupt("return");
                case 356:
                  if ("NATIONAL_ANTI_FRAUD" != s.globalData.back_url) {
                    a.next = 365;
                    break
                  }
                  return wx.setStorageSync("access_token", s.globalData.access_token), wx.setStorageSync("openid", s.globalData.openid), j = "../../../../module_004/p_001_fanzha/install_fanzha_app/install_fanzha_app", console.log("encodeURIComponent url", j), wx.reLaunch({
                    url: j
                  }), a.abrupt("return");
                case 365:
                  if ("JOINT_YJM_HOUSE" != s.globalData.back_url) {
                    a.next = 374;
                    break
                  }
                  return X = wx.getStorageSync("YJM_HOUSE_SCENE"), wx.removeStorageSync("YJM_HOUSE_SCENE"), j = "../../../../page/rent_house/pages/form_scan_qrcode/form?scene=" + X, console.log("YJM_HOUSE_SCENE url", j), wx.reLaunch({
                    url: j
                  }), a.abrupt("return");
                case 374:
                  if ("HCJ" != s.globalData.back_url) {
                    a.next = 380;
                    break
                  }
                  return wx.navigateBackMiniProgram({
                    extraData: {
                      res_code: "000000000000",
                      access_token: s.globalData.access_token
                    },
                    success: function(e) {}
                  }), wx.reLaunch({
                    url: "../../../index_01/pages/my/my"
                  }), a.abrupt("return");
                case 380:
                  if ("THIRD_PARTY_APP" != s.globalData.back_url) {
                    a.next = 386;
                    break
                  }
                  return wx.navigateBackMiniProgram({
                    extraData: {
                      res_code: "000000000000",
                      access_token: s.globalData.access_token
                    },
                    success: function(e) {}
                  }), wx.reLaunch({
                    url: "../../../index_01/pages/my/my"
                  }), a.abrupt("return");
                case 386:
                  if ("buy_bulk_oil" != s.globalData.back_url) {
                    a.next = 392;
                    break
                  }
                  return $ = "../../../../module_004/gas_station/gas_station_index?access_token=" + s.globalData.access_token, wx.reLaunch({
                    url: $
                  }), a.abrupt("return");
                case 392:
                  if ("baiyunmountain" != s.globalData.back_url) {
                    a.next = 398;
                    break
                  }
                  return ee = "../../../../module_004/baiyun_mount_appointment/index?access_token=" + s.globalData.access_token, wx.reLaunch({
                    url: ee
                  }), a.abrupt("return");
                case 398:
                  if ("CONCERT" != s.globalData.back_url) {
                    a.next = 404;
                    break
                  }
                  return wx.setStorageSync("access_token", s.globalData.access_token), wx.setStorageSync("openid", s.globalData.openid), wx.reLaunch({
                    url: "../../../../module_004/p_004_concert/p_004_concert"
                  }), a.abrupt("return");
                case 404:
                  if (s.globalData.page_qrcode_qr_code = r.data[0].png_string, s.globalData.page_qrcode_name = r.data[0].name, s.globalData.page_qrcode_id_card = r.data[0].id_card, s.globalData.page_qrcode_mobile_phone = r.data[0].mobile_phone, s.globalData.page_qrcode_expire_date = r.data[0].timestamp, s.globalData.page_qrcode_avatar = r.data[0].avatar_string, "云盾认证" == s.globalData.verify_type) {
                    console.log("云盾认证", s.globalData, t(s.globalData.USERINFO_post));
                    try {
                      ae = JSON.parse(s.globalData.USERINFO_post), console.log("USERINFO_post_obj", ae), s.globalData.page_qrcode_avatar = ae.avatarUrl
                    } catch (e) {
                      console.log("e", e)
                    }
                  }
                  if ("MY_QRCODE" != s.globalData.back_url && "MY_QRCODE_ZC" != s.globalData.back_url) {
                    a.next = 415;
                    break
                  }
                  return j = "../form_03/form", wx.reLaunch({
                    url: j
                  }), a.abrupt("return");
                case 415:
                  return wx.reLaunch({
                    url: "../form_03/form"
                  }), a.abrupt("return");
                case 419:
                  "000000000003" == r.data[0].resp_code ? wx.showModal({
                    title: "提示",
                    content: "您已注册",
                    showCancel: !1,
                    success: function(e) {
                      wx.reLaunch({
                        url: "../../../index/index"
                      })
                    }
                  }) : "-32198" == r.data[0].resp_code ? wx.showModal({
                    title: "提示",
                    content: "您输入的验证码已失效,请重新获取验证码",
                    showCancel: !1,
                    success: function(e) {}
                  }) : "-3219831" == r.data[0].resp_code ? (wx.removeStorageSync("private_verify_code"), wx.showModal({
                    title: "提示",
                    content: r.data[0].resp_msg,
                    showCancel: !1,
                    success: function(e) {
                      wx.reLaunch({
                        url: "../form_ocr_01/form"
                      })
                    }
                  })) : (console.log("1730373888975 fail:", r), wx.showModal({
                    title: "提示",
                    content: r.data[0].resp_msg,
                    showCancel: !1
                  }));
                case 420:
                case "end":
                  return a.stop()
              }
            }), o)
          }))), function(e) {
            return u.apply(this, arguments)
          }),
          fail: function(e) {
            wx.hideLoading(), console.log("提交验证码失败，", e), wx.showModal({
              title: "后台服务器异常",
              content: "提交验证码失败-0368," + e.errMsg,
              showCancel: !1
            })
          }
        })
      } else wx.showModal({
        title: "输入提示",
        content: "请输入验证码",
        showCancel: !1
      });
    else wx.showModal({
      title: "获取授权提示",
      content: "需要您的用户信息,地理位置,摄像头,请授权, 若您错过授权,请：删除小程序->重新搜索进入->点击授权按钮,并确保微信在苹果,安卓系统已经打开定位服务",
      showCancel: !1,
      success: function(e) {
        e.confirm ? (console.log("用户点击确定_01..."), wx.navigateBack({
          delta: 0
        })) : e.cancel && (console.log("用户点击取消_01..."), wx.navigateBack({
          delta: 0
        }))
      }
    })
  },
  bindinput_verify_code: function(e) {
    this.setData({
      verify_code: e.detail.value
    })
  },
  bindblur_verify_code: function(e) {
    e.detail.value;
    null != this.data.verify_code && null != this.data.verify_code && "" != this.data.verify_code ? this.setData({
      verify_code: e.detail.value
    }) : wx.showModal({
      title: "输入提示",
      content: "请输验证码",
      showCancel: !1
    })
  },
  get_verify_code: function() {
    var e = this;
    if (null != s.globalData.openid && null != s.globalData.openid) {
      var a = s.globalData.openid;
      "AGENT" == s.globalData.register_type.substr(0, 5) && (a = s.globalData.register_type + a), "RENTER" == s.globalData.register_type.substr(0, 6) && (a = s.globalData.register_type + a), "COMPANY" == s.globalData.register_type.substr(0, 7) && (a = s.globalData.register_type + a), wx.showLoading({
        title: "获取中..."
      });
      var t = {
        openId: a,
        open_id_post: a
      };
      t.verify_result_OK_token = s.globalData.verify_result_OK_token, console.log("1730375569122 post_data:", t);
      wx.request({
        url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/get_verify_code",
        method: "POST",
        dataType: "json",
        data: t,
        header: {
          session_key: s.globalData.session_key_token
        },
        success: function(a) {
          if (wx.hideLoading(), console.log("返回", a), "000000000000" == a.data[0].resp_code) return console.log("提交成功"), e.setData({
            times: e.data.DEFINE_TIMER
          }), void e.run_timer();
          console.log("err:", a), wx.showModal({
            title: "提示",
            content: a.data[0].resp_msg,
            showCancel: !1
          })
        },
        fail: function(e) {
          wx.hideLoading(), console.log("获取验证码失败，", e), wx.showModal({
            title: "异常",
            content: "获取验证码失败，-0368," + e.errMsg,
            showCancel: !1
          })
        }
      })
    } else wx.showModal({
      title: "获取授权提示",
      content: "需要您的用户信息,地理位置,摄像头,请授权, 若您错过授权,请：删除小程序->重新搜索进入->点击授权按钮,并确保微信在苹果,安卓系统已经打开定位服务",
      showCancel: !1,
      success: function(e) {
        e.confirm ? (console.log("用户点击确定_01..."), wx.navigateBack({
          delta: 0
        })) : e.cancel && (console.log("用户点击取消_01..."), wx.navigateBack({
          delta: 0
        }))
      }
    })
  },
  launchAppError: function(e) {
    console.log(e.detail.errMsg), wx.showModal({
      title: "返回app异常",
      content: e.detail.errMsg,
      confirmText: "确定",
      showCancel: !1,
      success: function(e) {}
    })
  },
  go_index: function() {
    wx.reLaunch({
      url: "../../../index_01/pages/my/my"
    })
  },
  run_timer: function() {
    if (this.data.times, this.data.DEFINE_TIMER, this.data.times > 0) {
      this.setData({
        button_msg: "再次获取验证码(" + this.data.times + ")"
      });
      var e = this.data.times;
      e -= 1, this.setData({
        times: e
      })
    } else if (0 == this.data.times) return this.setData({
      button_msg: "再次获取验证码"
    }), this.setData({
      button_disabled: !1,
      show_button: !0
    }), void clearTimeout(this.data.timeoutID);
    var a = setTimeout(this.run_timer, 1e3);
    this.setData({
      timeoutID: a
    })
  },
  get_mobile_phone: function(e) {
    var a = this;
    console.log(e.detail.errMsg), console.log(e.detail.iv), console.log(e.detail.encryptedData), null != e.detail.iv && null != e.detail.iv && (wx.showLoading({
      title: "请稍等...",
      mask: !0
    }), wx.checkSession({
      success: function(t) {
        console.log("res_check_session", t);
        var o = {
          openId: s.globalData.openid,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv
        };
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/dencryp",
          method: "POST",
          dataType: "json",
          data: o,
          header: {
            session_key: s.globalData.session_key_token
          },
          success: function(e) {
            if (console.log("获取解码信息 mobile_phone", e), "000000000000" != e.data[0].resp_code) return "-005123" == e.data[0].resp_code ? (wx.hideLoading(), void wx.showModal({
              title: "提示",
              content: e.data[0].resp_msg + "(" + e.data[0].resp_code + ")",
              showCancel: !1
            })) : (wx.hideLoading(), void wx.showModal({
              title: "提示",
              content: "请再次自动获取手机号",
              showCancel: !1
            }));
            e.data[1].purePhoneNumber;
            a.data.verify_code = 1100, a.data.private_verify_code = 1100, a.submit_verify_code(), console.log("app.globalData.private_verify_code", s.globalData.private_verify_code, a.data.private_verify_code)
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
        wx.login({
          success: function(t) {
            wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
              method: "POST",
              dataType: "json",
              data: {
                code: t.code
              },
              success: function(t) {
                if (console.log("拉取login", t), "000000000000" == t.data[0].resp_code) {
                  s.globalData.unionid = t.data[1].unionid, wx.setStorageSync("unionid", s.globalData.unionid);
                  var o = {
                    openId: s.globalData.openid,
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv
                  };
                  wx.request({
                    url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/dencryp",
                    method: "POST",
                    dataType: "json",
                    data: o,
                    success: function(e) {
                      if (console.log("获取解码信息 mobile_phone", e), "000000000000" != e.data[0].resp_code) return "-005123" == e.data[0].resp_code ? (wx.hideLoading(), void wx.showModal({
                        title: "提示",
                        content: e.data[0].resp_msg + "(" + e.data[0].resp_code + ")",
                        showCancel: !1
                      })) : (wx.hideLoading(), void wx.showModal({
                        title: "提示",
                        content: "请再次自动获取手机号",
                        showCancel: !1
                      }));
                      e.data[1].purePhoneNumber;
                      a.data.verify_code = 1100, a.data.private_verify_code = 1100, a.submit_verify_code()
                    },
                    fail: function(e) {
                      wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                        title: "后台服务器异常",
                        content: "获取用户手机号失败-01259,程序退出," + e.errMsg,
                        showCancel: !1
                      })
                    }
                  })
                } else wx.hideLoading(), wx.showModal({
                  title: "后台服务器异常",
                  content: "拉取用户手机号失败-01630,程序退出," + t.data[0].resp_code + t.data[0].resp_msg,
                  showCancel: !1
                })
              },
              fail: function(e) {
                console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.hideLoading(), wx.showModal({
                  title: "后台服务器异常",
                  content: "拉取用户手机号失败-013261,程序退出," + e.errMsg,
                  showCancel: !1
                })
              }
            })
          },
          fail: function(e) {
            console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.hideLoading(), wx.showModal({
              title: "后台服务器异常",
              content: "拉取用户手机号失败-0112162,程序退出," + e,
              showCancel: !1
            })
          }
        })
      }
    }))
  },
  sv_014_get_ble_img_verify: (n = o(a().mark((function e() {
    var r, n, l, i, u;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return r = this, n = _.get_url() + "p_021_health_passport/api_002_rent_house_company/sv_014_get_ble_img_verify", l = {
            img_file_id: s.globalData.third_part_img_file_id,
            openId: s.globalData.openid
          }, console.log("sv_014_get_ble_img_verify", n, l), e.prev = 4, wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), e.next = 8, c.wx_request(n, l);
        case 8:
          if (i = e.sent, wx.hideLoading(), console.log("sv_014_get_ble_img_verify", t(i), i), "000000000000" != i.data[0].resp_code) {
            e.next = 18;
            break
          }
          return n = "../../../launch_app/index?oper_state=FINISH&register=0", console.log(n, "url"), wx.reLaunch({
            url: n
          }), e.abrupt("return");
        case 18:
          "00000009301" == i.data[0].resp_code ? (u = (u = i.data[0].resp_msg + "").replace("重新注册", "返回平安回家app"), wx.showModal({
            title: "核验结果",
            content: u,
            showCancel: !1,
            confirmText: "返回APP",
            confirmColor: "#4a8eff",
            success: function() {
              var e = o(a().mark((function e(t) {
                return a().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      r.setData({
                        modal_content: "身份核验失败 请返平安回家APP"
                      }), console.log("app_parameter:", "name=LOGIN_AGAIN"), r.setData({
                        app_parameter: "name=LOGIN_AGAIN"
                      }), r.setData({
                        showModal_launch: !0
                      });
                    case 5:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }()
          })) : wx.showModal({
            title: "核验结果",
            content: i.data[0].resp_msg,
            showCancel: !1,
            confirmText: "重试",
            confirmColor: "#4a8eff",
            success: function() {
              var e = o(a().mark((function e(t) {
                return a().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return r.sv_014_get_ble_img_verify(), e.abrupt("return");
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
          });
        case 19:
          e.next = 24;
          break;
        case 21:
          e.prev = 21, e.t0 = e.catch(4), wx.showModal({
            title: "提示",
            content: "异常" + JSON.stringify(e.t0),
            showCancel: !1
          });
        case 24:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [4, 21]
    ])
  }))), function() {
    return n.apply(this, arguments)
  }),
  preventTouchMove: function() {},
  buttontap_send_msg: function(e) {
    var a = this,
      t = wx.getStorageSync("joint_rent_house_rec_id"),
      o = wx.getStorageSync("joint_rent_house_attr"),
      r = wx.getStorageSync("join_rent_house_post_data"),
      n = JSON.parse(r);
    wx.removeStorageSync("joint_rent_house_rec_id"), wx.removeStorageSync("joint_rent_house_attr"), wx.removeStorageSync("join_rent_house_post_data");
    var s = {};
    if (s.renter_rec_id = t, s.room_code = n.room_code, s.rent_house_code = n.rent_house_code, s.rent_house_attribute = o, 0 == e.detail.index) return a.setData({
      show_ask_send_msg: !1
    }), void a.go_rent_house(s);
    wx.requestSubscribeMessage({
      tmplIds: ["CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ"],
      success: function(e) {
        a.setData({
          show_ask_send_msg: !1
        }), a.go_rent_house(s)
      },
      fail: function(e) {
        a.setData({
          show_ask_send_msg: !1
        }), a.go_rent_house(s)
      }
    })
  },
  go_rent_house: (r = o(a().mark((function e(t) {
    var o, r, n, s, c;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return o = t.renter_rec_id, r = t.room_code, n = t.rent_house_code, s = t.perfect_type, c = t.rent_house_attribute, wx.reLaunch({
            url: "../../../third_part/pages/rent_house/form?oper_type=perfect_information&room_code=" + r + "&renter_rec_id=" + o + "&rent_house_code=" + n + "&perfect_type=" + s + "&rent_house_attribute=" + c
          }), e.abrupt("return");
        case 9:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(e) {
    return r.apply(this, arguments)
  }),
  sv_007_drop_last_register_record: function() {
    return o(a().mark((function e() {
      var t;
      return a().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return "您是否确认重新核验?", e.next = 3, c.wx_show_modal("提示", "您是否确认重新核验?", !0);
          case 3:
            if (1 != e.sent.confirm) {
              e.next = 8;
              break
            }
            e.next = 9;
            break;
          case 8:
            return e.abrupt("return");
          case 9:
            t = {
              openId: s.globalData.openid
            }, "https://xcx.pinganbaiyun.cn/mini_program/api_01/sv_007_drop_last_register_record", wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/sv_007_drop_last_register_record",
              method: "POST",
              dataType: "json",
              data: t,
              header: {
                session_key: s.globalData.session_key_token
              },
              success: function(e) {
                if ("000000000000" != e.data[0].resp_code) return wx.hideLoading(), void wx.showModal({
                  title: "提示",
                  content: e.data[0].resp_msg + "(" + e.data[0].resp_code + ")",
                  showCancel: !1
                });
                wx.reLaunch({
                  url: "../form_ocr_01/form"
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
          case 10:
          case "end":
            return e.stop()
        }
      }), e)
    })))()
  }
});