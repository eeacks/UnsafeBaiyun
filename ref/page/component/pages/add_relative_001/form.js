var o = getApp();
Page({
  data: {
    navigationBarTitleText: "平安码丨平安白云",
    pickerHidden: !0,
    chosen: "",
    src: "",
    mobile_phone: "",
    XM: "",
    ZJHM: "",
    canvas_height: 0,
    canvas_width: 0,
    attendSuccessImg: null,
    canvasImgUrl: null,
    upload_file_id: null,
    showModal_camera: !1,
    showModal_location: !1,
    showModal_user_info: !1,
    document_type: "居民身份证",
    document_type_up_img1: !0,
    document_type_up_img2: !1
  },
  bindPickerChanges: function() {
    var o = this,
      a = ["居民身份证", "护照passport"];
    wx.showActionSheet({
      itemList: a,
      success: function(e) {
        0 == e.tapIndex ? o.setData({
          document_type: a[e.tapIndex],
          document_type_up_img1: !0,
          document_type_up_img2: !1
        }) : o.setData({
          document_type: a[e.tapIndex],
          document_type_up_img1: !1,
          document_type_up_img2: !0
        }), console.log(o.data.document_type)
      },
      fail: function(o) {
        console.log(o.errMsg)
      }
    })
  },
  pickerConfirm: function(o) {
    this.setData({
      pickerHidden: !0
    }), this.setData({
      chosen: o.detail.value
    })
  },
  pickerCancel: function(o) {
    this.setData({
      pickerHidden: !0
    })
  },
  pickerShow: function(o) {
    this.setData({
      pickerHidden: !1
    })
  },
  formSubmit: function(o) {
    console.log("form发生了submit事件，携带数据为：", o.detail.value)
  },
  entry_hand: function(a) {
    if (null != o.globalData.location_info)
      if (null != o.globalData.USERINFO_post && null != o.globalData.openid && null != o.globalData.openid && "" != o.globalData.openid) {
        var e = wx.getStorageSync("unionId");
        null != e && null != e && "" != e ? null != o.globalData.camera_role ? (o.globalData.document_type = this.data.document_type, wx.navigateTo({
          url: "../add_relative_002/form"
        })) : this.setData({
          showModal_camera: !0
        }) : this.setData({
          showModal_user_info: !0
        })
      } else this.setData({
        showModal_user_info: !0
      });
    else this.setData({
      showModal_location: !0
    })
  },
  formReset: function(o) {
    console.log("form发生了reset事件，携带数据为：", o.detail.value), this.setData({
      chosen: ""
    })
  },
  onLoad: function(a) {
    console.log("add_relative_001.js onload options:", a);
    var e = a.rent_house_rec_id,
      t = a.room_code,
      l = a.rent_rec_id,
      n = a.attribute || 0,
      s = a.rent_house_code,
      c = a.renter_id_card,
      i = a.from_src;
    if (null != t && null != t && "undefined" != t && "" != t)
      if (null == l || null == l || "undefined" == l || "" == l || null == e || null == e || "undefined" == e || "" == e) {
        if (null == s || null == s || "undefined" == s || "" == s || null == c || null == c || "undefined" == c || "" == c) return void wx.showModal({
          title: "提示",
          content: "数据异常",
          showCancel: !1,
          success: function(o) {
            wx.navigateBackMiniProgram({
              extraData: {
                res_code: "000000000000",
                access_token: "数据异常"
              },
              success: function() {
                console.log("返回上一个小程序成功！")
              },
              fail: function() {
                console.log("返回上一个小程序失败！")
              }
            })
          }
        });
        this.get_rent_house_id_and_renter_id(s, t, c, i)
      } else wx.setStorageSync("add_relative_rent_house_rec_id", e), wx.setStorageSync("add_relative_room_code", t), wx.setStorageSync("add_relative_rent_rec_id", l), wx.setStorageSync("add_relative_attribute", n), o.globalData.register_type = "RELATIVE_HOUSE_", o.globalData.img_url = null, this.setData({
        src: null
      }), o.globalData.upload_file_id_ocr_01 = null, o.globalData.ocr_name = null, o.globalData.ocr_id = null;
    else wx.showModal({
      title: "提示",
      content: "数据异常 套间编号为空 10503",
      showCancel: !1
    })
  },
  get_rent_house_id_and_renter_id: function(a, e, t, l) {
    var n = this;
    wx.showLoading({
      title: "请稍等...",
      mask: !0
    });
    var s = {
      rent_house_code: a,
      room_code: e,
      renter_id_card: t,
      from_src: l
    };
    wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/get_rent_house_id_and_renter_id",
      method: "POST",
      dataType: "json",
      data: s,
      success: function(a) {
        if (wx.hideLoading(), "000000000000" == a.data[0].resp_code) {
          var t = a.data[0].rent_house_id,
            l = a.data[0].rent_rec_id;
          wx.setStorageSync("add_relative_rent_house_rec_id", t), wx.setStorageSync("add_relative_room_code", e), wx.setStorageSync("add_relative_rent_rec_id", l), o.globalData.register_type = "RELATIVE_HOUSE_", o.globalData.img_url = null, n.setData({
            src: null
          }), o.globalData.upload_file_id_ocr_01 = null, o.globalData.ocr_name = null, o.globalData.ocr_id = null
        } else wx.showModal({
          title: "提示",
          content: a.data[0].resp_msg + a.data[0].resp_code,
          showCancel: !1,
          success: function() {
            wx.navigateBackMiniProgram({
              extraData: {
                res_code: a.data[0].resp_code,
                access_token: a.data[0].resp_msg
              },
              success: function() {
                console.log("返回上一个小程序成功！")
              },
              fail: function() {
                console.log("返回上一个小程序失败！")
              }
            })
          }
        })
      },
      fail: function(o) {
        wx.hideLoading(), console.log("提交失败，", o), wx.showModal({
          title: "异常",
          content: "" + o.errMsg,
          showCancel: !1
        })
      }
    })
  },
  go_camera: function() {
    var a, e = this; - 1 == "ALL_MODEL".indexOf("iPhone") ? (a = ["camera"], wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      sourceType: a,
      success: function(a) {
        if (console.log(a), a.tempFilePaths.length > 0) {
          if (wx.showLoading({
              title: "识别中..."
            }), null == e) return void wx.showModal({
            title: "程序异常",
            content: "程序异常,-39113",
            showCancel: !1
          });
          var t = o.globalData.openid;
          "AGENT" == o.globalData.register_type.substr(0, 5) && (t = o.globalData.register_type + t), "RENTER" == o.globalData.register_type.substr(0, 6) && (t = o.globalData.register_type + t), "COMPANY" == o.globalData.register_type.substr(0, 7) && (t = o.globalData.register_type + t), "RELATIVE_HOUSE" == o.globalData.register_type.substr(0, 14) && "RELATIVE_HOUSE" != t.substr(0, 14) && (t = o.globalData.register_type + t);
          var l = "";
          "居民身份证" == e.data.document_type && (l = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_img_ocr_01"), "护照passport" == e.data.document_type && (l = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_img_ocr_passport");
          var n = a.tempFilePaths[0];
          wx.uploadFile({
            url: l,
            filePath: n,
            name: "upload",
            header: {
              "Content-Type": "multipart/form-data"
            },
            formData: {
              openId: t
            },
            success: function(a) {
              console.log(a);
              var t = JSON.parse(a.data);
              console.log(t), wx.hideLoading(), "000000000000" == t[0].resp_code ? "识别完成" == t[0].resp_msg || "success" == t[0].resp_msg ? "居民身份证" == e.data.document_type ? (console.log("photo_src:", n), o.globalData.upload_file_id_ocr_01 = t[0].upload_file_id_ocr_01, o.globalData.ocr_name = t[0].name, o.globalData.ocr_id = t[0].id, o.globalData.document_type = e.data.document_type, wx.navigateTo({
                url: "../add_relative_002/form"
              })) : (console.log("photo_src:", n), o.globalData.upload_file_id_ocr_01 = t[0].file_id_ocr, o.globalData.ocr_name = t[0].pass_port_name, o.globalData.ocr_id = t[0].pass_port_number, o.globalData.document_type = e.data.document_type, wx.navigateTo({
                url: "../add_relative_002/form"
              })) : wx.showModal({
                title: "识别异常无结果",
                content: "" + t[0].resp_msg,
                showCancel: !1
              }) : wx.showModal({
                title: "异常",
                content: "" + t[0].resp_msg,
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
      fail: function(o) {
        console.log("error:", o), wx.showModal({
          title: "拍照异常",
          content: "拍照异常-3211",
          showCancel: !1
        })
      }
    })) : wx.navigateTo({
      url: "../camera_ocr_02/camera"
    })
  },
  error: function(o) {
    console.log(o.detail)
  },
  onShow: function() {
    console.log("onShow"), o.globalData.upload_file_id_ocr_01 = null, o.globalData.ocr_name = null, o.globalData.ocr_id = null, o.globalData.document_type = null
  },
  onUnload: function() {
    console.log("onUnload")
  },
  ask_role_first: function() {
    var a = this;
    if (null != o.globalData.location_info)
      if (null != o.globalData.USERINFO_post && null != o.globalData.openid && null != o.globalData.openid && "" != o.globalData.openid) {
        var e = wx.getStorageSync("unionId");
        null != e && null != e && "" != e ? null != o.globalData.camera_role ? wx.getSetting({
          success: function(o) {
            console.log("获取用户授权设置..."), console.log(o), null == o.authSetting["scope.camera"] || null == o.authSetting["scope.camera"] ? (console.log("用户未设置过授权,弹出请求授权界面 camera..."), wx.authorize({
              scope: "scope.camera",
              success: function(o) {
                console.log("authorize scope.camera success...", o), a.go_camera()
              },
              fail: function(o) {
                console.log("authorize scope.camera fail 用户不允许授权...", o), a.setData({
                  showModal_camera: !0
                })
              }
            })) : 1 == o.authSetting["scope.camera"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 camera..."), a.go_camera()) : 0 == o.authSetting["scope.camera"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 camera..."), a.setData({
              showModal_camera: !0
            }))
          }
        }) : a.setData({
          showModal_camera: !0
        }) : a.setData({
          showModal_user_info: !0
        })
      } else a.setData({
        showModal_user_info: !0
      });
    else a.setData({
      showModal_location: !0
    })
  },
  hideModal_camera: function() {
    this.setData({
      showModal_camera: !1
    })
  },
  get_role_result: function(o) {
    console.log("get_role_result", o), 1 == o.detail.authSetting["scope.userLocation"] && 1 == o.detail.authSetting["scope.camera"] ? (console.log("用户选择了是"), this.setData({
      showModal_location: !1
    }), this.go_camera()) : (this.setData({
      showModal_location: !0
    }), console.log("用户选择了否"))
  },
  get_location_role: function() {
    var a = this,
      e = o;
    wx.getSetting({
      success: function(t) {
        console.log("获取用户授权设置..."), console.log(t), null == t.authSetting["scope.userLocation"] || null == t.authSetting["scope.userLocation"] ? (console.log("用户未设置过授权,弹出请求授权界面 userLocation..."), wx.authorize({
          scope: "scope.userLocation",
          success: function(t) {
            console.log("authorize scope.userLocation success...", t), wx.getLocation({
              type: "wgs84",
              altitude: !1,
              success: function(o) {
                console.log("res.getLocation:", o), e.globalData.location_info = o, a.setData({
                  showModal_location: !1
                })
              },
              fail: function(t) {
                console.log("getLocation fail", t), e.globalData.get_role_01 = !1, a.setData({
                  showModal_location: !0
                }), console.log("getLocation fail 001:", t);
                var l, n = "";
                if (null == o.globalData.SYSTEMINFO) l = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()");
                else try {
                  -1 == o.globalData.SYSTEMINFO.errMsg.indexOf("ok") && (console.log("app.globalData.SYSTEMINFO.errMsg not found:", o.globalData.SYSTEMINFO.errMsg), l = wx.getSystemInfoSync()), console.log("app.globalData.SYSTEMINFO.errMsg ok:", o.globalData.SYSTEMINFO.errMsg), l = o.globalData.SYSTEMINFO
                } catch (o) {
                  console.log(o), l = wx.getSystemInfoSync()
                }
                n = -1 != l.model.indexOf("iPhone") ? "请您通过设置->隐私->定位服务->微信 授权微信允许访问位置信息" : "请您通过设置->安全和隐私->定位服务->微信 授权微信允许访问位置信息", wx.showModal({
                  title: "平安码丨平安白云需要获取定位为您提供更加精准的服务",
                  content: n,
                  showCancel: !1,
                  success: function(o) {}
                })
              }
            })
          },
          fail: function(o) {
            console.log("authorize scope.userLocation fail 用户不允许授权...", o), e.globalData.get_role_01 = !1, a.setData({
              showModal_location: !0
            })
          }
        })) : 1 == t.authSetting["scope.userLocation"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 userLocation..."), wx.getLocation({
          type: "wgs84",
          altitude: !1,
          success: function(o) {
            e.globalData.location_info = o, a.setData({
              showModal_location: !1
            }), console.log(o)
          },
          fail: function(a) {
            console.log("getLocation fail 002:", a);
            var e, t = "";
            if (null == o.globalData.SYSTEMINFO) e = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()");
            else try {
              -1 == o.globalData.SYSTEMINFO.errMsg.indexOf("ok") && (console.log("app.globalData.SYSTEMINFO.errMsg not found:", o.globalData.SYSTEMINFO.errMsg), e = wx.getSystemInfoSync()), console.log("app.globalData.SYSTEMINFO.errMsg ok:", o.globalData.SYSTEMINFO.errMsg), e = o.globalData.SYSTEMINFO
            } catch (o) {
              console.log(o), e = wx.getSystemInfoSync()
            }
            t = -1 != e.model.indexOf("iPhone") ? "请您通过设置->隐私->定位服务->微信 授权微信允许访问位置信息" : "请您通过设置->安全和隐私->定位服务->微信 授权微信允许访问位置信息", wx.showModal({
              title: "平安码丨平安白云需要获取定位为您提供更加精准的服务",
              content: t,
              showCancel: !1,
              success: function(o) {}
            })
          }
        })) : 0 == t.authSetting["scope.userLocation"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 userLocation..."), e.globalData.get_role_01 = !1, a.setData({
          showModal_location: !0
        }))
      }
    })
  },
  get_user_info_result: function(a) {
    var e = this;
    wx.getUserProfile({
      desc: "请授权用于完善个人资料",
      success: function(a) {
        console.log("getUserProfile success", a), "getUserProfile:ok" == a.errMsg ? (o.globalData.userInfo = JSON.stringify(a.userInfo), o.globalData.USERINFO_post = JSON.stringify(a.userInfo), e.setData({
          showModal_user_info: !1
        }), wx.login({
          success: function(a) {
            wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
              method: "POST",
              dataType: "json",
              data: {
                code: a.code
              },
              success: function(a) {
                if (console.log("获取unionId,拉取login:", a), "000000000000" == a.data[0].resp_code) {
                  var e = a.data[1].openid;
                  a.data[1].session_key;
                  null != o.globalData.openid && null != o.globalData.openid && "" != o.globalData.openid || (o.globalData.openid = e);
                  var t = a.data[1].unionid;
                  console.log("unionId", t), wx.setStorageSync("unionId", t)
                }
              },
              fail: function(o) {
                console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", o), wx.showModal({
                  title: "后台服务器异常",
                  content: "拉取用户手机号失败-013261,程序退出," + o.errMsg,
                  showCancel: !1
                })
              }
            })
          },
          fail: function(o) {
            console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", o), wx.showModal({
              title: "后台服务器异常",
              content: "拉取用户手机号失败-0112162,程序退出," + o,
              showCancel: !1
            })
          }
        })) : wx.showModal({
          title: "提示",
          content: "请授权平安码丨平安白云获取微信用户信息",
          confirmText: "确定",
          showCancel: !1,
          success: function(o) {
            e.setData({
              showModal_user_info: !0
            })
          }
        })
      },
      fail: function(o) {
        console.log("getUserProfile fail", o), wx.showModal({
          title: "提示",
          content: "请授权平安码丨平安白云获取微信用户信息",
          confirmText: "确定",
          showCancel: !1,
          success: function(o) {
            e.setData({
              showModal_user_info: !0
            })
          }
        })
      }
    })
  },
  get_location_role_result: function(a) {
    var e = this,
      t = o;
    console.log("get_location_role_result", a), 0 == a.detail.authSetting["scope.userLocation"] ? (e.setData({
      showModal_location: !0
    }), console.log("用户选择了否")) : (console.log("用户选择了是"), e.setData({
      showModal_location: !1
    }), console.log("用户设置了是 则再次获取位置信息 userLocation..."), wx.getLocation({
      type: "wgs84",
      altitude: !1,
      success: function(o) {
        t.globalData.location_info = o, e.setData({
          showModal_location: !1
        }), console.log(o)
      },
      fail: function(a) {
        console.log("getLocation fail 003:", a);
        var e, t = "";
        if (null == o.globalData.SYSTEMINFO) e = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()");
        else try {
          -1 == o.globalData.SYSTEMINFO.errMsg.indexOf("ok") && (console.log("app.globalData.SYSTEMINFO.errMsg not found:", o.globalData.SYSTEMINFO.errMsg), e = wx.getSystemInfoSync()), console.log("app.globalData.SYSTEMINFO.errMsg ok:", o.globalData.SYSTEMINFO.errMsg), e = o.globalData.SYSTEMINFO
        } catch (o) {
          console.log(o), e = wx.getSystemInfoSync()
        }
        t = -1 != e.model.indexOf("iPhone") ? "请您通过设置->隐私->定位服务->微信 授权微信允许访问位置信息" : "请您通过设置->安全和隐私->定位服务->微信 授权微信允许访问位置信息", wx.showModal({
          title: "平安码丨平安白云需要获取定位为您提供更加精准的服务",
          content: t,
          showCancel: !1,
          success: function(o) {}
        })
      }
    }))
  },
  permission_deny: function() {
    wx.showModal({
      title: "您确定取消授权，退出注册？",
      content: "取消授权您将返回首页",
      showCancel: !0,
      success: function(o) {
        console.log(o), 1 != o.confirm || wx.reLaunch({
          url: "/page/index_01/pages/my/my"
        })
      }
    })
  },
  get_camera_role: function() {
    var a = this,
      e = o;
    wx.getSetting({
      success: function(o) {
        console.log("获取摄像头设置..."), console.log(o), null == o.authSetting["scope.camera"] || null == o.authSetting["scope.camera"] ? (console.log("用户未设置过授权,弹出请求授权界面 camera..."), wx.authorize({
          scope: "scope.camera",
          success: function(o) {
            console.log("authorize scope.camera success...", o), e.globalData.camera_role = "GRANTED", a.setData({
              showModal_camera: !1
            })
          },
          fail: function(o) {
            console.log("authorize scope.camera fail 用户不允许授权...", o), a.setData({
              showModal_camera: !0
            })
          }
        })) : 1 == o.authSetting["scope.camera"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 camera..."), wx.authorize({
          scope: "scope.camera",
          success: function(o) {
            console.log("authorize scope.camera success...", o), e.globalData.camera_role = "GRANTED", a.setData({
              showModal_camera: !1
            })
          },
          fail: function(o) {
            console.log("authorize scope.camera fail 用户不允许授权...", o), a.setData({
              showModal_camera: !0
            })
          }
        })) : 0 == o.authSetting["scope.camera"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 camera..."), a.setData({
          showModal_camera: !0
        }))
      }
    })
  },
  get_camera_role_result: function(a) {
    var e = this,
      t = o;
    console.log("get_camera_role_result", a), 0 == a.detail.authSetting["scope.camera"] ? (e.setData({
      showModal_camera: !0
    }), console.log("用户选择了否 get_camera_role_result")) : (console.log("用户选择了是 get_camera_role_result"), wx.authorize({
      scope: "scope.camera",
      success: function(o) {
        console.log("authorize scope.camera success...", o), t.globalData.camera_role = "GRANTED", e.setData({
          showModal_camera: !1
        })
      },
      fail: function(o) {
        console.log("authorize scope.camera fail 用户不允许授权...", o), e.setData({
          showModal_camera: !0
        })
      }
    }))
  }
});