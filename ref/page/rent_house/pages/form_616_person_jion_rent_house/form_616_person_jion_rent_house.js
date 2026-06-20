require("../../../../@babel/runtime/helpers/Arrayincludes");
var e, t, a = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../../../util/util.js"),
  r = require("../../../../config"),
  i = getApp();
Page({
  data: {
    is_show_perfecting_infomation: !0,
    is_show_add_activity: !1,
    show_nation: !1,
    data_nation: [
      ["请选择民族", "汉族", "维吾尔族", "蒙古族", "回族", "藏族", "苗族", "彝族", "壮族", "布依族", "朝鲜族", "满族", "侗族", "瑶族", "白族", "土家族", "哈尼族", "哈萨克族", "傣族", "黎族", "傈僳族", "佤族", "畲族", "高山族", "拉祜族", "水族", "东乡族", "纳西族", "景颇族", "柯尔克孜族", "土族", "达斡尔族", "仫佬族", "羌族", "布朗族", "撒拉族", "毛南族", "仡佬族", "锡伯族", "阿昌族", "普米族", "塔吉克族", "怒族", "乌孜别克族", "俄罗斯族", "鄂温克族", "德昂族", "保安族", "裕固族", "京族", "塔塔尔族", "独龙族", "鄂伦春族", "赫哲族", "门巴族", "珞巴族", "基诺族"]
    ],
    data_transprt: ["请选择交通方式", "长途汽车", "铁路", "民航", "自驾", "其他"],
    data_transprt_index: 0,
    show_ljd: !1,
    data_ljd: [
      ["请选择", "休闲会所", "旅业", "出租房", "网吧", "工地工棚", "个体摊贩", "集体宿舍", "居民住宅", "沿街露宿", "老乡住处", "机场", "火车站", "客运站", "检查站", "其他"]
    ],
    dest: {
      address_prop_value: [{
        name: "省",
        disabled: !1
      }, {
        name: "市",
        disabled: !1
      }, {
        name: "区/乡",
        disabled: !1
      }],
      show_level: 2,
      fieldValue: "",
      show: !1
    },
    form_data_perfect_infomation: {
      nation: "",
      parent_address: ""
    },
    form_data_person: {
      name: "",
      idCard: "",
      sex: "",
      areaNo: "",
      address: ""
    },
    form_data_activity: {
      arriveTime: "",
      cjcj: "1",
      contacttel: "",
      coordination: "1",
      depcode: "",
      destCountry: "",
      destCity: "",
      destProvince: "",
      endAddress: "",
      imeiEsnMeid: "",
      leaveTime: "",
      ljd: "",
      ljd_text: "",
      ljdCity: "440100",
      ljdCountry: "440111",
      ljdProvince: "440000",
      objectId: "",
      qtKyjx: "",
      remark: "",
      startAddress: "",
      stayReason: "",
      transport: ""
    }
  },
  onLoad: (t = n(a().mark((function e(t) {
    var n, s, _, d, c, u, l, p, h;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return n = this, s = wx.getStorageSync("join_rent_house_post_data"), _ = JSON.parse(s), console.log(_), d = r.get_url() + "mini_program/api_05_rent_house_mini_program/is_need_renter_perfect_infomation", c = {
            openId: i.globalData.openid
          }, u = JSON.stringify(c), e.next = 9, o.wx_request(d, u);
        case 9:
          if ("000000000000" != (l = e.sent).data[0].resp_code) {
            e.next = 17;
            break
          }
          p = l.data[0].nation, l.data[0].province_code, h = l.data[0].is_has_permanent_detail_address, 1 == [void 0, null, ""].includes(p) || "false" == h ? n.setData({
            is_show_perfecting_infomation: !0
          }) : n.setData({
            is_show_perfecting_infomation: !1
          }), e.next = 19;
          break;
        case 17:
          return wx.showModal({
            title: "后台服务器异常",
            content: "提交失败-1640913847," + l.data[0].resp_msg,
            showCancel: !1
          }), e.abrupt("return");
        case 19:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(e) {
    return t.apply(this, arguments)
  }),
  click_nation: function() {
    this.setData({
      show_nation: !0
    })
  },
  sure_callback_nation: function(e) {
    var t = this;
    t.setData({
      show_nation: !1
    }), console.log(e.detail);
    var a = e.detail.choosedData[0];
    if (0 == e.detail.choosedIndexArr[0]) return wx.showToast({
      title: "请选择民族",
      icon: "none",
      duration: 1e3
    }), void setTimeout((function() {
      t.setData({
        "form_data_perfect_infomation.nation": a,
        show_nation: !0
      })
    }), 1e3);
    t.setData({
      "form_data_perfect_infomation.nation": a
    })
  },
  cancle_callback_nation: function(e) {
    this.setData({
      show_nation: !1
    })
  },
  dest_show_picker: function() {
    this.setData({
      "dest.show": !0
    })
  },
  dest_hide_picker: function() {
    this.setData({
      "dest.show": !1
    })
  },
  dest_get_return: function(e) {
    this.setData({
      "dest.fieldValue": e.detail.location_str
    }), this.dest_hide_picker(), console.log(e)
  },
  click_jld: function() {
    this.setData({
      show_ljd: !0
    })
  },
  sure_callback_ljd: function(e) {
    var t = this;
    t.setData({
      show_ljd: !1
    });
    var a = e.detail.choosedData[0];
    if (0 == e.detail.choosedIndexArr[0]) return wx.showToast({
      title: "请落脚点类型",
      icon: "none",
      duration: 1e3
    }), void setTimeout((function() {
      t.setData({
        show_ljd: !0
      })
    }), 1e3);
    t.setData({
      "form_data_activity.ljd_text": a
    })
  },
  cancle_callback_ljd: function(e) {
    this.setData({
      show_ljd: !1
    })
  },
  bindTransportChange: function(e) {
    console.log(this.data.data_transprt[e.detail.value]), this.setData({
      data_transprt_index: e.detail.value,
      "form_data_activity.transport": this.data.data_transprt[e.detail.value]
    })
  },
  input_parent_address: function(e) {
    var t = e.detail.value;
    this.setData({
      "form_data_perfect_infomation.parent_address": t
    })
  },
  submit_apply: (e = n(a().mark((function e() {
    var t, n, s, _, d, c, u, l, p;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return t = this, n = wx.getStorageSync("join_rent_house_post_data"), n = JSON.parse(n), console.log(n), wx.showLoading({
            title: "正在提交..."
          }), s = r.get_url() + "mini_program/api_05_rent_house_mini_program/submit_perfect_infomation", _ = {
            rent_house_rec_id: n.rent_house_rec_id,
            openId: i.globalData.openid,
            nation: t.data.form_data_perfect_infomation.nation,
            parent_address: t.data.form_data_perfect_infomation.parent_address,
            transport: t.data.form_data_activity.transport
          }, d = JSON.stringify(_), e.next = 11, o.wx_request(s, d);
        case 11:
          if ("000000000000" != (c = e.sent).data[0].resp_code) {
            e.next = 17;
            break
          }
          wx.hideLoading(), console.log("完善信息提交成功"), e.next = 20;
          break;
        case 17:
          return wx.hideLoading(), wx.showModal({
            title: "提交失败",
            content: c.data[0].resp_msg,
            showCancel: !1
          }), e.abrupt("return");
        case 20:
          return wx.showLoading({
            title: "申请入住中...",
            mask: !0
          }), s = r.get_url() + "mini_program/api_05_rent_house_mini_program/join_rent_house", e.next = 24, o.wx_request(s, JSON.stringify(n));
        case 24:
          if (u = e.sent, wx.hideLoading(), "000000000000" != u.data[0].resp_code) {
            e.next = 40;
            break
          }
          return console.log("提交成功"), wx.removeStorageSync("joint_rent_house_room_name"), wx.removeStorageSync("joint_rent_house_room_code"), wx.removeStorageSync("month_index"), wx.removeStorageSync("join_rent_house_post_data"), i.globalData.input_rent_house_rec_id = null, l = u.data[0].renter_rec_id, p = u.data[0].attribute, wx.showModal({
            title: "提交成功",
            content: "申请入住已受理,请等待管理员审批",
            showCancel: !1,
            success: function(e) {
              var t = n.room_code,
                a = n.rent_house_code;
              wx.navigateTo({
                url: "../../../third_part/pages/rent_house/form?oper_type=perfect_information&room_code=" + t + "&renter_rec_id=" + l + "&rent_house_code=" + a + "&perfect_type=&rent_house_attribute=" + p
              })
            }
          }), e.abrupt("return");
        case 40:
          if (1 != ["000000000001", "0000000023128", "000000023121", "000000023111"].includes(u.data[0].resp_code)) {
            e.next = 47;
            break
          }
          return s = "/page/component/pages/pass_document_green/component?encry_id=" + n.rent_house_rec_id + "&busi_type=1&cry_type=plain_text", console.log("encodeURIComponent url", s), wx.redirectTo({
            url: s
          }), e.abrupt("return");
        case 47:
          return wx.showModal({
            title: "提示",
            content: u.data[0].resp_msg + "," + u.data[0].resp_code,
            showCancel: !1,
            success: function() {
              wx.reLaunch({
                url: "/page/index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 49:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function() {
    return e.apply(this, arguments)
  }),
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});