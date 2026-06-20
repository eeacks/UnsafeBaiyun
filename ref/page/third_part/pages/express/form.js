var a = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: ""
  },
  pickerConfirm: function(a) {
    this.setData({
      pickerHidden: !0
    }), this.setData({
      chosen: a.detail.value
    })
  },
  pickerCancel: function(a) {
    this.setData({
      pickerHidden: !0
    })
  },
  pickerShow: function(a) {
    this.setData({
      pickerHidden: !1
    })
  },
  formSubmit: function(a) {
    console.log("form发生了submit事件，携带数据为：", a.detail.value)
  },
  formReset: function(a) {
    console.log("form发生了reset事件，携带数据为：", a.detail.value), this.setData({
      chosen: ""
    })
  },
  onLoad: function(o) {
    console.log("express onload:", o);
    var e = this,
      n = o.web_url,
      t = o.msg_id,
      s = o.jump_to,
      c = "https://yda.pinganbaiyun.cn/bypamp/#/home/";
    if (n && (c = n), "express" == o.buzi_type ? c = "https://yda.pinganbaiyun.cn/paby-h5/#/" : "logistics" == o.buzi_type && (c = "https://yda.pinganbaiyun.cn/paby-h5/#/gatherWay/"), s) {
      var i = (s = decodeURIComponent(s)).split("@@@")[1],
        l = JSON.parse(decodeURI(i));
      t = l.msg_id, c = l.web_url
    }
    if (null != a.globalData.access_token && "" != a.globalData.access_token && null != a.globalData.access_token) {
      a.globalData.back_url = null;
      var d = "https://yda.pinganbaiyun.cn/bypamp/#/home/?access_token=" + a.globalData.access_token;
      return d = c + "?access_token=" + a.globalData.access_token, t && (d += "&msg_id=" + t), d = encodeURI(d), console.log("express normal src:", d), void e.setData({
        src: d
      })
    }
    wx.showLoading({
      title: "请稍等...",
      mask: !0
    }), wx.login({
      success: function(o) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: o.code
          },
          success: function(o) {
            if (console.log("拉取login", o), "000000000000" == o.data[0].resp_code) {
              a.globalData.openid = o.data[1].openid, a.globalData.session_key = o.data[1].session_key;
              var n = {
                  openId: a.globalData.openid,
                  oper_type: "EXPRESS"
                },
                s = "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state";
              console.log(s), wx.request({
                url: s,
                method: "POST",
                dataType: "json",
                data: n,
                success: function(o) {
                  if (wx.hideLoading(), console.log("检查进度结果", o), "000000000003" == o.data[0].resp_code) {
                    var n = o.data[0].access_token;
                    a.globalData.access_token = n, a.globalData.back_url = null;
                    var s = "https://yda.pinganbaiyun.cn/bypamp/#/home/?access_token=" + a.globalData.access_token;
                    return s = c + "?access_token=" + a.globalData.access_token, t && (s += "&msg_id=" + t), s = encodeURI(s), console.log("express normal src:", s), void e.setData({
                      src: s
                    })
                  }
                  return a.globalData.back_url = "EXPRESS", void wx.showModal({
                    title: "寄快递",
                    content: "体验寄快递功能，需要您实名注册。",
                    showCancel: !0,
                    cancelText: "暂不注册",
                    confirmText: "现在注册",
                    success: function(a) {
                      1 == a.confirm && wx.navigateTo({
                        url: "../../../index/index"
                      })
                    }
                  })
                },
                fail: function(a) {
                  wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", a), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-1," + a.errMsg,
                    showCancel: !1
                  })
                }
              })
            } else wx.hideLoading(), wx.showModal({
              title: "提示",
              content: "获取状态异常-3:" + o.data[0].resp_code + o.data[0].resp_msg,
              showCancel: !1
            })
          },
          fail: function(a) {
            wx.hideLoading(), console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", a), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + a.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(a) {
        wx.hideLoading(), console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", a), wx.showModal({
          title: "提示",
          content: "获取状态异常," + a.errMsg,
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
  },
  bindmessage: function(a) {
    console.log(a.detail.data[0], "数据")
  }
});