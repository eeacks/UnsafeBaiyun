var e, a = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator");
(e = require("../../../../util/regenerator-runtime/runtime")) && e.__esModule;
var o, n = require("../../../../util/util.js"),
  r = getApp();

function l(e) {
  return !1 !== /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)
}
Page({
  data: {
    array: "居民身份证",
    relationship: "住户父母parent",
    certificate_type: "idcard",
    index1: "",
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
    remark: "",
    showModal_camera: !1,
    hidden_get_mobile_button: !1,
    mobile_button_disabled: !1,
    input_age: "",
    show_choose_country: !1,
    country_index: ""
  },
  bindPickerChange: function() {
    var e = this,
      a = ["居民身份证", "护照passport"];
    wx.showActionSheet({
      itemList: a,
      success: function(t) {
        if (e.setData({
            array: a[t.tapIndex]
          }), "居民身份证" == e.data.array) e.setData({
          certificate_type: "idcard"
        });
        else {
          var o = e.convertToUpperCase(e.data.XM);
          e.setData({
            certificate_type: "text",
            XM: o
          })
        }
      },
      fail: function(e) {
        console.log(e.errMsg)
      }
    })
  },
  bindPickerChanges: function() {
    var e = this,
      a = ["住户父母parents", "住户子女children", "住户亲戚relatives", "住户配偶spouse"];
    "4" == wx.getStorageSync("add_relative_attribute") && a.push("租客tenant"), wx.showActionSheet({
      itemList: a,
      success: function(t) {
        e.setData({
          relationship: a[t.tapIndex]
        })
      },
      fail: function(e) {
        console.log(e.errMsg)
      }
    })
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
  onLoad: function() {
    r.globalData.img_url = null, this.setData({
      src: null
    })
  },
  go_camera: (o = t(a().mark((function e() {
    var t, o, i, s, c, d, u, _, h, g, p, w, b, f;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (console.log("事件触发成功"), t = this, null != r.globalData.openid && null != r.globalData.openid && "" != r.globalData.openid) {
            e.next = 26;
            break
          }
          return console.log("app.globalData.openId:", r.globalData.openid), e.prev = 5, e.next = 8, n.wx_login();
        case 8:
          if (o = e.sent, console.log("login_result:", o, o.data[0], o.data[1]), "000000000000" != o.data[0].resp_code) {
            e.next = 16;
            break
          }
          r.globalData.openid = o.data[1].openid, r.globalData.session_key = o.data[1].session_key, console.log("util.wx_login.openId:", r.globalData.openid), e.next = 19;
          break;
        case 16:
          return console.log("util.wx_login.openId err_msg:", o.data[0].resp_code), wx.showModal({
            title: "获取用户信息提示",
            content: o.data[0].resp_msg + o.data[0].resp_code,
            showCancel: !1,
            success: function(e) {
              wx.reLaunch({
                url: "/page/index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 19:
          e.next = 26;
          break;
        case 21:
          return e.prev = 21, e.t0 = e.catch(5), console.log("获取用户信息提示 e", e.t0), wx.showModal({
            title: "获取用户信息提示",
            content: "获取用户信息失败(1006)",
            showCancel: !1,
            success: function(e) {
              wx.reLaunch({
                url: "/page/index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 26:
          if (null != r.globalData.openid && null != r.globalData.openid && "" != r.globalData.openid) {
            e.next = 50;
            break
          }
          if ("AGENT" != r.globalData.register_type.substr(0, 5) && "RENTER" != r.globalData.register_type.substr(0, 6) && "COMPANY" != r.globalData.register_type.substr(0, 7) && "RELATIVE_HOUSE" != r.globalData.register_type.substr(0, 14) && "APP_LAUNCH_REGISTER" != r.globalData.register_type && "YUN_YI_AN_LAUNCH_REGISTER" != r.globalData.register_type) {
            e.next = 30;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "获取用户信息失败，请您再次操作",
            showCancel: !1,
            success: function() {
              wx.reLaunch({
                url: "../../../index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 30:
          return e.prev = 30, wx.showLoading({
            title: "请稍等...",
            mask: !0
          }), e.next = 34, n.wx_login();
        case 34:
          if (i = e.sent, wx.hideLoading(), "000000000000" != i.data[0].resp_code) {
            e.next = 41;
            break
          }
          r.globalData.openid = i.data[1].openid, r.globalData.session_key = i.data[1].session_key, e.next = 43;
          break;
        case 41:
          return wx.showModal({
            title: "提示",
            content: "获取用户信息失败，请您再次操作 1001 " + i.data[0].resp_msg + i.data[0].resp_code,
            showCancel: !1,
            success: function() {
              wx.reLaunch({
                url: "../../../index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 43:
          e.next = 50;
          break;
        case 45:
          return e.prev = 45, e.t1 = e.catch(30), console.log(e.t1), wx.showModal({
            title: "提示",
            content: "获取用户信息失败，请您再次操作1002" + e.t1,
            showCancel: !1,
            success: function() {
              wx.reLaunch({
                url: "../../../index_01/pages/my/my"
              })
            }
          }), e.abrupt("return");
        case 50:
          if (s = (t = this).direct_id_card(t.data.ZJHM), console.log("dire", s), 0 == s && console.log("certificate_no", t.data.ZJHM), "idcard" != t.data.certificate_type) {
            e.next = 58;
            break
          }
          if (0 != s || 18 != t.data.ZJHM.length && 15 != t.data.ZJHM.length) {
            e.next = 58;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请检查证件号码是否输入正确",
            showCancel: !1
          }), e.abrupt("return");
        case 58:
          if (null != t.data.XM && null != t.data.XM && "" != t.data.XM) {
            e.next = 61;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请输入姓名",
            showCancel: !1
          }), e.abrupt("return");
        case 61:
          if (null != t.data.ZJHM && null != t.data.ZJHM && "" != t.data.ZJHM) {
            e.next = 64;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请输入身份证号",
            showCancel: !1
          }), e.abrupt("return");
        case 64:
          if (null != t.data.relationship && null != t.data.relationship && "" != t.data.relationship) {
            e.next = 67;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请输入家属关系",
            showCancel: !1
          }), e.abrupt("return");
        case 67:
          if ("居民身份证" != t.data.array) {
            e.next = 72;
            break
          }
          if (0 != (i = l(t.data.ZJHM))) {
            e.next = 72;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "身份证格式不正确,请重新输入",
            showCancel: !1
          }), e.abrupt("return");
        case 72:
          if (c = t.get_age(t.data.ZJHM), d = wx.getStorageSync("add_relative_attribute"), "居民身份证" != t.data.array || !(-1 == c || c > 16 && c < 60) || "4" == d) {
            e.next = 77;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "您的住户若是16岁及以下60岁及以上才需要代录入,否则请家属自行扫房屋二维码入住套间",
            showCancel: !1
          }), e.abrupt("return");
        case 77:
          if (null != t.data.mobile_phone && null != t.data.mobile_phone && "" != t.data.mobile_phone) {
            e.next = 80;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请输入手机号",
            showCancel: !1
          }), e.abrupt("return");
        case 80:
          if (u = t.data.mobile_phone, /^1[3456789]\d{9}$/.test(u)) {
            e.next = 84;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "手机格式有有误,请检查",
            showCancel: !1
          }), e.abrupt("return");
        case 84:
          if ("护照passport" != t.data.array || null != t.data.country_index && null != t.data.country_index && 0 != t.data.country_index.length) {
            e.next = 87;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请选择国籍",
            showCancel: !1
          }), e.abrupt("return");
        case 87:
          if ("护照passport" != t.data.array || null != t.data.input_age && null != t.data.input_age && "" != t.data.input_age) {
            e.next = 90;
            break
          }
          return wx.showModal({
            title: "输入提示",
            content: "请输入年龄",
            showCancel: !1
          }), e.abrupt("return");
        case 90:
          if (_ = Number(t.data.input_age), console.log(_), d = wx.getStorageSync("add_relative_attribute"), "护照passport" != t.data.array || !(0 == _ || _ > 16 && _ < 60) || "4" == d) {
            e.next = 96;
            break
          }
          return wx.showModal({
            title: "提示",
            content: "您的住户若是16岁及以下60岁及以上才需要代录入,否则请住户自行扫房屋二维码入住套间。please age under 16 years old or over 60 years of age",
            showCancel: !1
          }), e.abrupt("return");
        case 96:
          console.log("校验走完正确"), r.globalData.XM = t.data.XM, r.globalData.ZJHM = t.data.ZJHM, r.globalData.mobile_phone = t.data.mobile_phone, wx.setStorageSync("add_relative_remark", t.data.remark), wx.setStorageSync("relationship", t.data.relationship), console.log(t.data.relationship), "RELATIVE_HOUSE" != (h = r.globalData.openid).substr(0, 14) && (h = "RELATIVE_HOUSE_" + h), null != (g = wx.getStorageSync("unionId")) && null != g && "" != g || null != (g = wx.getStorageSync("unionid")) && null != g && "" != g || (g = ""), p = wx.getStorageSync("add_relative_rent_house_rec_id"), w = wx.getStorageSync("add_relative_room_code"), b = {
            XM: t.data.XM,
            ZJHM: t.data.ZJHM,
            LXDH: t.data.mobile_phone,
            WXSJ: t.data.mobile_phone,
            GPS: JSON.stringify(r.globalData.location_info),
            USERINFO: JSON.stringify(r.globalData.USERINFO_post),
            SYSTEMINFO: JSON.stringify(r.globalData.SYSTEMINFO),
            openId: h,
            upload_file_id_ocr_01: r.globalData.upload_file_id_ocr_01,
            remark: t.data.remark,
            unionId: g,
            input_age: t.data.input_age,
            country: t.data.searchCountry[t.data.country_index],
            document_type: t.data.array,
            rent_house_rec_id: p,
            room_code: w
          }, f = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_id_card_info_add_relative", console.log(f, b), wx.request({
            url: f,
            method: "POST",
            dataType: "json",
            data: b,
            success: function(e) {
              if (console.log("upload_id_card_info_add_relative", e), wx.hideLoading(), "000000000000" == e.data[0].resp_code) {
                if (console.log("提交成功", "api_01/add_relative_002"), "" != e.data[0].upload_file_id) return void t.add_relative_by_old();
                wx.showModal({
                  title: "住户姓名name【" + r.globalData.XM + "】?",
                  content: "您的住户姓名name:" + r.globalData.XM + " 身份证ID.:" + r.globalData.ZJHM + " ? 您将打开后置摄像头对住户进行核验",
                  showCancel: !0,
                  cancelText: "返回CL",
                  confirmText: "提交cfm",
                  success: function(e) {
                    if (e.confirm) return console.log("showModal 内部核验:", e), void wx.navigateTo({
                      url: "../add_relative_003/form"
                    })
                  }
                })
              } else "000051202" == e.data[0].resp_code ? (console.log("upload_id_card_info_add_relative err:", e), wx.showModal({
                title: "住户已录入",
                content: "",
                showCancel: !1,
                success: function(e) {
                  var a = '../../../../page/third_part/pages/rent_house/form?access_token=""&jump_to=rent_house_add_relative_jump_to@@@rent_house_rec_id@@@' + p + "@@@room_code@@@" + w;
                  console.log("upload_id_card_info_add_relative jump url", a), wx.redirectTo({
                    url: a
                  })
                }
              })) : (console.log("upload_id_card_info_add_relative err:", e), wx.showModal({
                title: "异常",
                content: e.data[0].resp_code + e.data[0].resp_msg,
                showCancel: !1
              }))
            },
            fail: function(e) {
              wx.hideLoading(), console.log("提交失败，", e), wx.showModal({
                title: "异常",
                content: "" + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 113:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [5, 21],
      [30, 45]
    ])
  }))), function() {
    return o.apply(this, arguments)
  }),
  error: function(e) {
    console.log(e.detail)
  },
  onShow: function() {
    console.log("onShow"), console.log(r.globalData.document_type), console.log(r.globalData.upload_file_id_ocr_01);
    var e = this,
      a = [];
    wx.request({
      url: "https://xcx.pinganbaiyun.cn/health_passport/api_001_health_passport/get_nationality",
      method: "POST",
      dataType: "json",
      data: {
        key_word001: "foo"
      },
      success: function(t) {
        for (var o = 1; o < t.data.length; o++) a.push(t.data[o].three_letter + t.data[o].cn_name);
        e.setData({
          country_array: a,
          searchCountry: a
        })
      }
    }), r.globalData.ocr_name && (console.log("onshow XM:", r.globalData.ocr_name, this.data.XM, this.data.XM.length), 0 != this.data.XM.length && "" != this.data.XM || (this.setData({
      XM: r.globalData.ocr_name
    }), console.log("onshow set data:", this.data.XM))), r.globalData.ocr_id && (0 != this.data.ZJHM.length && "" != this.data.ZJHM || this.setData({
      ZJHM: r.globalData.ocr_id
    })), r.globalData.pass_port_name && (0 != this.data.XM.length && "" != this.data.XM || (this.setData({
      XM: r.globalData.pass_port_name
    }), console.log("护照姓名onshow set data:", this.data.XM))), r.globalData.document_type && this.setData({
      array: r.globalData.document_type
    }), this.setData({
      hidden_get_mobile_button: !1
    })
  },
  onUnload: function() {
    console.log("onUnload")
  },
  bindinput_ZJHM: function(e) {
    this.setData({
      ZJHM: e.detail.value
    }), r.globalData.ocr_id = e.detail.value
  },
  bindblur_ZJHM: function(e) {
    var a = e.detail.value;
    "居民身份证" == this.data.array && (0 == l(a) && wx.showModal({
      title: "提示",
      content: "身份证格式不正确,请重新输入",
      showCancel: !1
    }));
    this.setData({
      ZJHM: e.detail.value
    }), r.globalData.ocr_id = e.detail.value
  },
  bindinput_XM: function(e) {
    var a = e.detail.value;
    "护照passport" == this.data.array && (a = this.convertToUpperCase(a)), this.setData({
      XM: a
    }), r.globalData.ocr_name = a, r.globalData.XM = a
  },
  convertToUpperCase: function(e) {
    return e.replace(/[a-z]/g, (function(e) {
      return String.fromCharCode(e.charCodeAt(0) - 32)
    }))
  },
  bindblur_XM: function(e) {
    var a = e.detail.value;
    null != this.data.XM && null != this.data.XM && "" != this.data.XM ? ("护照passport" == this.data.array && (a = this.convertToUpperCase(a)), this.setData({
      XM: a
    }), r.globalData.ocr_name = a, r.globalData.XM = a) : wx.showModal({
      title: "输入提示",
      content: "请输入姓名",
      showCancel: !1
    })
  },
  bindinput_mobile_phone: function(e) {
    this.setData({
      mobile_phone: e.detail.value
    })
  },
  bindblur_mobile_phone: function(e) {
    e.detail.value;
    if (null != this.data.mobile_phone && null != this.data.mobile_phone && "" != this.data.mobile_phone) {
      var a = this.data.mobile_phone;
      /^1[3456789]\d{9}$/.test(a) ? this.setData({
        mobile_phone: e.detail.value
      }) : wx.showModal({
        title: "输入提示",
        content: "手机格式有有误,请检查",
        showCancel: !1
      })
    } else wx.showModal({
      title: "输入提示",
      content: "请输入手机号",
      showCancel: !1
    })
  },
  bindinput_age: function(e) {
    this.setData({
      input_age: e.detail.value
    }), console.log(this.data.input_age)
  },
  bindblur_age: function() {
    "" != this.data.inpuy_age || wx.showModal({
      title: "输入提示",
      content: "请输入年龄",
      showCancel: !1
    })
  },
  gosearch: function() {
    this.setData({
      show_choose_country: !0
    })
  },
  onClose: function() {
    this.setData({
      show_choose_country: !1
    })
  },
  onCancel: function() {
    this.setData({
      show_choose_country: !1
    })
  },
  onConfirm: function(e) {
    this.setData({
      country_index: e.detail.index,
      show_choose_country: !1
    }), console.log(this.data.country_index)
  },
  SearchCountry: function(e) {
    for (var a = [], t = 0; t < this.data.country_array.length; t++) - 1 != String(this.data.country_array[t]).indexOf(e.detail) && a.push(this.data.country_array[t]);
    this.setData({
      searchCountry: a
    })
  },
  bindinput_remark: function(e) {
    this.setData({
      remark: e.detail.value
    })
  },
  bindblur_remark: function(e) {
    this.setData({
      remark: e.detail.value
    })
  },
  get_mobile_phone: function(e) {
    var a = this;
    console.log(e.detail.errMsg), console.log(e.detail.iv), console.log(e.detail.encryptedData), null != e.detail.iv && null != e.detail.iv && wx.login({
      success: function(t) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: t.code,
            get_token: "get_token"
          },
          success: function(t) {
            if (console.log("拉取login", t), "000000000000" == t.data[0].resp_code) {
              r.globalData.openid = t.data[1].openid;
              var o = {
                openId: r.globalData.openid,
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/dencryp",
                method: "POST",
                dataType: "json",
                data: o,
                success: function(e) {
                  if (console.log("获取解码信息 mobile_phone", e), "000000000000" == e.data[0].resp_code) {
                    var t = e.data[1].purePhoneNumber;
                    a.setData({
                      mobile_phone: t
                    }), r.globalData.purePhoneNumber = t
                  } else wx.showModal({
                    title: "提示",
                    content: "请再次自动获取手机号",
                    showCancel: !1
                  })
                },
                fail: function(e) {
                  console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                    title: "后台服务器异常",
                    content: "获取用户手机号失败-01259,程序退出," + e.errMsg,
                    showCancel: !1
                  })
                }
              })
            } else wx.showModal({
              title: "后台服务器异常",
              content: "拉取用户手机号失败-01630,程序退出," + t.data[0].resp_code + t.data[0].resp_msg,
              showCancel: !1
            })
          },
          fail: function(e) {
            console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
              title: "后台服务器异常",
              content: "拉取用户手机号失败-013261,程序退出," + e.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(e) {
        console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
          title: "后台服务器异常",
          content: "拉取用户手机号失败-0112162,程序退出," + e,
          showCancel: !1
        })
      }
    })
  },
  hideModal_camera: function() {},
  get_role_result: function(e) {
    console.log("get_role_result", e), 1 == e.detail.authSetting["scope.userLocation"] && 1 == e.detail.authSetting["scope.camera"] ? (console.log("用户选择了是"), this.setData({
      showModal_location: !1
    }), this.go_camera_device()) : (this.setData({
      showModal_location: !0
    }), console.log("用户选择了否"))
  },
  get_age: function(e) {
    var a = (e + "").length;
    if (0 == a) return -1;
    if (15 != a && 18 != a) return -1;
    var t = "";
    18 == a && (t = e.substr(6, 4) + "/" + e.substr(10, 2) + "/" + e.substr(12, 2)), 15 == a && (t = "19" + e.substr(6, 2) + "/" + e.substr(8, 2) + "/" + e.substr(10, 2));
    var o = new Date(t),
      n = new Date,
      r = n.getFullYear() - o.getFullYear();
    return (n.getMonth() < o.getMonth() || n.getMonth() == o.getMonth() && n.getDate() < o.getDate()) && r--, r
  },
  add_relative_by_old: function() {
    console.log("add_relative_by_old");
    var e = r.globalData.openid;
    "RELATIVE_HOUSE" != e.substr(0, 14) && (e = "RELATIVE_HOUSE_" + e);
    var o = wx.getStorageSync("add_relative_rent_house_rec_id"),
      n = wx.getStorageSync("add_relative_room_code"),
      l = wx.getStorageSync("add_relative_rent_rec_id"),
      i = wx.getStorageSync("add_relative_remark"),
      s = wx.getStorageSync("relationship"),
      c = r.globalData.XM,
      d = r.globalData.ZJHM,
      u = r.globalData.mobile_phone,
      _ = wx.getStorageSync("wj_buzi_type"),
      h = wx.getStorageSync("wj_buzi_code"),
      g = (wx.getStorageSync("family_from_src"), {
        openId: e,
        name: c,
        id_card: d,
        mobile_phone: u,
        remark: i,
        rent_house_rec_id: o,
        room_code: n,
        rent_rec_id: l,
        relationship: s,
        wj_buzi_type: _,
        wj_buzi_code: h,
        relative_buzi_type: 0
      });
    console.log("1726494221709 post_data", g);
    var p = "https://xcx.pinganbaiyun.cn/mini_program/api_01/add_relative_by_old";
    console.log("1726494221710 url", p), wx.showLoading({
      title: "请稍等...",
      mask: !0
    });
    wx.request({
      url: p,
      method: "POST",
      dataType: "json",
      data: g,
      success: function(e) {
        wx.hideLoading(), "000000000000" == e.data[0].resp_code ? (wx.removeStorageSync("add_relative_rent_house_rec_id"), wx.removeStorageSync("add_relative_room_code"), wx.removeStorageSync("add_relative_rent_rec_id"), wx.removeStorageSync("add_relative_remark"), wx.removeStorageSync("relationship"), setTimeout(t(a().mark((function e() {
          var t;
          return a().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return wx.showModal({
                  title: "温馨提示",
                  content: "添加住户成功",
                  showCancel: !1
                }), t = '../../../../page/third_part/pages/rent_house/form?access_token=""&jump_to=rent_house_add_relative_jump_to@@@rent_house_rec_id@@@' + o + "@@@room_code@@@" + n, console.log("add_relative_face_check jump url", t), wx.redirectTo({
                  url: t
                }), e.abrupt("return");
              case 6:
                return e.abrupt("return");
              case 7:
              case "end":
                return e.stop()
            }
          }), e)
        }))), 500)) : wx.showModal({
          title: "异常",
          content: "" + e.data[0].resp_msg,
          showCancel: !1
        })
      },
      fail: function(e) {
        console.log("1726494764635 add_relative_by_old fail", e), wx.hideLoading(), wx.showModal({
          title: "提交失败",
          content: "提交失败(1726494410089)," + e.errMsg,
          showCancel: !1
        })
      }
    })
  },
  direct_id_card: function(e) {
    var a = e.toString().trim();
    if (18 !== a.length) return !1;
    if (!/^[1-9]\d{5}(18|19|[2-9]\d)\d{9}[0-9Xx]$/.test(a)) return console.log(2), !1;
    var t, o, n, r = a.slice(6, 14);
    if (o = "".concat((t = r).slice(0, 4), "-").concat(t.slice(4, 6), "-").concat(t.slice(6)), n = new Date(o).getTime(), Number.isNaN(n) || n > (new Date).getTime()) return !1;
    return !! function(e) {
      var a = e.slice(0, 17).split(""),
        t = e.slice(17).toLocaleLowerCase(),
        o = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      return {
        0: 1,
        1: 0,
        2: "x",
        3: 9,
        4: 8,
        5: 7,
        6: 6,
        7: 5,
        8: 4,
        9: 3,
        10: 2
      } [a.reduce((function(e, a, t) {
        return e + a * o[t]
      }), 0) % 11] == t
    }(a) && void 0
  }
});