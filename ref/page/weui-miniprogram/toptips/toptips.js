var e = require("../../../@babel/runtime/helpers/typeof");
module.exports = function(t) {
  var r = {};

  function n(e) {
    if (r[e]) return r[e].exports;
    var o = r[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  return n.m = t, n.c = r, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(t, r) {
    if (1 & r && (t = n(t)), 8 & r) return t;
    if (4 & r && "object" === e(t) && t && t.__esModule) return t;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: t
      }), 2 & r && "string" != typeof t)
      for (var a in t) n.d(o, a, function(e) {
        return t[e]
      }.bind(null, a));
    return o
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 13)
}({
  13: function(e, t, r) {
    Component({
      options: {
        addGlobalClass: !0
      },
      properties: {
        type: {
          type: String,
          value: "error",
          observer: "_typeChange"
        },
        show: {
          type: Boolean,
          value: !1,
          observer: "_showChange"
        },
        msg: {
          type: String,
          value: ""
        },
        delay: {
          type: Number,
          value: 2e3
        },
        extClass: {
          type: String,
          value: ""
        }
      },
      data: {
        typeClassMap: {
          warn: "weui-toptips_warn",
          info: "weui-toptips_info",
          success: "weui-toptips_success",
          error: "weui-toptips_error"
        }
      },
      attached: function() {
        var e = this.data;
        this.setData({
          className: e.typeClassMap[e.type] || ""
        })
      },
      methods: {
        _typeChange: function(e) {
          return this.setData({
            className: this.data.typeClassMap[e] || ""
          }), e
        },
        _showChange: function(e) {
          this._showToptips(e)
        },
        _showToptips: function(e) {
          var t = this;
          e && this.data.delay && setTimeout((function() {
            t.setData({
              show: !1
            }, (function() {
              t.triggerEvent("hide", {}, {})
            }))
          }), this.data.delay), this.setData({
            show: e
          })
        }
      }
    })
  }
});