require("../../../../@babel/runtime/helpers/Arrayincludes");
var a = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  o = getApp(),
  n = require("../../../../util/util.js");
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
    department: [],
    department_code: null,
    departmentArray: [
      ["请选择部门", null]
    ],
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
    departmentIndex: 0,
    index1: 0,
    live_city: null,
    live_area: null,
    live_street: null,
    live_address: null,
    remark: "",
    permanent_region: ["广东省", "广州市", "海珠区"],
    permanent_detail_address: "",
    showModal_permanent_address: !1,
    remark_place_holder: "备注",
    company_tag_arr: [],
    creat_picker: !1,
    show_level: 2,
    prop_value: [{
      name: "广东省",
      disabled: !0
    }, {
      name: "广州市",
      disabled: !1
    }, {
      name: "区/乡",
      disabled: !1
    }, {
      name: "街道",
      disabled: !1
    }],
    show: !1,
    show2: !1,
    live_index: 0,
    live_address_readonly: "false",
    live_address_search: "",
    live_address_list: [],
    no_standAddress: !1,
    data_list: [],
    cur_page: "1",
    total_rec: "",
    total_page: "",
    reload: !1,
    key_word: "",
    page_info: "无记录",
    street_code: ""
  },
  show_picker: function() {
    this.setData({
      creat_picker: !0,
      show: !0
    })
  },
  show_picker2: function() {
    "白云区" === this.data.live_area && (this.setData({
      creat_picker: !0,
      show2: !0
    }), setTimeout((function(a) {
      wx.hideKeyboard()
    }), 1e3))
  },
  hide_picker: function() {
    this.setData({
      show: !1,
      show2: !1
    })
  },
  live_address_input: function(a) {
    if ("白云区" == this.data.live_area) return ""
  },
  get_return: function(a) {
    console.log("get_return", a);
    var e = !1;
    this.data.live_street === a.detail.json[3].label && (e = !0), this.setData({
      live_city: a.detail.json[1].label,
      live_area: a.detail.json[2].label,
      live_street: a.detail.json[3].label,
      street_code: a.detail.json[3].value,
      live_address1: a.detail.location_str
    }), 0 == e && (this.setData({
      live_address: "",
      live_address_readonly: "白云区" === a.detail.json[2].label ? "true" : "false"
    }), a.detail.json[2].label)
  },
  live_address_search_click: function() {
    0 != this.data.live_address_search.length ? (this.data.reload = !0, this.getStandardAddressByStreet()) : wx.showModal({
      title: "提示",
      content: "请输入搜索地址",
      showCancel: !1
    })
  },
  getStandardAddressByStreet: function() {
    var a = this;
    return t(e().mark((function t() {
      var o, s, i, l, d, c, r, _, u;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return (o = a).data.reload && o.setData({
              page_info: "请稍后...",
              reload: !1,
              cur_page: 1,
              total_page: "",
              total_rec: "",
              key_word: "",
              data_list: [],
              live_address_list: [],
              no_standAddress: !1
            }), s = {
              type: 7,
              street: o.data.live_street,
              street_code: o.data.street_code,
              key_word: o.data.live_address_search,
              post_page: o.data.cur_page
            }, i = JSON.stringify(i), l = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_002_rent_house_company/sv_018_search", wx.showLoading({
              title: "加载中"
            }), e.prev = 6, e.next = 9, n.wx_request(l, s);
          case 9:
            if ((d = e.sent).data)
              if (wx.hideLoading(), "000000000000" == d.data[0].resp_code) {
                for (o.data.total_page = 1, o.data.cur_page = 1, o.data.total_rec = d.data[0].total_rec, 0 == d.data[0].total_rec ? o.setData({
                    page_info: "0记录"
                  }) : o.data.cur_page == o.data.total_page ? o.setData({
                    page_info: o.data.cur_page + "/" + o.data.total_page + "页" + o.data.total_rec + "条记录"
                  }) : o.setData({
                    page_info: "下一页" + o.data.cur_page + "/" + o.data.total_page + "页" + o.data.total_rec + "条记录"
                  }), c = 0; c < d.data[0].hits.length; c++) r = d.data[0].hits[c], o.data.live_address_list.push(r);
                o.setData({
                  live_address_list: o.data.live_address_list
                })
              } else _ = d.data[0].resp_msg + "(" + d.data[0].resp_code + ")", wx.showModal({
                title: "提示",
                content: _,
                showCancel: !1
              });
            e.next = 20;
            break;
          case 13:
            e.prev = 13, e.t0 = e.catch(6), console.log("1649383936", e.t0, e.t0.message), wx.hideLoading(), u = e.t0.message, null != e.t0.message && null != e.t0.message || (u = JSON.stringify(e.t0)), wx.showModal({
              title: "提示1649383936",
              content: u + l,
              showCancel: !1
            });
          case 20:
          case "end":
            return e.stop()
        }
      }), t, null, [
        [6, 13]
      ])
    })))()
  },
  get_live_address_select: function(a) {
    this.setData({
      live_address: a.target.dataset.item.MPDZMC || a.target.dataset.item.DZMC,
      show2: !1
    })
  },
  no_stand_address: function() {
    this.setData({
      reload: !1,
      cur_page: 1,
      total_page: "",
      total_rec: "",
      key_word: "",
      data_list: [],
      live_address_list: [],
      no_standAddress: !0
    })
  },
  no_stand_address_click: function() {
    this.setData({
      live_address: this.data.live_address_search,
      show2: !1,
      no_standAddress: !1
    })
  },
  get_next_page: function() {
    var a = this.data.total_page,
      e = this.data.cur_page;
    a > e ? (e++, this.data.cur_page = e, this.getStandardAddressByStreet()) : wx.showToast({
      icon: "none",
      title: "已到最后一页"
    })
  },
  bind_permanent_region_change: function(a) {
    console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
      permanent_region: a.detail.value
    })
  },
  bindPickerChange0: function(a) {
    this.setData({
      brandindex: a.detail.value,
      index1: 0
    });
    var e = this.data.objectArray;
    this.setData({
      object: e[this.data.brandindex].array
    })
  },
  bindPickerChange1: function(a) {
    this.setData({
      index1: a.detail.value
    })
  },
  bindPickerChange2: function(a) {
    console.log(a.detail.value), this.setData({
      departmentIndex: a.detail.value
    }), this.setData({
      department_code: this.data.departmentArray[a.detail.value][1]
    }), console.log(this.data.departmentArray[a.detail.value][1])
  },
  onLoad: function(a) {
    var e = wx.getSystemInfoSync();
    console.log(e, "===system_info==="), e.version <= "6.7.3" && (console.log("--- 微信版本过低 ---"), wx.showModal({
      title: "提示",
      content: "微信版本过低,请升级微信",
      showCancel: !1
    }));
    var t = this,
      n = decodeURIComponent(a.scene);
    console.log("scene staff company:", n);
    var s = !1;
    try {
      parseInt(n) > 1 && (s = !0)
    } catch (a) {
      console.log(a)
    }
    if (t.setData({
        this_page_found_scene: s
      }), 1 != s) wx.showLoading({
      title: "刷新中..."
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
            if (console.log("拉取login", a), "000000000000" == a.data[0].resp_code) {
              o.globalData.openid = a.data[1].openid, o.globalData.session_key = a.data[1].session_key;
              var e = {
                openId: o.globalData.openid
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
              content: "获取状态异常-3:" + a.data[0].resp_code + a.data[0].resp_msg,
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
    });
    else {
      var i = n;
      if (t.setData({
          this_company_rec_id: i
        }), 46484 == parseInt(n) || 22 == parseInt(n) || 1088481594 == parseInt(n) || 1088330294 == parseInt(n) || 1088489166 == parseInt(n) || 1088502575 == parseInt(n)) return console.log("白云疗养专用,跳转到白云疗养专用"), void wx.reLaunch({
        url: "../form_join_holiday_company/form?scene=" + n
      });
      1087849 != parseInt(n) && 1087817 != parseInt(n) || t.setData({
        remark_place_holder: "现单位和职务"
      });
      for (var l = this.data.objectArray, d = [], c = 0; c < l.length; c++) d.push(l[c].brand);
      this.setData({
        brands: d,
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
  get_user_info_result: function(a) {
    var e = this;
    if ("getUserInfo:ok" == a.detail.errMsg) {
      this.setData({
        showModal_user_info: !1
      }), o.globalData.userInfo = a.detail.rawData, o.globalData.USERINFO_post = a.detail.rawData;
      var t = wx.getStorageSync("unionId");
      if (null == t || null == t || "" == t) {
        wx.showLoading({
          title: "请稍等..."
        });
        var n = {
            session_key: o.globalData.session_key,
            encryptedData: a.detail.encryptedData,
            iv: a.detail.iv
          },
          s = "https://xcx.pinganbaiyun.cn/mini_program/api_01/dencryp";
        console.log(s, n), wx.request({
          url: s,
          method: "POST",
          dataType: "json",
          data: n,
          success: function(a) {
            if (console.log("获取解码信息 user_info", a), "000000000000" != a.data[0].resp_code) return wx.hideLoading(), void e.go_to_action();
            var t = a.data[1].unionId,
              n = {
                openId: o.globalData.openid,
                unionId: t
              },
              s = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_openId_unionId";
            console.log(s, n), wx.request({
              url: s,
              method: "POST",
              dataType: "json",
              data: n,
              success: function(a) {
                wx.hideLoading(), wx.setStorageSync("unionId", t), e.go_to_action()
              },
              fail: function(a) {
                wx.hideLoading(), console.log("提交失败，", a), e.go_to_action()
              }
            })
          },
          fail: function(a) {
            console.log("dencryp fail:", a), wx.hideLoading(), e.go_to_action()
          }
        })
      } else e.go_to_action()
    } else wx.showModal({
      title: "提示",
      content: "拒绝授权影响加入单位  请授权",
      confirmText: "确定",
      showCancel: !1,
      success: function(a) {
        e.setData({
          showModal_user_info: !0
        })
      }
    })
  },
  go_to_action: function() {
    return "000000000001" == this.data.this_sfz_resp_code ? (console.log("apply....000000000001 "), void wx.navigateTo({
      url: "../../../component/pages/form_ocr_01/form"
    })) : "000000000002" == this.data.this_sfz_resp_code ? (o.globalData.page_verify_code_msg = "您已提交身份证资料,请进行基于生物识别的人脸核身", o.globalData.XM = this.data.this_sfz_XM, o.globalData.ZJHM = this.data.this_sfz_ZJHM, o.globalData.mobile_phone = this.data.this_sfz_mobile_phone, console.log("您已提交身份证资料,请进行基于生物识别的人脸核身...."), void wx.navigateTo({
      url: "../../../component/pages/form_ocr_03/form"
    })) : "000000000004" == this.data.this_sfz_resp_code ? (o.globalData.page_verify_code_msg = "已发送短信验证码,请输入短信验证码", console.log("submit code...."), void wx.navigateTo({
      url: "../../../component/pages/form_ocr_04/form"
    })) : void 0
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
              success: function(t) {
                console.log("res.getLocation:", t), e.globalData.location_info = t;
                var n = t.accuracy,
                  s = t.altitude,
                  i = t.horizontalAccuracy,
                  l = t.latitude,
                  d = t.longitude,
                  c = t.speed,
                  r = t.verticalAccuracy;
                if (null == o.globalData.openid || "" == o.globalData.openid || null == o.globalData.openid) wx.login({
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
                          o.globalData.openid = e.data[1].openid;
                          var t = {
                              openId: o.globalData.openid,
                              accuracy: n,
                              altitude: s,
                              horizontalAccuracy: i,
                              latitude: l,
                              longitude: d,
                              speed: c,
                              verticalAccuracy: r
                            },
                            _ = "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log";
                          wx.request({
                            url: _,
                            method: "POST",
                            dataType: "json",
                            data: t,
                            success: function(a) {},
                            fail: function(a) {}
                          });
                          var u = a.data.this_company_rec_id;
                          t = {
                            openId: o.globalData.openid,
                            accuracy: n,
                            altitude: s,
                            horizontalAccuracy: i,
                            latitude: l,
                            longitude: d,
                            speed: c,
                            verticalAccuracy: r,
                            oper_type: "COMPANY",
                            parameter_value: u
                          }, _ = "https://xcx.pinganbaiyun.cn/mini_program/api_01/tb_060_scan_code_log";
                          wx.request({
                            url: _,
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
                      openId: o.globalData.openid,
                      accuracy: n,
                      altitude: s,
                      horizontalAccuracy: i,
                      latitude: l,
                      longitude: d,
                      speed: c,
                      verticalAccuracy: r
                    },
                    u = "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log";
                  wx.request({
                    url: u,
                    method: "POST",
                    dataType: "json",
                    data: _,
                    success: function(a) {},
                    fail: function(a) {}
                  });
                  var p = a.data.this_company_rec_id;
                  _ = {
                    openId: o.globalData.openid,
                    accuracy: n,
                    altitude: s,
                    horizontalAccuracy: i,
                    latitude: l,
                    longitude: d,
                    speed: c,
                    verticalAccuracy: r,
                    oper_type: "COMPANY",
                    parameter_value: p
                  }, u = "https://xcx.pinganbaiyun.cn/mini_program/api_01/tb_060_scan_code_log";
                  wx.request({
                    url: u,
                    method: "POST",
                    dataType: "json",
                    data: _,
                    success: function(a) {},
                    fail: function(a) {}
                  })
                }
                a.ask_join()
              },
              fail: function(t) {
                console.log("getLocation fail", t), e.globalData.get_role_01 = !1, a.setData({
                  showModal_location: !0
                })
              }
            })
          },
          fail: function(t) {
            console.log("authorize scope.userLocation fail 用户不允许授权...", t), e.globalData.get_role_01 = !1, a.setData({
              showModal_location: !0
            })
          }
        })) : 1 == t.authSetting["scope.userLocation"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 userLocation..."), wx.getLocation({
          type: "wgs84",
          altitude: !1,
          success: function(t) {
            e.globalData.location_info = t;
            var n = t.accuracy,
              s = t.altitude,
              i = t.horizontalAccuracy,
              l = t.latitude,
              d = t.longitude,
              c = t.speed,
              r = t.verticalAccuracy;
            if (null == o.globalData.openid || "" == o.globalData.openid || null == o.globalData.openid) wx.login({
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
                      o.globalData.openid = e.data[1].openid;
                      var t = {
                          openId: o.globalData.openid,
                          accuracy: n,
                          altitude: s,
                          horizontalAccuracy: i,
                          latitude: l,
                          longitude: d,
                          speed: c,
                          verticalAccuracy: r
                        },
                        _ = "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log";
                      wx.request({
                        url: _,
                        method: "POST",
                        dataType: "json",
                        data: t,
                        success: function(a) {},
                        fail: function(a) {}
                      });
                      var u = a.data.this_company_rec_id;
                      t = {
                        openId: o.globalData.openid,
                        accuracy: n,
                        altitude: s,
                        horizontalAccuracy: i,
                        latitude: l,
                        longitude: d,
                        speed: c,
                        verticalAccuracy: r,
                        oper_type: "COMPANY",
                        parameter_value: u
                      }, _ = "https://xcx.pinganbaiyun.cn/mini_program/api_01/tb_060_scan_code_log";
                      wx.request({
                        url: _,
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
                  openId: o.globalData.openid,
                  accuracy: n,
                  altitude: s,
                  horizontalAccuracy: i,
                  latitude: l,
                  longitude: d,
                  speed: c,
                  verticalAccuracy: r
                },
                u = "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log";
              wx.request({
                url: u,
                method: "POST",
                dataType: "json",
                data: _,
                success: function(a) {},
                fail: function(a) {}
              });
              var p = a.data.this_company_rec_id;
              _ = {
                openId: o.globalData.openid,
                accuracy: n,
                altitude: s,
                horizontalAccuracy: i,
                latitude: l,
                longitude: d,
                speed: c,
                verticalAccuracy: r,
                oper_type: "COMPANY",
                parameter_value: p
              }, u = "https://xcx.pinganbaiyun.cn/mini_program/api_01/tb_060_scan_code_log";
              wx.request({
                url: u,
                method: "POST",
                dataType: "json",
                data: _,
                success: function(a) {},
                fail: function(a) {}
              })
            }
            a.ask_join()
          },
          fail: function(a) {
            console.log("getLocation fail", a)
          }
        })) : 0 == t.authSetting["scope.userLocation"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 userLocation..."), e.globalData.get_role_01 = !1, a.setData({
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
    var e = this;
    if (1 != e.data.this_page_found_scene);
    else {
      var t = e.data.this_company_rec_id;
      wx.login({
        success: function(n) {
          wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
            method: "POST",
            dataType: "json",
            data: {
              code: n.code
            },
            success: function(n) {
              if (console.log("拉取login", n), "000000000000" == n.data[0].resp_code) {
                o.globalData.openid = n.data[1].openid, o.globalData.session_key = n.data[1].session_key;
                var s = {
                  openId: o.globalData.openid
                };
                wx.request({
                  url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                  method: "POST",
                  dataType: "json",
                  data: s,
                  success: function(n) {
                    console.log("检查进度结果", n);
                    var s = n.data[0].resp_code;
                    e.setData({
                      this_sfz_resp_code: s
                    }), "000000000002" == s && (e.setData({
                      this_sfz_XM: n.data[0].XM
                    }), e.setData({
                      this_sfz_ZJHM: n.data[0].ZJHM
                    }), e.setData({
                      this_sfz_mobile_phone: n.data[0].mobile_phone
                    }), console.log("XM:", n.data[0].XM)), wx.showLoading({
                      title: "刷新中..."
                    });
                    var i = {
                      company_rec_id: t,
                      openId: o.globalData.openid,
                      gen_passport: "NO"
                    };
                    console.log("post_data get_company_by_id ********", i);
                    wx.request({
                      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/get_company_by_id",
                      method: "POST",
                      dataType: "json",
                      data: i,
                      success: function(t) {
                        if (wx.hideLoading(), console.log("单位信息", t), "000000000000" == t.data[0].resp_code) {
                          var n;
                          e.setData({
                            GSMC: t.data[0].gsmc,
                            DZ: t.data[0].dz,
                            title: t.data[0].gsmc,
                            company_tag_arr: t.data[0].tag_arr
                          }), "1" == t.data[0].zt && e.setData({
                            ZT: "单位已审核"
                          });
                          t.data[0].gsmc;
                          var i = t.data[0].department_arr;
                          (n = e.data.departmentArray).push.apply(n, a(i));
                          for (var l = ["请选择部门"], d = 0; d < i.length; d++) l.push(i[d][0]);
                          e.setData({
                            department: l
                          }), wx.showModal({
                            title: "提示",
                            content: t.data[0].resp_msg,
                            showCancel: !0,
                            success: function(a) {
                              if (a.confirm) {
                                if ("000000000003" != s && "000000000001" != s && "000000000002" != s && "000000000002" != s) return void wx.showModal({
                                  title: "提示",
                                  content: "查询进度异常" + a.data[0].resp_msg + a.data[0].resp_code,
                                  showCancel: !1
                                });
                                for (var t = 0; t < e.data.company_tag_arr.length; t++) {
                                  "2500000391" == e.data.company_tag_arr[t].tag_codes && e.setData({
                                    showModal_permanent_address: !0
                                  })
                                }
                                e.setData({
                                  showModal_address: !0
                                })
                              } else a.cancel
                            }
                          })
                        } else {
                          if ("-000000002290" == t.data[0].resp_code || "-000000002291" == t.data[0].resp_code) {
                            e.setData({
                              GSMC: t.data[0].gsmc,
                              DZ: t.data[0].dz,
                              title: t.data[0].gsmc
                            }), "1" == t.data[0].zt && e.setData({
                              ZT: "单位已审核"
                            });
                            t.data[0].gsmc;
                            return void wx.showModal({
                              title: "白云公安疗养专用",
                              content: t.data[0].resp_msg,
                              showCancel: !1,
                              success: function() {}
                            })
                          }
                          if ("00000009193" == t.data[0].resp_code) {
                            var c = t.data[0].company_code;
                            wx.navigateTo({
                              url: "../../../../page/page_002_staff_passport/page_002_staff_passport?scene=" + c
                            })
                          } else {
                            if ("-0000100239" == t.data[0].resp_code) {
                              var r = e.data.this_company_rec_id;
                              return o.globalData.input_company_id = r, o.globalData.input_company_name = "", void wx.showModal({
                                title: "乐业管家",
                                content: "体验乐业管家功能，需要您实名注册。",
                                showCancel: !0,
                                cancelText: "暂不注册",
                                confirmText: "现在注册",
                                success: function(a) {
                                  1 == a.confirm ? wx.navigateTo({
                                    url: "../../../component/pages/form_ocr_01/form"
                                  }) : wx.redirectTo({
                                    url: "../../../index_01/pages/my/my"
                                  })
                                }
                              })
                            }
                            console.log("err:", t), wx.showModal({
                              title: "提示",
                              content: t.data[0].resp_msg + t.data[0].resp_code,
                              showCancel: !1
                            })
                          }
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
                content: "获取状态异常-3:" + n.data[0].resp_code + n.data[0].resp_msg,
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
    var a = this,
      e = a.data.live_city,
      t = a.data.live_area,
      n = a.data.live_street,
      s = a.data.department_code;
    if (null != s && null != s && "" != s)
      if ("请选择居住市" != e)
        if ("请选择居住区" == t || null == t || null == t || t.length <= 0 || -1 != t.indexOf("请选择")) wx.showModal({
          title: "输入提示",
          content: "请选择居住区",
          showCancel: !1
        });
        else {
          var i = a.data.live_address;
          if (null != a.data.live_address && null != a.data.live_address && "" != a.data.live_address)
            if (i.length <= 5) wx.showModal({
              title: "输入提示",
              content: "请输入详细地址信息",
              showCancel: !1
            });
            else {
              if (1 == a.data.showModal_permanent_address) {
                if (1 == [void 0, null, ""].includes(a.data.permanent_region[0]) || 1 == [void 0, null, ""].includes(a.data.permanent_region[1]) || 1 == [void 0, null, ""].includes(a.data.permanent_region[2])) return void wx.showModal({
                  title: "输入提示",
                  content: "请选择户籍地",
                  showCancel: !1
                });
                var l = a.data.permanent_region[0] + a.data.permanent_region[1] + a.data.permanent_region[2],
                  d = a.data.permanent_detail_address;
                if (1 == [void 0, null, ""].includes(d) || d.length <= 3) return void wx.showModal({
                  title: "输入提示",
                  content: "请输入户籍地址信息",
                  showCancel: !1
                })
              }
              var c = a.data.remark;
              a.setData({
                live_city: e
              }), a.setData({
                live_area: t
              }), a.setData({
                department_code: s
              }), a.setData({
                showModal_address: !1
              });
              var r = a.data.this_company_rec_id,
                _ = a.data.GSMC,
                u = a.data.this_sfz_resp_code;
              if ("000000000003" == u) {
                wx.showLoading({
                  title: "提交中..."
                });
                var p = {
                  openId: o.globalData.openid,
                  company_rec_id: r,
                  department_code: s,
                  live_city: e,
                  live_area: t,
                  live_street: n,
                  live_address: i,
                  permanent_region: l,
                  permanent_address: d,
                  remark: c
                };
                console.log("post_data:", p);
                wx.request({
                  url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/input_company_by_id",
                  method: "POST",
                  dataType: "json",
                  data: p,
                  success: function(e) {
                    return wx.hideLoading(), console.log("提交信息", e), "000000000000" == e.data[0].resp_code ? (console.log("提交成功"), o.globalData.live_city = "", o.globalData.live_area = "", o.globalData.live_address = "", o.globalData.department_code = "", a.setData({
                      bt_apply_display: !0
                    }), a.setData({
                      ZT: "已加入该单位"
                    }), a.setData({
                      showModal_address: !1
                    }), void wx.showModal({
                      title: "提示",
                      content: e.data[0].resp_msg,
                      showCancel: !1,
                      success: function(e) {
                        a.subscribe_to_messages()
                      }
                    })) : void wx.showModal({
                      title: "提示",
                      content: e.data[0].resp_msg,
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
                if ("000000000001" == u || "000000000002" == u || "000000000004" == u) return o.globalData.input_company_id = r, o.globalData.input_company_name = _, o.globalData.live_city = e, o.globalData.live_area = t, o.globalData.live_address = a.data.live_address, o.globalData.department_code = a.data.department_code, console.log("apply....", u), void wx.showModal({
                  title: "提示",
                  content: "您还未注册，您将进行注册步骤，注册成功之后您将加入该单位",
                  showCancel: !1,
                  success: function() {
                    var e = wx.getStorageSync("unionId");
                    if (null == o.globalData.userInfo || "" == o.globalData.userInfo || null == o.globalData.userInfo || null == e || "" == e || null == e) a.setData({
                      showModal_user_info: !0
                    });
                    else if ("000000000001" == u) console.log("apply....000000000001 "), wx.navigateTo({
                      url: "../../../component/pages/form_ocr_01/form"
                    });
                    else {
                      if ("000000000002" == u) return o.globalData.page_verify_code_msg = "您已提交身份证资料,请进行基于生物识别的人脸核身", o.globalData.XM = a.data.this_sfz_XM, o.globalData.ZJHM = a.data.this_sfz_ZJHM, o.globalData.mobile_phone = a.data.this_sfz_mobile_phone, console.log("您已提交身份证资料,请进行基于生物识别的人脸核身...."), console.log("this_page.data.this_sfz_XM:", a.data.this_sfz_XM, o.globalData.XM, o.globalData.ZJHM), void wx.navigateTo({
                        url: "../../../component/pages/form_ocr_03/form"
                      });
                      if ("000000000004" == u) return o.globalData.page_verify_code_msg = "已发送短信验证码,请输入短信验证码", console.log("submit code...."), void wx.navigateTo({
                        url: "../../../component/pages/form_ocr_04/form"
                      })
                    }
                  }
                });
                wx.showModal({
                  title: "提示",
                  content: "查询进度异常" + a.data.this_sfz_resp_code,
                  showCancel: !1
                })
              }
            }
          else wx.showModal({
            title: "输入提示",
            content: "请输入详细地址信息",
            showCancel: !1
          })
        }
    else wx.showModal({
      title: "输入提示",
      content: "请选择居住市",
      showCancel: !1
    });
    else wx.showModal({
      title: "输入提示",
      content: "请选择部门",
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
  bindinput_bz: function(a) {
    this.setData({
      remark: a.detail.value
    })
  },
  bindblur_bz: function(a) {
    a.detail.value;
    this.setData({
      remark: a.detail.value
    })
  },
  bindinput_permanent_detail_address: function(a) {
    this.setData({
      permanent_detail_address: a.detail.value
    }), console.log(this.data.permanent_detail_address)
  },
  subscribe_to_messages: function() {
    wx.requestSubscribeMessage({
      tmplIds: ["CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ"],
      success: function(a) {
        "accept" != a.CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ ? wx.showModal({
          title: "平安码丨平安白云",
          content: "订阅不成功,您可以自己选择是否接收订阅消息",
          showCancel: !1,
          success: function(a) {
            a.confirm && wx.openSetting({
              success: function(a) {}
            })
          }
        }) : wx.showModal({
          title: "平安码丨平安白云",
          content: "您已成功订阅消息,可以接收审批通知结果消息",
          showCancel: !1
        })
      },
      fail: function(a) {
        wx.showModal({
          title: "平安码丨平安白云",
          content: "订阅不成功,您可以自己选择是否接收订阅消息",
          showCancel: !1,
          success: function(a) {
            a.confirm && wx.openSetting({
              success: function(a) {}
            })
          }
        })
      }
    })
  }
});