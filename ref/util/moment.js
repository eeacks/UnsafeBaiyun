var e = function(e) {
  return this.date = e ? new Date(e) : new Date, this
};
e.prototype.format = function(e) {
  var t = this.date;
  "string" == typeof t && (t = this.parse(t));
  var r = {
    "M+": t.getMonth() + 1,
    "(d+|D+)": t.getDate(),
    "(h+|H+)": t.getHours(),
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "q+": Math.floor((t.getMonth() + 3) / 3),
    S: t.getMilliseconds()
  };
  for (var n in /(y+|Y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))), /(E+)/.test(e) && (e = e.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468" : "") + {
      0: "/u65e5",
      1: "/u4e00",
      2: "/u4e8c",
      3: "/u4e09",
      4: "/u56db",
      5: "/u4e94",
      6: "/u516d"
    } [t.getDay() + ""])), r) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? r[n] : ("00" + r[n]).substr(("" + r[n]).length)));
  return e
}, e.prototype.parse = function() {
  return this.date
}, e.prototype.differ = function(e) {
  var t = this.date.getTime();
  "string" == typeof e && (e = new Date(e));
  t = this.date.getTime();
  var r = e.getTime();
  return Math.ceil((t - r) / 864e5)
}, e.prototype.add = function(e, t) {
  var r = this.date;
  return "day" === t && r.setDate(r.getDate() + e), "month" === t && r.setMonth(r.getMonth() + e), "year" === t && r.setFullYear(r.getFullYear() + e), this.date = r, this
}, e.prototype.before = function(e) {
  return this.date.getTime() < new Date(e).getTime()
}, e.prototype.after = function(e) {
  return this.date.getTime() > e.getTime()
}, module.exports = function(t) {
  return new e(t)
};