var o = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: ""
  },
  pickerConfirm: function(o) {
    this.setData({
      pickerHidden: !0
    }), this.setData({
      chosen: o.detail.value
    })
  },
  pickerCancel: function(o) {
    this.setData({
      pickerHidden: !0
    })
  },
  pickerShow: function(o) {
    this.setData({
      pickerHidden: !1
    })
  },
  formSubmit: function(o) {
    console.log("form发生了submit事件，携带数据为：", o.detail.value)
  },
  formReset: function(o) {
    console.log("form发生了reset事件，携带数据为：", o.detail.value), this.setData({
      chosen: ""
    })
  },
  onLoad: function() {},
  onShow: function() {
    console.log("onShow"), o.globalData.back_url = null;
    var n = "https://xcx.pinganbaiyun.cn/strike_black/third_part/crack_down_black/personal_information.html?access_token=" + o.globalData.access_token + "&jump_to=personal_information";
    console.log("personal_information", n), this.setData({
      src: n
    })
  },
  onUnload: function() {
    console.log("onUnload")
  },
  bindmessage: function(o) {}
});