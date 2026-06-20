Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0, exports.encrypt_rsa_fun = c;
var e, t = require("../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../@babel/runtime/helpers/asyncToGenerator");
(e = require("./regenerator-runtime/runtime")) && e.__esModule;
require("../config.js");
var r = require("./jsencrypt.js"),
  a = (require("./util.js"), getApp());

function c(e) {
  return new Promise(function() {
    var c = n(t().mark((function c(s, l) {
      var i, g, p, h, b, x, _, f, k, y, d, v, S, T, w, R, m;
      return t().wrap((function(c) {
        for (;;) switch (c.prev = c.next) {
          case 0:
            if (i = "", !wx.getStorageSync("rsa_public_key")) {
              c.next = 68;
              break
            }
            i = wx.getStorageSync("rsa_public_key"), (g = new r.JSEncrypt).setPublicKey(i), p = g.getKey(), h = "", c.prev = 7, b = 30, x = parseInt(e.length / b), _ = 0;
          case 11:
            if (!(_ < x)) {
              c.next = 36;
              break
            }
            if (f = _ * b, k = e.substr(f, b), y = p.encrypt(k), (d = o(y)).length % 128 == 0) {
              c.next = 31;
              break
            }
            console.log("加密数据不是128倍数的", d.length), v = 0;
          case 19:
            if (!(v < 30)) {
              c.next = 30;
              break
            }
            return c.next = 22, u(1e3);
          case 22:
            if (y = p.encrypt(k), d = o(y), console.log("encrypt_data_hex.length j_let-------------------------", v, d.length), d.length % 128 != 0) {
              c.next = 27;
              break
            }
            return c.abrupt("break", 30);
          case 27:
            v++, c.next = 19;
            break;
          case 30:
            d.length % 128 != 0 && console.log("经过30次加密后任然不是128倍数的，不加密，因为后台解密不了-------------------------", d.length);
          case 31:
            h += y + "RSA_STRTOK@@@";
          case 33:
            _++, c.next = 11;
            break;
          case 36:
            if (e.length % b == 0) {
              c.next = 58;
              break
            }
            if (S = x * b, T = e.substr(S, e.length - S), w = p.encrypt(T), (R = o(w)).length % 128 == 0) {
              c.next = 56;
              break
            }
            console.log("加密数据不是128倍数的 多出的", R.length), m = 0;
          case 44:
            if (!(m < 30)) {
              c.next = 55;
              break
            }
            return c.next = 47, u(1e3);
          case 47:
            if (w = p.encrypt(T), R = o(w), console.log("encrypt_data_hex.length j_let-------------------------", m, R.length), R.length % 128 != 0) {
              c.next = 52;
              break
            }
            return c.abrupt("break", 55);
          case 52:
            m++, c.next = 44;
            break;
          case 55:
            R.length % 128 != 0 && console.log("经过30次加密后任然不是128倍数的，不加密，因为后台解密不了-------------------------", R.length);
          case 56:
            h += w + "RSA_STRTOK@@@";
          case 58:
            c.next = 65;
            break;
          case 60:
            c.prev = 60, c.t0 = c.catch(7), console.log("encryptLong_ver_20230213 ex", c.t0), h = "RSA_NOT_ENCRYPT" + e;
          case 65:
            s(h), c.next = 70;
            break;
          case 68:
            "https://xcx.pinganbaiyun.cn/health_passport/api_001_health_passport/get_rsa_public_key", wx.request({
              url: "https://xcx.pinganbaiyun.cn/health_passport/api_001_health_passport/get_rsa_public_key",
              method: "GET",
              data: {},
              header: {
                cloud_shield_token: a.globalData.access_token
              },
              success: function(a) {
                return n(t().mark((function n() {
                  var c, l, g, p, h, b, x, _, f, k, y, d, v, S, T, w, R;
                  return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (console.info(a), "000000000000" != (c = a.data)[0].resp_code) {
                          t.next = 68;
                          break
                        }
                        i = c[0].result, wx.setStorage({
                          key: "rsa_public_key",
                          data: i
                        }), (l = new r.JSEncrypt).setPublicKey(i), g = l.getKey(), p = "", t.prev = 9, h = 30, b = parseInt(e.length / h), x = 0;
                      case 13:
                        if (!(x < b)) {
                          t.next = 38;
                          break
                        }
                        if (_ = x * h, f = e.substr(_, h), k = g.encrypt(f), (y = o(k)).length % 128 == 0) {
                          t.next = 33;
                          break
                        }
                        console.log("加密数据不是128倍数的", y.length), d = 0;
                      case 21:
                        if (!(d < 30)) {
                          t.next = 32;
                          break
                        }
                        return t.next = 24, u(1e3);
                      case 24:
                        if (k = g.encrypt(f), y = o(k), console.log("encrypt_data_hex.length j_let-------------------------", d, y.length), y.length % 128 != 0) {
                          t.next = 29;
                          break
                        }
                        return t.abrupt("break", 32);
                      case 29:
                        d++, t.next = 21;
                        break;
                      case 32:
                        y.length % 128 != 0 && console.log("经过30次加密后任然不是128倍数的，不加密，因为后台解密不了-------------------------", y.length);
                      case 33:
                        p += k + "RSA_STRTOK@@@";
                      case 35:
                        x++, t.next = 13;
                        break;
                      case 38:
                        if (e.length % h == 0) {
                          t.next = 60;
                          break
                        }
                        if (v = b * h, S = e.substr(v, e.length - v), T = g.encrypt(S), (w = o(T)).length % 128 == 0) {
                          t.next = 58;
                          break
                        }
                        console.log("加密数据不是128倍数的 多出的", w.length), R = 0;
                      case 46:
                        if (!(R < 30)) {
                          t.next = 57;
                          break
                        }
                        return t.next = 49, u(1e3);
                      case 49:
                        if (T = g.encrypt(S), w = o(T), console.log("encrypt_data_hex.length j_let-------------------------", R, w.length), w.length % 128 != 0) {
                          t.next = 54;
                          break
                        }
                        return t.abrupt("break", 57);
                      case 54:
                        R++, t.next = 46;
                        break;
                      case 57:
                        w.length % 128 != 0 && console.log("经过30次加密后任然不是128倍数的，不加密，因为后台解密不了-------------------------", w.length);
                      case 58:
                        p += T + "RSA_STRTOK@@@";
                      case 60:
                        t.next = 67;
                        break;
                      case 62:
                        t.prev = 62, t.t0 = t.catch(9), console.log("encryptLong_ver_20230213 ex", t.t0), p = "RSA_NOT_ENCRYPT" + e;
                      case 67:
                        s(p);
                      case 68:
                      case "end":
                        return t.stop()
                    }
                  }), n, null, [
                    [9, 62]
                  ])
                })))()
              }
            });
          case 70:
          case "end":
            return c.stop()
        }
      }), c, null, [
        [7, 60]
      ])
    })));
    return function(e, t) {
      return c.apply(this, arguments)
    }
  }())
}
var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function l(e) {
  return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)
}

function o(e) {
  var t, n = "",
    r = 0,
    a = 0;
  for (t = 0; t < e.length && "=" !== e.charAt(t); ++t) {
    var c = s.indexOf(e.charAt(t));
    c < 0 || (0 === r ? (n += l(c >> 2), a = 3 & c, r = 1) : 1 === r ? (n += l(a << 2 | c >> 4), a = 15 & c, r = 2) : 2 === r ? (n += l(a), n += l(c >> 2), a = 3 & c, r = 3) : (n += l(a << 2 | c >> 4), n += l(15 & c), r = 0))
  }
  return 1 === r && (n += l(a << 2)), n
}

function u(e) {
  return new Promise((function(t, n) {
    setTimeout((function() {
      t("success")
    }), e)
  }))
}
var i = c;
exports.default = i;