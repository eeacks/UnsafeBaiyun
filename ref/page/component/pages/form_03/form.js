var a = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: "",
    bg_size: 0,
    avatar: null,
    name: "",
    id_card: "",
    mobile_phone: "",
    expire_date: "",
    qr_code: null,
    img_width: 0,
    img_height: 0,
    view_top: 0,
    show_dialog_share: !1,
    show_qrpb: !1,
    img_urls: [],
    buttons_share: [{
      type: "default",
      className: "",
      text: "取消",
      value: 0
    }, {
      type: "primary",
      className: "",
      text: "分享",
      value: 1
    }],
    show_pb: !1
  },
  pickerConfirm: function(a) {
    this.setData({
      pickerHidden: !0
    }), this.setData({
      chosen: a.detail.value
    })
  },
  pickerCancel: function(a) {
    this.setData({
      pickerHidden: !0
    })
  },
  pickerShow: function(a) {
    this.setData({
      pickerHidden: !1
    })
  },
  formSubmit: function(a) {
    console.log("form发生了submit事件，携带数据为：", a.detail.value)
  },
  formReset: function(a) {
    console.log("form发生了reset事件，携带数据为：", a.detail.value), this.setData({
      chosen: ""
    })
  },
  onShow: function() {
    console.log("onShow");
    var e = this;
    a.globalData.page_qrcode_qr_code && this.setData({
      qr_code: a.globalData.page_qrcode_qr_code
    }), a.globalData.page_qrcode_avatar && (console.log("avatar", a.globalData.page_qrcode_avatar), wx.getImageInfo({
      src: a.globalData.page_qrcode_avatar,
      success: function(t) {
        console.log(t.width), console.log(t.height);
        var o, l = parseInt(t.width),
          i = parseInt(t.height),
          s = wx.getSystemInfoSync();
        s.model, s.pixelRatio;
        o = 200 * i / l, console.log(200, o), console.log(l, i), e.setData({
          img_width: 200
        }), e.setData({
          img_height: o
        }), e.setData({
          avatar: a.globalData.page_qrcode_avatar
        })
      },
      fail: function(a) {
        wx.showModal({
          title: "异常",
          content: "获取拍照信息异常-03119",
          showCancel: !1
        })
      }
    })), a.globalData.page_qrcode_name && this.setData({
      name: a.globalData.page_qrcode_name
    }), a.globalData.page_qrcode_id_card && this.setData({
      id_card: a.globalData.page_qrcode_id_card
    }), a.globalData.page_qrcode_mobile_phone && this.setData({
      mobile_phone: a.globalData.page_qrcode_mobile_phone
    }), a.globalData.page_qrcode_expire_date && this.setData({
      expire_date: a.globalData.page_qrcode_expire_date
    });
    var t = wx.getSystemInfoSync(),
      o = t.windowWidth - 5;
    this.setData({
      bg_size: o
    }), t.model.indexOf("iPhone")
  },
  onUnload: function() {
    console.log("onShow"), a.globalData.page_qrcode_avatar = null, a.globalData.page_qrcode_name = null, a.globalData.page_qrcode_id_card = null, a.globalData.page_qrcode_mobile_phone = null, a.globalData.page_qrcode_expire_date = null, a.globalData.page_qrcode_qr_code = null, this.setData({
      avatar: null
    }), this.setData({
      name: ""
    }), this.setData({
      id_card: ""
    }), this.setData({
      mobile_phone: ""
    }), this.setData({
      expire_date: ""
    }), this.setData({
      qr_code: null
    }), wx.reLaunch({
      url: "../../../index_01/pages/my/my"
    })
  },
  onHide: function() {},
  onLoad: function(a) {
    console.log("on_load option", a)
  },
  onShareAppMessage: function() {
    this.data.name, this.data.avatar.split("=")[1], this.data.qr_code;
    var e = {
      title: "平安码丨平安白云您要查看我的个人信息?",
      desc: "您要查看我的个人信息?",
      path: "/module_001/share_qrcode/form?sharer_token=" + a.globalData.access_token
    };
    return console.log("share_obj", e), e
  },
  ask_share: function() {},
  buttontap_confirm_share: function(a) {
    0 == a.detail.index && this.setData({
      show_dialog_share: !1
    })
  },
  showBigQrCode: function() {
    var a = [];
    a.push(this.data.qr_code), this.setData({
      img_urls: a,
      show_qrpb: !0
    })
  },
  show_avator: function() {
    var a = [];
    a.push(this.data.avatar), this.setData({
      img_urls: a,
      show_pb: !0
    })
  }
});