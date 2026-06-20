var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../common/component");
(0, t.VantComponent)({
  props: {
    zIndex: {
      type: Number,
      value: 99
    },
    offsetTop: {
      type: Number,
      value: 0,
      observer: "observeContent"
    },
    disabled: {
      type: Boolean,
      observer: function(e) {
        this.mounted && (e ? this.disconnectObserver() : this.initObserver())
      }
    },
    container: {
      type: null,
      observer: function(e) {
        "function" == typeof e && this.data.height && (this.observeContainer(), this.updateFixed())
      }
    }
  },
  data: {
    height: 0,
    fixed: !1
  },
  methods: {
    getContainerRect: function() {
      var e = this.data.container();
      return new Promise((function(t) {
        return e.boundingClientRect(t).exec()
      }))
    },
    initObserver: function() {
      var e = this;
      this.disconnectObserver(), this.getRect(".van-sticky").then((function(t) {
        e.setData({
          height: t.height
        }), wx.nextTick((function() {
          e.observeContent(), e.observeContainer()
        }))
      }))
    },
    updateFixed: function() {
      var t = this;
      Promise.all([this.getRect(".van-sticky"), this.getContainerRect()]).then((function(n) {
        var i = e(n, 2),
          r = i[0],
          s = i[1];
        t.setData({
          height: r.height
        }), t.containerHeight = s.height, wx.nextTick((function() {
          t.setFixed(r.top)
        }))
      }))
    },
    disconnectObserver: function(e) {
      if (e) {
        var t = this[e];
        t && t.disconnect()
      } else this.contentObserver && this.contentObserver.disconnect(), this.containerObserver && this.containerObserver.disconnect()
    },
    observeContent: function() {
      var e = this,
        t = this.data.offsetTop;
      this.disconnectObserver("contentObserver");
      var n = this.createIntersectionObserver({
        thresholds: [.9, 1]
      });
      n.relativeToViewport({
        top: -t
      }), n.observe(".van-sticky", (function(t) {
        e.data.disabled || e.setFixed(t.boundingClientRect.top)
      })), this.contentObserver = n
    },
    observeContainer: function() {
      var e = this;
      if ("function" == typeof this.data.container) {
        var t = this.data.height;
        this.getContainerRect().then((function(n) {
          e.containerHeight = n.height, e.disconnectObserver("containerObserver");
          var i = e.createIntersectionObserver({
            thresholds: [.9, 1]
          });
          e.containerObserver = i, i.relativeToViewport({
            top: e.containerHeight - t
          }), i.observe(".van-sticky", (function(t) {
            e.data.disabled || e.setFixed(t.boundingClientRect.top)
          }))
        }))
      }
    },
    setFixed: function(e) {
      var t = this.data,
        n = t.offsetTop,
        i = t.height,
        r = this.containerHeight,
        s = r && i ? e >= i - r && e < n : e < n;
      this.$emit("scroll", {
        scrollTop: e,
        isFixed: s
      }), this.setData({
        fixed: s
      })
    }
  },
  mounted: function() {
    this.mounted = !0, this.data.disabled || this.initObserver()
  },
  destroyed: function() {
    this.disconnectObserver()
  }
});