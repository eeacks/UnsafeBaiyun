var a = getApp();
Page({
  data: {
    GSMC: "",
    DZ: "",
    ZT: "",
    bt_apply_display: !1,
    bt_index_display: !1,
    title: "我的单位",
    this_company_rec_id: null,
    this_sfz_resp_code: null,
    this_sfz_XM: null,
    this_sfz_ZJHM: null,
    this_sfz_mobile_phone: null,
    showModal_user_info: !1,
    showModal_location: !1,
    this_page_found_scene: !1,
    showModal_address: !1,
    brands: [],
    objectArray: [{
      brand: "请选择居住市",
      id: 0,
      array: ["请选择居住区"]
    }, {
      brand: "广州市",
      id: 1,
      array: ["请选择居住区", "白云区", "越秀区", "天河区", "荔湾区", "海珠区", "花都区", "增城区", "从化区", "黄埔区", "番禺区", "南沙区"]
    }, {
      brand: "佛山市",
      id: 2,
      array: ["请选择居住区", "禅城区", "南海区", "顺德区", "高明区", "三水区"]
    }, {
      brand: "其他市",
      id: 3,
      array: ["请选择居住区", "其他市"]
    }],
    object: [],
    brandindex: 0,
    index1: 0,
    live_city: null,
    live_area: null,
    live_address: null,
    address_passwd: null,
    room: null
  },
  bindPickerChange0: function(a) {
    this.setData({
      brandindex: a.detail.value,
      index1: 0
    });
    var o = this.data.objectArray;
    this.setData({
      object: o[this.data.brandindex].array
    })
  },
  bindPickerChange1: function(a) {
    this.setData({
      index1: a.detail.value
    })
  },
  onLoad: function(o) {
    var t = this,
      e = decodeURIComponent(o.scene);
    this.data.scene = e, console.log("scene holiday company:", e, o);
    var n = !1;
    try {
      parseInt(e) > 1 && (n = !0)
    } catch (a) {
      console.log(a)
    }
    if (t.setData({
        this_page_found_scene: n
      }), 1 != n) {
      wx.showLoading({
        title: "刷新中..."
      }), wx.login({
        success: function(o) {
          wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
            method: "POST",
            dataType: "json",
            data: {
              code: o.code
            },
            success: function(o) {
              if (console.log("拉取login", o), "000000000000" == o.data[0].resp_code) {
                a.globalData.openid = o.data[1].openid, a.globalData.session_key = o.data[1].session_key;
                var e = {
                  openId: a.globalData.openid
                };
                console.log("post_data", e);
                wx.request({
                  url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/get_company_by_staff",
                  method: "POST",
                  dataType: "json",
                  data: e,
                  success: function(a) {
                    wx.hideLoading(), console.log("提交信息", a), "000000000000" == a.data[0].resp_code ? (console.log("提交成功", a.data[0].yyqx), t.setData({
                      SXPCS: a.data[0].sxpcs,
                      SXSQ: a.data[0].sxsq,
                      ZCH: a.data[0].zch,
                      GSMC: a.data[0].gsmc,
                      FDDBR: a.data[0].fddbr,
                      DZ: a.data[0].dz,
                      YYQX: a.data[0].yyqx
                    }), t.setData({
                      ZT: "已加入该单位",
                      bt_apply_display: !0
                    })) : "-000000000239" == a.data[0].resp_code ? wx.showModal({
                      title: "提示",
                      content: "提交失败-0169," + a.data[0].resp_code + a.data[0].resp_msg,
                      showCancel: !1,
                      success: function() {}
                    }) : (console.log("err:", a), wx.showModal({
                      title: "后台服务器异常",
                      content: "提交失败-0169," + a.data[0].resp_code + a.data[0].resp_msg,
                      showCancel: !1
                    }))
                  },
                  fail: function(a) {
                    wx.hideLoading(), console.log("提交失败，", a), wx.showModal({
                      title: "后台服务器异常",
                      content: "提交失败-0168," + a.errMsg,
                      showCancel: !1
                    })
                  }
                })
              } else wx.showModal({
                title: "提示",
                content: "获取状态异常-3:" + o.data[0].resp_code + o.data[0].resp_msg,
                showCancel: !1
              })
            },
            fail: function(a) {
              console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", a), wx.showModal({
                title: "提示",
                content: "获取状态异常-4," + a.errMsg,
                showCancel: !1
              })
            }
          })
        },
        fail: function(a) {
          console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", a), wx.showModal({
            title: "提示",
            content: "获取状态异常," + a.errMsg,
            showCancel: !1
          })
        }
      })
    } else {
      var s = e;
      t.setData({
        this_company_rec_id: s
      });
      for (var l = this.data.objectArray, i = [], c = 0; c < l.length; c++) i.push(l[c].brand);
      this.setData({
        brands: i,
        object: l[this.data.brandindex].array
      })
    }
  },
  error: function(a) {
    console.log(a.detail)
  },
  onShow: function() {
    console.log("onShow"), this.get_location_role()
  },
  onUnload: function() {
    console.log("onUnload")
  },
  submit_apply: function() {
    null == this.data.this_company_rec_id || this.ask_join()
  },
  go_index: function() {
    wx.redirectTo({
      url: "../../../index_01/pages/my/my"
    })
  },
  get_user_info_result: function(o) {
    var t = this;
    if ("getUserInfo:ok" == o.detail.errMsg) {
      this.setData({
        showModal_user_info: !1
      }), a.globalData.userInfo = o.detail.rawData, a.globalData.USERINFO_post = o.detail.rawData;
      var e = wx.getStorageSync("unionId");
      if (null == e || null == e || "" == e) {
        wx.showLoading({
          title: "请稍等..."
        });
        var n = {
            session_key: a.globalData.session_key,
            encryptedData: o.detail.encryptedData,
            iv: o.detail.iv
          },
          s = "https://xcx.pinganbaiyun.cn/mini_program/api_01/dencryp";
        console.log(s, n), wx.request({
          url: s,
          method: "POST",
          dataType: "json",
          data: n,
          success: function(o) {
            if (console.log("获取解码信息 user_info", o), "000000000000" != o.data[0].resp_code) return wx.hideLoading(), void t.go_to_action();
            var e = o.data[1].unionId,
              n = {
                openId: a.globalData.openid,
                unionId: e
              },
              s = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_openId_unionId";
            console.log(s, n), wx.request({
              url: s,
              method: "POST",
              dataType: "json",
              data: n,
              success: function(a) {
                wx.hideLoading(), wx.setStorageSync("unionId", e), t.go_to_action()
              },
              fail: function(a) {
                wx.hideLoading(), console.log("提交失败，", a), t.go_to_action()
              }
            })
          },
          fail: function(a) {
            console.log("dencryp fail:", a), wx.hideLoading(), t.go_to_action()
          }
        })
      } else t.go_to_action()
    } else wx.showModal({
      title: "提示",
      content: "拒绝授权影响加入单位  请授权",
      confirmText: "确定",
      showCancel: !1,
      success: function(a) {
        t.setData({
          showModal_user_info: !0
        })
      }
    })
  },
  go_to_action: function() {
    return "000000000001" == this.data.this_sfz_resp_code ? (console.log("apply....000000000001 "), void wx.navigateTo({
      url: "../../../component/pages/form_ocr_01/form"
    })) : "000000000002" == this.data.this_sfz_resp_code ? (a.globalData.page_verify_code_msg = "您已提交身份证资料,请进行基于生物识别的人脸核身", a.globalData.XM = this.data.this_sfz_XM, a.globalData.ZJHM = this.data.this_sfz_ZJHM, a.globalData.mobile_phone = this.data.this_sfz_mobile_phone, console.log("您已提交身份证资料,请进行基于生物识别的人脸核身...."), void wx.navigateTo({
      url: "../../../component/pages/form_ocr_03/form"
    })) : "000000000004" == this.data.this_sfz_resp_code ? (a.globalData.page_verify_code_msg = "已发送短信验证码,请输入短信验证码", console.log("submit code...."), void wx.navigateTo({
      url: "../../../component/pages/form_ocr_04/form"
    })) : void 0
  },
  get_location_role: function() {
    var o = this,
      t = a;
    wx.getSetting({
      success: function(e) {
        console.log("获取用户授权设置..."), console.log(e), null == e.authSetting["scope.userLocation"] || null == e.authSetting["scope.userLocation"] ? (console.log("用户未设置过授权,弹出请求授权界面 userLocation..."), wx.authorize({
          scope: "scope.userLocation",
          success: function(e) {
            console.log("authorize scope.userLocation success...", e), wx.getLocation({
              type: "wgs84",
              altitude: !1,
              success: function(e) {
                console.log("res.getLocation:", e), t.globalData.location_info = e;
                var n = e.accuracy,
                  s = e.altitude,
                  l = e.horizontalAccuracy,
                  i = e.latitude,
                  c = e.longitude,
                  d = e.speed,
                  r = e.verticalAccuracy;
                if (null == a.globalData.openid || "" == a.globalData.openid || null == a.globalData.openid) wx.login({
                  success: function(o) {
                    wx.request({
                      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
                      method: "POST",
                      dataType: "json",
                      data: {
                        code: o.code
                      },
                      success: function(o) {
                        if (console.log("拉取login", o), "000000000000" == o.data[0].resp_code) {
                          a.globalData.openid = o.data[1].openid;
                          var t = {
                            openId: a.globalData.openid,
                            accuracy: n,
                            altitude: s,
                            horizontalAccuracy: l,
                            latitude: i,
                            longitude: c,
                            speed: d,
                            verticalAccuracy: r
                          };
                          wx.request({
                            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log",
                            method: "POST",
                            dataType: "json",
                            data: t,
                            success: function(a) {},
                            fail: function(a) {}
                          })
                        }
                      },
                      fail: function(a) {}
                    })
                  },
                  fail: function(a) {}
                });
                else {
                  var _ = {
                    openId: a.globalData.openid,
                    accuracy: n,
                    altitude: s,
                    horizontalAccuracy: l,
                    latitude: i,
                    longitude: c,
                    speed: d,
                    verticalAccuracy: r
                  };
                  wx.request({
                    url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log",
                    method: "POST",
                    dataType: "json",
                    data: _,
                    success: function(a) {},
                    fail: function(a) {}
                  })
                }
                o.ask_join()
              },
              fail: function(a) {
                console.log("getLocation fail", a), t.globalData.get_role_01 = !1, o.setData({
                  showModal_location: !0
                })
              }
            })
          },
          fail: function(a) {
            console.log("authorize scope.userLocation fail 用户不允许授权...", a), t.globalData.get_role_01 = !1, o.setData({
              showModal_location: !0
            })
          }
        })) : 1 == e.authSetting["scope.userLocation"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 userLocation..."), wx.getLocation({
          type: "wgs84",
          altitude: !1,
          success: function(e) {
            t.globalData.location_info = e;
            var n = e.accuracy,
              s = e.altitude,
              l = e.horizontalAccuracy,
              i = e.latitude,
              c = e.longitude,
              d = e.speed,
              r = e.verticalAccuracy;
            if (null == a.globalData.openid || "" == a.globalData.openid || null == a.globalData.openid) wx.login({
              success: function(o) {
                wx.request({
                  url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
                  method: "POST",
                  dataType: "json",
                  data: {
                    code: o.code
                  },
                  success: function(o) {
                    if (console.log("拉取login", o), "000000000000" == o.data[0].resp_code) {
                      a.globalData.openid = o.data[1].openid;
                      var t = {
                        openId: a.globalData.openid,
                        accuracy: n,
                        altitude: s,
                        horizontalAccuracy: l,
                        latitude: i,
                        longitude: c,
                        speed: d,
                        verticalAccuracy: r
                      };
                      wx.request({
                        url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log",
                        method: "POST",
                        dataType: "json",
                        data: t,
                        success: function(a) {},
                        fail: function(a) {}
                      })
                    }
                  },
                  fail: function(a) {}
                })
              },
              fail: function(a) {}
            });
            else {
              var _ = {
                openId: a.globalData.openid,
                accuracy: n,
                altitude: s,
                horizontalAccuracy: l,
                latitude: i,
                longitude: c,
                speed: d,
                verticalAccuracy: r
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log",
                method: "POST",
                dataType: "json",
                data: _,
                success: function(a) {},
                fail: function(a) {}
              })
            }
            o.ask_join()
          },
          fail: function(a) {
            console.log("getLocation fail", a)
          }
        })) : 0 == e.authSetting["scope.userLocation"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 userLocation..."), t.globalData.get_role_01 = !1, o.setData({
          showModal_location: !0
        }))
      }
    })
  },
  hideModal_location: function() {},
  get_role_result: function(a) {
    console.log("get_role_result", a), 0 == a.detail.authSetting["scope.userLocation"] ? (this.setData({
      showModal_location: !0
    }), console.log("用户选择了否")) : (console.log("用户选择了是"), this.setData({
      showModal_location: !1
    }))
  },
  ask_join: function() {
    var o = this;
    if (1 != o.data.this_page_found_scene);
    else {
      var t = o.data.this_company_rec_id;
      wx.login({
        success: function(e) {
          wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
            method: "POST",
            dataType: "json",
            data: {
              code: e.code
            },
            success: function(e) {
              if (console.log("拉取login", e), "000000000000" == e.data[0].resp_code) {
                a.globalData.openid = e.data[1].openid, a.globalData.session_key = e.data[1].session_key;
                var n = {
                  openId: a.globalData.openid
                };
                wx.request({
                  url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                  method: "POST",
                  dataType: "json",
                  data: n,
                  success: function(e) {
                    console.log("检查进度结果", e);
                    var n = e.data[0].resp_code;
                    o.setData({
                      this_sfz_resp_code: n
                    }), "000000000002" == n && (o.setData({
                      this_sfz_XM: e.data[0].XM
                    }), o.setData({
                      this_sfz_ZJHM: e.data[0].ZJHM
                    }), o.setData({
                      this_sfz_mobile_phone: e.data[0].mobile_phone
                    }), console.log("XM:", e.data[0].XM)), wx.showLoading({
                      title: "刷新中..."
                    });
                    var s = {
                      company_rec_id: t,
                      openId: a.globalData.openid
                    };
                    console.log("post_data", s);
                    wx.request({
                      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/get_company_by_id",
                      method: "POST",
                      dataType: "json",
                      data: s,
                      success: function(a) {
                        if (wx.hideLoading(), console.log("单位信息", a), "000000000000" == a.data[0].resp_code) {
                          o.setData({
                            GSMC: a.data[0].gsmc,
                            DZ: a.data[0].dz,
                            title: a.data[0].gsmc
                          }), "1" == a.data[0].zt && o.setData({
                            ZT: "单位已审核"
                          });
                          a.data[0].gsmc;
                          1088481594 != o.data.scene ? (console.log("scene", o.data.scene), wx.showModal({
                            title: "提示",
                            content: a.data[0].resp_msg,
                            showCancel: !0,
                            success: function(a) {
                              if (a.confirm) return "000000000003" != n && "000000000001" != n && "000000000002" != n && "000000000002" != n ? void wx.showModal({
                                title: "提示",
                                content: "查询进度异常" + a.data[0].resp_msg + a.data[0].resp_code,
                                showCancel: !1
                              }) : void o.setData({
                                showModal_address: !0
                              });
                              a.cancel
                            }
                          })) : (o.setData({
                            showModal_address: !0
                          }), console.log("scene", o.data.scene))
                        } else {
                          if ("-000000002290" == a.data[0].resp_code || "-000000002291" == a.data[0].resp_code) {
                            o.setData({
                              GSMC: a.data[0].gsmc,
                              DZ: a.data[0].dz,
                              title: a.data[0].gsmc
                            }), "1" == a.data[0].zt && o.setData({
                              ZT: "单位已审核"
                            });
                            a.data[0].gsmc;
                            return void wx.showModal({
                              title: "白云公安疗养专用",
                              content: a.data[0].resp_msg,
                              showCancel: !1,
                              success: function() {}
                            })
                          }
                          console.log("err:", a), wx.showModal({
                            title: "提示",
                            content: a.data[0].resp_msg + a.data[0].resp_code,
                            showCancel: !1
                          })
                        }
                      },
                      fail: function(a) {
                        wx.hideLoading(), console.log("提交失败，", a), wx.showModal({
                          title: "后台服务器异常",
                          content: "提交失败-0168," + a.errMsg,
                          showCancel: !1
                        })
                      }
                    })
                  },
                  fail: function(a) {
                    console.log("获取用户手机号失败，将无法正常使用开放接口等服务", a), wx.showModal({
                      title: "提示",
                      content: "获取状态异常-1," + a.errMsg,
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
            fail: function(a) {
              console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", a), wx.showModal({
                title: "提示",
                content: "获取状态异常-4," + a.errMsg,
                showCancel: !1
              })
            }
          })
        },
        fail: function(a) {
          console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", a), wx.showModal({
            title: "提示",
            content: "获取状态异常," + a.errMsg,
            showCancel: !1
          })
        }
      })
    }
  },
  input_address_then_join_company: function() {
    var o = this,
      t = "",
      e = "",
      n = "",
      s = o.data.address_passwd;
    if (null != s && null != s && "" != s) {
      var l = o.data.room;
      if (null != l && null != l && "" != l)
        if (l.length <= 2) wx.showModal({
          title: "输入提示",
          content: "请输入详细房号",
          showCancel: !1
        });
        else {
          if ("168168" == s) t = "广州市", e = "从化区", n = "碧水湾";
          else if ("886886" == s) t = "清远市", e = "佛冈县", n = "熹乐谷";
          else {
            if ("520520" != s) return void wx.showModal({
              title: "输入提示",
              content: "密码不正确",
              showCancel: !1
            });
            t = "广州市", e = "增城区", n = "森林海"
          }
          n += l, o.setData({
            live_city: t
          }), o.setData({
            live_area: e
          }), o.setData({
            showModal_address: !1
          });
          var i = o.data.this_company_rec_id,
            c = o.data.GSMC,
            d = o.data.this_sfz_resp_code;
          if ("000000000003" == d) {
            wx.showLoading({
              title: "提交中..."
            });
            var r = {
              openId: a.globalData.openid,
              company_rec_id: i,
              live_city: t,
              live_area: e,
              live_address: n
            };
            console.log("post_data:", r);
            wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/input_company_by_id",
              method: "POST",
              dataType: "json",
              data: r,
              success: function(t) {
                return wx.hideLoading(), console.log("提交信息", t), o.setData({
                  address_passwd: null,
                  room: null
                }), "000000000000" == t.data[0].resp_code ? (console.log("提交成功"), a.globalData.live_city = "", a.globalData.live_area = "", a.globalData.live_address = "", o.setData({
                  bt_apply_display: !0
                }), o.setData({
                  ZT: "已加入该单位"
                }), o.setData({
                  showModal_address: !1
                }), void wx.showModal({
                  title: "提示",
                  content: t.data[0].resp_msg,
                  showCancel: !1,
                  success: function(a) {}
                })) : void wx.showModal({
                  title: "提示",
                  content: t.data[0].resp_msg,
                  showCancel: !1,
                  success: function() {}
                })
              },
              fail: function(a) {
                wx.hideLoading(), console.log("提交失败，", a), wx.showModal({
                  title: "后台服务器异常",
                  content: "提交失败-0168," + a.errMsg,
                  showCancel: !1
                })
              }
            })
          } else {
            if ("000000000001" == d || "000000000002" == d || "000000000004" == d) return a.globalData.input_company_id = i, a.globalData.input_company_name = c, a.globalData.live_city = t, a.globalData.live_area = e, a.globalData.live_address = n, console.log("apply....", d), void wx.showModal({
              title: "提示",
              content: "您还未注册，您将进行注册步骤，注册成功之后您将加入该单位",
              showCancel: !1,
              success: function() {
                var t = wx.getStorageSync("unionId");
                if (null == a.globalData.userInfo || "" == a.globalData.userInfo || null == a.globalData.userInfo || null == t || "" == t || null == t) o.setData({
                  showModal_user_info: !0
                });
                else if ("000000000001" == d) console.log("apply....000000000001 "), wx.navigateTo({
                  url: "../../../component/pages/form_ocr_01/form"
                });
                else {
                  if ("000000000002" == d) return a.globalData.page_verify_code_msg = "您已提交身份证资料,请进行基于生物识别的人脸核身", a.globalData.XM = o.data.this_sfz_XM, a.globalData.ZJHM = o.data.this_sfz_ZJHM, a.globalData.mobile_phone = o.data.this_sfz_mobile_phone, console.log("您已提交身份证资料,请进行基于生物识别的人脸核身...."), console.log("this_page.data.this_sfz_XM:", o.data.this_sfz_XM, a.globalData.XM, a.globalData.ZJHM), void wx.navigateTo({
                    url: "../../../component/pages/form_ocr_03/form"
                  });
                  if ("000000000004" == d) return a.globalData.page_verify_code_msg = "已发送短信验证码,请输入短信验证码", console.log("submit code...."), void wx.navigateTo({
                    url: "../../../component/pages/form_ocr_04/form"
                  })
                }
              }
            });
            wx.showModal({
              title: "提示",
              content: "查询进度异常" + o.data.this_sfz_resp_code,
              showCancel: !1
            })
          }
        }
      else wx.showModal({
        title: "输入提示",
        content: "请输入房号",
        showCancel: !1
      })
    } else wx.showModal({
      title: "输入提示",
      content: "请输入密码",
      showCancel: !1
    })
  },
  bindinput_live_address: function(a) {
    this.setData({
      live_address: a.detail.value
    })
  },
  bindblur_live_address: function(a) {
    a.detail.value;
    null != this.data.live_address && null != this.data.live_address && "" != this.data.live_address ? this.setData({
      live_address: a.detail.value
    }) : wx.showModal({
      title: "输入提示",
      content: "请输入详细地址信息",
      showCancel: !1
    })
  },
  bindinput_address_passwd: function(a) {
    this.setData({
      address_passwd: a.detail.value
    })
  },
  bindblur_address_passwd: function(a) {
    a.detail.value;
    null != this.data.address_passwd && null != this.data.address_passwd && "" != this.data.address_passwd ? this.setData({
      address_passwd: a.detail.value
    }) : wx.showModal({
      title: "输入提示",
      content: "请输入密码",
      showCancel: !1
    })
  },
  bindinput_room: function(a) {
    this.setData({
      room: a.detail.value
    })
  },
  bindblur_room: function(a) {
    a.detail.value;
    null != this.data.room && null != this.data.room && "" != this.data.room ? this.setData({
      room: a.detail.value
    }) : wx.showModal({
      title: "输入提示",
      content: "请输入房号",
      showCancel: !1
    })
  }
});