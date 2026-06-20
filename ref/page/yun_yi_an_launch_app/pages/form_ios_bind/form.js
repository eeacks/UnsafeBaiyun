getApp();
Page({
  data: {
    navigationBarTitleText: "平安码丨平安白云",
    pickerHidden: !0,
    chosen: "",
    src: "",
    showModal_launch: !0,
    modal_content: "",
    showModal_lf_launch: !1
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
  onLoad: function(o) {
    var e = decodeURIComponent(o.jump_source),
      t = decodeURIComponent(o.oper_type);
    return "LF_LAUNCH_REGISTER" != e && "undefined" == e ? "FINISH_BIND" == t ? void this.setData({
      modal_content: "您已通过平安码丨平安白云身份核验 请返回云易安"
    }) : void this.setData({
      modal_content: "您已取消绑定 请返平安码丨平安白云APP"
    }) : (this.setData({
      modal_content: "您已通过平安码丨平安白云身份核验 请返回我的来访"
    }), this.setData({
      showModal_lf_launch: !0
    }), !1)
  },
  error: function(o) {
    console.log(o.detail)
  },
  onShow: function() {
    console.log("onShow")
  },
  onUnload: function() {
    console.log("onUnload")
  },
  launchAppError: function(o) {
    console.log(o.detail.errMsg), wx.showModal({
      title: "返回app异常",
      content: o.detail.errMsg,
      confirmText: "确定",
      showCancel: !1,
      success: function(o) {}
    })
  },
  go_index: function() {
    wx.redirectTo({
      url: "../../../index_01/pages/my/my"
    })
  }
});