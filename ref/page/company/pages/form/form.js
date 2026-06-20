var a = getApp();
Page({
  data: {
    pickerHidden: !0,
    chosen: "",
    src: "",
    FDDBR: "",
    ZCH: "",
    GSMC: "",
    YYQX: "",
    DZ: "",
    ZT: "",
    bt_apply_display: !1,
    bt_index_display: !0,
    qrcode_display: !0,
    qr_code: null,
    title: "我的企业",
    standard_address: null,
    company_type: null,
    company_type_second: null,
    is_foreign: null,
    is_express: null,
    legal_person_id_card: null
  },
  onLoad: function(e) {
    var o = this,
      n = decodeURIComponent(e.scene);
    console.log("scene...... company form:", n);
    try {
      if (parseInt(n) > 1) return console.log("scene...... not undefined form_my_company_of_staff/form:", n), void wx.redirectTo({
        url: "../form_my_company_of_staff/form?scene=" + n
      })
    } catch (a) {
      console.log(a)
    }
    o = this;
    wx.showLoading({
      title: "刷新中..."
    });
    var t = {
      openId: a.globalData.openid
    };
    console.log("post_data", t);
    wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/get_company",
      method: "POST",
      dataType: "json",
      data: t,
      success: function(a) {
        if (wx.hideLoading(), console.log("提交信息", a), "000000000000" == a.data[0].resp_code) {
          console.log("提交成功", a.data[0].yyqx);
          var e = "",
            n = "";
          e = 1 == a.data[0].is_foreign ? "是" : "否", n = 1 == a.data[0].is_express ? "是" : "否";
          var t = a.data[0].street_name + a.data[0].street_road_alley_name + a.data[0].house_number_name + a.data[0].room_number + a.data[0].room_type;
          if (o.setData({
              SXPCS: a.data[0].sxpcs,
              SXSQ: a.data[0].sxsq,
              ZCH: a.data[0].zch,
              GSMC: a.data[0].gsmc,
              FDDBR: a.data[0].fddbr,
              DZ: a.data[0].dz,
              YYQX: a.data[0].yyqx,
              legal_person_id_card: a.data[0].legal_person_id_card,
              standard_address: t,
              company_type: a.data[0].company_type,
              company_type_second: a.data[0].company_type_second,
              is_foreign: e,
              is_express: n
            }), 0 == a.data[0].zt) o.setData({
            ZT: "审核中"
          });
          else if (1 == a.data[0].zt) {
            var d = "https://xcx.pinganbaiyun.cn/mini_program/api_01/get_company_qrcode?file_id=" + (a.data[0].company_rec_id + "." + a.data[0].gsmc);
            o.setData({
              ZT: "审核通过",
              bt_apply_display: !0,
              bt_index_display: !1,
              qrcode_display: !1,
              title: a.data[0].gsmc,
              qr_code: d
            })
          } else o.setData({
            ZT: "审核不通过，" + a.data[0].audit_result
          })
        } else "-000000000239" == a.data[0].resp_code ? wx.showModal({
          title: "提示",
          content: "提交失败-0169," + a.data[0].resp_code + a.data[0].resp_msg,
          showCancel: !1,
          success: function() {
            wx.navigateTo({
              url: "../form_ocr_01/form"
            })
          }
        }) : (console.log("err:", a), wx.showModal({
          title: "后台服务器异常",
          content: "提交失败-0169," + a.data[0].resp_code + a.data[0].resp_msg,
          showCancel: !1
        }))
      },
      fail: function(a) {
        wx.hideLoading(), console.log("提交失败，", a), wx.showModal({
          title: "后台服务器异常",
          content: "提交失败-0168," + a.errMsg,
          showCancel: !1
        })
      }
    })
  },
  error: function(a) {
    console.log(a.detail)
  },
  onShow: function() {
    console.log("onShow")
  },
  onUnload: function() {
    console.log("onUnload")
  },
  submit_apply: function() {
    wx.reLaunch({
      url: "../form_ocr_01/form"
    })
  },
  go_index: function() {
    wx.reLaunch({
      url: "../index/index"
    })
  },
  show_company_img: function() {
    var a = this.data.qr_code;
    wx.previewImage({
      current: "",
      urls: [a]
    })
  }
});