var e, t, a, r = require("../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../../../util/util.js"),
  s = (require("../../../../config.js"), require("../../../../util/rsa_encry.js")),
  c = getApp();
Page({
  data: {
    data_list: [],
    tempDataList: [],
    top_list: [],
    search: "",
    query_registered_residence: "https://qv1.pinganbaiyun.cn/img/img_012_online_buzi/query_registered_residence.png",
    temporary_residence_permit: "https://qv1.pinganbaiyun.cn/img/img_012_online_buzi/temporary_residence_permit.png",
    house_number_type: "https://qv1.pinganbaiyun.cn/img/img_012_online_buzi/house_number_type.png",
    show_apply_person_type: !1,
    select_query_type: !1,
    show_border_cert_sel: !1,
    radio_checked1: !1,
    radio_checked2: !1,
    radio_text: "",
    residence_permit_select_type: !1,
    residence_permit_checked1: !1,
    residence_permit_checked2: !1,
    residence_permit_text: "",
    number_type: !1,
    number_type_datalist: [{
      title: "正式门牌申请",
      title_name: "新编门楼号牌",
      checked: !1
    }, {
      title: "临时门牌申请",
      title_name: "新编门楼号牌",
      checked: !1
    }, {
      title: "临时门牌转正式门牌",
      title_name: "新编门楼号牌",
      checked: !1
    }, {
      title: "临时门牌变更",
      title_name: "",
      checked: !1
    }, {
      title: "正式门牌变更",
      title_name: "",
      checked: !1
    }, {
      title: "门楼号牌补录",
      title_name: "",
      checked: !1
    }, {
      title: "补领门楼号牌",
      title_name: "",
      checked: !1
    }, {
      title: "注销门楼号牌",
      title_name: "",
      checked: !1
    }, {
      title: "门楼号牌证明出具",
      title_name: "",
      checked: !1
    }],
    number_title: "",
    number_index: "",
    show_visitor_modal: !1,
    role_header: ""
  },
  onLoad: function(e) {
    console.log("onload 1725431379478", c.globalData.access_token), this.get_data()
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  handleSearch: function(e) {
    this.data.search = e.detail.value, 0 == this.data.search.length && this.setData({
      search: ""
    })
  },
  doneSearch: function() {
    wx.hideKeyboard();
    if (this.data.cur_page = 1, this.data.data_list.length > 0 && this.data.search.length > 0) {
      var e = function(e, t) {
        for (var a = [], r = e.charAt(0), n = e.length, i = 0; i < t.length; i++) {
          var o = t[i],
            s = !1;
          for (var c in o)
            if ("function" == typeof o[c]) o[c]();
            else {
              var _ = "";
              null != o[c] && (_ = o[c]);
              for (var d = 0; d < _.length; d++)
                if (_.charAt(d) == r && _.substring(d).substring(0, n) == e) {
                  s = !0;
                  break
                }
            } s && a.push(o)
        }
        return a
      }(this.data.search, this.data.data_list);
      console.log("tempArr233:", e), this.setData({
        search: this.data.search,
        tempDataList: e
      })
    } else this.setData({
      search: this.data.search,
      tempDataList: this.data.data_list
    })
  },
  get_data: function() {
    var e = this;
    return i(n().mark((function t() {
      var a, r, i, o, _;
      return n().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return a = e, r = {}, i = JSON.stringify(r), t.next = 5, s.encrypt_rsa_fun(i);
          case 5:
            o = t.sent, _ = JSON.stringify({
              key: o
            }), wx.showLoading(), "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_001/get_index_search_data", wx.request({
              url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_001/get_index_search_data",
              method: "POST",
              data: _,
              header: {
                "Content-type": "application/json",
                cloud_shield_token: c.globalData.access_token
              },
              success: function(e) {
                if (wx.hideLoading(), "000000000000" == e.data[0].resp_code) {
                  var t = e.data[0].data_list,
                    r = [];
                  if (t.length > 7)
                    for (var n = 0; n < 7; n++) {
                      var i = t[n];
                      r.push(i)
                    } else r = t;
                  a.setData({
                    top_list: r
                  }), a.data.data_list = t
                } else wx.showModal({
                  title: "提示",
                  content: e.data[0].resp_msg,
                  showCancel: !1
                })
              },
              fail: function(e) {
                wx.hideLoading(), wx.showModal({
                  title: "提示",
                  content: "网络错误",
                  showCancel: !1
                })
              }
            });
          case 10:
          case "end":
            return t.stop()
        }
      }), t)
    })))()
  },
  item_click: function(e) {
    var t = e.currentTarget.dataset.item,
      a = t.title;
    (console.log("1725871380522", t, a), "查询户籍档案" != a) ? "边防证申请" != a ? this.getOpenerEventChannel().emit("callback_search_result", {
      item: a,
      big_item: t.sub_title
    }) : this.border_defense_certificate(): this.setData({
      show_apply_person_type: !0,
      select_query_type: !0
    })
  },
  radio_click1: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      radio_text: e.currentTarget.dataset.text,
      radio_checked1: !0,
      radio_checked2: !1
    })
  },
  radio_click2: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      radio_text: e.currentTarget.dataset.text,
      radio_checked1: !1,
      radio_checked2: !0
    })
  },
  border_radio_click1: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      border_radio_text: e.currentTarget.dataset.text,
      border_radio_checked1: !0,
      border_radio_checked2: !1
    })
  },
  border_radio_click2: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      border_radio_text: e.currentTarget.dataset.text,
      border_radio_checked1: !1,
      border_radio_checked2: !0
    })
  },
  border_next_one: function() {
    var e = this;
    return i(n().mark((function t() {
      var a;
      return n().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if ("" != e.data.border_radio_text) {
              t.next = 3;
              break
            }
            return wx.showToast({
              title: "请选择办理身份!",
              icon: "none",
              duration: 1500
            }), t.abrupt("return");
          case 3:
            a = e, wx.setStorageSync("access_token", c.globalData.access_token), wx.setStorageSync("openid", c.globalData.openid), a.guabi_select_query(), wx.navigateTo({
              url: "../../../../module_003_online_buzi/p_001_online_buzi/Border_defense_certificate1/Border_defense_certificate1?selected_text=" + a.data.border_radio_text
            });
          case 8:
          case "end":
            return t.stop()
        }
      }), t)
    })))()
  },
  next_one: function() {
    var e = this;
    return i(n().mark((function t() {
      var a;
      return n().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (a = e, "" != e.data.radio_text) {
              t.next = 4;
              break
            }
            return wx.showToast({
              title: "请选择办理身份!",
              icon: "none",
              duration: 1e3
            }), t.abrupt("return");
          case 4:
            if (wx.setStorageSync("access_token", c.globalData.access_token), wx.setStorageSync("openid", c.globalData.openid), "人员查询" != a.data.radio_text) {
              t.next = 12;
              break
            }
            return wx.navigateTo({
              url: "../../../../module_003_online_buzi/p_001_online_buzi/Personal_inquiry1/Personal_inquiry1"
            }), a.setData({
              show_apply_person_type: !1,
              select_query_type: !1,
              radio_checked1: !1,
              radio_text: ""
            }), t.abrupt("return");
          case 12:
            return wx.navigateTo({
              url: "../../../../module_003_online_buzi/p_001_online_buzi/Unit_query1/Unit_query1"
            }), a.setData({
              show_apply_person_type: !1,
              select_query_type: !1,
              radio_checked2: !1,
              radio_text: ""
            }), t.abrupt("return");
          case 15:
          case "end":
            return t.stop()
        }
      }), t)
    })))()
  },
  border_defense_certificate: function() {
    this.setData({
      show_apply_person_type: !0,
      show_border_cert_sel: !0
    })
  },
  radio_residence_click1: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      residence_permit_text: e.currentTarget.dataset.text,
      residence_permit_checked1: !0,
      residence_permit_checked2: !1
    })
  },
  radio_residence_click2: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      residence_permit_text: e.currentTarget.dataset.text,
      residence_permit_checked1: !1,
      residence_permit_checked2: !0
    })
  },
  next_one_two: function() {
    if ("" != this.data.residence_permit_text) {
      var e = 1;
      return 2 == (e = "线上申请" == this.data.residence_permit_text ? 2 : 1) ? void wx.showToast({
        title: "线上申请功能暂不开放!",
        icon: "none",
        duration: 1e3
      }) : (wx.navigateTo({
        url: "../../../../module_003_online_buzi/p_001_online_buzi/Temporary_residence_permit1/Temporary_residence_permit1?apply_type=" + e
      }), void this.setData({
        show_apply_person_type: !1,
        residence_permit_select_type: !1,
        residence_permit_checked1: !1,
        residence_permit_checked2: !1,
        residence_permit_text: ""
      }))
    }
    wx.showToast({
      title: "请选择办理身份!",
      icon: "none",
      duration: 1e3
    })
  },
  number_radio: function(e) {
    console.log(e.currentTarget.dataset);
    var t = e.currentTarget.dataset.title,
      a = e.currentTarget.dataset.index,
      r = this.data.number_type_datalist;
    r.forEach((function(e) {
      t == e.title ? e.checked = !0 : e.checked = !1
    })), this.setData({
      number_title: t,
      number_type_datalist: r,
      number_index: a
    })
  },
  number_btn: function() {
    var e = this;
    return i(n().mark((function t() {
      var a, r, i;
      return n().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (a = e.data.number_title, r = e.data.number_index + 1, "" != a) {
              t.next = 5;
              break
            }
            return wx.showToast({
              title: "请选择申请类型",
              icon: "none",
              duration: 1e3
            }), t.abrupt("return");
          case 5:
            i = e, wx.setStorageSync("access_token", c.globalData.access_token), wx.setStorageSync("openid", c.globalData.openid), i.setData({
              number_type: !1,
              show_apply_person_type: !1
            }), wx.navigateTo({
              url: "../../../../module_003_online_buzi/p_001_online_buzi/House_number1/House_number1?number_index=" + r
            });
          case 10:
          case "end":
            return t.stop()
        }
      }), t)
    })))()
  },
  guabi_select_query: function() {
    var e = this.data.number_type_datalist;
    e.forEach((function(e) {
      e.checked = !1
    })), this.setData({
      show_border_cert_sel: !1,
      select_query_type: !1,
      show_apply_person_type: !1,
      radio_text: "",
      radio_checked1: !1,
      radio_checked2: !1,
      residence_permit_select_type: !1,
      residence_permit_checked1: !1,
      residence_permit_checked2: !1,
      residence_permit_text: "",
      number_type: !1,
      number_title: "",
      number_type_datalist: e
    })
  },
  go_rent_house: (a = i(n().mark((function e(t, a) {
    var r, i, o, s, c, _, d, u, l, p, x, h, g, b, f, m, w, k, y;
    return n().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if ("electric" != t) {
            e.next = 10;
            break
          }
          return r = "jump_to=GO_ELECTRIC_METER@@@", i = {}, o = JSON.stringify(i), s = "../../../third_part/pages/rent_house/form?" + (r += o), wx.navigateTo({
            url: s
          }), e.abrupt("return");
        case 10:
          if ("electric_policy" != t) {
            e.next = 20;
            break
          }
          return r = "jump_to=GO_ELECTRIC_POLICY@@@", c = {}, _ = JSON.stringify(c), s = "../../../third_part/pages/rent_house/form?" + (r += _), wx.navigateTo({
            url: s
          }), e.abrupt("return");
        case 20:
          if ("GO_ELECTRIC_METER_FAULT" != t) {
            e.next = 30;
            break
          }
          return r = "jump_to=GO_ELECTRIC_METER_FAULT@@@", d = {}, u = JSON.stringify(d), s = "../../../third_part/pages/rent_house/form?" + (r += u), wx.navigateTo({
            url: s
          }), e.abrupt("return");
        case 30:
          if ("GO_ELECTRIC_METER_BIND" != t) {
            e.next = 40;
            break
          }
          return r = "jump_to=GO_ELECTRIC_METER_BIND@@@", l = {}, p = JSON.stringify(l), s = "../../../third_part/pages/rent_house/form?" + (r += p), wx.navigateTo({
            url: s
          }), e.abrupt("return");
        case 40:
          if ("GO_ELECTRIC_METER_PROVE" != t) {
            e.next = 50;
            break
          }
          return r = "jump_to=GO_ELECTRIC_METER_PROVE@@@", x = {}, h = JSON.stringify(x), s = "../../../third_part/pages/rent_house/form?" + (r += h), wx.navigateTo({
            url: s
          }), e.abrupt("return");
        case 50:
          if ("grid_qrcode_add_member" != t) {
            e.next = 60;
            break
          }
          return r = "jump_to=GO_GRID_QRCODE_ADD@@@", g = {
            data: a
          }, b = JSON.stringify(g), s = "../../../third_part/pages/rent_house/form?" + (r += b), wx.navigateTo({
            url: s
          }), e.abrupt("return");
        case 60:
          if ("work_upload_location" != t) {
            e.next = 66;
            break
          }
          return f = "../../../../module_004/work_upload_location/index?access_token=" + access_token, wx.navigateTo({
            url: f
          }), e.abrupt("return");
        case 66:
          if ("welcome_to_baiyun" != t) {
            e.next = 77;
            break
          }
          return (m = {}).buzi_type = "welcome_to_baiyun", w = JSON.stringify(m), k = "../../../third_part/pages/rent_house/form?jump_to=GO_RENTER_INDEX@@@params:" + w, k = encodeURI(k), console.log("jump_url", k), wx.navigateTo({
            url: k
          }), e.abrupt("return");
        case 77:
          if ("admin_house" != t) {
            e.next = 85;
            break
          }
          return y = "../../../third_part/pages/rent_house/form?jump_to=HOUSE_LIST", y = encodeURI(y), console.log("jump_url", y), wx.navigateTo({
            url: y
          }), e.abrupt("return");
        case 85:
          return wx.navigateTo({
            url: "../../../third_part/pages/rent_house/form"
          }), e.abrupt("return");
        case 87:
        case "end":
          return e.stop()
      }
    }), e)
  }))), function(e, t) {
    return a.apply(this, arguments)
  }),
  f_002_go_mini_app: (t = i(n().mark((function e(t) {
    var a, r, i, s, _;
    return n().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (console.log("f_002_go_mini_app", t), console.log("buzi_type", t), a = "", r = "", i = {}, "conflict" != t) {
            e.next = 13;
            break
          }
          a = "wx414ae04ac3f10b4e", r = "pages/homePage/index", e.next = 148;
          break;
        case 13:
          if ("tree_hole" != t) {
            e.next = 19;
            break
          }
          a = "wx8ad44b341355ba18", r = "/pages/index", e.next = 148;
          break;
        case 19:
          if ("listen_heard" != t) {
            e.next = 25;
            break
          }
          a = "wx8ad44b341355ba18", r = "/circlePages/edit", e.next = 148;
          break;
        case 25:
          if ("mind_test" != t) {
            e.next = 31;
            break
          }
          a = "wx8ad44b341355ba18", r = "/discoverPages/heart_test", e.next = 148;
          break;
        case 31:
          if ("mind_help" != t) {
            e.next = 37;
            break
          }
          a = "wx8ad44b341355ba18", r = "/helpPages/submit", e.next = 148;
          break;
        case 37:
          if ("recycle" != t) {
            e.next = 43;
            break
          }
          a = "wx43c553dcf4ebb9a8", r = "/pages/index/index?access_token=" + c.globalData.access_token, e.next = 148;
          break;
        case 43:
          if ("by_grid_index" != t) {
            e.next = 49;
            break
          }
          a = "wx1e4e8184a3f2d838", r = "pages/index/index", e.next = 148;
          break;
        case 49:
          if ("grid_clue" != t) {
            e.next = 56;
            break
          }
          a = "wx1e4e8184a3f2d838", r = "pages/index/index", i.redirect = "GridmanReport", e.next = 148;
          break;
        case 56:
          if ("grid_billboard" != t) {
            e.next = 63;
            break
          }
          a = "wx1e4e8184a3f2d838", r = "pages/index/index", i.redirect = "Grid", e.next = 148;
          break;
        case 63:
          if ("grid_address_search" != t) {
            e.next = 70;
            break
          }
          a = "wx1e4e8184a3f2d838", r = "pages/index/index", i.redirect = "QueryAddress", e.next = 148;
          break;
        case 70:
          if ("search_house" != t) {
            e.next = 76;
            break
          }
          a = "wx472ec2a896271f64", r = "pages/view/rentIndex/index", e.next = 148;
          break;
        case 76:
          if ("search_house_easy_rent" != t) {
            e.next = 82;
            break
          }
          a = "wx472ec2a896271f64", r = "pages/view/rentIndex/search/index?search=true&manageType=2", e.next = 148;
          break;
        case 82:
          if ("search_house_shop_rent" != t) {
            e.next = 88;
            break
          }
          a = "wx472ec2a896271f64", r = "Business/pages/shop/index?type=shop", e.next = 148;
          break;
        case 88:
          if ("search_house_reading_office" != t) {
            e.next = 94;
            break
          }
          a = "wx472ec2a896271f64", r = "Business/pages/shop/index?type=office  ", e.next = 148;
          break;
        case 94:
          if ("gov_hall" != t) {
            e.next = 101;
            break
          }
          a = "wx939c5e9d180aaa1a", r = "pages/index/index", console.log("miniprogram_appid", a), e.next = 148;
          break;
        case 101:
          if ("people_fair" != t) {
            e.next = 107;
            break
          }
          a = "wxe7aafa8ad82141d0", r = "", e.next = 148;
          break;
        case 107:
          if ("release_wast_water_index" != t) {
            e.next = 113;
            break
          }
          a = "wx939c5e9d180aaa1a", r = "/pages2/paishui/paishui", e.next = 148;
          break;
        case 113:
          if ("release_wast_water_concat" != t) {
            e.next = 119;
            break
          }
          a = "wx939c5e9d180aaa1a", r = "/pages2/paishui/paishui", e.next = 148;
          break;
        case 119:
          if ("release_wast_water_new" != t) {
            e.next = 125;
            break
          }
          a = "wx939c5e9d180aaa1a", r = "/pages2/paishui/paishui", e.next = 148;
          break;
        case 125:
          if ("release_wast_water_update" != t) {
            e.next = 131;
            break
          }
          a = "wx939c5e9d180aaa1a", r = "/pages2/paishui/paishui", e.next = 148;
          break;
        case 131:
          if ("market_admin_index" != t && "market_admin_food_shop" != t) {
            e.next = 137;
            break
          }
          return wx.navigateTo({
            url: "../../../../module_002_fda/p_001_fda/index/index"
          }), e.abrupt("return");
        case 137:
          if ("market_admin_leagal_person_confirm" != t) {
            e.next = 142;
            break
          }
          return wx.navigateTo({
            url: "../../../../module_002_fda/p_001_fda/cloud_comfirm/index/index"
          }), e.abrupt("return");
        case 142:
          if ("market_admin_online_meeting" != t) {
            e.next = 147;
            break
          }
          return this.online_hearing_event(), e.abrupt("return");
        case 147:
          "hospital" == t ? (a = "wx753d89cad9761e41", r = "/intel_hospital/drill/pages/drillPage/index") : "baiyun_news" == t && (a = "wx329a27ee2e3b61d0", r = "");
        case 148:
          i.access_token = c.globalData.access_token, s = {}, null == c.globalData.SYSTEMINFO ? (s = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", s)) : s = c.globalData.SYSTEMINFO, _ = o.compareVersion(s.SDKVersion, "2.20.1"), console.log("diff_version_002", _, a, r, i), _ >= 0 ? wx.openEmbeddedMiniProgram({
            appId: a,
            path: r,
            allowFullScreen: !0,
            extraData: i,
            envVersion: "release",
            success: function(e) {
              console.log("openEmbeddedMiniProgram res", e)
            }
          }) : wx.navigateToMiniProgram({
            appId: a,
            path: r,
            extraData: i,
            envVersion: "release",
            success: function(e) {
              console.log("navigateToMiniProgram res", e)
            }
          });
        case 154:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(e) {
    return t.apply(this, arguments)
  }),
  go_book_live_card: (e = i(n().mark((function e() {
    var t, a, r, i, s, _;
    return n().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return e.prev = 0, wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), t = {
            buzi_type: "show_yjm_code"
          }, e.next = 6, o.wx_request("https://xcx.pinganbaiyun.cn/health_passport/api_004_motorcycles/sv_001_get_gd_security_authcode", t);
        case 6:
          if (a = e.sent, wx.hideLoading(), "000000000000" != a.data[0].resp_code) {
            e.next = 20;
            break
          }
          return r = a.data[0].code, i = "pages/common/thirdPartyRouter/thirdPartyRouter?feat=credentials&refer=paby&authcode=" + r, console.log("粤居码办理居住证path", i), s = {}, null == c.globalData.SYSTEMINFO ? (s = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", s)) : s = c.globalData.SYSTEMINFO, _ = o.compareVersion(s.SDKVersion, "2.20.1"), console.log("diff_version_1695095856167", _), _ >= 0 ? wx.openEmbeddedMiniProgram({
            appId: "wx9f75b01dcb4b1a79",
            path: i,
            allowFullScreen: !0,
            extraData: {},
            envVersion: "release",
            success: function(e) {
              console.log("navigateToMiniProgram res", e)
            }
          }) : wx.navigateToMiniProgram({
            appId: "wx9f75b01dcb4b1a79",
            path: i,
            extraData: {},
            envVersion: "release",
            success: function(e) {
              console.log("navigateToMiniProgram res", e)
            }
          }), e.abrupt("return");
        case 20:
          if ("-00000350001" != a.data[0].resp_code) {
            e.next = 24;
            break
          }
          wx.showModal({
            title: "提示",
            content: "请您再次操作",
            showCancel: !1,
            success: function(e) {}
          }), e.next = 26;
          break;
        case 24:
          return wx.showModal({
            title: "粤居码居住证办理提示",
            content: "系统异常，请稍后再试！",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 26:
          e.next = 34;
          break;
        case 28:
          return e.prev = 28, e.t0 = e.catch(0), wx.hideLoading(), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 34:
        case "end":
          return e.stop()
      }
    }), e, null, [
      [0, 28]
    ])
  }))), function() {
    return e.apply(this, arguments)
  }),
  jump_policing_room: function() {
    wx.setStorageSync("access_token", c.globalData.access_token), wx.setStorageSync("openid", c.globalData.openid), wx.navigateTo({
      url: "/module_004/p_003_policing_room/index/index"
    })
  },
  go_clue_report: function(e) {
    var t = "../../../../page/strike_black/form?scene=111";
    1 == e && (t += "&fireworks=1"), wx.navigateTo({
      url: t
    })
  },
  go_clue_report2: function() {
    wx.navigateTo({
      url: "./my_02"
    })
  },
  go_smallest_unit: function(e) {
    var t = "";
    t = "object" == r(e) ? e.currentTarget.dataset.index : e;
    var a = {};
    null == c.globalData.SYSTEMINFO ? (a = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", a)) : a = c.globalData.SYSTEMINFO;
    var n = o.compareVersion(a.SDKVersion, "2.20.1");
    console.log("diff_version 1703057417312", n);
    var i = !1;
    n >= 0 && (i = !0);
    var s = "";
    0 == t ? s = "pages/yuejuma/nav/index?lb=3" : 1 == t ? s = "pages/yuejuma/nav/index?lb=2" : 2 == t ? s = "pages/yuejuma/nav/index?lb=1" : 3 == t && (s = "pages/yuejuma/nav/index?lb=4"), console.log(t, s), 1 == i ? wx.openEmbeddedMiniProgram({
      appId: "wx6312c9a023ebb038",
      path: s,
      allowFullScreen: !0,
      extraData: {},
      envVersion: "release",
      success: function(e) {
        console.log("navigateToMiniProgram res", e)
      }
    }) : wx.navigateToMiniProgram({
      appId: "wx6312c9a023ebb038",
      path: s,
      extraData: {},
      envVersion: "release",
      success: function(e) {
        console.log("navigateToMiniProgram res", e)
      }
    })
  },
  go_visitor: function() {
    this.setData({
      show_visitor_modal: !0
    })
  }
});