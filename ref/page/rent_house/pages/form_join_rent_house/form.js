require("../../../../@babel/runtime/helpers/Arrayincludes");
var e, t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../../../util/regenerator-runtime/runtime")) && e.__esModule;
var o, n, s, r, i, c, _, d, l, u = require("../../../../util/util.js"),
  h = require("../../../../config"),
  p = require("../../../../util/moment.js"),
  g = [],
  m = (new Date).getFullYear(),
  f = (new Date).getMonth() + 1,
  x = (new Date).getDate(),
  b = getApp();
Page({
  data: {
    perfect_type: "",
    renter_rec_id: "",
    rent_house_attribute: "",
    state: "待申请入住",
    disable_room_picker: !1,
    disable_month_picker: !1,
    bt_apply_display: !1,
    bt_index_display: !1,
    title: "我的房屋",
    this_rent_house_rec_id: null,
    this_sfz_resp_code: null,
    this_sfz_XM: null,
    this_sfz_ZJHM: null,
    this_sfz_mobile_phone: null,
    showModal_location: !1,
    this_page_found_scene: !1,
    showModal_address: !1,
    this_form_id: null,
    rent_house_code: "",
    street_name: "",
    stree_road_alley_name: "",
    house_number_name: "",
    is_read: !1,
    room_code_arr: [],
    room_name_arr: [],
    room_index: 0,
    expired_month: ["请选择入住时长", "1天", "时租", "日租", "1个月", "2个月", "3个月", "4个月", "5个月", "6个月", "7个月", "8个月", "9个月", "10个月", "11个月", "12个月", "18个月", "24个月", "业主自住"],
    month_index: 0,
    renter_remark: "",
    selected_room_name: "",
    selected_room_code: "",
    display_apartment: "none",
    apartment: "",
    attribute: 0,
    cateItems: [],
    curNav: 0,
    curIndex: 0,
    one_floor_room: [],
    show_dialog_choose_room: !1,
    qry_floor: null,
    inputShowed: !0,
    inputVal: "",
    maxMonth: 7,
    dateList: [],
    systemInfo: {},
    weekStr: ["日", "一", "二", "三", "四", "五", "六"],
    checkInDate: "",
    checkOutDate: "",
    markcheckInDate: !1,
    markcheckOutDate: !1,
    sFtv: [{
      month: 1,
      day: 1,
      name: "元旦"
    }, {
      month: 5,
      day: 1,
      name: "劳动节"
    }, {
      month: 10,
      day: 1,
      name: "国庆节"
    }],
    check_in_date: "入住时长",
    show_dialog_calendar: !1,
    buttons_calendar: [{
      type: "default",
      className: "re_choose_bt",
      text: "重新选择",
      value: 0
    }, {
      type: "primary",
      className: "",
      text: "我已选好",
      value: 1
    }],
    show_expired_month: !1,
    data_expired_month: [
      ["请选择入住时长", "1天", "时租", "日租", "1个月", "2个月", "3个月", "4个月", "5个月", "6个月", "7个月", "8个月", "9个月", "10个月", "11个月", "12个月", "18个月", "24个月", "业主自住"]
    ],
    total_page: 0,
    cur_page: 1,
    key_word: "",
    show_dialog_join: !1,
    buttons_joint: [{
      type: "default",
      className: "",
      text: "取消",
      value: 0
    }, {
      type: "primary",
      className: "",
      text: "入住",
      value: 1
    }],
    show_date: "",
    show_gd_security: !1,
    nee_jump_gd_security: !1,
    gd_security_path: "",
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
    letter_type: 1,
    this_options: {}
  },
  end_data: function() {},
  onLoad: (l = a(t().mark((function e(a) {
    var o, n, s, r, i, c, _, d, l, h, p, g, m;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (o = wx.getSystemInfoSync(), console.log("form_join_rent_house onload", a, o), n = this, this.throttle_confirm_notice = u.throttle(this.confirm_notice, 1e3), wx.removeStorageSync("ROOM_SOURCE_DATE"), n.createDateListData(), n.setData({
              systemInfo: o
            }), s = decodeURIComponent(a.scene), console.log("scene :", s), r = !1, e.prev = 10, !(parseInt(s) >= 1)) {
            e.next = 23;
            break
          }
          return console.log("扫小程序码带出租屋rec_id参数跳转过来的"), r = !0, i = s, n.setData({
            this_rent_house_rec_id: i
          }), n.setData({
            this_page_found_scene: r
          }), b.globalData.input_rent_house_rec_id = i, "业主自住" == a.expired_month && n.setData({
            month_index: 18
          }), n.get_live_info(), n.get_house_info(), n.get_floor(), e.abrupt("return");
        case 23:
          e.next = 28;
          break;
        case 25:
          e.prev = 25, e.t0 = e.catch(10), console.log(e.t0);
        case 28:
          if (null != b.globalData.input_rent_house_rec_id && (s = b.globalData.input_rent_house_rec_id, r = !0), n.setData({
              this_page_found_scene: r
            }), 1 != r) {
            e.next = 38;
            break
          }
          return console.log("到此是注册完成返回的申请入住 跳转过来的"), i = s, n.setData({
            this_rent_house_rec_id: i
          }), n.get_house_info(), n.get_floor(), "业主自住" == a.expired_month && n.setData({
            month_index: 18
          }), e.abrupt("return");
        case 38:
          if (n.data.this_options = a, "THIRD_PARTY_APP" != a.come_param) {
            e.next = 69;
            break
          }
          if (c = a.rent_house_code, "3" == (c += "").substr(0, 1) ? i = parseInt(c) - 3e9 : "2" == c.substr(0, 1) && (i = parseInt(c) - 2e9), n.setData({
              this_rent_house_rec_id: i
            }), n.data.this_page_found_scene = !0, n.get_house_info(), _ = a.room_name, d = a.room_code, n.setData({
              selected_room_name: _,
              selected_room_code: d
            }), n.get_floor(), l = a.expired_month, console.log(), "1" == l ? l = 4 : "2" == l ? l = 5 : "3" == l ? l = 6 : "4" == l ? l = 7 : "5" == l ? l = 8 : "6" == l ? l = 9 : "7" == l ? l = 10 : "8" == l ? l = 11 : "9" == l ? l = 12 : "10" == l ? l = 13 : "11" == l ? l = 14 : "12" == l ? l = 15 : "18" == l ? l = 16 : "24" == l && (l = 17), "天" != a.date_unit) {
            e.next = 67;
            break
          }
          return l = 3, h = a.contract_begin_date, p = a.expired_month, e.next = 59, n.sv_014_calc_date(h, p);
        case 59:
          g = e.sent, console.log("input_checkin_date", h, p, g), n.data.checkInDate = h, n.data.checkOutDate = g, n.data.markcheckInDate = !0, n.data.markcheckOutDate = !0, m = "【入住】" + this.data.checkInDate + " ~【退房】" + this.data.checkOutDate, n.setData({
            check_in_date: m
          });
        case 67:
          n.setData({
            month_index: l
          }), console.log("第三方进入的 设置选中值 month_index", l);
        case 69:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [10, 25]
    ])
  }))), function(e) {
    return l.apply(this, arguments)
  }),
  onShow: function() {
    console.log("onShow");
    this.get_location_role()
  },
  switchRightTab: function(e) {
    var t = e.target.dataset.id,
      a = e.target.dataset.index,
      o = e.target.dataset.floor;
    console.log("switchRightTab", t, a, o);
    this.setData({
      curNav: t,
      curIndex: a,
      qry_floor: o,
      cur_page: 1,
      inputVal: "",
      key_word: ""
    }), this.get_room_for_live()
  },
  select_one_room: function(e) {
    var t = e.currentTarget.dataset.room_name,
      a = e.currentTarget.dataset.room_code;
    if ("未标准化套间" == e.currentTarget.dataset.is_standard_dyfw && wx.showModal({
        title: "提示",
        content: "请联系房屋管理员完善套间标准化后，再申请入住。",
        showCancel: !1,
        success: function(e) {
          e.confirm && wx.navigateBack({
            delta: 1
          })
        }
      }), this.data.selected_room_code = a, console.log(this.data.selected_room_code, "selected_room_code"), "上一页" == a) return 1 == (o = this.data.cur_page) ? void wx.showToast({
      title: "已到第一页",
      icon: "none",
      duration: 1e3
    }) : ((o -= 1) < 1 && (o = 1), this.setData({
      cur_page: o
    }), void this.get_room_for_live());
    if ("下一页" == a) {
      var o = this.data.cur_page,
        n = this.data.total_page;
      return o == n ? void wx.showToast({
        title: "已到最后一页",
        icon: "none",
        duration: 1e3
      }) : ((o += 1) > n && (o = n), this.setData({
        cur_page: o
      }), void this.get_room_for_live())
    }
    if ("page_info" != a)
      if ("" == t || "" == a);
      else {
        if (this.setData({
            selected_room_name: t,
            selected_room_code: a,
            show_dialog_choose_room: !1
          }), console.log("select one room this_page.data.month_index", this.data.month_index), 0 == this.data.month_index) return 5 == this.data.rent_house_attribute ? (console.log("选完套间，未选时长，酒店的直接弹出起始，结束日期", this.data.month_index, this.data.rent_house_attribute), this.setData({
          show_dialog_calendar: !0
        }), this.data.month_index = 3, this.setData({
          month_index: this.data.month_index
        }), void wx.setStorageSync("month_index", this.data.month_index)) : (wx.showToast({
          title: "请选择入住时长",
          icon: "none",
          duration: 1e3
        }), void this.setData({
          show_expired_month: !0
        }));
        if (3 == this.data.month_index || 5 == this.data.rent_house_attribute) 1 == this.data.markcheckInDate && 1 == this.data.markcheckOutDate && "" != this.data.checkInDate && "" != this.data.checkOutDate && this.ask_join();
        else {
          if (!(this.data.month_index > 0)) return wx.showToast({
            title: "请选择入住时长",
            icon: "none",
            duration: 1e3
          }), void this.setData({
            show_expired_month: !0
          });
          this.ask_join()
        }
      }
  },
  go_to_choose_room: function(e) {
    this.setData({
      show_dialog_choose_room: !0
    })
  },
  bind_picker_change_room: function(e) {},
  bind_picker_change_month: function(e) {
    if (this.setData({
        month_index: e.detail.value
      }), wx.setStorageSync("month_index", this.data.month_index), 3 == this.data.month_index || 5 == this.data.rent_house_attribute) this.setData({
      show_dialog_calendar: !0
    });
    else {
      this.setData({
        markcheckInDate: !1,
        markcheckOutDate: !1
      }), wx.removeStorageSync("ROOM_SOURCE_DATE");
      this.setData({
        check_in_date: "入住时长"
      }), this.renderPressStyle(0, 0, 0)
    }
  },
  bind_renter_remark_input: function(e) {
    this.setData({
      renter_remark: e.detail.value
    })
  },
  bindinput_search_room: function(e) {
    console.log("search value", e.detail.value);
    var t = e.detail.value;
    this.setData({
      key_word: t,
      cur_page: 1,
      inputVal: t
    }), this.get_room_for_live()
  },
  search: (d = a(t().mark((function e(a) {
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
        case "end":
          return e.stop()
      }
    }), e)
  }))), function(e) {
    return d.apply(this, arguments)
  }),
  selectResult: function(e) {
    console.log("select result", e.detail)
  },
  error: function(e) {
    console.log(e.detail)
  },
  onUnload: function() {
    console.log("onUnload"), wx.removeStorageSync("joint_rent_house_room_name"), wx.removeStorageSync("joint_rent_house_room_code"), wx.removeStorageSync("month_index")
  },
  submit_apply: function(e) {
    1 != this.data.nee_jump_gd_security ? null == this.data.this_rent_house_rec_id || this.ask_join() : this.setData({
      show_gd_security: !0
    })
  },
  go_index: function() {
    wx.redirectTo({
      url: "../../../index_01/pages/my/my"
    })
  },
  go_to_action: function() {
    return "000000000001" == this.data.this_sfz_resp_code ? (console.log("apply....000000000001 "), void wx.navigateTo({
      url: "../../../component/pages/form_ocr_01/form"
    })) : "000000000002" == this.data.this_sfz_resp_code ? (b.globalData.page_verify_code_msg = "您已提交身份证资料,请进行基于生物识别的人脸核身", b.globalData.XM = this.data.this_sfz_XM, b.globalData.ZJHM = this.data.this_sfz_ZJHM, b.globalData.mobile_phone = this.data.this_sfz_mobile_phone, console.log("您已提交身份证资料,请进行基于生物识别的人脸核身...."), void wx.navigateTo({
      url: "../../../component/pages/form_ocr_03/form"
    })) : "000000000004" == this.data.this_sfz_resp_code ? (b.globalData.page_verify_code_msg = "已发送短信验证码,请输入短信验证码", console.log("submit code...."), void wx.navigateTo({
      url: "../../../component/pages/form_ocr_04/form"
    })) : void 0
  },
  get_location_role: function() {
    var e = this,
      t = b;
    wx.getSetting({
      success: function(a) {
        console.log("获取用户授权设置..."), console.log(a), null == a.authSetting["scope.userLocation"] || null == a.authSetting["scope.userLocation"] ? (console.log("用户未设置过授权,弹出请求授权界面 userLocation..."), wx.authorize({
          scope: "scope.userLocation",
          success: function(a) {
            console.log("authorize scope.userLocation success...", a), wx.getLocation({
              type: "wgs84",
              altitude: !1,
              success: function(a) {
                console.log("res.getLocation:", a), t.globalData.location_info = a;
                var o = a.accuracy,
                  n = a.altitude,
                  s = a.horizontalAccuracy,
                  r = a.latitude,
                  i = a.longitude,
                  c = a.speed,
                  _ = a.verticalAccuracy;
                if (null == b.globalData.openid || "" == b.globalData.openid || null == b.globalData.openid) wx.login({
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
                          b.globalData.openid = t.data[1].openid;
                          var a = {
                              openId: b.globalData.openid,
                              accuracy: o,
                              altitude: n,
                              horizontalAccuracy: s,
                              latitude: r,
                              longitude: i,
                              speed: c,
                              verticalAccuracy: _
                            },
                            d = "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log";
                          wx.request({
                            url: d,
                            method: "POST",
                            dataType: "json",
                            data: a,
                            success: function(e) {},
                            fail: function(e) {}
                          });
                          var l = e.data.this_rent_house_rec_id;
                          a = {
                            openId: b.globalData.openid,
                            accuracy: o,
                            altitude: n,
                            horizontalAccuracy: s,
                            latitude: r,
                            longitude: i,
                            speed: c,
                            verticalAccuracy: _,
                            oper_type: "RENT_HOUSE",
                            parameter_value: l
                          }, d = "https://xcx.pinganbaiyun.cn/mini_program/api_01/tb_060_scan_code_log";
                          wx.request({
                            url: d,
                            method: "POST",
                            dataType: "json",
                            data: a,
                            success: function(e) {},
                            fail: function(e) {}
                          })
                        }
                      },
                      fail: function(e) {}
                    })
                  },
                  fail: function(e) {}
                });
                else {
                  var d = {
                      openId: b.globalData.openid,
                      accuracy: o,
                      altitude: n,
                      horizontalAccuracy: s,
                      latitude: r,
                      longitude: i,
                      speed: c,
                      verticalAccuracy: _
                    },
                    l = "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log";
                  wx.request({
                    url: l,
                    method: "POST",
                    dataType: "json",
                    data: d,
                    success: function(e) {},
                    fail: function(e) {}
                  });
                  var u = e.data.this_rent_house_rec_id;
                  d = {
                    openId: b.globalData.openid,
                    accuracy: o,
                    altitude: n,
                    horizontalAccuracy: s,
                    latitude: r,
                    longitude: i,
                    speed: c,
                    verticalAccuracy: _,
                    oper_type: "RENT_HOUSE",
                    parameter_value: u
                  }, l = "https://xcx.pinganbaiyun.cn/mini_program/api_01/tb_060_scan_code_log";
                  wx.request({
                    url: l,
                    method: "POST",
                    dataType: "json",
                    data: d,
                    success: function(e) {},
                    fail: function(e) {}
                  })
                }
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
          success: function(a) {
            t.globalData.location_info = a;
            var o = a.accuracy,
              n = a.altitude,
              s = a.horizontalAccuracy,
              r = a.latitude,
              i = a.longitude,
              c = a.speed,
              _ = a.verticalAccuracy;
            if (null == b.globalData.openid || "" == b.globalData.openid || null == b.globalData.openid) wx.login({
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
                      b.globalData.openid = t.data[1].openid;
                      var a = {
                          openId: b.globalData.openid,
                          accuracy: o,
                          altitude: n,
                          horizontalAccuracy: s,
                          latitude: r,
                          longitude: i,
                          speed: c,
                          verticalAccuracy: _
                        },
                        d = "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log";
                      wx.request({
                        url: d,
                        method: "POST",
                        dataType: "json",
                        data: a,
                        success: function(e) {},
                        fail: function(e) {}
                      });
                      var l = e.data.this_rent_house_rec_id;
                      a = {
                        openId: b.globalData.openid,
                        accuracy: o,
                        altitude: n,
                        horizontalAccuracy: s,
                        latitude: r,
                        longitude: i,
                        speed: c,
                        verticalAccuracy: _,
                        oper_type: "RENT_HOUSE",
                        parameter_value: l
                      }, d = "https://xcx.pinganbaiyun.cn/mini_program/api_01/tb_060_scan_code_log";
                      wx.request({
                        url: d,
                        method: "POST",
                        dataType: "json",
                        data: a,
                        success: function(e) {},
                        fail: function(e) {}
                      })
                    }
                  },
                  fail: function(e) {}
                })
              },
              fail: function(e) {}
            });
            else {
              var d = {
                  openId: b.globalData.openid,
                  accuracy: o,
                  altitude: n,
                  horizontalAccuracy: s,
                  latitude: r,
                  longitude: i,
                  speed: c,
                  verticalAccuracy: _
                },
                l = "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log";
              wx.request({
                url: l,
                method: "POST",
                dataType: "json",
                data: d,
                success: function(e) {},
                fail: function(e) {}
              });
              var u = e.data.this_rent_house_rec_id;
              d = {
                openId: b.globalData.openid,
                accuracy: o,
                altitude: n,
                horizontalAccuracy: s,
                latitude: r,
                longitude: i,
                speed: c,
                verticalAccuracy: _,
                oper_type: "RENT_HOUSE",
                parameter_value: u
              }, l = "https://xcx.pinganbaiyun.cn/mini_program/api_01/tb_060_scan_code_log";
              wx.request({
                url: l,
                method: "POST",
                dataType: "json",
                data: d,
                success: function(e) {},
                fail: function(e) {}
              })
            }
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
  get_role_result: function(e) {
    console.log("get_role_result", e), 0 == e.detail.authSetting["scope.userLocation"] ? (this.setData({
      showModal_location: !0
    }), console.log("用户选择了否")) : (console.log("用户选择了是"), this.setData({
      showModal_location: !1
    }))
  },
  ask_join: function() {
    if (console.log("ask_join", b.globalData), 1 == this.data.this_page_found_scene) {
      this.data.this_rent_house_rec_id;
      var e = this.data.street_name + this.data.stree_road_alley_name + this.data.house_number_name,
        t = (this.data.attribute, this.data.apartment);
      "" != e && -1 == e.indexOf(this.data.stree_road_alley_name) && (e = e + "【" + t + "】"), "" != this.data.selected_room_name && (e = e + this.data.selected_room_name + "套间"), b.globalData.input_rent_house_address = e;
      var a = this.data.month_index;
      if (0 == a) return 5 == this.data.rent_house_attribute ? (console.log("申请入住时，未选时长，酒店的直接弹出起始，结束日期", this.data.month_index, this.data.rent_house_attribute), this.setData({
        show_dialog_calendar: !0
      }), this.data.month_index = 3, this.setData({
        month_index: this.data.month_index
      }), void wx.setStorageSync("month_index", this.data.month_index)) : (wx.showToast({
        title: "请选择入住时长",
        icon: "none",
        duration: 1e3
      }), void this.setData({
        show_expired_month: !0
      }));
      if (3 == a || 5 == this.data.rent_house_attribute) {
        if (1 != this.data.markcheckInDate || 1 != this.data.markcheckOutDate) return wx.showToast({
          title: "请选择入住时长",
          icon: "none",
          duration: 1e3
        }), void this.setData({
          show_dialog_calendar: !0
        });
        if ("" == this.data.checkInDate || "" == this.data.checkOutDate) return wx.showToast({
          title: "入住时长异常 请重新选择",
          icon: "none",
          duration: 1e3
        }), void this.setData({
          show_dialog_calendar: !0
        })
      }
      if ("" == this.data.selected_room_name || null == this.data.selected_room_name || null == this.data.selected_room_name || "" == this.data.selected_room_code || null == this.data.selected_room_code || null == this.data.selected_room_code) return wx.showToast({
        title: "请选择入住套间",
        icon: "none",
        duration: 1e3
      }), void this.setData({
        show_dialog_choose_room: !0
      });
      var o = this.data.data_expired_month[0][a];
      o = "【入住】" + o, 3 != a && 5 != this.data.rent_house_attribute || (o = this.data.check_in_date), this.setData({
        show_date: o,
        show_dialog_join: !0
      })
    }
  },
  get_house_info: (_ = a(t().mark((function e() {
    var a, o, n, s, r, i, c, _, d;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if ("" != (o = (a = this).data.this_rent_house_rec_id) && null != o && null != o) {
            e.next = 4;
            break
          }
          return e.abrupt("return");
        case 4:
          return e.prev = 4, wx.showLoading({
            title: "装载中...",
            mask: !0
          }), n = {
            rent_house_rec_id: o
          }, e.next = 10, u.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_05_rent_house_mini_program/get_rent_house_by_id", n);
        case 10:
          if (s = e.sent, wx.hideLoading(), "000000000000" != s.data[0].resp_code) {
            e.next = 25;
            break
          }
          return a.setData({
            street_name: s.data[1].street_name,
            stree_road_alley_name: s.data[1].stree_road_alley_name,
            house_number_name: s.data[1].house_number_name,
            rent_house_code: s.data[1].rent_house_code
          }), r = s.data[1].attribute, i = s.data[1].apartment, a.data.rent_house_attribute = r, a.data.attribute = r, i += "", s.data[1].stree_road_alley_name = s.data[1].stree_road_alley_name + "", "" != i && -1 == i.indexOf(s.data[1].stree_road_alley_name) ? a.setData({
            display_apartment: "",
            apartment: i
          }) : a.setData({
            display_apartment: "none"
          }), 5 == a.data.attribute && (c = s.data[1].today, _ = s.data[1].tomorrow, (d = {}).currentTarget = {}, d.currentTarget.dataset = {}, d.currentTarget.dataset.day = parseInt(c.substr(6, 2)), d.currentTarget.dataset.month = parseInt(c.substr(4, 2)), d.currentTarget.dataset.year = parseInt(c.substr(0, 4)), a.onPressDate(d), setTimeout((function() {
            var e = {
              currentTarget: {}
            };
            e.currentTarget.dataset = {}, e.currentTarget.dataset.day = parseInt(_.substr(6, 2)), e.currentTarget.dataset.month = parseInt(_.substr(4, 2)), e.currentTarget.dataset.year = parseInt(_.substr(0, 4)), a.onPressDate(e)
          }), 300)), e.abrupt("return");
        case 25:
          console.log("err:", s), wx.showModal({
            title: "提示",
            content: s.data[0].resp_msg + s.data[0].resp_code,
            showCancel: !1
          });
        case 27:
          e.next = 33;
          break;
        case 29:
          e.prev = 29, e.t0 = e.catch(4), console.log("获取房屋信息 e", e.t0), wx.hideLoading();
        case 33:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [4, 29]
    ])
  }))), function() {
    return _.apply(this, arguments)
  }),
  selectDataMarkLine: function() {
    var e = this.data.dateList,
      t = wx.getStorageSync("ROOM_SOURCE_DATE"),
      a = t.checkInDate,
      o = t.checkOutDate;
    null == a && (a = ""), null == o && (o = ""), o += "";
    var n = (a += "").substr(0, 4) + "-" + (a.substr(5, 2) < 10 ? a.substr(6, 1) : a.substr(5, 2)),
      s = o.substr(0, 4) + "-" + (o.substr(5, 2) < 10 ? o.substr(6, 1) : o.substr(5, 2)),
      r = a.substr(8, 2) >= 10 ? a.substr(8, 2) : a.substr(9, 1),
      i = o.substr(8, 2) >= 10 ? o.substr(8, 2) : o.substr(9, 1),
      c = a.substr(5, 2) >= 10 ? a.substr(5, 2) : a.substr(6, 1),
      _ = o.substr(5, 2) >= 10 ? o.substr(5, 2) : o.substr(6, 1);
    if (n == s) {
      for (var d = 0; d < e.length; d++)
        if (e[d].id == n)
          for (var l = e[d].days, u = 0; u < l.length; u++) l[u].day >= r && l[u].day <= i && (l[u].class = l[u].class + " bgitem"), l[u].day == r && (l[u].class = l[u].class + " active", l[u].inday = !0), l[u].day == i && (l[u].class = l[u].class + " active", l[u].outday = !0)
    } else
      for (var h = 0; h < e.length; h++)
        if (e[h].month == c)
          for (var p = e[h].days, g = 0; g < p.length; g++) p[g].day >= r && (p[g].class = p[g].class + " bgitem"), p[g].day == r && (p[g].class = p[g].class + " active", p[g].inday = !0);
        else if (e[h].month < _ && e[h].month > c)
      for (var m = e[h].days, f = 0; f < m.length; f++) m[f].class = m[f].class + " bgitem";
    else if (e[h].month == _)
      for (var x = e[h].days, b = 0; b < x.length; b++) x[b].day <= i && (x[b].class = x[b].class + " bgitem"), x[b].day == i && (x[b].class = x[b].class + " active", x[b].outday = !0);
    this.setData({
      dateList: e
    })
  },
  createDateListData: function() {
    for (var e = [], t = new Date, a = ((t = new Date(t.getFullYear(), t.getMonth(), 1)).getFullYear(), t.getMonth(), t.getDate(), 0); a < this.data.maxMonth; a++) {
      for (var o = p(t).add(this.data.maxMonth - (this.data.maxMonth - a), "month").date, n = o.getFullYear(), s = o.getMonth() + 1, r = (o.getDate(), []), i = this.getTotalDayByMonth(n, s), c = 1 - this.getWeek(n, s, 1); c <= i; c++) {
        var _ = -1;
        c > 0 && (_ = this.getWeek(n, s, c));
        var d = "";
        if (0 != _ && 6 != _ || (d = "week"), c < x && n == m && s == f) {
          d = "unavailable " + d;
          var l = this.getWeek(n, s, x);
          if (c < x - l) continue
        } else d = "" + d;
        r.push({
          day: c,
          class: d
        })
      }
      var u = {
        id: n + "-" + s,
        year: n,
        month: s,
        days: r
      };
      e.push(u)
    }
    for (var h = this.data.sFtv, b = 0; b < e.length; b++)
      for (var w = 0; w < h.length; w++)
        if (e[b].month == h[w].month)
          for (var y = e[b].days, D = 0; D < y.length; D++) y[D].day == h[w].day && (y[D].daytext = h[w].name);
    this.setData({
      dateList: e
    }), g = e
  },
  getTotalDayByMonth: function(e, t) {
    return t = parseInt(t, 10), new Date(e, t, 0).getDate()
  },
  getWeek: function(e, t, a) {
    return new Date(e, t - 1, a).getDay()
  },
  onPressDate: function(e) {
    console.log("onPressDate", e.currentTarget.dataset);
    var t = e.currentTarget.dataset,
      a = t.year,
      o = t.month,
      n = t.day;
    if (!(n < x && o == f || n <= 0)) {
      var s = o,
        r = n;
      o < 10 && (s = "0" + o), n < 10 && (r = "0" + n);
      var i = a + "-" + s + "-" + r;
      if (console.log("date", i), (this.data.markcheckInDate && p(i).before(this.data.checkInDate) || this.data.checkInDate === i) && (console.log("点击选择的日期A小于入住时间，则重新渲染入住时间为A"), this.setData({
          markcheckInDate: !1,
          markcheckOutDate: !1,
          dateList: g.concat()
        })), this.data.markcheckInDate) {
        if (!this.data.markcheckOutDate) {
          this.setData({
            checkOutDate: i,
            markcheckOutDate: !0
          }), wx.setStorage({
            key: "ROOM_SOURCE_DATE",
            data: {
              checkInDate: this.data.checkInDate,
              checkOutDate: this.data.checkOutDate
            }
          });
          var c = "【入住】" + this.data.checkInDate + " ~【退房】" + this.data.checkOutDate;
          this.setData({
            check_in_date: c
          }), console.log("已经设置了入住时间，未设置退房时间,则设置退房时间", this.data.markcheckOutDate, this.data.checkOutDate), this.selectDataMarkLine()
        }
      } else this.setData({
        checkInDate: i,
        markcheckInDate: !0,
        dateList: g.concat()
      }), this.renderPressStyle(a, o, n)
    }
  },
  renderPressStyle: function(e, t, a) {
    this.createDateListData();
    for (var o = this.data.dateList, n = 0; n < o.length; n++) {
      var s = o[n];
      if (s.id === e + "-" + t) {
        for (var r = s.days, i = 0; i < r.length; i++) {
          if (r[i].day == a) {
            r[i].class = r[i].class + " active", r[i].inday = !0;
            break
          }
        }
        break
      }
    }
    this.setData({
      dateList: o
    })
  },
  buttontap_calendar: function(e) {
    if (0 != e.detail.index) return 0 == this.data.markcheckInDate ? void wx.showToast({
      title: "请设置入住日期",
      icon: "none",
      duration: 1e3
    }) : 0 == this.data.markcheckOutDate ? void wx.showToast({
      title: "请设置退房日期",
      icon: "none",
      duration: 1e3
    }) : (this.setData({
      show_dialog_calendar: !1
    }), void("" != this.data.selected_room_name && "" != this.data.selected_room_code ? (console.log("如果都选好了，提示加入1692848512504"), this.ask_join()) : this.setData({
      show_dialog_choose_room: !0
    })));
    this.setData({
      markcheckInDate: !1,
      markcheckOutDate: !1,
      dateList: g.concat()
    }), wx.removeStorageSync("ROOM_SOURCE_DATE");
    this.setData({
      check_in_date: "入住时长"
    }), this.renderPressStyle(0, 0, 0)
  },
  sure_callback_expired_month: function(e) {
    var t = this;
    t.setData({
      show_expired_month: !1
    });
    var a = e.detail.choosedIndexArr[0];
    if (0 == a) return wx.showToast({
      title: "请选择入住时长",
      icon: "none",
      duration: 1e3
    }), void setTimeout((function() {
      t.setData({
        show_expired_month: !0
      })
    }), 1e3);
    if (this.setData({
        month_index: a
      }), wx.setStorageSync("month_index", this.data.month_index), 3 == this.data.month_index || 5 == t.data.rent_house_attribute) return this.data.month_index = 3, void this.setData({
      show_dialog_calendar: !0
    });
    t.setData({
      markcheckInDate: !1,
      markcheckOutDate: !1
    }), wx.removeStorageSync("ROOM_SOURCE_DATE");
    t.setData({
      check_in_date: "入住时长"
    }), t.renderPressStyle(0, 0, 0), "" != t.data.selected_room_name && "" != t.data.selected_room_code ? t.ask_join() : t.setData({
      show_dialog_choose_room: !0
    })
  },
  cancle_callback_expired_month: function(e) {
    this.setData({
      show_expired_month: !1
    }), console.log("cancle_callback_expired_month:", e)
  },
  bindta_expired_month: function(e) {
    console.log("bindta_expired_month", this.data.show_expired_month, e);
    if (console.log("点击入住时长触发选择器", this.data.month_index, this.data.rent_house_attribute), 3 == this.data.month_index || 5 == this.data.rent_house_attribute) return console.log("酒店的直接弹出起始，结束日期", this.data.month_index, this.data.rent_house_attribute), this.setData({
      show_dialog_calendar: !0
    }), this.data.month_index = 3, this.setData({
      month_index: this.data.month_index
    }), void wx.setStorageSync("month_index", this.data.month_index);
    this.setData({
      show_expired_month: !0
    })
  },
  get_room_for_live: (c = a(t().mark((function e() {
    var a, o, n, s, r, i, c, _, d, l, h, p, g, m, f;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if ("" != (o = (a = this).data.this_rent_house_rec_id) && null != o && null != o) {
            e.next = 4;
            break
          }
          return e.abrupt("return");
        case 4:
          return null != (n = a.data.qry_floor) && "" != n && null != n || (n = "1楼"), "" != (s = a.data.key_word) && (n = "1楼"), r = a.data.cur_page, e.prev = 9, wx.showToast({
            title: "装载中...",
            icon: "none",
            duration: 500
          }), i = {
            rent_house_rec_id: o,
            qry_floor: n,
            cur_page: r,
            key_word: s
          }, e.next = 15, u.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_05_rent_house_mini_program/get_room_for_live", i);
        case 15:
          if ("000000000000" != (c = e.sent).data[0].resp_code) {
            e.next = 21;
            break
          }
          for (_ = [], d = 1; d < c.data.length; d++) l = c.data[d].room_code, h = c.data[d].room_name, c.data[d].floor, p = c.data[d].is_standard_dyfw, (g = {}).image = "https://qv1.pinganbaiyun.cn/img/img_005_room/bed.png", g.room_name = h, g.room_code = l, g.is_standard_dyfw = p, _.push(g);
          return m = c.data[0].total_rec, f = c.data[0].total_page, r = c.data[0].cur_page, a.setData({
            total_page: f,
            cur_page: r
          }), m > 6 && ((g = {}).image = "https://qv1.pinganbaiyun.cn/img/img_005_room/bed.png", g.room_name = m + "套" + r + "/" + f + "页", g.room_code = "page_info", _.push(g), (g = {}).image = "https://qv1.pinganbaiyun.cn/img/img_005_room/left.svg", g.room_name = "上一页", g.room_code = "上一页", _.push(g), (g = {}).image = "https://qv1.pinganbaiyun.cn/img/img_005_room/right.svg", g.room_name = "下一页", g.room_code = "下一页", _.push(g), (g = {}).image = "", g.room_name = "", g.room_code = "", _.push(g), (g = {}).image = "", g.room_name = "", g.room_code = "", _.push(g), (g = {}).image = "", g.room_name = "", g.room_code = "", _.push(g)), a.setData({
            one_floor_room: _
          }), e.abrupt("return");
        case 21:
          console.log("err:", c), wx.showToast({
            title: c.data[0].resp_msg + c.data[0].resp_code,
            icon: "none",
            duration: 3e3
          });
        case 23:
          e.next = 28;
          break;
        case 25:
          e.prev = 25, e.t0 = e.catch(9), console.log("get_room_for_live e", e.t0);
        case 28:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [9, 25]
    ])
  }))), function() {
    return c.apply(this, arguments)
  }),
  get_floor: (i = a(t().mark((function e() {
    var a, o, n, s, r, i, c, _, d;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if ("" != (o = (a = this).data.this_rent_house_rec_id) && null != o && null != o) {
            e.next = 4;
            break
          }
          return e.abrupt("return");
        case 4:
          return n = "", e.prev = 5, s = {
            rent_house_rec_id: o,
            qry_floor: n,
            cur_page: 1,
            key_word: "",
            room_code: a.data.selected_room_code
          }, e.next = 10, u.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_05_rent_house_mini_program/get_room_for_live", s);
        case 10:
          if ("000000000000" != (r = e.sent).data[0].resp_code) {
            e.next = 21;
            break
          }
          for (i = [], c = 0; c < r.data[0].floor_arr.length; c++) _ = r.data[0].floor_arr[c], (d = {}).index = c, d.cate_id = c, d.cate_name = _, i.push(d);
          return a.setData({
            cateItems: i
          }), i.length > 0 && (n = i[0].cate_name, a.setData({
            qry_floor: n,
            cur_page: 1
          }), a.get_room_for_live()), console.log("res.data[0].room_name", r.data[0].room_name), "" != r.data[0].room_name && null != r.data[0].room_name && null != r.data[0].room_name && a.setData({
            selected_room_name: r.data[0].room_name
          }), e.abrupt("return");
        case 21:
          console.log("err:", r), wx.showToast({
            title: r.data[0].resp_msg + r.data[0].resp_code,
            icon: "none",
            duration: 3e3
          });
        case 23:
          e.next = 28;
          break;
        case 25:
          e.prev = 25, e.t0 = e.catch(5), console.log("get_room_for_live e", e.t0);
        case 28:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [5, 25]
    ])
  }))), function() {
    return i.apply(this, arguments)
  }),
  async_ask_send_msg: function(e) {
    return new Promise((function(t, a) {
      wx.requestSubscribeMessage({
        tmplIds: e,
        success: function(e) {
          t(e)
        },
        fail: function(e) {
          a(e)
        }
      })
    }))
  },
  buttontap_confirm_join: function(e) {
    0 == e.detail.index ? this.setData({
      show_dialog_join: !1
    }) : 0 == this.data.letter_type ? this.setData({
      show_letter: !0,
      show_dialog_join: !1
    }) : this.throttle_confirm_notice()
  },
  buttontap_send_msg: function(e) {
    var t = this;
    if (0 == e.detail.index) return "THIRD_PARTY_APP" == t.data.this_options.come_param ? void wx.navigateBackMiniProgram({
      extraData: {
        res_code: "000000000000",
        resp_msg: "入住待审批"
      },
      success: function() {
        console.log("返回上一个小程序成功！")
      },
      fail: function() {
        console.log("返回上一个小程序失败"), t.go_index()
      }
    }) : (t.setData({
      show_ask_send_msg: !1
    }), void t.go_rent_house());
    wx.requestSubscribeMessage({
      tmplIds: ["CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ"],
      success: function(e) {
        t.setData({
          show_ask_send_msg: !1
        }), t.go_rent_house(), "THIRD_PARTY_APP" != t.data.this_options.come_param || wx.navigateBackMiniProgram({
          extraData: {
            res_code: "000000000000",
            resp_msg: "入住待审批"
          },
          success: function() {
            console.log("返回上一个小程序成功！")
          },
          fail: function() {
            console.log("返回上一个小程序失败"), t.go_index()
          }
        })
      },
      fail: function(e) {
        t.setData({
          show_ask_send_msg: !1
        }), t.go_rent_house(), "THIRD_PARTY_APP" != t.data.this_options.come_param || wx.navigateBackMiniProgram({
          extraData: {
            res_code: "000000000000",
            resp_msg: "入住待审批"
          },
          success: function() {
            console.log("返回上一个小程序成功！")
          },
          fail: function() {
            console.log("返回上一个小程序失败"), t.go_index()
          }
        })
      }
    })
  },
  get_live_info: (r = a(t().mark((function e() {
    var a, o, n, s, r, i, c;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if ("" != (a = this.data.this_rent_house_rec_id) && null != a && null != a) {
            e.next = 4;
            break
          }
          return e.abrupt("return");
        case 4:
          if (e.prev = 4, wx.showLoading({
              title: "装载中...",
              mask: !0
            }), o = wx.getStorageSync("openid"), n = wx.getStorageSync("unionid"), "" == o || null == o || null == o || "[object Undefined]" == o || "" == n || null == n || null == n || "[object Undefined]" == n) {
            e.next = 13;
            break
          }
          b.globalData.unionid = n, b.globalData.openid = o, e.next = 35;
          break;
        case 13:
          return e.prev = 13, e.next = 16, u.wx_login();
        case 16:
          if (s = e.sent, console.log("login_result:", s), "000000000000" != s.data[0].resp_code) {
            e.next = 26;
            break
          }
          b.globalData.openid = s.data[1].openid, b.globalData.unionid = s.data[1].unionid, b.globalData.session_key = s.data[1].session_key, wx.setStorageSync("openid", b.globalData.openid), wx.setStorageSync("unionid", b.globalData.unionid), e.next = 28;
          break;
        case 26:
          return wx.showModal({
            title: "提示",
            content: s.data[0].resp_msg + "(" + s.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 28:
          e.next = 35;
          break;
        case 30:
          return e.prev = 30, e.t0 = e.catch(13), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 35:
          return r = {
            rent_house_rec_id: a,
            openId: o
          }, i = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_005_get_live_info", e.next = 39, u.wx_request(i, r);
        case 39:
          if (c = e.sent, wx.hideLoading(), "000000000000" != c.data[0].resp_code) {
            e.next = 48;
            break
          }
          return i = "/page/component/pages/pass_document_green/component?encry_id=" + r.rent_house_rec_id + "&busi_type=1&cry_type=plain_text", console.log("encodeURIComponent url", i), wx.redirectTo({
            url: i
          }), e.abrupt("return");
        case 48:
          if ("0000000030566" != c.data[0].resp_code) {
            e.next = 52;
            break
          }
          return e.abrupt("return");
        case 52:
          if ("00000130581" != c.data[0].resp_code && "00000130583" != c.data[0].resp_code) {
            e.next = 56;
            break
          }
          return e.abrupt("return");
        case 56:
          if ("0000000030581" != c.data[0].resp_code) {
            e.next = 60;
            break
          }
          return e.abrupt("return");
        case 60:
          console.log("err:", c), wx.showModal({
            title: "提示",
            content: c.data[0].resp_msg + c.data[0].resp_code,
            showCancel: !1
          });
        case 62:
          e.next = 68;
          break;
        case 64:
          e.prev = 64, e.t1 = e.catch(4), console.log("获取房屋信息 e", e.t1), wx.hideLoading();
        case 68:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [4, 64],
      [13, 30]
    ])
  }))), function() {
    return r.apply(this, arguments)
  }),
  throttle_confirm_notice: function() {
    this.confirm_notice()
  },
  confirm_notice: function() {
    this.setData({
      show_letter: !1,
      letter_type: 1
    }), this.after_read_letter_then_join()
  },
  check_is_read: function(e) {
    this.setData({
      is_read: !0
    })
  },
  check_touch: function(e) {
    return !1
  },
  after_read_letter_then_join: (s = a(t().mark((function e() {
    var o, n, s, r, i, c, _, d, l;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          n = (o = this).data.this_rent_house_rec_id, o.data.selected_room_code, s = o.data.month_index, r = o.data.renter_remark, i = b.globalData.openid, s -= 3, c = o.data.checkInDate, _ = o.data.checkOutDate, -1 == s && (s = 2001), 0 == s && (s = 2002), 13 == s && (s = 18), 14 == s && (s = 24), 15 == s && (s = 60), -2 == s && (s = 1001), wx.showLoading({
            title: "申请入住中..."
          }), d = {
            openId: b.globalData.openid,
            rent_house_rec_id: n,
            room_code: o.data.selected_room_code,
            month_index: s,
            renter_remark: r,
            form_id: i,
            check_in_date: c,
            check_out_date: _,
            rent_house_code: o.data.rent_house_code
          }, l = {
            openId: b.globalData.openid
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: l,
            success: function() {
              var e = a(t().mark((function e(a) {
                var n, s, r, i, c, _, l, p, g;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", a), "000000000003" != (n = a.data[0].resp_code)) {
                        e.next = 31;
                        break
                      }
                      return s = h.get_url() + "mini_program/api_05_rent_house_mini_program/is_need_renter_perfect_infomation", r = {
                        openId: b.globalData.openid
                      }, i = JSON.stringify(r), e.next = 9, u.wx_request(s, i);
                    case 9:
                      if ("000000000000" != (c = e.sent).data[0].resp_code) {
                        e.next = 23;
                        break
                      }
                      if (_ = c.data[0].nation, l = c.data[0].province_code, p = c.data[0].is_has_permanent_detail_address, "65" != l || 1 != [void 0, null, "", "维吾尔族"].includes(_) && "false" != p) {
                        e.next = 20;
                        break
                      }
                      return g = JSON.stringify(d), wx.setStorageSync("join_rent_house_post_data", g), b.globalData.input_rent_house_rec_id = o.data.this_rent_house_rec_id, wx.navigateTo({
                        url: "../form_616_person_jion_rent_house/form_616_person_jion_rent_house"
                      }), e.abrupt("return");
                    case 20:
                      console.log("不用完善信息"), e.next = 25;
                      break;
                    case 23:
                      return wx.showModal({
                        title: "后台服务器异常",
                        content: "提交失败-0168," + c,
                        showCancel: !1
                      }), e.abrupt("return");
                    case 25:
                      console.log("join_rent_house post_data:", i), wx.showLoading({
                        title: "申请入住中...",
                        mask: !0
                      }), s = "https://xcx.pinganbaiyun.cn/mini_program/api_05_rent_house_mini_program/join_rent_house", wx.request({
                        url: s,
                        method: "POST",
                        dataType: "json",
                        data: d,
                        success: function(e) {
                          if (wx.hideLoading(), console.log("join_rent_house返回信息", e), o.setData({
                              show_dialog_join: !1
                            }), "000000000000" != e.data[0].resp_code) {
                            if ("000000000001" == e.data[0].resp_code || "0000000023128" == e.data[0].resp_code || "000000023121" == e.data[0].resp_code || "000000023111" == e.data[0].resp_code) {
                              if ("THIRD_PARTY_APP" == o.data.this_options.come_param) return void wx.navigateBackMiniProgram({
                                extraData: {
                                  res_code: "000000000001",
                                  resp_msg: "已入住"
                                },
                                success: function() {
                                  console.log("返回上一个小程序成功！")
                                },
                                fail: function() {
                                  console.log("返回上一个小程序失败"), o.go_index()
                                }
                              });
                              var t = "/page/component/pages/pass_document_green/component?encry_id=" + d.rent_house_rec_id + "&cry_type=plain_text&busi_type=1";
                              return console.log("encodeURIComponent url", t), void wx.redirectTo({
                                url: t
                              })
                            }
                            wx.showModal({
                              title: "提示",
                              content: e.data[0].resp_msg + "," + e.data[0].resp_code,
                              showCancel: !1,
                              success: function() {}
                            })
                          } else {
                            console.log("提交成功");
                            var a = e.data[0].renter_rec_id,
                              n = e.data[0].attribute;
                            o.data.renter_rec_id = a, o.data.rent_house_attribute = n, o.setData({
                              bt_apply_display: !0,
                              state: "已提交入住申请,等待管理员审核",
                              isable_room_picker: !0,
                              disable_month_picker: !0
                            }), wx.removeStorageSync("joint_rent_house_room_name"), wx.removeStorageSync("joint_rent_house_room_code"), wx.removeStorageSync("month_index"), wx.removeStorageSync("join_rent_house_post_data"), b.globalData.input_rent_house_rec_id = null;
                            var s = "申请入住【" + o.data.selected_room_name + "】已受理,请等待管理员审批";
                            o.setData({
                              show_success_info: s,
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
                      }), e.next = 43;
                      break;
                    case 31:
                      if ("000000000001" != n && "000000000002" != n && "000000000004" != n) {
                        e.next = 40;
                        break
                      }
                      return console.log("apply...."), g = JSON.stringify(d), wx.setStorageSync("join_rent_house_post_data", g), b.globalData.input_rent_house_rec_id = o.data.this_rent_house_rec_id, wx.showModal({
                        title: "平安码丨平安白云",
                        content: "您还未注册，您将进行注册步骤，注册成功之后您将入住",
                        showCancel: !1,
                        success: function() {
                          return "000000000001" == n ? (console.log("apply....000000000001 "), void wx.navigateTo({
                            url: "../../../component/pages/form_ocr_01/form"
                          })) : "000000000002" == n ? (o.setData({
                            this_sfz_XM: a.data[0].XM
                          }), o.setData({
                            this_sfz_ZJHM: a.data[0].ZJHM
                          }), o.setData({
                            this_sfz_mobile_phone: a.data[0].mobile_phone
                          }), b.globalData.page_verify_code_msg = "您已提交身份证资料,请进行基于生物识别的人脸核身", b.globalData.XM = o.data.this_sfz_XM, b.globalData.ZJHM = o.data.this_sfz_ZJHM, b.globalData.mobile_phone = o.data.this_sfz_mobile_phone, console.log("您已提交身份证资料,请进行基于生物识别的人脸核身...."), console.log("this_page.data.this_sfz_XM:", o.data.this_sfz_XM, b.globalData.XM, b.globalData.ZJHM), wx.navigateTo({
                            url: "../../../component/pages/form_ocr_03/form"
                          }), void console.log("apply....000000000002 ")) : "000000000004" == n ? (b.globalData.page_verify_code_msg = "已发送短信验证码,请输入短信验证码", console.log("submit code...."), void wx.navigateTo({
                            url: "../../../component/pages/form_ocr_04/form"
                          })) : void 0
                        }
                      }), e.abrupt("return");
                    case 40:
                      if ("000000000003" == n) {
                        e.next = 43;
                        break
                      }
                      return wx.showModal({
                        title: "提示",
                        content: "查询状态异常" + a.data[0].resp_msg + a.data[0].resp_code,
                        showCancel: !1
                      }), e.abrupt("return");
                    case 43:
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
        case 2:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function() {
    return s.apply(this, arguments)
  }),
  sv_014_calc_date: (n = a(t().mark((function e(a, o) {
    var n, s;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return e.prev = 1, n = {
            input_checkin_date: a,
            live_days: o
          }, e.next = 6, u.wx_request("https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_014_calc_date", n);
        case 6:
          if ("000000000000" != (s = e.sent).data[0].resp_code) {
            e.next = 11;
            break
          }
          return e.abrupt("return", s.data[0].input_checkout_date);
        case 11:
          return console.log("err:", s), wx.showToast({
            title: s.data[0].resp_msg + s.data[0].resp_code,
            icon: "none",
            duration: 3e3
          }), e.abrupt("return", s.data[0].input_checkout_date);
        case 14:
          e.next = 20;
          break;
        case 16:
          return e.prev = 16, e.t0 = e.catch(1), console.log("get_room_for_live e", e.t0), e.abrupt("return", s.data[0].input_checkout_date);
        case 20:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [1, 16]
    ])
  }))), function(e, t) {
    return n.apply(this, arguments)
  }),
  end_method: function() {},
  go_rent_house: (o = a(t().mark((function e(a) {
    var o, n, s, r, i;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (o = this, wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), n = wx.getStorageSync("openid"), s = wx.getStorageSync("unionid"), "" == n || null == n || null == n || "[object Undefined]" == n || "" == s || null == s || null == s || "[object Undefined]" == s) {
            e.next = 10;
            break
          }
          b.globalData.unionid = s, b.globalData.openid = n, e.next = 31;
          break;
        case 10:
          return e.prev = 10, e.next = 13, u.wx_login();
        case 13:
          if (r = e.sent, console.log("login_result:", r), "000000000000" != r.data[0].resp_code) {
            e.next = 22;
            break
          }
          b.globalData.openid = r.data[1].openid, b.globalData.unionid = r.data[1].unionid, wx.setStorageSync("openid", b.globalData.openid), wx.setStorageSync("unionid", b.globalData.unionid), e.next = 24;
          break;
        case 22:
          return wx.showModal({
            title: "提示",
            content: r.data[0].resp_msg + "(" + r.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 24:
          e.next = 31;
          break;
        case 26:
          return e.prev = 26, e.t0 = e.catch(10), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 31:
          i = {
            openId: b.globalData.openid,
            oper_type: "RENT_HOUSE"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: i,
            success: function(e) {
              if (wx.hideLoading(), console.log("检查进度结果", e), "000000000003" == e.data[0].resp_code) {
                var t = e.data[0].access_token;
                b.globalData.access_token = t;
                var a = o.data.renter_rec_id,
                  n = o.data.selected_room_code,
                  s = o.data.rent_house_code,
                  r = o.data.perfect_type,
                  i = o.data.rent_house_attribute;
                return console.log("buttontap_send_msg:", o.data.renter_rec_id, o.data.selected_room_code, o.data.rent_house_code, o.rent_house_attribute), void wx.navigateTo({
                  url: "../../../third_part/pages/rent_house/form?oper_type=perfect_information&room_code=" + n + "&renter_rec_id=" + a + "&rent_house_code=" + s + "&perfect_type=" + r + "&rent_house_attribute=" + i
                })
              }
              return b.globalData.back_url = "RENT_HOUSE", void wx.showModal({
                title: "安居助手",
                content: "体验房屋自主申报及入住登记功能，需要您实名注册。",
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
        case 32:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [10, 26]
    ])
  }))), function(e) {
    return o.apply(this, arguments)
  })
});