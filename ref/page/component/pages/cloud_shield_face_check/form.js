var t = getApp();
Page({
  data: {
    count: 0,
    countTimer: null,
    complete: !1,
    camera_height: 1500,
    top_height: 0,
    name_height: 0,
    text_height: 0,
    wait_second: 66,
    show_msg: "系统准备中 5",
    show_msg_name: "",
    verifying: !1,
    wait_a_moment: 0,
    timer_id: null,
    finish_timer: !1,
    show_take_photo: "none"
  },
  onLoad: function(t) {},
  onShow: function() {
    var t = wx.getSystemInfoSync(),
      e = t.windowHeight;
    t.windowWidth;
    this.setData({
      camera_height: e - 0
    });
    var a = .05 * e;
    this.setData({
      top_height: a
    });
    var o = .1 * e;
    this.setData({
      name_height: o
    });
    var n = .1 * e;
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
    console.log(t.detail)
  },
  start_camera_frame: function() {
    console.log("相机初始化成功");
    var e = this;
    if (null != t.globalData.XM)
      if (null != t.globalData.ZJHM)
        if (null != t.globalData.mobile_phone) {
          var a = t.globalData.openid;
          "AGENT" == t.globalData.register_type.substr(0, 5) && (a = t.globalData.register_type + a), "RENTER" == t.globalData.register_type.substr(0, 6) && (a = t.globalData.register_type + a), "COMPANY" == t.globalData.register_type.substr(0, 7) && (a = t.globalData.register_type + a), wx.createCameraContext().onCameraFrame((function(o) {
            if (!(e.data.wait_second >= 60) && 1 != e.data.verifying) {
              e.setData({
                verifying: !0
              });
              var n = new Uint8ClampedArray(o.data),
                s = wx.arrayBufferToBase64(n),
                i = n.length;
              console.log("len:", i);
              if ("" != t.globalData.openid && null != t.globalData.openid && null != t.globalData.openid) {
                var r = {
                    openId: a,
                    width: o.width,
                    height: o.height,
                    img_data: s
                  },
                  l = "https://xcx.pinganbaiyun.cn/mini_program/api_01/cloud_shield_face_check";
                console.log("url", l);
                try {
                  wx.request({
                    url: l,
                    method: "POST",
                    dataType: "json",
                    data: r,
                    success: function(o) {
                      if (console.log("res:", o), "000000000000" == o.data[0].resp_code) {
                        e.setData({
                          verifying: !0
                        }), e.setData({
                          finish_timer: !0
                        });
                        var n = o.data[0].show_msg_name;
                        e.setData({
                          show_msg_name: n
                        });
                        o.data[0].name, o.data[0].id_card;
                        setTimeout((function() {
                          t.globalData.page_verify_code_msg = "", e.send_verify_result(a, 1), wx.navigateTo({
                            url: "../form_ocr_04/form"
                          })
                        }), 1500)
                      } else {
                        e.setData({
                          verifying: !1
                        });
                        n = o.data[0].show_msg;
                        e.setData({
                          show_msg_name: n
                        })
                      }
                    },
                    fail: function(t) {
                      console.log("face_check_frame_buf fail:", t);
                      var a = t.errMsg;
                      e.setData({
                        show_msg: a
                      }), e.setData({
                        verifying: !1
                      })
                    }
                  })
                } catch (t) {
                  console.log("wx_request e:", t);
                  c = t;
                  e.setData({
                    show_msg: c
                  }), e.setData({
                    verifying: !1
                  })
                }
              } else {
                var c = "获取人员信息异常";
                e.setData({
                  show_msg: c
                })
              }
            }
          })).start()
        } else wx.showModal({
          title: "异常",
          content: "您提交的手机号码为空,请重新申请",
          showCancel: !1
        });
    else wx.showModal({
      title: "异常",
      content: "您提交的证件号码为空,请重新申请",
      showCancel: !1
    });
    else wx.showModal({
      title: "异常",
      content: "您提交的姓名为空,请重新申请",
      showCancel: !1
    })
  },
  drawProgressbg: function() {
    var t = wx.createCanvasContext("canvasProgressbg"),
      e = wx.getSystemInfoSync(),
      a = e.windowWidth,
      o = e.windowHeight,
      n = a / 2,
      s = a / 2 + .25 * o - 1,
      i = a / 2 * .9;
    (t = wx.createCanvasContext("canvasProgressbg")).setLineWidth(5), t.setStrokeStyle("#a9a9a9"), t.setLineCap("round"), t.beginPath(), t.arc(n, s, i, 0, 2 * Math.PI, !1), t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fill(), t.beginPath(), t.globalCompositeOperation = "source-out", t.rect(0, .25 * o - 1, a, o), t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fill(), t.draw()
  },
  drawCircle: function(t) {
    var e = wx.getSystemInfoSync(),
      a = e.windowWidth,
      o = a / 2,
      n = a / 2 + .25 * e.windowHeight,
      s = a / 2 * .9,
      i = wx.createCanvasContext("canvasProgress"),
      r = i.createCircularGradient(170, 170, 150);
    r.addColorStop("0", "#fff"), r.addColorStop("0.5", "#8B00FF"), r.addColorStop("1.0", "#1DDEF0"), i.setLineWidth(5), i.setStrokeStyle(r), i.setLineCap("round"), i.beginPath(), i.arc(o, n, s, -Math.PI / 2, t * Math.PI - Math.PI / 2, !1), i.stroke(), i.draw()
  },
  countInterval: function() {
    var t = this;
    this.countTimer = setInterval((function() {
      if (t.data.count % 10 == 0) {
        var e = t.data.wait_second;
        if (e -= 1, t.setData({
            wait_second: e
          }), 1 == t.data.finish_timer) {
          var a = "核验完成";
          t.setData({
            show_msg: a
          })
        } else if (e <= 0 && e > -3) {
          a = "核验超时请返回";
          t.setData({
            show_msg: a
          })
        } else {
          if (-3 == e) return clearInterval(t.countTimer), void wx.reLaunch({
            url: "../../../index_01/pages/my/my"
          });
          if (e >= 61) {
            a = "系统准备中 " + (e - 61);
            t.setData({
              show_msg: a
            })
          } else {
            a = "正在核验 " + t.data.wait_second;
            t.setData({
              show_msg: a
            })
          }
        }
      }
      t.data.count <= 60 ? (t.drawCircle(t.data.count / 30), t.data.count++) : 0 == t.data.complete ? t.setData({
        count: 0
      }) : clearInterval(t.countTimer)
    }), 100)
  },
  count_down: function() {},
  onHide: function() {
    clearInterval(this.countTimer)
  },
  onUnload: function() {
    clearInterval(this.countTimer)
  },
  send_verify_result: function(t, e) {
    wx.showLoading({
      title: "正在发送短信验证码..."
    });
    var a = {
      openId: t,
      verify_result: e
    };
    console.log("send_verify_result:", a);
    wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/send_verify_result",
      method: "POST",
      dataType: "json",
      data: a,
      success: function(t) {
        wx.hideLoading(), "000000000000" == t.data[0].resp_code || ("-32198" == t.data[0].resp_code ? wx.showModal({
          title: "提示",
          content: "本次注册已超时,请重新注册",
          showCancel: !1,
          success: function(t) {
            wx.navigateTo({
              url: "../../../index/index"
            })
          }
        }) : "000000000003" == t.data[0].resp_code ? wx.showModal({
          title: "提示",
          content: "您已注册",
          showCancel: !1,
          success: function(t) {
            wx.navigateTo({
              url: "../../../index/index"
            })
          }
        }) : "000000000004" == t.data[0].resp_code ? wx.showModal({
          title: "提示",
          content: "验证成功,已发送短信验证码",
          showCancel: !1,
          success: function(t) {
            wx.navigateTo({
              url: "../form_ocr_04/form"
            })
          }
        }) : (console.log("err:", t), wx.showModal({
          title: "异常",
          content: "发送短信验证码失败," + t.data[0].resp_code + t.data[0].resp_msg,
          showCancel: !1
        })))
      },
      fail: function(t) {
        wx.hideLoading(), console.log("提交失败，", t), wx.showModal({
          title: "异常",
          content: "发送短信验证码失败-0168," + t.errMsg,
          showCancel: !1
        })
      }
    })
  },
  takePhoto: function() {}
});