var t = require("../../../@babel/runtime/helpers/typeof"),
  a = require("../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("./tool");
Component({
  properties: {
    scrollType: {
      type: String,
      value: "normal"
    },
    listData: {
      type: Array,
      value: [],
      observer: function(t) {
        if (0 !== t.length && !this._compareDate()) {
          this._setTempData();
          var e = a(new Array(t.length).keys()).map((function() {
            return 0
          }));
          this.data.lastValue = this.data.tempValue = e, this._setDefault()
        }
      }
    },
    defaultPickData: {
      type: Array,
      value: [],
      observer: function(t) {
        0 === t.length || this._compareDate() || (this._setTempData(), this._setDefault())
      }
    },
    keyWordsOfShow: {
      type: String,
      value: "name"
    },
    isShowPicker: {
      type: Boolean,
      value: !1,
      observer: function(t) {
        t ? this._openPicker() : this._closePicker()
      }
    },
    titleText: {
      type: String,
      value: "标题"
    },
    cancelText: {
      type: String,
      value: "取消"
    },
    sureText: {
      type: String,
      value: "确定"
    },
    pickerHeaderStyle: String,
    sureStyle: String,
    cancelStyle: String,
    titleStyle: String,
    maskStyle: String,
    indicatorStyle: String,
    chooseItemTextStyle: String
  },
  data: {
    columnsData: [],
    value: [],
    backData: [],
    height: 0,
    isOpen: !1,
    isUseKeywordOfShow: !1,
    scrollEnd: !0,
    lastValue: [],
    tempValue: [],
    isFirstOpen: !0,
    onlyKey: "",
    defaultPickDataTemp: "",
    listDataTemp: ""
  },
  methods: {
    tapModal: function() {
      this.properties.isShowPicker = !1, this._closePicker()
    },
    cancle: function() {
      this.triggerEvent("cancle"), this._closePicker()
    },
    sure: function() {
      var t = this.data,
        a = t.scrollEnd,
        e = t.tempValue;
      if (a) {
        var i = this._getBackDataFromValue(e);
        this.setData({
          backData: i
        }), this.triggerEvent("sure", {
          choosedData: i,
          choosedIndexArr: e
        }), this._closePicker()
      }
    },
    _bindChange: function(t) {
      var a = this,
        e = this.properties.scrollType,
        i = this.data.lastValue,
        r = t.detail.value;
      switch (e) {
        case "normal":
          this.data.tempValue = r.concat(), this.data.tempValue = r.concat();
          break;
        case "link":
          var n = [];
          r.length > 1 && r.slice(0, r.length - 1).reduce((function(t, e, i) {
            var r = t[e].children;
            return n.push(a._getColumnData(r)), r
          }), this.properties.listData);
          var s = [this.data.columnsData[0]].concat(n),
            l = this._getScrollCompareIndex(i, r);
          if (l > -1)
            for (var o = 1; void 0 !== r[l + o];) r[l + o] = 0, o++;
          r = this._validate(r), this.data.lastValue = r.concat(), this.data.tempValue = r.concat(), this.setData({
            columnsData: s
          })
      }
    },
    _validate: function(t) {
      var a = this.data.columnsData;
      return a.forEach((function(e, i) {
        a[i].length - 1 < t[i] && (t[i] = a[i].length - 1)
      })), this.setData({
        value: t
      }), t
    },
    _bindpickend: function() {
      this.data.scrollEnd = !0
    },
    _bindpickstart: function() {
      this.data.scrollEnd = !1
    },
    _openPicker: function() {
      this.data.isFirstOpen || 0 !== this.properties.listData.length && this._setDefault(this._computedBackData(this.data.backData)), this.data.isFirstOpen = !1, this.setData({
        isOpen: !0
      })
    },
    _closePicker: function() {
      this.setData({
        isOpen: !1
      })
    },
    _getColumnData: function(t) {
      var a = this;
      return t.map((function(t) {
        return a._fomateObj(t)
      }))
    },
    _fomateObj: function(t) {
      var a = {};
      for (var e in t) "children" !== e && (a[e] = t[e]);
      return a
    },
    _getScrollCompareIndex: function(t, a) {
      for (var e = -1, i = 0, r = t.length; i < r; i++)
        if (t[i] !== a[i]) {
          e = i;
          break
        } return e
    },
    _getIndexByIdOfObject: function(t, a, e, i) {
      if (Array.isArray(t))
        for (var r = 0, n = t.length; r < n; r++)
          if (t[r][e] === a[i.length][e]) return i.push(r), this._getIndexByIdOfObject(t[r].children, a, e, i)
    },
    _setDefault: function(t) {
      var a = this,
        i = this.properties.scrollType,
        r = this.properties,
        n = r.listData,
        s = r.defaultPickData,
        l = this.data.lastValue;
      t && (s = t);
      var o = [];
      switch (i) {
        case "normal":
          (0, e.isPlainObject)(n[0][0]) && this.setData({
            isUseKeywordOfShow: !0
          }), Array.isArray(s) && s.length > 0 ? (o = n.map((function(t, a) {
            return t[s[a]]
          })), this.data.tempValue = s, this.data.lastValue = s) : o = n.map((function(t) {
            return t[0]
          })), this.setData({
            columnsData: n,
            backData: o,
            value: s
          });
          break;
        case "link":
          var c = [];
          if (Array.isArray(s) && s.length > 0 && s.every((function(t, a) {
              return (0, e.isPlainObject)(t)
            }))) {
            var u = this.data.onlyKey = Object.keys(s[0])[0],
              h = [];
            this._getIndexByIdOfObject(n, s, u, h), s = h;
            var p = 0;
            do {
              l.push(s[p]), c.push(this._getColumnData(n)), n = n[s[p]].children, p++
            } while (n);
            o = c.map((function(t, a) {
              return t[s[a]]
            }))
          } else {
            this.data.onlyKey = this.properties.keyWordsOfShow || "name";
            do {
              l.push(0), c.push(this._getColumnData(n)), n = n[0].children
            } while (n);
            o = c.map((function(t) {
              return t[0]
            }))
          }
          this.data.tempValue = s, this.data.lastValue = s, this.setData({
            isUseKeywordOfShow: !0,
            columnsData: c,
            backData: o
          }), setTimeout((function() {
            a.setData({
              value: s
            })
          }), 0)
      }
    },
    _computedBackData: function(t) {
      var a = this,
        e = this.properties,
        i = e.scrollType,
        r = e.listData,
        n = this.data.onlyKey;
      return "normal" === i ? t.map((function(t, e) {
        return r[e].findIndex((function(e, i) {
          return a._compareObj(t, e)
        }))
      })) : t.map((function(t, a) {
        var e = {};
        return e[n] = t[n], e
      }))
    },
    _compareObj: function(a, e) {
      var i = this.properties.keyWordsOfShow;
      return "object" !== t(a) ? a === e : a[i] === e[i]
    },
    _getBackDataFromValue: function(t) {
      return t.length > 0 ? this.data.columnsData.reduce((function(a, e, i) {
        return a.concat(e[t[i]])
      }), []) : this.data.columnsData.map((function(t, a) {
        return t[0]
      }))
    },
    _compareDate: function() {
      var t = this.data,
        a = t.defaultPickDataTemp,
        e = t.listDataTemp,
        i = this.properties,
        r = i.defaultPickData,
        n = i.listData;
      return a === r && e === n
    },
    _setTempData: function() {
      var t = this.properties,
        a = t.defaultPickData,
        e = t.listData;
      this.data.defaultPickDataTemp = a, this.data.listDataTemp = e
    }
  }
});