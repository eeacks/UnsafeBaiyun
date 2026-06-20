var e, n = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator");
(e = require("./regenerator-runtime/runtime")) && e.__esModule;
var a = require("./rsa_encry.js"),
  o = getApp();

function r(e) {
  return e < 10 ? "0" + e : e
}
var u = function(e) {
  return new Promise((function(n, t) {
    wx.login({
      success: function(a) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: a.code,
            get_token: e
          },
          success: function(e) {
            n(e)
          },
          fail: function(e) {
            t(e)
          }
        })
      },
      fail: function(e) {
        t(e)
      }
    })
  }))
};

function i() {
  return (i = t(n().mark((function e(t) {
    var a, r, i, s, c;
    return n().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (null != (a = o.globalData.access_token) && null != a && "[object Undefined]" != a && "null" != a && "undefined" != a || (a = o.globalData.access_token), null != a && null != a && "[object Undefined]" != a && "null" != a && "undefined" != a || (a = ""), "" == a) {
            e.next = 6;
            break
          }
          return l(t), e.abrupt("return");
        case 6:
          if (r = wx.getStorageSync("openid"), i = wx.getStorageSync("unionid"), "" == r || null == r || null == r || "[object Undefined]" == r || "" == i || null == i || null == i || "[object Undefined]" == i) {
            e.next = 13;
            break
          }
          o.globalData.unionid = i, o.globalData.openid = r, e.next = 24;
          break;
        case 13:
          return e.prev = 13, e.next = 16, u();
        case 16:
          s = e.sent, console.log("1726284791131 login_result:", s), "000000000000" == s.data[0].resp_code && (o.globalData.openid = s.data[1].openid, o.globalData.unionid = s.data[1].unionid, wx.setStorageSync("openid", o.globalData.openid), wx.setStorageSync("unionid", o.globalData.unionid)), e.next = 24;
          break;
        case 21:
          e.prev = 21, e.t0 = e.catch(13), console.log("1726284821243 e:", e.t0);
        case 24:
          "INDEX", c = {
            openId: o.globalData.openid,
            oper_type: "INDEX"
          }, "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: c,
            success: function(e) {
              if (console.log("1726285207657 检查进度结果", e), 200 == e.statusCode && "000000000003" == e.data[0].resp_code) {
                var n = e.data[0].access_token;
                o.globalData.access_token = n
              }
              l(t)
            },
            fail: function(e) {
              l(t)
            }
          });
        case 28:
        case "end":
          return e.stop()
      }
    }), e, null, [
      [13, 21]
    ])
  })))).apply(this, arguments)
}

function l(e) {
  return s.apply(this, arguments)
}

function s() {
  return (s = t(n().mark((function e(t) {
    var r, u, i;
    return n().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return r = {
            event_name: "",
            event_id: "110",
            source: "平安码丨平安白云",
            version: o.globalData.app_version,
            event_params: [{
              name: t
            }]
          }, r = JSON.stringify(r), e.next = 4, a.encrypt_rsa_fun(r);
        case 4:
          u = e.sent, null != (i = o.globalData.access_token) && null != i && "[object Undefined]" != i && "null" != i && "undefined" != i || (i = o.globalData.access_token), null != i && null != i && "[object Undefined]" != i && "null" != i && "undefined" != i || (i = ""), r = {
            key: u
          }, "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/save_event_burial_point", wx.request({
            url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/save_event_burial_point",
            method: "POST",
            data: r,
            header: {
              "Content-type": "application/json",
              cloud_shield_token: i
            },
            success: function(e) {},
            fail: function(e) {
              console.log("save_event_burial_point error", e)
            }
          });
        case 11:
        case "end":
          return e.stop()
      }
    }), e)
  })))).apply(this, arguments)
}
module.exports = {
  formatTime: function(e) {
    if ("number" != typeof e || e < 0) return e;
    var n = parseInt(e / 3600);
    return e %= 3600, [n, parseInt(e / 60), e %= 60].map((function(e) {
      return (e = e.toString())[1] ? e : "0" + e
    })).join(":")
  },
  getNowFormatDay: function(e) {
    null == e && (e = new Date);
    var n = e.getDate(),
      t = e.getMonth() + 1;
    return e.getFullYear() + "-" + r(t) + "-" + r(n)
  },
  getNowFormatTime: function() {
    var e = new Date,
      n = e.getHours(),
      t = e.getMinutes(),
      a = e.getSeconds();
    return r(n) + ":" + r(t) + ":" + r(a)
  },
  formatLocation: function(e, n) {
    return "string" == typeof e && "string" == typeof n && (e = parseFloat(e), n = parseFloat(n)), e = e.toFixed(2), n = n.toFixed(2), {
      longitude: e.toString().split("."),
      latitude: n.toString().split(".")
    }
  },
  wx_request: function(e, n, t) {
    return null != t && null != t && "[object Undefined]" != t && "null" != t && "undefined" != t || (t = o.globalData.access_token), null != t && null != t && "[object Undefined]" != t && "null" != t && "undefined" != t || (t = ""), new Promise((function(a, o) {
      wx.request({
        url: e,
        method: "POST",
        dataType: "json",
        data: n,
        header: {
          cloud_shield_token: t
        },
        success: function(e) {
          try {
            e && 200 == e.statusCode ? a(e) : o(e)
          } catch (e) {
            o(e)
          }
        },
        fail: function(e) {
          o(e)
        }
      })
    }))
  },
  wx_request1: function(e, n, t, a) {
    return new Promise((function(o, r) {
      wx.showLoading({
        title: "加载中",
        mask: !1
      }), wx.request({
        url: e,
        method: t,
        dataType: "json",
        data: n,
        header: a,
        success: function(e) {
          try {
            e && 200 == e.statusCode ? o(e) : r(e)
          } catch (e) {
            r(e)
          }
        },
        fail: function(e) {
          r(e)
        },
        complete: function(e) {
          wx.hideLoading()
        }
      })
    }))
  },
  wx_request_no_load: function(e, n, t, a) {
    return new Promise((function(o, r) {
      wx.request({
        url: e,
        method: t,
        dataType: "json",
        data: n,
        header: a,
        success: function(e) {
          try {
            e && 200 == e.statusCode ? o(e) : r(e)
          } catch (e) {
            r(e)
          }
        },
        fail: function(e) {
          r(e)
        },
        complete: function(e) {}
      })
    }))
  },
  wx_show_modal: function(e, n, t, a) {
    return null != a && null != a && "[object Undefined]" != a && "null" != a && "undefined" != a || (a = "确定"), new Promise((function(o, r) {
      wx.showModal({
        title: e,
        content: n,
        confirmText: a,
        showCancel: t,
        success: function(e) {
          o(e)
        },
        fail: function(e) {
          o(e)
        }
      })
    }))
  },
  wx_login: u,
  formatDate: function(e, n) {
    /(y+)/.test(n) && (n = n.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
    var t = {
      "M+": e.getMonth() + 1,
      "d+": e.getDate(),
      "h+": e.getHours(),
      "m+": e.getMinutes(),
      "s+": e.getSeconds()
    };
    for (var a in t)
      if (new RegExp("(".concat(a, ")")).test(n)) {
        var o = t[a] + "";
        n = n.replace(RegExp.$1, 1 === RegExp.$1.length ? o : ("00" + o).substr(o.length))
      } return n
  },
  wx_upload_file: function(e, n, t) {
    return new Promise((function(a, o) {
      wx.uploadFile({
        url: e,
        filePath: t,
        name: "upload",
        header: {
          "Content-Type": "multipart/form-data"
        },
        formData: n,
        success: function(e) {
          try {
            e && 200 == e.statusCode ? a(e) : o(e)
          } catch (e) {
            o(e)
          }
        },
        fail: function(e) {
          o(e)
        }
      })
    }))
  },
  getQueryString: function(e, n) {
    var t = new RegExp("(^|&)" + n + "=([^&]*)(&|$)"),
      a = e.split("?")[1].match(t);
    return null != a ? unescape(a[2]) : null
  },
  get_url: function() {
    return "https://xcx.pinganbaiyun.cn/p_021_health_passport/"
  },
  wx_request3: function(e, n, t) {
    return null != t && null != t && "[object Undefined]" != t && "null" != t && "undefined" != t || (t = ""), new Promise((function(a, o) {
      wx.request({
        url: e,
        method: "POST",
        dataType: "json",
        header: {
          cloud_shield_token: t
        },
        data: n,
        success: function(e) {
          try {
            e && e.data[0].resp_code, a(e)
          } catch (e) {
            o(e)
          }
        },
        fail: function(e) {
          o(e)
        }
      })
    }))
  },
  throttle: function(e, n) {
    null != n && null != n || (n = 1500);
    var t = null;
    return function() {
      var a = +new Date;
      (a - t > n || !t) && (e(), t = a)
    }
  },
  compareVersion: function(e, n) {
    e = e.split("."), n = n.split(".");
    for (var t = Math.max(e.length, n.length); e.length < t;) e.push("0");
    for (; n.length < t;) n.push("0");
    for (var a = 0; a < t; a++) {
      var o = parseInt(e[a]),
        r = parseInt(n[a]);
      if (o > r) return 1;
      if (o < r) return -1
    }
    return 0
  },
  async_get_net_work_type: function() {
    return new Promise((function(e, n) {
      wx.getNetworkType({
        success: function(n) {
          e(n)
        },
        fail: function(n) {
          console.log("wx.getNetworkType error", n), e({
            networkType: "5g"
          })
        }
      })
    }))
  },
  save_redis: function(e) {
    return i.apply(this, arguments)
  }
};