var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/asyncToGenerator");
! function(e, a) {
  if (!a && e && e.__esModule) return e;
  if (null === e || "object" != typeof e && "function" != typeof e) return {
    default: e
  };
  var n = t(a);
  if (n && n.has(e)) return n.get(e);
  var o = {},
    s = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var r in e)
    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
      var i = s ? Object.getOwnPropertyDescriptor(e, r) : null;
      i && (i.get || i.set) ? Object.defineProperty(o, r, i) : o[r] = e[r]
    } o.default = e, n && n.set(e, o)
}(require("../../../../util/regenerator-runtime/runtime"));

function t(e) {
  if ("function" != typeof WeakMap) return null;
  var a = new WeakMap,
    n = new WeakMap;
  return (t = function(e) {
    return e ? n : a
  })(e)
}
var n, o, s = require("../../../../util/util.js"),
  r = (require("../../../../config.js"), require("../../../../util/rsa_encry.js"), getApp());
Page({
  data: {
    show_rent_house: !0,
    show_go_app: !0,
    show_go_app_002: !0,
    show_go_app_003: !0,
    show_go_app_004: !0,
    show_go_app_005: !0,
    show_go_app_006: !0,
    show_go_app_007: !0,
    show_webview: !1,
    src: ""
  },
  onLoad: function(e) {
    var a = e.buzi_type;
    if (console.log("optionsoptions", e), "market_admin_index" !== a && "market_admin_food_shop" !== a) return "market_admin_leagal_person_confirm" === a ? (s.save_redis("网监云确认"), void wx.navigateTo({
      url: "../../../../module_002_fda/p_001_fda/cloud_comfirm/index/index"
    })) : "market_admin_online_meeting" === a ? (s.save_redis("网上听证"), void this.online_hearing_event()) : void 0;
    s.save_redis("食品经营");
    wx.navigateTo({
      url: "../../../../module_002_fda/p_001_fda/index/index"
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  go_rent_house: (o = a(e().mark((function a(t, n) {
    var o, i, _, c, d, l;
    return e().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (console.log("go_rent_house", t), o = t.currentTarget.dataset.buziType, console.log("go_rent_house buzi_type", o), null != (i = o) && null != i && "" != i || (i = t), wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), _ = wx.getStorageSync("openid"), c = wx.getStorageSync("unionid"), "" == _ || null == _ || null == _ || "[object Undefined]" == _ || "" == c || null == c || null == c || "[object Undefined]" == c) {
            e.next = 17;
            break
          }
          r.globalData.unionid = c, r.globalData.openid = _, e.next = 38;
          break;
        case 17:
          return e.prev = 17, e.next = 20, s.wx_login();
        case 20:
          if (d = e.sent, console.log("login_result:", d), "000000000000" != d.data[0].resp_code) {
            e.next = 29;
            break
          }
          r.globalData.openid = d.data[1].openid, r.globalData.unionid = d.data[1].unionid, wx.setStorageSync("openid", r.globalData.openid), wx.setStorageSync("unionid", r.globalData.unionid), e.next = 31;
          break;
        case 29:
          return wx.showModal({
            title: "提示",
            content: d.data[0].resp_msg + "(" + d.data[0].resp_code + ")",
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
          l = {
            openId: r.globalData.openid,
            oper_type: "RENT_HOUSE"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: l,
            success: function(e) {
              if (wx.hideLoading(), console.log("检查进度结果", e), "000000000003" == e.data[0].resp_code) {
                var a = e.data[0].access_token;
                if (r.globalData.access_token = a, "renter_house" == o) {
                  s.save_redis("我的家");
                  var t = {
                      buzi_type: "welcome_to_baiyun"
                    },
                    n = "../../../third_part/pages/rent_house/form?jump_to=GO_RENTER_INDEX@@@params:" + JSON.stringify(t);
                  return n = encodeURI(n), console.log("jump_url", n), void wx.navigateTo({
                    url: n
                  })
                }
                if ("admin_house" == o) {
                  s.save_redis("管理员");
                  var _ = "../../../third_part/pages/rent_house/form?jump_to=HOUSE_LIST";
                  return _ = encodeURI(_), console.log("jump_url", _), void wx.navigateTo({
                    url: _
                  })
                }
                if ("electric" == i) {
                  s.save_redis("供电服务");
                  var c = "jump_to=GO_ELECTRIC_METER@@@",
                    d = "../../../third_part/pages/rent_house/form?" + (c += JSON.stringify({}));
                  return void wx.navigateTo({
                    url: d
                  })
                }
                return "electric_policy" == i ? (s.save_redis("供电政策"), c = "jump_to=GO_ELECTRIC_POLICY@@@", d = "../../../third_part/pages/rent_house/form?" + (c += JSON.stringify({})), void wx.navigateTo({
                  url: d
                })) : "GO_ELECTRIC_METER_FAULT" == i ? (s.save_redis("停电报障"), c = "jump_to=GO_ELECTRIC_METER_FAULT@@@", d = "../../../third_part/pages/rent_house/form?" + (c += JSON.stringify({})), void wx.navigateTo({
                  url: d
                })) : "GO_ELECTRIC_METER_PROVE" == i ? (s.save_redis("接入证明申请"), c = "jump_to=GO_ELECTRIC_METER_PROVE@@@", d = "../../../third_part/pages/rent_house/form?" + (c += JSON.stringify({})), void wx.navigateTo({
                  url: d
                })) : "GO_ELECTRIC_METER_BIND" == i ? (s.save_redis("电表绑定"), c = "jump_to=GO_ELECTRIC_METER_BIND@@@", d = "../../../third_part/pages/rent_house/form?" + (c += JSON.stringify({})), void wx.navigateTo({
                  url: d
                })) : (s.save_redis("安居助手"), void wx.navigateTo({
                  url: "../../../third_part/pages/rent_house/form"
                }))
              }
              return r.globalData.back_url = "RENT_HOUSE", void wx.showModal({
                title: "安居助手",
                content: "体验房屋自主申报及住宿自助登记功能，需要您实名注册。",
                showCancel: !0,
                cancelText: "暂不注册",
                confirmText: "现在注册",
                success: function(e) {
                  1 == e.confirm && wx.navigateTo({
                    url: "../../../component/pages/form_ocr_01/form"
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
        case 39:
        case "end":
          return e.stop()
      }
    }), a, this, [
      [17, 33]
    ])
  }))), function(e, a) {
    return o.apply(this, arguments)
  }),
  f_001_vistor: function() {
    wx.showToast({
      title: "来访登记开发中...",
      icon: "none",
      duration: 1e3,
      mask: !1,
      success: function() {},
      fail: function() {},
      complete: function() {}
    })
  },
  f_002_go_mini_app: (n = a(e().mark((function t(n) {
    var o, i, _, c, d, l, u, p, g, h;
    return e().wrap((function(t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (console.log("f_002_go_mini_app", n), o = n.currentTarget.dataset.buziType, console.log("buzi_type", o), i = "", _ = "", c = "", d = {}, "conflict" != o) {
            t.next = 15;
            break
          }
          i = "wx414ae04ac3f10b4e", _ = "pages/homePage/index", s.save_redis("矛盾化解"), c = "体验矛盾化解功能，需要您实名注册。", t.next = 187;
          break;
        case 15:
          if ("tree_hole" != o) {
            t.next = 22;
            break
          }
          i = "wx8ad44b341355ba18", _ = "/pages/index", c = "体验倾听树洞功能，需要您实名注册。", s.save_redis("心理服务"), t.next = 187;
          break;
        case 22:
          if ("listen_heard" != o) {
            t.next = 29;
            break
          }
          s.save_redis("心声倾诉"), i = "wx8ad44b341355ba18", _ = "/circlePages/edit", c = "体验倾听树洞功能，需要您实名注册。", t.next = 187;
          break;
        case 29:
          if ("mind_test" != o) {
            t.next = 36;
            break
          }
          i = "wx8ad44b341355ba18", _ = "/discoverPages/heart_test", c = "体验倾听树洞功能，需要您实名注册。", s.save_redis("心理测评"), t.next = 187;
          break;
        case 36:
          if ("mind_help" != o) {
            t.next = 43;
            break
          }
          i = "wx8ad44b341355ba18", _ = "/helpPages/submit", c = "体验倾听树洞功能，需要您实名注册。", s.save_redis("专业求助"), t.next = 187;
          break;
        case 43:
          if ("recycle" != o) {
            t.next = 50;
            break
          }
          s.save_redis("垃圾分类"), i = "wx43c553dcf4ebb9a8", _ = "/pages/index/index?access_token=" + r.globalData.access_token, c = "体验垃圾分类功能，需要您实名注册。", t.next = 187;
          break;
        case 50:
          if ("home_gas_check" != o) {
            t.next = 58;
            break
          }
          s.save_redis("燃气屋主自检"), i = "wx43c553dcf4ebb9a8", _ = "pages/gas/gasCheck/index", r.globalData.access_token, c = "体验燃气屋主自检功能，需要您实名注册。", t.next = 187;
          break;
        case 58:
          if ("by_grid_index" != o) {
            t.next = 65;
            break
          }
          i = "wx1e4e8184a3f2d838", _ = "pages/index/index", c = "体验网格服务功能，需要您实名注册。", s.save_redis("网格服务"), t.next = 187;
          break;
        case 65:
          if ("grid_clue" != o) {
            t.next = 73;
            break
          }
          s.save_redis("报线索"), i = "wx1e4e8184a3f2d838", _ = "pages/index/index", c = "体验网格服务功能，需要您实名注册。", d.redirect = "GridmanReport", t.next = 187;
          break;
        case 73:
          if ("grid_billboard" != o) {
            t.next = 81;
            break
          }
          s.save_redis("网格公示牌"), i = "wx1e4e8184a3f2d838", _ = "pages/index/index", c = "体验网格服务功能，需要您实名注册。", d.redirect = "Grid", t.next = 187;
          break;
        case 81:
          if ("home_gas_check" != o) {
            t.next = 88;
            break
          }
          s.save_redis("燃气屋主自检"), i = "wx43c553dcf4ebb9a8", _ = "pages/gas/gasCheck/index", c = "体验燃气屋主自检功能，需要您实名注册。", t.next = 187;
          break;
        case 88:
          if ("grid_address_search" != o) {
            t.next = 96;
            break
          }
          s.save_redis("地址查询"), i = "wx1e4e8184a3f2d838", _ = "pages/index/index", c = "体验网格服务功能，需要您实名注册。", d.redirect = "QueryAddress", t.next = 187;
          break;
        case 96:
          if ("search_house" != o) {
            t.next = 103;
            break
          }
          s.save_redis("白云租房"), i = "wx472ec2a896271f64", _ = "pages/view/rentIndex/index", c = "体验白云租房功能，需要您实名注册。", t.next = 187;
          break;
        case 103:
          if ("search_house_index" != o) {
            t.next = 110;
            break
          }
          s.save_redis("白云租房首页"), i = "wx472ec2a896271f64", _ = "/pages/view/rentIndex/index", c = "体验白云租房功能，需要您实名注册。", t.next = 187;
          break;
        case 110:
          if ("search_house_easy_rent" != o) {
            t.next = 117;
            break
          }
          s.save_redis("省心租"), i = "wx472ec2a896271f64", _ = "/pages/view/rentIndex/search/index", c = "体验白云租房省心租功能，需要您实名注册。", t.next = 187;
          break;
        case 117:
          if ("search_house_I_want" != o) {
            t.next = 124;
            break
          }
          s.save_redis("我要找房"), i = "wx472ec2a896271f64", _ = "/pages/transfer/index", c = "体验我要找房功能，需要您实名注册。", t.next = 187;
          break;
        case 124:
          if ("gov_hall" != o) {
            t.next = 132;
            break
          }
          s.save_redis("政务办事"), i = "wx939c5e9d180aaa1a", _ = "pages/index/index", c = "体验政务办事功能，需要您实名注册。", console.log("miniprogram_appid", i), t.next = 187;
          break;
        case 132:
          if ("people_fair" != o) {
            t.next = 139;
            break
          }
          s.save_redis("慈善服务"), i = "wxe7aafa8ad82141d0", _ = "", c = "体验善暖白云功能，需要您实名注册。", t.next = 187;
          break;
        case 139:
          if ("release_wast_water_index" != o) {
            t.next = 146;
            break
          }
          i = "wx939c5e9d180aaa1a", _ = "/pages2/paishui/paishui", c = "体验白云排水许可功能，需要您实名注册。", s.save_redis("供水服务"), t.next = 187;
          break;
        case 146:
          if ("release_wast_water_concat" != o) {
            t.next = 153;
            break
          }
          s.save_redis("供水设施接驳"), i = "wx939c5e9d180aaa1a", _ = "/pages2/paishui/paishui", c = "体验白云排水许可功能，需要您实名注册。", t.next = 187;
          break;
        case 153:
          if ("release_wast_water_new" != o) {
            t.next = 160;
            break
          }
          s.save_redis("供水新办"), i = "wx939c5e9d180aaa1a", _ = "/pages2/paishui/paishui", c = "体验白云排水许可功能，需要您实名注册。", t.next = 187;
          break;
        case 160:
          if ("release_wast_water_update" != o) {
            t.next = 167;
            break
          }
          s.save_redis("供水变更/延期"), i = "wx939c5e9d180aaa1a", _ = "/pages2/paishui/paishui", c = "体验白云排水许可功能，需要您实名注册。", t.next = 187;
          break;
        case 167:
          if ("market_admin_index" != o && "market_admin_food_shop" != o) {
            t.next = 174;
            break
          }
          return s.save_redis("食品经营"), l = "../../../../module_002_fda/p_001_fda/index/index", wx.navigateTo({
            url: l
          }), t.abrupt("return");
        case 174:
          if ("market_admin_leagal_person_confirm" != o) {
            t.next = 180;
            break
          }
          return s.save_redis("网监云确认"), wx.navigateTo({
            url: "../../../../module_002_fda/p_001_fda/cloud_comfirm/index/index"
          }), t.abrupt("return");
        case 180:
          if ("market_admin_online_meeting" != o) {
            t.next = 186;
            break
          }
          return s.save_redis("网上听证"), this.online_hearing_event(), t.abrupt("return");
        case 186:
          "market_place" == o ? (s.save_redis("智慧市场"), c = "体验智慧市场功能，需要您实名注册。") : "hospital" == o ? (s.save_redis("挂号就医"), i = "wx753d89cad9761e41", _ = "intel_hospital/drill/pages/drillPage/index?unitId=2701&from=scan_code&curtab=baiyunqu&code_id=27014003", c = "体验互联网医院功能，需要您实名注册。") : "baiyun_news" == o ? (s.save_redis("白云新闻"), i = "wx329a27ee2e3b61d0", _ = "", c = "体验白云新闻功能，需要您实名注册。") : "house_tax" == o ? (s.save_redis("出租屋税缴纳"), i = "wx9a9c829779a65f4b", _ = "", c = "体验出租屋税缴纳功能功能，需要您实名注册。") : "buy_bulk_oil" == o && (s.save_redis("散装汽油购买预登记"), c = "体验散装汽油购买预登记功能，需要您实名注册。");
        case 187:
          if (wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), u = wx.getStorageSync("openid"), p = wx.getStorageSync("unionid"), "" == u || null == u || null == u || "[object Undefined]" == u || "" == p || null == p || null == p || "[object Undefined]" == p) {
            t.next = 196;
            break
          }
          r.globalData.unionid = p, r.globalData.openid = u, t.next = 217;
          break;
        case 196:
          return t.prev = 196, t.next = 199, s.wx_login();
        case 199:
          if (g = t.sent, console.log("login_result:", g), "000000000000" != g.data[0].resp_code) {
            t.next = 208;
            break
          }
          r.globalData.openid = g.data[1].openid, r.globalData.unionid = g.data[1].unionid, wx.setStorageSync("openid", r.globalData.openid), wx.setStorageSync("unionid", r.globalData.unionid), t.next = 210;
          break;
        case 208:
          return wx.showModal({
            title: "提示",
            content: g.data[0].resp_msg + "(" + g.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), t.abrupt("return");
        case 210:
          t.next = 217;
          break;
        case 212:
          return t.prev = 212, t.t0 = t.catch(196), console.log("e:", t.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(t.t0),
            showCancel: !1,
            success: function(e) {}
          }), t.abrupt("return");
        case 217:
          h = {
            openId: r.globalData.openid,
            oper_type: "INDEX"
          }, l = "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
            url: l,
            method: "POST",
            dataType: "json",
            data: h,
            success: function() {
              var t = a(e().mark((function a(t) {
                var n, l, u, p, g;
                return e().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", t), "000000000003" != t.data[0].resp_code) {
                        e.next = 26;
                        break
                      }
                      if (n = t.data[0].access_token, r.globalData.access_token = n, d.access_token = n, "market_place" != o) {
                        e.next = 14;
                        break
                      }
                      return l = "/page/page_006_common_webview/page_006_common_webview?buzi_type=" + o + "&access_token=" + n, console.log("1729761581245 url", l), l = encodeURI(l), wx.redirectTo({
                        url: l
                      }), e.abrupt("return");
                    case 14:
                      if ("buy_bulk_oil" != o) {
                        e.next = 18;
                        break
                      }
                      return u = "/module_004/gas_station/gas_station_index?access_token=" + n, wx.navigateTo({
                        url: u
                      }), e.abrupt("return");
                    case 18:
                      p = {}, null == r.globalData.SYSTEMINFO ? (p = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", p)) : p = r.globalData.SYSTEMINFO, g = s.compareVersion(p.SDKVersion, "2.20.1"), "search_house_index" != o && "search_house_easy_rent" != o && "search_house" != o && "search_house_I_want" != o || (g = -100), console.log("diff_version_002", g, i, _, d), g >= 0 ? wx.openEmbeddedMiniProgram({
                        appId: i,
                        path: _,
                        allowFullScreen: !0,
                        extraData: d,
                        envVersion: "release",
                        success: function(e) {
                          console.log("openEmbeddedMiniProgram res", e)
                        }
                      }) : wx.navigateToMiniProgram({
                        appId: i,
                        path: _,
                        extraData: d,
                        envVersion: "release",
                        success: function(e) {
                          console.log("navigateToMiniProgram res", e)
                        }
                      }), e.next = 30;
                      break;
                    case 26:
                      return r.globalData.back_url = "INDEX", "buy_bulk_oil" == o && (r.globalData.back_url = "buy_bulk_oil"), wx.showModal({
                        title: "平安码丨平安白云",
                        content: c,
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          1 == e.confirm && wx.navigateTo({
                            url: "../../../component/pages/form_ocr_01/form"
                          })
                        }
                      }), e.abrupt("return");
                    case 30:
                    case "end":
                      return e.stop()
                  }
                }), a)
              })));
              return function(e) {
                return t.apply(this, arguments)
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
        case 218:
        case "end":
          return t.stop()
      }
    }), t, this, [
      [196, 212]
    ])
  }))), function(e) {
    return n.apply(this, arguments)
  }),
  show_rent_house: function() {
    console.log("***************", this.data.show_rent_house), this.data.show_rent_house ? this.setData({
      show_rent_house: !1
    }) : this.setData({
      show_rent_house: !0
    })
  },
  show_go_app: function() {
    console.log("***************", this.data.show_go_app), this.data.show_go_app ? this.setData({
      show_go_app: !1
    }) : this.setData({
      show_go_app: !0
    })
  },
  show_go_app_002: function() {
    console.log("***************", this.data.show_go_app_002), this.data.show_go_app_002 ? this.setData({
      show_go_app_002: !1
    }) : this.setData({
      show_go_app_002: !0
    })
  },
  show_go_app_003: function() {
    console.log("***************", this.data.show_go_app_003), this.data.show_go_app_003 ? this.setData({
      show_go_app_003: !1
    }) : this.setData({
      show_go_app_003: !0
    })
  },
  show_go_app_004: function() {
    console.log("***************", this.data.show_go_app_004), this.data.show_go_app_004 ? this.setData({
      show_go_app_004: !1
    }) : this.setData({
      show_go_app_004: !0
    })
  },
  show_go_app_005: function() {
    console.log("***************", this.data.show_go_app_005), this.data.show_go_app_005 ? this.setData({
      show_go_app_005: !1
    }) : this.setData({
      show_go_app_005: !0
    })
  },
  show_go_app_006: function() {
    console.log("***************", this.data.show_go_app_006), this.data.show_go_app_006 ? this.setData({
      show_go_app_006: !1
    }) : this.setData({
      show_go_app_006: !0
    })
  },
  show_go_app_007: function() {
    console.log("***************", this.data.show_go_app_007), this.data.show_go_app_007 ? this.setData({
      show_go_app_007: !1
    }) : this.setData({
      show_go_app_007: !0
    })
  },
  online_hearing_event: function() {
    return a(e().mark((function a() {
      var t, n, o, i;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (t = wx.getStorageSync("openid"), n = wx.getStorageSync("unionid"), "" == t || null == t || null == t || "[object Undefined]" == t || "" == n || null == n || null == n || "[object Undefined]" == n) {
              e.next = 8;
              break
            }
            r.globalData.unionid = n, r.globalData.openid = t, e.next = 29;
            break;
          case 8:
            return e.prev = 8, e.next = 11, s.wx_login();
          case 11:
            if (o = e.sent, console.log("login_result:", o), "000000000000" != o.data[0].resp_code) {
              e.next = 20;
              break
            }
            r.globalData.openid = o.data[1].openid, r.globalData.unionid = o.data[1].unionid, wx.setStorageSync("openid", r.globalData.openid), wx.setStorageSync("unionid", r.globalData.unionid), e.next = 22;
            break;
          case 20:
            return wx.showModal({
              title: "提示",
              content: o.data[0].resp_msg + "(" + o.data[0].resp_code + ")",
              showCancel: !1,
              success: function(e) {}
            }), e.abrupt("return");
          case 22:
            e.next = 29;
            break;
          case 24:
            return e.prev = 24, e.t0 = e.catch(8), console.log("e:", e.t0), wx.showModal({
              title: "提示",
              content: "" + JSON.stringify(e.t0),
              showCancel: !1,
              success: function(e) {}
            }), e.abrupt("return");
          case 29:
            "MEETING", i = {
              openId: r.globalData.openid,
              oper_type: "MEETING"
            }, "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
              method: "POST",
              dataType: "json",
              data: i,
              success: function(e) {
                if (wx.hideLoading(), console.log("检查进度结果", e), "000000000003" == e.data[0].resp_code) {
                  var a = e.data[0].access_token;
                  r.globalData.access_token = a;
                  var t = "/page/page_006_common_webview/page_006_common_webview?buzi_type=p_081_online_court&access_token=" + a;
                  return console.log("url", t), t = encodeURI(t), void wx.navigateTo({
                    url: t
                  })
                }
                return r.globalData.back_url = "ONLINE_COURT", void wx.showModal({
                  title: "网上听证",
                  content: "网上听证功能，需要您实名注册。",
                  showCancel: !0,
                  cancelText: "暂不注册",
                  confirmText: "现在注册",
                  success: function(e) {
                    1 == e.confirm && wx.navigateTo({
                      url: "../../../component/pages/form_ocr_01/form"
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
          case 30:
          case "end":
            return e.stop()
        }
      }), a, null, [
        [8, 24]
      ])
    })))()
  }
});