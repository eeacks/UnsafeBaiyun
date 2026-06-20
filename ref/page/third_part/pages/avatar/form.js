var e = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: ""
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
  onLoad: function(o) {
    console.log("rent_house onload:", o);
    var a = "";
    try {
      e.globalData.back_url = null, e.globalData.access_token, a = decodeURIComponent(o.jump_to);
      var t = decodeURIComponent(o.manager_rec_id);
      if ("GO_MANAGER" == a) {
        var n = "https://xcx.pinganbaiyun.cn/sfz/third_part/rent_house/index.html?access_token=" + e.globalData.access_token + "&jump_to=" + a + "&manager_rec_id=" + t;
        return n = encodeURI(n), console.log("ret_house jump src:", n), void this.setData({
          src: n
        })
      }
    } catch (e) {
      console.log("onLoad e", e), "", a = ""
    }
    e.globalData.back_url = null;
    n = "https://qv1.pinganbaiyun.cn/p_055_rent_house_xcx/www/index.html?access_token=" + e.globalData.access_token + "&jump_to=GO_UPDATE_AVATRA";
    n = encodeURI(n), console.log("ret_house normal src:", n), this.setData({
      src: n
    })
  },
  onShow: function() {
    console.log("onShow")
  },
  onUnload: function() {
    console.log("onUnload")
  },
  bindmessage: function(o) {
    console.log(o.detail.data[0], "数据");
    var a = "",
      t = "";
    try {
      a = o.detail.data[0].company_add_foreign_jump_to, t = o.detail.data[0].openId
    } catch (o) {
      a = "", t = ""
    }
    if ("rent_house_add_foreign_jump_to" == a && "undefined" != a && null != a) {
      console.log("小程序出租屋录入境外人员数据"), a = o.detail.data[0].company_add_foreign_jump_to;
      var n = o.detail.data[0].company_of_community,
        r = o.detail.data[0].company_rec_id,
        d = o.detail.data[0].country,
        c = o.detail.data[0].file_id_ocr,
        i = o.detail.data[0].gender,
        _ = o.detail.data[0].id_card,
        S = o.detail.data[0].latitude,
        l = o.detail.data[0].live_address,
        g = o.detail.data[0].login_id_card,
        s = o.detail.data[0].login_name,
        m = o.detail.data[0].longitude,
        y = o.detail.data[0].manual_recording_other_reason,
        u = o.detail.data[0].manual_recording_reason,
        x = o.detail.data[0].mobile_phone,
        w = o.detail.data[0].name,
        p = o.detail.data[0].police_station,
        v = o.detail.data[0].remark,
        h = o.detail.data[0].department_code,
        f = o.detail.data[0].expired_month_foreign,
        b = o.detail.data[0].date_unit_foreign;
      wx.removeStorageSync("company_add_foreign_jump_to"), wx.removeStorageSync("company_of_community"), wx.removeStorageSync("company_rec_id"), wx.removeStorageSync("country"), wx.removeStorageSync("file_id_ocr"), wx.removeStorageSync("gender"), wx.removeStorageSync("id_card"), wx.removeStorageSync("latitude"), wx.removeStorageSync("live_address"), wx.removeStorageSync("login_id_card"), wx.removeStorageSync("login_name"), wx.removeStorageSync("longitude"), wx.removeStorageSync("manual_recording_other_reason"), wx.removeStorageSync("manual_recording_reason"), wx.removeStorageSync("mobile_phone"), wx.removeStorageSync("name"), wx.removeStorageSync("police_station"), wx.removeStorageSync("remark"), wx.removeStorageSync("department_code"), wx.removeStorageSync("expired_month_foreign"), wx.removeStorageSync("date_unit_foreign"), wx.setStorageSync("company_add_foreign_jump_to", a), wx.setStorageSync("company_of_community", n), wx.setStorageSync("company_rec_id", r), wx.setStorageSync("country", d), wx.setStorageSync("file_id_ocr", c), wx.setStorageSync("gender", i), wx.setStorageSync("id_card", _), wx.setStorageSync("latitude", S), wx.setStorageSync("live_address", l), wx.setStorageSync("login_id_card", g), wx.setStorageSync("login_name", s), wx.setStorageSync("longitude", m), wx.setStorageSync("manual_recording_other_reason", y), wx.setStorageSync("manual_recording_reason", u), wx.setStorageSync("mobile_phone", x), wx.setStorageSync("name", w), wx.setStorageSync("police_station", p), wx.setStorageSync("remark", v), wx.setStorageSync("department_code", h), wx.setStorageSync("expired_month_foreign", f), wx.setStorageSync("date_unit_foreign", b)
    } else if ("" != t && "undefined" != t && null != t) {
      console.log("根据openId判断是否是出租屋审批租客后跳过来的下发模板消息给租客");
      var k = o.detail.data[0].oper_type,
        D = o.detail.data[0].house_type,
        j = o.detail.data[0].renter_rec_id;
      wx.removeStorageSync("openId"), wx.removeStorageSync("oper_type"), wx.removeStorageSync("house_type"), wx.removeStorageSync("renter_rec_id"), wx.setStorageSync("openId", t), wx.setStorageSync("oper_type", k), wx.setStorageSync("house_type", D), wx.setStorageSync("renter_rec_id", j)
    } else {
      console.log("待人录入套间 代人注册"), e.globalData.register_type = "RENTER_" + Math.random().toString(36).substr(2, 5) + "_";
      var R = o.detail.data[0].rent_house_code,
        I = o.detail.data[0].room_code,
        A = o.detail.data[0].room_name,
        U = o.detail.data[0].expired_month,
        C = o.detail.data[0].date_unit;
      wx.removeStorageSync("rent_house_code"), wx.removeStorageSync("room_code"), wx.removeStorageSync("room_name"), wx.removeStorageSync("expired_month"), wx.removeStorageSync("date_unit"), wx.setStorageSync("rent_house_code", R), wx.setStorageSync("room_code", I), wx.setStorageSync("room_name", A), wx.setStorageSync("expired_month", U), wx.setStorageSync("date_unit", C)
    }
  }
});