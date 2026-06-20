var a = getApp();
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
    name: "",
    id_card: "",
    cert_type: "",
    private_verify_code: ""
  },
  onLoad: function(a) {
    var e = a.name,
      t = a.id_card,
      o = a.cert_type;
    this.setData({
      name: e,
      id_card: t,
      cert_type: o
    })
  },
  onShow: function() {
    var e = wx.getSystemInfoSync(),
      t = e.windowHeight;
    e.windowWidth;
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
    });
    var s = wx.getStorageSync("private_verify_code");
    console.log("1730310363142", a.globalData.verify_type, s), s = "send_verify_code", "" != a.globalData.mobile_phone && null != a.globalData.mobile_phone && null != a.globalData.mobile_phone && "" != a.globalData.purePhoneNumber && null != a.globalData.purePhoneNumber && null != a.globalData.purePhoneNumber && a.globalData.mobile_phone === a.globalData.purePhoneNumber && (s = a.globalData.purePhoneNumber), this.data.private_verify_code = s
  },
  onReady: function() {
    wx.createCameraContext() ? (this.cameraContext = wx.createCameraContext("myCamera"), this.drawProgressbg(), this.countInterval()) : wx.showModal({
      title: "提示",
      content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
    })
  },
  error: function(a) {
    console.log(a.detail)
  },
  start_camera_frame: function() {
    console.log("相机初始化成功");
    var e = this;
    if (null != a.globalData.XM)
      if (null != a.globalData.ZJHM)
        if (null != a.globalData.mobile_phone) {
          var t = a.globalData.openid;
          "AGENT" == a.globalData.register_type.substr(0, 5) && (t = a.globalData.register_type + t), "RENTER" == a.globalData.register_type.substr(0, 6) && (t = a.globalData.register_type + t), "COMPANY" == a.globalData.register_type.substr(0, 7) && (t = a.globalData.register_type + t);
          wx.createCameraContext().onCameraFrame((function(o) {
            if (!(e.data.wait_second >= 60) && 1 != e.data.verifying) {
              e.setData({
                verifying: !0
              });
              var n = new Uint8ClampedArray(o.data),
                r = wx.arrayBufferToBase64(n),
                s = n.length;
              console.log("len:", s);
              if ("" != a.globalData.openid && null != a.globalData.openid && null != a.globalData.openid) {
                var i = {
                    cert_type: e.data.cert_type,
                    openId: t,
                    width: o.width,
                    height: o.height,
                    img_data: r,
                    private_verify_code: e.data.private_verify_code
                  },
                  l = "https://xcx.pinganbaiyun.cn/mini_program/api_01/cloud_shield_face_check";
                "PASSPORT" == e.data.cert_type && (l = "https://xcx.pinganbaiyun.cn/mini_program/api_01/cloud_shield_face_check"), console.log("url", l);
                try {
                  wx.request({
                    url: l,
                    method: "POST",
                    dataType: "json",
                    data: i,
                    header: {
                      session_key: a.globalData.session_key_token
                    },
                    success: function(t) {
                      if (console.log("1730713253928 res:", t), "000000000000" == t.data[0].resp_code) {
                        e.setData({
                          verifying: !0
                        }), e.setData({
                          finish_timer: !0
                        });
                        var o = t.data[0].show_msg_name;
                        e.setData({
                          show_msg_name: o
                        });
                        t.data[0].name, t.data[0].id_card;
                        if (a.globalData.page_verify_code_msg = "", a.globalData.verify_result_OK_token = t.data[0].verify_result_OK_token, "PASSPORT" == e.data.cert_type) {
                          return void wx.showModal({
                            title: "识别成功.Verify successfully next step",
                            content: "识别成功,将进行下一步操作",
                            showCancel: !1,
                            success: function() {
                              a.globalData.page_verify_code_msg = "", wx.navigateTo({
                                url: "../component/pages/form_ocr_04/form"
                              })
                            }
                          })
                        }
                        e.getOpenerEventChannel().emit("callback_face_check", {
                          data: "success"
                        }), setTimeout((function() {
                          wx.navigateBack()
                        }), 1500)
                      } else {
                        e.setData({
                          verifying: !1
                        });
                        o = "核验中...(" + t.data[0].resp_code + ")";
                        "0000033302" == t.data[0].resp_code && (o = t.data[0].show_msg), console.log(t.data[0].show_msg + "(" + t.data[0].resp_code + ")"), console.log("show_msg_name ------", o), e.setData({
                          show_msg_name: o
                        }), null != t.data[0].show_msg && null != t.data[0].show_msg || (t.data[0].show_msg = ""), t.data[0].show_msg.indexOf("未检测到人脸") > -1 || 1
                      }
                    },
                    fail: function(a) {
                      console.log("face_check_frame_buf fail:", a);
                      var t = a.errMsg;
                      e.setData({
                        show_msg: t
                      }), e.setData({
                        verifying: !1
                      })
                    }
                  })
                } catch (a) {
                  console.log("wx_request e:", a);
                  c = a;
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
    var a = wx.createCanvasContext("canvasProgressbg"),
      e = wx.getSystemInfoSync(),
      t = e.windowWidth,
      o = e.windowHeight,
      n = t / 2,
      r = t / 2 + .25 * o - 1,
      s = t / 2 * .9;
    (a = wx.createCanvasContext("canvasProgressbg")).setLineWidth(5), a.setStrokeStyle("#a9a9a9"), a.setLineCap("round"), a.beginPath(), a.arc(n, r, s, 0, 2 * Math.PI, !1), a.fillStyle = "rgba(0, 0, 0, 0.8)", a.fill(), a.beginPath(), a.globalCompositeOperation = "source-out", a.rect(0, .25 * o - 1, t, o), a.fillStyle = "rgba(0, 0, 0, 0.8)", a.fill(), a.draw()
  },
  drawCircle: function(a) {
    var e = wx.getSystemInfoSync(),
      t = e.windowWidth,
      o = t / 2,
      n = t / 2 + .25 * e.windowHeight,
      r = t / 2 * .9,
      s = wx.createCanvasContext("canvasProgress"),
      i = s.createCircularGradient(170, 170, 150);
    i.addColorStop("0", "#fff"), i.addColorStop("0.5", "#8B00FF"), i.addColorStop("1.0", "#1DDEF0"), s.setLineWidth(5), s.setStrokeStyle(i), s.setLineCap("round"), s.beginPath(), s.arc(o, n, r, -Math.PI / 2, a * Math.PI - Math.PI / 2, !1), s.stroke(), s.draw()
  },
  countInterval: function() {
    var a = this;
    this.countTimer = setInterval((function() {
      if (a.data.count % 10 == 0) {
        var e = a.data.wait_second;
        if (e -= 1, a.setData({
            wait_second: e
          }), 1 == a.data.finish_timer) {
          var t = "核验完成";
          a.setData({
            show_msg: t
          })
        } else if (e <= 0 && e > -3) {
          t = "核验超时请返回";
          a.setData({
            show_msg: t
          })
        } else {
          if (-3 == e) return clearInterval(a.countTimer), void wx.reLaunch({
            url: "../index_01/pages/my/my"
          });
          if (e >= 61) {
            t = "系统准备中 " + (e - 61);
            a.setData({
              show_msg: t
            })
          } else {
            t = "正在核验 " + a.data.wait_second;
            a.setData({
              show_msg: t
            })
          }
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
  },
  send_verify_result: function(a, e) {}
});