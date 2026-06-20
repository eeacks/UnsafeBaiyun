var e, t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../../../util/regenerator-runtime/runtime")) && e.__esModule;
var n = require("../../../../util/util.js"),
  o = (require("../../../../config.js"), getApp());
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: "",
    button_top: 0,
    button_left: 0,
    show_button: "",
    count: 0,
    countTimer: null,
    complete: !1,
    camera_height: 1500,
    top_height: 0,
    name_height: 0,
    text_height: 0,
    wait_second: 90,
    show_msg: "正在核验 90",
    show_msg_name: "",
    verifying: !1,
    wait_a_moment: 0,
    timer_id: null,
    finish_timer: !1,
    show_take_photo: "none",
    counting_down: !0
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
  onShow: function() {
    var e = wx.getSystemInfoSync(),
      t = e.windowHeight;
    e.windowWidth;
    this.setData({
      camera_height: t - 0
    });
    var a = .05 * t;
    this.setData({
      top_height: a
    });
    var n = .1 * t;
    this.setData({
      name_height: n
    });
    var i = .1 * t;
    this.setData({
      text_height: i
    }), o.globalData.XM = null, o.globalData.ZJHM = null, o.globalData.mobile_phone = null
  },
  takePhoto: function() {
    var e = this;
    wx.createCameraContext().takePhoto({
      quality: "normal",
      success: function(t) {
        wx.showLoading({
          title: "核验中..."
        });
        var a = e;
        a.setData({
          show_button: "none"
        });
        var n = t.tempImagePath;
        wx.uploadFile({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_and_compare",
          filePath: n,
          name: "upload",
          header: {
            "Content-Type": "multipart/form-data"
          },
          formData: {
            openId: o.globalData.openid
          },
          success: function(e) {
            var t = JSON.parse(e.data);
            if (wx.hideLoading(), a.setData({
                show_button: ""
              }), "000000000000" == t[0].resp_code) {
              a.setData({
                finish_timer: !0
              });
              var n = t[0].show_msg_name;
              a.setData({
                show_msg_name: n
              }), setTimeout((function() {
                var e = "../../../launch_app/index?oper_state=FINISH&register=1";
                console.log(e, "url"), wx.redirectTo({
                  url: e
                })
              }), 1500)
            } else wx.showModal({
              title: "提示",
              content: "" + t[0].resp_msg,
              showCancel: !1
            })
          }
        })
      }
    })
  },
  error: function(e) {
    console.log(e.detail)
  },
  cancel: function() {
    wx.navigateBack()
  },
  onReady: function() {
    wx.createCameraContext() ? (this.cameraContext = wx.createCameraContext("myCamera"), this.drawProgressbg(), this.countInterval()) : wx.showModal({
      title: "提示",
      content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
    })
  },
  countInterval: function() {
    var e = this;
    this.countTimer = setInterval((function() {
      if (0 != e.data.counting_down) {
        if (e.data.count % 10 == 0) {
          var t = e.data.wait_second;
          if (t -= 1, e.setData({
              wait_second: t
            }), 1 == e.data.finish_timer) {
            var a = "核验完成";
            e.setData({
              show_msg: a
            })
          } else if (t <= 0 && t > -3) {
            a = "核验超时请返回";
            e.setData({
              show_msg: a
            })
          } else if (t <= 80 && -3 != t) wx.redirectTo({
            url: "../../../launch_app/pages/take_photo_verify/take_photo_verify"
          });
          else {
            if (-3 == t) return clearInterval(e.countTimer), void wx.reLaunch({
              url: "../../../index_01/pages/my/my"
            });
            a = "正在核验 " + e.data.wait_second;
            e.setData({
              show_msg: a
            })
          }
        }
        e.data.count <= 60 ? (e.drawCircle(e.data.count / 30), e.data.count++) : 0 == e.data.complete ? e.setData({
          count: 0
        }) : clearInterval(e.countTimer)
      }
    }), 100)
  },
  onHide: function() {
    clearInterval(this.countTimer)
  },
  onUnload: function() {
    clearInterval(this.countTimer)
  },
  drawProgressbg: function() {
    var e = wx.createCanvasContext("canvasProgressbg"),
      t = wx.getSystemInfoSync(),
      a = t.windowWidth,
      n = t.windowHeight,
      o = a / 2,
      i = a / 2 + .25 * n - 1,
      r = a / 2 * .9;
    (e = wx.createCanvasContext("canvasProgressbg")).setLineWidth(5), e.setStrokeStyle("#a9a9a9"), e.setLineCap("round"), e.beginPath(), e.arc(o, i, r, 0, 2 * Math.PI, !1), e.fillStyle = "rgba(0, 0, 0, 0.8)", e.fill(), e.beginPath(), e.globalCompositeOperation = "source-out", e.rect(0, .25 * n - 1, a, n), e.fillStyle = "rgba(0, 0, 0, 0.8)", e.fill(), e.draw()
  },
  drawCircle: function(e) {
    var t = wx.getSystemInfoSync(),
      a = t.windowWidth,
      n = a / 2,
      o = a / 2 + .25 * t.windowHeight,
      i = a / 2 * .9,
      r = wx.createCanvasContext("canvasProgress"),
      s = r.createCircularGradient(170, 170, 150);
    s.addColorStop("0", "#fff"), s.addColorStop("0.5", "#8B00FF"), s.addColorStop("1.0", "#1DDEF0"), r.setLineWidth(5), r.setStrokeStyle(s), r.setLineCap("round"), r.beginPath(), r.arc(n, o, i, -Math.PI / 2, e * Math.PI - Math.PI / 2, !1), r.stroke(), r.draw()
  },
  start_camera_frame: function() {
    console.log("相机初始化成功");
    var e = this;
    wx.createCameraContext().onCameraFrame((function(i) {
      if (1 != e.data.verifying) {
        e.setData({
          verifying: !0
        });
        var r = new Uint8ClampedArray(i.data),
          s = wx.arrayBufferToBase64(r),
          c = r.length;
        console.log("len:", c);
        if ("" != o.globalData.openid && null != o.globalData.openid && null != o.globalData.openid) {
          var l = {
            openId: o.globalData.openid,
            width: i.width,
            height: i.height,
            img_data: s
          };
          console.log("openId", o.globalData.openid, i.width);
          var d = "https://xcx.pinganbaiyun.cn/mini_program/api_01/face_check_launch_app";
          console.log("url", d);
          try {
            wx.request({
              url: d,
              method: "POST",
              dataType: "json",
              data: l,
              success: function(i) {
                if (console.log("res:", i), "000000000000" == i.data[0].resp_code) {
                  e.setData({
                    verifying: !0
                  }), e.setData({
                    finish_timer: !0
                  });
                  var r = i.data[0].show_msg_name;
                  e.setData({
                    show_msg_name: r
                  });
                  i.data[0].png_string, i.data[0].name, i.data[0].id_card, i.data[0].mobile_phone;
                  setTimeout((function() {
                    var e = "../../../launch_app/index?oper_state=FINISH&register=1";
                    console.log(e, "url"), wx.redirectTo({
                      url: e
                    })
                  }), 1500)
                } else {
                  e.setData({
                    verifying: !1
                  });
                  r = i.data[0].show_msg;
                  if (e.setData({
                      show_msg_name: r
                    }), "00000009301" == i.data[0].resp_code) {
                    var s = "核验失败，相似度低 " + i.data[0].score + "。建议您注册实名认证";
                    e.setData({
                      verifying: !0
                    }), e.setData({
                      counting_down: !1
                    }), wx.showModal({
                      title: "核验失败",
                      content: s,
                      showCancel: !0,
                      cancelText: "继续核验",
                      confirmText: "注册实名",
                      confirmColor: "#4a8eff",
                      success: (c = a(t().mark((function a(i) {
                        var r;
                        return t().wrap((function(t) {
                          for (;;) switch (t.prev = t.next) {
                            case 0:
                              if (!i.confirm) {
                                t.next = 19;
                                break
                              }
                              return console.log("用户点击"), r = {
                                openId: o.globalData.openid
                              }, console.log("post_data", r), wx.showLoading({
                                title: "请稍等...",
                                mask: !0
                              }), t.prev = 6, t.next = 9, n.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_01/drop_id_card", r);
                            case 9:
                              t.sent, t.next = 15;
                              break;
                            case 12:
                              t.prev = 12, t.t0 = t.catch(6), console.log(t.t0);
                            case 15:
                              wx.hideLoading(), wx.redirectTo({
                                url: "../../../component/pages/form_ocr_01/form"
                              }), t.next = 20;
                              break;
                            case 19:
                              i.cancel && (e.setData({
                                verifying: !1
                              }), e.setData({
                                show_msg_name: ""
                              }), e.setData({
                                counting_down: !0
                              }));
                            case 20:
                            case "end":
                              return t.stop()
                          }
                        }), a, null, [
                          [6, 12]
                        ])
                      }))), function(e) {
                        return c.apply(this, arguments)
                      })
                    })
                  }
                }
                var c
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
            u = t;
            e.setData({
              show_msg: u
            }), e.setData({
              verifying: !1
            })
          }
        } else {
          var u = "获取人员信息异常";
          e.setData({
            show_msg: u
          })
        }
      }
    })).start()
  }
});