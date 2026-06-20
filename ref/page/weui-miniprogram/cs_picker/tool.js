function t(t) {
  return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
}
module.exports = {
  isString: function(e) {
    return "string" === t(e)
  },
  isPlainObject: function(e) {
    return "object" === t(e)
  }
};