var a = require("../../../../@babel/runtime/helpers/typeof"),
  t = getApp();
Page({
  data: {
    count: 0,
    countTimer: null,
    complete: !1,
    camera_height: 1500,
    top_height: 0,
    name_height: 0,
    text_height: 0,
    wait_second: 60,
    show_msg: "正在核验 60",
    show_msg_name: "",
    verifying: !1,
    wait_a_moment: 0,
    timer_id: null,
    finish_timer: !1,
    options_data: null
  },
  onLoad: function(a) {
    this.data.options_data = a
  },
  onShow: function() {
    var a = wx.getSystemInfoSync(),
      t = a.windowHeight;
    a.windowWidth;
    this.setData({
      camera_height: t - 0
    });
    var e = .05 * t;
    this.setData({
      top_height: e
    });
    var o = .1 * t;
    this.setData({
      name_height: o
    });
    var n = .1 * t;
    this.setData({
      text_height: n
    })
  },
  onReady: function() {
    wx.createCameraContext() ? (this.cameraContext = wx.createCameraContext("myCamera"), this.drawProgressbg(), this.countInterval()) : wx.showModal({
      title: "提示",
      content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
    })
  },
  error: function(t) {
    console.log("1722493596216 error:", t.detail);
    "object" == a(t) && "object" == a(t.detail) && "" != t.detail.errMsg ? (this.setData({
      show_msg_name: t.detail.errMsg
    }), -1 != t.detail.errMsg.indexOf("permission") && this.setData({
      show_msg_name: "无相机权限,请打开"
    })) : this.setData({
      show_msg_name: JSON.stringify(t)
    })
  },
  start_camera_frame: function() {
    console.log("相机初始化成功");
    var a = this;
    wx.createCameraContext().onCameraFrame((function(e) {
      if (1 != a.data.verifying) {
        a.setData({
          verifying: !0
        });
        var o = new Uint8ClampedArray(e.data),
          n = wx.arrayBufferToBase64(o);
        o.length;
        if ("" != t.globalData.openid && null != t.globalData.openid && null != t.globalData.openid) {
          var i = {
            openId: t.globalData.openid,
            width: e.width,
            height: e.height,
            img_data: n
          };
          null != a.data.options_data && null != a.data.options_data && ("app_001_inner_xcx_face_login" != a.data.options_data.buzi_type && "app_003_inner_office_login" != a.data.options_data.buzi_type && "app_002_fujing_xcx_face_login" != a.data.options_data.buzi_type || (i.buzi_type = a.data.options_data.buzi_type, i.state_enc = t.globalData.state_enc, i.latitude = t.globalData.location_info.latitude, i.longitude = t.globalData.location_info.longitude));
          var s = "https://xcx.pinganbaiyun.cn/mini_program/api_01/face_check_with_openId";
          console.log("url", s);
          try {
            wx.request({
              url: s,
              method: "POST",
              dataType: "json",
              data: i,
              success: function(e) {
                if (console.log("1756903040256 res:", e), "000000000000" == e.data[0].resp_code) {
                  a.setData({
                    verifying: !0
                  }), a.setData({
                    finish_timer: !0
                  });
                  var o = e.data[0].show_msg_name;
                  a.setData({
                    show_msg_name: o
                  });
                  var n = e.data[0].png_string,
                    i = e.data[0].name,
                    s = e.data[0].id_card,
                    r = e.data[0].mobile_phone,
                    _ = e.data[0].timestamp,
                    l = e.data[0].avatar_string,
                    d = 1500;
                  null != a.data.options_data && null != a.data.options_data && ("app_001_inner_xcx_face_login" != a.data.options_data.buzi_type && "app_003_inner_office_login" != a.data.options_data.buzi_type && "app_002_fujing_xcx_face_login" != a.data.options_data.buzi_type || (wx.showModal({
                    title: "云盾",
                    content: "核验成功.3秒后页面将跳转.",
                    showCancel: !1,
                    success: function(a) {
                      wx.reLaunch({
                        url: "../../../index_01/pages/my/my"
                      })
                    }
                  }), d = 3e3)), setTimeout((function() {
                    if (null != a.data.options_data && null != a.data.options_data) {
                      if ("THIRD_PARTY_APP" == a.data.options_data.buzi_type) return wx.navigateBackMiniProgram({
                        extraData: {
                          res_code: "000000000000",
                          access_token: t.globalData.access_token
                        },
                        success: function() {
                          console.log("返回上一个小程序成功！")
                        }
                      }), void wx.reLaunch({
                        url: "../../../index_01/pages/my/my"
                      });
                      if ("app_001_inner_xcx_face_login" == a.data.options_data.buzi_type || "app_003_inner_office_login" == a.data.options_data.buzi_type || "app_002_fujing_xcx_face_login" == a.data.options_data.buzi_type) return void wx.reLaunch({
                        url: "../../../index_01/pages/my/my"
                      })
                    }
                    t.globalData.page_qrcode_qr_code = n, t.globalData.page_qrcode_name = i, t.globalData.page_qrcode_id_card = s, t.globalData.page_qrcode_mobile_phone = r, t.globalData.page_qrcode_expire_date = _, t.globalData.page_qrcode_avatar = l, wx.navigateTo({
                      url: "../form_03/form"
                    })
                  }), d)
                } else {
                  a.setData({
                    verifying: !1
                  });
                  o = e.data[0].show_msg;
                  a.setData({
                    show_msg_name: o
                  })
                }
              },
              fail: function(t) {
                console.log("face_check_frame_buf fail:", t);
                var e = t.errMsg;
                a.setData({
                  show_msg: e
                }), a.setData({
                  verifying: !1
                })
              }
            })
          } catch (t) {
            console.log("wx_request e:", t);
            r = t;
            a.setData({
              show_msg: r
            }), a.setData({
              verifying: !1
            })
          }
        } else {
          var r = "获取人员信息异常";
          a.setData({
            show_msg: r
          })
        }
      }
    })).start()
  },
  drawProgressbg: function() {
    var a = wx.createCanvasContext("canvasProgressbg"),
      t = wx.getSystemInfoSync(),
      e = t.windowWidth,
      o = t.windowHeight,
      n = e / 2,
      i = e / 2 + .25 * o - 1,
      s = e / 2 * .9;
    (a = wx.createCanvasContext("canvasProgressbg")).setLineWidth(5), a.setStrokeStyle("#a9a9a9"), a.setLineCap("round"), a.beginPath(), a.arc(n, i, s, 0, 2 * Math.PI, !1), a.fillStyle = "rgba(0, 0, 0, 0.8)", a.fill(), a.beginPath(), a.globalCompositeOperation = "source-out", a.rect(0, .25 * o - 1, e, o), a.fillStyle = "rgba(0, 0, 0, 0.8)", a.fill(), a.draw()
  },
  drawCircle: function(a) {
    var t = wx.getSystemInfoSync(),
      e = t.windowWidth,
      o = e / 2,
      n = e / 2 + .25 * t.windowHeight,
      i = e / 2 * .9,
      s = wx.createCanvasContext("canvasProgress"),
      r = s.createCircularGradient(170, 170, 150);
    r.addColorStop("0", "#fff"), r.addColorStop("0.5", "#8B00FF"), r.addColorStop("1.0", "#1DDEF0"), s.setLineWidth(5), s.setStrokeStyle(r), s.setLineCap("round"), s.beginPath(), s.arc(o, n, i, -Math.PI / 2, a * Math.PI - Math.PI / 2, !1), s.stroke(), s.draw()
  },
  countInterval: function() {
    var a = this;
    this.countTimer = setInterval((function() {
      if (a.data.count % 10 == 0) {
        var t = a.data.wait_second;
        if (t -= 1, a.setData({
            wait_second: t
          }), 1 == a.data.finish_timer) {
          var e = "核验完成";
          a.setData({
            show_msg: e
          })
        } else if (t <= 0 && t > -3) {
          e = "核验超时请返回";
          a.setData({
            show_msg: e
          })
        } else {
          if (-3 == t) return clearInterval(a.countTimer), void wx.reLaunch({
            url: "../../../index_01/pages/my/my"
          });
          e = "正在核验 " + a.data.wait_second;
          a.setData({
            show_msg: e
          })
        }
      }
      a.data.count <= 60 ? (a.drawCircle(a.data.count / 30), a.data.count++) : 0 == a.data.complete ? a.setData({
        count: 0
      }) : clearInterval(a.countTimer)
    }), 100)
  },
  count_down: function() {},
  onHide: function() {
    clearInterval(this.countTimer)
  },
  onUnload: function() {
    clearInterval(this.countTimer)
  }
});