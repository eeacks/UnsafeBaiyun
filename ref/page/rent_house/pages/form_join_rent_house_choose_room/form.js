var e = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    rent_house_code: "",
    rent_house_rec_id: "",
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
  onLoad: function(e) {
    this.setData({
      rent_house_code: decodeURIComponent(e.rent_house_code)
    }), this.setData({
      rent_house_rec_id: decodeURIComponent(e.rent_house_rec_id)
    })
  },
  onShow: function(o) {
    console.log("===onshow==="), e.globalData.back_url = null;
    var t = "https://xcx.pinganbaiyun.cn/sfz/third_part/rent_house/index_choose_room.html?jump_to=choose_room&rent_house_code=" + this.data.rent_house_code + "&rent_house_rec_id=" + this.data.rent_house_rec_id;
    console.log("=====src=====", t), this.setData({
      src: t
    })
  },
  onUnload: function() {
    console.log("onUnload")
  },
  bindmessage: function(e) {
    var o = e.detail.data[0].room_name,
      t = e.detail.data[0].room_code;
    wx.removeStorageSync("joint_rent_house_room_name"), wx.removeStorageSync("joint_rent_house_room_code"), wx.setStorageSync("joint_rent_house_room_name", o), wx.setStorageSync("joint_rent_house_room_code", t), console.log("joint_rent_house_room_name", o)
  }
});