var t = require("../../../../@babel/runtime/helpers/typeof");
module.exports = function(e) {
  var n = {};

  function o(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
  }
  return o.m = e, o.c = n, o.d = function(t, e, n) {
    o.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, o.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, o.t = function(e, n) {
    if (1 & n && (e = o(e)), 8 & n) return e;
    if (4 & n && "object" === t(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (o.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & n && "string" != typeof e)
      for (var i in e) o.d(r, i, function(t) {
        return e[t]
      }.bind(null, i));
    return r
  }, o.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return o.d(e, "a", e), e
  }, o.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, o.p = "", o(o.s = 5)
}({
  5: function(t, e, n) {
    var o = function(t, e, n) {
      var o = void 0,
        r = void 0,
        i = void 0,
        a = null,
        l = 0;
      n || (n = {});
      var c = function() {
        l = !1 === n.leading ? 0 : Date.now(), a = null, i = t.apply(o, r), a || (o = r = null)
      };
      return function() {
        var u = Date.now();
        l || !1 !== n.leading || (l = u);
        var s = e - (u - l);
        return o = this, r = arguments, s <= 0 || s > e ? (clearTimeout(a), a = null, l = u, i = t.apply(o, r), a || (o = r = null)) : a || !1 === n.trailing || (a = setTimeout(c, s)), i
      }
    };
    Component({
      options: {
        addGlobalClass: !0,
        pureDataPattern: /^_/
      },
      properties: {
        list: {
          type: Array,
          value: [],
          observer: function(t) {
            var e = this;
            if (0 !== t.length) {
              var n = this.data.list.map((function(t) {
                return t.alpha
              }));
              this.setData({
                alphabet: n,
                current: n[0]
              }, (function() {
                e.computedSize()
              }))
            }
          }
        },
        vibrated: {
          type: Boolean,
          value: !0
        }
      },
      data: {
        windowHeight: 612,
        current: "A",
        intoView: "",
        touching: !1,
        alphabet: [],
        _tops: [],
        _anchorItemH: 0,
        _anchorItemW: 0,
        _anchorTop: 0,
        _listUpperBound: 0
      },
      lifetimes: {
        created: function() {},
        attached: function() {
          this.__scrollTo = o(this._scrollTo, 100, {}), this.__onScroll = o(this._onScroll, 100, {});
          var t = wx.getSystemInfoSync().windowHeight;
          this.setData({
            windowHeight: t
          })
        }
      },
      methods: {
        choose: function(t) {
          var e = t.target.dataset.item;
          this.triggerEvent("choose", {
            item: e
          })
        },
        scrollTo: function(t) {
          this.__scrollTo(t)
        },
        _scrollTo: function(t) {
          var e = this.data,
            n = t.changedTouches[0].clientY,
            o = Math.floor((n - e._anchorTop) / e._anchorItemH),
            r = e.alphabet[o];
          this.setData({
            current: r,
            intoView: r,
            touching: !0
          }), e.vibrated && wx.vibrateShort()
        },
        computedSize: function() {
          var t = this.data,
            e = this.createSelectorQuery();
          e.selectAll(".index_list_item").boundingClientRect((function(e) {
            var n = e;
            t._tops = n.map((function(t) {
              return t.top
            }))
          })).exec(), e.select(".anchor-list").boundingClientRect((function(e) {
            t._anchorItemH = e.height / t.alphabet.length, t._anchorItemW = e.width, t._anchorTop = e.top
          })).exec(), e.select(".page-select-index").boundingClientRect((function(e) {
            t._listUpperBound = e.top
          }))
        },
        removeTouching: function() {
          var t = this;
          setTimeout((function() {
            t.setData({
              touching: !1
            })
          }), 150)
        },
        onScroll: function(t) {
          this.__onScroll(t)
        },
        _onScroll: function(t) {
          var e = this.data,
            n = e._tops,
            o = e.alphabet,
            r = t.detail.scrollTop,
            i = "";
          if (r < n[0]) i = o[0];
          else
            for (var a = 0, l = n.length; a < l - 1; a++) r >= n[a] && r < n[a + 1] && (i = o[a]);
          i || (i = o[o.length - 1]), this.setData({
            current: i
          })
        }
      }
    })
  }
});