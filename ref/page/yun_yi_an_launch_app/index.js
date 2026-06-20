var o = getApp();
Page({
  data: {
    motto: "平安码丨平安白云",
    userInfo: {},
    hasUserInfo: !1,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    showModal_user_info: !1,
    showModal_location: !1,
    showModal_launch: !1,
    launch_app_name: "wechat",
    modal_content: "",
    oper_state: "NOT_START",
    showModal_lf_launch: !1,
    oper_lf_state: "NOT_START"
  },
  onLoad: function(a) {
    wx.getSystemInfoSync().version <= "6.7.3" && (console.log("--- 微信版本过低 ---"), wx.showModal({
      title: "提示",
      content: "微信版本过低,请升级微信",
      showCancel: !1
    }));
    var t = decodeURIComponent(a.oper_type);
    if (console.log(t, "---oper_type---"), null != t && null != t && "undefined" != t && "" != t) return "register_company" == t ? void this.go_company() : void wx.showModal({
      title: "提示",
      content: "数据异常",
      showCancel: !1,
      success: function(o) {
        wx.navigateBack({
          delta: -10
        })
      }
    });
    var e = decodeURIComponent(a.unionId);
    if ("undefined" == (n = decodeURIComponent(a.src)))
      if (null != e && null != e && "" != e && "undefined" != e) {
        if (o.globalData.register_type = "YUN_YI_AN_LAUNCH_REGISTER", "NOT_START" == this.data.oper_state) this.get_location_role();
        else if ("FINISH" == this.data.oper_state) return this.setData({
          modal_content: "您已通过平安码丨平安白云身份核验 请返回云易安"
        }), void this.setData({
          showModal_launch: !0
        })
      } else {
        if ("FINISH" == this.data.oper_state) return this.setData({
          modal_content: "您已通过平安码丨平安白云身份核验 请返回云易安"
        }), void this.setData({
          showModal_launch: !0
        });
        this.get_location_role()
      } var n = decodeURIComponent(a.src);
    if ("undefined" == e)
      if (null != n && null != n && "" != n && "undefined" != n) {
        if (o.globalData.register_type = "LF_LAUNCH_REGISTER", "NOT_START" == this.data.oper_lf_state) this.get_location_role();
        else if ("FINISH" == this.data.oper_lf_state) return this.setData({
          modal_content: "您已通过平安码丨平安白云身份核验 请返回我的来访"
        }), void this.setData({
          showModal_lf_launch: !0
        })
      } else {
        if ("FINISH" == this.data.oper_lf_state) return this.setData({
          modal_content: "您已通过平安码丨平安白云身份核验 请返回我的来访"
        }), void this.setData({
          showModal_lf_launch: !0
        });
        this.get_location_role()
      }
  },
  onShow: function() {},
  get_location_role: function() {
    var a = this;
    wx.getSetting({
      success: function(t) {
        console.log("获取用户授权设置..."), console.log(t), null == t.authSetting["scope.userLocation"] || null == t.authSetting["scope.userLocation"] ? (console.log("用户未设置过授权,弹出请求授权界面 userLocation..."), wx.authorize({
          scope: "scope.userLocation",
          success: function(t) {
            console.log("authorize scope.userLocation success...", t), wx.getLocation({
              type: "wgs84",
              altitude: !1,
              success: function(t) {
                console.log("res.getLocation:", t), o.globalData.location_info = t;
                var e = t.accuracy,
                  n = t.altitude,
                  l = t.horizontalAccuracy,
                  s = t.latitude,
                  i = t.longitude,
                  c = t.speed,
                  d = t.verticalAccuracy;
                if (null == o.globalData.openid || "" == o.globalData.openid || null == o.globalData.openid) wx.login({
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
                          o.globalData.openid = a.data[1].openid;
                          var t = {
                            openId: o.globalData.openid,
                            accuracy: e,
                            altitude: n,
                            horizontalAccuracy: l,
                            latitude: s,
                            longitude: i,
                            speed: c,
                            verticalAccuracy: d
                          };
                          wx.request({
                            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log",
                            method: "POST",
                            dataType: "json",
                            data: t,
                            success: function(o) {},
                            fail: function(o) {}
                          })
                        }
                      },
                      fail: function(o) {}
                    })
                  },
                  fail: function(o) {}
                });
                else {
                  var r = {
                    openId: o.globalData.openid,
                    accuracy: e,
                    altitude: n,
                    horizontalAccuracy: l,
                    latitude: s,
                    longitude: i,
                    speed: c,
                    verticalAccuracy: d
                  };
                  wx.request({
                    url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log",
                    method: "POST",
                    dataType: "json",
                    data: r,
                    success: function(o) {},
                    fail: function(o) {}
                  })
                }
                a.ask_join()
              },
              fail: function(o) {
                console.log("getLocation fail", o), a.setData({
                  showModal_location: !0
                })
              }
            })
          },
          fail: function(o) {
            console.log("authorize scope.userLocation fail 用户不允许授权...", o), a.setData({
              showModal_location: !0
            })
          }
        })) : 1 == t.authSetting["scope.userLocation"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 userLocation..."), wx.getLocation({
          type: "wgs84",
          altitude: !1,
          success: function(t) {
            o.globalData.location_info = t;
            var e = t.accuracy,
              n = t.altitude,
              l = t.horizontalAccuracy,
              s = t.latitude,
              i = t.longitude,
              c = t.speed,
              d = t.verticalAccuracy;
            if (null == o.globalData.openid || "" == o.globalData.openid || null == o.globalData.openid) wx.login({
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
                      o.globalData.openid = a.data[1].openid;
                      var t = {
                        openId: o.globalData.openid,
                        accuracy: e,
                        altitude: n,
                        horizontalAccuracy: l,
                        latitude: s,
                        longitude: i,
                        speed: c,
                        verticalAccuracy: d
                      };
                      wx.request({
                        url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log",
                        method: "POST",
                        dataType: "json",
                        data: t,
                        success: function(o) {},
                        fail: function(o) {}
                      })
                    }
                  },
                  fail: function(o) {}
                })
              },
              fail: function(o) {}
            });
            else {
              var r = {
                openId: o.globalData.openid,
                accuracy: e,
                altitude: n,
                horizontalAccuracy: l,
                latitude: s,
                longitude: i,
                speed: c,
                verticalAccuracy: d
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log",
                method: "POST",
                dataType: "json",
                data: r,
                success: function(o) {},
                fail: function(o) {}
              })
            }
            a.ask_join()
          },
          fail: function(o) {
            console.log("getLocation fail", o), wx.hideLoading(), wx.showModal({
              title: "提示",
              content: "用户位置信息获取失败,请打开位置信息",
              showCancel: !1,
              success: function(o) {
                wx.navigateBack({
                  delta: -10
                })
              }
            })
          }
        })) : 0 == t.authSetting["scope.userLocation"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 userLocation..."), a.setData({
          showModal_location: !0
        }))
      }
    })
  },
  hideModal_location: function() {},
  hideModal_user_info: function() {},
  get_user_info_result: function(a) {
    var t = this;
    if ("getUserInfo:ok" == a.detail.errMsg) {
      this.setData({
        showModal_user_info: !1
      }), o.globalData.userInfo = a.detail.rawData, o.globalData.USERINFO_post = a.detail.rawData;
      var e = wx.getStorageSync("unionId");
      null == e || null == e || "" == e || t.go_to_action()
    } else wx.showModal({
      title: "提示",
      content: "拒绝授权影响身份核验  请授权",
      confirmText: "确定",
      showCancel: !1,
      success: function(o) {
        t.setData({
          showModal_user_info: !0
        })
      }
    })
  },
  go_to_action: function() {
    return "000000000001" == this.data.this_sfz_resp_code ? (console.log("apply....000000000001 "), void wx.navigateTo({
      url: "../component/pages/form_ocr_01/form"
    })) : "000000000002" == this.data.this_sfz_resp_code ? (o.globalData.page_verify_code_msg = "您已提交身份证资料,请进行基于生物识别的人脸核身", o.globalData.XM = this.data.this_sfz_XM, o.globalData.ZJHM = this.data.this_sfz_ZJHM, o.globalData.mobile_phone = this.data.this_sfz_mobile_phone, console.log("您已提交身份证资料,请进行基于生物识别的人脸核身...."), void wx.navigateTo({
      url: "../component/pages/form_ocr_03/form"
    })) : "000000000004" == this.data.this_sfz_resp_code ? (o.globalData.page_verify_code_msg = "已发送短信验证码,请输入短信验证码", console.log("submit code...."), void wx.navigateTo({
      url: "../component/pages/form_ocr_04/form"
    })) : void 0
  },
  get_role_result: function(o) {
    console.log("get_role_result", o), 0 == o.detail.authSetting["scope.userLocation"] ? (this.setData({
      showModal_location: !0
    }), console.log("用户选择了否")) : (console.log("用户选择了是"), this.setData({
      showModal_location: !1
    }))
  },
  ask_join: function() {
    wx.hideLoading();
    var a = this,
      t = o.globalData.register_type;
    wx.login({
      success: function(e) {
        console.log(e.code);
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: e.code
          },
          success: function(e) {
            if (console.log("拉取login", e), "000000000000" == e.data[0].resp_code) {
              o.globalData.openid = e.data[1].openid, o.globalData.session_key = e.data[1].session_key;
              var n = {
                openId: o.globalData.openid
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: n,
                success: function(e) {
                  console.log("检查进度结果", e);
                  var n = e.data[0].resp_code;
                  if (a.setData({
                      this_sfz_resp_code: n
                    }), "000000000002" == n && (a.setData({
                      this_sfz_XM: e.data[0].XM
                    }), a.setData({
                      this_sfz_ZJHM: e.data[0].ZJHM
                    }), a.setData({
                      this_sfz_mobile_phone: e.data[0].mobile_phone
                    }), console.log("XM:", e.data[0].XM)), "000000000003" == n) wx.showModal({
                    title: "提示",
                    content: "您将拍照验证是否本人",
                    showCancel: !1,
                    success: function() {
                      var e;
                      return -1 != wx.getSystemInfoSync().model.indexOf("iPhone") ? void wx.navigateTo({
                        url: "../yun_yi_an_launch_app/pages/camera_face_ios/camera?register_type=" + t
                      }) : (e = ["camera"], void wx.chooseImage({
                        count: 1,
                        sizeType: ["compressed"],
                        sourceType: e,
                        success: function(e) {
                          if (console.log(e), e.tempFilePaths.length > 0) {
                            wx.showLoading({
                              title: "核验中..."
                            });
                            var n = e.tempFilePaths[0];
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
                              success: function(o) {
                                var e = JSON.parse(o.data);
                                return console.log(e[0].resp_code), wx.hideLoading(), "000000000000" != e[0].resp_code ? (wx.hideLoading(), void wx.showModal({
                                  title: "提示",
                                  content: "" + e[0].resp_msg,
                                  showCancel: !1,
                                  success: function() {
                                    a.ask_join()
                                  }
                                })) : "YUN_YI_AN_LAUNCH_REGISTER" == t ? (a.setData({
                                  modal_content: "您已通过平安码丨平安白云身份核验 请返回云易安"
                                }), a.setData({
                                  showModal_launch: !0
                                }), void a.setData({
                                  oper_state: "FINISH"
                                })) : "LF_LAUNCH_REGISTER" == t ? (a.setData({
                                  modal_content: "您已通过平安码丨平安白云身份核验 请返回我的来访"
                                }), a.setData({
                                  showModal_lf_launch: !0
                                }), a.setData({
                                  oper_lf_state: "FINISH"
                                }), !1) : void 0
                              }
                            })
                          } else wx.showModal({
                            title: "您未拍照",
                            content: "请拍照",
                            showCancel: !1
                          })
                        },
                        fail: function(o) {
                          console.log("error:", o), wx.showModal({
                            title: "拍照异常",
                            content: "拍照异常-3211",
                            showCancel: !1,
                            success: function() {
                              a.ask_join()
                            }
                          })
                        }
                      }))
                    }
                  });
                  else {
                    if ("000000000001" == n || "000000000002" == n || "000000000004" == n) return o.globalData.register_type = t, console.log("apply....", o.globalData.register_type), void wx.showModal({
                      title: "平安码丨平安白云",
                      content: "您将进行平安码丨平安白云身份核验",
                      showCancel: !1,
                      success: function() {
                        var t = wx.getStorageSync("unionId");
                        if (null != o.globalData.userInfo && "" != o.globalData.userInfo && null != o.globalData.userInfo && null != t && "" != t && null != t) return "000000000001" == n ? (console.log("apply....000000000001 "), void wx.navigateTo({
                          url: "../component/pages/form_ocr_01/form"
                        })) : "000000000002" == n ? (o.globalData.page_verify_code_msg = "您已提交身份证资料,请进行基于生物识别的人脸核身", o.globalData.XM = a.data.this_sfz_XM, o.globalData.ZJHM = a.data.this_sfz_ZJHM, o.globalData.mobile_phone = a.data.this_sfz_mobile_phone, console.log("您已提交身份证资料,请进行基于生物识别的人脸核身...."), console.log("this_page.data.this_sfz_XM:", a.data.this_sfz_XM, o.globalData.XM, o.globalData.ZJHM), void wx.navigateTo({
                          url: "../component/pages/form_ocr_03/form"
                        })) : "000000000004" == n ? (o.globalData.page_verify_code_msg = "已发送短信验证码,请输入短信验证码", console.log("submit code...."), void wx.navigateTo({
                          url: "../component/pages/form_ocr_04/form"
                        })) : void 0;
                        a.setData({
                          showModal_user_info: !0
                        })
                      }
                    });
                    wx.showModal({
                      title: "提示",
                      content: "查询进度异常" + e.data[0].resp_msg + e.data[0].resp_code,
                      showCancel: !1
                    })
                  }
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
              content: "获取状态异常-3:" + e.data[0].resp_code + e.data[0].resp_msg,
              showCancel: !1
            })
          },
          fail: function(o) {
            console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", o), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + o.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(o) {
        console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", o), wx.showModal({
          title: "提示",
          content: "获取状态异常," + o.errMsg,
          showCancel: !1
        })
      }
    })
  },
  launchAppError: function(o) {
    console.log(o.detail.errMsg), wx.showModal({
      title: "返回app异常",
      content: o.detail.errMsg,
      confirmText: "确定",
      showCancel: !1,
      success: function(o) {}
    })
  },
  hideModal_launch: function() {
    this.setData({
      showModal_launch: !1
    })
  },
  hideModal_lf_launch: function() {
    this.setData({
      showModal_lf_launch: !1
    })
  },
  go_index: function() {
    wx.redirectTo({
      url: "../index_01/pages/my/my"
    })
  },
  go_company: function() {
    wx.showLoading({
      title: "请稍等...",
      mask: !0
    }), wx.login({
      success: function(a) {
        console.log(a.code, "data.code"), wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: a.code
          },
          success: function(a) {
            if (console.log("拉取login", a), "000000000000" == a.data[0].resp_code) {
              o.globalData.openid = a.data[1].openid, o.globalData.session_key = a.data[1].session_key;
              var t = {
                openId: o.globalData.openid,
                oper_type: "COMPANY"
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: t,
                success: function(a) {
                  if (wx.hideLoading(), console.log("检查进度结果", a), "000000000003" == a.data[0].resp_code) {
                    var t = a.data[0].access_token;
                    return o.globalData.access_token = t, void wx.navigateTo({
                      url: "../../../../third_part/pages/company/form?access_token=" + t + "&jump_to=register"
                    })
                  }
                  return o.globalData.back_url = "COMPANY", void wx.showModal({
                    title: "提示",
                    content: "您还未注册,请先注册",
                    showCancel: !1,
                    success: function() {
                      wx.navigateTo({
                        url: "../../../../index/index"
                      })
                    }
                  })
                },
                fail: function(o) {
                  wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", o), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-1," + o.errMsg,
                    showCancel: !1
                  })
                }
              })
            } else wx.hideLoading(), wx.showModal({
              title: "提示",
              content: "获取状态异常-3:" + a.data[0].resp_code + a.data[0].resp_msg,
              showCancel: !1
            })
          },
          fail: function(o) {
            wx.hideLoading(), console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", o), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + o.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(o) {
        wx.hideLoading(), console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", o), wx.showModal({
          title: "提示",
          content: "获取状态异常," + o.errMsg,
          showCancel: !1
        })
      }
    })
  }
});