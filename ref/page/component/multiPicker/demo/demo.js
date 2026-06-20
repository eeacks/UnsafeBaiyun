require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../util/util.js");
Page({
  data: {
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
    fieldValue: ""
  },
  onLoad: function(e) {},
  show_picker: function() {
    this.setData({
      creat_picker: !0,
      show: !0
    })
  },
  hide_picker: function() {
    this.setData({
      show: !1
    })
  },
  get_return: function(e) {
    console.log(e), this.setData({
      fieldValue: e.detail.location_str
    })
  },
  sideActiveChange: function(e) {
    this.sideActive = e, this.tableTagParent && (this.tableTag = this.tableTagParent.slice(0, e))
  },
  itemStatus: function(e) {
    var t = this.tableTagParent;
    return !!(!t && !e || t && t.length >= e)
  },
  cascaderChange: function(a, i) {
    var s = this;
    return t(e().mark((function t() {
      var n, l, r, c;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (n = a.value, l = a.level, (r = n.indexOf("4401") > -1) && ((c = s.placeholder).includes("派出所") || c.push("派出所"), c.includes("社区") || c.push("社区"), s.placeholder = c), a[s.cascaderchildren] || !(!r && 4 == l || r && 6 === l && l != s.show_level)) {
              e.next = 8;
              break
            }
            return 6 == l && (n = n.substr(0, 9)), e.next = 8, axios.post(get_url() + "api_015_new_examine/get_area_multi_picker", JSON.stringify({
              oper_type: "villages",
              street_code: n
            })).then((function(e) {
              if (e.data)
                if ("000000000000" == e.data[0].resp_code) {
                  var t = e.data.slice(1);
                  if (0 == t.length) return setTimeout((function() {
                    s.handleClose()
                  }), 200);
                  var i = s.placeholder;
                  i.includes("村委") || i.push("村委"), s.placeholder = i, a[s.cascaderchildren] = t
                } else e.data[0].resp_msg, e.data[0].resp_code
            })).catch((function(e) {}));
          case 8:
            if (s.cascaderSelectChange(JSON.parse(JSON.stringify(s.tableTag)).concat(i), a), a[s.cascaderchildren] && !(l >= s.show_level)) {
              e.next = 11;
              break
            }
            return e.abrupt("return", setTimeout((function() {
              s.handleClose()
            }), 200));
          case 11:
            setTimeout((function() {
              s.tableTag.push(i), s.tableTagParent = s.tableTag, s.sideActive++
            }), 200);
          case 12:
          case "end":
            return e.stop()
        }
      }), t)
    })))()
  },
  cascaderSelectChange: function(e, t) {
    var a = [],
      i = [],
      s = e.length;
    this.prop_value.length;
    if (s)
      for (var n = null, l = null, r = null, c = null, o = 0; o < s; o++) 0 != o || n ? (l = n[e[o]][this.cascaderchildren], r = n[e[o]][this.cascadervalue], c = n[e[o]][this.cascaderlabel]) : (l = this.options[e[o]][this.cascaderchildren], r = this.options[e[o]][this.cascadervalue], c = this.options[e[o]][this.cascaderlabel]), a.push(r), i.push(c), l && (n = l);
    t[this.cascaderchildren] && i.push(""), this.selectedLabel = i, this.$emit("input", a), this.preserve = a, console.info({
      selectValue: a,
      selectedLabel: i
    }), this.$emit("change", {
      selectValue: a,
      selectedLabel: i
    })
  },
  initSelected: function() {
    this.tableTag = [];
    var e = this.value.length,
      t = [];
    if (e) {
      for (var a = null, i = null, s = null, n = 0; n < e; n++)
        for (var l = 0; l < (a && a.length || this.options.length); l++)
          if ((a ? a[l][this.cascadervalue] : this.options[l][this.cascadervalue]) == this.value[n]) {
            s = a ? a[l][this.cascaderlabel] : this.options[l][this.cascaderlabel], t.push(s), (i = a ? a[l][this.cascaderchildren] : this.options[l][this.cascaderchildren]) && (a = i, this.tableTag.push(l)), n + 1 == e && i && t.push("");
            break
          } this.selectedLabel = t, this.tableTagParent = this.tableTag, this.sideActive = t.length - 1
    }
  },
  processingData: function() {
    var e = this.tableTag.length;
    if (e) {
      for (var t = null, a = null, i = 0; i < e; i++)(a = 0 != i || t ? t[this.tableTag[i]][this.cascaderchildren] : this.options[this.tableTag[i]][this.cascaderchildren]) && (t = a);
      return t
    }
    return this.options
  },
  handleClose: function() {
    var e = this;
    document.getElementById("flyingd-cascader").classList.remove("active"), setTimeout((function() {
      e.placeholder = e.r_placeholder, e.$emit("update:visible", !1), e.$emit("close")
    }), 500)
  },
  prevent: function(e) {
    return e.stopPropagation(), !1
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});