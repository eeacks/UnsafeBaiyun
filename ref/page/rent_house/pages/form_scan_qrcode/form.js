var e, t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../../../util/regenerator-runtime/runtime")) && e.__esModule;
var n, o, s, r, i, _, d, c, l = require("../../../../util/util.js"),
  u = getApp();
Page({
  data: {
    title: "我的出租屋",
    scene: 0,
    showModal_user_info: !1,
    this_sfz_XM: null,
    this_sfz_ZJHM: null,
    this_sfz_mobile_phone: null,
    show_paby_check_in: !1,
    show_gd_security: !1,
    nee_jump_gd_security: !1,
    gd_security_path: "",
    house_number_code: "",
    isShowModel_yjm_res: !1,
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
    show_letter: !1,
    is_read: !1,
    busi_type: 1,
    rent_house_rec_id: -1,
    rent_house_code: -1,
    room_code: -1,
    address: "",
    community: "",
    street_name: "",
    room_name: "",
    attribute_recid_code: "",
    this_options: {},
    garden_name: "",
    show_garden_building: !1,
    garden_full_street: "请选择小区楼栋地址",
    garden_building_list: [],
    itemIndex_garden_building: -1,
    key_word_garden_building: "",
    key_word_garden_room: "",
    cur_page_garden_building: 1,
    total_page_garden_building: 0,
    garden_visit_show: !1,
    garden_mp_address: ""
  },
  onLoad: function(e) {
    if (console.log("page/rent_house/pages/form_scan_qrcode/form options", e), this.data.this_options = e, null != this.data.this_options.feat && null != this.data.this_options.feat && "" != this.data.this_options.feat && "houseRegister" == this.data.this_options.feat) return console.log("粤居码扫码进入的"), this.data.show_gd_security = !0, void this.sv_013_get_house_by_dzbm();
    var t = decodeURIComponent(e.scene),
      a = decodeURIComponent(e.busi_type);
    console.log("scene...... rent_house form:", e, t), null != a && null != a && "" != a && (this.data.busi_type = a);
    try {
      parseInt(t) >= 1 && (console.log("scene...... not undefined:", t), this.data.scene = t)
    } catch (e) {
      console.log(e)
    }
    this.get_live_info()
  },
  error: function(e) {
    console.log(e.detail)
  },
  onShow: function() {
    console.log("onShow form_scan_qrcode");
    var e = wx.getStorageSync("s_001_yjm_checkin");
    "" != e && null != e && null != e && "[object Undefined]" != e && this.setData({
      isShowModel_yjm_res: !0
    })
  },
  onUnload: function() {
    console.log("onUnload form_scan_qrcode")
  },
  get_live_info: (c = a(t().mark((function e() {
    var a, n, o, s, r, i, _, d, c, g, p;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (a = this, wx.showLoading({
              title: "请稍后..."
            }), n = wx.getStorageSync("openid"), o = wx.getStorageSync("unionid"), "" == n || null == n || null == n || "[object Undefined]" == n || "" == o || null == o || null == o || "[object Undefined]" == o) {
            e.next = 9;
            break
          }
          u.globalData.unionid = o, u.globalData.openid = n, e.next = 31;
          break;
        case 9:
          return e.prev = 9, e.next = 12, l.wx_login();
        case 12:
          if (s = e.sent, console.log("login_result:", s), "000000000000" != s.data[0].resp_code) {
            e.next = 22;
            break
          }
          u.globalData.openid = s.data[1].openid, u.globalData.unionid = s.data[1].unionid, u.globalData.session_key = s.data[1].session_key, wx.setStorageSync("openid", u.globalData.openid), wx.setStorageSync("unionid", u.globalData.unionid), e.next = 24;
          break;
        case 22:
          return wx.showModal({
            title: "提示",
            content: s.data[0].resp_msg + "(" + s.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 24:
          e.next = 31;
          break;
        case 26:
          return e.prev = 26, e.t0 = e.catch(9), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 31:
          return r = a.data.scene, i = {
            rent_house_rec_id: r,
            openId: n
          }, 5 == a.data.busi_type && (_ = a.data.scene, i.room_rec_id = _, i.rent_house_rec_id = ""), 6 == a.data.busi_type && (i.busi_type = "garden", i.scence = a.data.scene), d = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_005_get_live_info", e.next = 38, l.wx_request(d, i);
        case 38:
          if (c = e.sent, wx.hideLoading(), r = c.data[0].rent_house_rec_id, a.data.rent_house_rec_id = r, a.data.rent_house_code = c.data[0].rent_house_code, a.data.room_code = c.data[0].room_code, null != (g = c.data[0].room_name) && null != g || (g = ""), p = "", 6 == a.data.busi_type && (p = c.data[0].garden_name, c.data[0].address = ""), a.setData({
              address: c.data[0].address,
              community: c.data[0].community,
              street_name: c.data[0].street_name,
              room_name: g,
              attribute_recid_code: c.data[0].attribute_recid_code,
              garden_name: p
            }), "000000000000" != c.data[0].resp_code) {
            e.next = 57;
            break
          }
          return d = "/page/component/pages/pass_document_green/component?encry_id=" + r + "&busi_type=1&cry_type=plain_text", 6 == a.data.busi_type && (d = "/page/component/pages/pass_document_green/component?encry_id=" + a.data.scene + "&busi_type=6&cry_type=plain_text"), console.log("encodeURIComponent url", d), wx.redirectTo({
            url: d
          }), e.abrupt("return");
        case 57:
          if ("0000000030566" != c.data[0].resp_code) {
            e.next = 62;
            break
          }
          return a.data.show_paby_check_in = !0, e.abrupt("return");
        case 62:
          if ("00000130581" != c.data[0].resp_code && "00000130583" != c.data[0].resp_code) {
            e.next = 69;
            break
          }
          return a.data.house_number_code = c.data[0].house_number_code, a.data.show_gd_security = !0, a.data.nee_jump_gd_security = !0, e.abrupt("return");
        case 69:
          if ("0000000030581" != c.data[0].resp_code) {
            e.next = 74;
            break
          }
          return a.data.show_paby_check_in = !0, e.abrupt("return");
        case 74:
          console.log("err:", c), wx.showModal({
            title: "提示",
            content: c.data[0].resp_msg + c.data[0].resp_code,
            showCancel: !1
          });
        case 76:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [9, 26]
    ])
  }))), function() {
    return c.apply(this, arguments)
  }),
  go_pass: (d = a(t().mark((function e() {
    var n, o, s, r, i;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (n = this, o = wx.getStorageSync("openid"), s = wx.getStorageSync("unionid"), "" == o || null == o || null == o || "[object Undefined]" == o || "" == s || null == s || null == s || "[object Undefined]" == s) {
            e.next = 9;
            break
          }
          u.globalData.unionid = s, u.globalData.openid = o, e.next = 30;
          break;
        case 9:
          return e.prev = 9, e.next = 12, l.wx_login();
        case 12:
          if (r = e.sent, console.log("login_result:", r), "000000000000" != r.data[0].resp_code) {
            e.next = 21;
            break
          }
          u.globalData.openid = r.data[1].openid, u.globalData.unionid = r.data[1].unionid, wx.setStorageSync("openid", u.globalData.openid), wx.setStorageSync("unionid", u.globalData.unionid), e.next = 23;
          break;
        case 21:
          return wx.showModal({
            title: "提示",
            content: r.data[0].resp_msg + "(" + r.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 23:
          e.next = 30;
          break;
        case 25:
          return e.prev = 25, e.t0 = e.catch(9), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 30:
          i = {
            openId: u.globalData.openid,
            oper_type: "PASS"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: i,
            success: function() {
              var e = a(t().mark((function e(a) {
                var o, s;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", a), "000000000003" != a.data[0].resp_code) {
                        e.next = 15;
                        break
                      }
                      if (o = a.data[0].access_token, u.globalData.access_token = o, 6 != n.data.busi_type) {
                        e.next = 9;
                        break
                      }
                      n.garden_visit(), e.next = 13;
                      break;
                    case 9:
                      return s = "/page/component/pages/pass_document_green/component?encry_id=" + n.data.rent_house_rec_id + "&busi_type=1&cry_type=plain_text&show_type=VISIT_HOUSE", console.log("encodeURIComponent url", s), wx.redirectTo({
                        url: s
                      }), e.abrupt("return");
                    case 13:
                      e.next = 22;
                      break;
                    case 15:
                      return u.globalData.back_url = "WISHI_YOU_HEALTH", wx.setStorageSync("encry_id", n.data.scene), wx.setStorageSync("busi_type", n.data.busi_type), wx.setStorageSync("cry_type", "plain_text"), wx.setStorageSync("show_type", "VISIT_HOUSE"), wx.showModal({
                        title: "来访登记",
                        content: "体验来访登记功能，需要您实名注册。",
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          1 == e.confirm ? wx.redirectTo({
                            url: "../../../component/pages/form_ocr_01/form"
                          }) : wx.redirectTo({
                            url: "../../../index_01/pages/my/my"
                          })
                        }
                      }), e.abrupt("return");
                    case 22:
                    case "end":
                      return e.stop()
                  }
                }), e)
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
      [9, 25]
    ])
  }))), function() {
    return d.apply(this, arguments)
  }),
  go_paby_check_in: (_ = a(t().mark((function e() {
    var n, o, s, r, i;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (n = this, console.log("this_page.data.busi_type", n.data.busi_type), 6 != n.data.busi_type) {
            e.next = 10;
            break
          }
          return n.data.cur_page_garden_building = 1, n.data.key_word_garden_building = "", n.data.garden_building_list = [], n.sv_015_get_garden_building(), n.setData({
            show_garden_building: !0,
            garden_building_list: n.data.garden_building_list,
            garden_visit_show: !1
          }), n.data.show_paby_check_in = !0, e.abrupt("return");
        case 10:
          if (1 != n.data.show_paby_check_in) {
            e.next = 13;
            break
          }
          return n.setData({
            show_letter: !0
          }), e.abrupt("return");
        case 13:
          if (1 != n.data.show_gd_security) {
            e.next = 45;
            break
          }
          if (o = wx.getStorageSync("openid"), s = wx.getStorageSync("unionid"), "" == o || null == o || null == o || "[object Undefined]" == o || "" == s || null == s || null == s || "[object Undefined]" == s) {
            e.next = 22;
            break
          }
          u.globalData.unionid = s, u.globalData.openid = o, e.next = 44;
          break;
        case 22:
          return e.prev = 22, e.next = 25, l.wx_login();
        case 25:
          if (r = e.sent, console.log("login_result:", r), "000000000000" != r.data[0].resp_code) {
            e.next = 35;
            break
          }
          u.globalData.openid = r.data[1].openid, u.globalData.unionid = r.data[1].unionid, u.globalData.session_key = r.data[1].session_key, wx.setStorageSync("openid", u.globalData.openid), wx.setStorageSync("unionid", u.globalData.unionid), e.next = 37;
          break;
        case 35:
          return wx.showModal({
            title: "提示",
            content: r.data[0].resp_msg + "(" + r.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 37:
          e.next = 44;
          break;
        case 39:
          return e.prev = 39, e.t0 = e.catch(22), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 44:
          i = {
            openId: u.globalData.openid,
            oper_type: "RENT_HOUSE"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: i,
            success: function() {
              var e = a(t().mark((function e(a) {
                var o;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", a), "000000000003" != a.data[0].resp_code) {
                        e.next = 9;
                        break
                      }
                      return o = a.data[0].access_token, u.globalData.access_token = o, n.setData({
                        show_letter: !0
                      }), e.abrupt("return");
                    case 9:
                      return u.globalData.back_url = "JOINT_YJM_HOUSE", wx.showModal({
                        title: "安居助手",
                        content: "体验房屋入住及来访登记功能，需要您实名注册。",
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          1 == e.confirm ? (wx.setStorageSync("YJM_HOUSE_SCENE", n.data.rent_house_rec_id), wx.redirectTo({
                            url: "../../../component/pages/form_ocr_01/form"
                          })) : wx.redirectTo({
                            url: "../../../index_01/pages/my/my"
                          })
                        }
                      }), e.abrupt("return");
                    case 12:
                    case "end":
                      return e.stop()
                  }
                }), e)
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
        case 45:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [22, 39]
    ])
  }))), function() {
    return _.apply(this, arguments)
  }),
  go_city_manage: (i = a(t().mark((function e() {
    var n, o, s, r, i, _, d;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if ((n = this).data.busi_type, o = 1, s = "pages/mapSelect/instance/index?modelName=SUITE&params=busi_code@@@" + n.data.rent_house_code + "@@@busi_type@@@" + o + "@@@person_type@@@5", 5 == n.data.busi_type && (o = 2, s = "pages/mapSelect/instance/index?modelName=SUITE&params=busi_code@@@" + n.data.room_code + "@@@busi_type@@@" + o + "@@@person_type@@@5"), console.log("navigate_path", s), console.log("access_token", u.globalData.access_token), wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), r = wx.getStorageSync("openid"), i = wx.getStorageSync("unionid"), "" == r || null == r || null == r || "[object Undefined]" == r || "" == i || null == i || null == i || "[object Undefined]" == i) {
            e.next = 17;
            break
          }
          u.globalData.unionid = i, u.globalData.openid = r, e.next = 38;
          break;
        case 17:
          return e.prev = 17, e.next = 20, l.wx_login();
        case 20:
          if (_ = e.sent, console.log("login_result:", _), "000000000000" != _.data[0].resp_code) {
            e.next = 29;
            break
          }
          u.globalData.openid = _.data[1].openid, u.globalData.unionid = _.data[1].unionid, wx.setStorageSync("openid", u.globalData.openid), wx.setStorageSync("unionid", u.globalData.unionid), e.next = 31;
          break;
        case 29:
          return wx.showModal({
            title: "提示",
            content: _.data[0].resp_msg + "(" + _.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 31:
          e.next = 38;
          break;
        case 33:
          return e.prev = 33, e.t0 = e.catch(17), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 38:
          d = {
            openId: u.globalData.openid,
            oper_type: "RENT_HOUSE"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: d,
            success: function() {
              var e = a(t().mark((function e(a) {
                var n, o, r;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", a), "000000000003" != a.data[0].resp_code) {
                        e.next = 13;
                        break
                      }
                      return n = a.data[0].access_token, u.globalData.access_token = n, o = {}, null == u.globalData.SYSTEMINFO ? (o = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", o)) : o = u.globalData.SYSTEMINFO, r = l.compareVersion(o.SDKVersion, "2.20.1"), console.log("diff_version_1688976985105", r), r >= 0 ? wx.openEmbeddedMiniProgram({
                        appId: "wx43c553dcf4ebb9a8",
                        path: s,
                        allowFullScreen: !0,
                        extraData: {
                          access_token: u.globalData.access_token
                        },
                        envVersion: "release",
                        success: function(e) {
                          console.log("openEmbeddedMiniProgram res", e)
                        }
                      }) : wx.navigateToMiniProgram({
                        appId: "wx43c553dcf4ebb9a8",
                        path: s,
                        extraData: {
                          access_token: u.globalData.access_token
                        },
                        envVersion: "release",
                        success: function(e) {
                          console.log("navigateToMiniProgram res", e)
                        }
                      }), e.abrupt("return");
                    case 13:
                      return u.globalData.back_url = "INDEX", wx.showModal({
                        title: "智慧城管",
                        content: "体验智慧城管功能，需要您实名注册。",
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          1 == e.confirm ? wx.redirectTo({
                            url: "../../../component/pages/form_ocr_01/form"
                          }) : wx.redirectTo({
                            url: "../../../index_01/pages/my/my"
                          })
                        }
                      }), e.abrupt("return");
                    case 16:
                    case "end":
                      return e.stop()
                  }
                }), e)
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
        case 42:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [17, 33]
    ])
  }))), function() {
    return i.apply(this, arguments)
  }),
  check_in_again: function() {
    console.log("check_in_again...", this.data.rent_house_rec_id), wx.navigateTo({
      url: "../form_join_rent_house/form?scene=" + this.data.rent_house_rec_id
    }), wx.removeStorageSync("s_001_yjm_checkin"), this.setData({
      isShowModel_yjm_res: !1
    })
  },
  go_subscribe: function() {
    this.setData({
      isShowModel_yjm_res: !1,
      show_ask_send_msg: !0
    }), wx.removeStorageSync("s_001_yjm_checkin")
  },
  buttontap_send_msg: function(e) {
    var t = this,
      a = {
        buzi_type: "yjm_check_in"
      };
    a.house_number_code = t.data.house_number_code, a.scene = t.data.rent_house_rec_id;
    var n = "../../../third_part/pages/rent_house/form?jump_to=GO_RENTER_INDEX@@@params:" + JSON.stringify(a);
    if (n = encodeURI(n), console.log("jump_url", n), 0 == e.detail.index) return t.setData({
      show_ask_send_msg: !1
    }), void wx.redirectTo({
      url: n
    });
    wx.requestSubscribeMessage({
      tmplIds: ["CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ"],
      success: function(e) {
        t.setData({
          show_ask_send_msg: !1
        }), wx.redirectTo({
          url: n
        })
      },
      fail: function(e) {
        console.log("requestSubscribeMessage fail res", e), t.setData({
          show_ask_send_msg: !1
        }), wx.redirectTo({
          url: n
        })
      }
    })
  },
  confirm_notice: function() {
    var e = this;
    return a(t().mark((function a() {
      var n, o, s;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return n = e, e.setData({
              show_letter: !1
            }), wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), o = {
              foo: "bar",
              rent_house_rec_id: n.data.rent_house_rec_id
            }, "https://xcx.pinganbaiyun.cn/mini_program/api_05_rent_house_mini_program/get_dyfw_xx", t.next = 7, l.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_05_rent_house_mini_program/get_dyfw_xx", o);
          case 7:
            s = t.sent, wx.hideLoading(), s.data, 0 === s.data[0].data && e.setData({
              show_paby_check_in: !0
            }), e.after_read_letter_then_join();
          case 12:
          case "end":
            return t.stop()
        }
      }), a)
    })))()
  },
  check_is_read: function(e) {
    this.setData({
      is_read: !0
    })
  },
  check_touch: function(e) {
    return !1
  },
  after_read_letter_then_join: (r = a(t().mark((function e() {
    var a, n, o, s, r, i, _, d, c, g, p, h;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (a = this, console.log("after_read_letter_then_join this_page.data.show_paby_check_i", a.data.show_paby_check_in), console.log("after_read_letter_then_join this_page.data.show_gd_security", a.data.show_gd_security), 1 != a.data.show_paby_check_in) {
            e.next = 10;
            break
          }
          return n = "../form_join_rent_house/form?scene=" + a.data.rent_house_rec_id, 6 == a.data.busi_type && (n += "&expired_month=业主自住"), console.log("平安码丨平安白云的入住 url_jump", n), wx.navigateTo({
            url: n
          }), this.setData({
            isShowModel_yjm_res: !1
          }), e.abrupt("return");
        case 10:
          if (1 != a.data.show_gd_security) {
            e.next = 67;
            break
          }
          return e.prev = 11, wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), o = {
            foo: "bar",
            rent_house_rec_id: a.data.rent_house_rec_id
          }, null != a.data.this_options.feat && null != a.data.this_options.feat && "" != a.data.this_options.feat && "houseRegister" == a.data.this_options.feat && (console.log("粤居码扫码进入的"), o.buzi_type = "JZW_DZBM", o.JZW_DZBM = a.data.this_options.dzbm), (s = {}).rent_house_rec_id = a.data.rent_house_rec_id, s.buzi_type = "yjm_check_in", s.house_number_code = a.data.house_number_code, s.scene = a.data.rent_house_rec_id, r = JSON.stringify(s), e.next = 24, l.wx_request("https://xcx.pinganbaiyun.cn/health_passport/api_004_motorcycles/sv_001_get_gd_security_authcode", o);
        case 24:
          if (i = e.sent, wx.hideLoading(), _ = i.data[0].check_in_room, _ = Array.isArray(_) ? _ : [], d = _.map((function(e) {
              return e.room_name
            })).join(","), !("000000000000" == i.data[0].resp_code && _.length > 0)) {
            e.next = 34;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "您已入住 " + d + " 是否还需要继续申请入住登记",
            cancelText: "修改",
            confirmText: "完成",
            showCancel: !0,
            success: function(e) {
              if (console.log("res", e), e.confirm) a.go_subscribe();
              else {
                var t = i.data[0].code,
                  n = "/pages/common/thirdPartyRouter/thirdPartyRouter?feat=houseRegister&bs=mlp&dzbm=" + a.data.house_number_code + "&refer=paby&authcode=" + t;
                null != a.data.this_options.feat && null != a.data.this_options.feat && "" != a.data.this_options.feat && "houseRegister" == a.data.this_options.feat && (console.log("粤居码扫码进入的 ld 楼栋的 1699605230261"), n = "/pages/common/thirdPartyRouter/thirdPartyRouter?feat=houseRegister&bs=ld&dzbm=" + a.data.this_options.dzbm + "&refer=paby&authcode=" + t + "&mlpxxbm=" + a.data.this_options.mlpxxbm), console.log("gd_security_path_001 1699605260251", n);
                var o = {};
                null == u.globalData.SYSTEMINFO ? (o = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", o)) : o = u.globalData.SYSTEMINFO;
                var s = l.compareVersion(o.SDKVersion, "2.20.1");
                console.log("diff_version_001", s), s >= 0 ? wx.openEmbeddedMiniProgram({
                  appId: "wx9f75b01dcb4b1a79",
                  path: n,
                  allowFullScreen: !0,
                  extraData: {},
                  envVersion: "release",
                  success: function(e) {
                    console.log("navigateToMiniProgram res", e), wx.setStorageSync("s_001_yjm_checkin", r), a.setData({
                      isShowModel_yjm_res: !0
                    })
                  }
                }) : wx.navigateToMiniProgram({
                  appId: "wx9f75b01dcb4b1a79",
                  path: n,
                  extraData: {},
                  envVersion: "release",
                  success: function(e) {
                    console.log("navigateToMiniProgram res", e), wx.setStorageSync("s_001_yjm_checkin", r), a.setData({
                      isShowModel_yjm_res: !0
                    })
                  }
                })
              }
            }
          }), e.abrupt("return");
        case 34:
          if ("000000000000" != i.data[0].resp_code) {
            e.next = 47;
            break
          }
          return c = i.data[0].code, g = "/pages/common/thirdPartyRouter/thirdPartyRouter?feat=houseRegister&bs=mlp&dzbm=" + a.data.house_number_code + "&refer=paby&authcode=" + c, null != a.data.this_options.feat && null != a.data.this_options.feat && "" != a.data.this_options.feat && "houseRegister" == a.data.this_options.feat && (console.log("粤居码扫码进入的 ld 楼栋的 1699605275678"), g = "/pages/common/thirdPartyRouter/thirdPartyRouter?feat=houseRegister&bs=ld&dzbm=" + a.data.this_options.dzbm + "&refer=paby&authcode=" + c + "&mlpxxbm=" + a.data.this_options.mlpxxbm), console.log("gd_security_path_002 1699605290556", g), p = {}, null == u.globalData.SYSTEMINFO ? (p = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", p)) : p = u.globalData.SYSTEMINFO, h = l.compareVersion(p.SDKVersion, "2.20.1"), console.log("diff_version_002", h), h >= 0 ? wx.openEmbeddedMiniProgram({
            appId: "wx9f75b01dcb4b1a79",
            path: g,
            allowFullScreen: !0,
            extraData: {},
            envVersion: "release",
            success: function(e) {
              console.log("navigateToMiniProgram res", e), wx.setStorageSync("s_001_yjm_checkin", r), a.setData({
                isShowModel_yjm_res: !0
              })
            }
          }) : wx.navigateToMiniProgram({
            appId: "wx9f75b01dcb4b1a79",
            path: g,
            extraData: {},
            envVersion: "release",
            success: function(e) {
              console.log("navigateToMiniProgram res", e), wx.setStorageSync("s_001_yjm_checkin", r), a.setData({
                isShowModel_yjm_res: !0
              })
            }
          }), e.abrupt("return");
        case 47:
          if ("-00000350001" != i.data[0].resp_code) {
            e.next = 51;
            break
          }
          wx.showModal({
            title: "提示",
            content: "请您再次入住登记",
            showCancel: !1,
            success: function(e) {}
          }), e.next = 59;
          break;
        case 51:
          if ("序列化出错" != i.data[0].resp_msg) {
            e.next = 57;
            break
          }
          return wx.navigateTo({
            url: "../form_join_rent_house/form?scene=" + a.data.rent_house_rec_id
          }), this.setData({
            isShowModel_yjm_res: !1
          }), e.abrupt("return");
        case 57:
          return wx.showModal({
            title: "非常抱歉，请点击确定后继续！",
            content: i.data[0].resp_msg + "(" + i.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {
              wx.navigateTo({
                url: "../form_join_rent_house/form?scene=" + a.data.rent_house_rec_id
              }), this.setData({
                isShowModel_yjm_res: !1
              })
            }
          }), e.abrupt("return");
        case 59:
          e.next = 67;
          break;
        case 61:
          return e.prev = 61, e.t0 = e.catch(11), wx.hideLoading(), console.log("e:", e.t0), wx.showModal({
            title: "提示(1684899044032)",
            content: "" + e.t0,
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 67:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [11, 61]
    ])
  }))), function() {
    return r.apply(this, arguments)
  }),
  go_search_house: (s = a(t().mark((function e() {
    var n, o, s, r, i, _, d;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (n = this, o = "wx472ec2a896271f64", s = "QRRent/pages/rentInfo/index", wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), r = wx.getStorageSync("openid"), i = wx.getStorageSync("unionid"), "" == r || null == r || null == r || "[object Undefined]" == r || "" == i || null == i || null == i || "[object Undefined]" == i) {
            e.next = 12;
            break
          }
          u.globalData.unionid = i, u.globalData.openid = r, e.next = 33;
          break;
        case 12:
          return e.prev = 12, e.next = 15, l.wx_login();
        case 15:
          if (_ = e.sent, console.log("login_result:", _), "000000000000" != _.data[0].resp_code) {
            e.next = 24;
            break
          }
          u.globalData.openid = _.data[1].openid, u.globalData.unionid = _.data[1].unionid, wx.setStorageSync("openid", u.globalData.openid), wx.setStorageSync("unionid", u.globalData.unionid), e.next = 26;
          break;
        case 24:
          return wx.showModal({
            title: "提示",
            content: _.data[0].resp_msg + "(" + _.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 26:
          e.next = 33;
          break;
        case 28:
          return e.prev = 28, e.t0 = e.catch(12), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 33:
          d = {
            openId: u.globalData.openid,
            oper_type: "INDEX"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: d,
            success: function() {
              var e = a(t().mark((function e(a) {
                var r, i, _;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", a), "000000000003" != a.data[0].resp_code) {
                        e.next = 12;
                        break
                      }
                      r = a.data[0].access_token, u.globalData.access_token = r, i = {}, null == u.globalData.SYSTEMINFO ? (i = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", i)) : i = u.globalData.SYSTEMINFO, _ = l.compareVersion(i.SDKVersion, "2.20.1"), console.log("diff_version_002", _, {
                        access_token: u.globalData.access_token,
                        rentHouseCode: n.data.rent_house_code
                      }), _ >= 0 ? wx.openEmbeddedMiniProgram({
                        appId: o,
                        path: s,
                        allowFullScreen: !0,
                        extraData: {
                          access_token: u.globalData.access_token,
                          rentHouseCode: n.data.rent_house_code
                        },
                        envVersion: "release",
                        success: function(e) {
                          console.log("navigateToMiniProgram res", e)
                        }
                      }) : wx.navigateToMiniProgram({
                        appId: o,
                        path: s,
                        extraData: {
                          access_token: u.globalData.access_token,
                          rentHouseCode: n.data.rent_house_code
                        },
                        envVersion: "release",
                        success: function(e) {
                          console.log("navigateToMiniProgram res", e)
                        }
                      }), e.next = 15;
                      break;
                    case 12:
                      return u.globalData.back_url = "INDEX", wx.showModal({
                        title: "平安码丨平安白云",
                        content: "白云e租房功能，需要您实名注册。",
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          1 == e.confirm && wx.navigateTo({
                            url: "../../../component/pages/form_ocr_01/form"
                          })
                        }
                      }), e.abrupt("return");
                    case 15:
                    case "end":
                      return e.stop()
                  }
                }), e)
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
          return e.abrupt("return");
        case 35:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [12, 28]
    ])
  }))), function() {
    return s.apply(this, arguments)
  }),
  sv_013_get_house_by_dzbm: (o = a(t().mark((function e() {
    var a, n, o, s;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return a = this, wx.showLoading({
            title: "请稍后..."
          }), n = {
            dzbm: this.data.this_options.dzbm,
            buzi_type: "JZW_DZBM"
          }, "ld" == this.data.this_options.bs && "" != this.data.this_options.mlpxxbm && null != this.data.this_options.mlpxxbm && null != this.data.this_options.mlpxxbm && "null" != this.data.this_options.mlpxxbm ? (n.dzbm = this.data.this_options.mlpxxbm, n.buzi_type = "MLP_DZBM") : "ld" == g_bs && (n.buzi_type = "JZW_DZBM"), console.log("sv_013_get_house_by_dzbm", n), e.next = 8, l.wx_request("https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_013_get_house_by_dzbm", n);
        case 8:
          o = e.sent, wx.hideLoading(), "000000000000" == o.data[0].resp_code ? (null != (s = o.data[0].room_name) && null != s || (s = ""), a.setData({
            address: o.data[0].address,
            community: o.data[0].community,
            street_name: o.data[0].street_name,
            room_name: s,
            attribute_recid_code: o.data[0].attribute_recid_code
          }), a.data.busi_type = o.data[0].fontend_busi_type, a.data.scene = o.data[0].scene, a.data.rent_house_rec_id = o.data[0].scene, a.data.rent_house_code = o.data[0].frontend_rent_house_code, a.data.room_code = o.data[0].frontend_rent_room_code) : (console.log("sv_013_get_house_by_dzbm err:", o), wx.showModal({
            title: "提示",
            content: o.data[0].resp_msg + o.data[0].resp_code,
            showCancel: !1
          }));
        case 11:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function() {
    return o.apply(this, arguments)
  }),
  select_garden_building: function(e) {
    this.setData({
      garden_full_street: e.currentTarget.dataset.item.addr_gz,
      garden_mp_address: e.currentTarget.dataset.item.addr_mp,
      itemIndex_garden_building: e.currentTarget.dataset.item.rent_house_rec_id
    }), this.data.rent_house_rec_id = e.currentTarget.dataset.item.rent_house_rec_id, this.data.house_number_code = e.currentTarget.dataset.item.house_number_code, console.log("select_garden_building", this.data.rent_house_rec_id, this.data.house_number_code)
  },
  bindinput_garden_building: function(e) {
    this.data.cur_page_garden_building = 1, this.data.garden_building_list = [], this.setData({
      key_word_garden_building: e.detail.value,
      garden_full_street: "请选择小区楼栋地址",
      garden_building_list: this.data.garden_building_list
    }), this.sv_015_get_garden_building()
  },
  bindblur_garden_building: function(e) {
    var t = e.detail.value;
    console.log("bindblur_garden_building", t), this.data.cur_page_garden_building = 1, this.data.garden_building_list = [], this.setData({
      key_word_garden_building: e.detail.value,
      garden_full_street: "请选择小区楼栋地址",
      garden_building_list: this.data.garden_building_list
    }), this.sv_015_get_garden_building()
  },
  bindblur_garden_room: function(e) {
    e.detail.value.length > 56 && wx.showToast({
      title: "具体去向不能超过55个字,已经自动截取",
      icon: "none",
      duration: 1500
    }), this.setData({
      key_word_garden_room: e.detail.value.substr(0, 55)
    })
  },
  sv_015_get_garden_building: (n = a(t().mark((function e() {
    var a, n, o, s, r;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return a = this, wx.showLoading({
            title: "请稍后..."
          }), n = {}, 6 == a.data.busi_type && (n.busi_type = "garden", n.scence = a.data.scene, n.cur_page = a.data.cur_page_garden_building, n.key_word = a.data.key_word_garden_building), console.log("sv_015_get_garden_building", n), e.next = 8, l.wx_request("https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_015_get_garden_building", n);
        case 8:
          if (o = e.sent, wx.hideLoading(), "000000000000" == o.data[0].resp_code) {
            for (a.data.total_page_garden_building = o.data[0].total_page, 0 == o.data[0].total_rec && wx.showToast({
                title: "搜索到0条记录",
                icon: "none",
                duration: 1500
              }), s = 1; s < o.data.length; s++) r = o.data[s], a.data.garden_building_list.push(r);
            a.setData({
              garden_building_list: a.data.garden_building_list
            })
          } else console.log("sv_015_get_garden_building err:", o), wx.showModal({
            title: "提示",
            content: o.data[0].resp_msg + o.data[0].resp_code,
            showCancel: !1
          });
        case 11:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function() {
    return n.apply(this, arguments)
  }),
  flashlist: function() {
    if (this.data.cur_page_garden_building = this.data.cur_page_garden_building + 1, this.data.cur_page_garden_building > this.data.total_page_garden_building) return wx.showToast({
      title: "已加载全部数据",
      icon: "none",
      duration: 1500
    }), void(this.data.cur_page_garden_building = this.data.total_page_garden_building);
    this.sv_015_get_garden_building()
  },
  submit_garden_building: function() {
    "" != this.data.garden_full_street && "请选择小区楼栋地址" != this.data.garden_full_street ? this.after_read_letter_then_join() : wx.showToast({
      title: "请选择小区楼栋地址",
      icon: "none",
      duration: 1500
    })
  },
  garden_visit: function() {
    if (6 == this.data.busi_type) return this.data.cur_page_garden_building = 1, this.data.key_word_garden_building = "", this.data.garden_building_list = [{
      addr_mp: "本小区",
      addr_gz: this.data.garden_name,
      rent_house_rec_id: "0000"
    }], this.sv_015_get_garden_building(), this.setData({
      show_garden_building: !0,
      garden_building_list: this.data.garden_building_list,
      garden_visit_show: !0
    }), void(this.data.show_paby_check_in = !0)
  },
  garden_building_visit: function() {
    if ("" != this.data.garden_full_street && "请选择小区楼栋地址" != this.data.garden_full_street)
      if ("" != this.data.key_word_garden_room)
        if (this.data.key_word_garden_room.length > 55) wx.showToast({
          title: "具体去向不能超过55个字",
          icon: "none",
          duration: 1500
        });
        else {
          var e = "/page/component/pages/pass_document_green/component?encry_id=" + this.data.scene + "&busi_type=6&cry_type=plain_text&show_type=VISIT_HOUSE&rent_house_code=" + this.data.rent_house_code + "&info=" + this.data.key_word_garden_room;
          console.log("jump_url", e), wx.redirectTo({
            url: e
          })
        }
    else wx.showToast({
      title: "请输入具体去向！",
      icon: "none",
      duration: 1500
    });
    else wx.showToast({
      title: "请选择小区楼栋地址！",
      icon: "none",
      duration: 1500
    })
  }
});