var e = require("../../../@babel/runtime/helpers/typeof");
module.exports = function(t) {
  var r = {};

  function n(e) {
    if (r[e]) return r[e].exports;
    var a = r[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(a.exports, a, a.exports, n), a.l = !0, a.exports
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
    var a = Object.create(null);
    if (n.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: t
      }), 2 & r && "string" != typeof t)
      for (var o in t) n.d(a, o, function(e) {
        return t[e]
      }.bind(null, o));
    return a
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 21)
}({
  21: function(e, t, r) {
    Component({
      options: {
        addGlobalClass: !0
      },
      properties: {
        imgUrls: {
          type: Array,
          value: [],
          observer: function(e, t, r) {
            this.setData({
              currentImgs: e
            })
          }
        },
        showDelete: {
          type: Boolean,
          value: !0
        },
        showText: {
          type: String,
          value: ""
        },
        show: {
          type: Boolean,
          value: !0
        },
        current: {
          type: Number,
          value: 0
        },
        hideOnClick: {
          type: Boolean,
          value: !0
        },
        extClass: {
          type: Boolean,
          value: ""
        }
      },
      data: {
        currentImgs: []
      },
      ready: function() {
        var e = this.data;
        this.setData({
          currentImgs: e.imgUrls
        })
      },
      methods: {
        change: function(e) {
          this.setData({
            current: e.detail.current
          }), this.triggerEvent("change", {
            current: e.detail.current
          }, {})
        },
        update_avatar: function() {
          console.log("update_avatar:"), wx.navigateTo({
            url: "../third_part/pages/avatar/form"
          })
        },
        hideGallery: function() {
          this.data.hideOnClick && (this.setData({
            show: !1
          }), this.triggerEvent("hide", {}, {}))
        }
      }
    })
  }
});