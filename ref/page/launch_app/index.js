var e, a = require("../../@babel/runtime/helpers/typeof"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../util/regenerator-runtime/runtime")) && e.__esModule;
var n, r = require("../../util/util.js"),
  i = require("../../config.js"),
  s = getApp();
Page({
  data: {
    motto: "平安码丨平安白云",
    userInfo: {},
    hasUserInfo: !1,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    showModal_location: !1,
    showModal_launch: !1,
    app_parameter: "paby",
    modal_content: "",
    oper_state: "NOT_START",
    user_name: null,
    user_id_card: null,
    upload_file_id: null,
    img_file_id: null
  },
  onLoad: function(e) {
    var a = wx.getSystemInfoSync();
    console.log(a, "===system_info==="), a.version <= "6.7.3" && (console.log("--- 微信版本过低 ---"), wx.showModal({
      title: "提示",
      content: "微信版本过低,请升级微信",
      showCancel: !1
    }));
    var n = this,
      l = decodeURIComponent(e.phone);
    console.log("request_id:", l);
    var _, c = decodeURIComponent(e.oper_state);
    if (console.log("oper_state:", c), null != l && null != l && "" != l && "undefined" != l && "null" != l) {
      console.log("comming request_id", l), s.globalData.third_part_request_id = l;
      var d = decodeURIComponent(e.img);
      return null != d && null != d && "" != d && "undefined" != d && "null" != d && (s.globalData.third_part_img_file_id = d), void this.get_location_role()
    }
    if ("FINISH" == c) {
      var p = decodeURIComponent(e.register);
      wx.showLoading({
        title: "请稍等...",
        mask: !0
      });
      var u = {
          openId: s.globalData.openid,
          third_part_name: s.globalData.third_part_name,
          request_id: s.globalData.third_part_request_id,
          register: p,
          img_file_id: s.globalData.third_part_img_file_id
        },
        g = i.get_url() + "p_021_health_passport/api_002_rent_house_company/sv_012_insert_third_part_verify_log";
      console.log("post_data", g, u), wx.request({
        url: g,
        method: "POST",
        dataType: "json",
        data: u,
        success: (_ = o(t().mark((function e(a) {
          var o, l, _, c, d, p;
          return t().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (wx.hideLoading(), console.log("返回信息", a), "000000000000" != a.data[0].resp_code) {
                  e.next = 18;
                  break
                }
                return o = a.data[0].XM, l = a.data[0].ZJHM, _ = a.data[0].upload_file_id, n.setData({
                  modal_content: "您已通过平安码丨平安白云身份核验 请返平安回家APP"
                }), c = "name=" + o + "&id_card=" + l + "&img=https://xcx.pinganbaiyun.cn/mini_program/api_02/get_id_card_image_sys_01?file_id=" + _, console.log("app_parameter:", c), n.setData({
                  app_parameter: c
                }), n.setData({
                  showModal_launch: !0
                }), d = i.get_url() + "p_021_health_passport/api_002_rent_house_company/sv_013_launch_third_part_verify_log", p = {
                  app_parameter: c,
                  openId: s.globalData.openid
                }, e.next = 15, r.wx_request(d, p);
              case 15:
                return e.abrupt("return");
              case 18:
                return wx.showModal({
                  title: "提示",
                  content: "" + a.data[0].resp_msg + a.data[0].resp_code,
                  showCancel: !1
                }), e.abrupt("return");
              case 20:
              case "end":
                return e.stop()
            }
          }), e)
        }))), function(e) {
          return _.apply(this, arguments)
        }),
        fail: function(e) {
          wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
            title: "提示",
            content: "服务失败-0168," + e.errMsg,
            showCancel: !1
          })
        }
      })
    } else this.get_location_role()
  },
  onShow: function() {},
  get_location_role: function() {
    var e = this;
    e.ask_join()
  },
  hideModal_location: function() {},
  hideModal_user_info: function() {},
  go_to_action: function() {
    return "000000000001" == this.data.this_sfz_resp_code ? (console.log("apply....000000000001 "), void wx.navigateTo({
      url: "../component/pages/form_ocr_01/form"
    })) : "000000000002" == this.data.this_sfz_resp_code ? (s.globalData.page_verify_code_msg = "您已提交身份证资料,请进行基于生物识别的人脸核身", s.globalData.XM = this.data.this_sfz_XM, s.globalData.ZJHM = this.data.this_sfz_ZJHM, s.globalData.mobile_phone = this.data.this_sfz_mobile_phone, console.log("您已提交身份证资料,请进行基于生物识别的人脸核身...."), void wx.navigateTo({
      url: "../component/pages/form_ocr_03/form"
    })) : "000000000004" == this.data.this_sfz_resp_code ? (s.globalData.page_verify_code_msg = "已发送短信验证码,请输入短信验证码", console.log("submit code...."), void wx.navigateTo({
      url: "../component/pages/form_ocr_04/form"
    })) : void 0
  },
  get_role_result: function(e) {
    console.log("get_role_result", e), 0 == e.detail.authSetting["scope.userLocation"] ? (this.setData({
      showModal_location: !0
    }), console.log("用户选择了否")) : (console.log("用户选择了是"), this.setData({
      showModal_location: !1
    }))
  },
  ask_join: function() {
    wx.hideLoading();
    var e = this;
    s.globalData.register_type = "APP_LAUNCH_REGISTER", wx.login({
      success: function(a) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: a.code
          },
          success: function(a) {
            if (console.log("拉取login", a), "000000000000" == a.data[0].resp_code) {
              s.globalData.openid = a.data[1].openid;
              var n = {
                openId: s.globalData.openid
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: n,
                success: function(a) {
                  console.log("检查进度结果", a);
                  var n, i = a.data[0].resp_code;
                  if (e.setData({
                      this_sfz_resp_code: i
                    }), "000000000002" == i && (e.setData({
                      this_sfz_XM: a.data[0].XM
                    }), e.setData({
                      this_sfz_ZJHM: a.data[0].ZJHM
                    }), e.setData({
                      this_sfz_mobile_phone: a.data[0].mobile_phone
                    }), console.log("XM:", a.data[0].XM)), "000000000003" == i) {
                    e.setData({
                      user_name: a.data[0].XM
                    }), e.setData({
                      user_id_card: a.data[0].ZJHM
                    }), e.setData({
                      upload_file_id: a.data[0].upload_file_id
                    });
                    var l = "您将拍照验证是否是【" + a.data[0].XM + "】,若非本人请重新注册";
                    null != s.globalData.third_part_img_file_id && null != s.globalData.third_part_img_file_id && "" != s.globalData.third_part_img_file_id && (l = "您将验证是否是【" + a.data[0].XM + "】,若非本人请重新注册"), wx.showModal({
                      title: "身份验证",
                      content: l,
                      showCancel: !0,
                      cancelText: "重新注册",
                      confirmText: "自动核验",
                      confirmColor: "#4a8eff",
                      success: (n = o(t().mark((function a(o) {
                        var n;
                        return t().wrap((function(a) {
                          for (;;) switch (a.prev = a.next) {
                            case 0:
                              if (!o.confirm) {
                                a.next = 10;
                                break
                              }
                              if (null == s.globalData.third_part_img_file_id || null == s.globalData.third_part_img_file_id || "" == s.globalData.third_part_img_file_id) {
                                a.next = 6;
                                break
                              }
                              return e.sv_014_get_ble_img_verify(), a.abrupt("return");
                            case 6:
                              return wx.redirectTo({
                                url: "../launch_app/pages/camera_face_ios/camera"
                              }), a.abrupt("return");
                            case 8:
                              a.next = 26;
                              break;
                            case 10:
                              if (!o.cancel) {
                                a.next = 26;
                                break
                              }
                              return console.log("用户点击取消"), n = {
                                openId: s.globalData.openid
                              }, wx.showLoading({
                                title: "请稍等...",
                                mask: !0
                              }), a.prev = 15, a.next = 18, r.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_01/drop_id_card", n);
                            case 18:
                              a.sent, a.next = 24;
                              break;
                            case 21:
                              a.prev = 21, a.t0 = a.catch(15), console.log(a.t0);
                            case 24:
                              wx.hideLoading(), wx.redirectTo({
                                url: "../component/pages/form_ocr_01/form"
                              });
                            case 26:
                            case "end":
                              return a.stop()
                          }
                        }), a, null, [
                          [15, 21]
                        ])
                      }))), function(e) {
                        return n.apply(this, arguments)
                      })
                    })
                  } else {
                    if ("000000000001" == i || "000000000002" == i || "000000000004" == i) return s.globalData.register_type = "APP_LAUNCH_REGISTER", console.log("apply...."), void wx.showModal({
                      title: "平安码丨平安白云",
                      content: "您将进行平安码丨平安白云身份核验",
                      showCancel: !1,
                      success: function() {
                        console.log("apply....000000000001 "), wx.navigateTo({
                          url: "../component/pages/form_ocr_01/form"
                        })
                      }
                    });
                    wx.showModal({
                      title: "提示",
                      content: "查询进度异常" + a.data[0].resp_msg + a.data[0].resp_code,
                      showCancel: !1
                    })
                  }
                },
                fail: function(e) {
                  console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-1," + e.errMsg,
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
          fail: function(e) {
            console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + e.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(e) {
        console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
          title: "提示",
          content: "获取状态异常," + e.errMsg,
          showCancel: !1
        })
      }
    })
  },
  launchAppError: function(e) {
    console.log(e.detail.errMsg), wx.showModal({
      title: "返回app异常",
      content: e.detail.errMsg,
      confirmText: "确定",
      showCancel: !1,
      success: function(e) {}
    })
  },
  hideModal_launch: function() {
    this.setData({
      showModal_launch: !1
    })
  },
  go_index: function() {
    wx.redirectTo({
      url: "../index_01/pages/my/my"
    })
  },
  sv_014_get_ble_img_verify: (n = o(t().mark((function e() {
    var n, l, _, c, d;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return n = this, l = i.get_url() + "p_021_health_passport/api_002_rent_house_company/sv_014_get_ble_img_verify", _ = {
            img_file_id: s.globalData.third_part_img_file_id,
            openId: s.globalData.openid
          }, console.log("sv_014_get_ble_img_verify", l, _), e.prev = 4, wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), e.next = 8, r.wx_request(l, _);
        case 8:
          c = e.sent, wx.hideLoading(), console.log("sv_014_get_ble_img_verify", a(c), c), "000000000000" == c.data[0].resp_code ? (wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), _ = {
            openId: s.globalData.openid,
            third_part_name: s.globalData.third_part_name,
            request_id: s.globalData.third_part_request_id,
            register: 1,
            img_file_id: s.globalData.third_part_img_file_id
          }, l = i.get_url() + "p_021_health_passport/api_002_rent_house_company/sv_012_insert_third_part_verify_log", console.log("post_data", l, _), wx.request({
            url: l,
            method: "POST",
            dataType: "json",
            data: _,
            success: function() {
              var e = o(t().mark((function e(a) {
                var o, l, _, c, d, p;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("返回信息", a), "000000000000" != a.data[0].resp_code) {
                        e.next = 18;
                        break
                      }
                      return o = a.data[0].XM, l = a.data[0].ZJHM, _ = a.data[0].upload_file_id, n.setData({
                        modal_content: "您已通过平安码丨平安白云身份核验 请返平安回家APP"
                      }), c = "name=" + o + "&id_card=" + l + "&img=https://xcx.pinganbaiyun.cn/mini_program/api_02/get_id_card_image_sys_01?file_id=" + _, console.log("app_parameter:", c), n.setData({
                        app_parameter: c
                      }), n.setData({
                        showModal_launch: !0
                      }), d = i.get_url() + "p_021_health_passport/api_002_rent_house_company/sv_013_launch_third_part_verify_log", p = {
                        app_parameter: c,
                        openId: s.globalData.openid
                      }, e.next = 15, r.wx_request(d, p);
                    case 15:
                      return e.abrupt("return");
                    case 18:
                      return wx.showModal({
                        title: "提示",
                        content: "" + a.data[0].resp_msg + a.data[0].resp_code,
                        showCancel: !1
                      }), e.abrupt("return");
                    case 20:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }(),
            fail: function(e) {
              wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                title: "提示",
                content: "服务失败-0168," + e.errMsg,
                showCancel: !1
              })
            }
          })) : "00000009301" == c.data[0].resp_code ? (d = c.data[0].resp_msg, wx.showModal({
            title: "核验结果",
            content: d,
            showCancel: !1,
            confirmText: "重新注册",
            confirmColor: "#4a8eff",
            success: function() {
              var e = o(t().mark((function e(a) {
                var o;
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return console.log("用户点击取消"), o = {
                        openId: s.globalData.openid
                      }, wx.showLoading({
                        title: "请稍等...",
                        mask: !0
                      }), e.prev = 4, e.next = 7, r.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_01/drop_id_card", o);
                    case 7:
                      e.sent, e.next = 13;
                      break;
                    case 10:
                      e.prev = 10, e.t0 = e.catch(4), wx.showModal({
                        title: "提示",
                        content: "异常" + JSON.stringify(e.t0),
                        showCancel: !1
                      });
                    case 13:
                      wx.hideLoading(), wx.redirectTo({
                        url: "../component/pages/form_ocr_01/form"
                      });
                    case 15:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [4, 10]
                ])
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }()
          })) : wx.showModal({
            title: "核验结果",
            content: c.data[0].resp_msg,
            showCancel: !1,
            confirmText: "重试",
            confirmColor: "#4a8eff",
            success: function() {
              var e = o(t().mark((function e(a) {
                return t().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return n.sv_014_get_ble_img_verify(), e.abrupt("return");
                    case 2:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }()
          }), e.next = 17;
          break;
        case 14:
          e.prev = 14, e.t0 = e.catch(4), wx.showModal({
            title: "提示",
            content: "异常" + JSON.stringify(e.t0),
            showCancel: !1
          });
        case 17:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [4, 14]
    ])
  }))), function() {
    return n.apply(this, arguments)
  })
});