var e = getApp();
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
    show_take_photo: "none",
    register_token: ""
  },
  onLoad: function(e) {},
  onShow: function() {
    var a = wx.getSystemInfoSync(),
      t = a.windowHeight;
    a.windowWidth;
    this.setData({
      camera_height: t - 0
    });
    var o = .05 * t;
    this.setData({
      top_height: o
    });
    var n = .1 * t;
    this.setData({
      name_height: n
    });
    var r = .1 * t;
    this.setData({
      text_height: r
    }), e.globalData.openid = wx.getStorageSync("openId"), e.globalData.XM = wx.getStorageSync("XM"), e.globalData.ZJHM = wx.getStorageSync("ZJHM"), e.globalData.mobile_phone = wx.getStorageSync("mobile_phone"), this.data.register_token = wx.getStorageSync("register_token"), console.log("on show", e.globalData.openid, e.globalData.XM, e.globalData.ZJHM, e.globalData.mobile_phone, this.data.register_token)
  },
  onReady: function() {
    wx.createCameraContext() ? (this.cameraContext = wx.createCameraContext("myCamera"), this.drawProgressbg(), this.countInterval()) : wx.showModal({
      title: "提示",
      content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
    })
  },
  error: function(e) {
    console.log(e.detail)
  },
  start_camera_frame: function() {
    console.log("相机初始化成功");
    var a = this;
    if (null != e.globalData.XM)
      if (null != e.globalData.ZJHM)
        if (null != e.globalData.mobile_phone) {
          var t = e.globalData.openid;
          wx.createCameraContext().onCameraFrame((function(o) {
            if (!(a.data.wait_second >= 60) && 1 != a.data.verifying) {
              a.setData({
                verifying: !0
              });
              var n = new Uint8ClampedArray(o.data),
                r = wx.arrayBufferToBase64(n),
                i = n.length;
              console.log("len:", i);
              if ("" != e.globalData.openid && null != e.globalData.openid && null != e.globalData.openid) {
                var s = {
                  openId: t,
                  width: o.width,
                  height: o.height,
                  img_data: r,
                  register_token: a.data.register_token
                };
                console.log("post_data", t, a.data.register_token);
                var l = "https://xcx.pinganbaiyun.cn/mini_program/api_01/sv_005_foreign_face_check";
                console.log("url", l);
                try {
                  wx.request({
                    url: l,
                    method: "POST",
                    dataType: "json",
                    data: s,
                    success: function(o) {
                      if (console.log("res:", o), "000000000000" == o.data[0].resp_code) {
                        a.setData({
                          verifying: !0
                        }), a.setData({
                          finish_timer: !0
                        });
                        var n = o.data[0].show_msg_name;
                        a.setData({
                          show_msg_name: n
                        });
                        o.data[0].name, o.data[0].id_card;
                        0 == a.check_should_send_verify_code() ? ("识别成功,将进行下一步操作.success,the next step will be taken", a.send_verify_result(t, 1, 2)) : a.send_verify_result(t, 1, 1), setTimeout((function() {
                          e.globalData.page_verify_code_msg = "", wx.navigateTo({
                            url: "../form_ocr_04/form"
                          })
                        }), 1500)
                      } else {
                        a.setData({
                          verifying: !1
                        });
                        n = o.data[0].show_msg;
                        a.setData({
                          show_msg_name: n
                        })
                      }
                    },
                    fail: function(e) {
                      console.log("face_check_frame_buf fail:", e);
                      var t = e.errMsg;
                      a.setData({
                        show_msg: t
                      }), a.setData({
                        verifying: !1
                      })
                    }
                  })
                } catch (e) {
                  console.log("wx_request e:", e);
                  c = e;
                  a.setData({
                    show_msg: c
                  }), a.setData({
                    verifying: !1
                  })
                }
              } else {
                var c = "获取人员信息异常";
                a.setData({
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
    var e = wx.createCanvasContext("canvasProgressbg"),
      a = wx.getSystemInfoSync(),
      t = a.windowWidth,
      o = a.windowHeight,
      n = t / 2,
      r = t / 2 + .25 * o - 1,
      i = t / 2 * .9;
    (e = wx.createCanvasContext("canvasProgressbg")).setLineWidth(5), e.setStrokeStyle("#a9a9a9"), e.setLineCap("round"), e.beginPath(), e.arc(n, r, i, 0, 2 * Math.PI, !1), e.fillStyle = "rgba(0, 0, 0, 0.8)", e.fill(), e.beginPath(), e.globalCompositeOperation = "source-out", e.rect(0, .25 * o - 1, t, o), e.fillStyle = "rgba(0, 0, 0, 0.8)", e.fill(), e.draw()
  },
  drawCircle: function(e) {
    var a = wx.getSystemInfoSync(),
      t = a.windowWidth,
      o = t / 2,
      n = t / 2 + .25 * a.windowHeight,
      r = t / 2 * .9,
      i = wx.createCanvasContext("canvasProgress"),
      s = i.createCircularGradient(170, 170, 150);
    s.addColorStop("0", "#fff"), s.addColorStop("0.5", "#8B00FF"), s.addColorStop("1.0", "#1DDEF0"), i.setLineWidth(5), i.setStrokeStyle(s), i.setLineCap("round"), i.beginPath(), i.arc(o, n, r, -Math.PI / 2, e * Math.PI - Math.PI / 2, !1), i.stroke(), i.draw()
  },
  countInterval: function() {
    var e = this;
    this.countTimer = setInterval((function() {
      if (e.data.count % 10 == 0) {
        var a = e.data.wait_second;
        if (a -= 1, e.setData({
            wait_second: a
          }), 1 == e.data.finish_timer) {
          var t = "核验完成";
          e.setData({
            show_msg: t
          })
        } else if (a <= 0 && a > -3) {
          t = "核验超时请返回";
          e.setData({
            show_msg: t
          })
        } else {
          if (-3 == a) return clearInterval(e.countTimer), void wx.reLaunch({
            url: "../../../index_01/pages/my/my"
          });
          if (a >= 61) {
            t = "系统准备中 " + (a - 61);
            e.setData({
              show_msg: t
            })
          } else {
            t = "正在核验 " + e.data.wait_second;
            e.setData({
              show_msg: t
            })
          }
        }
      }
      e.data.count <= 60 ? (e.drawCircle(e.data.count / 30), e.data.count++) : 0 == e.data.complete ? e.setData({
        count: 0
      }) : clearInterval(e.countTimer)
    }), 100)
  },
  count_down: function() {},
  onHide: function() {
    clearInterval(this.countTimer)
  },
  onUnload: function() {
    clearInterval(this.countTimer)
  },
  send_verify_result: function(a, t, o) {
    2 == o ? wx.showLoading({
      title: "正在操作...",
      mask: !0
    }) : wx.showLoading({
      title: "正在发送短信验证码...",
      mask: !0
    });
    var n = {
      openId: a,
      verify_result: t
    };
    2 == o && (n.private_verify_code = wx.getStorageSync("private_verify_code")), console.log("send_verify_result foreign_face_check", n);
    wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/send_verify_result",
      method: "POST",
      dataType: "json",
      data: n,
      header: {
        session_key: e.globalData.session_key_token
      },
      success: function(a) {
        if (wx.hideLoading(), "000000000000" == a.data[0].resp_code);
        else if ("-632198" == a.data[0].resp_code) e.globalData.purePhoneNumber = "", wx.removeStorageSync("private_verify_code"), wx.showModal({
          title: "提示",
          content: a.data[0].resp_msg,
          showCancel: !1,
          success: function(e) {
            wx.reLaunch({
              url: "../form_ocr_01/form"
            })
          }
        });
        else if ("-32198" == a.data[0].resp_code) wx.showModal({
          title: "提示",
          content: "本次注册已超时,请重新注册",
          showCancel: !1,
          success: function(e) {
            wx.navigateTo({
              url: "../../../index/index"
            })
          }
        });
        else if ("000000000003" == a.data[0].resp_code) wx.showModal({
          title: "提示",
          content: "您已注册",
          showCancel: !1,
          success: function(e) {
            wx.navigateTo({
              url: "../../../index/index"
            })
          }
        });
        else if ("000000000004" == a.data[0].resp_code) {
          var t = "验证成功,已发送短信验证码";
          2 == o && (t = "已验证成功"), wx.showModal({
            title: "提示",
            content: t,
            showCancel: !1,
            success: function(e) {
              2 == o ? wx.navigateTo({
                url: "../form_ocr_04/form?private_verify_code=" + wx.getStorageSync("private_verify_code")
              }) : wx.navigateTo({
                url: "../form_ocr_04/form"
              })
            }
          })
        } else console.log("err:", a), wx.showModal({
          title: "异常",
          content: "数据校验失败," + a.data[0].resp_code + a.data[0].resp_msg,
          showCancel: !1
        })
      },
      fail: function(e) {
        wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
          title: "异常",
          content: "发送短信验证码失败-0168," + e.errMsg,
          showCancel: !1
        })
      }
    })
  },
  takePhoto: function() {},
  check_should_send_verify_code: function() {
    var a = wx.getStorageSync("private_verify_code");
    return "" != e.globalData.mobile_phone && null != e.globalData.mobile_phone && null != e.globalData.mobile_phone && "" != e.globalData.purePhoneNumber && null != e.globalData.purePhoneNumber && null != e.globalData.purePhoneNumber && e.globalData.mobile_phone != e.globalData.purePhoneNumber && (a = ""), "" == a || null == a || null == a
  }
});