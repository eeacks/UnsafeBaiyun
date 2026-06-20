module.exports.GPS = {
  PI: 3.141592653589793,
  x_pi: 52.35987755982988,
  delta: function(t, a) {
    var n = 6378245,
      h = .006693421622965943,
      i = this.transformLat(a - 105, t - 35),
      s = this.transformLon(a - 105, t - 35),
      r = t / 180 * this.PI,
      o = Math.sin(r);
    o = 1 - h * o * o;
    var e = Math.sqrt(o);
    return {
      lat: i = 180 * i / (n * (1 - h) / (o * e) * this.PI),
      lon: s = 180 * s / (n / e * Math.cos(r) * this.PI)
    }
  },
  gcj_encrypt: function(t, a) {
    if (this.outOfChina(t, a)) return {
      lat: t,
      lon: a
    };
    var n = this.delta(t, a);
    return {
      lat: t + n.lat,
      lon: a + n.lon
    }
  },
  gcj_decrypt: function(t, a) {
    if (this.outOfChina(t, a)) return {
      lat: t,
      lon: a
    };
    var n = this.delta(t, a);
    return {
      lat: t - n.lat,
      lon: a - n.lon
    }
  },
  gcj_decrypt_exact: function(t, a) {
    for (var n, h, i = .01, s = .01, r = t - i, o = a - s, e = t + i, M = a + s, c = 0;;) {
      n = (r + e) / 2, h = (o + M) / 2;
      var l = this.gcj_encrypt(n, h);
      if (i = l.lat - t, s = l.lon - a, Math.abs(i) < 1e-9 && Math.abs(s) < 1e-9) break;
      if (i > 0 ? e = n : r = n, s > 0 ? M = h : o = h, ++c > 1e4) break
    }
    return {
      lat: n,
      lon: h
    }
  },
  bd_encrypt: function(t, a) {
    var n = a,
      h = t,
      i = Math.sqrt(n * n + h * h) + 2e-5 * Math.sin(h * this.x_pi),
      s = Math.atan2(h, n) + 3e-6 * Math.cos(n * this.x_pi);
    return bdLon = i * Math.cos(s) + .0065, bdLat = i * Math.sin(s) + .006, {
      lat: bdLat,
      lon: bdLon
    }
  },
  bd_decrypt: function(t, a) {
    var n = a - .0065,
      h = t - .006,
      i = Math.sqrt(n * n + h * h) - 2e-5 * Math.sin(h * this.x_pi),
      s = Math.atan2(h, n) - 3e-6 * Math.cos(n * this.x_pi),
      r = i * Math.cos(s);
    return {
      lat: i * Math.sin(s),
      lon: r
    }
  },
  mercator_encrypt: function(t, a) {
    var n = 20037508.34 * a / 180,
      h = Math.log(Math.tan((90 + t) * this.PI / 360)) / (this.PI / 180);
    return {
      lat: h = 20037508.34 * h / 180,
      lon: n
    }
  },
  mercator_decrypt: function(t, a) {
    var n = a / 20037508.34 * 180,
      h = t / 20037508.34 * 180;
    return {
      lat: h = 180 / this.PI * (2 * Math.atan(Math.exp(h * this.PI / 180)) - this.PI / 2),
      lon: n
    }
  },
  distance: function(t, a, n, h) {
    var i = Math.cos(t * this.PI / 180) * Math.cos(n * this.PI / 180) * Math.cos((a - h) * this.PI / 180) + Math.sin(t * this.PI / 180) * Math.sin(n * this.PI / 180);
    i > 1 && (i = 1), i < -1 && (i = -1);
    var s = 6371e3 * Math.acos(i);
    return s
  },
  outOfChina: function(t, a) {
    return a < 72.004 || a > 137.8347 || (t < .8293 || t > 55.8271)
  },
  transformLat: function(t, a) {
    var n = 2 * t - 100 + 3 * a + .2 * a * a + .1 * t * a + .2 * Math.sqrt(Math.abs(t));
    return n += 2 * (20 * Math.sin(6 * t * this.PI) + 20 * Math.sin(2 * t * this.PI)) / 3, n += 2 * (20 * Math.sin(a * this.PI) + 40 * Math.sin(a / 3 * this.PI)) / 3, n += 2 * (160 * Math.sin(a / 12 * this.PI) + 320 * Math.sin(a * this.PI / 30)) / 3
  },
  transformLon: function(t, a) {
    var n = 300 + t + 2 * a + .1 * t * t + .1 * t * a + .1 * Math.sqrt(Math.abs(t));
    return n += 2 * (20 * Math.sin(6 * t * this.PI) + 20 * Math.sin(2 * t * this.PI)) / 3, n += 2 * (20 * Math.sin(t * this.PI) + 40 * Math.sin(t / 3 * this.PI)) / 3, n += 2 * (150 * Math.sin(t / 12 * this.PI) + 300 * Math.sin(t / 30 * this.PI)) / 3
  }
};