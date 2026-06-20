var e, o = require("./@babel/runtime/helpers/defineProperty"),
  n = require("./@babel/runtime/helpers/regeneratorRuntime"),
  a = require("./@babel/runtime/helpers/asyncToGenerator"),
  l = require("./@babel/runtime/helpers/typeof"),
  t = (require("./config").openIdUrl, require("./config.js"));
App({
  data: {
    qqMap_key: "PMWBZ-5LBKG-KS5QD-IZ5ZF-PFPB7-B5BFB",
    tmapWebUrl: "https://api.tianditu.gov.cn/",
    tkey: "b995ff43965f29f40ab7893f9a22ec6c",
    baiyun_longitude: 113.29114,
    baiyun_latitude: 23.21254,
    baseURL: t.get_url() + "p_033_search_house_xcx",
    baseJobURL: t.get_url() + "p_041_job",
    take_num_token: ""
  },
  getSelectPoint: function(e, o) {
    return {
      id: 0,
      longitude: e,
      latitude: o,
      iconPath: "../../../image/search_house/map_icon.png",
      width: 20,
      height: 20
    }
  },
  getBuildingPoint: function(e, o, n) {
    return {
      id: n,
      longitude: e,
      latitude: o,
      iconPath: "../../../image/search_house/house_icon.png",
      width: 20,
      height: 20
    }
  },
  onLaunch: function() {
    console.log("App Launch");
    var e = this;
    wx.getSystemInfo({
      success: function(o) {
        e.globalData.SYSTEMINFO = o, console.log(e.globalData.SYSTEMINFO)
      },
      fail: function(e) {
        wx.showModal({
          title: "提示",
          content: "获取信息异常-0322",
          showCancel: !1,
          success: function(e) {
            e.confirm ? (console.log("用户点击确定_01..."), wx.navigateBack({
              delta: 0
            })) : e.cancel && (console.log("用户点击取消_01..."), wx.navigateBack({
              delta: 0
            }))
          }
        })
      }
    })
  },
  onShow: function(e) {
    console.log("App Show", e);
    var o = this,
      t = wx.getUpdateManager();
    t.onCheckForUpdate((function(e) {})), t.onUpdateReady((function() {
      t.applyUpdate(), wx.showModal({
        title: "更新提示",
        content: "新版本平安码丨平安白云已经准备好，您将重启应用",
        showCancel: !1,
        success: function(e) {
          e.confirm
        }
      })
    })), t.onUpdateFailed((function() {
      wx.showModal({
        title: "更新提示",
        content: "新版本您未更新好，请重新更新",
        showCancel: !1,
        success: function(e) {
          e.confirm && t.applyUpdate()
        }
      })
    }));
    var r, _ = e.referrerInfo;
    if (console.log("referrerInfo app.js", _), null != _ && null != _ && ("page/component/pages/form_ocr_01/form" == e.path || "page/component/pages/form_ocr_03/form" == e.path || "module_004/add_family/add_family" == e.path) && "object" == l(_) && "wx318893774c9bfdd2" == _.appId) {
      if ("object" == l(_.extraData) && "object" == l(_.extraData.res) && 0 != _.extraData.res.res_code) return void wx.showModal({
        title: "微警认证失败",
        content: _.extraData.res.res_msg + _.extraData.res.res_code.toString(),
        showCancel: !1
      });
      wx.showLoading({
        title: "正在校验数据..."
      });
      var i = wx.getStorageSync("private_verify_code");
      console.log("1730310363142", o.globalData.verify_type, i), i = "send_verify_code", "" != o.globalData.mobile_phone && null != o.globalData.mobile_phone && null != o.globalData.mobile_phone && "" != o.globalData.purePhoneNumber && null != o.globalData.purePhoneNumber && null != o.globalData.purePhoneNumber && o.globalData.mobile_phone === o.globalData.purePhoneNumber && (i = o.globalData.purePhoneNumber);
      var s = wx.getStorageSync("register_token"),
        u = {
          openId: o.globalData.openid,
          certToken: o.globalData.certToken,
          register_token: s,
          referrerInfo: _,
          private_verify_code: i
        },
        c = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_006_img_token/sv_004_get_police_verify_result";
      "快速认证" == o.globalData.verify_type && (u = {
        openId: o.globalData.openid,
        certToken: o.globalData.certToken,
        register_token: s,
        GPS: o.globalData.location_info,
        USERINFO: o.globalData.USERINFO_post,
        SYSTEMINFO: o.globalData.SYSTEMINFO
      }, c = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_006_img_token/sv_005_get_quickly_verify_result"), console.log(c, u, o.globalData.verify_type);
      var p = wx.getStorageSync("wj_buzi_type"),
        g = wx.getStorageSync("wj_buzi_code");
      "ADD_FAMILY" == p && null != g && null != g && "[object Undefined]" != g && (u = {
        openId: o.globalData.openid,
        certToken: o.globalData.certToken,
        register_token: s,
        wj_buzi_type: p,
        wj_buzi_code: g
      }, c = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_006_img_token/sv_007_get_police_verify_result_buzi", console.log("微警添加家属的", c)), console.log("1730372831988 post_data", c, u, o.globalData.session_key_token), wx.request({
        url: c,
        method: "POST",
        dataType: "json",
        data: u,
        header: {
          cloud_shield_token: o.globalData.access_token,
          session_key: o.globalData.session_key_token
        },
        success: (r = a(n().mark((function e(a) {
          var l, t, r;
          return n().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (wx.hideLoading(), console.log("1730372890939 返回信息", p, c, a), "000000000000" != a.data[0].resp_code) {
                  e.next = 32;
                  break
                }
                if (o.globalData.verify_result_OK_token = a.data[0].verify_result_OK_token, console.log("1730372890951 verify_result_OK_token", o.globalData.verify_result_OK_token), "快速认证" != o.globalData.verify_type) {
                  e.next = 14;
                  break
                }
                return console.log("快速认证：", o.globalData.verify_type), o.globalData.page_verify_code_msg = a.data[0].verify_code, l = a.data[0].register_token, wx.setStorageSync("register_token", l), wx.navigateTo({
                  url: "../../../../page/component/pages/form_ocr_04/form"
                }), e.abrupt("return");
              case 14:
                if ("ADD_FAMILY" != p) {
                  e.next = 26;
                  break
                }
                if (console.log("添加家属的", p), t = wx.getStorageSync("family_from_src"), wx.removeStorageSync("family_from_src"), "VACCINE" != t) {
                  e.next = 21;
                  break
                }
                return wx.showModal({
                  title: "提示",
                  content: "已停止服务.请返回(1730314736495)",
                  showCancel: !1,
                  success: function() {}
                }), e.abrupt("return");
              case 21:
                return wx.redirectTo({
                  url: "../addPersonInfo/inform?wj_buzi_type=ADD_FAMILY&AUTO_JUMP_PASSED=NO"
                }), e.abrupt("return");
              case 26:
                r = "识别成功,将进行下一步操作", "send_verify_code" == i && (r = "识别成功,将发送短信验证码"), wx.showModal({
                  title: "识别成功",
                  content: r,
                  showCancel: !1,
                  success: function() {
                    o.globalData.page_verify_code_msg = "", wx.navigateTo({
                      url: "../../../../page/component/pages/form_ocr_04/form"
                    })
                  }
                });
              case 29:
                return e.abrupt("return");
              case 32:
                console.log("err:", a), wx.showModal({
                  title: "异常",
                  content: "校验数据异常,请再次核验(001)," + a.data[0].resp_code + a.data[0].resp_msg,
                  showCancel: !1,
                  success: function() {}
                });
              case 34:
              case "end":
                return e.stop()
            }
          }), e)
        }))), function(e) {
          return r.apply(this, arguments)
        }),
        fail: function(e) {
          wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
            title: "异常",
            content: "校验数据异常-0168," + e.errMsg,
            showCancel: !1
          })
        }
      })
    }
    var d = e.referrerInfo;
    console.log("referrerInfo app.js", d), console.log("referrerInfo app.js options", e), null != d && null != d && "page/page_006_common_webview/page_006_common_webview" == e.path && 1038 == e.scene && (console.log("referrerInfo app.js 从注册页面进入的，因为到验证码码页面之后，退出获取验证码，会使页面重新刷新。重新触发调用"), wx.reLaunch({
      url: "../../page/index_01/pages/my/my"
    }));
    var f = e.referrerInfo;
    if (console.log("referrerInfo app.js 检查跳转粤居码入住后小程序的返回", f), console.log("referrerInfo app.js 检查跳转粤居码入住后小程序的返回 options", e), null != f && null != f && "page/rent_house/pages/form_scan_qrcode/form" == e.path && 1038 == e.scene && (console.log("referrerInfo.extraData", f.extraData, l(f.extraData)), null != f.extraData && null != f.extraData && f.extraData.hasOwnProperty("res_code") && 0 == f.extraData.res_code)) try {
      var h = getCurrentPages();
      if (console.log("跳转粤居码入住后小程序返回 getCurrentPages()", h, l(h)), "object" == l(h)) {
        var b = h[0];
        if (console.log("cur_page", b), console.log("cur_page.route", b.route), "page/rent_house/pages/form_scan_qrcode/form" == b.route) return void b.go_subscribe()
      }
    } catch (e) {
      console.log("调用页面方法异常991023", e)
    } else;
  },
  resetLoginData: function() {
    this.globalData.expiresIn = "", this.globalData.sessionID = "", this.globalData.IMUserInfo = {
      userID: "",
      userSig: "",
      token: "",
      phone: ""
    }, this.globalData.userProfile = null
  },
  onHide: function() {
    console.log("App Hide"), this.globalData.show_ad_cover = !0
  },
  find_global_data: function() {},
  globalData: (e = {
    legal_name: null,
    userInfo: null,
    img_url: null,
    hasLogin: !1,
    openid: null,
    nick_nanme: null,
    get_role_01: null,
    session_key: null,
    USERINFO_post: null,
    location_info: null,
    SYSTEMINFO: null,
    purePhoneNumber: null,
    qr_code_string: null,
    page_verify_code_msg: null,
    page_qrcode_avatar: null,
    page_qrcode_name: null,
    page_qrcode_id_card: null,
    page_qrcode_mobile_phone: null,
    page_qrcode_expire_date: null,
    page_qrcode_qr_code: null,
    upload_file_id_ocr_01: null,
    ocr_name: null,
    ocr_id: null,
    XM: null,
    ZJHM: null,
    mobile_phone: null,
    cert_type: "ID_CARD",
    back_url: null,
    access_token: null,
    cloud_shield_token: null,
    upload_file_id_ocr_03: null,
    GSMC: null,
    ZCH: null,
    YYQX: null,
    FDDBR: null,
    DZ: null,
    input_company_id: null,
    input_company_name: null,
    input_rent_house_rec_id: null,
    input_rent_house_address: null,
    register_type: "SELF",
    XM_iphone_ocr_03: null,
    ZJHM_iphone_ocr_03: null,
    LXDH_iphone_ocr_03: null,
    remark_iphone_ocr_03: null,
    third_part_name: "PABY_APP",
    third_part_request_id: null,
    third_part_img_file_id: null,
    face_verify_result: null,
    live_city: null,
    live_area: null,
    live_address: null,
    department_code: null,
    company_street_name: null,
    house_number_code: null,
    house_number_name: null,
    room_number: null,
    rootm_type: null,
    show_ad_cover: !0,
    camera_role: null,
    verify_type: "微警认证",
    passport_name: null,
    passport_id_card: null,
    passport_mobile_phone: null,
    passport_address: null,
    state_enc: null,
    passport_region_id: null,
    uuid_house: null,
    houseNumber: {},
    companyNumber: {}
  }, o(e, "uuid_house", ""), o(e, "house_number_code", ""), o(e, "certToken", ""), o(e, "IMUserInfo", null), o(e, "isTUIKit", !0), o(e, "userProfile", null), o(e, "headerHeight", 0), o(e, "statusBarHeight", 0), o(e, "SDKAppID", 1400631543), o(e, "should_send", !0), o(e, "private_verify_code", null), o(e, "points", []), o(e, "app_version", ""), o(e, "verify_result_OK_token", ""), o(e, "tmapWebUrl", "https://api.tianditu.gov.cn/"), o(e, "tkey", "b995ff43965f29f40ab7893f9a22ec6c"), e),
  onSDKReady: function() {},
  onSdkNotReady: function() {},
  onKickedOut: function() {
    wx.showToast({
      title: "您被踢下线",
      icon: "error"
    }), wx.navigateTo({
      url: "./page/index_01/pages/my/my"
    })
  },
  onTIMError: function() {},
  onNetStateChange: function() {},
  onSDKReload: function() {},
  getUserOpenId: function(e) {}
});