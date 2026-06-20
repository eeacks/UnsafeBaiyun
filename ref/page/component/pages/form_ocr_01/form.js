var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  o = (n(require("../../../../util/regenerator-runtime/runtime")), n(require("../js/city-list.js")));

function n(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var s, r, l, i = require("../../../../util/util.js"),
  c = getApp();

function _(e) {
  return !1 !== /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)
}
Page({
  data: {
    array: ["身份证 ID Card", "护照 Passport", "港澳居民來往內地通行證"],
    index: 0,
    gender_array: ["男 Man", "女 Woman"],
    g_index: 0,
    c_array: ["身份证 ID Card", "护照 Passport", "港澳居民來往內地通行證"],
    c_index: 0,
    r_array: ["同学关系 Classmate relationship", "朋友关系 Friendship", "夫妻关系 Marriage relationship", "血缘关系 Consanguinity", "工作关系 Working relationship", "恋爱关系 Love relationship"],
    r_index: 0,
    country_array: [],
    country_index: "",
    datalist: {},
    enddate: "",
    birthday: "",
    comfirm_count: 0,
    navigationBarTitleText: "平安码丨平安白云",
    pickerHidden: !0,
    chosen: "",
    src: "",
    mobile_phone: "",
    XM: "",
    first_name: "",
    last_name: "",
    country: "",
    ZJHM: "",
    contacts_ZJHM: "",
    contacts_name: "",
    contacts_phone: "",
    relationship: "请选择国内联系人关系",
    canvas_height: 0,
    canvas_width: 0,
    attendSuccessImg: null,
    canvasImgUrl: null,
    upload_file_id: null,
    checked_flash: !1,
    checked_number: !1,
    checked_cs: !1,
    remark: "",
    showModal_camera: !1,
    showModal_location: !1,
    showModal_camera_refuse: !1,
    showModal_location_refuse: !1,
    showModal_user_info: !1,
    show_choose_country: !1,
    hidden_get_mobile_button: !1,
    mobile_button_disabled: !1,
    hidden_renter_mobile_phone_tips: !0,
    cert_type: "ID_CARD",
    show_ask_user_info: !1,
    buttons_user_info: [{
      type: "primary",
      className: "",
      text: "下一步 Next Step",
      value: 1,
      opentype: "getUserInfo"
    }],
    open_id_post: null,
    is_self: !0,
    showPasswordModal: !1,
    password: "",
    has_checked_password: !1,
    living_address: "",
    select_street_type_acid: !1,
    showStreet: "请选择",
    showQu: "请选择",
    showQuList: !0,
    showStreetList: !1,
    showCommunityList: !1,
    address_color: "#1C90FF",
    list3: o.default,
    street_or_town: "",
    detail_address: "",
    street_and_community: "",
    community_name: "",
    community_code: "",
    cover_dispaly: "flex",
    register_dispaly: "none",
    show_nowmal_verify_first: !0,
    expired_date: "",
    sex_arr: ["男", "女"],
    sex_index: 0,
    has_got_location: !1,
    timeoutID: 0,
    bind_phone_click: !1,
    private_verify_code: "",
    avatarUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
    nick_name_editable: "",
    avatar_nickname_box_type: !1,
    user_agreement_checked: !1,
    this_options: {}
  },
  submit_password: function() {
    var o = this;
    return t(e().mark((function t() {
      var n, s, r, l, d, u, g, h, p, f, b, w, x, m;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (s = o, r = (n = o).data.password, n.data.living_address, r) {
              e.next = 7;
              break
            }
            return wx.showModal({
              title: "提示",
              content: "请输入密码",
              showCancel: !1
            }), e.abrupt("return");
          case 7:
            if (null != c.globalData.openid && null != c.globalData.openid && "" != c.globalData.openid) {
              e.next = 33;
              break
            }
            return console.log("检查权限:", c.globalData), console.log("app.globalData.openId:", c.globalData.openid), e.prev = 10, e.next = 13, i.wx_login();
          case 13:
            if (l = e.sent, console.log("login_result:", l, l.data[0], l.data[1]), "000000000000" != l.data[0].resp_code) {
              e.next = 23;
              break
            }
            c.globalData.openid = l.data[1].openid, c.globalData.session_key = l.data[1].session_key, c.globalData.unionid = l.data[1].unionid, wx.setStorageSync("unionid", c.globalData.unionid), console.log("util.wx_login.openId:", c.globalData.openid), e.next = 26;
            break;
          case 23:
            return console.log("util.wx_login.openId err_msg:", l.data[0].resp_code), wx.showModal({
              title: "获取用户信息提示",
              content: l.data[0].resp_msg + l.data[0].resp_code,
              showCancel: !1,
              success: function(e) {
                wx.reLaunch({
                  url: "/page/index_01/pages/my/my"
                })
              }
            }), e.abrupt("return");
          case 26:
            e.next = 33;
            break;
          case 28:
            return e.prev = 28, e.t0 = e.catch(10), console.log("获取用户信息提示 e", e.t0), wx.showModal({
              title: "获取用户信息提示",
              content: "获取用户信息失败(1006)",
              showCancel: !1,
              success: function(e) {
                wx.reLaunch({
                  url: "/page/index_01/pages/my/my"
                })
              }
            }), e.abrupt("return");
          case 33:
            if (null != c.globalData.openid && null != c.globalData.openid && "" != c.globalData.openid) {
              e.next = 60;
              break
            }
            if (console.log("openId 为空"), "AGENT" != c.globalData.register_type.substr(0, 5) && "RENTER" != c.globalData.register_type.substr(0, 6) && "COMPANY" != c.globalData.register_type.substr(0, 7) && "APP_LAUNCH_REGISTER" != c.globalData.register_type && "YUN_YI_AN_LAUNCH_REGISTER" != c.globalData.register_type) {
              e.next = 38;
              break
            }
            return wx.showModal({
              title: "提示",
              content: "获取用户信息失败，请您再次操作",
              showCancel: !1,
              success: function() {
                wx.reLaunch({
                  url: "../../../index_01/pages/my/my"
                })
              }
            }), e.abrupt("return");
          case 38:
            return e.prev = 38, wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), e.next = 42, i.wx_login();
          case 42:
            if (d = e.sent, wx.hideLoading(), "000000000000" != d.data[0].resp_code) {
              e.next = 51;
              break
            }
            c.globalData.openid = d.data[1].openid, c.globalData.session_key = d.data[1].session_key, c.globalData.unionid = d.data[1].unionid, wx.setStorageSync("unionid", c.globalData.unionid), e.next = 53;
            break;
          case 51:
            return wx.showModal({
              title: "提示",
              content: "获取用户信息失败，请您再次操作 1001 " + d.data[0].resp_msg + d.data[0].resp_code,
              showCancel: !1,
              success: function() {
                wx.reLaunch({
                  url: "../../../index_01/pages/my/my"
                })
              }
            }), e.abrupt("return");
          case 53:
            e.next = 60;
            break;
          case 55:
            return e.prev = 55, e.t1 = e.catch(38), console.log(e.t1), wx.showModal({
              title: "提示",
              content: "获取用户信息失败，请您再次操作1002" + e.t1,
              showCancel: !1,
              success: function() {
                wx.reLaunch({
                  url: "../../../index_01/pages/my/my"
                })
              }
            }), e.abrupt("return");
          case 60:
            if (null != s.data.ZJHM && null != s.data.ZJHM && "" != s.data.ZJHM) {
              e.next = 64;
              break
            }
            return wx.showModal({
              title: "输入提示",
              content: "请输入身份证号",
              showCancel: !1
            }), n.setData({
              showPasswordModal: !1
            }), e.abrupt("return");
          case 64:
            if ("PASSPORT" != s.data.cert_type && "HK_MACAO_TW" != s.data.cert_type) {
              e.next = 98;
              break
            }
            if (null != s.data.birthday && null != s.data.birthday && "" != s.data.birthday) {
              e.next = 69;
              break
            }
            return wx.showModal({
              title: "输入提示",
              content: "请选择出生日期",
              showCancel: !1
            }), n.setData({
              showPasswordModal: !1
            }), e.abrupt("return");
          case 69:
            if ("PASSPORT" != s.data.cert_type) {
              e.next = 98;
              break
            }
            if (null != s.data.first_name && null != s.data.first_name && "" != s.data.first_name) {
              e.next = 73;
              break
            }
            return wx.showModal({
              title: "输入提示",
              content: "请输入First name",
              showCancel: !1
            }), e.abrupt("return");
          case 73:
            if (null != s.data.last_name && null != s.data.last_name && "" != s.data.last_name) {
              e.next = 76;
              break
            }
            return wx.showModal({
              title: "输入提示",
              content: "请输入Last name",
              showCancel: !1
            }), e.abrupt("return");
          case 76:
            if (0 != s.data.c_index) {
              e.next = 83;
              break
            }
            if (0 != (d = _(s.data.contacts_ZJHM))) {
              e.next = 81;
              break
            }
            return wx.showModal({
              title: "提示",
              content: "国内联系人身份证格式不正确,请重新输入",
              showCancel: !1
            }), e.abrupt("return");
          case 81:
            e.next = 86;
            break;
          case 83:
            if (0 != s.data.contacts_ZJHM.length) {
              e.next = 86;
              break
            }
            return wx.showModal({
              title: "提示",
              content: "请输入国内联系人证件号码",
              showCancel: !1
            }), e.abrupt("return");
          case 86:
            if ("" != s.data.contacts_name) {
              e.next = 89;
              break
            }
            return wx.showModal({
              title: "提示",
              content: "请填写国内联系人姓名",
              showCancel: !1
            }), e.abrupt("return");
          case 89:
            if ("" != s.data.contacts_phone) {
              e.next = 92;
              break
            }
            return wx.showModal({
              title: "提示",
              content: "请填写国内联系人手机号",
              showCancel: !1
            }), e.abrupt("return");
          case 92:
            if ("请选择国内联系人关系" != s.data.relationship) {
              e.next = 95;
              break
            }
            return wx.showModal({
              title: "提示",
              content: "请选择国内联系人关系",
              showCancel: !1
            }), e.abrupt("return");
          case 95:
            if (null != s.data.searchCountry[s.data.country_index] && null != s.data.searchCountry[s.data.country_index] && "" != s.data.searchCountry[s.data.country_index]) {
              e.next = 98;
              break
            }
            return wx.showModal({
              title: "输入提示",
              content: "请选择国家或地区",
              showCancel: !1
            }), e.abrupt("return");
          case 98:
            if ("PASSPORT" == s.data.cert_type) {
              e.next = 103;
              break
            }
            if (null != s.data.XM && null != s.data.XM && "" != s.data.XM) {
              e.next = 103;
              break
            }
            return wx.showModal({
              title: "输入提示",
              content: "请输入姓名",
              showCancel: !1
            }), n.setData({
              showPasswordModal: !1
            }), e.abrupt("return");
          case 103:
            if (null != s.data.mobile_phone && null != s.data.mobile_phone && "" != s.data.mobile_phone) {
              e.next = 107;
              break
            }
            return wx.showModal({
              title: "输入提示",
              content: "请输入手机号,接收短信验证码",
              showCancel: !1
            }), n.setData({
              showPasswordModal: !1
            }), e.abrupt("return");
          case 107:
            if (u = s.data.mobile_phone, /^1[3456789]\d{9}$/.test(u)) {
              e.next = 112;
              break
            }
            return wx.showModal({
              title: "输入提示",
              content: "手机格式有有误,请检查",
              showCancel: !1
            }), n.setData({
              showPasswordModal: !1
            }), e.abrupt("return");
          case 112:
            if ("HK_MACAO_TW" != s.data.cert_type) {
              e.next = 116;
              break
            }
            if (null != s.data.expired_date && null != s.data.expired_date && "" != s.data.expired_date) {
              e.next = 116;
              break
            }
            return wx.showModal({
              title: "輸入提示",
              content: "請選擇證件有效期",
              showCancel: !1
            }), e.abrupt("return");
          case 116:
            if (
              //!*******************先检查身份证号等
              console.log("先检查身份证号等"), null != c.globalData.USERINFO_post && null != c.globalData.USERINFO_post && "undefined" != c.globalData.USERINFO_post && null != c.globalData.openid && null != c.globalData.openid && "" != c.globalData.openid) {
              e.next = 125;
              break
            }
            if (!s.can_use_editable_nick_name()) {
              e.next = 123;
              break
            }
            return s.setData({
              avatar_nickname_box_type: !0,
              showPasswordModal: !1
            }), e.abrupt("return");
          case 123:
            return s.setData({
              show_ask_user_info: !0
            }), e.abrupt("return");
          case 125:
            if ("object" != a(c.globalData.USERINFO_post)) {
              e.next = 131;
              break
            }
            if (!wx.getUserProfile) {
              e.next = 131;
              break
            }
            if ("微信用户" != c.globalData.USERINFO_post.nickName) {
              e.next = 131;
              break
            }
            if (!s.can_use_editable_nick_name()) {
              e.next = 131;
              break
            }
            return s.setData({
              avatar_nickname_box_type: !0,
              showPasswordModal: !1
            }), e.abrupt("return");
          case 131:
            if ("string" != typeof c.globalData.USERINFO_post) {
              e.next = 138;
              break
            }
            if (!wx.getUserProfile) {
              e.next = 138;
              break
            }
            if (console.log("wx.canIUse('wx.getUserProfile') string", JSON.parse(c.globalData.USERINFO_post).nickName), "微信用户" != JSON.parse(c.globalData.USERINFO_post).nickName) {
              e.next = 138;
              break
            }
            if (!s.can_use_editable_nick_name()) {
              e.next = 138;
              break
            }
            return s.setData({
              avatar_nickname_box_type: !0,
              showPasswordModal: !1
            }), e.abrupt("return");
          case 138:
            if (null != (g = wx.getStorageSync("unionid")) && null != g && "" != g) {
              e.next = 142;
              break
            }
            return s.setData({
              show_ask_user_info: !0
            }), e.abrupt("return");
          case 142:
            return h = c.globalData.openid, p = JSON.stringify({
              password: r,
              openId: c.globalData.openid
            }), f = "https://xcx.pinganbaiyun.cn/cloud_shield/xcx/api_03/check_password", wx.showLoading({
              title: "提交中...",
              mask: !0
            }), e.next = 148, i.wx_request(f, p);
          case 148:
            if (b = e.sent, wx.hideLoading(), console.log("res_data", b), "000000000000" == b.data[0].resp_code) {
              e.next = 155;
              break
            }
            return wx.showModal({
              title: "提示",
              content: b.data[0].resp_msg + b.data[0].resp_code,
              showCancel: !1
            }), n.setData({
              showPasswordModal: !0
            }), e.abrupt("return");
          case 155:
            n.setData({
              showPasswordModal: !1
            }), "ACID_TEST" == c.globalData.register_type && (wx.setStorageSync("acid_test_detail_address", o.data.detail_address), wx.setStorageSync("acid_test_mobile_phone", o.data.mobile_phone)), s.data.living_address = o.data.street_and_community + o.data.detail_address, w = "", w = "ID_CARD" == c.globalData.cert_type ? "" : "HK_MACAO_TW" == c.globalData.cert_type ? "CHN" : 0 == s.data.searchCountry.length ? "" : s.data.searchCountry[s.data.country_index], "PASSPORT" == s.data.cert_type && (s.data.XM = s.data.first_name + " " + s.data.last_name), p = {
              XM: s.data.XM,
              ZJHM: s.data.ZJHM,
              country: w,
              birthday: s.data.birthday,
              LXDH: s.data.mobile_phone,
              WXSJ: c.globalData.purePhoneNumber,
              GPS: JSON.stringify(c.globalData.location_info),
              USERINFO: JSON.stringify(c.globalData.USERINFO_post),
              SYSTEMINFO: JSON.stringify(c.globalData.SYSTEMINFO),
              openId: h,
              upload_file_id_ocr_01: c.globalData.upload_file_id_ocr_01,
              remark: s.data.remark,
              unionId: g,
              living_address: s.data.living_address
            }, x = null, "PASSPORT" == s.data.cert_type && (x = 0 == s.data.g_index ? "男" : "女", p.XM = s.data.XM, p.gender = x, p.contacts_id_card_type = s.data.c_index, p.contacts_id_card = s.data.contacts_ZJHM, p.contacts_name = s.data.contacts_name, p.contacts_phone = s.data.contacts_phone, p.relationship = s.data.relationship, p.first_name = s.data.first_name, p.last_name = s.data.last_name), f = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_id_card_info", console.log(f, p), wx.request({
              url: f,
              method: "POST",
              dataType: "json",
              data: p,
              success: function(e) {
                if (console.log(e), wx.hideLoading(), "000000000000" == e.data[0].resp_code) {
                  console.log("提交成功", "api_01/upload_id_card_info 按密码境外人员"), console.log("this_page.data.XM", s.data.XM), c.globalData.XM = s.data.XM, c.globalData.ZJHM = s.data.ZJHM, c.globalData.mobile_phone = s.data.mobile_phone;
                  var a = e.data[0].register_token;
                  "" != a && null != a && null != a && wx.setStorageSync("register_token", a), wx.showModal({
                    title: "姓名name【" + c.globalData.XM + "】?",
                    content: "您的姓名your name:" + c.globalData.XM + " 身份证ID:" + c.globalData.ZJHM + " ?",
                    showCancel: !0,
                    cancelText: "返回CL",
                    confirmText: "提交cfm",
                    success: function(e) {
                      if (e.confirm) return wx.setStorageSync("openId", h), wx.setStorageSync("XM", c.globalData.XM), wx.setStorageSync("ZJHM", c.globalData.ZJHM), wx.setStorageSync("mobile_phone", c.globalData.mobile_phone), wx.setStorageSync("volunteer_password", s.data.password), void(0 == s.check_should_send_verify_code() ? wx.navigateTo({
                        url: "../foreign_face_check/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                      }) : wx.navigateTo({
                        url: "../foreign_face_check/form"
                      }))
                    }
                  })
                } else {
                  if ("-000000001669" == e.data[0].resp_code) {
                    console.log("-000000001669"), console.log("this_page.data.XM", s.data.XM);
                    var t = e.data[0].register_token;
                    return "" != t && null != t && null != t && wx.setStorageSync("register_token", t), wx.setStorageSync("openId", h), wx.setStorageSync("XM", s.data.XM), wx.setStorageSync("ZJHM", s.data.ZJHM), wx.setStorageSync("mobile_phone", s.data.mobile_phone), wx.setStorageSync("volunteer_password", s.data.password), void(0 == s.check_should_send_verify_code() ? wx.navigateTo({
                      url: "../foreign_face_check/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                    }) : wx.navigateTo({
                      url: "../foreign_face_check/form"
                    }))
                  }
                  "-000000001688" == e.data[0].resp_code ? (console.log("000000001688 您已通过生物识别的人脸核身,请输入收到的短信验证码"), c.globalData.page_verify_code_msg = "您已通过识别,请输入收到的短信验证码", wx.showModal({
                    title: "提示",
                    content: "您已通过识别,请输入收到的短信验证码",
                    showCancel: !1,
                    success: function(e) {
                      0 == s.check_should_send_verify_code() ? wx.navigateTo({
                        url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                      }) : wx.navigateTo({
                        url: "../form_ocr_04/form"
                      })
                    }
                  })) : "000000000003" == e.data[0].resp_code ? wx.showModal({
                    title: "提示",
                    content: "您已注册",
                    showCancel: !1,
                    success: function(e) {
                      wx.reLaunch({
                        url: "../../../index/index"
                      })
                    }
                  }) : (console.log("err:", e), wx.showModal({
                    title: "异常",
                    content: "验证失败-0169," + e.data[0].resp_code + e.data[0].resp_msg,
                    showCancel: !1
                  }))
                }
              },
              fail: function(e) {
                wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                  title: "异常",
                  content: "" + e.errMsg,
                  showCancel: !1
                })
              }
            }), console.log("this_page.data.avatarUrl", s.data.avatarUrl), "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0" != s.data.avatarUrl && (m = {
              XM: s.data.XM,
              ZJHM: s.data.ZJHM,
              USERINFO: JSON.stringify(c.globalData.USERINFO_post),
              openId: h,
              unionId: g
            }, "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_004_motorcycles/sv_016_upload_file_avatar", console.log("sv_016_upload_file_avatar", m), i.wx_upload_file("https://xcx.pinganbaiyun.cn/p_021_health_passport/api_004_motorcycles/sv_016_upload_file_avatar", m, s.data.avatarUrl, c.globalData.access_token));
          case 169:
          case "end":
            return e.stop()
        }
      }), t, null, [
        [10, 28],
        [38, 55]
      ])
    })))()
  },
  cancel_password: function() {
    this.setData({
      showPasswordModal: !1
    })
  },
  bindinput_password: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  onChoose3: function(e) {
    if (console.log("onChoose3", e.detail.item.name), this.data.area_live = e.detail.item.name, "非广州市区" == this.data.area_live) return this.setData({
      qu_name: "",
      street_or_town: "非广州市区"
    }), void this.guanbi_click();
    var a = this.getItemList(e.detail.item.name);
    this.setData({
      qu_name: e.detail.item.name,
      showQu: e.detail.item.name,
      showQuList: !1,
      showStreetList: !0,
      list: a
    })
  },
  onChoose: function(e) {
    var a = this;
    if (this.setData({
        street_or_town: e.detail.item.name,
        showStreet: e.detail.item.name,
        address_color: "#000000"
      }), "白云区" != this.data.qu_name) this.guanbi_click();
    else {
      wx.showLoading({
        title: "加载中",
        mask: !0
      }), console.log("=======", c.globalData.access_token);
      var t = {
        street_name: a.data.street_or_town
      };
      wx.request({
        url: i.get_url() + "api_007_wbyw_001/get_all_community_list_by_street",
        method: "POST",
        data: t,
        header: {
          cloud_shield_token: c.globalData.access_token
        },
        success: function(e) {
          wx.hideLoading(), "000000000000" == e.data[0].resp_code ? a.setData({
            list2: e.data[0].community_list_by_street,
            showStreetList: !1,
            showCommunityList: !0
          }) : wx.showToast({
            icon: "none",
            title: e.data[0].resp_msg,
            duration: 2e3
          })
        }
      })
    }
  },
  onChoose2: function(e) {
    this.setData({
      community_code: e.detail.item.code,
      community_name: e.detail.item.name,
      address_color: "#000000"
    }), console.log(this.data.community_code, this.data.community_name, 3333), this.guanbi_click()
  },
  changeAddress: function(e) {
    wx.hideKeyboard(), this.setData({
      select_street_type: !0
    })
  },
  guanbi_click: function() {
    this.data.street_or_town && (this.setData({
      street_and_community: this.data.qu_name + this.data.street_or_town + this.data.community_name
    }), "ACID_TEST" == c.globalData.register_type && (wx.setStorageSync("street_and_community", this.data.street_and_community), wx.setStorageSync("acid_test_area", this.data.qu_name), wx.setStorageSync("acid_test_street", this.data.street_or_town))), this.setData({
      select_street_type: !1
    })
  },
  recheck: function() {
    this.setData({
      showQuList: !0,
      showStreetList: !1,
      showCommunityList: !1,
      address_color: "#1C90FF"
    })
  },
  getItemList: function(e) {
    for (var a = 0; a < this.data.list3.length; a++)
      for (var t = 0; t < this.data.list3[a].subItems.length; t++)
        if (this.data.list3[a].subItems[t].name == e) return this.data.list3[a].subItems[t].subItems;
    return []
  },
  bindinput_address: function(e) {
    this.setData({
      living_address: e.detail.value
    })
  },
  bindblur_address: function(e) {
    e.detail.value;
    null != this.data.living_address && null != this.data.living_address && "" != this.data.living_address || wx.showModal({
      title: "输入提示",
      content: "请输入居住地址",
      showCancel: !1
    })
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
  isBanRentUser: function() {
    var a = this;
    return t(e().mark((function t() {
      var o, n, s, r;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return o = "https://xcx.pinganbaiyun.cn/p_041_job/common/is_ban_user?zjhm=" + a.data.ZJHM, n = {
              cloud_shield_token: c.globalData.access_token
            }, s = {}, e.next = 5, i.wx_request_no_load(o, s, "GET", n);
          case 5:
            if (2e3 != (r = (r = e.sent).data).code) {
              e.next = 11;
              break
            }
            return e.abrupt("return", r.data);
          case 11:
            wx.showToast({
              title: r.msg,
              icon: "none"
            });
          case 12:
          case "end":
            return e.stop()
        }
      }), t)
    })))()
  },
  formSubmit: function(e) {
    console.log("form发生了submit事件，携带数据为：", e.detail.value)
  },
  gender_bindPickerChange: function(e) {
    this.setData({
      g_index: e.detail.value
    })
  },
  r_bindPickerChange: function(e) {
    var a = this.data.r_array[e.detail.value];
    this.setData({
      r_index: e.detail.value,
      relationship: a
    })
  },
  c_bindPickerChange: function(e) {
    this.setData({
      c_index: e.detail.value
    })
  },
  bindPickerChange: function(e) {
    var a = this,
      t = e.detail.value;
    if (this.setData({
        index: e.detail.value
      }), 0 == t) this.setData({
      cert_type: "ID_CARD",
      is_self: !0
    }), c.globalData.cert_type = "ID_CARD";
    else if (1 == t) {
      if (this.setData({
          cert_type: "PASSPORT",
          is_self: !0,
          has_checked_password: !1
        }), c.globalData.cert_type = "PASSPORT", 0 == this.data.country_array.length) {
        var o = [];
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/health_passport/api_001_health_passport/get_nationality",
          method: "POST",
          dataType: "json",
          data: {
            key_word001: "foo"
          },
          success: function(e) {
            for (var t = 1; t < e.data.length; t++) o.push(e.data[t].three_letter + e.data[t].cn_name);
            a.setData({
              country_array: o,
              searchCountry: o
            })
          }
        })
      }
    } else 2 == t && (this.setData({
      cert_type: "HK_MACAO_TW",
      is_self: !0,
      has_checked_password: !1
    }), c.globalData.cert_type = "HK_MACAO_TW");
    console.log("certype", a.data.cert_type)
  },
  bindPickerChange1: function(e) {
    this.setData({
      country_index: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  entry_hand: function(e) {
    if (null != c.globalData.location_info)
      if (null != c.globalData.USERINFO_post && null != c.globalData.openid && null != c.globalData.openid && "" != c.globalData.openid) {
        var a = wx.getStorageSync("unionid");
        if (null != a && null != a && "" != a)
          if (null != c.globalData.camera_role) 0 == this.check_should_send_verify_code() ? wx.navigateTo({
            url: "../form_ocr_03/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
          }) : wx.navigateTo({
            url: "../form_ocr_03/form"
          });
          else this.setData({
            showModal_camera: !0
          });
        else this.setData({
          show_ask_user_info: !0
        })
      } else this.setData({
        show_ask_user_info: !0
      });
    else this.setData({
      showModal_location: !0
    })
  },
  formReset: function(e) {
    console.log("form发生了reset事件，携带数据为：", e.detail.value), this.setData({
      chosen: ""
    })
  },
  radio_change: function(e) {
    var a = c;
    console.log("radio发生change事件，携带value值为：", e.detail.value), a.globalData.verify_type = e.detail.value, console.log("this_app.globalData.verify_type:", a.globalData.verify_type)
  },
  change_register_type: function(e) {
    var a = c;
    console.log("radio发生change事件，携带value值为：", e.detail.value);
    var t = !0;
    "代注册" == e.detail.value ? t = !1 : "云盾认证" == e.detail.value && (a.globalData.verify_type = e.detail.value), console.log(c.globalData.verify_type, this.data.cert_type), this.setData({
      is_self: t
    })
  },
  gosearch: function() {
    this.setData({
      show_choose_country: !0
    })
  },
  onClose: function() {
    this.setData({
      show_choose_country: !1
    })
  },
  onCancel: function() {
    this.setData({
      show_choose_country: !1
    })
  },
  onConfirm: function(e) {
    this.setData({
      country_index: e.detail.index,
      show_choose_country: !1
    })
  },
  SearchCountry: function(e) {
    for (var a = [], t = 0; t < this.data.country_array.length; t++) - 1 != String(this.data.country_array[t]).indexOf(e.detail) && a.push(this.data.country_array[t]);
    this.setData({
      searchCountry: a
    })
  },
  onLoad: (l = t(e().mark((function a(t) {
    var o, n, s, r, l, _, d, u, g, h, p, f, b, w, x, m, y, D, v, S, k, M;
    return e().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return o = this, console.log("form_ocr_01 onload", t), this.this_options = t, e.prev = 4, e.next = 7, i.wx_login("get_token");
        case 7:
          if (n = e.sent, console.log("login_result form_ocr_01:", n), "000000000000" != n.data[0].resp_code) {
            e.next = 20;
            break
          }
          c.globalData.openid = n.data[1].openid, c.globalData.unionid = n.data[1].unionid, c.globalData.session_key_token = n.data[1].register_key, console.log("1732271135905 app.globalData.session_key_token", c.globalData.openid), console.log("1732271135906 app.globalData.session_key_token", c.globalData.unionid), console.log("1732271135907 app.globalData.session_key_token", c.globalData.session_key_token), wx.setStorageSync("openid", c.globalData.openid), wx.setStorageSync("unionid", c.globalData.unionid), e.next = 22;
          break;
        case 20:
          return wx.showModal({
            title: "提示",
            content: n.data[0].resp_msg + "(" + n.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 22:
          e.next = 29;
          break;
        case 24:
          return e.prev = 24, e.t0 = e.catch(4), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 29:
          if (s = new Date, r = s.getFullYear(), l = s.getMonth() + 1, _ = s.getDate(), l < 10 && (l = "0" + l), _ < 10 && (_ = "0" + _), d = r + "-" + l + "-" + _, o.setData({
              enddate: d
            }), "ID_CARD" == c.globalData.cert_type ? this.setData({
              index: 0
            }) : "PASSPORT" == c.globalData.cert_type ? this.setData({
              index: 1
            }) : "HK_MACAO_TW" == c.globalData.cert_type && this.setData({
              index: 2
            }), "微警认证" == c.globalData.verify_type ? this.setData({
              checked_flash: !0,
              checked_number: !1,
              checked_cs: !1
            }) : "腾讯认证" == c.globalData.verify_type ? this.setData({
              checked_flash: !1,
              checked_number: !0,
              checked_cs: !1
            }) : "云盾认证" == c.globalData.verify_type && this.setData({
              checked_flash: !1,
              checked_number: !1,
              checked_cs: !0
            }), c.globalData.img_url = null, this.setData({
              src: null
            }), c.globalData.upload_file_id_ocr_01 = null, c.globalData.ocr_name = null, c.globalData.ocr_id = null, (u = t).back_param, "visit" != (g = u.come_param)) {
            e.next = 50;
            break
          }
          return c.globalData.register_type = "LF_LAUNCH_REGISTER", e.abrupt("return");
        case 50:
          if ("hcj" != g) {
            e.next = 53;
            break
          }
          return c.globalData.back_url = "HCJ", e.abrupt("return");
        case 53:
          if ("THIRD_PARTY_APP" != g) {
            e.next = 107;
            break
          }
          if (c.globalData.back_url = g, console.log("form_ocr_01 app.globalData.back_url", c.globalData.back_url), "ANEGT_ENTRYANEGT_ENTRY" != t.agent_entry) {
            e.next = 106;
            break
          }
          return console.log("代人注册,如 e租房栋长跳平安码丨平安白云录入租客 待人录入套间 代人注册"), c.globalData.register_type = "RENTER_" + Math.random().toString(36).substr(2, 5) + "_", h = t.rent_house_code, p = t.room_code, f = t.room_name, b = t.expired_month, w = t.date_unit, x = t.rent_period, m = t.admin_phone, y = t.rent_house_owner_id_card, D = t.agent_entry, console.log("rent_period,admin_phone,rent_house_owner_id_card", m, y), wx.removeStorageSync("rent_house_code"), wx.removeStorageSync("room_code"), wx.removeStorageSync("room_name"), wx.removeStorageSync("expired_month"), wx.removeStorageSync("date_unit"), wx.removeStorageSync("rent_period"), wx.removeStorageSync("admin_phone"), wx.removeStorageSync("rent_house_owner_id_card"), wx.removeStorageSync("agent_entry"), wx.setStorageSync("rent_house_code", h), wx.setStorageSync("room_code", p), wx.setStorageSync("room_name", f), wx.setStorageSync("expired_month", b), wx.setStorageSync("date_unit", w), wx.setStorageSync("rent_period", x), wx.setStorageSync("admin_phone", m), wx.setStorageSync("rent_house_owner_id_card", y), wx.setStorageSync("agent_entry", D), e.prev = 87, (v = {}).rent_house_code = h, v.room_code = p, v.buzi_type = "ANEGT_ENTRYANEGT_ENTRY", v.openId = c.globalData.openid, wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), e.next = 97, i.wx_request("https://xcx.pinganbaiyun.cn/p_021_health_passport/api_002_rent_house_company/sv_012_get_house_by_rent_house_code", v);
        case 97:
          S = e.sent, wx.hideLoading(), console.log("sv_012_get_house_by_rent_house_code", S), "000000000000" == S.data[0].resp_code ? (k = "白云区" + S.data[1].street_name + S.data[1].community, M = S.data[1].street_road_alley_name + S.data[1].house_number_name + S.data[1].room_arr[0].room_name, o.setData({
            street_and_community: k,
            detail_address: M
          }), o.data.qu_name = "白云区", o.data.street_or_town = S.data[1].street_name, o.data.community_name = S.data[1].community, wx.setStorageSync("admin_phone", S.data[1].admin_phone), wx.setStorageSync("rent_house_owner_id_card", S.data[1].admin_phone), wx.setStorageSync("room_name", S.data[1].room_arr[0].room_name), wx.setStorageSync("agent_entry", "ANEGT_ENTRY"), c.globalData.access_token = S.data[0].access_token) : "1695182142141" == S.data[0].resp_code && wx.showModal({
            title: "提示",
            content: S.data[0].resp_msg + "(" + S.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {
              wx.navigateBackMiniProgram({
                extraData: {
                  res_code: S.data[0].resp_code,
                  resp_msg: S.data[0].resp_msg
                },
                success: function() {
                  console.log("返回上一个小程序成功！")
                },
                fail: function() {
                  console.log("返回上一个小程序失败"), wx.reLaunch({
                    url: "../../../index_01/pages/my/my"
                  })
                }
              })
            }
          }), e.next = 106;
          break;
        case 103:
          e.prev = 103, e.t1 = e.catch(87), console.log("1695180574817 sv_012_get_house_by_rent_house_code", e.t1);
        case 106:
          return e.abrupt("return");
        case 107:
        case "end":
          return e.stop()
      }
    }), a, this, [
      [4, 24],
      [87, 103]
    ])
  }))), function(e) {
    return l.apply(this, arguments)
  }),
  error: function(e) {
    console.log("form_ocr_01 e.detail error", e.detail)
  },
  upload_id_card_info: (r = t(e().mark((function t() {
    var o, n, s, r, l, d, u, g, h, p, f, b;
    return e().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (o = this, null != c.globalData.openid && null != c.globalData.openid && "" != c.globalData.openid) {
            e.next = 27;
            break
          }
          return console.log("检查权限:", c.globalData), console.log("app.globalData.openId:", c.globalData.openid), e.prev = 4, e.next = 7, i.wx_login();
        case 7:
          if (n = e.sent, console.log("login_result:", n, n.data[0], n.data[1]), "000000000000" != n.data[0].resp_code) {
            e.next = 17;
            break
          }
          c.globalData.openid = n.data[1].openid, c.globalData.session_key = n.data[1].session_key, c.globalData.unionid = n.data[1].unionid, wx.setStorageSync("unionid", c.globalData.unionid), console.log("util.wx_login.openId:", c.globalData.openid), e.next = 20;
          break;
        case 17:
          return console.log("util.wx_login.openId err_msg:", n.data[0].resp_code), wx.showModal({
            title: "获取用户信息提示",
            content: n.data[0].resp_msg + n.data[0].resp_code,
            showCancel: !1,
            success: function(e) {
              wx.reLaunch({
                url: "/page/index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 20:
          e.next = 27;
          break;
        case 22:
          return e.prev = 22, e.t0 = e.catch(4), console.log("获取用户信息提示 e", e.t0), wx.showModal({
            title: "获取用户信息提示",
            content: "获取用户信息失败(1006)",
            showCancel: !1,
            success: function(e) {
              wx.reLaunch({
                url: "/page/index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 27:
          if (null != c.globalData.openid && null != c.globalData.openid && "" != c.globalData.openid) {
            e.next = 30;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "获取用户信息失败，请您再次操作(1003)",
            showCancel: !1,
            success: function() {
              wx.reLaunch({
                url: "../../../index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 30:
          if (null != c.globalData.openid && null != c.globalData.openid && "" != c.globalData.openid) {
            e.next = 56;
            break
          }
          if ("AGENT" != c.globalData.register_type.substr(0, 5) && "RENTER" != c.globalData.register_type.substr(0, 6) && "COMPANY" != c.globalData.register_type.substr(0, 7) && "APP_LAUNCH_REGISTER" != c.globalData.register_type && "YUN_YI_AN_LAUNCH_REGISTER" != c.globalData.register_type) {
            e.next = 34;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "获取用户信息失败，请您再次操作",
            showCancel: !1,
            success: function() {
              wx.reLaunch({
                url: "../../../index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 34:
          return e.prev = 34, wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), e.next = 38, i.wx_login();
        case 38:
          if (s = e.sent, wx.hideLoading(), "000000000000" != s.data[0].resp_code) {
            e.next = 47;
            break
          }
          c.globalData.openid = s.data[1].openid, c.globalData.session_key = s.data[1].session_key, c.globalData.unionid = s.data[1].unionid, wx.setStorageSync("unionid", c.globalData.unionid), e.next = 49;
          break;
        case 47:
          return wx.showModal({
            title: "提示",
            content: "获取用户信息失败，请您再次操作 1001 " + s.data[0].resp_msg + s.data[0].resp_code,
            showCancel: !1,
            success: function() {
              wx.reLaunch({
                url: "../../../index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 49:
          e.next = 56;
          break;
        case 51:
          return e.prev = 51, e.t1 = e.catch(34), console.log(e.t1), wx.showModal({
            title: "提示",
            content: "获取用户信息失败，请您再次操作1002" + e.t1,
            showCancel: !1,
            success: function() {
              wx.reLaunch({
                url: "../../../index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 56:
          if ("快速认证" == c.globalData.verify_type) {
            e.next = 61;
            break
          }
          if (console.log("app.globalData.register_type", c.globalData.register_type), null != o.data.ZJHM && null != o.data.ZJHM && "" != o.data.ZJHM) {
            e.next = 61;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请输入身份证号",
            showCancel: !1
          }), e.abrupt("return");
        case 61:
          if ("PASSPORT" != o.data.cert_type && "HK_MACAO_TW" != o.data.cert_type || "快速认证" == c.globalData.verify_type) {
            e.next = 69;
            break
          }
          if (null != o.data.birthday && null != o.data.birthday && "" != o.data.birthday) {
            e.next = 65;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请选择出生日期",
            showCancel: !1
          }), e.abrupt("return");
        case 65:
          if ("PASSPORT" != o.data.cert_type) {
            e.next = 69;
            break
          }
          if (null != o.data.searchCountry[o.data.country_index] && null != o.data.searchCountry[o.data.country_index] && "" != o.data.searchCountry[o.data.country_index]) {
            e.next = 69;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请选择国家或地区",
            showCancel: !1
          }), e.abrupt("return");
        case 69:
          if ("快速认证" == c.globalData.verify_type) {
            e.next = 74;
            break
          }
          if (0 != (s = _(o.data.ZJHM)) || "ID_CARD" != o.data.cert_type) {
            e.next = 74;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "身份证格式不正确,请重新输入",
            showCancel: !1
          }), e.abrupt("return");
        case 74:
          if ("快速认证" == c.globalData.verify_type) {
            e.next = 106;
            break
          }
          if ("PASSPORT" != o.data.cert_type) {
            e.next = 103;
            break
          }
          if (null != o.data.first_name && null != o.data.first_name && "" != o.data.first_name) {
            e.next = 79;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请输入First name",
            showCancel: !1
          }), e.abrupt("return");
        case 79:
          if (null != o.data.last_name && null != o.data.last_name && "" != o.data.last_name) {
            e.next = 82;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请输入Last name",
            showCancel: !1
          }), e.abrupt("return");
        case 82:
          if (0 != o.data.c_index) {
            e.next = 89;
            break
          }
          if (0 != (s = _(o.data.contacts_ZJHM))) {
            e.next = 87;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "国内联系人身份证格式不正确,请重新输入",
            showCancel: !1
          }), e.abrupt("return");
        case 87:
          e.next = 92;
          break;
        case 89:
          if (0 != o.data.contacts_ZJHM.length) {
            e.next = 92;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "请输入国内联系人证件号码",
            showCancel: !1
          }), e.abrupt("return");
        case 92:
          if ("" != o.data.contacts_name) {
            e.next = 95;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "请填写国内联系人姓名",
            showCancel: !1
          }), e.abrupt("return");
        case 95:
          if ("" != o.data.contacts_phone) {
            e.next = 98;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "请填写国内联系人手机号",
            showCancel: !1
          }), e.abrupt("return");
        case 98:
          if ("请选择国内联系人关系" != o.data.relationship) {
            e.next = 101;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "请选择国内联系人关系",
            showCancel: !1
          }), e.abrupt("return");
        case 101:
          e.next = 106;
          break;
        case 103:
          if (null != o.data.XM && null != o.data.XM && "" != o.data.XM) {
            e.next = 106;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请输入姓名",
            showCancel: !1
          }), e.abrupt("return");
        case 106:
          if ("快速认证" == c.globalData.verify_type) {
            e.next = 117;
            break
          }
          if (null != o.data.mobile_phone && null != o.data.mobile_phone && "" != o.data.mobile_phone) {
            e.next = 110;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请输入手机号",
            showCancel: !1
          }), e.abrupt("return");
        case 110:
          if ("ANEGT_ENTRY" != wx.getStorageSync("agent_entry")) {
            e.next = 117;
            break
          }
          if (null == wx.getStorageSync("rent_house_owner_id_card") || null == wx.getStorageSync("rent_house_owner_id_card") || "" == wx.getStorageSync("rent_house_owner_id_card") || wx.getStorageSync("rent_house_owner_id_card") == o.data.ZJHM) {
            e.next = 117;
            break
          }
          if (null == wx.getStorageSync("admin_phone") || null == wx.getStorageSync("admin_phone") || "" == wx.getStorageSync("admin_phone")) {
            e.next = 117;
            break
          }
          if (r = wx.getStorageSync("admin_phone"), o.data.mobile_phone != r) {
            e.next = 117;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "代住户申请入住，不能输入自己的手机号",
            showCancel: !1
          }), e.abrupt("return");
        case 117:
          if (l = o.data.mobile_phone, "快速认证" == c.globalData.verify_type) {
            e.next = 122;
            break
          }
          if (/^1[3456789]\d{9}$/.test(l)) {
            e.next = 122;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "手机格式有有误,请检查",
            showCancel: !1
          }), e.abrupt("return");
        case 122:
          if ("HK_MACAO_TW" != o.data.cert_type) {
            e.next = 126;
            break
          }
          if (null != o.data.expired_date && null != o.data.expired_date && "" != o.data.expired_date) {
            e.next = 126;
            break
          }
          return wx.showModal({
            title: "輸入提示",
            content: "請選擇證件有效期",
            showCancel: !1
          }), e.abrupt("return");
        case 126:
          if (null != c.globalData.USERINFO_post && null != c.globalData.USERINFO_post && "undefined" != c.globalData.USERINFO_post && null != c.globalData.openid && null != c.globalData.openid && "" != c.globalData.openid) {
            e.next = 138;
            break
          }
          if ("ANEGT_ENTRY" != wx.getStorageSync("agent_entry")) {
            e.next = 131;
            break
          }
          e.next = 138;
          break;
        case 131:
          if (!o.can_use_editable_nick_name()) {
            e.next = 136;
            break
          }
          return o.setData({
            avatar_nickname_box_type: !0
          }), e.abrupt("return");
        case 136:
          return o.setData({
            show_ask_user_info: !0
          }), e.abrupt("return");
        case 138:
          if ("object" != a(c.globalData.USERINFO_post)) {
            e.next = 148;
            break
          }
          if ("ANEGT_ENTRY" != wx.getStorageSync("agent_entry")) {
            e.next = 143;
            break
          }
          e.next = 148;
          break;
        case 143:
          if (!wx.getUserProfile) {
            e.next = 148;
            break
          }
          if ("微信用户" != c.globalData.USERINFO_post.nickName) {
            e.next = 148;
            break
          }
          if (!o.can_use_editable_nick_name()) {
            e.next = 148;
            break
          }
          return o.setData({
            avatar_nickname_box_type: !0
          }), e.abrupt("return");
        case 148:
          if ("string" != typeof c.globalData.USERINFO_post) {
            e.next = 159;
            break
          }
          if ("ANEGT_ENTRY" != wx.getStorageSync("agent_entry")) {
            e.next = 153;
            break
          }
          e.next = 159;
          break;
        case 153:
          if (!wx.getUserProfile) {
            e.next = 159;
            break
          }
          if (console.log("wx.canIUse('wx.getUserProfile') string", JSON.parse(c.globalData.USERINFO_post).nickName), "微信用户" != JSON.parse(c.globalData.USERINFO_post).nickName) {
            e.next = 159;
            break
          }
          if (!o.can_use_editable_nick_name()) {
            e.next = 159;
            break
          }
          return o.setData({
            avatar_nickname_box_type: !0
          }), e.abrupt("return");
        case 159:
          if ("快速认证" != c.globalData.verify_type) {
            e.next = 164;
            break
          }
          return c.globalData.XM = "", c.globalData.ZJHM = "", this.police_verify(), e.abrupt("return");
        case 164:
          if (wx.showLoading({
              title: "请稍后...",
              mask: !0
            }), d = c.globalData.openid, "AGENT" == c.globalData.register_type.substr(0, 5) && "AGENT" != d.substr(0, 5) && (d = c.globalData.register_type + d), "RENTER" != c.globalData.register_type.substr(0, 6)) {
            e.next = 178;
            break
          }
          return "RENTER" != d.substr(0, 6) && (d = c.globalData.register_type + d), this.setData({
            hidden_renter_mobile_phone_tips: !1
          }), e.next = 173, o.isBanRentUser();
        case 173:
          if (!e.sent) {
            e.next = 178;
            break
          }
          return wx.hideLoading(), wx.showToast({
            title: "此人为禁租人员",
            icon: "none"
          }), e.abrupt("return");
        case 178:
          if ("COMPANY" == c.globalData.register_type.substr(0, 7) && "COMPANY" != d.substr(0, 7) && (d = c.globalData.register_type + d), o.setData({
              open_id_post: d
            }), c.globalData.cert_type = o.data.cert_type, null != (u = wx.getStorageSync("unionid")) && null != u && "" != u) {
            e.next = 185;
            break
          }
          return o.setData({
            show_ask_user_info: !0
          }), e.abrupt("return");
        case 185:
          "ACID_TEST" == c.globalData.register_type && (wx.setStorageSync("acid_test_detail_address", this.data.detail_address), wx.setStorageSync("acid_test_mobile_phone", this.data.mobile_phone)), o.data.living_address = this.data.street_and_community + this.data.detail_address, g = "", h = null, "ID_CARD" == c.globalData.cert_type ? g = "" : "HK_MACAO_TW" == c.globalData.cert_type ? g = "CHN" : (o.data.XM = o.data.first_name + " " + o.data.last_name, h = 0 == o.data.g_index ? "男" : "女", g = 0 == o.data.searchCountry.length ? "" : o.data.searchCountry[o.data.country_index]), p = {
            XM: o.data.XM,
            ZJHM: o.data.ZJHM,
            country: g,
            birthday: o.data.birthday,
            LXDH: o.data.mobile_phone,
            WXSJ: c.globalData.purePhoneNumber,
            GPS: JSON.stringify(c.globalData.location_info),
            USERINFO: JSON.stringify(c.globalData.USERINFO_post),
            SYSTEMINFO: JSON.stringify(c.globalData.SYSTEMINFO),
            openId: d,
            upload_file_id_ocr_01: c.globalData.upload_file_id_ocr_01,
            remark: o.data.remark,
            unionId: u,
            living_address: o.data.living_address
          }, "PASSPORT" == o.data.cert_type && (p.gender = h, p.contacts_id_card_type = o.data.c_index, p.contacts_id_card = o.data.contacts_ZJHM, p.contacts_name = o.data.contacts_name, p.contacts_phone = o.data.contacts_phone, p.relationship = o.data.relationship, p.first_name = o.data.first_name, p.last_name = o.data.last_name), f = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_id_card_info", console.log(f, p), wx.showLoading({
            title: "请稍后...",
            mask: !0
          }), wx.request({
            url: f,
            method: "POST",
            dataType: "json",
            data: p,
            success: function(e) {
              if (console.log(e), wx.hideLoading(), "000000000000" == e.data[0].resp_code) {
                console.log("提交成功", "api_01/upload_id_card_info"), console.log("this_page.data.XM", o.data.XM), c.globalData.XM = o.data.XM, c.globalData.ZJHM = o.data.ZJHM, c.globalData.mobile_phone = o.data.mobile_phone, c.globalData.openid = d;
                var a = e.data[0].register_token;
                "" != a && null != a && null != a && wx.setStorageSync("register_token", a), wx.showModal({
                  title: "姓名name【" + c.globalData.XM + "】?",
                  content: "您的姓名your name:" + c.globalData.XM + " 身份证ID:" + c.globalData.ZJHM + " ?",
                  showCancel: !0,
                  cancelText: "返回CL",
                  confirmText: "提交cfm",
                  success: function(e) {
                    e.confirm && ("ID_CARD" == o.data.cert_type ? o.tencent_face_verify(d) : "PASSPORT" == o.data.cert_type ? o.start_face_check() : "HK_MACAO_TW" == o.data.cert_type && o.police_verify())
                  }
                })
              } else if ("-000000001669" == e.data[0].resp_code) {
                console.log("-000000001669"), console.log("this_page.data.XM", o.data.XM), c.globalData.XM = o.data.XM, c.globalData.ZJHM = o.data.ZJHM, c.globalData.mobile_phone = o.data.mobile_phone;
                var t = e.data[0].register_token;
                "" != t && null != t && null != t && wx.setStorageSync("register_token", t), 0 == (s = o.check_should_send_verify_code()) ? wx.navigateTo({
                  url: "../form_ocr_03/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                }) : wx.navigateTo({
                  url: "../form_ocr_03/form"
                })
              } else if ("-000000001688" == e.data[0].resp_code) {
                console.log("000000001688 您已通过生物识别的人脸核身,请输入收到的短信验证码");
                var n = "您已通过生物识别的人脸核身,请输入收到的短信验证码";
                0 == (s = o.check_should_send_verify_code()) ? (n = "您已通过生物识别的人脸核身,将进行下一步操作", c.globalData.page_verify_code_msg = n) : c.globalData.page_verify_code_msg = n, "ACID_TEST" != c.globalData.register_type && "MY_QRCODE_ZC" != c.globalData.back_url || (0 == s ? o.send_verify_result(d, 1, 2) : o.send_verify_result(d, 1, 1)), wx.showModal({
                  title: "提示",
                  content: n,
                  showCancel: !1,
                  success: function(e) {
                    0 == s ? wx.navigateTo({
                      url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                    }) : wx.navigateTo({
                      url: "../form_ocr_04/form"
                    })
                  }
                })
              } else if ("000000000003" == e.data[0].resp_code) wx.showModal({
                title: "提示",
                content: "您已注册",
                showCancel: !1,
                success: function(e) {
                  wx.navigateTo({
                    url: "../../../index/index"
                  })
                }
              });
              else if ("000005515010" == e.data[0].resp_code) {
                var s;
                n = "识别成功,将发送短信验证码", 0 == (s = o.check_should_send_verify_code()) ? (n = "识别成功,将进行下一步操作", o.send_verify_result(d, 1, 2)) : o.send_verify_result(d, 1, 1), wx.showModal({
                  title: "识别成功",
                  content: n,
                  showCancel: !1,
                  success: function() {
                    c.globalData.page_verify_code_msg = "", 0 == s ? wx.navigateTo({
                      url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                    }) : wx.navigateTo({
                      url: "../form_ocr_04/form"
                    })
                  }
                })
              } else console.log("err:", e), wx.showModal({
                title: "提示",
                content: "认证失败(0169)" + e.data[0].resp_msg + "(" + e.data[0].resp_code + ")",
                showCancel: !1
              })
            },
            fail: function(e) {
              wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                title: "异常",
                content: "" + e.errMsg,
                showCancel: !1
              })
            }
          }), console.log("this_page.data.avatarUrl", o.data.avatarUrl), "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0" != o.data.avatarUrl && (b = {
            XM: o.data.XM,
            ZJHM: o.data.ZJHM,
            USERINFO: JSON.stringify(c.globalData.USERINFO_post),
            openId: d,
            unionId: u
          }, console.log("sv_016_upload_file_avatar", b), i.wx_upload_file("https://xcx.pinganbaiyun.cn/p_021_health_passport/api_004_motorcycles/sv_016_upload_file_avatar", b, o.data.avatarUrl, c.globalData.access_token));
        case 199:
          return e.abrupt("return");
        case 200:
        case "end":
          return e.stop()
      }
    }), t, this, [
      [4, 22],
      [34, 51]
    ])
  }))), function() {
    return r.apply(this, arguments)
  }),
  onShow: function(e) {
    console.log("form_ocr_01 onShow", e);
    if (console.log("app.globalData.register_type", c.globalData.register_type, a(c.globalData.register_type)), null != c.globalData.register_type && null != c.globalData.register_type || (c.globalData.register_type = ""), console.log("app.globalData.register_type", c.globalData.register_type, a(c.globalData.register_type)), "ACID_TEST" == c.globalData.register_type || "MY_QRCODE_ZC" == c.globalData.back_url ? (this.setData({
        is_self: !0,
        cover_dispaly: "none",
        register_dispaly: "flex",
        show_nowmal_verify_first: !0
      }), this.show_rigester_type()) : (console.log("不显示选择核验方式。默认实名核验"), this.show_rigester_type()), c.globalData.img_url && (console.log("have data app.globalData.img_url"), this.setData({
        src: c.globalData.img_url
      })), 0 == this.data.bind_phone_click && (this.setData({
        mobile_phone: ""
      }), c.globalData.purePhoneNumber = ""), this.data.datalist.ocr_name && (console.log("onshow XM:", this.data.datalist.ocr_name, this.data.XM, this.data.XM.length), this.setData({
        XM: this.data.datalist.ocr_name
      })), this.data.datalist.ocr_id && this.setData({
        ZJHM: this.data.datalist.ocr_id
      }), this.data.datalist.country && (0 == this.data.country.length || "" == this.data.country)) {
      var t = [];
      t.push(this.data.datalist.country), this.setData({
        searchCountry: t,
        country_index: 0
      })
    }
    this.data.datalist.birthday && this.setData({
      birthday: this.data.datalist.birthday
    }), console.log(c.globalData.register_type, "手工填写身份证页面"), "AGENT" == c.globalData.register_type.substr(0, 5) ? (this.setData({
      hidden_get_mobile_button: !0
    }), this.setData({
      mobile_phone: ""
    })) : "RENTER" == c.globalData.register_type.substr(0, 6) ? (this.setData({
      hidden_get_mobile_button: !0
    }), this.setData({
      hidden_renter_mobile_phone_tips: !1
    }), this.setData({
      mobile_phone: ""
    })) : "COMPANY" == c.globalData.register_type.substr(0, 7) ? (this.setData({
      hidden_get_mobile_button: !0
    }), this.setData({
      mobile_button_disabled: !1
    }), this.setData({
      mobile_phone: ""
    })) : "YUN_YI_AN_LAUNCH_REGISTER" == c.globalData.register_type || "LF_LAUNCH_REGISTER" == c.globalData.register_type ? (this.setData({
      hidden_get_mobile_button: !1
    }), this.setData({
      mobile_button_disabled: !1
    }), this.setData({
      mobile_phone: ""
    })) : this.setData({
      hidden_get_mobile_button: !1
    }), "APP_LAUNCH_REGISTER" == c.globalData.register_type ? (this.setData({
      hidden_get_mobile_button: !0
    }), this.setData({
      mobile_button_disabled: !0
    }), this.setData({
      mobile_phone: c.globalData.third_part_request_id
    })) : "AGENT" == c.globalData.register_type.substr(0, 5) || "RENTER" == c.globalData.register_type.substr(0, 6) || "COMPANY" == c.globalData.register_type.substr(0, 7) ? (this.setData({
      hidden_get_mobile_button: !0
    }), this.setData({
      mobile_button_disabled: !1
    }), this.setData({
      mobile_phone: ""
    })) : "YUN_YI_AN_LAUNCH_REGISTER" == c.globalData.register_type || "LF_LAUNCH_REGISTER" == c.globalData.register_type ? (this.setData({
      hidden_get_mobile_button: !1
    }), this.setData({
      mobile_button_disabled: !1
    }), this.setData({
      mobile_phone: ""
    })) : (this.setData({
      hidden_get_mobile_button: !1
    }), this.setData({
      mobile_button_disabled: !1
    })), console.log("this.data.index", this.data.index), 0 == this.data.index ? (this.setData({
      cert_type: "ID_CARD"
    }), c.globalData.cert_type = "ID_CARD") : 1 == this.data.index ? (this.setData({
      cert_type: "PASSPORT"
    }), c.globalData.cert_type = "PASSPORT") : 2 == this.data.index && (this.setData({
      cert_type: "HK_MACAO_TW"
    }), c.globalData.cert_type = "HK_MACAO_TW"), console.log("app.globalData.cert_type onshow", c.globalData.cert_type)
  },
  onUnload: function() {
    console.log("onUnload");
    clearTimeout(this.data.timeoutID)
  },
  bindinput_ZJHM: function(e) {
    this.setData({
      ZJHM: e.detail.value
    }), c.globalData.ocr_id = e.detail.value
  },
  bindinput_contacts_ZJHM: function(e) {
    this.setData({
      contacts_ZJHM: e.detail.value
    })
  },
  bindinput_contacts_name: function(e) {
    this.setData({
      contacts_name: e.detail.value
    })
  },
  bindinput_contacts_phone: function(e) {
    this.setData({
      contacts_phone: e.detail.value
    })
  },
  bindblur_ZJHM: function(e) {
    0 == _(e.detail.value) && "ID_CARD" == this.data.cert_type && wx.showModal({
      title: "提示",
      content: "身份证格式不正确,请重新输入",
      showCancel: !1
    }), this.setData({
      ZJHM: e.detail.value
    }), c.globalData.ocr_id = e.detail.value
  },
  bindblur_contacts_ZJHM: function(e) {
    0 == _(e.detail.value) && 0 == this.data.c_index && wx.showModal({
      title: "提示",
      content: "身份证格式不正确,请重新输入",
      showCancel: !1
    }), this.setData({
      contacts_ZJHM: e.detail.value
    })
  },
  bindinput_XM: function(e) {
    this.setData({
      XM: e.detail.value
    }), c.globalData.ocr_name = e.detail.value, c.globalData.XM = e.detail.value
  },
  convertToUpperCase: function(e) {
    return e.replace(/[a-z]/g, (function(e) {
      return String.fromCharCode(e.charCodeAt(0) - 32)
    }))
  },
  bindinput_first_name: function(e) {
    var a = e.detail.value;
    "PASSPORT" == this.data.cert_type && (a = this.convertToUpperCase(a)), this.setData({
      first_name: a
    })
  },
  bindinput_last_name: function(e) {
    var a = e.detail.value;
    "PASSPORT" == this.data.cert_type && (a = this.convertToUpperCase(a)), this.setData({
      last_name: a
    })
  },
  bindinput_detail_address: function(e) {
    this.setData({
      detail_address: e.detail.value
    })
  },
  bindblur_XM: function(e) {
    e.detail.value;
    null != this.data.XM && null != this.data.XM && "" != this.data.XM ? (this.setData({
      XM: e.detail.value
    }), c.globalData.ocr_name = e.detail.value, c.globalData.XM = e.detail.value) : wx.showModal({
      title: "输入提示",
      content: "请输入姓名",
      showCancel: !1
    })
  },
  bindblur_first: function(e) {},
  bindblur_last_name: function(e) {},
  bindblur_detail_address: function(e) {
    e.detail.value;
    null != this.data.detail_address && null != this.data.detail_address && "" != this.data.detail_address ? this.setData({
      detail_address: e.detail.value
    }) : wx.showModal({
      title: "输入提示",
      content: "请输入详细地址",
      showCancel: !1
    })
  },
  bindinput_mobile_phone: function(e) {
    this.setData({
      mobile_phone: e.detail.value
    })
  },
  bindblur_mobile_phone: function(e) {
    e.detail.value;
    if (null != this.data.mobile_phone && null != this.data.mobile_phone && "" != this.data.mobile_phone) {
      var a = this.data.mobile_phone;
      /^1[3456789]\d{9}$/.test(a) ? this.setData({
        mobile_phone: e.detail.value
      }) : wx.showModal({
        title: "输入提示",
        content: "手机格式有有误,请检查",
        showCancel: !1
      })
    } else wx.showModal({
      title: "输入提示",
      content: "请输入手机号",
      showCancel: !1
    })
  },
  bindinput_remark: function(e) {
    this.setData({
      remark: e.detail.value
    })
  },
  bindblur_remark: function(e) {
    this.setData({
      remark: e.detail.value
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
          openId: c.globalData.openid,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv
        };
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/dencryp",
          method: "POST",
          dataType: "json",
          data: o,
          header: {
            session_key: c.globalData.session_key_token
          },
          success: function(e) {
            if (console.log("获取解码信息 mobile_phone", e), wx.hideLoading(), "000000000000" != e.data[0].resp_code) return "-005123" == e.data[0].resp_code ? void wx.showModal({
              title: "提示",
              content: e.data[0].resp_msg + "(" + e.data[0].resp_code + ")",
              showCancel: !1
            }) : void wx.showModal({
              title: "提示",
              content: "请再次自动获取手机号",
              showCancel: !1
            });
            var t = e.data[1].purePhoneNumber;
            c.globalData.purePhoneNumber = t, a.setData({
              mobile_phone: t
            }), a.data.bind_phone_click = !0, c.globalData.should_send = !1, console.log("bind_phone_click", a.data.bind_phone_click, c.globalData.should_send), console.log("app.globalData.private_verify_code,预先生成的验证码，后台决定是否发送短信", c.globalData.private_verify_code);
            c.globalData.private_verify_code = 1100, a.data.private_verify_code = 1100, wx.setStorageSync("private_verify_code", 1100), console.log("app.globalData.private_verify_code", c.globalData.private_verify_code, a.data.private_verify_code)
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
                  c.globalData.openid = t.data[1].openid, c.globalData.unionid = t.data[1].unionid, wx.setStorageSync("unionid", c.globalData.unionid);
                  var o = {
                    openId: c.globalData.openid,
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv
                  };
                  wx.request({
                    url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/dencryp",
                    method: "POST",
                    dataType: "json",
                    data: o,
                    success: function(e) {
                      if (console.log("获取解码信息 mobile_phone", e), wx.hideLoading(), "000000000000" != e.data[0].resp_code) return "-005123" == e.data[0].resp_code ? void wx.showModal({
                        title: "提示",
                        content: e.data[0].resp_msg + "(" + e.data[0].resp_code + ")",
                        showCancel: !1
                      }) : void wx.showModal({
                        title: "提示",
                        content: "请再次自动获取手机号",
                        showCancel: !1
                      });
                      var t = e.data[1].purePhoneNumber;
                      c.globalData.purePhoneNumber = t, a.setData({
                        mobile_phone: t
                      }), a.data.bind_phone_click = !0, c.globalData.should_send = !1, console.log("bind_phone_click", a.data.bind_phone_click, c.globalData.should_send), console.log("app.globalData.private_verify_code,预先生成的验证码，后台决定是否发送短信", c.globalData.private_verify_code);
                      c.globalData.private_verify_code = 1100, a.data.private_verify_code = 1100, wx.setStorageSync("private_verify_code", 1100), console.log("app.globalData.private_verify_code", c.globalData.private_verify_code, a.data.private_verify_code)
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
  read_user_service_agreement: function() {
    console.log("打开《用户服务协议》");
    console.log("下载中"), wx.downloadFile({
      url: "https://xcx.pinganbaiyun.cn/strike_black/third_part/p_030_volunteer/UserAgreement.pdf",
      timeout: 1e4,
      success: function(e) {
        var a = e.tempFilePath;
        wx.openDocument({
          filePath: a,
          fileType: "pdf",
          success: function(e) {
            console.log(e, "res")
          },
          fail: function(e) {
            console.log(e)
          },
          complete: function(e) {
            console.log(e)
          }
        })
      }
    })
  },
  read_user_information_protection_protocol: function() {
    console.log("打开《个人信息保护政策》");
    console.log("下载中"), wx.downloadFile({
      url: "https://xcx.pinganbaiyun.cn/strike_black/third_part/p_030_volunteer/InfoProtect.pdf",
      timeout: 1e4,
      success: function(e) {
        var a = e.tempFilePath;
        wx.openDocument({
          filePath: a,
          fileType: "pdf",
          success: function(e) {
            console.log(e, "res")
          },
          fail: function(e) {
            console.log(e)
          },
          complete: function(e) {
            console.log(e)
          }
        })
      }
    })
  },
  ask_role_first: function() {
    var e = this;
    wx.getSetting({
      success: function(a) {
        console.log("获取用户授权设置..."), console.log(a), null == a.authSetting["scope.camera"] || null == a.authSetting["scope.camera"] ? (console.log("用户未设置过授权,弹出请求授权界面 camera..."), wx.authorize({
          scope: "scope.camera",
          success: function(a) {
            console.log("authorize scope.camera success...", a), e.go_ocr()
          },
          fail: function(a) {
            console.log("authorize scope.camera fail 用户不允许授权...", a), e.setData({
              showModal_camera_refuse: !0
            })
          }
        })) : 1 == a.authSetting["scope.camera"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 camera..."), e.go_ocr()) : 0 == a.authSetting["scope.camera"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 camera..."), e.setData({
          showModal_camera: !0
        }))
      }
    })
  },
  hideModal_camera: function() {
    this.setData({
      showModal_camera: !1
    })
  },
  get_role_result: function(e) {
    console.log("get_role_result", e), 1 == e.detail.authSetting["scope.userLocation"] && 1 == e.detail.authSetting["scope.camera"] ? (console.log("用户选择了是"), this.setData({
      showModal_location: !1
    }), this.upload_id_card_info()) : (this.setData({
      showModal_location: !0
    }), console.log("用户选择了否"))
  },
  tencent_face_verify: function(a) {
    var o, n, s = this,
      r = 1;
    "微警认证" != c.globalData.verify_type ? ("读数识别" == c.globalData.verify_type && (r = 0), r = 1, wx.startFacialRecognitionVerify({
      name: c.globalData.XM,
      idCardNumber: c.globalData.ZJHM,
      mobile: c.globalData.mobile_phone,
      checkAliveType: r,
      success: (n = t(e().mark((function o(n) {
        var r, l, _, d, u, g;
        return e().wrap((function(o) {
          for (;;) switch (o.prev = o.next) {
            case 0:
              if (console.log("success_startFacialRecognitionVerify", n), "0" != n.errCode) {
                o.next = 13;
                break
              }
              if ("" != n.verifyResult && null != n.verifyResult && null != n.verifyResult) {
                o.next = 5;
                break
              }
              return wx.showModal({
                title: "人脸核身数据异常,请再次核验",
                content: g,
                showCancel: !1,
                success: function() {}
              }), o.abrupt("return");
            case 5:
              return c.globalData.face_verify_result = n.verifyResult, r = n.verifyResult, l = n.errCode, _ = n.errMsg, wx.showLoading({
                title: "正在校验数据...",
                marsk: !0
              }), d = {
                openId: a,
                tencent_verify_result_string: r,
                error_code: l,
                error_msg: _
              }, console.log("1726188099427", d), u = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_tencent_verify_result_string", wx.request({
                url: u,
                method: "POST",
                dataType: "json",
                data: d,
                success: function(e) {
                  if (wx.hideLoading(), "000000000000" == e.data[0].resp_code) {
                    var t = s.check_should_send_verify_code(),
                      o = "识别成功,将发送短信验证码";
                    0 == t ? (o = "识别成功,将进行下一步操作", s.send_verify_result(a, 1, 2)) : s.send_verify_result(a, 1, 1), wx.showModal({
                      title: "识别成功",
                      content: o,
                      showCancel: !1,
                      success: function() {
                        c.globalData.page_verify_code_msg = "", 0 == t ? wx.navigateTo({
                          url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                        }) : wx.navigateTo({
                          url: "../form_ocr_04/form"
                        })
                      }
                    })
                  } else console.log("err:", e), wx.showModal({
                    title: "异常",
                    content: "校验数据异常,请再次核验(002)," + e.data[0].resp_code + e.data[0].resp_msg,
                    showCancel: !1,
                    success: function() {}
                  })
                },
                fail: function(e) {
                  wx.hideLoading(), console.log("提交失败，1726188022996", u, d, e), wx.showModal({
                    title: "异常",
                    content: "校验数据异常(1726188022996)," + e.errMsg,
                    showCancel: !1
                  })
                }
              }), o.abrupt("return");
            case 13:
              if (console.log("fail_startFacialRecognitionVerify 1005:", n), g = n.errCode + n.errMsg, -1 == n.errMsg.indexOf("not support")) {
                o.next = 20;
                break
              }
              return g = "您的微信版本不支持人脸识别,请升级微信版本或使用其他手机1005", o.next = 19, i.wx_show_modal("识别异常", g, !1);
            case 19:
              return o.abrupt("return");
            case 20:
              r = n.verifyResult, l = n.errCode, _ = n.errMsg, d = {
                openId: a,
                tencent_verify_result_string: r,
                error_code: l,
                error_msg: _
              }, console.log("upload_tencent_verify_result_error_string:", d), u = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_tencent_verify_result_error_string", wx.request({
                url: u,
                method: "POST",
                dataType: "json",
                data: d,
                success: function() {
                  var o = t(e().mark((function t(o) {
                    var n, r;
                    return e().wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          if (wx.hideLoading(), "000000000000" != o.data[0].resp_code) {
                            e.next = 8;
                            break
                          }
                          n = s.check_should_send_verify_code(), r = "系统已识别处理,将发送短信验证码", 0 == n && (r = "系统已识别处理,将进行下一步操作"), wx.showModal({
                            title: "系统已识别处理",
                            content: r,
                            showCancel: !1,
                            success: function() {
                              c.globalData.page_verify_code_msg = "", 0 == n ? (s.send_verify_result(a, 1, 2), wx.navigateTo({
                                url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                              })) : (s.send_verify_result(a, 1, 1), wx.navigateTo({
                                url: "../form_ocr_04/form"
                              }))
                            }
                          }), e.next = 18;
                          break;
                        case 8:
                          console.log("err:", o), e.next = 17;
                          break;
                        case 13:
                          if (1 != e.sent.confirm) {
                            e.next = 17;
                            break
                          }
                          return wx.navigateTo({
                            url: "../cloud_shield_face_check/form"
                          }), e.abrupt("return");
                        case 17:
                          return e.abrupt("return");
                        case 18:
                        case "end":
                          return e.stop()
                      }
                    }), t)
                  })));
                  return function(e) {
                    return o.apply(this, arguments)
                  }
                }(),
                fail: function(e) {
                  wx.hideLoading(), console.log("提交失败，1726188116386", u, d, e), wx.showModal({
                    title: "异常",
                    content: "校验数据异常(1726188116386)," + e.errMsg,
                    showCancel: !1
                  })
                }
              });
            case 24:
            case "end":
              return o.stop()
          }
        }), o)
      }))), function(e) {
        return n.apply(this, arguments)
      }),
      fail: (o = t(e().mark((function o(n) {
        var r, l, _, d;
        return e().wrap((function(o) {
          for (;;) switch (o.prev = o.next) {
            case 0:
              if (console.log("fail_startFacialRecognitionVerify 1005:", n), n.errCode, n.errMsg, -1 == n.errMsg.indexOf("not support")) {
                o.next = 7;
                break
              }
              return o.next = 6, i.wx_show_modal("识别异常", "您的微信版本不支持人脸识别,请升级微信版本或使用其他手机1005", !1);
            case 6:
              return o.abrupt("return");
            case 7:
              r = n.verifyResult, l = n.errCode, _ = n.errMsg, d = {
                openId: a,
                tencent_verify_result_string: r,
                error_code: l,
                error_msg: _
              }, console.log("upload_tencent_verify_result_error_string:", d), wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_tencent_verify_result_error_string",
                method: "POST",
                dataType: "json",
                data: d,
                success: function() {
                  var o = t(e().mark((function t(o) {
                    var n, r;
                    return e().wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          if (wx.hideLoading(), "000000000000" != o.data[0].resp_code) {
                            e.next = 8;
                            break
                          }
                          n = s.check_should_send_verify_code(), r = "系统已识别处理,将发送短信验证码", 0 == n && (r = "系统已识别处理,将进行下一步操作"), wx.showModal({
                            title: "系统已识别处理",
                            content: r,
                            showCancel: !1,
                            success: function() {
                              c.globalData.page_verify_code_msg = "", 0 == n ? (s.send_verify_result(a, 1, 2), wx.navigateTo({
                                url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
                              })) : (s.send_verify_result(a, 1, 1), wx.navigateTo({
                                url: "../form_ocr_04/form"
                              }))
                            }
                          }), e.next = 18;
                          break;
                        case 8:
                          console.log("err:", o), e.next = 17;
                          break;
                        case 13:
                          if (1 != e.sent.confirm) {
                            e.next = 17;
                            break
                          }
                          return s.start_face_check(), e.abrupt("return");
                        case 17:
                          return e.abrupt("return");
                        case 18:
                        case "end":
                          return e.stop()
                      }
                    }), t)
                  })));
                  return function(e) {
                    return o.apply(this, arguments)
                  }
                }(),
                fail: function(e) {
                  wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                    title: "异常",
                    content: "校验数据异常-0168," + e.errMsg,
                    showCancel: !1
                  })
                }
              });
            case 11:
            case "end":
              return o.stop()
          }
        }), o)
      }))), function(e) {
        return o.apply(this, arguments)
      })
    })) : s.police_verify()
  },
  get_location_role: function() {
    var e = this,
      a = c;
    wx.getSetting({
      success: function(t) {
        console.log("获取用户授权设置..."), console.log(t), null == t.authSetting["scope.userLocation"] || null == t.authSetting["scope.userLocation"] ? (console.log("用户未设置过授权,弹出请求授权界面 userLocation..."), wx.authorize({
          scope: "scope.userLocation",
          success: function(t) {
            console.log("authorize scope.userLocation success...", t), wx.getLocation({
              type: "wgs84",
              altitude: !1,
              success: function(t) {
                console.log("res.getLocation:", t), a.globalData.location_info = t, e.setData({
                  showModal_location: !1
                })
              },
              fail: function(t) {
                console.log("getLocation fail", t), a.globalData.get_role_01 = !1, e.setData({
                  showModal_location: !0
                }), console.log("getLocation fail 001:", t);
                var o, n = "";
                if (null == c.globalData.SYSTEMINFO) o = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()");
                else try {
                  -1 == c.globalData.SYSTEMINFO.errMsg.indexOf("ok") && (console.log("app.globalData.SYSTEMINFO.errMsg not found:", c.globalData.SYSTEMINFO.errMsg), o = wx.getSystemInfoSync()), console.log("app.globalData.SYSTEMINFO.errMsg ok:", c.globalData.SYSTEMINFO.errMsg), o = c.globalData.SYSTEMINFO
                } catch (e) {
                  console.log(e), o = wx.getSystemInfoSync()
                }
                n = -1 != o.model.indexOf("iPhone") ? "请您通过设置->隐私->定位服务->微信 授权微信允许访问位置信息" : "请您通过设置->安全和隐私->定位服务->微信 授权微信允许访问位置信息", wx.showModal({
                  title: "平安码丨平安白云需要获取定位为您提供更加精准的服务",
                  content: n,
                  showCancel: !1,
                  success: function(e) {}
                })
              }
            })
          },
          fail: function(t) {
            console.log("authorize scope.userLocation fail 用户不允许授权...", t), a.globalData.get_role_01 = !1, e.setData({
              showModal_location_refuse: !0
            })
          }
        })) : 1 == t.authSetting["scope.userLocation"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 userLocation..."), wx.getLocation({
          type: "wgs84",
          altitude: !1,
          success: function(t) {
            a.globalData.location_info = t, e.setData({
              showModal_location: !1
            }), console.log(t)
          },
          fail: function(e) {
            console.log("getLocation fail 002:", e);
            var a, t = "";
            if (null == c.globalData.SYSTEMINFO) a = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()");
            else try {
              -1 == c.globalData.SYSTEMINFO.errMsg.indexOf("ok") && (console.log("app.globalData.SYSTEMINFO.errMsg not found:", c.globalData.SYSTEMINFO.errMsg), a = wx.getSystemInfoSync()), console.log("app.globalData.SYSTEMINFO.errMsg ok:", c.globalData.SYSTEMINFO.errMsg), a = c.globalData.SYSTEMINFO
            } catch (e) {
              console.log(e), a = wx.getSystemInfoSync()
            }
            t = -1 != a.model.indexOf("iPhone") ? "请您通过设置->隐私->定位服务->微信 授权微信允许访问位置信息" : "请您通过设置->安全和隐私->定位服务->微信 授权微信允许访问位置信息", wx.showModal({
              title: "平安码丨平安白云需要获取定位为您提供更加精准的服务",
              content: t,
              showCancel: !1,
              success: function(e) {}
            })
          }
        })) : 0 == t.authSetting["scope.userLocation"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 userLocation..."), a.globalData.get_role_01 = !1, e.setData({
          showModal_location_refuse: !0
        }))
      }
    })
  },
  get_user_info_result: function(e) {
    var a = this,
      t = this;
    wx.getUserProfile({
      desc: "请授权用于完善个人资料",
      success: function(e) {
        if (console.log("getUserProfile success", e), c.globalData.USERINFO_post = e.userInfo, null != c.globalData.USERINFO_post && null != c.globalData.USERINFO_post && "" != c.globalData.USERINFO_post) {
          c.globalData.userInfo = JSON.stringify(e.userInfo), c.globalData.USERINFO_post = JSON.stringify(e.userInfo), console.log("用户信息 app.globalData.USERINFO_post", c.globalData.USERINFO_post);
          var o = e.userInfo.avatarUrl,
            n = e.userInfo.nickName;
          wx.setStorageSync("avatar", o), wx.setStorageSync("nick_name", n), wx.showLoading({
            title: "请稍后...",
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
                  if (console.log("获取unionId,拉取login:", e), "000000000000" == e.data[0].resp_code) {
                    var a = e.data[1].openid;
                    null != c.globalData.openid && null != c.globalData.openid && "" != c.globalData.openid || (c.globalData.openid = a);
                    var t = e.data[1].unionid;
                    if (console.log("unionId", a, e.data[1], t), c.globalData.unionid = e.data[1].unionid, wx.setStorageSync("unionid", c.globalData.unionid), wx.setStorageSync("unionId", c.globalData.unionid), null != t && null != t && "" != t) {
                      var o = {
                          openId: a,
                          unionId: t
                        },
                        n = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_openId_unionId";
                      console.log(n, o), wx.request({
                        url: n,
                        method: "POST",
                        dataType: "json",
                        data: o,
                        success: function(e) {
                          wx.hideLoading(), wx.setStorageSync("unionId", t)
                        },
                        fail: function(e) {
                          console.log("提交失败，", e)
                        }
                      })
                    }
                  }
                },
                fail: function(e) {
                  wx.hideLoading(), console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
                    title: "后台服务器异常",
                    content: "拉取用户信息失败-013266923," + e.errMsg,
                    showCancel: !1
                  })
                }
              })
            },
            fail: function(e) {
              wx.hideLoading(), console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "后台服务器异常",
                content: "拉取用户信息失败-013266925," + e,
                showCancel: !1
              })
            }
          }), t.data.is_self ? a.upload_id_card_info() : (console.log("再次提交"), a.setData({
            showPasswordModal: !1
          }), a.submit_password()), a.setData({
            show_ask_user_info: !1
          })
        } else wx.showModal({
          title: "提示",
          content: "请授权平安码丨平安白云获取微信用户信息",
          confirmText: "确定",
          showCancel: !1,
          success: function(e) {
            t.setData({
              show_ask_user_info: !0
            })
          }
        })
      },
      fail: function(e) {
        console.log("getUserProfile fail", e), wx.showModal({
          title: "提示",
          content: "请授权平安码丨平安白云获取微信用户信息",
          confirmText: "确定",
          showCancel: !1,
          success: function(e) {
            t.setData({
              show_ask_user_info: !0
            })
          }
        })
      }
    })
  },
  get_location_role_result: function(e) {
    var a = this,
      t = c;
    console.log("get_location_role_result", e), 0 == e.detail.authSetting["scope.userLocation"] ? (a.setData({
      showModal_location_refuse: !0
    }), console.log("用户选择了否")) : (console.log("用户选择了是"), a.setData({
      showModal_location_refuse: !1
    }), console.log("用户设置了是 则再次获取位置信息 userLocation..."), wx.getLocation({
      type: "wgs84",
      altitude: !1,
      success: function(e) {
        t.globalData.location_info = e, a.setData({
          showModal_location_refuse: !1
        }), console.log(e)
      },
      fail: function(e) {
        console.log("getLocation fail 003:", e);
        var a, t = "";
        if (null == c.globalData.SYSTEMINFO) a = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()");
        else try {
          -1 == c.globalData.SYSTEMINFO.errMsg.indexOf("ok") && (console.log("app.globalData.SYSTEMINFO.errMsg not found:", c.globalData.SYSTEMINFO.errMsg), a = wx.getSystemInfoSync()), console.log("app.globalData.SYSTEMINFO.errMsg ok:", c.globalData.SYSTEMINFO.errMsg), a = c.globalData.SYSTEMINFO
        } catch (e) {
          console.log(e), a = wx.getSystemInfoSync()
        }
        t = -1 != a.model.indexOf("iPhone") ? "请您通过设置->隐私->定位服务->微信 授权微信允许访问位置信息" : "请您通过设置->安全和隐私->定位服务->微信 授权微信允许访问位置信息", wx.showModal({
          title: "平安码丨平安白云需要获取定位为您提供更加精准的服务",
          content: t,
          showCancel: !1,
          success: function(e) {}
        })
      }
    }))
  },
  permission_deny: function() {
    wx.showModal({
      title: "您确定取消授权，退出注册？",
      content: "取消授权您将返回首页",
      showCancel: !0,
      success: function(e) {
        console.log(e), 1 != e.confirm || wx.reLaunch({
          url: "/page/index_01/pages/my/my"
        })
      }
    })
  },
  get_camera_role: function() {
    var e = this,
      a = c;
    wx.getSetting({
      success: function(t) {
        console.log("获取摄像头设置..."), console.log(t), null == t.authSetting["scope.camera"] || null == t.authSetting["scope.camera"] ? (console.log("用户未设置过授权,弹出请求授权界面 camera..."), wx.authorize({
          scope: "scope.camera",
          success: function(t) {
            console.log("authorize scope.camera success...", t), a.globalData.camera_role = "GRANTED", e.setData({
              showModal_camera: !1
            })
          },
          fail: function(a) {
            console.log("authorize scope.camera fail 用户不允许授权...", a), e.setData({
              showModal_camera_refuse: !0
            })
          }
        })) : 1 == t.authSetting["scope.camera"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 camera..."), wx.authorize({
          scope: "scope.camera",
          success: function(t) {
            console.log("authorize scope.camera success...", t), a.globalData.camera_role = "GRANTED", e.setData({
              showModal_camera: !1
            })
          },
          fail: function(a) {
            console.log("authorize scope.camera fail 用户不允许授权...", a), e.setData({
              showModal_camera_refuse: !0
            })
          }
        })) : 0 == t.authSetting["scope.camera"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 camera..."), e.setData({
          showModal_camera_refuse: !0
        }))
      }
    })
  },
  get_camera_role_result: function(e) {
    var a = this,
      t = c;
    console.log("get_camera_role_result", e), 0 == e.detail.authSetting["scope.camera"] ? (a.setData({
      showModal_camera_refuse: !0
    }), console.log("用户选择了否 get_camera_role_result")) : (console.log("用户选择了是 get_camera_role_result"), wx.authorize({
      scope: "scope.camera",
      success: function(e) {
        console.log("authorize scope.camera success...", e), t.globalData.camera_role = "GRANTED", a.setData({
          showModal_camera_refuse: !1
        })
      },
      fail: function(e) {
        console.log("authorize scope.camera fail 用户不允许授权...", e), a.setData({
          showModal_camera_refuse: !0
        })
      }
    }))
  },
  start_face_check: function() {
    var e = "/page/page_007_face_check/page_007_face_check?name=" + this.data.XM + "&id_card=" + this.data.ZJHM + "&cert_type=" + this.data.cert_type;
    console.log("url:", e), e = encodeURI(e), wx.navigateTo({
      url: e,
      events: {
        callback_face_check: function(e) {
          console.log(e)
        },
        someEvent: function(e) {
          console.log("someEvent", e)
        }
      }
    })
  },
  callback_face_check: function(e) {
    console.log("callback_face_check");
    if ("success" == e.data) {
      var a = this.data.open_id_post,
        t = this.check_should_send_verify_code(),
        o = "识别成功,将发送短信验证码.success send sms verify code";
      0 == t ? (o = "识别成功,将进行下一步操作.success,the next step will be taken", this.send_verify_result(a, 1, 2)) : this.send_verify_result(a, 1, 1), wx.showLoading({
        title: "请稍等...",
        mask: !0
      }), setTimeout((function() {
        wx.hideLoading(), wx.showModal({
          title: "识别成功 success",
          content: o,
          showCancel: !1,
          success: function() {
            c.globalData.page_verify_code_msg = "", 0 == t ? wx.navigateTo({
              url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
            }) : wx.navigateTo({
              url: "../form_ocr_04/form"
            })
          }
        })
      }), 3e3)
    } else wx.showModal({
      title: "核验未成功",
      content: "",
      showCancel: !1
    })
  },
  go_ocr: function() {
    var e = this;
    return 0 == this.data.index ? void wx.navigateTo({
      url: "../camera_ocr_02/camera",
      events: {
        callback_ocr: function(a) {
          console.log(a), e.setData({
            datalist: a.data
          })
        }
      }
    }) : void wx.navigateTo({
      url: "../camera_pass_04/camera",
      events: {
        callback_ocr: function(a) {
          console.log(a);
          var t = "",
            o = "";
          if (a.data.ocr_name.length > 0) {
            if (-1 != a.data.ocr_name.indexOf(" ")) {
              for (var n = a.data.ocr_name.split(" "), s = [], r = 0; r < n.length; r++) {
                var l = n[r];
                l.trim().length > 0 && s.push(l)
              }
              t = s[0], o = s[1]
            } else t = a.data.ocr_name.trim();
            var i = a.data.pass_port_surname;
            "" != i && null != i && null != i && (t = i);
            var c = a.data.pass_port_given_name;
            "" != c && null != c && null != c && (o = c)
          }
          e.setData({
            datalist: a.data,
            first_name: t,
            last_name: o
          }), console.log(e.data.datalist)
        }
      }
    })
  },
  checkboxChange_user_agreement: function(e) {
    var a = this.data.user_agreement_checked;
    a = "false" == a || 0 == a, this.setData({
      user_agreement_checked: a
    }), console.log("user_agreement_checked", a)
  },
  before_upload_id_card_info: function() {
    var e = this;
    if (console.log("this.data.user_agreement_checked", this.data.user_agreement_checked), 0 == this.data.user_agreement_checked) return wx.hideLoading(), void wx.showModal({
      title: "提示",
      content: "请先阅读《用户服务协议》与《个人信息保护政策》后勾选再提交",
      showCancel: !1
    });
    if (wx.showLoading({
        title: "请稍等...",
        mask: !0
      }), 1 == e.data.has_got_location) return wx.hideLoading(), void(e.data.is_self ? e.upload_id_card_info() : e.setData({
      showPasswordModal: !0
    }));
    wx.getLocation({
      type: "wgs84",
      altitude: !1,
      success: function(e) {
        console.log("res.getLocation:", e), c.globalData.location_info = e
      },
      fail: function(e) {
        console.log("getLocation fail", e)
      },
      complete: function(a) {
        console.log("complete", a), 1 != e.data.has_got_location ? (e.data.has_got_location = !0, wx.hideLoading(), e.data.is_self ? e.upload_id_card_info() : e.setData({
          showPasswordModal: !0
        })) : wx.hideLoading()
      }
    });
    var a = setTimeout((function() {
      1 != e.data.has_got_location ? (e.data.has_got_location = !0, wx.hideLoading(), e.data.is_self ? e.upload_id_card_info() : e.setData({
        showPasswordModal: !0
      })) : wx.hideLoading()
    }), 12e3);
    e.data.timeoutID = a
  },
  police_verify: (s = t(e().mark((function a() {
    var t, o, n, s, r;
    return e().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return t = this, o = "", e.prev = 2, n = JSON.stringify({
            name: c.globalData.XM,
            id_card: c.globalData.ZJHM,
            openId: c.globalData.openid,
            cert_type: this.data.cert_type,
            sex: parseInt(this.data.sex_index) + 1,
            expired_date: this.data.expired_date,
            birthday: this.data.birthday
          }), "HK_MACAO_TW" == t.data.cert_type && (wx.setStorageSync("HK_MACAO_TW_sex", parseInt(this.data.sex_index) + 1), wx.setStorageSync("HK_MACAO_TW_expired_date", this.data.expired_date), wx.setStorageSync("HK_MACAO_TW_birthday", this.data.birthday)), wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), e.next = 9, i.wx_request("https://xcx.pinganbaiyun.cn/p_021_health_passport/api_006_img_token/sv_003_get_police_verify_token", n);
        case 9:
          if (s = e.sent, wx.hideLoading(), console.log("sv_003_get_police_verify_token", s), "000000000000" == s.data[0].resp_code) {
            e.next = 15;
            break
          }
          return wx.showModal({
            title: "提示",
            content: s.data[0].resp_msg + s.data[0].resp_code,
            showCancel: !1
          }), e.abrupt("return");
        case 15:
          o = s.data[0].cert_token, c.globalData.certToken = o, e.next = 23;
          break;
        case 19:
          return e.prev = 19, e.t0 = e.catch(2), wx.showModal({
            title: "微警认证失败",
            content: e.t0,
            showCancel: !1,
            success: function() {}
          }), e.abrupt("return");
        case 23:
          r = {
            certToken: o
          }, console.log("police_verify extraData", r), wx.navigateToMiniProgram({
            appId: "wx318893774c9bfdd2",
            path: "pages/thirdCheck/thirdCheck",
            extraData: r,
            envVersion: "release",
            success: function(e) {
              console.log("police_verify success", e)
            },
            fail: function(e) {
              console.log("police_verify fail", e), wx.showModal({
                title: "微警认证失败",
                content: e,
                showCancel: !1,
                success: function() {}
              })
            }
          });
        case 26:
        case "end":
          return e.stop()
      }
    }), a, this, [
      [2, 19]
    ])
  }))), function() {
    return s.apply(this, arguments)
  }),
  weijing_regester_type: function() {
    c.globalData.verify_type = "快速认证", this.before_upload_id_card_info()
  },
  show_rigester_type: function() {
    c.globalData.verify_type = "微警认证", this.setData({
      is_self: !0,
      cover_dispaly: "none",
      register_dispaly: "flex"
    })
  },
  bindPickerChange_sex: function(e) {
    this.setData({
      sex_index: e.detail.value
    })
  },
  binchange_expire_date: function(e) {
    this.setData({
      expired_date: e.detail.value
    })
  },
  check_should_send_verify_code: function() {
    return console.log("check_should_send_verify_code", c.globalData.mobile_phone, c.globalData.purePhoneNumber), "" != c.globalData.mobile_phone && null != c.globalData.mobile_phone && null != c.globalData.mobile_phone && "" != c.globalData.purePhoneNumber && null != c.globalData.purePhoneNumber && null != c.globalData.purePhoneNumber && c.globalData.mobile_phone != c.globalData.purePhoneNumber || 0 == this.data.bind_phone_click
  },
  send_verify_result: function(e, a, t) {
    var o = this;
    2 == t ? wx.showLoading({
      title: "正在操作...",
      mask: !0
    }) : wx.showLoading({
      title: "正在发送短信验证码...",
      mask: !0
    });
    var n = {
      openId: e,
      verify_result: a
    };
    2 == t && (n.private_verify_code = this.data.private_verify_code);
    wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/send_verify_result",
      method: "POST",
      dataType: "json",
      data: n,
      header: {
        session_key: c.globalData.session_key_token
      },
      success: function(e) {
        if (wx.hideLoading(), "000000000000" == e.data[0].resp_code);
        else if ("-632198" == e.data[0].resp_code) c.globalData.purePhoneNumber = "", wx.removeStorageSync("private_verify_code"), o.setData({
          mobile_phone: ""
        }), c.globalData.purePhoneNumber = "", wx.showModal({
          title: "提示",
          content: e.data[0].resp_msg,
          showCancel: !1,
          success: function(e) {
            wx.reLaunch({
              url: "../form_ocr_01/form"
            })
          }
        });
        else if ("-32198" == e.data[0].resp_code) wx.showModal({
          title: "提示",
          content: "本次注册已超时,请重新注册",
          showCancel: !1,
          success: function(e) {
            wx.navigateTo({
              url: "../../../index/index"
            })
          }
        });
        else if ("000000000003" == e.data[0].resp_code) wx.showModal({
          title: "提示",
          content: "您已注册",
          showCancel: !1,
          success: function(e) {
            wx.navigateTo({
              url: "../../../index/index"
            })
          }
        });
        else if ("000000000004" == e.data[0].resp_code) {
          var a = "验证成功,已发送短信验证码";
          2 == t && (a = "已验证成功"), wx.showModal({
            title: "提示",
            content: a,
            showCancel: !1,
            success: function(e) {
              2 == t ? wx.navigateTo({
                url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
              }) : wx.navigateTo({
                url: "../form_ocr_04/form"
              })
            }
          })
        } else console.log("err:", e), wx.showModal({
          title: "异常",
          content: "数据校验失败," + e.data[0].resp_code + e.data[0].resp_msg,
          showCancel: !1
        })
      },
      fail: function(e) {
        wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
          title: "异常",
          content: "发送短信验证码失败-0168," + e.errMsg,
          showCancel: !1
        })
      }
    })
  },
  confirm_avatar_nickname: function() {
    console.log(this.data.avatarUrl, this.data.nick_name_editable, "头像昵称");
    if ("https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0" != this.data.avatarUrl)
      if ("" != this.data.nick_name_editable) {
        this.setData({
          avatar_nickname_box_type: !1
        });
        var e = {};
        e.nickName = this.data.nick_name_editable, e.avatarUrl = this.data.avatarUrl, e.gender = "", e.language = "", e.city = "", e.province = "", e.country = "", c.globalData.userInfo = JSON.stringify(e), c.globalData.USERINFO_post = JSON.stringify(e), console.log("用户信息 app.globalData.USERINFO_post", c.globalData.USERINFO_post);
        var a = this.data.avatarUrl,
          t = this.data.nick_name_editable;
        wx.setStorageSync("avatar", a), wx.setStorageSync("nick_name", t), wx.showLoading({
          title: "请稍后...",
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
                if (console.log("获取unionId,拉取login:", e), "000000000000" == e.data[0].resp_code) {
                  var a = e.data[1].openid;
                  null != c.globalData.openid && null != c.globalData.openid && "" != c.globalData.openid || (c.globalData.openid = a);
                  var t = e.data[1].unionid;
                  if (console.log("unionId", a, e.data[1], t), c.globalData.unionid = e.data[1].unionid, wx.setStorageSync("unionid", c.globalData.unionid), wx.setStorageSync("unionId", c.globalData.unionid), null != t && null != t && "" != t) {
                    var o = {
                        openId: a,
                        unionId: t
                      },
                      n = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_openId_unionId";
                    console.log(n, o), wx.request({
                      url: n,
                      method: "POST",
                      dataType: "json",
                      data: o,
                      success: function(e) {
                        wx.hideLoading(), wx.setStorageSync("unionId", t)
                      },
                      fail: function(e) {
                        console.log("提交失败，", e)
                      }
                    })
                  }
                }
              },
              fail: function(e) {
                wx.hideLoading(), console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
                  title: "后台服务器异常",
                  content: "拉取用户信息失败-0138021," + e.errMsg,
                  showCancel: !1
                })
              }
            })
          },
          fail: function(e) {
            wx.hideLoading(), console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
              title: "后台服务器异常",
              content: "拉取用户信息失败-0138022," + e,
              showCancel: !1
            })
          }
        }), this.data.is_self ? this.upload_id_card_info() : (console.log("再次提交"), this.setData({
          showPasswordModal: !1
        }), this.submit_password())
      } else wx.showToast({
        title: "请填写微信昵称",
        icon: "none",
        duration: 2e3
      });
    else wx.showToast({
      title: "请选择微信头像",
      icon: "none",
      duration: 2e3
    })
  },
  nicknameInput: function(e) {
    this.setData({
      nick_name_editable: e.detail.value
    })
  },
  bindblur_nickname: function(e) {
    this.setData({
      nick_name_editable: e.detail.value
    })
  },
  compareVersion: function(e, a) {
    e = e.split("."), a = a.split(".");
    for (var t = Math.max(e.length, a.length); e.length < t;) e.push("0");
    for (; a.length < t;) a.push("0");
    for (var o = 0; o < t; o++) {
      var n = parseInt(e[o]),
        s = parseInt(a[o]);
      if (n > s) return 1;
      if (n < s) return -1
    }
    return 0
  },
  onChooseAvatar: function(e) {
    var a = e.detail.avatarUrl;
    this.setData({
      avatarUrl: a
    })
  },
  can_use_editable_nick_name: function() {
    var e = wx.getSystemInfoSync().SDKVersion;
    return console.log(e, "获取基础库版本"), this.compareVersion(e, "2.21.2") >= 0
  },
  end_method: function() {}
});