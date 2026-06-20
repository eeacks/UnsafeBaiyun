var e, t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  o = getApp();
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
    finish_timer: !1
  },
  onLoad: function(e) {},
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
  error: function(e) {
    console.log(e.detail)
  },
  start_camera_frame: function() {
    console.log("相机初始化成功");
    var e = this;
    if (null != o.globalData.XM)
      if (null != o.globalData.ZJHM)
        if (null != o.globalData.mobile_phone) {
          var n = o.globalData.openid;
          "RELATIVE_HOUSE" != n.substr(0, 14) && (n = "RELATIVE_HOUSE_" + n);
          var r = wx.getStorageSync("add_relative_rent_house_rec_id"),
            i = wx.getStorageSync("add_relative_room_code"),
            s = wx.getStorageSync("add_relative_rent_rec_id"),
            l = wx.getStorageSync("add_relative_remark"),
            c = wx.getStorageSync("relationship"),
            _ = o.globalData.XM,
            d = o.globalData.ZJHM,
            u = o.globalData.mobile_phone,
            h = wx.getStorageSync("wj_buzi_type"),
            w = wx.getStorageSync("wj_buzi_code"),
            g = wx.getStorageSync("family_from_src"),
            m = 0;
          null != h && null != h && "" != h && "[object Undefined]" != w && "ADD_FAMILY" == h && (m = 1), null != g && null != g && "" != g && "[object Undefined]" != g && "VACCINE" == g && (m = 2), wx.createCameraContext().onCameraFrame((function(g) {
            if (!(e.data.wait_second >= 60) && 1 != e.data.verifying) {
              e.setData({
                verifying: !0
              });
              var f = new Uint8ClampedArray(g.data),
                p = wx.arrayBufferToBase64(f),
                x = f.length;
              console.log("len:", x);
              if ("" != o.globalData.openid && null != o.globalData.openid && null != o.globalData.openid) {
                if (0 != m || "" != r && null != r && null != r) {
                  var v = {
                    openId: n,
                    width: g.width,
                    height: g.height,
                    img_data: p,
                    name: _,
                    id_card: d,
                    mobile_phone: u,
                    remark: l,
                    rent_house_rec_id: r,
                    room_code: i,
                    rent_rec_id: s,
                    relationship: c,
                    wj_buzi_type: h,
                    wj_buzi_code: w,
                    relative_buzi_type: m
                  };
                  try {
                    wx.request({
                      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/add_relative_face_check",
                      method: "POST",
                      dataType: "json",
                      data: v,
                      success: function(o) {
                        if (console.log("res:", o), "000000000000" == o.data[0].resp_code) {
                          e.data.verifying = !0, e.data.finish_timer = !0;
                          var n = o.data[0].show_msg_name;
                          e.setData({
                            show_msg_name: n
                          });
                          o.data[0].access_token;
                          wx.removeStorageSync("add_relative_rent_house_rec_id"), wx.removeStorageSync("add_relative_room_code"), wx.removeStorageSync("add_relative_rent_rec_id"), wx.removeStorageSync("add_relative_remark"), wx.removeStorageSync("relationship"), setTimeout(a(t().mark((function a() {
                            var o;
                            return t().wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  if (wx.showModal({
                                      title: "温馨提示",
                                      content: "添加家属成功",
                                      showCancel: !1
                                    }), 0 != m) {
                                    t.next = 6;
                                    break
                                  }
                                  return o = '../../../../page/third_part/pages/rent_house/form?access_token=""&jump_to=rent_house_add_relative_jump_to@@@rent_house_rec_id@@@' + r + "@@@room_code@@@" + i, console.log("add_relative_face_check jump url", o), wx.redirectTo({
                                    url: o
                                  }), t.abrupt("return");
                                case 6:
                                  if (1 != m) {
                                    t.next = 10;
                                    break
                                  }
                                  return "../../../../module_004/addPersonInfo/inform?wj_buzi_type=ADD_FAMILY&AUTO_JUMP_PASSED=NO", wx.redirectTo({
                                    url: "../../../../module_004/addPersonInfo/inform?wj_buzi_type=ADD_FAMILY&AUTO_JUMP_PASSED=NO"
                                  }), t.abrupt("return");
                                case 10:
                                  if (2 != m) {
                                    t.next = 17;
                                    break
                                  }
                                  return t.next = 13, e.sv_014_confrim_family_vaccine(w);
                                case 13:
                                  return wx.removeStorageSync("family_from_src"), "../../../../module_004/family_list/family_list?family_from_src=VACCINE", wx.redirectTo({
                                    url: "../../../../module_004/family_list/family_list?family_from_src=VACCINE"
                                  }), t.abrupt("return");
                                case 17:
                                  return t.abrupt("return");
                                case 18:
                                case "end":
                                  return t.stop()
                              }
                            }), a)
                          }))), 1500)
                        } else {
                          e.data.verifying = !1, null != (n = o.data[0].show_msg) && null != n && "" != n || (n = o.data[0].resp_msg), e.setData({
                            show_msg_name: n
                          })
                        }
                      },
                      fail: function(t) {
                        console.log("face_check_frame_buf fail:", t);
                        var a = t.errMsg;
                        e.setData({
                          show_msg: a
                        }), e.data.verifying = !1
                      }
                    })
                  } catch (t) {
                    console.log("wx_request e:", t);
                    y = t;
                    e.setData({
                      show_msg: y
                    }), e.data.verifying = !1
                  }
                }
              } else {
                var y = "获取人员信息异常";
                e.setData({
                  show_msg: y
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
      t = wx.getSystemInfoSync(),
      a = t.windowWidth,
      o = t.windowHeight,
      n = a / 2,
      r = a / 2 + .25 * o - 1,
      i = a / 2 * .9;
    (e = wx.createCanvasContext("canvasProgressbg")).setLineWidth(5), e.setStrokeStyle("#a9a9a9"), e.setLineCap("round"), e.beginPath(), e.arc(n, r, i, 0, 2 * Math.PI, !1), e.fillStyle = "rgba(0, 0, 0, 0.8)", e.fill(), e.beginPath(), e.globalCompositeOperation = "source-out", e.rect(0, .25 * o - 1, a, o), e.fillStyle = "rgba(0, 0, 0, 0.8)", e.fill(), e.draw()
  },
  drawCircle: function(e) {
    var t = wx.getSystemInfoSync(),
      a = t.windowWidth,
      o = a / 2,
      n = a / 2 + .25 * t.windowHeight,
      r = a / 2 * .9,
      i = wx.createCanvasContext("canvasProgress"),
      s = i.createCircularGradient(170, 170, 150);
    s.addColorStop("0", "#fff"), s.addColorStop("0.5", "#8B00FF"), s.addColorStop("1.0", "#1DDEF0"), i.setLineWidth(5), i.setStrokeStyle(s), i.setLineCap("round"), i.beginPath(), i.arc(o, n, r, -Math.PI / 2, e * Math.PI - Math.PI / 2, !1), i.stroke(), i.draw()
  },
  countInterval: function() {
    var e = this;
    this.countTimer = setInterval((function() {
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
        } else {
          if (-3 == t) return clearInterval(e.countTimer), void wx.reLaunch({
            url: "../../../index_01/pages/my/my"
          });
          if (t >= 61) {
            a = "系统准备中 " + (t - 61);
            e.setData({
              show_msg: a
            })
          } else {
            a = "正在核验 " + e.data.wait_second;
            e.setData({
              show_msg: a
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
  send_verify_result: function(e, t) {
    wx.showLoading({
      title: "正在发送短信验证码..."
    });
    var a = {
      openId: e,
      verify_result: t
    };
    console.log("send_verify_result:", a);
    wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/send_verify_result",
      method: "POST",
      dataType: "json",
      data: a,
      success: function(e) {
        wx.hideLoading(), "000000000000" == e.data[0].resp_code || ("-32198" == e.data[0].resp_code ? wx.showModal({
          title: "提示",
          content: "本次注册已超时,请重新注册",
          showCancel: !1,
          success: function(e) {
            wx.navigateTo({
              url: "../../../index/index"
            })
          }
        }) : "000000000003" == e.data[0].resp_code ? wx.showModal({
          title: "提示",
          content: "您已注册",
          showCancel: !1,
          success: function(e) {
            wx.navigateTo({
              url: "../../../index/index"
            })
          }
        }) : "000000000004" == e.data[0].resp_code ? wx.showModal({
          title: "提示",
          content: "验证成功,已发送短信验证码",
          showCancel: !1,
          success: function(e) {
            wx.navigateTo({
              url: "../form_ocr_04/form"
            })
          }
        }) : (console.log("err:", e), wx.showModal({
          title: "异常",
          content: "发送短信验证码失败," + e.data[0].resp_code + e.data[0].resp_msg,
          showCancel: !1
        })))
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
  sv_014_confrim_family_vaccine: (e = a(t().mark((function e(a) {
    var n;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), n = JSON.stringify({
            sfz_rec_id: a
          }), e.next = 6, wx.request({
            url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_001_health_passport/sv_014_confrim_family_vaccine",
            method: "POST",
            dataType: "json",
            data: n,
            header: {
              cloud_shield_token: o.globalData.access_token
            },
            success: function(e) {
              wx.hideLoading()
            },
            fail: function(e) {
              wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                title: "添加疫苗接种家属异常",
                content: e,
                showCancel: !1
              })
            }
          });
        case 6:
        case "end":
          return e.stop()
      }
    }), e)
  }))), function(t) {
    return e.apply(this, arguments)
  })
});