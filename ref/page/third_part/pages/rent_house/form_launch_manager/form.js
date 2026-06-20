var o = getApp();
Page({
  data: {
    hide_index: !0,
    showModal_user_info: !1,
    scene: null
  },
  onLoad: function(o) {
    wx.showLoading({
      title: "请稍等...",
      mask: !0
    });
    var e = decodeURIComponent(o.scene);
    console.log("scene:", e);
    var n = !1;
    try {
      parseInt(e) > 1 && (n = !0)
    } catch (o) {
      console.log(o)
    }
    if (1 != n) wx.showModal({
      title: "提示",
      content: "参数异常",
      showCancel: !1
    });
    else if (parseInt(e) >= 1) {
      console.log("跳转栋长明细页面");
      var a = e;
      return void this.go_manager(a)
    }
  },
  error: function(o) {
    console.log(o.detail)
  },
  onShow: function() {
    console.log("onShow")
  },
  onUnload: function() {
    console.log("onUnload lauch activity")
  },
  go_manager: function(e) {
    var n = this;
    wx.showLoading({
      title: "请稍等...",
      mask: !0
    }), wx.login({
      success: function(a) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: a.code
          },
          success: function(a) {
            if (console.log("拉取login", a), wx.hideLoading(), "000000000000" == a.data[0].resp_code) {
              o.globalData.openid = a.data[1].openid, o.globalData.session_key = a.data[1].session_key;
              var t = {
                openId: o.globalData.openid,
                oper_type: "RENT_HOUSE"
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: t,
                success: function(a) {
                  if (console.log("检查进度结果", a), wx.hideLoading(), "000000000003" == a.data[0].resp_code) {
                    var t = a.data[0].access_token;
                    return o.globalData.access_token = t, setTimeout((function() {
                      n.setData({
                        hide_index: !1
                      })
                    }), 1e3), void wx.navigateTo({
                      url: "../../../../third_part/pages/rent_house/form?jump_to=GO_MANAGER&manager_rec_id=" + e
                    })
                  }
                  return o.globalData.access_token = "NOT_REGISTER", setTimeout((function() {
                    n.setData({
                      hide_index: !1
                    })
                  }), 1e3), void wx.navigateTo({
                    url: "../../../../third_part/pages/rent_house/form?jump_to=GO_MANAGER&manaer_rec_id=" + e
                  })
                },
                fail: function(o) {
                  console.log("获取用户手机号失败，将无法正常使用开放接口等服务", o), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-1," + o.errMsg,
                    showCancel: !1
                  })
                }
              })
            } else wx.showModal({
              title: "提示",
              content: "获取状态异常-3:" + a.data[0].resp_code + a.data[0].resp_msg,
              showCancel: !1
            })
          },
          fail: function(o) {
            console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", o), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + o.errMsg,
              showCancel: !1
            }), wx.hideLoading()
          }
        })
      },
      fail: function(o) {
        console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", o), wx.showModal({
          title: "提示",
          content: "获取状态异常," + o.errMsg,
          showCancel: !1
        }), wx.hideLoading()
      }
    })
  },
  go_index: function() {
    wx.reLaunch({
      url: "../../../../index_01/pages/my/my"
    })
  },
  hideModal_user_info: function() {
    this.setData({
      showModal_user_info: !1
    }), 7 == this.data.scene && this.go_activity_face_merge()
  },
  get_user_info_result: function(e) {
    var n = e.detail.userInfo.nickName;
    console.log("nick_nanme:", n), o.globalData.nick_nanme = n, 7 == this.data.scene && this.go_activity_face_merge()
  }
});