Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.addUnit = function(t) {
  if (!e(t)) return;
  return n(t = String(t)) ? "".concat(t, "px") : t
}, exports.getSystemInfoSync = function() {
  null == r && (r = wx.getSystemInfoSync());
  return r
}, exports.isDef = e, exports.isNumber = n, exports.isObj = function(e) {
  var n = t(e);
  return null !== e && ("object" === n || "function" === n)
}, exports.nextTick = function(t) {
  setTimeout((function() {
    t()
  }), 1e3 / 30)
}, exports.range = function(t, e, n) {
  return Math.min(Math.max(t, e), n)
};
var t = require("../../../@babel/runtime/helpers/typeof");

function e(t) {
  return null != t
}

function n(t) {
  return /^\d+(\.\d+)?$/.test(t)
}
var r = null;