var e, t, a, o, s, n, r, i = require("../../@babel/runtime/helpers/typeof"),
  c = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  l = require("../../@babel/runtime/helpers/asyncToGenerator"),
  d = require("./util.js"),
  u = require("../../util/rsa_encry.js"),
  h = (require("../../util/regenerator-runtime/runtime.js").async, getApp()),
  g = require("../../util/util.js"),
  p = null;

function _(e) {
  for (var t = [], a = 0; a < e.length; a += 2) t.push(parseInt(e.substr(a, 2), 16));
  return t
}

function f() {
  var e = new Date;
  p && (e = new Date(p));
  var t = e.getFullYear(),
    a = (e.getMonth() + 1).toString(),
    o = e.getDate().toString(),
    s = e.getHours(),
    n = e.getMinutes(),
    r = e.getSeconds();
  s < 10 && (s = "0" + s), n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), 1 == (t = (t = (t - 2e3) / 10 << 4 | (t - 2e3) % 10).toString(16)).length && (t = "0" + t), 1 == a.length && (a = "0" + a), 1 == o.length && (o = "0" + o);
  var i = function() {
    var e;
    switch ((new Date).getDay()) {
      case 1:
        e = "01";
        break;
      case 2:
        e = "02";
        break;
      case 3:
        e = "03";
        break;
      case 4:
        e = "04";
        break;
      case 5:
        e = "05";
        break;
      case 6:
        e = "06";
        break;
      case 0:
        e = "00"
    }
    return e
  }();
  return console.log("year2222", t, a, o, s, n, r, i), t + a + o + s + n + r + i
}

function m(e) {
  for (var t = "", a = 0; a < e.length; a++) {
    var o, s = e[a];
    1 == (o = s < 0 ? (255 + s + 1).toString(16) : s.toString(16)).length && (o = "0" + o), t += o
  }
  return t
}

function w(e, t, a) {
  var o = 7,
    s = 0;
  console.log(t);
  var n = parseInt(t.substr(3, 2), 16),
    r = parseInt(t.substr(5, 2), 16),
    i = parseInt(t.substr(7, 2), 16),
    c = parseInt(t.substr(9, 2), 16);
  console.log("设备ID ".concat(n, " ").concat(r, " ").concat(i, " ").concat(c)), console.log(new Uint8Array(e));
  for (var l = new Uint8Array(e), u = 0, h = 0; h < l.length; h++) u += l[h];
  console.log(u);
  for (var g = 0; g < a.length / 2; g++) u += parseInt(a.substr(2 * g, 2), 16);
  console.log(u);
  var p = m([l[0], l[1], l[2], l[3], 0, 0]);
  console.log("Bytes2HexString:" + p, d.hexToString(a), d.hexToString(p));
  var f = d.des(d.hexToString(a), d.hexToString(p), 1),
    w = d.stringToHex(f);
  console.log("DES Test: " + w);
  var b = [n, r, i, c],
    v = x(e);
  b = m(b) + "0000" + v, console.log("temp_msg2222", b), b = _(b);
  for (var y = 0, I = 0; I < b.length; I++) y += b[I];
  for (var k = 255 & y, S = _(x(b)), D = S[0], T = 1; T < S.length; T++) D ^= S[T];
  o = [165, 22, 1, n, r, i, c, 0, 0, k, D, 9, parseInt(w.substr(0, 2), 16), parseInt(w.substr(2, 2), 16), parseInt(w.substr(4, 2), 16), parseInt(w.substr(6, 2), 16), parseInt(w.substr(8, 2), 16), parseInt(w.substr(10, 2), 16), parseInt(w.substr(12, 2), 16), parseInt(w.substr(14, 2), 16), s, 90];
  for (var C = 0; C < o.length; C++) s += o[C];
  return o[o.length - 2] = ~(255 & s) - 1 + 1, console.log("instruct222333ee", m(o)), o
}

function x(e) {
  return Array.prototype.map.call(new Uint8Array(e), (function(e) {
    return ("00" + e.toString(16)).slice(-2)
  })).join("")
}
Page({
  data: {
    dataList: [],
    tempDataList: [],
    token: null,
    userId: null,
    errorMsg: "",
    search: "",
    showLoading: !1,
    curItem: null,
    timer: null,
    seconds: 0,
    access_token: "",
    phone: "",
    id_card: "",
    username: "",
    login_token: "",
    bleRecord: [],
    bleCharactarId: "14839AC4-7D7E-415C-9A42-167340CF2339",
    bleServiceUUID: "0734594A-A8E7-4B1A-A6B1-CD5243059A57",
    openState: !1,
    is_ios: !1,
    show_open_yjm: !1,
    gohome_today_date: "",
    random_value: null,
    communicate_key: "",
    time_sync_data: "",
    card_sync_data: "",
    temp_comm_key_key: "",
    show_length: 0,
    per_page: 50,
    total_rec: 0,
    cur_page: 1,
    total_page: 1,
    net_work_type: "5g",
    try_cnt: 0,
    black_card_list: [],
    black_card_index: 0,
    black_card_id: "",
    has_get_com_key: !1,
    bluetooth_device_list_obj: {},
    latitude: null,
    longitude: null,
    platform: ""
  },
  onLoad: (r = l(c().mark((function e(t) {
    var a, o, s, n, r, i, l, d, u, h, p;
    return c().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return a = this, console.log("onLoad options:", t), o = wx.getDeviceInfo(), s = o.platform, console.log("platform：", s), this.data.platform = s, "ios" == s && (a.data.is_ios = !0), e.next = 9, g.async_get_net_work_type();
        case 9:
          if (n = e.sent, a.data.net_work_type = n.networkType, console.log("that.data.net_work_type", a.data.net_work_type), this.data.phone = t.phone, this.data.username = t.name, this.data.id_card = t.id_card, this.data.access_token = t.access_token, this.data.gohome_today_date = t.gohome_today_date, this.data.login_token = t.login_token, (r = wx.getStorageSync("bluetoothscandata")) ? (console.log("scan_data has data"), this.data.bluetooth_device_list_obj = r) : console.log("scan_data no data"), null != this.data.access_token && null != this.data.access_token && "[object Undefined]" != this.data.access_token && "null" != this.data.access_token && "undefined" != this.data.access_token || "none" !== a.data.net_work_type && this.f_001_from_third_part(), "" == (i = wx.getStorageSync("guards")) || null == i || null == i) {
            e.next = 43;
            break
          }
          if (!(i.length > 0)) {
            e.next = 43;
            break
          }
          for (l = 0; l < i.length; l++) null != (d = i[l]).limitTime && null != d.limitTime && "" != d.limitTime && (d.expireDays = a.getDaysBetween(d.limitTime));
          this.data.tempDataList = i, this.setData({
            dataList: i,
            show_length: i.length
          }), e.next = 43;
          break;
        case 30:
          if (!(h < a.data.dataList.length)) {
            e.next = 42;
            break
          }
          if (p = a.data.dataList[h], a.data.dataList.length < 200 && console.log("检查门禁权限列表有没有过期的数据", p.expireDays, p), !(p.expireDays > 0)) {
            e.next = 37;
            break
          }
          e.next = 39;
          break;
        case 37:
          return u = !0, e.abrupt("break", 42);
        case 39:
          h++, e.next = 30;
          break;
        case 42:
          1 == u && a.sv_001_upload_limit_time(a.data.dataList);
        case 43:
          "none" !== a.data.net_work_type && this.get_list(), wx.getLocation({
            type: "wgs84",
            success: function(e) {
              a.data.latitude = e.latitude, a.data.longitude = e.longitude, console.log("getLocation res", e)
            },
            fail: function(e) {
              "getLocation:fail auth deny" == e.errMsg ? (console.log("getLocation:fail auth deny"), wx.showModal({
                title: "提示",
                content: "获取位置权限未打开，请先打开",
                showCancel: !1,
                success: function(e) {
                  e.confirm ? wx.openSetting({
                    withSubscriptions: !0
                  }) : e.cancel
                }
              })) : wx.showModal({
                title: "提示",
                content: "请先打开手机定位（位置信息），再开门",
                showCancel: !1
              })
            }
          });
        case 45:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(e) {
    return r.apply(this, arguments)
  }),
  onReady: function() {},
  onHide: function() {
    wx.stopBluetoothDevicesDiscovery({
      success: function(e) {}
    }), wx.closeBluetoothAdapter({
      success: function(e) {}
    }), null != this.data.timer && (clearInterval(this.data.timer), this.data.timer = null, this.data.seconds = 0)
  },
  onShow: function() {
    this.data.openState = !1, this.data.try_cnt = 0, this.data.has_get_com_key = !1, this.data.communicate_key = "", this.data.time_sync_data = "", this.data.card_sync_data = "", this.data.bleRecord = [], this.data.openResJudge = !1
  },
  onPullDownRefresh: function() {
    this.get_list()
  },
  prev_page_click: function() {
    if (this.data.cur_page <= 1) wx.showToast({
      title: "已经是第一页"
    });
    else {
      if (this.data.cur_page--, this.data.cur_page <= 0 && (this.data.cur_page = 1), this.data.search.length > 0) {
        var e = d.findArrayString(this.data.search, this.data.tempDataList);
        if (e.length > this.data.per_page) {
          var t = e.slice(this.data.per_page * (this.data.cur_page - 1), this.data.per_page * this.data.cur_page);
          if (t.length <= 0) return void wx.showToast({
            title: "已经是第一页"
          });
          this.setData({
            dataList: t
          })
        } else this.setData({
          dataList: e
        })
      } else if (this.data.tempDataList.length > this.data.per_page) {
        var a = this.data.tempDataList.slice(this.data.per_page * (this.data.cur_page - 1), this.data.per_page * this.data.cur_page);
        if (a.length <= 0) return void wx.showToast({
          title: "已经是第一页"
        });
        this.setData({
          dataList: a
        })
      } else this.setData({
        dataList: this.data.tempDataList
      });
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  },
  next_page_click: function() {
    var e = this.data.total_page,
      t = this.data.cur_page;
    if (e > t) {
      if (t++, this.data.cur_page = t, this.data.search.length > 0) {
        var a = d.findArrayString(this.data.search, this.data.tempDataList);
        if (a.length > this.data.per_page) {
          var o = a.slice(this.data.per_page * (this.data.cur_page - 1), this.data.per_page * this.data.cur_page);
          if (o.length <= 0) return this.data.cur_page--, void wx.showToast({
            title: "已经是最后一页了"
          });
          this.setData({
            dataList: o
          })
        } else this.setData({
          dataList: a
        })
      } else if (this.data.tempDataList.length > this.data.per_page) {
        var s = this.data.tempDataList.slice(this.data.per_page * (this.data.cur_page - 1), this.data.per_page * this.data.cur_page);
        if (s.length <= 0) return this.data.cur_page--, void wx.showToast({
          title: "已经是最后一页了"
        });
        this.setData({
          dataList: s
        })
      } else this.setData({
        dataList: this.data.tempDataList
      });
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else wx.showToast({
      title: "已经是最后一页了"
    })
  },
  operationClick: function(e) {
    var t = this,
      a = e.currentTarget.dataset.item;
    wx.showModal({
      title: "提示",
      content: "您确定要删除吗？",
      showCancel: !0,
      cancelText: "取消",
      confirmText: "确定",
      success: function(e) {
        1 == e.confirm && t.confirmDelete(a)
      }
    })
  },
  confirmDelete: (n = l(c().mark((function e(t) {
    var a, o, s, n, r;
    return c().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if ("" != (a = this).data.access_token && null != a.data.access_token && null != a.data.access_token) {
            e.next = 3;
            break
          }
          return e.abrupt("return");
        case 3:
          return o = {
            phone: a.data.phone,
            guardCode: t.code,
            companyId: t.companyId
          }, s = JSON.stringify(o), e.next = 7, u.encrypt_rsa_fun(s);
        case 7:
          n = e.sent, r = JSON.stringify({
            key: n
          }), wx.showLoading(), wx.request({
            url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/delete_jurisdiction_by_phone_guardCode",
            method: "POST",
            data: r,
            header: {
              "Content-type": "application/json",
              cloud_shield_token: a.data.access_token
            },
            success: function(e) {
              wx.hideLoading(), "000000000000" == e.data[0].resp_code ? (wx.showToast({
                title: "删除成功"
              }), a.get_list()) : wx.showModal({
                title: "提示",
                content: e.data[0].resp_msg,
                showCancel: !1
              })
            },
            fail: function(e) {
              wx.showModal({
                title: "提示",
                content: "网络错误",
                showCancel: !1
              })
            }
          });
        case 12:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(e) {
    return n.apply(this, arguments)
  }),
  open_yjm: function() {
    this.setData({
      show_open_yjm: !1
    }), this.go_gd_code()
  },
  cancel_pop: function() {
    this.setData({
      show_open_yjm: !1
    })
  },
  openDoor: function(e) {
    var t = this;
    console.log("openDoor");
    var a = e.currentTarget.dataset.item;
    console.log("item", a), a.expireDays < 0 ? wx.showModal({
      title: "提示",
      content: "门禁已过期，请及时办理续期",
      showCancel: !1,
      success: function(e) {}
    }) : (this.data.curItem = a, wx.onBluetoothAdapterStateChange((function(e) {
      console.log("onBluetoothAdapterStateChange", e)
    })), t.data.timer && (clearInterval(t.data.timer), t.data.timer = null, t.data.seconds = 0), t.data.timer = setInterval((function(e) {
      t.judgeOpenTime()
    }), 1e3), wx.showLoading({
      title: "开门中..."
    }), wx.closeBluetoothAdapter({
      complete: function(e) {
        setTimeout((function() {
          wx.openBluetoothAdapter({
            success: function(e) {
              console.log(e), wx.offBluetoothDeviceFound(), wx.onBluetoothDeviceFound((function(e) {
                console.log("onBluetoothDeviceFound", e);
                var o = e.devices[0].name,
                  s = e.devices[0].deviceId;
                null != t.data.bluetooth_device_list_obj[s] && null != t.data.bluetooth_device_list_obj[s] || null != o && null != o && "" != o && (o.startsWith("BY") || (t.data.bluetooth_device_list_obj[s] = {
                  deviceName: o,
                  deviceId: s,
                  isUpload: 0
                })), e.devices[0].name && e.devices[0].name.toUpperCase() == a.bluetoothName.toUpperCase() && (wx.offBluetoothDeviceFound(), wx.stopBluetoothDevicesDiscovery({
                  success: function() {
                    t.data.curItem.deviceId = e.devices[0].deviceId, t.connectDevice(e.devices[0].deviceId)
                  },
                  fail: function() {
                    t.data.curItem.deviceId = e.devices[0].deviceId, t.connectDevice(e.devices[0].deviceId)
                  }
                }))
              })), wx.startBluetoothDevicesDiscovery({
                allowDuplicatesKey: !1,
                powerLevel: "high",
                success: function(e) {
                  console.log("res1", e)
                },
                fail: function(e) {
                  t.showErrorMsg(e)
                }
              })
            },
            fail: function(e) {
              console.log("error1", e), t.data.timer && (clearInterval(t.data.timer), t.data.timer = null, t.data.seconds = 0), wx.hideLoading(), t.showErrorMsg(e)
            }
          })
        }), 500)
      }
    }))
  },
  openDoor_v2: function(e) {
    var t = this;
    console.log("openDoor");
    var a = e.currentTarget.dataset.item;
    console.log("item", a), a.expireDays < 0 ? wx.showModal({
      title: "提示",
      content: "门禁已过期，请及时办理续期",
      showCancel: !1,
      success: function(e) {}
    }) : (this.data.curItem = a, wx.openBluetoothAdapter({
      success: function(e) {
        console.log("蓝牙适配器打开成功", e), wx.startBluetoothDevicesDiscovery({
          allowDuplicatesKey: !1,
          services: ["0734594A-A8E7-4B1A-A6B1-CD5243059A57"],
          success: function(e) {
            console.log("搜索成功", e), wx.onBluetoothDeviceFound((function(e) {
              console.log("onBluetoothDeviceFound", e), e.devices[0].name.toUpperCase() == a.bluetoothName.toUpperCase() && (t.data.curItem.deviceId = e.devices[0].deviceId, t.connectDevice(e.devices[0].deviceId))
            }))
          },
          fail: function(e) {
            console.error("搜索失败", e)
          }
        })
      },
      fail: function(e) {
        console.error("蓝牙适配器打开失败", e)
      }
    }))
  },
  connectDevice: function(e, t) {
    var a = this;
    console.log("开始连接设备2333", e), wx.closeBLEConnection({
      deviceId: e,
      complete: function() {
        wx.createBLEConnection({
          deviceId: e,
          timeout: 6e3,
          success: function(t) {
            console.log(t), a.data.bleRecord = [], a.data.openState = !1, a.getServicesAndCharacteristics(e)
          },
          fail: function(e) {
            console.log("createBLEConnection error", e), a.showErrorMsg(e), t && a.search_openDoor()
          }
        })
      }
    })
  },
  search_openDoor: function() {
    var e = this;
    console.log("search_openDoor");
    var t = e.data.curItem;
    console.log("item", t), t.expireDays < 0 ? wx.showModal({
      title: "提示",
      content: "门禁已过期，请及时办理续期",
      showCancel: !1,
      success: function(e) {}
    }) : (wx.onBluetoothAdapterStateChange((function(e) {
      console.log("onBluetoothAdapterStateChange", e)
    })), wx.offBluetoothDeviceFound(), wx.onBluetoothDeviceFound((function(a) {
      console.log("onBluetoothDeviceFound", a), a.devices[0].name.toUpperCase() == t.bluetoothName.toUpperCase() && (wx.offBluetoothDeviceFound(), wx.stopBluetoothDevicesDiscovery({
        success: function() {
          e.data.curItem.deviceId = a.devices[0].deviceId, e.connectDevice(a.devices[0].deviceId)
        },
        fail: function() {
          e.data.curItem.deviceId = a.devices[0].deviceId, e.connectDevice(a.devices[0].deviceId)
        }
      }))
    })), e.data.timer && (clearInterval(e.data.timer), e.data.timer = null, e.data.seconds = 0), e.data.timer = setInterval((function(t) {
      e.judgeOpenTime()
    }), 1e3), wx.showLoading({
      title: "开门中..."
    }), wx.closeBluetoothAdapter({
      complete: function(t) {
        setTimeout((function() {
          wx.openBluetoothAdapter({
            success: function(t) {
              console.log(t), console.log("开始搜索设备22"), wx.startBluetoothDevicesDiscovery({
                allowDuplicatesKey: !1,
                powerLevel: "high",
                services: ["0734594A-A8E7-4B1A-A6B1-CD5243059A57"],
                success: function(e) {
                  console.log("res1", e)
                },
                fail: function(t) {
                  e.showErrorMsg(t)
                }
              })
            },
            fail: function(t) {
              console.log("error1", t), e.data.timer && (clearInterval(e.data.timer), e.data.timer = null, e.data.seconds = 0), wx.hideLoading(), e.showErrorMsg(t)
            }
          })
        }), 500)
      }
    }))
  },
  getServicesAndCharacteristics: function(e) {
    var t = this;
    wx.getBLEDeviceServices({
      deviceId: e,
      success: function(a) {
        console.log("services", a.services), t.data.curItem.serviceId = t.data.bleCharactarId, wx.getBLEDeviceCharacteristics({
          deviceId: e,
          serviceId: t.data.curItem.serviceId,
          success: function(a) {
            t.data.curItem.characteristicId = t.data.bleServiceUUID, wx.notifyBLECharacteristicValueChange({
              state: !0,
              deviceId: e,
              serviceId: t.data.curItem.serviceId,
              characteristicId: t.data.curItem.characteristicId,
              success: function(o) {
                t.data.openResJudge = !1, wx.readBLECharacteristicValue({
                  deviceId: e,
                  serviceId: t.data.curItem.serviceId,
                  characteristicId: a.characteristics[0].uuid,
                  success: function(e) {
                    console.log("readBLECharacteristicValue", e)
                  }
                }), wx.offBLECharacteristicValueChange(), wx.onBLECharacteristicValueChange((function(e) {
                  console.log("onBLECharacteristicValueChange", e);
                  var a = x(e.value);
                  if (console.log("heheda", a, "---", t.data.curItem.productKey), 4 == e.value.byteLength && 0 == t.data.openState) {
                    t.data.random_value = e.value;
                    var o = function(e, t, a) {
                      var o = 7,
                        s = 0;
                      console.log(t);
                      var n = parseInt(t.substr(3, 2), 16),
                        r = parseInt(t.substr(5, 2), 16),
                        i = parseInt(t.substr(7, 2), 16),
                        c = parseInt(t.substr(9, 2), 16);
                      console.log("设备ID ".concat(n, " ").concat(r, " ").concat(i, " ").concat(c)), console.log(new Uint8Array(e));
                      for (var l = new Uint8Array(e), u = 0, h = 0; h < l.length; h++) u += l[h];
                      console.log(u);
                      for (var g = 0; g < a.length / 2; g++) u += parseInt(a.substr(2 * g, 2), 16);
                      console.log(u);
                      var p = u >> 8 & 255;
                      console.log(p);
                      var _ = 255 & u;
                      console.log(_);
                      var f = m([_, p, l[0], l[1], l[2], l[3], 0, 0]),
                        w = d.des(d.hexToString(a), d.hexToString(f), 1),
                        x = d.stringToHex(w);
                      console.log("DES Test: " + x), o = [165, 20, 5, n, r, i, c, 0, 1, 7, parseInt(x.substr(0, 2), 16), parseInt(x.substr(2, 2), 16), parseInt(x.substr(4, 2), 16), parseInt(x.substr(6, 2), 16), parseInt(x.substr(8, 2), 16), parseInt(x.substr(10, 2), 16), parseInt(x.substr(12, 2), 16), parseInt(x.substr(14, 2), 16), s, 90];
                      for (var b = 0; b < o.length; b++) s += o[b];
                      return o[o.length - 2] = ~(255 & s) - 1 + 1, console.log("instruct222", m(o)), o
                    }(e.value, t.data.curItem.bluetoothName, t.data.curItem.productKey);
                    console.log("buff", m(o)), t.WriteBLECharacteristicValue(o), console.log("is four"), t.data.openState = !0
                  }
                  if (a.length >= 24) {
                    var s = a.substr(0, 2).toUpperCase(),
                      n = a.substr(22, 2).toUpperCase();
                    "A5" == s && "E6" == n ? (console.log("kakaka", a), t.data.bleRecord.push(a)) : "A5" == s && "89" == n ? (console.log("获取通讯密钥的", a), t.data.communicate_key = a, t.data.has_get_com_key = !0) : "A5" == s && "86" == n ? (console.log("同步时钟的", a), t.data.time_sync_data = a) : "A5" == s && "82" == n && (console.log("设置卡黑名单的", a), t.data.card_sync_data = a)
                  }
                  if (t.data.bleRecord.length > 0) {
                    var r = a.slice(-2),
                      i = a.substr(18, 2);
                    if (t.recordDataProcessingCommandByMessageData(a, t.data.curItem.productKey), "5a" == r && 0 == t.data.has_get_com_key && "87" != i && t.data.curItem.sn) {
                      var c = w(t.data.random_value, "BY8" + t.data.curItem.sn, t.data.curItem.productKey);
                      console.log("这里做获取通讯密钥的操作11 buff2333", m(c)), t.WriteBLECharacteristicValue(c)
                    }
                  } else {
                    var l = a.slice(-2),
                      u = a.substr(18, 2);
                    if ("5a" == l && 0 == t.data.has_get_com_key && "87" != u && t.data.curItem.sn) {
                      c = w(t.data.random_value, "BY8" + t.data.curItem.sn, t.data.curItem.productKey);
                      console.log("这里做获取通讯密钥的操作22 buff2333", m(c)), t.WriteBLECharacteristicValue(c)
                    }
                  }
                  var h, g, p, b = a.slice(-2);
                  if (a.length > 2 && t.data.communicate_key.length > 0 && "5a" == b) {
                    t.data.communicate_key += a, console.log("communicate_key222", t.data.communicate_key);
                    var v = t.data.communicate_key.substr(24, 32);
                    console.log("msgBody2222", v);
                    var y = d.des(d.hexToString(t.data.curItem.productKey), d.hexToString(v), 0),
                      I = d.stringToHex(y);
                    console.log("comm_key11=", I);
                    var k = I.substr(16, 16);
                    t.data.temp_comm_key_key = k;
                    for (var S = null, D = 0; D < t.data.black_card_list.length; D++) {
                      var T = t.data.black_card_list[D];
                      if (T.sn == t.data.curItem.sn) {
                        S = T, t.data.black_card_index = D, t.data.black_card_id = T.id;
                        break
                      }
                    }
                    if (null == S) {
                      var C = f();
                      console.log("timebody222", C);
                      var L = function(e, t, a) {
                        var o = 6,
                          s = 0;
                        console.log(t);
                        var n = parseInt(t.substr(3, 2), 16),
                          r = parseInt(t.substr(5, 2), 16),
                          i = parseInt(t.substr(7, 2), 16),
                          c = parseInt(t.substr(9, 2), 16);
                        console.log("设备ID ".concat(n, " ").concat(r, " ").concat(i, " ").concat(c)), console.log(new Uint8Array(e));
                        for (var l = new Uint8Array(e), u = 0, h = 0; h < l.length; h++) u += l[h];
                        console.log(u);
                        for (var g = 0; g < a.length / 2; g++) u += parseInt(a.substr(2 * g, 2), 16);
                        console.log(u);
                        var p = m([l[0], l[1], l[2], l[3], l[4], l[5], l[6], 0]);
                        console.log("Bytes2HexString:" + p, d.hexToString(a), d.hexToString(p));
                        var f = d.des(d.hexToString(a), d.hexToString(p), 1),
                          w = d.stringToHex(f);
                        console.log("DES Test: " + w);
                        var b = [n, r, i, c],
                          v = x(e);
                        b = m(b) + "0000" + v, console.log("temp_msg2222", b), b = _(b);
                        for (var y = 0, I = 0; I < b.length; I++) y += b[I];
                        for (var k = 255 & y, S = _(x(b)), D = S[0], T = 1; T < S.length; T++) D ^= S[T];
                        o = [165, 22, 1, n, r, i, c, 0, 0, k, D, 6, parseInt(w.substr(0, 2), 16), parseInt(w.substr(2, 2), 16), parseInt(w.substr(4, 2), 16), parseInt(w.substr(6, 2), 16), parseInt(w.substr(8, 2), 16), parseInt(w.substr(10, 2), 16), parseInt(w.substr(12, 2), 16), parseInt(w.substr(14, 2), 16), s, 90];
                        for (var C = 0; C < o.length; C++) s += o[C];
                        return o[o.length - 2] = ~(255 & s) - 1 + 1, console.log("instruct222333ee", m(o)), o
                      }(_(C), "BY8" + t.data.curItem.sn, k);
                      console.log("time_buff", m(L)), t.WriteBLECharacteristicValue(L)
                    } else {
                      var M = "02000000";
                      1 == S.type && (M = "01000000");
                      var B = (h = S.cardId, g = M, 7 == (p = (parseInt(h, 16) + parseInt(g, 16)).toString(16)).length ? "0" + p : 6 == p.length ? "00" + p : p);
                      console.log("cardbody222", B);
                      var A = function(e, t, a) {
                        var o = 6,
                          s = 0;
                        console.log(t);
                        var n = parseInt(t.substr(3, 2), 16),
                          r = parseInt(t.substr(5, 2), 16),
                          i = parseInt(t.substr(7, 2), 16),
                          c = parseInt(t.substr(9, 2), 16);
                        console.log("设备ID ".concat(n, " ").concat(r, " ").concat(i, " ").concat(c)), console.log(new Uint8Array(e));
                        for (var l = new Uint8Array(e), u = 0, h = 0; h < l.length; h++) u += l[h];
                        console.log(u);
                        for (var g = 0; g < a.length / 2; g++) u += parseInt(a.substr(2 * g, 2), 16);
                        console.log(u);
                        var p = m([l[0], l[1], l[2], l[3]]);
                        console.log("Bytes2HexString:" + p, d.hexToString(a), d.hexToString(p));
                        var f = d.des(d.hexToString(a), d.hexToString(p), 1),
                          w = d.stringToHex(f);
                        console.log("DES Test: " + w);
                        var b = [n, r, i, c],
                          v = x(e);
                        b = m(b) + "0000" + v, console.log("temp_msg2222", b), b = _(b);
                        for (var y = 0, I = 0; I < b.length; I++) y += b[I];
                        for (var k = 255 & y, S = _(x(b)), D = S[0], T = 1; T < S.length; T++) D ^= S[T];
                        o = [165, 22, 2, n, r, i, c, 0, 0, k, D, 2, parseInt(w.substr(0, 2), 16), parseInt(w.substr(2, 2), 16), parseInt(w.substr(4, 2), 16), parseInt(w.substr(6, 2), 16), parseInt(w.substr(8, 2), 16), parseInt(w.substr(10, 2), 16), parseInt(w.substr(12, 2), 16), parseInt(w.substr(14, 2), 16), s, 90];
                        for (var C = 0; C < o.length; C++) s += o[C];
                        return o[o.length - 2] = ~(255 & s) - 1 + 1, console.log("instruct222333ee", m(o)), o
                      }(_(B), "BY8" + t.data.curItem.sn, k);
                      console.log("cardbody_buff", m(A)), t.WriteBLECharacteristicValue(A)
                    }
                    t.data.communicate_key = ""
                  }
                  if (a.length > 2 && t.data.time_sync_data.length > 0 && "5a" == b && t.data.temp_comm_key_key) {
                    t.data.time_sync_data += a, console.log("time_sync_data2222", t.data.time_sync_data);
                    v = t.data.time_sync_data.substr(24, 16);
                    console.log("get msgBody2222", v);
                    y = d.des(d.hexToString(t.data.temp_comm_key_key), d.hexToString(v), 0), I = d.stringToHex(y);
                    console.log("comm_key33=", I), "0000000000000000" == I && (console.log("设置同步时钟成功"), t.data.has_get_com_key = !1), t.data.time_sync_data = "", wx.closeBLEConnection({
                      deviceId: t.data.curItem.deviceId,
                      success: function(e) {}
                    })
                  }
                  if (a.length > 2 && t.data.card_sync_data.length > 0 && "5a" == b && t.data.temp_comm_key_key) {
                    t.data.card_sync_data += a, console.log("card_set_sync_data2222", t.data.card_sync_data);
                    v = t.data.card_sync_data.substr(24, 16);
                    console.log("get msgBody2222", v);
                    y = d.des(d.hexToString(t.data.temp_comm_key_key), d.hexToString(v), 0), I = d.stringToHex(y);
                    console.log("comm_key2233=", I), "0000000000000000" == I && (console.log("设置黑白名单成功"), t.data.has_get_com_key = !1, t.data.black_card_list.length > 0 && (t.data.black_card_list.splice(t.data.black_card_index, 1), console.log("更新后黑白名单", t.data.black_card_list), t.update_black_list_card_data(t.data.black_card_id))), t.data.card_sync_data = "", wx.closeBLEConnection({
                      deviceId: t.data.curItem.deviceId,
                      success: function(e) {}
                    })
                  }
                  40 == a.length && ("87" == a.substr(18, 2) && (t.data.openResJudge || (t.data.openResJudge = !0, t.isOpenDoorSuccess(a, t.data.curItem.productKey), setTimeout((function() {
                    t.data.curItem.expireDays < 30 && wx.showModal({
                      title: "提示",
                      content: "此门禁快到期了，请及时办理续期。",
                      showCancel: !1,
                      success: function(e) {}
                    })
                  }), 2e3))))
                }))
              },
              fail: function(e) {
                t.showErrorMsg(e)
              }
            })
          },
          fail: function(e) {
            t.showErrorMsg(e)
          }
        })
      },
      fail: function(e) {
        t.showErrorMsg(e)
      }
    })
  },
  WriteBLECharacteristicValue: function(e) {
    var t = this,
      a = new Uint8Array(e.length);
    e.forEach((function(e, t) {
      return a[t] = e
    })), wx.writeBLECharacteristicValue({
      writeType: "write",
      deviceId: t.data.curItem.deviceId,
      serviceId: t.data.curItem.serviceId,
      characteristicId: t.data.curItem.characteristicId,
      value: a.buffer,
      success: function(e) {
        console.log("success22222", e)
      },
      fail: function(e) {
        console.log("err33333", e), -1 != e.errMsg.indexOf("Writing is not permitted") && t.data.is_ios && wx.showModal({
          title: "提示",
          content: "本次操作需要重启手机设置的蓝牙。步骤：打开手机【设置】，找到【蓝牙】选项并点击进去，重启蓝牙",
          showCancel: !1,
          success: function(e) {}
        })
      }
    })
  },
  isOpenDoorSuccess: function(e, t) {
    var a = this,
      o = e.substr(20, 16),
      s = d.des(d.hexToString(t), d.hexToString(o), 0),
      n = d.stringToHex(s),
      r = "",
      i = 1;
    if (16 == n.length) {
      var c = n.substr(4, 2);
      "00" == c ? (r = "开门成功", i = 0) : "02" == c ? (r = "门已打开", i = 0) : r = "开门密码无效"
    } else r = "解密失败";
    a.sendBleRecord(i), null != a.data.timer && (clearInterval(a.data.timer), a.data.timer = null, a.data.seconds = 0), wx.showToast({
      title: r
    })
  },
  sendBleRecord: (s = l(c().mark((function e(t) {
    var a, o, s, n, r, i, l, d, g, p, _, f, m, w, x, b;
    return c().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (a = this, (o = {}).openType = 5, o.guardId = a.data.curItem.id, o.guardCode = a.data.curItem.code, o.guardName = a.data.curItem.name, o.companyId = a.data.curItem.companyId, o.openResult = t, a.data.latitude && (o.latitude = a.data.latitude, o.longitude = a.data.longitude, o.openid = h.globalData.openid), s = new Date, n = s.getFullYear(), r = s.getMonth() + 1, i = s.getDate(), l = s.getHours(), d = s.getMinutes(), g = s.getSeconds(), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), l < 10 && (l = "0" + l), d < 10 && (d = "0" + d), g < 10 && (g = "0" + g), o.extryExitDate = n + "-" + r + "-" + i, o.extryExitTime = l + ":" + d + ":" + g, o.extryExitId = null, o.extryExitName = a.data.username, o.extryExitCard = a.data.id_card, o.CardNum = "", console.log("record 1754451756017", o), "" != a.data.access_token && null != a.data.access_token && null != a.data.access_token) {
            e.next = 32;
            break
          }
          return "" != (p = wx.getStorageSync("bleRecord")) && null != p && null != p ? p.length < 50 && (p.push(o), wx.setStorageSync("bleRecord", p)) : ((_ = []).push(o), wx.setStorageSync("bleRecord", _)), e.abrupt("return");
        case 32:
          if (f = [], a.data.latitude)
            for (m in a.data.bluetooth_device_list_obj) 0 == a.data.bluetooth_device_list_obj[m].isUpload && f.push(a.data.bluetooth_device_list_obj[m]);
          return w = JSON.stringify(o), e.next = 37, u.encrypt_rsa_fun(w);
        case 37:
          x = e.sent, b = JSON.stringify({
            key: x,
            bluetooth_device_data: f
          }), wx.request({
            url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/upload_bluetooth_open_record",
            method: "POST",
            data: b,
            header: {
              "Content-type": "application/json",
              cloud_shield_token: a.data.access_token
            },
            success: function(e) {
              if (console.log("upload record res", e), "000000000000" == e.data[0].resp_code) try {
                for (var t = 0; t < f.length; t++) {
                  var o = f[t].deviceId;
                  a.data.bluetooth_device_list_obj[o].isUpload = 1
                }
                wx.setStorageSync("bluetoothscandata", a.data.bluetooth_device_list_obj)
              } catch (e) {
                console.log("upload_bluetooth_open_record11 err", e)
              }
            },
            fail: function(e) {}
          });
        case 41:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(e) {
    return s.apply(this, arguments)
  }),
  judgeOpenTime: function() {
    var e = this;
    if (console.log("judgeOpenTime"), this.data.seconds >= 8) {
      console.log("开门到时间了"), null != this.data.timer && (console.log("开门到时间了233"), clearInterval(this.data.timer), this.data.timer = null, this.data.seconds = 0), wx.hideLoading();
      var t = "搜不到锁蓝牙信号，请确认已打开手机的位置信息(gps)、没连接额外设备（如蓝牙耳机），重启下蓝牙开关，然后靠近蓝牙锁，再重试";
      this.data.is_ios && (t = "搜不到锁蓝牙信号，请确认手机蓝牙没连接额外设备（如蓝牙耳机），手机重启下蓝牙开关，然后靠近蓝牙锁，再重试"), wx.showModal({
        title: "提示",
        content: t,
        confirmText: "权限检测",
        showCancel: !0,
        complete: function(t) {
          t.cancel, t.confirm && wx.navigateTo({
            url: "./check_permissions?platform=" + e.data.platform
          })
        }
      })
    } else this.data.seconds++
  },
  update_black_list_card_data: function(e) {
    var t = this;
    return l(c().mark((function a() {
      var o, s, n, r, i;
      return c().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if ("" != (o = t).data.access_token && null != o.data.access_token && null != o.data.access_token) {
              a.next = 3;
              break
            }
            return a.abrupt("return");
          case 3:
            return s = {
              black_card_id: e,
              phone: o.data.phone
            }, n = JSON.stringify(s), a.next = 7, u.encrypt_rsa_fun(n);
          case 7:
            r = a.sent, i = JSON.stringify({
              key: r
            }), wx.showLoading(), "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/update_black_card_data", wx.request({
              url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/update_black_card_data",
              method: "POST",
              data: i,
              header: {
                "Content-type": "application/json",
                cloud_shield_token: o.data.access_token
              },
              success: function(e) {
                wx.hideLoading(), e.data[0].resp_code
              },
              fail: function(e) {}
            });
          case 12:
          case "end":
            return a.stop()
        }
      }), a)
    })))()
  },
  get_list: (o = l(c().mark((function e() {
    var t, a, o, s, n;
    return c().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if ("" != (t = this).data.access_token && null != t.data.access_token && null != t.data.access_token) {
            e.next = 4;
            break
          }
          return wx.stopPullDownRefresh(), e.abrupt("return");
        case 4:
          return this.data.cur_page = 1, a = {
            phone: t.data.phone
          }, o = JSON.stringify(a), e.next = 9, u.encrypt_rsa_fun(o);
        case 9:
          s = e.sent, n = JSON.stringify({
            key: s
          }), wx.request({
            url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/get_guard_list_by_phone",
            method: "POST",
            data: n,
            header: {
              "Content-type": "application/json",
              cloud_shield_token: t.data.access_token
            },
            success: function(e) {
              if (wx.stopPullDownRefresh(), wx.hideLoading(), e.data[0].now_date_str && (p = e.data[0].now_date_str), "000000000000" == e.data[0].resp_code) {
                var a = e.data[0].black_card_list;
                if (a && (t.data.black_card_list = a), t.data.dataList = [], t.data.tempDataList = [], e.data[0].data_list.length > 0) {
                  var o = [];
                  if (e.data[0].data_list.length <= 100)
                    for (var s = 0; s < e.data[0].data_list.length; s++)(n = e.data[0].data_list[s]).expireDays = t.getDaysBetween(n.limitTime), (r = {}).name = n.name, r.address = n.address, r.id = n.id, r.code = n.code, r.companyId = n.companyId, r.bluetoothName = n.bluetoothName, r.limitTime = n.limitTime, r.productKey = n.productKey, r.expireDays = n.expireDays, o.push(r);
                  else
                    for (s = 0; s < 100; s++) {
                      var n, r;
                      (n = e.data[0].data_list[s]).expireDays = t.getDaysBetween(n.limitTime), (r = {}).name = n.name, r.address = n.address, r.id = n.id, r.code = n.code, r.companyId = n.companyId, r.bluetoothName = n.bluetoothName, r.limitTime = n.limitTime, r.productKey = n.productKey, r.expireDays = n.expireDays, o.push(r)
                    }
                  wx.setStorage({
                    key: "guards",
                    data: o
                  });
                  for (var i = 0; i < e.data[0].data_list.length; i++) {
                    var c = e.data[0].data_list[i];
                    c.expireDays = t.getDaysBetween(c.limitTime), t.data.tempDataList.push(c)
                  }
                  var l = t.data.tempDataList.length,
                    d = t.data.per_page;
                  if (l > d) {
                    var u = t.data.tempDataList.length,
                      h = u % d == 0 ? u / d : Math.floor(u / d) + 1,
                      g = t.data.tempDataList.slice(0, d);
                    t.setData({
                      dataList: g,
                      show_length: l,
                      total_page: h,
                      total_rec: u
                    })
                  } else t.setData({
                    dataList: t.data.tempDataList,
                    show_length: l
                  })
                } else wx.setStorage({
                  key: "guards",
                  data: []
                }), t.data.tempDataList = [], t.setData({
                  dataList: []
                })
              } else "1697714049937" == e.data[0].resp_code ? (wx.setStorage({
                key: "guards",
                data: []
              }), wx.showToast({
                title: e.data[0].resp_msg
              })) : "-00053003168" == e.data[0].resp_code ? t.f_001_from_third_part() : wx.showToast({
                title: e.data[0].resp_msg
              })
            },
            fail: function(e) {
              wx.stopPullDownRefresh(), wx.hideLoading(), wx.showToast({
                title: "请检查网络"
              })
            }
          });
        case 13:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function() {
    return o.apply(this, arguments)
  }),
  getDaysBetween: function(e) {
    var t = this.data.gohome_today_date;
    if ("" == t || null == t || null == t || "null" == t || "undefined" == t) {
      var a = new Date,
        o = a.getFullYear(),
        s = a.getMonth() + 1,
        n = a.getDate();
      s < 10 && (s = "0" + s), n < 10 && (n = "0" + n), t = o + "/" + s + "/" + n
    }
    var r = new Date(t),
      i = (Date.parse(e) - r) / 864e5 - 1;
    return i < 0 && i > -1 ? -1 : Math.ceil(i)
  },
  handleSearch: function(e) {
    this.setData({
      search: e.detail.value
    })
  },
  doneSearch: function() {
    if (wx.hideKeyboard(), this.data.cur_page = 1, this.data.tempDataList.length > 0 && this.data.search.length > 0) {
      var e = d.findArrayString(this.data.search, this.data.tempDataList);
      if (e.length > this.data.per_page) {
        var t = e.slice(this.data.per_page * (this.data.cur_page - 1), this.data.per_page * this.data.cur_page);
        this.setData({
          dataList: t
        })
      } else this.setData({
        dataList: e
      })
    } else if (this.data.tempDataList.length > this.data.per_page) {
      var a = this.data.tempDataList.slice(this.data.per_page * (this.data.cur_page - 1), this.data.per_page * this.data.cur_page);
      this.setData({
        dataList: a
      })
    } else this.setData({
      dataList: this.data.tempDataList
    })
  },
  clearSearch: function() {
    console.log("clear search", this.data.search), this.setData({
      search: ""
    }), this.data.cur_page = 1
  },
  recordDataProcessingCommandByMessageData: function(e, t) {
    if ("0102030405060708", "success" != e) {
      var a = e.substr(0, 2).toUpperCase(),
        o = e.substr(e.length - 2, 2).toUpperCase();
      if ("A5" != a && this.data.bleRecord.push(e), "5A" == o) {
        for (var s = "", n = 0; n < this.data.bleRecord.length; n++) s += this.data.bleRecord[n];
        if (console.log("lastOnelastOne", s), s.length > 0) {
          var r = s.substr(6, 8),
            i = s.substr(24, s.length - 28),
            c = d.des(d.hexToString("0102030405060708"), d.hexToString(i), 0),
            l = d.stringToHex(c),
            u = s.substr(4, 2),
            h = s.substr(14, 4),
            g = s.substr(2, 2),
            p = (d.hex2int(g) - 14) / 8;
          this.data.bleRecord = [], this.recordDataProcessing(r, l, u, h, p)
        }
      }
    } else this.data.bleRecord = []
  },
  recordDataProcessing: function(e, t, a, o, s) {
    for (var n = 0, r = "", i = "", c = "", l = 0; l < .5 * t.length; l++) {
      if (l % 8 == 0) {
        console.log("i%8 == 0");
        var u = t.substr(2 * l, 2),
          h = d.hex2int(u),
          g = (f = d.binary(h, 8)).substr(f.length - 4, 4) - 0;
        c = h = parseInt(g, 2)
      }
      if (l % 8 == 1) {
        console.log("i%8 == 1");
        var p = null;
        p = 1 == l ? t.substr(0, 2) : t.substr(2 * l - 2, 2);
        h = d.hex2int(p);
        var _ = (f = d.binary(h, 8)).substr(0, 2) + t.substr(2 * l, 6);
        n = d.hex2int(_)
      }
      if (l % 8 == 4) {
        console.log("i%8 == 4");
        var f, m = t.substr(2 * l, 8),
          w = (h = d.hex2int(m), (f = d.binary(h, 32)).substr(0, 2) + f.substr(8, 2)),
          x = 1 == parseInt(f.substr(2, 6), 2).toString().length ? "0" + parseInt(f.substr(2, 6), 2).toString() : parseInt(f.substr(2, 6), 2).toString(),
          b = parseInt(w, 2).toString();
        r = "20" + x + "-" + (b = 1 == b.length ? "0" + b : b) + "-" + (1 == parseInt(f.substr(19, 5), 2).toString().length ? "0" + parseInt(f.substr(19, 5), 2).toString() : parseInt(f.substr(19, 5), 2).toString());
        var v = f.substr(16, 3) + f.substr(24, 3),
          y = 1 == parseInt(v, 2).toString().length ? "0" + parseInt(v, 2).toString() : parseInt(v, 2).toString();
        i = (1 == parseInt(f.substr(27, 5), 2).toString().length ? "0" + parseInt(f.substr(27, 5), 2).toString() : parseInt(f.substr(27, 5), 2).toString()) + ":" + (1 == parseInt(f.substr(10, 6), 2).toString().length ? "0" + parseInt(f.substr(10, 6), 2).toString() : parseInt(f.substr(10, 6), 2).toString()) + ":" + y, 0 == n ? console.log("卡号ID:手机蓝牙;时间date:" + r + "--time:" + i) : console.log("号ID：：" + n + ";时间date:" + r + "--time:" + i)
      }
      console.log("sssss:", l % 7, r.substr(5, 2), c), l % 7 == 0 && 0 != l && "00" != r.substr(5, 2) && "0" == c.toString() && 0 != n && "2000-00-00" != r && (console.log("开始发送开锁记录"), this.decimalSystemStrToRecord(n, s, r, i, parseInt(l / 7), e, o))
    }
  },
  decimalSystemStrToRecord: (a = l(c().mark((function e(t, a, o, s, n, r, i) {
    var l, h, g, p, _, f, m, w;
    return c().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (l = this, h = {}, g = this.data.curItem, h.openType = 2, h.guardId = g.id, h.guardCode = g.code, h.guardName = g.name, h.companyId = g.companyId, h.extryExitDate = o, h.extryExitTime = s, h.extryExitId = "", h.openResult = 0, h.extryExitName = d.supplement(t, 10), h.extryExitCard = "", h.CardNum = d.supplement(t, 10), console.log("record kakaka:", h), "" != l.data.access_token && null != l.data.access_token && null != l.data.access_token) {
            e.next = 20;
            break
          }
          return "" != (p = wx.getStorageSync("bleRecord")) && null != p && null != p ? p.length < 50 && (p.push(h), wx.setStorageSync("bleRecord", p)) : ((_ = []).push(h), wx.setStorageSync("bleRecord", _)), e.abrupt("return");
        case 20:
          return f = JSON.stringify(h), e.next = 23, u.encrypt_rsa_fun(f);
        case 23:
          m = e.sent, w = JSON.stringify({
            key: m
          }), wx.request({
            url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/upload_bluetooth_open_record",
            method: "POST",
            data: w,
            header: {
              "Content-type": "application/json",
              cloud_shield_token: l.data.access_token
            },
            success: function(e) {
              console.log("upload record card res", e), e.data[0].resp_code
            },
            fail: function(e) {}
          });
        case 27:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(e, t, o, s, n, r, i) {
    return a.apply(this, arguments)
  }),
  showErrorMsg: function(e) {
    var t = this;
    console.log("errCode222223333", e);
    var a = "确定";
    wx.openAppAuthorizeSetting && (a = "去设置"), wx.hideLoading();
    var o = e.errCode;
    if (1e4 == o || 10001 == o || null == o || null == o) {
      var s = "";
      return e.errMsg && (s = e.errMsg), void(-1 != s.indexOf("system permission denied") || -1 != s.indexOf("systempermission denied") ? this.data.is_ios ? wx.showModal({
        title: "提示",
        content: "请打开手机设置，找到微信并点击进去，打开【蓝牙】，点击【去设置】，再试试(" + e.errMsg + ")",
        showCancel: !0,
        confirmText: a,
        complete: function(e) {
          e.cancel, e.confirm && "去设置" == a && wx.openAppAuthorizeSetting({
            success: function(e) {
              console.log(e)
            }
          })
        }
      }) : wx.showModal({
        title: "提示",
        content: "请按以下步骤开启微信的【附近设备】权限：手机设置->应用管理->微信->权限管理->附近设备->允许(" + e.errMsg + ")",
        showCancel: !0,
        confirmText: a,
        complete: function(e) {
          e.cancel, e.confirm && "去设置" == a && wx.openAppAuthorizeSetting({
            success: function(e) {
              console.log(e)
            }
          })
        }
      }) : wx.showModal({
        title: "提示",
        content: "请检查手机蓝牙或者微信的蓝牙权限是否已打开。再确认下是否连接了额外设备（如蓝牙耳机），重启手机蓝牙，再试试(" + e.errMsg + ")",
        showCancel: !0,
        confirmText: "确定",
        complete: function(e) {
          e.cancel, e.confirm && wx.getSetting({
            withSubscriptions: !0,
            success: function(e) {
              0 == e.authSetting["scope.bluetooth"] ? wx.openSetting({
                withSubscriptions: !0
              }) : t.data.is_ios || wx.openSystemBluetoothSetting && wx.openSystemBluetoothSetting({
                success: function(e) {
                  console.log(e)
                }
              })
            }
          })
        }
      }))
    }
    if (-1 == e.errMsg.indexOf("location permission is denied"))
      if (-1 == e.errMsg.indexOf("permission not grant") && -1 == e.errMsg.indexOf("permission notgrant"))
        if (this.data.try_cnt++, this.data.try_cnt <= 2) {
          t = this;
          wx.closeBLEConnection({
            deviceId: t.data.curItem.deviceId,
            complete: function() {
              wx.closeBluetoothAdapter({
                complete: function() {
                  setTimeout((function() {
                    wx.openBluetoothAdapter({
                      success: function() {
                        t.data.curItem.deviceId ? t.connectDevice(t.data.curItem.deviceId) : t.search_openDoor()
                      },
                      fail: function() {
                        t.data.try_cnt = 3, t.showErrorMsg({
                          errCode: -1,
                          errMsg: "重试时蓝牙适配器打开失败"
                        })
                      }
                    })
                  }), 500)
                }
              })
            }
          })
        } else switch (this.data.try_cnt = 0, wx.hideLoading(), null != this.data.timer && (clearInterval(this.data.timer), this.data.timer = null, this.data.seconds = 0), o) {
          case -1:
            wx.showToast({
              title: "已连接，重启蓝牙，再点击开门试试(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 3e3
            });
            break;
          case 1e4:
            wx.showToast({
              title: "未初始化蓝牙(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 2e3
            });
            break;
          case 10001:
            wx.showToast({
              title: "当前蓝牙不可用(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 2e3
            });
            break;
          case 10002:
            wx.showToast({
              title: "没有找到指定设备，请重试(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 2e3
            });
            break;
          case 10003:
            wx.showModal({
              title: "提示",
              content: "连接失败，确认下是否连接了额外设备（如蓝牙耳机），重启手机蓝牙，再试试(" + e.errMsg + "--" + e.errCode + ")",
              showCancel: !1,
              success: function(e) {}
            });
            break;
          case 10004:
            wx.showToast({
              title: "没有找到指定服务，请重试(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 2e3
            });
            break;
          case 10005:
            wx.showToast({
              title: "没有找到指定特征，请重试(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 2e3
            });
            break;
          case 10006:
            wx.showToast({
              title: "当前连接已断开，请重试(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 2e3
            });
            break;
          case 10007:
            wx.showToast({
              title: "当前特征不支持此操作，请重试(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 2e3
            });
            break;
          case 10009:
            wx.showToast({
              title: "系统版本低于 4.3 不支持 BLE(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 2e3
            });
            break;
          case 10012:
            wx.showToast({
              title: "连接超时，请重试(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 2e3
            });
            break;
          case 10013:
            wx.showToast({
              title: "连接 deviceId 为空或者是格式不正确(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 2e3
            });
            break;
          default:
            wx.showToast({
              title: "请关了手机蓝牙再重新打开手机蓝牙，再试试(" + e.errMsg + "--" + e.errCode + ")",
              icon: "success",
              duration: 2e3
            })
        } else wx.showModal({
          title: "提示",
          content: "请按以下步骤开启微信的【设备发现和连接】权限：手机设置->应用管理->微信->权限管理->设备发现和连接->允许(" + e.errMsg + ")",
          showCancel: !0,
          confirmText: a,
          complete: function(e) {
            e.cancel, e.confirm && "去设置" == a && wx.openAppAuthorizeSetting({
              success: function(e) {
                console.log(e)
              }
            })
          }
        });
    else wx.showModal({
      title: "提示",
      content: "请按以下步骤开启微信的【位置信息】权限：手机设置->应用管理->微信->权限管理->位置信息->允许(" + e.errMsg + ")",
      showCancel: !0,
      confirmText: a,
      complete: function(e) {
        e.cancel, e.confirm && "去设置" == a && wx.openAppAuthorizeSetting({
          success: function(e) {
            console.log(e)
          }
        })
      }
    })
  },
  f_001_from_third_part: (t = l(c().mark((function e() {
    var t, a, o, s, n, r, i, l;
    return c().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (console.log("f_001_from_third_part"), t = this, a = this, wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), o = wx.getStorageSync("openid"), s = wx.getStorageSync("unionid"), "" == o || null == o || null == o || "[object Undefined]" == o || "" == s || null == s || null == s || "[object Undefined]" == s) {
            e.next = 12;
            break
          }
          h.globalData.unionid = s, h.globalData.openid = o, e.next = 37;
          break;
        case 12:
          return e.prev = 12, e.next = 15, g.wx_login();
        case 15:
          if (n = e.sent, console.log("login_result:", n), "000000000000" != n.data[0].resp_code) {
            e.next = 24;
            break
          }
          h.globalData.openid = n.data[1].openid, h.globalData.unionid = n.data[1].unionid, wx.setStorageSync("openid", h.globalData.openid), wx.setStorageSync("unionid", h.globalData.unionid), e.next = 28;
          break;
        case 24:
          return (r = {}).errMsg = n.data[0].resp_msg + "(" + n.data[0].resp_code + ")", a.f_005_enter_go_home_by_cache(r), e.abrupt("return");
        case 28:
          e.next = 37;
          break;
        case 30:
          return e.prev = 30, e.t0 = e.catch(12), console.log("1726106897122 e:", e.t0), (i = {}).errMsg = "" + JSON.stringify(e.t0), a.f_005_enter_go_home_by_cache(i), e.abrupt("return");
        case 37:
          l = {
            openId: h.globalData.openid,
            oper_type: "GO_HOME"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: l,
            success: function(e) {
              if (console.log("检查进度结果", e), 200 != e.statusCode) {
                var o = {};
                return o.errMsg = "网络异常statusCode:" + e.statusCode, void a.f_005_enter_go_home_by_cache(o)
              }
              if ("000000000003" != e.data[0].resp_code) {
                if ("000000000001" == e.data[0].resp_code || "000000000002" == e.data[0].resp_code || "000000000004" == e.data[0].resp_code) return wx.hideLoading(), h.globalData.back_url = "INDEX", void wx.showModal({
                  title: "平安回家",
                  content: "体验平安回家开门功能，需要您实名注册。",
                  showCancel: !1,
                  cancelText: "暂不注册",
                  confirmText: "现在注册",
                  success: function(e) {
                    1 == e.confirm && wx.redirectTo({
                      url: "../../page/component/pages/form_ocr_01/form"
                    })
                  }
                });
                var s = {};
                return s.errMsg = e.data[0].resp_msg + "(" + e.data[0].resp_code + ")", void a.f_005_enter_go_home_by_cache(s)
              }
              var n = e.data[0].access_token;
              h.globalData.access_token = n, t.data.gohome_today_date = e.data[0].today_date;
              var r = wx.getStorageSync("goHomeObj"),
                i = "";
              "" != r && null != r && null != r && (i = r.login_token), wx.request({
                url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/go_home_service_login",
                method: "POST",
                data: {
                  openId: h.globalData.openid,
                  login_token: i
                },
                header: {
                  "Content-type": "application/json",
                  cloud_shield_token: n
                },
                success: function(e) {
                  if (wx.hideLoading(), console.log("f_001_from_third_part go_home_login", e), "000000000000" != e.data[0].resp_code) {
                    if ("" != (s = wx.getStorageSync("guards")) && null != s && null != s && s.length > 0) {
                      for (var a = 0; a < s.length; a++) {
                        var o = s[a];
                        null != o.limitTime && null != o.limitTime && "" != o.limitTime && (o.expireDays = t.getDaysBetween(o.limitTime))
                      }
                      t.data.tempDataList = s, t.setData({
                        dataList: s,
                        show_length: s.length
                      })
                    }
                    t.get_list()
                  } else {
                    var s, n = e.data[0].phone,
                      r = e.data[0].name,
                      i = e.data[0].id_card,
                      c = {
                        phone: n,
                        name: r,
                        id_card: i,
                        login_token: e.data[0].token
                      };
                    if (wx.setStorageSync("goHomeObj", c), t.data.phone = n, t.data.username = r, t.data.id_card = i, t.data.access_token = h.globalData.access_token, "" != (s = wx.getStorageSync("guards")) && null != s && null != s && s.length > 0) {
                      for (var l = 0; l < s.length; l++) {
                        var d = s[l];
                        null != d.limitTime && null != d.limitTime && "" != d.limitTime && (d.expireDays = t.getDaysBetween(d.limitTime))
                      }
                      t.data.tempDataList = s, t.setData({
                        dataList: s,
                        show_length: s.length
                      })
                    }
                    t.get_list()
                  }
                },
                fail: function(e) {
                  wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: e
                  })
                }
              })
            },
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e);
              var t = e.errMsg; - 1 == (t += "").indexOf("timeout") && wx.showModal({
                title: "提示",
                content: "获取状态异常(1731483571706)," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 38:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [12, 30]
    ])
  }))), function() {
    return t.apply(this, arguments)
  }),
  unbind_phone_guard: function() {
    var e = this;
    wx.showModal({
      title: "提示",
      content: "您确定要退出登录吗？",
      showCancel: !0,
      cancelText: "取消",
      confirmText: "确定",
      success: function(t) {
        1 == t.confirm && e.confirm_unbind_phone_guard()
      }
    })
  },
  confirm_unbind_phone_guard: function() {
    var e = this;
    return l(c().mark((function t() {
      var a, o, s, n, r;
      return c().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if ("" != (a = e).data.access_token && null != a.data.access_token && null != a.data.access_token) {
              t.next = 3;
              break
            }
            return t.abrupt("return");
          case 3:
            return o = {
              phone: a.data.phone
            }, s = JSON.stringify(o), t.next = 7, u.encrypt_rsa_fun(s);
          case 7:
            n = t.sent, r = JSON.stringify({
              key: n
            }), wx.showLoading(), "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/unbind_gohome_device", wx.request({
              url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/unbind_gohome_device",
              method: "POST",
              data: r,
              header: {
                "Content-type": "application/json",
                cloud_shield_token: a.data.access_token
              },
              success: function(e) {
                wx.hideLoading(), "000000000000" == e.data[0].resp_code ? (wx.showModal({
                  title: "提示",
                  content: "退出登录成功",
                  showCancel: !1
                }), wx.removeStorage({
                  key: "goHomeObj",
                  success: function(e) {
                    console.log(e)
                  }
                }), wx.removeStorage({
                  key: "guards",
                  success: function(e) {
                    console.log(e)
                  }
                }), setTimeout((function(e) {
                  wx.navigateBack()
                }), 1500)) : wx.showModal({
                  title: "提示",
                  content: e.data[0].resp_msg,
                  showCancel: !1
                })
              },
              fail: function(e) {
                wx.showModal({
                  title: "提示",
                  content: "网络错误",
                  showCancel: !1
                })
              }
            });
          case 12:
          case "end":
            return t.stop()
        }
      }), t)
    })))()
  },
  go_gd_code: (e = l(c().mark((function e() {
    var t, a, o, s;
    return c().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (console.log("go_gd_code"), wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), t = wx.getStorageSync("openid"), a = wx.getStorageSync("unionid"), "" == t || null == t || null == t || "[object Undefined]" == t || "" == a || null == a || null == a || "[object Undefined]" == a) {
            e.next = 10;
            break
          }
          h.globalData.unionid = a, h.globalData.openid = t, e.next = 31;
          break;
        case 10:
          return e.prev = 10, e.next = 13, g.wx_login();
        case 13:
          if (o = e.sent, console.log("login_result:", o), "000000000000" != o.data[0].resp_code) {
            e.next = 22;
            break
          }
          h.globalData.openid = o.data[1].openid, h.globalData.unionid = o.data[1].unionid, wx.setStorageSync("openid", h.globalData.openid), wx.setStorageSync("unionid", h.globalData.unionid), e.next = 24;
          break;
        case 22:
          return wx.showModal({
            title: "提示",
            content: o.data[0].resp_msg + "(" + o.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 24:
          e.next = 31;
          break;
        case 26:
          return e.prev = 26, e.t0 = e.catch(10), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 31:
          s = {
            openId: h.globalData.openid,
            oper_type: "INDEX"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: s,
            success: function() {
              var e = l(c().mark((function e(t) {
                var a, o, s, n, r, i, l;
                return c().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", t), "000000000003" != t.data[0].resp_code) {
                        e.next = 41;
                        break
                      }
                      return a = t.data[0].access_token, h.globalData.access_token = a, e.prev = 5, wx.showLoading({
                        title: "请稍等...",
                        mask: !0
                      }), o = {
                        buzi_type: "show_yjm_code"
                      }, e.next = 11, g.wx_request("https://xcx.pinganbaiyun.cn/health_passport/api_004_motorcycles/sv_001_get_gd_security_authcode", o);
                    case 11:
                      if (s = e.sent, wx.hideLoading(), "000000000000" != s.data[0].resp_code) {
                        e.next = 25;
                        break
                      }
                      return n = s.data[0].code, r = "pages/common/thirdPartyRouter/thirdPartyRouter?feat=qrCode&refer=paby&authcode=" + n, console.log("gd_security_path", r), i = {}, null == h.globalData.SYSTEMINFO ? (i = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", i)) : i = h.globalData.SYSTEMINFO, l = g.compareVersion(i.SDKVersion, "2.20.1"), console.log("diff_version_002", l), wx.openEmbeddedMiniProgram({
                        appId: "wx9f75b01dcb4b1a79",
                        path: r,
                        allowFullScreen: !1,
                        extraData: {},
                        envVersion: "release",
                        success: function(e) {
                          console.log("navigateToMiniProgram res", e), wx.setStorageSync("YJM_OPNED", "1")
                        }
                      }), e.abrupt("return");
                    case 25:
                      if ("-00000350001" != s.data[0].resp_code) {
                        e.next = 29;
                        break
                      }
                      wx.showModal({
                        title: "提示",
                        content: "请您再次亮码",
                        showCancel: !1,
                        success: function(e) {}
                      }), e.next = 31;
                      break;
                    case 29:
                      return wx.showModal({
                        title: "粤居码亮码提示",
                        content: "系统异常，请稍后再试！",
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 31:
                      e.next = 39;
                      break;
                    case 33:
                      return e.prev = 33, e.t0 = e.catch(5), wx.hideLoading(), console.log("e:", e.t0), wx.showModal({
                        title: "提示",
                        content: "" + JSON.stringify(e.t0),
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 39:
                      e.next = 44;
                      break;
                    case 41:
                      return h.globalData.back_url = "INDEX", wx.showModal({
                        title: "平安码丨平安白云",
                        content: "粤居码亮码功能，需要您实名注册。",
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          1 == e.confirm && wx.navigateTo({
                            url: "../../../component/pages/form_ocr_01/form"
                          })
                        }
                      }), e.abrupt("return");
                    case 44:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [5, 33]
                ])
              })));
              return function(t) {
                return e.apply(this, arguments)
              }
            }(),
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 32:
        case "end":
          return e.stop()
      }
    }), e, null, [
      [10, 26]
    ])
  }))), function() {
    return e.apply(this, arguments)
  }),
  sv_001_upload_limit_time: function(e) {
    var t, a = {
      expired_data: e
    };
    wx.request({
      url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/sv_001_upload_limit_time",
      method: "POST",
      dataType: "json",
      data: a,
      header: {
        "Content-type": "application/json",
        cloud_shield_token: this.data.access_token
      },
      success: (t = l(c().mark((function e(t) {
        return c().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
            case "end":
              return e.stop()
          }
        }), e)
      }))), function(e) {
        return t.apply(this, arguments)
      }),
      fail: function(e) {
        console.log("sv_001_upload_limit fail", e)
      }
    })
  },
  service_click: function(e) {
    var t = this;
    return l(c().mark((function a() {
      var o, s, n, r, i, l;
      return c().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            return o = t, s = e.currentTarget.dataset.item, n = {
              bluetoothName: s.bluetoothName
            }, r = JSON.stringify(n), a.next = 6, u.encrypt_rsa_fun(r);
          case 6:
            i = a.sent, l = JSON.stringify({
              key: i
            }), wx.showLoading(), "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/bluetooth_guard_call", wx.request({
              url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/bluetooth_guard_call",
              method: "POST",
              data: l,
              header: {
                "Content-type": "application/json",
                cloud_shield_token: o.data.access_token
              },
              success: function(e) {
                if (wx.hideLoading(), "000000000000" == e.data[0].resp_code) {
                  var t = e.data[0].service_phone;
                  wx.makePhoneCall({
                    phoneNumber: t,
                    success: function() {
                      console.log("拨打电话成功！")
                    },
                    fail: function() {
                      console.log("拨打电话失败！")
                    }
                  })
                } else wx.showModal({
                  title: "提示",
                  content: e.data[0].resp_msg,
                  showCancel: !1
                })
              },
              fail: function(e) {
                wx.hideLoading(), wx.showModal({
                  title: "提示",
                  content: "网络错误",
                  showCancel: !1
                })
              }
            });
          case 11:
          case "end":
            return a.stop()
        }
      }), a)
    })))()
  },
  f_005_enter_go_home_by_cache: function(e) {
    wx.hideLoading();
    var t = wx.getStorageSync("guards");
    if ("" != t && null != t && null != t && t.length > 0) {
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        null != o.limitTime && null != o.limitTime && "" != o.limitTime && (o.expireDays = this.getDaysBetween(o.limitTime))
      }
      return this.data.tempDataList = t, void this.setData({
        dataList: t,
        show_length: t.length
      })
    }
    null != e && null != e && "object" == i(e) && wx.showModal({
      title: "提示",
      content: "获取状态异常(1726104973272):" + JSON.stringify(e),
      showCancel: !1
    })
  }
});