var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../util/rsa_encry.js"),
  o = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: "",
    canvas_height: 0,
    canvas_width: 0,
    camera_height: 800,
    camera_height_inner_01: 1e3,
    camera_height_inner_02: 740,
    camera_height_inner_03: 770,
    camera_height_inner_04: 770,
    button_top: 0,
    button_left: 0,
    show_button: "",
    num1: 0
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
  changeflash: function() {
    num++;
    num;
    num % 2 == 0 ? this.setData({
      flash: "on"
    }) : this.setData({
      flash: "off"
    }), console.log(num)
  },
  changedevice: function() {
    this.data.num1 = this.data.num1 + 1, this.data.num1 % 2 == 0 ? this.setData({
      device_position: "font"
    }) : this.setData({
      device_position: "back"
    })
  },
  onShow: function() {
    null == o.globalData.SYSTEMINFO && (o.globalData.SYSTEMINFO = wx.getSystemInfoSync());
    var e = o.globalData.SYSTEMINFO.pixelRatio;
    console.log("pixelRatio:", e);
    var a = o.globalData.SYSTEMINFO.windowHeight;
    console.log("screen_height:", a), this.setData({
      camera_height: a
    });
    var t = o.globalData.SYSTEMINFO.model;
    console.log("model:", t), -1 != t.indexOf("iPhone 4") && this.setData({
      camera_height_inner_01: 374
    }), -1 != t.indexOf("iPhone 5") && this.setData({
      camera_height_inner_01: 374
    }), -1 != t.indexOf("iPhone 6") && this.setData({
      camera_height_inner_01: 448
    }), -1 != t.indexOf("iPhone 6 Plus") && this.setData({
      camera_height_inner_01: 502
    }), -1 != t.indexOf("iPhone 7") && this.setData({
      camera_height_inner_01: 448
    }), -1 != t.indexOf("iPhone 7 Plus") && this.setData({
      camera_height_inner_01: 502
    }), -1 != t.indexOf("iPhone 8") && this.setData({
      camera_height_inner_01: 569
    }), -1 != t.indexOf("iPhone X") && this.setData({
      camera_height_inner_01: 569
    }), this.setData({
      camera_height_inner_02: 490
    }), this.setData({
      camera_height_inner_04: a - 80 - 410
    }), this.setData({
      camera_height_inner_03: a - 100
    });
    e = o.globalData.SYSTEMINFO.pixelRatio, a = o.globalData.SYSTEMINFO.windowHeight / 4;
    var n = o.globalData.SYSTEMINFO.screenWidth / 4;
    console.log("canvas screen_height:", a), this.setData({
      canvas_height: a,
      canvas_width: n
    }), this.setData({
      button_left: o.globalData.SYSTEMINFO.windowWidth / 2 - 35
    }), this.setData({
      button_top: o.globalData.SYSTEMINFO.windowHeight - 170
    }), o.globalData.XM = null, o.globalData.ZJHM = null, o.globalData.mobile_phone = null
  },
  takePhoto: function() {
    var n, r = this,
      _ = "low",
      c = o.globalData.SYSTEMINFO.model; - 1 == c.indexOf("iPhone 6") && -1 == c.indexOf("iPhone 5") && -1 == c.indexOf("iPhone 4") && -1 == c.indexOf("iPhone 3") || (_ = "low"), wx.createCameraContext().takePhoto({
      quality: _,
      success: (n = a(e().mark((function n(_) {
        var c, l, i, s, d, g, p, m, u, h, y, f, b, S, x, w, D, k, v, j, O, P, M, N, T, E, F, Y, I, C, z, J, H, L, R, q, B, W, X, A, G, Z, K, Q, U, V, $;
        return e().wrap((function(n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              wx.showLoading({
                title: "识别中..."
              }), (c = r).setData({
                show_button: "none"
              }), l = wx.getStorageSync("issue_date"), i = wx.getStorageSync("expiry_date"), s = wx.getStorageSync("latitude"), d = wx.getStorageSync("longitude"), g = wx.getStorageSync("login_name"), p = wx.getStorageSync("police_station"), m = wx.getStorageSync("name"), u = wx.getStorageSync("id_card"), h = wx.getStorageSync("login_id_card"), y = wx.getStorageSync("mobile_phone"), f = wx.getStorageSync("manual_recording_reason"), b = wx.getStorageSync("manual_recording_other_reason"), S = wx.getStorageSync("file_id_ocr"), x = wx.getStorageSync("company_rec_id"), w = wx.getStorageSync("live_address"), D = wx.getStorageSync("dzbm"), k = wx.getStorageSync("company_of_community"), v = wx.getStorageSync("country"), j = wx.getStorageSync("gender"), O = wx.getStorageSync("remark"), P = wx.getStorageSync("whether_verify"), M = wx.getStorageSync("company_add_foreign_jump_to"), N = wx.getStorageSync("cloud_shield_token"), T = wx.getStorageSync("company_name"), E = wx.getStorageSync("post_data_conflict"), F = "", Y = "", I = "", C = "", z = "", J = "", H = "", L = "", R = "", q = "", B = "", W = "", X = "";
              try {
                I = wx.getStorageSync("department_code"), C = wx.getStorageSync("expired_month_foreign"), z = wx.getStorageSync("date_unit_foreign"), F = wx.getStorageSync("abroad_relevance_people_code"), Y = wx.getStorageSync("abroad_relevance_goods_code"), J = wx.getStorageSync("contacts_id_card_type"), H = wx.getStorageSync("contacts_id_card"), L = wx.getStorageSync("relationship"), R = wx.getStorageSync("first_name"), q = wx.getStorageSync("last_name"), B = wx.getStorageSync("birthday"), W = wx.getStorageSync("contacts_name"), X = wx.getStorageSync("contacts_phone")
              } catch (e) {
                I = "", C = "", z = ""
              }
              return console.log("---company_add_foreign_jump_to---", M), A = "", "rent_house_add_foreign_jump_to" == M ? (console.log("特殊处理 url小程序出租屋境外人员录入"), A = "https://xcx.pinganbaiyun.cn/strike_black/api_03/xcx_rent_house_add_foreign_people") : (console.log("正常的各项录入url"), A = "https://xcx.pinganbaiyun.cn/strike_black/api_03/add_people_by_xcx"), console.log(A, "----- url -----", I, x, P, N), G = wx.getStorageSync("permanent_detail_address"), Z = wx.getStorageSync("permanent_address_list"), K = _.tempImagePath, Q = {
                latitude: s,
                longitude: d,
                login_name: g,
                police_station: p,
                login_id_card: h,
                name: m,
                id_card: u,
                mobile_phone: y,
                manual_recording_reason: f,
                manual_recording_other_reason: b,
                file_id_ocr: S,
                company_rec_id: x,
                live_address: w,
                dzbm: D,
                company_of_community: k,
                country: v,
                gender: j,
                remark: O,
                department_code: I,
                jump_source: M,
                expired_month_foreign: C,
                date_unit_foreign: z,
                whether_verify: "YES",
                issue_date: l,
                expiry_date: i,
                permanent_detail_address: G,
                permanent_address_list: Z,
                company_name: T,
                openId: o.globalData.openid,
                abroad_relevance_people_code: F,
                abroad_relevance_goods_code: Y,
                contacts_id_card_type: J,
                contacts_id_card: H,
                relationship: L,
                first_name: R,
                last_name: q,
                birthday: B,
                contacts_name: W,
                contacts_phone: X,
                post_data_conflict: E
              }, U = JSON.stringify(Q), n.next = 53, t.encrypt_rsa_fun(U);
            case 53:
              V = n.sent, $ = {
                key: V
              }, wx.uploadFile({
                url: A,
                filePath: K,
                name: "upload",
                timeout: 6e4,
                header: {
                  "Content-Type": "multipart/form-data",
                  cloud_shield_token: N
                },
                formData: $,
                success: function(n) {
                  var r = JSON.parse(n.data);
                  if (wx.hideLoading(), c.setData({
                      show_button: ""
                    }), "000000000000" == r[0].resp_code) {
                    o.globalData.access_token = "", o.globalData.latitude = "", o.globalData.longitude = "", o.globalData.login_name = "", o.globalData.police_station = "", o.globalData.name = "", o.globalData.id_card = "", o.globalData.login_id_card = "", o.globalData.mobile_phone = "", o.globalData.manual_recording_reason = "", o.globalData.manual_recording_other_reason = "", o.globalData.file_id_ocr = "", o.globalData.company_rec_id = "", o.globalData.live_address = "", o.globalData.dzbm = "", o.globalData.company_of_community = "", o.globalData.country = "", o.globalData.gender = "", o.globalData.remark = "", o.globalData.department_code = "", o.globalData.company_add_foreign_jump_to = "", o.globalData.expired_month_foreign = "", o.globalData.date_unit_foreign = "", o.globalData.issue_date = "", o.globalData.expiry_date = "", o.globalData.whether_verify = "YES", o.globalData.permanent_detail_address = "";
                    var _ = r[0].access_token,
                      i = "../../../third_part/pages/strike_black/form?access_token=" + _ + "&jump_to=foreign";
                    console.log("company_add_foreign_jump_to", x, M, "company_add_foreign_jump_to"), "20" == x ? (console.log("全民扫黑身份证录入"), i = "../../../third_part/pages/strike_black/form?access_token=" + _ + "&jump_to=road_check") : "21" == x ? (console.log("全民扫黑境外人员"), i = "../../../third_part/pages/strike_black/form?access_token=" + _ + "&jump_to=foreign") : "company_add_foreign_jump_to" == M ? (console.log("小程序企业录入境外人员"), i = "../../../third_part/pages/company/form?access_token=" + _ + "&jump_to=company_add_foreign_jump_to&company_rec_id=" + x + "&department_code=" + I) : "rent_house_add_foreign_jump_to" == M && (console.log("小程序出租屋录入境外人员"), wx.showModal({
                      title: "温馨提示",
                      content: "录入境外人员成功",
                      showCancel: !1
                    }), i = "../../../third_part/pages/rent_house/form?access_token=" + _ + "&jump_to=rent_house_add_foreign_jump_to&rent_house_rec_id=" + x + "room_code=" + I), wx.redirectTo({
                      url: i
                    })
                  } else if ("-8966512114" == r[0].resp_code || "-000000032" == r[0].resp_code || "-8966512115" == r[0].resp_code || "-89001" == r[0].resp_code) {
                    var P = "",
                      J = null;
                    "-8966512114" == r[0].resp_code ? (J = r[0].score, P = "上传的图片和身份证图片相似度低,您是否继续录入?") : "-000000032" == r[0].resp_code || "-89001" == r[0].resp_code ? P = "姓名身份证号经过核验可能不规范,您是否继续录入?" : "-8966512115" == r[0].resp_code && (P = "经过核验,系统内身份证图片相似度低,您是否继续录入?"), wx.showModal({
                      title: "提示",
                      content: P,
                      success: function(n) {
                        return a(e().mark((function a() {
                          var r, _, i, P, H, L;
                          return e().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!n.confirm) {
                                  e.next = 15;
                                  break
                                }
                                return r = {
                                  latitude: s,
                                  longitude: d,
                                  login_name: g,
                                  police_station: p,
                                  login_id_card: h,
                                  name: m,
                                  id_card: u,
                                  mobile_phone: y,
                                  manual_recording_reason: f,
                                  manual_recording_other_reason: b,
                                  file_id_ocr: S,
                                  company_rec_id: x,
                                  live_address: w,
                                  dzbm: D,
                                  company_of_community: k,
                                  country: v,
                                  gender: j,
                                  remark: O,
                                  department_code: I,
                                  jump_source: M,
                                  expired_month_foreign: C,
                                  date_unit_foreign: z,
                                  issue_date: l,
                                  permanent_detail_address: H,
                                  permanent_address_list: L,
                                  whether_verify: "NO",
                                  if_check_id_card: "NO",
                                  company_name: T,
                                  openId: o.globalData.openid,
                                  score: J,
                                  abroad_relevance_people_code: F,
                                  abroad_relevance_goods_code: Y,
                                  post_data_conflict: E
                                }, _ = JSON.stringify(r), e.next = 5, t.encrypt_rsa_fun(_);
                              case 5:
                                i = e.sent, P = {
                                  key: i
                                }, wx.showLoading({
                                  title: "录入中..."
                                }), console.log("用户点击确定", "YES"), H = wx.getStorageSync("permanent_detail_address"), L = wx.getStorageSync("permanent_address_list"), wx.uploadFile({
                                  url: "https://xcx.pinganbaiyun.cn/strike_black/api_03/add_people_by_xcx",
                                  filePath: K,
                                  name: "upload",
                                  timeout: 6e4,
                                  header: {
                                    "Content-Type": "multipart/form-data",
                                    cloud_shield_token: N
                                  },
                                  formData: P,
                                  success: function(e) {
                                    var a = JSON.parse(e.data);
                                    if (console.log(a), wx.hideLoading(), c.setData({
                                        show_button: ""
                                      }), "000000000000" == a[0].resp_code) {
                                      o.globalData.access_token = "", o.globalData.latitude = "", o.globalData.longitude = "", o.globalData.login_name = "", o.globalData.police_station = "", o.globalData.name = "", o.globalData.id_card = "", o.globalData.login_id_card = "", o.globalData.mobile_phone = "", o.globalData.manual_recording_reason = "", o.globalData.manual_recording_other_reason = "", o.globalData.file_id_ocr = "", o.globalData.company_rec_id = "", o.globalData.live_address = "", o.globalData.dzbm = "", o.globalData.company_of_community = "", o.globalData.country = "", o.globalData.gender = "", o.globalData.remark = "", o.globalData.department_code = "", o.globalData.company_add_foreign_jump_to = "", o.globalData.expired_month_foreign = "", o.globalData.date_unit_foreign = "", o.globalData.issue_date = "", o.globalData.expiry_date = "", o.globalData.whether_verify = "YES", o.globalData.permanent_detail_address = "";
                                      var t = a[0].access_token,
                                        n = "../../../third_part/pages/strike_black/form?access_token=" + t + "&jump_to=foreign";
                                      console.log("company_add_foreign_jump_to", x, M, ""), "20" == x ? (console.log("全民扫黑身份证录入"), n = "../../../third_part/pages/strike_black/form?access_token=" + t + "&jump_to=road_check") : "21" == x ? (console.log("全民扫黑境外人员"), n = "../../../third_part/pages/strike_black/form?access_token=" + t + "&jump_to=foreign") : "company_add_foreign_jump_to" == M ? (console.log("小程序企业录入境外人员"), n = "../../../third_part/pages/company/form?access_token=" + t + "&jump_to=company_add_foreign_jump_to&company_rec_id=" + x + "&department_code=" + I) : "rent_house_add_foreign_jump_to" == M && (console.log("小程序出租屋录入境外人员"), wx.showModal({
                                        title: "温馨提示",
                                        content: "录入境外人员成功",
                                        showCancel: !1
                                      }), n = "../../../third_part/pages/rent_house/form?access_token=" + t + "&jump_to=rent_house_add_foreign_jump_to&rent_house_rec_id=" + x + "room_code=" + I), wx.redirectTo({
                                        url: n
                                      })
                                    } else wx.showModal({
                                      title: "提示",
                                      content: "" + a[0].resp_msg,
                                      showCancel: !1
                                    })
                                  }
                                }), e.next = 16;
                                break;
                              case 15:
                                n.cancel && console.log("用户点击取消");
                              case 16:
                              case "end":
                                return e.stop()
                            }
                          }), a)
                        })))()
                      }
                    })
                  } else wx.showModal({
                    title: "提示",
                    content: "" + r[0].resp_msg,
                    showCancel: !1
                  })
                }
              });
            case 56:
            case "end":
              return n.stop()
          }
        }), n)
      }))), function(e) {
        return n.apply(this, arguments)
      })
    })
  },
  error: function(e) {
    console.log(e.detail)
  },
  cancel: function() {
    wx.navigateBack()
  },
  chooseimage: function() {
    var n, r = this;
    r.setData({
      show_button: "none"
    }), wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      success: (n = a(e().mark((function n(_) {
        var c, l, i, s, d, g, p, m, u, h, y, f, b, S, x, w, D, k, v, j, O, P, M, N, T, E, F, Y, I, C, z, J, H, L, R, q, B, W, X, A, G, Z, K, Q, U;
        return e().wrap((function(n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              if (console.log(_), !(_.tempFilePaths.length > 0)) {
                n.next = 59;
                break
              }
              wx.showLoading({
                title: "识别中..."
              }), r.setData({
                show_button: "none"
              }), c = wx.getStorageSync("issue_date"), l = wx.getStorageSync("expiry_date"), i = wx.getStorageSync("latitude"), s = wx.getStorageSync("longitude"), d = wx.getStorageSync("login_name"), g = wx.getStorageSync("police_station"), p = wx.getStorageSync("name"), m = wx.getStorageSync("id_card"), u = wx.getStorageSync("login_id_card"), h = wx.getStorageSync("mobile_phone"), y = wx.getStorageSync("manual_recording_reason"), f = wx.getStorageSync("manual_recording_other_reason"), b = wx.getStorageSync("file_id_ocr"), S = wx.getStorageSync("company_rec_id"), x = wx.getStorageSync("live_address"), w = wx.getStorageSync("dzbm"), D = wx.getStorageSync("company_of_community"), k = wx.getStorageSync("country"), v = wx.getStorageSync("gender"), j = wx.getStorageSync("remark"), O = wx.getStorageSync("whether_verify"), P = wx.getStorageSync("company_add_foreign_jump_to"), M = wx.getStorageSync("cloud_shield_token"), N = wx.getStorageSync("post_data_conflict"), T = "", E = "", F = "", Y = "", I = "", C = "", z = "", J = "", H = "", L = "", R = "", q = "", B = "";
              try {
                F = wx.getStorageSync("department_code"), Y = wx.getStorageSync("expired_month_foreign"), I = wx.getStorageSync("date_unit_foreign"), T = wx.getStorageSync("abroad_relevance_people_code"), E = wx.getStorageSync("abroad_relevance_goods_code"), C = wx.getStorageSync("contacts_id_card_type"), z = wx.getStorageSync("contacts_id_card"), J = wx.getStorageSync("relationship"), H = wx.getStorageSync("first_name"), L = wx.getStorageSync("last_name"), R = wx.getStorageSync("birthday"), q = wx.getStorageSync("contacts_name"), B = wx.getStorageSync("contacts_phone")
              } catch (e) {
                F = "", Y = "", I = ""
              }
              return console.log("---company_add_foreign_jump_to---", P), W = {
                latitude: i,
                longitude: s,
                login_name: d,
                police_station: g,
                login_id_card: u,
                name: p,
                id_card: m,
                mobile_phone: h,
                manual_recording_reason: y,
                manual_recording_other_reason: f,
                file_id_ocr: b,
                company_rec_id: S,
                live_address: x,
                dzbm: w,
                company_of_community: D,
                country: k,
                gender: v,
                remark: j,
                department_code: F,
                jump_source: P,
                expired_month_foreign: Y,
                date_unit_foreign: I,
                whether_verify: "YES",
                issue_date: c,
                expiry_date: l,
                permanent_detail_address: K,
                permanent_address_list: Q,
                openId: o.globalData.openid,
                abroad_relevance_people_code: T,
                abroad_relevance_goods_code: E,
                contacts_id_card_type: C,
                contacts_id_card: z,
                relationship: J,
                first_name: H,
                last_name: L,
                birthday: R,
                contacts_name: q,
                contacts_phone: B,
                post_data_conflict: N
              }, X = JSON.stringify(W), n.next = 48, t.encrypt_rsa_fun(X);
            case 48:
              A = n.sent, G = {
                key: A
              }, Z = "", "rent_house_add_foreign_jump_to" == P ? (console.log("特殊处理 url小程序出租屋境外人员录入"), Z = "https://xcx.pinganbaiyun.cn/strike_black/api_03/xcx_rent_house_add_foreign_people") : (console.log("正常的各项录入url"), Z = "https://xcx.pinganbaiyun.cn/strike_black/api_03/add_people_by_xcx"), console.log(Z, "----- url -----", F, S, O), K = wx.getStorageSync("permanent_detail_address"), Q = wx.getStorageSync("permanent_address_list"), U = _.tempFilePaths[0], console.log("res.tempFilePaths", _.tempFilePaths), console.log("filePath", U), wx.uploadFile({
                url: Z,
                filePath: U,
                name: "upload",
                timeout: 6e4,
                header: {
                  "Content-Type": "multipart/form-data",
                  cloud_shield_token: M
                },
                formData: G,
                success: function(n) {
                  var _ = JSON.parse(n.data);
                  if (wx.hideLoading(), r.setData({
                      show_button: ""
                    }), "000000000000" == _[0].resp_code) {
                    o.globalData.access_token = "", o.globalData.latitude = "", o.globalData.longitude = "", o.globalData.login_name = "", o.globalData.police_station = "", o.globalData.name = "", o.globalData.id_card = "", o.globalData.login_id_card = "", o.globalData.mobile_phone = "", o.globalData.manual_recording_reason = "", o.globalData.manual_recording_other_reason = "", o.globalData.file_id_ocr = "", o.globalData.company_rec_id = "", o.globalData.live_address = "", o.globalData.dzbm = "", o.globalData.company_of_community = "", o.globalData.country = "", o.globalData.gender = "", o.globalData.remark = "", o.globalData.department_code = "", o.globalData.company_add_foreign_jump_to = "", o.globalData.expired_month_foreign = "", o.globalData.date_unit_foreign = "", o.globalData.issue_date = "", o.globalData.expiry_date = "", o.globalData.whether_verify = "YES", o.globalData.permanent_detail_address = "";
                    var l = _[0].access_token,
                      O = "../../../third_part/pages/strike_black/form?access_token=" + l + "&jump_to=foreign";
                    console.log("company_add_foreign_jump_to", S, P, "company_add_foreign_jump_to"), "20" == S ? (console.log("全民扫黑身份证录入"), O = "../../../third_part/pages/strike_black/form?access_token=" + l + "&jump_to=road_check") : "21" == S ? (console.log("全民扫黑境外人员"), O = "../../../third_part/pages/strike_black/form?access_token=" + l + "&jump_to=foreign") : "company_add_foreign_jump_to" == P ? (console.log("小程序企业录入境外人员"), O = "../../../third_part/pages/company/form?access_token=" + l + "&jump_to=company_add_foreign_jump_to&company_rec_id=" + S + "&department_code=" + F) : "rent_house_add_foreign_jump_to" == P && (console.log("小程序出租屋录入境外人员"), wx.showModal({
                      title: "温馨提示",
                      content: "录入境外人员成功",
                      showCancel: !1
                    }), O = "../../../third_part/pages/rent_house/form?access_token=" + l + "&jump_to=rent_house_add_foreign_jump_to&rent_house_rec_id=" + S + "room_code=" + F), wx.redirectTo({
                      url: O
                    })
                  } else if ("-8966512114" == _[0].resp_code || "-000000032" == _[0].resp_code || "-8966512115" == _[0].resp_code || "-89001" == _[0].resp_code) {
                    var C = "",
                      z = null;
                    "-8966512114" == _[0].resp_code ? (z = _[0].score, C = "上传的图片和身份证图片相似度低,您是否继续录入?") : "-000000032" == _[0].resp_code || "-89001" == _[0].resp_code ? C = "姓名身份证号经过核验可能不规范,您是否继续录入?" : "-8966512115" == _[0].resp_code && (C = "经过核验,系统内身份证图片相似度低,您是否继续录入?"), wx.showModal({
                      title: "提示",
                      content: C,
                      success: function(n) {
                        return a(e().mark((function a() {
                          var _, l, O, C, J, H;
                          return e().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!n.confirm) {
                                  e.next = 15;
                                  break
                                }
                                return _ = {
                                  latitude: i,
                                  longitude: s,
                                  login_name: d,
                                  police_station: g,
                                  login_id_card: u,
                                  name: p,
                                  id_card: m,
                                  mobile_phone: h,
                                  manual_recording_reason: y,
                                  manual_recording_other_reason: f,
                                  file_id_ocr: b,
                                  company_rec_id: S,
                                  live_address: x,
                                  dzbm: w,
                                  company_of_community: D,
                                  country: k,
                                  gender: v,
                                  remark: j,
                                  department_code: F,
                                  jump_source: P,
                                  expired_month_foreign: Y,
                                  date_unit_foreign: I,
                                  issue_date: c,
                                  permanent_detail_address: J,
                                  permanent_address_list: H,
                                  whether_verify: "NO",
                                  if_check_id_card: "NO",
                                  openId: o.globalData.openid,
                                  score: z,
                                  abroad_relevance_people_code: T,
                                  abroad_relevance_goods_code: E,
                                  post_data_conflict: N
                                }, l = JSON.stringify(_), e.next = 5, t.encrypt_rsa_fun(l);
                              case 5:
                                O = e.sent, C = {
                                  key: O
                                }, wx.showLoading({
                                  title: "录入中..."
                                }), console.log("用户点击确定", "YES"), J = wx.getStorageSync("permanent_detail_address"), H = wx.getStorageSync("permanent_address_list"), wx.uploadFile({
                                  url: "https://xcx.pinganbaiyun.cn/strike_black/api_03/add_people_by_xcx",
                                  filePath: U,
                                  name: "upload",
                                  timeout: 6e4,
                                  header: {
                                    "Content-Type": "multipart/form-data",
                                    cloud_shield_token: M
                                  },
                                  formData: C,
                                  success: function(e) {
                                    var a = JSON.parse(e.data);
                                    if (console.log(a), wx.hideLoading(), r.setData({
                                        show_button: ""
                                      }), "000000000000" == a[0].resp_code) {
                                      o.globalData.access_token = "", o.globalData.latitude = "", o.globalData.longitude = "", o.globalData.login_name = "", o.globalData.police_station = "", o.globalData.name = "", o.globalData.id_card = "", o.globalData.login_id_card = "", o.globalData.mobile_phone = "", o.globalData.manual_recording_reason = "", o.globalData.manual_recording_other_reason = "", o.globalData.file_id_ocr = "", o.globalData.company_rec_id = "", o.globalData.live_address = "", o.globalData.dzbm = "", o.globalData.company_of_community = "", o.globalData.country = "", o.globalData.gender = "", o.globalData.remark = "", o.globalData.department_code = "", o.globalData.company_add_foreign_jump_to = "", o.globalData.expired_month_foreign = "", o.globalData.date_unit_foreign = "", o.globalData.issue_date = "", o.globalData.expiry_date = "", o.globalData.whether_verify = "YES", o.globalData.permanent_detail_address = "";
                                      var t = a[0].access_token,
                                        n = "../../../third_part/pages/strike_black/form?access_token=" + t + "&jump_to=foreign";
                                      console.log("company_add_foreign_jump_to", S, P, ""), "20" == S ? (console.log("全民扫黑身份证录入"), n = "../../../third_part/pages/strike_black/form?access_token=" + t + "&jump_to=road_check") : "21" == S ? (console.log("全民扫黑境外人员"), n = "../../../third_part/pages/strike_black/form?access_token=" + t + "&jump_to=foreign") : "company_add_foreign_jump_to" == P ? (console.log("小程序企业录入境外人员"), n = "../../../third_part/pages/company/form?access_token=" + t + "&jump_to=company_add_foreign_jump_to&company_rec_id=" + S + "&department_code=" + F) : "rent_house_add_foreign_jump_to" == P && (console.log("小程序出租屋录入境外人员"), wx.showModal({
                                        title: "温馨提示",
                                        content: "录入境外人员成功",
                                        showCancel: !1
                                      }), n = "../../../third_part/pages/rent_house/form?access_token=" + t + "&jump_to=rent_house_add_foreign_jump_to&rent_house_rec_id=" + S + "room_code=" + F), wx.redirectTo({
                                        url: n
                                      })
                                    } else wx.showModal({
                                      title: "提示",
                                      content: "" + a[0].resp_msg,
                                      showCancel: !1
                                    })
                                  }
                                }), e.next = 16;
                                break;
                              case 15:
                                n.cancel && console.log("用户点击取消");
                              case 16:
                              case "end":
                                return e.stop()
                            }
                          }), a)
                        })))()
                      }
                    })
                  } else wx.showModal({
                    title: "提示",
                    content: "" + _[0].resp_msg,
                    showCancel: !1
                  })
                }
              });
            case 59:
            case 60:
            case "end":
              return n.stop()
          }
        }), n)
      }))), function(e) {
        return n.apply(this, arguments)
      }),
      error: function(e) {
        console.log(e.detail)
      },
      cancel: function() {
        wx.navigateBack()
      }
    })
  }
});