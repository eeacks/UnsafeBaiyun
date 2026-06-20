var e = getApp();
Page({
  data: {
    src: null
  },
  onShow: function() {},
  takePhoto: function() {
    var o = this;
    wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      sourceType: ["camera"],
      success: function(a) {
        console.log(a);
        var t = a.tempFilePaths;
        if (t.length > 0) {
          o.setData({
            src: a.tempFilePaths[0]
          }), wx.showLoading({
            title: "核验中..."
          });
          var n = t[0];
          wx.uploadFile({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_and_compare",
            filePath: n,
            name: "upload",
            header: {
              "Content-Type": "multipart/form-data"
            },
            formData: {
              openId: e.globalData.openid
            },
            success: function(e) {
              var o = JSON.parse(e.data);
              if (wx.hideLoading(), "000000000000" == o[0].resp_code) {
                var a = "../../../launch_app/index?oper_state=FINISH&register=1";
                console.log(a, "url"), wx.redirectTo({
                  url: a
                })
              } else wx.showModal({
                title: "提示",
                content: "" + o[0].resp_msg,
                showCancel: !1
              })
            }
          })
        } else wx.showModal({
          title: "您未拍照",
          content: "请拍照",
          showCancel: !1
        })
      },
      fail: function(e) {
        console.log("拍照异常3211:", e), wx.showModal({
          title: "拍照异常",
          content: "拍照异常-3211",
          showCancel: !1
        }), wx.showModal({
          title: "拍照异常",
          content: "拍照异常-3212" + JSON.stringify(e),
          showCancel: !1
        })
      }
    })
  },
  error: function(e) {
    console.log(e.detail)
  },
  cancel: function() {},
  go_index: function() {
    wx.reLaunch({
      url: "../../../index_01/pages/my/my"
    })
  }
});