var e = getApp();
Page({
  data: {
    navigationBarTitleText: "平安码丨平安白云",
    pickerHidden: !0,
    chosen: "",
    src: "",
    mobile_phone: "",
    XM: "",
    ZJHM: "",
    canvas_height: 0,
    canvas_width: 0,
    attendSuccessImg: null,
    canvasImgUrl: null,
    upload_file_id: null,
    showModal_camera: !1,
    showModal_location: !1,
    showModal_user_info: !1
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
  onLoad: function(e) {},
  onShow: function() {
    console.log("onShow")
  },
  onUnload: function() {
    console.log("onUnload")
  },
  admin_renter_remind: function(e) {
    var o = this;
    wx.requestSubscribeMessage({
      tmplIds: ["CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ"],
      success: function(e) {
        o.setData({
          show_ask_send_msg: !1
        }), "accept" != e.CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ && wx.showModal({
          title: "平安码丨平安白云",
          content: "订阅消息不成功,您确定不接收平安码丨平安白云审批消息提醒？",
          showCancel: !0,
          cancelText: "暂不接收",
          confirmText: "接收提醒",
          success: function(e) {
            1 == e.confirm && wx.openSetting({
              success: function(e) {}
            })
          }
        })
      },
      fail: function(e) {
        wx.showModal({
          title: "平安码丨平安白云",
          content: "订阅消息不成功,您确定不接收平安码丨平安白云审批消息提醒？",
          showCancel: !0,
          cancelText: "暂不接收",
          confirmText: "接收提醒",
          success: function(e) {
            1 == e.confirm && wx.openSetting({
              success: function(e) {}
            })
          }
        })
      }
    })
  },
  go_rent_house: function() {
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
              e.globalData.openid = o.data[1].openid, e.globalData.session_key = o.data[1].session_key;
              var n = {
                openId: e.globalData.openid,
                oper_type: "RENT_HOUSE"
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: n,
                success: function(o) {
                  if (wx.hideLoading(), console.log("检查进度结果", o), "000000000003" == o.data[0].resp_code) {
                    var n = o.data[0].access_token;
                    return e.globalData.access_token = n, void wx.navigateTo({
                      url: "../../../third_part/pages/rent_house/form"
                    })
                  }
                  return e.globalData.back_url = "RENT_HOUSE", void wx.showModal({
                    title: "安居助手",
                    content: "体验房屋自主申报及住宿自助登记功能，需要您实名注册。",
                    showCancel: !0,
                    cancelText: "暂不注册",
                    confirmText: "现在注册",
                    success: function(e) {
                      1 == e.confirm && wx.navigateTo({
                        url: "../../../index/index"
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
              })
            } else wx.hideLoading(), wx.showModal({
              title: "提示",
              content: "获取状态异常-3:" + o.data[0].resp_code + o.data[0].resp_msg,
              showCancel: !1
            })
          },
          fail: function(e) {
            wx.hideLoading(), console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + e.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(e) {
        wx.hideLoading(), console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
          title: "提示",
          content: "获取状态异常," + e.errMsg,
          showCancel: !1
        })
      }
    })
  }
});