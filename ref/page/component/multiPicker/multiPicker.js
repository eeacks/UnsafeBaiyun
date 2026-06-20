var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = require("../../../util/util.js");
Component({
  properties: {
    prop_value: {
      type: Array,
      default: [{
        name: "广东省",
        disabled: !0
      }, {
        name: "广州市",
        disabled: !0
      }, {
        name: "区/乡",
        disabled: !1
      }, {
        name: "街道",
        disabled: !1
      }]
    },
    visible: {
      type: Boolean,
      default: !1
    },
    show_level: {
      type: Number,
      default: 4
    },
    zIndex: {
      type: Number,
      value: 2
    },
    active: {
      type: Number,
      value: 0
    }
  },
  data: {
    placeholder: ["省份", "城市", "区/乡", "街道"],
    options: [],
    item_list: [],
    return_json: [],
    disabled_index: -1
  },
  lifetimes: {
    attached: function() {
      var e = {
          oper_type: "province"
        },
        t = this.data.prop_value.length,
        a = this.data.prop_value;
      if (t > 0)
        for (var i = t - 1; i >= 0; i--) this.data.return_json.unshift({
          value: "",
          label: a[i].name
        }), a[i].disabled && -1 == this.data.disabled_index && (this.setData({
          disabled_index: i
        }), 0 == i ? e = {
          oper_type: "city",
          province_code: this.data.prop_value[0].name
        } : 1 == i ? e = {
          oper_type: "area",
          province_code: this.data.prop_value[0].name,
          city_code: this.data.prop_value[1].name
        } : 2 == i && (e = {
          oper_type: "street",
          province_code: this.data.prop_value[0].name,
          city_code: this.data.prop_value[1].name,
          area_code: this.data.prop_value[2].name
        })), a[i].disabled = !0;
      a[this.data.disabled_index + 1].disabled = !1, this.setData({
        active: this.data.disabled_index + 1,
        prop_value: a,
        return_json: this.data.return_json
      }), this.getData(e, this.data.disabled_index + 1)
    },
    detached: function() {}
  },
  methods: {
    onTabChange: function(e) {
      this.setData({
        active: e.detail.index
      });
      var t = e.detail.index - 1,
        a = this.data.prop_value,
        i = {
          oper_type: "province"
        };
      if (t < 3) 0 == t ? i = {
        oper_type: "city",
        province_code: this.data.return_json[0].label
      } : 1 == t ? i = {
        oper_type: "area",
        province_code: this.data.return_json[0].label,
        city_code: this.data.return_json[1].label
      } : 2 == t && (i = {
        oper_type: "street",
        province_code: this.data.return_json[0].label,
        city_code: this.data.return_json[1].label,
        area_code: this.data.return_json[2].label
      }), this.getData(i, t + 1);
      else
        for (var s in this.data.item_list[t]) this.data.item_list[t][s].label == this.data.return_json[t].label && this.data.item_list[t][s].children && this.data.item_list[t][s].children.length > 0 && (this.data.item_list[t + 1] = this.data.item_list[t][s].children, this.setData({
          item_list: this.data.item_list
        }));
      for (var r = t + 2; r < a.length; r++) a[r].disabled = !0;
      this.setData({
        prop_value: a
      })
    },
    onClickOverlay: function() {
      this.triggerEvent("close")
    },
    check_item: function(e) {
      var t = this.data.prop_value;
      if (t[e.target.dataset.level].name = e.target.dataset.json.label, this.data.return_json[e.target.dataset.level] = {
          value: e.target.dataset.json.value,
          label: e.target.dataset.json.label
        }, e.target.dataset.level < t.length - 1) t[e.target.dataset.level + 1].disabled = !1, this.setData({
        active: e.target.dataset.level + 1
      });
      else {
        var i, s = [],
          r = a(this.data.return_json);
        try {
          for (r.s(); !(i = r.n()).done;) {
            var l = i.value;
            s.push(l.label)
          }
        } catch (e) {
          r.e(e)
        } finally {
          r.f()
        }
        var n = s.join("");
        this.triggerEvent("finshed", {
          json: this.data.return_json,
          location_str: n
        }), this.triggerEvent("close")
      }
      this.setData({
        prop_value: t,
        return_json: this.data.return_json
      })
    },
    getData: function(a, s) {
      var r = this;
      return t(e().mark((function t() {
        var l, n, d, o, _, p, h, u;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return l = r, n = JSON.stringify(n), l.data.item_list[s] = [], d = "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_002_rent_house_company/get_area_multi_picker", wx.showLoading({
                title: "加载中"
              }), e.prev = 5, e.next = 8, i.wx_request(d, a);
            case 8:
              if ((o = e.sent).data)
                if (wx.hideLoading(), "000000000000" == o.data[0].resp_code) {
                  if (_ = o.data.slice(1), s < 3)
                    for (p in _) l.data.item_list[s].push({
                      value: _[p].value,
                      label: _[p].label
                    });
                  else l.data.item_list[s] = _;
                  l.setData({
                    item_list: l.data.item_list
                  })
                } else h = o.data[0].resp_msg + "(" + o.data[0].resp_code + ")", console.log("1006", h), wx.showModal({
                  title: "提示1006",
                  content: h,
                  showCancel: !1
                });
              e.next = 19;
              break;
            case 12:
              e.prev = 12, e.t0 = e.catch(5), console.log("1649383936", e.t0, e.t0.message), wx.hideLoading(), u = e.t0.message, null != e.t0.message && null != e.t0.message || (u = JSON.stringify(e.t0)), wx.showModal({
                title: "提示1649383936",
                content: u + d,
                showCancel: !1
              });
            case 19:
            case "end":
              return e.stop()
          }
        }), t, null, [
          [5, 12]
        ])
      })))()
    }
  }
});