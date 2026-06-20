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
  onLoad: function(t) {
    var e = this,
      s = decodeURIComponent(t.which_src);
    console.log("which_src:", s), o.globalData.back_url = null;
    wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_05_rent_house_mini_program/get_yasf_list",
      method: "GET",
      dataType: "json",
      data: {
        foo: "foo"
      },
      success: function(o) {
        if (console.log("get_video_list res", o), "000000000000" == o.data[0].resp_code) {
          var t = "";
          "src_yasf_menu" == s ? t = o.data[0].src_yasf_menu : "01" == s ? t = "https://mp.weixin.qq.com/s/fAplzneSftRDZ1wtPlQlJg" : "02" == s ? t = "https://mp.weixin.qq.com/s/LKKAD4mn0aiY5bb0rfooLw" : "03" == s ? t = "https://mp.weixin.qq.com/s/-4XzLTTWcRsHPm21iHZ7jw" : "04" == s ? t = "https://mp.weixin.qq.com/s/6EDbcwOHVeNzcSwCyVVdwg" : "05" == s ? t = "https://mp.weixin.qq.com/s/fAplzneSftRDZ1wtPlQlJg" : "11" == s ? t = "https://mp.weixin.qq.com/s/e8rLpOlaFlbdNU3YGcr8rQ" : "yasf_001" == s ? t = o.data[0].yasf_001.link : "yasf_002" == s ? t = o.data[0].yasf_002.link : "yasf_003" == s && (t = o.data[0].yasf_003.link), console.log("yasf src:", t), e.setData({
            src: t
          })
        } else wx.showModal({
          title: "提示",
          content: "获取数据异常-3:" + o.data[0].resp_code + o.data[0].resp_msg,
          showCancel: !1
        })
      },
      fail: function(o) {
        console.log("失败-0161，将无法正常使用开放接口等服务", o), wx.showModal({
          title: "提示",
          content: "获取数据异常-4," + o.errMsg,
          showCancel: !1
        })
      }
    })
  },
  onShow: function() {
    console.log("onShow")
  },
  onUnload: function() {
    console.log("onUnload")
  }
});