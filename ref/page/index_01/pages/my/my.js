var e = require("../../../../@babel/runtime/helpers/typeof"),
  a = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator");
! function(e, a) {
  if (!a && e && e.__esModule) return e;
  if (null === e || "object" != typeof e && "function" != typeof e) return {
    default: e
  };
  var t = n(a);
  if (t && t.has(e)) return t.get(e);
  var o = {},
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
      var r = i ? Object.getOwnPropertyDescriptor(e, s) : null;
      r && (r.get || r.set) ? Object.defineProperty(o, s, r) : o[s] = e[s]
    } o.default = e, t && t.set(e, o)
}(require("../../../../util/regenerator-runtime/runtime"));

function n(e) {
  if ("function" != typeof WeakMap) return null;
  var a = new WeakMap,
    t = new WeakMap;
  return (n = function(e) {
    return e ? t : a
  })(e)
}
var o, i, s, r, c, _, l, d, u, g, p, w, f, h = require("../../../../util/util.js"),
  b = require("../../../../config.js"),
  m = require("../../../../util/rsa_encry.js"),
  x = getApp(),
  k = "https://xcx.pinganbaiyun.cn/strike_black/";
Page({
  data: {
    showToggleCurrentMode: !1,
    sho_login_flag: 0,
    indicatorDots: !0,
    autoplay: !1,
    interval: 500,
    duration: 500,
    showModal_location: !1,
    showModal_help: !1,
    border_radio_text: "",
    border_radio_checked1: !1,
    border_radio_checked2: !1,
    show_visitor_modal: !1,
    show_duty_modal: !1,
    show_jiefen_code: !1,
    jiefen_code_url: "",
    ad_cover_height: 0,
    ad_cover_dispaly: "none",
    close_ad_button_height: 0,
    close_ad_button_dispaly: "flex",
    longitude: "",
    latitude: "",
    access_token_030: "",
    ad_cover_dispaly_big_img: "none",
    close_ad_button_dispaly_big_img: "none",
    timer: 11,
    count_down_str: "10秒后自动关闭...",
    timeout_id: 0,
    swiperH: "",
    nowIdx: 1,
    imgList: [{
      index: 9,
      remark: 1,
      img: "../page_001_welcome_to_baiyun/image/0.1.7/ad_019.png"
    }, {
      index: 2,
      remark: 2,
      img: "../page_001_welcome_to_baiyun/image/0.1.7/ad_012.jpg"
    }, {
      index: 3,
      remark: 3,
      img: "../page_001_welcome_to_baiyun/image/0.1.7/ad_013.jpg"
    }, {
      index: 4,
      remark: 4,
      img: "../page_001_welcome_to_baiyun/image/0.1.7/ad_014.jpg"
    }, {
      index: 6,
      remark: 6,
      img: "../page_001_welcome_to_baiyun/image/0.1.7/ad_016.jpg"
    }, {
      index: 7,
      remark: 7,
      img: "../page_001_welcome_to_baiyun/image/0.1.7/ad_017.png"
    }, {
      index: 8,
      remark: 8,
      img: "../page_001_welcome_to_baiyun/image/0.1.7/ad_018.png"
    }, {
      index: 10,
      remark: 10,
      img: "../page_001_welcome_to_baiyun/image/0.1.7/ad_020.png"
    }],
    nick_name: "云小盾",
    avatar: "../page_001_welcome_to_baiyun/image/img_13202_0_6.png",
    installed_fanzha_img: "../page_001_welcome_to_baiyun/image/fanzha_app_logo.png",
    login_tip: "请登录",
    national_anti_fraud: "NO",
    openid: "",
    weather_temp: "",
    extra_by_health: {
      access_token: ""
    },
    extra_health_report: {
      access_token: ""
    },
    icon_version_id: "",
    bg_version_id: "",
    ad_version_id: "",
    video_version_id: "",
    icon_version_id_update: "",
    bg_version_id_update: "",
    ad_version_id_update: "",
    video_version_id_update: "",
    video_name: "",
    wearther: "",
    message: "",
    role_header: "../page_001_welcome_to_baiyun/image/role_header.png",
    icon_04: "../page_001_welcome_to_baiyun/image/icon_04.png",
    ad_001: "",
    cancel: "",
    user_notice_list: [],
    notice_num: 1,
    show_notice_modal: !1,
    notice_title: "",
    notice_content: "",
    notice_code: "",
    create_date: "",
    query_registered_residence: "https://qv1.pinganbaiyun.cn/img/img_012_online_buzi/query_registered_residence.png",
    temporary_residence_permit: "https://qv1.pinganbaiyun.cn/img/img_012_online_buzi/temporary_residence_permit.png",
    house_number_type: "https://qv1.pinganbaiyun.cn/img/img_012_online_buzi/house_number_type.png",
    show_apply_person_type: !1,
    select_query_type: !1,
    show_border_cert_sel: !1,
    radio_checked1: !1,
    radio_checked2: !1,
    radio_text: "",
    residence_permit_select_type: !1,
    residence_permit_checked1: !1,
    residence_permit_checked2: !1,
    residence_permit_text: "",
    number_type: !1,
    number_type_datalist: [{
      title: "正式门牌申请",
      title_name: "新编门楼号牌",
      checked: !1
    }, {
      title: "临时门牌申请",
      title_name: "新编门楼号牌",
      checked: !1
    }, {
      title: "临时门牌转正式门牌",
      title_name: "新编门楼号牌",
      checked: !1
    }, {
      title: "临时门牌变更",
      title_name: "",
      checked: !1
    }, {
      title: "正式门牌变更",
      title_name: "",
      checked: !1
    }, {
      title: "门楼号牌补录",
      title_name: "",
      checked: !1
    }, {
      title: "补领门楼号牌",
      title_name: "",
      checked: !1
    }, {
      title: "注销门楼号牌",
      title_name: "",
      checked: !1
    }, {
      title: "门楼号牌证明出具",
      title_name: "",
      checked: !1
    }],
    number_title: "",
    number_index: "",
    wmxg: "",
    avatarUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
    nick_name_editable: "",
    avatar_nickname_box_type: !1,
    isShowModel_yjm_res: !1,
    show_ask_send_msg: !1,
    buttons_send_msg: [{
      type: "default",
      className: "",
      text: "取消",
      value: 0
    }, {
      type: "primary",
      className: "",
      text: "允许发送",
      value: 1
    }],
    show_success_info: "",
    gohome_today_date: "",
    net_work_type: "5g",
    go_list: [{
      title: "门禁",
      icon: "../page_001_welcome_to_baiyun/image/平安回家.png"
    }, {
      title: "安居管家",
      icon: "../page_001_welcome_to_baiyun/image/安居助手.png"
    }, {
      title: "乐业管家",
      icon: "../page_001_welcome_to_baiyun/image/乐业管家.png"
    }],
    module_list: [{
      title: "为民解忧",
      retract: !1,
      background: "#D3E5FF",
      title_bg: "../page_001_welcome_to_baiyun/image/为民解忧.png",
      item_list: [{
        icon: "../page_001_welcome_to_baiyun/image/为民解忧/Wanggeyuan.svg",
        title: "有困难，找网格员",
        subtitle: "居住环境有问题立即报",
        sub_item_list: ["上报问题", "标准地址/网格查询"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/为民解忧/jinwujubao.svg",
        title: "警务举报/求助",
        subtitle: "件件有回复，事事有回音",
        sub_item_list: ["所(队)长信箱", "分局长信箱", "网上警务室"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/为民解忧/xueshengqiling.svg",
        title: "学生欺凌线索上报",
        subtitle: "欺凌零容忍，一键护成长",
        sub_item_list: []
      }, {
        icon: "../page_001_welcome_to_baiyun/image/为民解忧/jiufenqiuzhu.svg",
        title: "纠纷求助",
        subtitle: "随时随地解决纠纷，为您提供高效专业调解服务",
        sub_item_list: ["解纷码", "综治中心地图", "欠薪纠纷上报"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/为民解忧/xinlifuwu.svg",
        title: "心理服务",
        subtitle: "倾听您的心声，为您提供心理测评及专业帮助",
        sub_item_list: ["心声倾诉", "心理测评", "专业求助"]
      }]
    }, {
      title: "政务服务",
      retract: !1,
      background: "#FFF6EB",
      title_bg: "../page_001_welcome_to_baiyun/image/政务服务.png",
      item_list: [{
        icon: "../page_001_welcome_to_baiyun/image/政务服务/zhengwufuwu.svg",
        title: "政务办事",
        subtitle: "政府服务，“指”上预约",
        sub_item_list: ["政务办事", "12345服务", "白云区住所(经营场所)使用证明申请"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/政务服务/jingwufuwu.svg",
        title: "警务服务",
        subtitle: "公安服务一键通办",
        sub_item_list: ["报到取号", "居住证办理", "查询户籍档案", "房屋入住登记", "酒店入住登记", "边防证申请", "网办业务记录", "公共安全视频备案登记"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/政务服务/qiyefuwu.svg",
        title: "企业服务",
        subtitle: "白云商事，一键好办",
        sub_item_list: ["食品经营", "网监云确认"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/政务服务/shichangjianguan.svg",
        title: "市场监管",
        subtitle: "商户注册 | 投诉维权，守好您的钱袋子",
        sub_item_list: []
      }, {
        icon: "../page_001_welcome_to_baiyun/image/政务服务/gongpaishuifuwu.svg",
        title: "供(排)水服务",
        subtitle: "供(排)水许可，线上申请",
        sub_item_list: ["排水设施接驳", "排水新办", "排水变更/延期", "供水水表绑定", "供水业务办理", "供水服务资讯"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/政务服务/gongdianfuwu.svg",
        title: "供电服务",
        subtitle: "用心服务，电力无忧",
        sub_item_list: ["停电报障", "电表绑定", "接入证明申请"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/政务服务/chuzuwunashui.svg",
        title: "出租屋税缴纳",
        subtitle: "缴纳房屋租赁税费，多跑网路，少跑马路",
        sub_item_list: []
      }, {
        icon: "../page_001_welcome_to_baiyun/image/政务服务/feishuijiaokuan.svg",
        title: "非税缴款",
        subtitle: "广东公共服务支付，安全无忧",
        sub_item_list: []
      }]
    }, {
      title: "便民生活",
      retract: !1,
      background: "#E2FFF9",
      title_bg: "../page_001_welcome_to_baiyun/image/便民生活.png",
      item_list: [{
        icon: "../page_001_welcome_to_baiyun/image/便民服务/guahaojiuyi.svg",
        title: "挂号就医",
        subtitle: "网上问诊，健康守护",
        sub_item_list: ["预约挂号", "门诊缴费", "查报告单"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/便民服务/baiyunzufang.svg",
        title: "白云租房",
        subtitle: "线上租房，安全便捷",
        sub_item_list: ["省心租", "租商铺", "租写字楼"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/便民服务/zhihuichengguan.svg",
        title: "智慧城管",
        subtitle: "城市管理，人人有责",
        sub_item_list: ["垃圾分类", "燃气屋主自检"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/便民服务/cishanfuwu.svg",
        title: "慈善服务",
        subtitle: "白云区“善暖白云”慈善平台",
        sub_item_list: []
      }, {
        icon: "../page_001_welcome_to_baiyun/image/便民服务/xinlifuwu.svg",
        title: "小志愿，大爱心",
        subtitle: "一起行动参与平安志愿者",
        sub_item_list: ["平安志愿服务", "志愿服务签到", "地址查询"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/便民服务/zaixianjijian.svg",
        title: "在线寄件",
        subtitle: "在线下单，快递员上门取件，轻松便捷",
        sub_item_list: []
      }, {
        icon: "../page_001_welcome_to_baiyun/image/便民服务/baiyuntechan.svg",
        title: "白云品牌土特产，本地特产",
        subtitle: "白云本地优质土特产，产地直发，助力本地农产",
        sub_item_list: []
      }, {
        icon: "../page_001_welcome_to_baiyun/image/便民服务/sanzhuangqiyou.svg",
        title: "散装汽油购买预约",
        subtitle: "点击预约购买散装汽油",
        sub_item_list: []
      }]
    }, {
      title: "管理服务工具",
      retract: !1,
      background: "#DADDFF",
      title_bg_type: "工作人员专栏",
      title_bg: "../page_001_welcome_to_baiyun/image/工作人员专栏背景.png",
      item_list: [{
        icon: "../page_001_welcome_to_baiyun/image/工作人员专栏/zhianlianfangduiyuan.svg",
        title: "治安联防队员",
        subtitle: "安全隐患无隐匿，巡查发现靠大家",
        sub_item_list: []
      }, {
        icon: "../page_001_welcome_to_baiyun/image/工作人员专栏/gongjujihe.svg",
        title: "工具集合",
        subtitle: "点击立即扫码",
        sub_item_list: ["扫一扫", "分局来访登记", "技防服务", "视频接入申请", "故障上报", "会议活动", "派出所的一天", "邮政地图"]
      }, {
        icon: "../page_001_welcome_to_baiyun/image/工作人员专栏/dikongjingji.svg",
        title: "护航低空经济",
        subtitle: "",
        sub_item_list: ["无人机备案", "个人飞行报告", "飞手备案", "我的无人机", "飞行报告记录", "我的执照"]
      }]
    }],
    notices: [{
      title: "粤居码亮码",
      sub_title: "便民生活"
    }, {
      title: "入住登记",
      sub_title: "政务服务"
    }, {
      title: "查询户籍档案",
      sub_title: "政务服务"
    }, {
      title: "边防证申请",
      sub_title: "政务服务"
    }, {
      title: "居住证办理",
      sub_title: "政务服务"
    }, {
      title: "网上警务室",
      sub_title: "为民解忧"
    }, {
      title: "平安码",
      sub_title: "便民生活"
    }],
    show_white_cloud_code: !1,
    img_white_cloud_code: ["https://qv1.pinganbaiyun.cn/img/img_004_index/white_cloud_code.png"],
    has_load_is_bank_staff: !1,
    options_data: null,
    version_info: "v260613001"
  },
  onLoad: function(e) {
    var a = this,
      t = new Date,
      n = t.getFullYear(),
      o = t.getMonth() + 1,
      i = t.getDate();
    o < 10 && (o = "0" + o), i < 10 && (i = "0" + i), this.data.gohome_today_date = n + "/" + o + "/" + i, a.data.options_data = e, console.log("1757073158229 this_page.data.options_data", a.data.options_data), setTimeout((function() {
      var e = !1;
      null != x.globalData.location_info && null != x.globalData.location_info.latitude && null != x.globalData.location_info.latitude && "" != x.globalData.location_info.latitude && (e = !0), 0 != e || null == a.data.options_data || null == a.data.options_data || "face_scan" != a.data.options_data.buzi_type || wx.showModal({
        title: "提示",
        content: "刷脸认证需要您打开定位.再扫码(1772094548531)",
        showCancel: !1,
        success: function(e) {}
      })
    }), 1e4)
  },
  f_003_get_check_state: function(e) {
    return new Promise(function() {
      var n = t(a().mark((function t(n, o) {
        var i, s, r, c;
        return a().wrap((function(a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              if (i = wx.getStorageSync("openid"), s = wx.getStorageSync("unionid"), "" == i || null == i || null == i || "[object Undefined]" == i || "" == s || null == s || null == s || "[object Undefined]" == s) {
                a.next = 7;
                break
              }
              x.globalData.unionid = s, x.globalData.openid = i, a.next = 28;
              break;
            case 7:
              return a.prev = 7, a.next = 10, h.wx_login();
            case 10:
              if (r = a.sent, console.log("1725430951838 login_result:", r), "000000000000" != r.data[0].resp_code) {
                a.next = 19;
                break
              }
              x.globalData.openid = r.data[1].openid, x.globalData.unionid = r.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), a.next = 21;
              break;
            case 19:
              return wx.showModal({
                title: "提示",
                content: r.data[0].resp_msg + "(" + r.data[0].resp_code + ")",
                showCancel: !1,
                success: function(e) {}
              }), a.abrupt("return");
            case 21:
              a.next = 28;
              break;
            case 23:
              return a.prev = 23, a.t0 = a.catch(7), console.log("1725430974078 e:", a.t0), wx.showModal({
                title: "提示",
                content: "(1725430987045)" + JSON.stringify(a.t0),
                showCancel: !1,
                success: function(e) {}
              }), a.abrupt("return");
            case 28:
              wx.showLoading(), c = {
                openId: x.globalData.openid,
                oper_type: e
              }, "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: c,
                success: function(e) {
                  if (wx.hideLoading(), console.log("1725431036448 检查进度结果", e), 200 != e.statusCode) {
                    wx.showModal({
                      title: "提示",
                      content: "(1726112116109)网络异常statusCode:" + e.statusCode,
                      showCancel: !1,
                      success: function(e) {}
                    });
                    var a = {};
                    a.errMsg = "网络异常statusCode:" + e.statusCode, o(a)
                  } else n(e)
                },
                fail: function(e) {
                  wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务 1725431067945", e), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-1," + e.errMsg,
                    showCancel: !1
                  }), o(e)
                }
              });
            case 32:
            case "end":
              return a.stop()
          }
        }), t, null, [
          [7, 23]
        ])
      })));
      return function(e, a) {
        return n.apply(this, arguments)
      }
    }())
  },
  search_click: function() {
    var e = this;
    return t(a().mark((function t() {
      var n, o, i, s;
      return a().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            return h.save_redis("小程序首页搜索"), n = e, a.prev = 2, o = "体验搜索功能需要您注册。", a.next = 6, e.f_003_get_check_state("INDEX");
          case 6:
            "000000000003" == (i = a.sent).data[0].resp_code ? (s = i.data[0].access_token, x.globalData.access_token = s, wx.setStorageSync("access_token", s), wx.navigateTo({
              url: "./search",
              events: {
                callback_search_result: function(e) {
                  console.log("callback_search_result", e), n.f_005_callback_search_result(e)
                },
                someEvent: function(e) {
                  console.log("1725871124796 someEvent", e)
                }
              }
            })) : wx.showModal({
              title: "平安码丨平安白云",
              content: o,
              showCancel: !0,
              cancelText: "暂不注册",
              confirmText: "现在注册",
              success: function(e) {
                1 == e.confirm && wx.navigateTo({
                  url: "../../../component/pages/form_ocr_01/form"
                })
              }
            }), a.next = 15;
            break;
          case 10:
            return a.prev = 10, a.t0 = a.catch(2), console.log("1725431203685 e:", a.t0), wx.showModal({
              title: "提示",
              content: "(1725431203685)" + JSON.stringify(a.t0),
              showCancel: !1,
              success: function(e) {}
            }), a.abrupt("return");
          case 15:
          case "end":
            return a.stop()
        }
      }), t, null, [
        [2, 10]
      ])
    })))()
  },
  f_005_callback_search_result: function(e) {
    console.log("f_005_callback_search_result", e);
    e.currentTarget = {}, e.currentTarget.dataset = {}, e.currentTarget.dataset.item = e.item, e.currentTarget.dataset.big_item = e.big_item, this.sub_item_click(e)
  },
  shouqi_click: function(e) {
    for (var a = e.currentTarget.dataset.index - 0, t = [], n = 0; n < this.data.module_list.length; n++) {
      var o = this.data.module_list[n];
      n == a && (o.retract = !o.retract), t.push(o)
    }
    this.setData({
      module_list: t
    })
  },
  four_item_click: function(e) {
    var n = this;
    return t(a().mark((function t() {
      var o, i, s;
      return a().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            o = e.currentTarget.dataset.item, i = o.title, s = n, a.t0 = i, a.next = "粤居码" === a.t0 ? 6 : "平安码" === a.t0 ? 9 : "平安码" === a.t0 ? 12 : "门禁" === a.t0 ? 15 : "报警小助手" === a.t0 ? 18 : "安居管家" === a.t0 ? 21 : "乐业管家" === a.t0 ? 24 : "白云山预约" === a.t0 ? 27 : 30;
            break;
          case 6:
            return s.go_gd_code(), h.save_redis("粤居码"), a.abrupt("break", 31);
          case 9:
            return s.f_004_go_welcome_to_baiyun(), h.save_redis("平安码"), a.abrupt("break", 31);
          case 12:
            return s.use_barcode_face_check(), h.save_redis("我的凭证"), a.abrupt("break", 31);
          case 15:
            return s.go_home(), h.save_redis("门禁"), a.abrupt("break", 31);
          case 18:
            return h.save_redis("报警小助手"), s.f_002_go_mini_app("transcript"), a.abrupt("break", 31);
          case 21:
            return s.go_rent_house(), h.save_redis("安居管家"), a.abrupt("break", 31);
          case 24:
            return s.go_company(), h.save_redis("乐业管家"), a.abrupt("break", 31);
          case 27:
            return h.save_redis("白云山预约"), s.f_002_go_mini_app("baiyunmountain"), a.abrupt("break", 31);
          case 30:
          case 31:
          case "end":
            return a.stop()
        }
      }), t)
    })))()
  },
  item_click: function(e) {
    var a = e.currentTarget.dataset.item;
    switch (console.log("item_click 1725888123683", a), a.title) {
      case "学生欺凌线索上报":
        wx.navigateTo({
          url: "../../../page_006_common_webview/page_006_common_webview?scene=que&encry_id=JbqxOuiwVrGRBSkkadIRRe6WB2qcRGLm&check_register=YES"
        }), h.save_redis("学生欺凌线索上报");
        break;
      case "矛盾化解":
        this.f_002_go_mini_app("conflict"), h.save_redis("矛盾化解");
        break;
      case "欠薪纠纷上报":
        this.f_002_go_mini_app("ask_salary"), h.save_redis("欠薪纠纷上报");
        break;
      case "白云公共视频管理工具":
        this.f_002_go_mini_app("video_management"), h.save_redis("白云公共视频管理工具");
        break;
      case "居住证办理":
        this.go_book_live_card(), h.save_redis("居住证办理");
        break;
      case "报到取号":
        this.f_002_go_mini_app("TAKE_NUM"), h.save_redis("报到取号");
        break;
      case "市场监管":
        this.f_002_go_mini_app("market_place"), h.save_redis("市场监管");
        break;
      case "同和街党群服务中心":
        this.f_002_go_mini_app("tonghe_gov"), h.save_redis("同和街党群服务中心");
        break;
      case "垃圾分类":
        this.f_002_go_mini_app("recycle"), h.save_redis("垃圾分类");
        break;
      case "慈善服务":
        this.f_002_go_mini_app("people_fair"), h.save_redis("慈善服务");
        break;
      case "在线寄件":
        this.f_002_go_mini_app("express"), h.save_redis("在线寄件");
        break;
      case "云递安采集":
        this.f_002_go_mini_app("logistics"), h.save_redis("云递安采集");
        break;
      case "车辆信息":
        this.f_002_go_mini_app("VEHICLE_INFO"), h.save_redis("车辆信息");
        break;
      case "出租屋税缴纳":
        this.f_002_go_mini_app("house_tax"), h.save_redis("出租屋税缴纳");
        break;
      case "12345服务":
        this.f_002_go_mini_app("HOT_LINE_12345"), h.save_redis("12345服务");
        break;
      case "以案说防":
        this.go_yasf(), h.save_redis("以案说防");
        break;
      case "临时通行":
        this.f_002_go_mini_app("home_pass_power"), h.save_redis("临时通行");
        break;
      case "非税缴款":
        this.f_002_go_mini_app("gd_common_pay", "NO"), h.save_redis("非税缴款");
        break;
      case "银行客户风险核查":
        h.save_redis("银行客户风险核查"), this.go_rent_house("bank_customer_info_query");
        break;
      case "平安码":
        this.f_004_go_welcome_to_baiyun(), h.save_redis("平安码");
        break;
      case "粤居码":
        this.go_gd_code(), h.save_redis("粤居码");
        break;
      case "我的凭证":
        this.use_barcode_face_check(), h.save_redis("我的凭证");
        break;
      case "散装汽油购买预约":
        this.f_002_go_mini_app("buy_bulk_oil"), h.save_redis("散装汽油购买预约");
        break;
      case "平安志愿者":
        this.f_002_go_mini_app("ZYZ"), h.save_redis("平安志愿者");
        break;
      case "扫一扫":
        this.go_scan_code(), h.save_redis("扫一扫");
        break;
      case "治安联防队员":
        this.upload_ur_location(), h.save_redis("治安联防队员");
        break;
      case "分局来访登记":
        this.go_visitor(), h.save_redis("分局来访登记");
        break;
      case "技防服务":
        this.go_tech_defense(), h.save_redis("技防服务");
        break;
      case "视频巡查":
        this.video_check_click(), h.save_redis("视频巡查");
        break;
      case "故障上报":
        this.f_002_go_mini_app("STRIKE_BLACK"), h.save_redis("故障上报");
        break;
      case "会议活动":
        this.f_002_go_mini_app("MEETING_SHOW"), h.save_redis("会议活动");
        break;
      case "非税单据":
        wx.navigateTo({
          url: "/module_004/p_008_non_tax_bill/bill_list/bill_list"
        }), h.save_redis("非税单据");
        break;
      case "智慧城管":
        this.f_002_go_mini_app("recycle_work"), h.save_redis("智慧城管");
        break;
      case "供电服务":
        this.go_rent_house("electric"), h.save_redis("供电服务首页");
        break;
      case "供(排)水服务":
        this.go_rent_house("water_supply"), h.save_redis("供(排)水服务首页");
        break;
      case "网格员":
        this.f_002_go_mini_app("grid_officer"), h.save_redis("网格员");
        break;
      case "白云品牌土特产，本地特产":
        this.f_002_go_mini_app("p_147_agriculture"), h.save_redis("白云品牌土特产，本地特产");
        break;
      case "综治中心地图":
        this.f_002_go_mini_app("p_148_zongzhi_map"), h.save_redis("综治中心地图");
        break;
      case "邮政地图":
        this.f_002_go_mini_app("p_146_china_post_map"), h.save_redis("邮政地图");
        break;
      case "白云山预约":
        this.f_002_go_mini_app("baiyunmountain"), h.save_redis("白云山预约")
    }
  },
  sub_item_click: function(e) {
    var n = e.currentTarget.dataset.item,
      o = e.currentTarget.dataset.big_item;
    console.log("1725547206194 sub_item_click", n, o);
    var i, s;
    if ("小志愿，大爱心" == o) {
      var r = x.globalData.access_token;
      if ("平安志愿服务" == n) return h.save_redis("平安志愿服务"), void wx.navigateTo({
        url: "/page/page_006_common_webview/page_006_common_webview?buzi_type=volunteer_service&access_token=" + r
      });
      if ("志愿服务签到" == n) return h.save_redis("志愿服务签到"), void wx.navigateTo({
        url: "/page/page_006_common_webview/page_006_common_webview?buzi_type=volunteer_signin&access_token=" + r
      });
      if ("地址查询" == n) return h.save_redis("地址查询"), void wx.navigateTo({
        url: "/page/page_006_common_webview/page_006_common_webview?buzi_type=volunteer_address&access_token=" + r
      })
    } else if ("有困难，找网格员" == o) {
      r = x.globalData.access_token;
      if ("标准地址/网格查询" == n) return h.save_redis("标准地址/网格查询"), void wx.navigateTo({
        url: "/page/page_006_common_webview/page_006_common_webview?buzi_type=volunteer_address&access_token=" + r
      })
    } else if ("入住登记" == o) {
      if ("地址查询" == n) return h.save_redis("地址查询"), void this.go_rent_house("address_search")
    } else "白云租房" == o && "首页" == n && (n = "e租房首页");
    switch (n) {
      case "粤居码亮码":
        this.go_gd_code(), h.save_redis("粤居码亮码");
        break;
      case "房屋入住登记":
        this.go_rent_house(), h.save_redis("房屋入住登记");
        break;
      case "酒店入住登记":
        this.go_rent_house(), h.save_redis("酒店入住登记");
        break;
      case "居住证办理":
        this.go_book_live_card(), h.save_redis("居住证办理");
        break;
      case "平安码":
        this.f_004_go_welcome_to_baiyun(), h.save_redis("平安码");
        break;
      case "解纷码":
        this.f_002_go_mini_app("conflict_solute"), h.save_redis("解纷码");
        break;
      case "上报问题":
        this.f_002_go_mini_app("conflict_solute"), h.save_redis("上报问题");
        break;
      case "欠薪纠纷上报":
        this.f_002_go_mini_app("ask_salary"), h.save_redis("欠薪纠纷上报");
        break;
      case "综治中心地图":
        this.f_002_go_mini_app("p_148_zongzhi_map"), h.save_redis("综治中心地图");
        break;
      case "邮政地图":
        this.f_002_go_mini_app("p_146_china_post_map"), h.save_redis("邮政地图");
        break;
      case "12345服务":
        this.f_002_go_mini_app("HOT_LINE_12345"), h.save_redis("12345服务");
        break;
      case "以案说防":
        this.go_yasf(), h.save_redis("以案说防");
        break;
      case "故障上报":
        this.f_002_go_mini_app("STRIKE_BLACK"), h.save_redis("故障上报");
        break;
      case "政务办事":
        this.f_002_go_mini_app("gov_hall"), h.save_redis("政务办事");
        break;
      case "报到取号":
        this.f_002_go_mini_app("TAKE_NUM"), h.save_redis("报到取号");
        break;
      case "垃圾分类":
        this.f_002_go_mini_app("recycle"), h.save_redis("垃圾分类");
        break;
      case "城管工作":
        this.f_002_go_mini_app("recycle_work"), h.save_redis("城管工作");
        break;
      case "城管服务":
        this.f_002_go_mini_app("recycle_serve"), h.save_redis("城管服务");
        break;
      case "慈善服务":
        this.f_002_go_mini_app("people_fair"), h.save_redis("慈善服务");
        break;
      case "在线寄件":
        this.f_002_go_mini_app("express"), h.save_redis("在线寄件");
        break;
      case "云递安采集":
        this.f_002_go_mini_app("logistics"), h.save_redis("云递安采集");
        break;
      case "车辆信息":
        this.f_002_go_mini_app("VEHICLE_INFO"), h.save_redis("车辆信息");
        break;
      case "临时通行":
        this.f_002_go_mini_app("home_pass_power"), h.save_redis("临时通行");
        break;
      case "扫一扫":
        this.go_scan_code(), h.save_redis("扫一扫");
        break;
      case "治安联防队员":
        this.upload_ur_location(), h.save_redis("治安联防队员");
        break;
      case "分局来访登记":
        this.go_visitor(), h.save_redis("分局来访登记");
        break;
      case "技防服务":
        this.go_tech_defense(), h.save_redis("技防服务");
        break;
      case "视频巡查":
        this.video_check_click(), h.save_redis("视频巡查");
        break;
      case "白云公共视频管理工具":
        this.f_002_go_mini_app("video_management"), h.save_redis("白云公共视频管理工具");
        break;
      case "派出所的一天":
        this.f_002_go_mini_app("one_day_in_police_station"), h.save_redis("派出所的一天");
        break;
      case "会议活动":
        this.f_002_go_mini_app("MEETING_SHOW"), h.save_redis("会议活动");
        break;
      case "非税单据":
        wx.navigateTo({
          url: "/module_004/p_008_non_tax_bill/bill_list/bill_list"
        }), h.save_redis("非税单据");
        break;
      case "我的凭证":
        this.use_barcode_face_check(), h.save_redis("我的凭证");
        break;
      case "我的上报":
        this.f_002_go_mini_app("grid_billboard"), h.save_redis("我的上报");
        break;
      case "个人积分":
        this.f_002_go_mini_app("grid_address_search"), h.save_redis("个人积分");
        break;
      case "燃气屋主自检":
        this.f_002_go_mini_app("home_gas_check"), h.save_redis("燃气屋主自检");
        break;
      case "心声倾诉":
        this.f_002_go_mini_app("listen_heard"), h.save_redis("心声倾诉");
        break;
      case "心理测评":
        this.f_002_go_mini_app("mind_test"), h.save_redis("心理测评");
        break;
      case "专业求助":
        this.f_002_go_mini_app("mind_help"), h.save_redis("专业求助");
        break;
      case "网办业务":
        this.go_clue_report(4), h.save_redis("网办业务记录");
        break;
      case "所长信箱":
      case "队长信箱":
      case "所(队)长信箱":
        this.go_clue_report(), h.save_redis("所(队)长信箱");
        break;
      case "分局长信箱":
        this.go_clue_report2(), h.save_redis("分局长信箱");
        break;
      case "烟花爆竹举报":
        this.fireworks_report_click(), h.save_redis("烟花爆竹举报");
        break;
      case "网上警务室":
        this.f_002_go_mini_app("JWS"), h.save_redis("网上警务室");
        break;
      case "平安志愿者":
        this.f_002_go_mini_app("ZYZ"), h.save_redis("平安志愿者");
        break;
      case "我的家":
        this.go_rent_house("welcome_to_baiyun"), h.save_redis("我的家");
        break;
      case "管理员":
      case "入住登记管理员":
        this.go_rent_house("admin_house"), h.save_redis("管理员");
        break;
      case "地址查询":
        this.go_rent_house("welcome_to_baiyun"), h.save_redis("地址查询");
        break;
      case "食品经营":
        h.save_redis("食品经营"), wx.navigateTo({
          url: "../../../../module_002_fda/p_001_fda/index/index"
        });
        break;
      case "网监云确认":
        h.save_redis("网监云确认"), wx.navigateTo({
          url: "../../../../module_002_fda/p_001_fda/cloud_comfirm/index/index"
        });
        break;
      case "网上听证":
        h.save_redis("网上听证"), this.f_002_go_mini_app("market_admin_online_meeting");
        break;
      case "政务办事":
        this.f_002_go_mini_app("gov_hall"), h.save_redis("政务办事");
        break;
      case "白云区住所(经营场所)使用证明申请":
        h.save_redis("白云区住所(经营场所)使用证明申请"), this.address_lib();
        break;
      case "查询户籍档案":
        h.save_redis("查询户籍档案"), this.setData({
          show_apply_person_type: !0,
          select_query_type: !0
        });
        break;
      case "边防证申请":
        h.save_redis("边防证申请"), this.border_defense_certificate();
        break;
      case "网办业务记录":
        h.save_redis("网办业务记录"), this.business_record();
        break;
      case "公共安全视频备案登记":
        h.save_redis("公共安全视频备案登记"), this.p_005_public_video_filing();
        break;
      case "设施接驳":
      case "排水设施接驳":
        h.save_redis("设施接驳"), this.f_002_go_mini_app("release_wast_water_concat");
        break;
      case "新办":
      case "排水新办":
        h.save_redis("新办"), this.f_002_go_mini_app("release_wast_water_new");
        break;
      case "变更/延期":
      case "排水变更/延期":
        h.save_redis("变更/延期"), this.f_002_go_mini_app("release_wast_water_update");
        break;
      case "预约挂号":
        h.save_redis("预约挂号"), this.f_002_go_mini_app("hospital");
        break;
      case "门诊缴费":
        h.save_redis("门诊缴费"), this.f_002_go_mini_app("hospital");
        break;
      case "查报告单":
        h.save_redis("查报告单"), this.f_002_go_mini_app("hospital");
        break;
      case "e租房首页":
        h.save_redis("e租房首页"), this.f_002_go_mini_app("search_house_index");
        break;
      case "省心租":
        h.save_redis("省心租"), this.f_002_go_mini_app("search_house_easy_rent");
        break;
      case "租商铺":
        h.save_redis("租商铺"), this.f_002_go_mini_app("search_house_easy_rent");
        break;
      case "租写字楼":
        h.save_redis("租写字楼"), this.f_002_go_mini_app("search_house_easy_rent");
        break;
      case "我要找房":
        h.save_redis("我要找房"), this.f_002_go_mini_app("search_house_I_want");
        break;
      case "停电报障":
        h.save_redis("停电报障"), this.go_rent_house("GO_ELECTRIC_METER_FAULT");
        break;
      case "电表绑定":
        h.save_redis("电表绑定"), this.go_rent_house("GO_ELECTRIC_METER_BIND");
        break;
      case "接入证明申请":
      case "供电接入证明申请":
        h.save_redis("接入证明申请"), this.go_rent_house("GO_ELECTRIC_METER_PROVE");
        break;
      case "供电问题反馈":
        h.save_redis("供电问题反馈"), this.go_rent_house("GO_ELECTRIC_METER_APPEAL");
        break;
      case "供水水表绑定":
        h.save_redis("供水水表绑定"), this.go_rent_house("GO_WATER_SUPPLY_BIND");
        break;
      case "供水服务资讯":
        h.save_redis("供水服务资讯"), this.go_rent_house("GO_WATER_SUPPLY_POLICY");
        break;
      case "自来水商城":
        h.save_redis("自来水商城"), wx.navigateToMiniProgram({
          appId: "wxbcf695f8b7f4e710",
          path: "/pages/main/index",
          extraData: {},
          envVersion: "release",
          success: (s = t(a().mark((function e(t) {
            return a().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  console.log("police_verify success", t);
                case 1:
                case "end":
                  return e.stop()
              }
            }), e)
          }))), function(e) {
            return s.apply(this, arguments)
          }),
          fail: function(e) {
            console.log("police_verify fail", e), wx.showModal({
              title: "自来水商城跳转失败",
              content: e,
              showCancel: !1,
              success: function() {}
            })
          }
        });
        break;
      case "供水业务办理":
        h.save_redis("供水业务办理");
        wx.navigateToMiniProgram({
          appId: "wx57c5715fd3a99e4a",
          path: "/pages/personal-pages/rechargePay/rechargePay?typeId=0&title=水费缴纳",
          extraData: {},
          envVersion: "release",
          success: (i = t(a().mark((function e(t) {
            return a().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  console.log("police_verify success", t);
                case 1:
                case "end":
                  return e.stop()
              }
            }), e)
          }))), function(e) {
            return i.apply(this, arguments)
          }),
          fail: function(e) {
            console.log("police_verify fail", e), wx.showModal({
              title: "供水服务跳转失败",
              content: e,
              showCancel: !1,
              success: function() {}
            })
          }
        });
        break;
      case "责任人巡岗":
        h.save_redis("责任人巡岗"), this.go_smallest_unit("1");
        break;
      case "从业人员交接班":
        h.save_redis("从业人员交接班"), this.go_smallest_unit("2");
        break;
      case "护学岗扫码":
        h.save_redis("护学岗扫码"), this.go_smallest_unit("3");
        break;
      case "供电服务":
        this.go_rent_house("electric"), h.save_redis("供电服务首页");
        break;
      case "白云山预约":
        h.save_redis("白云山预约"), wx.navigateTo({
          url: "../../../../module_004/baiyun_mount_appointment/index"
        });
        break;
      case "无人机备案":
        h.save_redis("无人机备案");
        var c = "/page/page_006_common_webview/page_006_common_webview?scene=que&encry_id=13kFi80lQ%2BjFdH5THePqVhr2qsywmOHb&check_register=YES";
        wx.navigateTo({
          url: c
        });
        break;
      case "我的无人机":
        h.save_redis("我的无人机");
        c = "/page/page_006_common_webview/page_006_common_webview?scene=que&encry_id=13kFi80lQ%2BjFdH5THePqVhr2qsywmOHb&check_register=YES&xcx_view_initiate=YES";
        wx.navigateTo({
          url: c
        });
        break;
      case "个人飞行报告":
        h.save_redis("个人飞行报告");
        c = "/page/page_006_common_webview/page_006_common_webview?scene=que&encry_id=hcXwVMZR7kSCAMi52NIIP%2BEHC8jcSeJr&check_register=YES";
        wx.navigateTo({
          url: c
        });
        break;
      case "飞行报告记录":
        h.save_redis("飞行报告记录");
        c = "/page/page_006_common_webview/page_006_common_webview?scene=que&encry_id=hcXwVMZR7kSCAMi52NIIP%2BEHC8jcSeJr&check_register=YES&xcx_view_initiate=YES";
        wx.navigateTo({
          url: c
        });
        break;
      case "飞手备案":
        h.save_redis("飞手备案");
        c = "/page/page_006_common_webview/page_006_common_webview?scene=que&encry_id=tcQlt4MNbRhSU5yDzCNQYeTVGQnVQVn3&check_register=YES";
        wx.navigateTo({
          url: c
        });
        break;
      case "我的执照":
        h.save_redis("我的执照");
        c = "/page/page_006_common_webview/page_006_common_webview?scene=que&encry_id=tcQlt4MNbRhSU5yDzCNQYeTVGQnVQVn3&check_register=YES&xcx_view_initiate=YES";
        wx.navigateTo({
          url: c
        })
    }
  },
  f_002_go_mini_app: (f = t(a().mark((function e(n, o) {
    var i, s, r, c, _, l, d, u, g, p;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (console.log("f_002_go_mini_app", n), console.log("buzi_type", n), i = "", s = "", r = "", null != o && null != o && "" != o || (o = "YES"), c = {}, "conflict" != n) {
            e.next = 14;
            break
          }
          i = "wx414ae04ac3f10b4e", s = "pages/homePage/index", r = "体验矛盾化解功能，需要您实名注册。", e.next = 289;
          break;
        case 14:
          if ("ask_salary" != n) {
            e.next = 20;
            break
          }
          i = "wx7211e6ccbedeca16", s = "pages/index/index", r = "体验根治欠薪码上办功能，需要您实名注册。", e.next = 289;
          break;
        case 20:
          if ("student_bullying" != n) {
            e.next = 26;
            break
          }
          i = "wx414ae04ac3f10b4e", s = "pages/homePage/index", r = "体验学生欺凌线索上报功能，需要您实名注册。", e.next = 289;
          break;
        case 26:
          if ("tree_hole" != n) {
            e.next = 32;
            break
          }
          i = "wx8ad44b341355ba18", s = "/pages/index", r = "体验倾听树洞功能，需要您实名注册。", e.next = 289;
          break;
        case 32:
          if ("listen_heard" != n) {
            e.next = 38;
            break
          }
          i = "wx8ad44b341355ba18", s = "/circlePages/edit", r = "体验倾听树洞功能，需要您实名注册。", e.next = 289;
          break;
        case 38:
          if ("mind_test" != n) {
            e.next = 44;
            break
          }
          i = "wx8ad44b341355ba18", s = "/discoverPages/heart_test", r = "体验倾听树洞功能，需要您实名注册。", e.next = 289;
          break;
        case 44:
          if ("mind_help" != n) {
            e.next = 50;
            break
          }
          i = "wx8ad44b341355ba18", s = "/helpPages/submit", r = "体验倾听树洞功能，需要您实名注册。", e.next = 289;
          break;
        case 50:
          if ("recycle" != n) {
            e.next = 56;
            break
          }
          i = "wx73b17a14a1731697", s = "/pages/index/index?access_token=" + x.globalData.access_token, r = "体验垃圾分类功能，需要您实名注册。", e.next = 289;
          break;
        case 56:
          if ("recycle_work" != n) {
            e.next = 62;
            break
          }
          i = "wx8badf046d52d6327", s = "/pages/index/index?access_token=" + x.globalData.access_token, r = "体验城管工作功能，需要您实名注册。", e.next = 289;
          break;
        case 62:
          if ("video_management" != n) {
            e.next = 69;
            break
          }
          i = "wx5bf43f93f46f8f4d", s = "/pages/tabBar/home/home?access_token=" + x.globalData.access_token, c.access_token = x.globalData.access_token, r = "体验视频管理工具，需要您实名注册。", e.next = 289;
          break;
        case 69:
          if ("recycle_serve" != n) {
            e.next = 75;
            break
          }
          i = "wx43c553dcf4ebb9a8", s = "/pages/index/index?access_token=" + x.globalData.access_token, r = "体验城管服务功能，需要您实名注册。", e.next = 289;
          break;
        case 75:
          if ("by_grid_index" != n) {
            e.next = 81;
            break
          }
          i = "wx1e4e8184a3f2d838", s = "pages/index/index", r = "体验网格服务功能，需要您实名注册。", e.next = 289;
          break;
        case 81:
          if ("grid_clue" != n) {
            e.next = 88;
            break
          }
          i = "wx2ac2313767a99df9", s = "pages/web-view/index", r = "体验网格服务功能，需要您实名注册。", c = {
            otherId: "10000004",
            itemId: "1753758267842241",
            redirect: "GridmanReport"
          }, e.next = 289;
          break;
        case 88:
          if ("grid_billboard" != n) {
            e.next = 95;
            break
          }
          i = "wx2ac2313767a99df9", s = "pages/web-view/index", r = "体验网格服务功能，需要您实名注册。", c = {
            otherId: "10000004",
            itemId: "1753758267842241",
            redirect: "GridmanReportList"
          }, e.next = 289;
          break;
        case 95:
          if ("grid_address_search" != n) {
            e.next = 102;
            break
          }
          i = "wx2ac2313767a99df9", s = "pages/web-view/index", r = "体验网格服务功能，需要您实名注册。", c = {
            otherId: "10000004",
            itemId: "1753758267842241",
            redirect: "PersonalCenter"
          }, e.next = 289;
          break;
        case 102:
          if ("conflict_solute" != n) {
            e.next = 108;
            break
          }
          i = "wx2ac2313767a99df9", s = "pages/web-view/index?otherId=10000004&itemId=1753758267842241", r = "体验解纷码功能，需要您实名注册。", e.next = 289;
          break;
        case 108:
          if ("home_gas_check" != n) {
            e.next = 114;
            break
          }
          i = "wx43c553dcf4ebb9a8", s = "pages/gas/gasCheck/index", r = "体验燃气屋主自检功能，需要您实名注册。", e.next = 289;
          break;
        case 114:
          if ("search_house" != n) {
            e.next = 120;
            break
          }
          i = "wx472ec2a896271f64", s = "pages/view/rentIndex/index", r = "体验白云租房功能，需要您实名注册。", e.next = 289;
          break;
        case 120:
          if ("search_house_index" != n) {
            e.next = 126;
            break
          }
          i = "wx472ec2a896271f64", s = "/pages/view/rentIndex/index", r = "体验白云租房功能，需要您实名注册。", e.next = 289;
          break;
        case 126:
          if ("search_house_easy_rent" != n) {
            e.next = 132;
            break
          }
          i = "wx472ec2a896271f64", s = "/pages/view/rentIndex/search/index", r = "体验白云租房省心租功能，需要您实名注册。", e.next = 289;
          break;
        case 132:
          if ("search_house_I_want" != n) {
            e.next = 138;
            break
          }
          i = "wx472ec2a896271f64", s = "/pages/transfer/index", r = "体验我要找房功能，需要您实名注册。", e.next = 289;
          break;
        case 138:
          if ("gov_hall" != n) {
            e.next = 145;
            break
          }
          i = "wx939c5e9d180aaa1a", s = "pages/index/index", r = "体验政通白云功能，需要您实名注册。", console.log("miniprogram_appid", i), e.next = 289;
          break;
        case 145:
          if ("people_fair" != n) {
            e.next = 151;
            break
          }
          i = "wxe7aafa8ad82141d0", s = "", r = "体验善暖白云功能，需要您实名注册。", e.next = 289;
          break;
        case 151:
          if ("release_wast_water_index" != n) {
            e.next = 157;
            break
          }
          i = "wx939c5e9d180aaa1a", s = "/pages2/paishui/paishui", r = "体验白云排水许可功能，需要您实名注册。", e.next = 289;
          break;
        case 157:
          if ("release_wast_water_concat" != n) {
            e.next = 163;
            break
          }
          i = "wx939c5e9d180aaa1a", s = "/pages2/paishui/paishui", r = "体验白云排水许可功能，需要您实名注册。", e.next = 289;
          break;
        case 163:
          if ("release_wast_water_new" != n) {
            e.next = 169;
            break
          }
          i = "wx939c5e9d180aaa1a", s = "/pages2/paishui/paishui", r = "体验白云排水许可功能，需要您实名注册。", e.next = 289;
          break;
        case 169:
          if ("release_wast_water_update" != n) {
            e.next = 175;
            break
          }
          i = "wx939c5e9d180aaa1a", s = "/pages2/paishui/paishui", r = "体验白云排水许可功能，需要您实名注册。", e.next = 289;
          break;
        case 175:
          if ("market_admin_index" != n && "market_admin_food_shop" != n) {
            e.next = 181;
            break
          }
          return _ = "../../../../module_002_fda/p_001_fda/index/index", wx.navigateTo({
            url: _
          }), e.abrupt("return");
        case 181:
          if ("market_admin_leagal_person_confirm" != n) {
            e.next = 186;
            break
          }
          return wx.navigateTo({
            url: "../../../../module_002_fda/p_001_fda/cloud_comfirm/index/index"
          }), e.abrupt("return");
        case 186:
          if ("market_admin_online_meeting" != n) {
            e.next = 190;
            break
          }
          r = "网上听证功能，需要您实名注册。", e.next = 289;
          break;
        case 190:
          if ("hospital" != n) {
            e.next = 196;
            break
          }
          i = "wx753d89cad9761e41", s = "intel_hospital/drill/pages/drillPage/index?unitId=2701&from=scan_code&curtab=baiyunqu&code_id=27014003", r = "体验互联网医院功能，需要您实名注册。", e.next = 289;
          break;
        case 196:
          if ("baiyun_news" != n) {
            e.next = 202;
            break
          }
          i = "wx329a27ee2e3b61d0", s = "", r = "体验白云新闻功能，需要您实名注册。", e.next = 289;
          break;
        case 202:
          if ("express" != n) {
            e.next = 206;
            break
          }
          r = "体验在线寄件功能，需要您实名注册。", e.next = 289;
          break;
        case 206:
          if ("logistics" != n) {
            e.next = 210;
            break
          }
          r = "体验云递安采集功能，需要您实名注册。", e.next = 289;
          break;
        case 210:
          if ("TAKE_NUM" != n) {
            e.next = 214;
            break
          }
          r = "体验报到取号功能，需要您实名注册。", e.next = 289;
          break;
        case 214:
          if ("market_place" != n) {
            e.next = 218;
            break
          }
          r = "体验智慧市场功能，需要您实名注册。", e.next = 289;
          break;
        case 218:
          if ("gonghe_gov" != n) {
            e.next = 222;
            break
          }
          r = "体验同和街党群服务中心功能，需要您实名注册。", e.next = 289;
          break;
        case 222:
          if ("STRIKE_BLACK" != n) {
            e.next = 226;
            break
          }
          r = "体验故障上报功能，需要您实名注册。", e.next = 289;
          break;
        case 226:
          if ("MEETING_SHOW" != n) {
            e.next = 230;
            break
          }
          r = "体验会议活动功能，需要您实名注册。", e.next = 289;
          break;
        case 230:
          if ("HOT_LINE_12345" != n) {
            e.next = 234;
            break
          }
          r = "体验广州12345热线功能，需要您实名注册。", e.next = 289;
          break;
        case 234:
          if ("VEHICLE_INFO" != n) {
            e.next = 238;
            break
          }
          r = "体验车辆信息功能功能，需要您实名注册。", e.next = 289;
          break;
        case 238:
          if ("house_tax" != n) {
            e.next = 244;
            break
          }
          i = "wx9a9c829779a65f4b", s = "", r = "体验出租屋税缴纳功能功能，需要您实名注册。", e.next = 289;
          break;
        case 244:
          if ("JWS" != n) {
            e.next = 248;
            break
          }
          r = "体验网上警务室功能，需要您实名注册。", e.next = 289;
          break;
        case 248:
          if ("ZYZ" != n) {
            e.next = 252;
            break
          }
          r = "体验平安志愿者功能，需要您实名注册。", e.next = 289;
          break;
        case 252:
          if ("home_pass_power" != n) {
            e.next = 256;
            break
          }
          r = "体验临时通行功能，需要您实名注册。", e.next = 289;
          break;
        case 256:
          if ("gd_common_pay" != n) {
            e.next = 264;
            break
          }
          return r = "体验非税缴款功能，需要您实名注册。", l = "../../../../module_004/page_008_gov_bill/page_009_bill_search", console.log("gd_common_pay navigate_url 001", l), wx.navigateTo({
            url: l
          }), e.abrupt("return");
        case 264:
          if ("buy_bulk_oil" != n) {
            e.next = 268;
            break
          }
          r = "体验散装汽油购买预约功能，需要您实名注册。", e.next = 289;
          break;
        case 268:
          if ("grid_officer" != n) {
            e.next = 272;
            break
          }
          r = "体验网格员功能，需要您实名注册。", e.next = 289;
          break;
        case 272:
          if ("p_147_agriculture" != n) {
            e.next = 280;
            break
          }
          return _ = "/page/page_006_common_webview/page_006_common_webview?buzi_type=" + n, console.log("1729751478203 url", _), _ = encodeURI(_), wx.redirectTo({
            url: _
          }), e.abrupt("return");
        case 280:
          if ("p_148_zongzhi_map" != n && "p_146_china_post_map" != n) {
            e.next = 288;
            break
          }
          return _ = "/page/page_006_common_webview/page_006_common_webview?buzi_type=" + n, console.log("1729751478206 url", _), _ = encodeURI(_), wx.redirectTo({
            url: _
          }), e.abrupt("return");
        case 288:
          "baiyunmountain" == n && (r = "体验白云山预约功能，需要您实名注册。");
        case 289:
          if (wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), d = wx.getStorageSync("openid"), u = wx.getStorageSync("unionid"), "" == d || null == d || null == d || "[object Undefined]" == d || "" == u || null == u || null == u || "[object Undefined]" == u) {
            e.next = 298;
            break
          }
          x.globalData.unionid = u, x.globalData.openid = d, e.next = 319;
          break;
        case 298:
          return e.prev = 298, e.next = 301, h.wx_login();
        case 301:
          if (g = e.sent, console.log("login_result:", g), "000000000000" != g.data[0].resp_code) {
            e.next = 310;
            break
          }
          x.globalData.openid = g.data[1].openid, x.globalData.unionid = g.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), e.next = 312;
          break;
        case 310:
          return wx.showModal({
            title: "提示",
            content: g.data[0].resp_msg + "(" + g.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 312:
          e.next = 319;
          break;
        case 314:
          return e.prev = 314, e.t0 = e.catch(298), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 319:
          p = {
            openId: x.globalData.openid,
            oper_type: "INDEX"
          }, _ = "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
            url: _,
            method: "POST",
            dataType: "json",
            data: p,
            success: function() {
              var e = t(a().mark((function e(t) {
                var _, l, d, u, g, p, w, f, b, m;
                return a().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", t), 200 == t.statusCode) {
                        e.next = 5;
                        break
                      }
                      return wx.showModal({
                        title: "提示",
                        content: "(1726112116110)网络异常statusCode:" + t.statusCode,
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 5:
                      if ("000000000003" != t.data[0].resp_code && "NO" != o) {
                        e.next = 150;
                        break
                      }
                      if (_ = t.data[0].access_token, x.globalData.access_token = _, c.access_token = _, "express" != n) {
                        e.next = 12;
                        break
                      }
                      return wx.navigateTo({
                        url: "../../../third_part/pages/express/form?buzi_type=" + n
                      }), e.abrupt("return");
                    case 12:
                      if ("logistics" != n) {
                        e.next = 17;
                        break
                      }
                      return wx.navigateTo({
                        url: "../../../third_part/pages/express/form?buzi_type=" + n
                      }), e.abrupt("return");
                    case 17:
                      if ("TAKE_NUM" != n) {
                        e.next = 24;
                        break
                      }
                      return wx.setStorageSync("access_token", x.globalData.access_token), wx.setStorageSync("openid", x.globalData.openid), wx.showActionSheet({
                        itemList: ["出入境业务", "户政业务", "一窗通办（含户政、出入境）"],
                        success: function(e) {
                          if (0 == e.tapIndex) wx.navigateTo({
                            url: "../../../../module_001/online_take_num/index/index?type=0&itemList_name=出入境取号"
                          });
                          else if (1 == e.tapIndex) wx.navigateTo({
                            url: "../../../../module_001/online_take_num/index/index?type=1&itemList_name=户政取号"
                          });
                          else if (2 == e.tapIndex) return void wx.showModal({
                            title: "一窗通办（含户政、出入境）取号业务升级中",
                            content: "",
                            showCancel: !1,
                            success: function(e) {}
                          });
                          console.log("1725433159604", e.tapIndex)
                        },
                        fail: function(e) {
                          console.log("1725433159605", e.errMsg)
                        }
                      }), e.abrupt("return");
                    case 24:
                      if ("market_place" != n) {
                        e.next = 32;
                        break
                      }
                      return l = "/page/page_006_common_webview/page_006_common_webview?buzi_type=" + n + "&access_token=" + _, console.log("1729751478203 url", l), l = encodeURI(l), wx.redirectTo({
                        url: l
                      }), e.abrupt("return");
                    case 32:
                      if ("tonghe_gov" != n) {
                        e.next = 40;
                        break
                      }
                      return l = "/page/page_006_common_webview/page_006_common_webview?scene=" + n + "&access_token=" + _, console.log("1729751478204 url", l), l = encodeURI(l), wx.redirectTo({
                        url: l
                      }), e.abrupt("return");
                    case 40:
                      if ("one_day_in_police_station" != n) {
                        e.next = 48;
                        break
                      }
                      return l = "/page/page_006_common_webview/page_006_common_webview?scene=" + n + "&access_token=" + _, console.log("1729751478204 url", l), l = encodeURI(l), wx.redirectTo({
                        url: l
                      }), e.abrupt("return");
                    case 48:
                      if ("transcript" != n) {
                        e.next = 56;
                        break
                      }
                      return l = "/page/page_006_common_webview/page_006_common_webview?scene=transcript&access_token=" + _ + "&encry_id=1742274729078", console.log("1729751478205 url", l), l = encodeURI(l), wx.redirectTo({
                        url: l
                      }), e.abrupt("return");
                    case 56:
                      if ("MEETING_SHOW" != n) {
                        e.next = 64;
                        break
                      }
                      return l = "/page/page_006_common_webview/page_006_common_webview?scene=MEETING_SHOW&access_token=" + _ + "&encry_id=1742274729078", console.log("1729751478205 url", l), l = encodeURI(l), wx.redirectTo({
                        url: l
                      }), e.abrupt("return");
                    case 64:
                      if ("market_admin_online_meeting" != n) {
                        e.next = 72;
                        break
                      }
                      return l = "/page/page_006_common_webview/page_006_common_webview?buzi_type=p_081_online_court&access_token=" + _, console.log("1725434888483 url", l), l = encodeURI(l), wx.redirectTo({
                        url: l
                      }), e.abrupt("return");
                    case 72:
                      if ("STRIKE_BLACK" != n) {
                        e.next = 77;
                        break
                      }
                      return wx.navigateTo({
                        url: "../../../third_part/pages/strike_black/form"
                      }), e.abrupt("return");
                    case 77:
                      if ("HOT_LINE_12345" != n) {
                        e.next = 83;
                        break
                      }
                      return wx.navigateTo({
                        url: "../../../../module_001/p_010_municipal_government/municipal_government_index"
                      }), e.abrupt("return");
                    case 83:
                      if ("VEHICLE_INFO" != n) {
                        e.next = 89;
                        break
                      }
                      return d = "../../../../module_004/vehicle_info/vehicle_info_index?access_token=" + _, wx.navigateTo({
                        url: d
                      }), e.abrupt("return");
                    case 89:
                      if ("JWS" != n) {
                        e.next = 96;
                        break
                      }
                      return wx.setStorageSync("access_token", x.globalData.access_token), wx.setStorageSync("openid", x.globalData.openid), wx.navigateTo({
                        url: "/module_004/p_003_policing_room/index/index"
                      }), e.abrupt("return");
                    case 96:
                      if ("ZYZ" != n) {
                        e.next = 106;
                        break
                      }
                      return u = wx.getStorageSync("nick_name"), g = wx.getStorageSync("avatar"), console.log("nick_name", u, g), wx.setStorageSync("access_token", x.globalData.access_token), wx.setStorageSync("openid", x.globalData.openid), wx.navigateTo({
                        url: "/module_004/p_007_baiyun_volunteer/index/index?nick_name=" + u + "&avatar=" + g
                      }), e.abrupt("return");
                    case 106:
                      if ("gd_common_pay" != n) {
                        e.next = 116;
                        break
                      }
                      return i = "wx05dbdc4a18db26a2", s = "", r = "体验非税缴款功能，需要您实名注册。", p = "../../../../module_004/page_008_gov_bill/page_009_bill_search", console.log("gd_common_pay navigate_url 002", p), wx.navigateTo({
                        url: p
                      }), e.abrupt("return");
                    case 116:
                      if ("home_pass_power" != n) {
                        e.next = 125;
                        break
                      }
                      return w = "../../../page_006_common_webview/page_006_common_webview?url=https://mjjs.baiyunmenjin.com/icmspasspower?access_token=" + _ + "&params=", console.log("icmspasspower COMMON_WEBVIEW navigate_url", w), wx.navigateTo({
                        url: w
                      }), e.abrupt("return");
                    case 125:
                      if ("buy_bulk_oil" != n) {
                        e.next = 131;
                        break
                      }
                      return f = "/module_004/gas_station/gas_station_index?access_token=" + _, wx.navigateTo({
                        url: f
                      }), e.abrupt("return");
                    case 131:
                      if ("grid_officer" != n) {
                        e.next = 139;
                        break
                      }
                      return l = "/page/page_006_common_webview/page_006_common_webview?buzi_type=" + n + "&access_token=" + _, console.log("1732019894379 url", l), l = encodeURI(l), wx.redirectTo({
                        url: l
                      }), e.abrupt("return");
                    case 139:
                      if ("baiyunmountain" != n) {
                        e.next = 142;
                        break
                      }
                      return wx.navigateTo({
                        url: "../../../../module_004/baiyun_mount_appointment/index?access_token=" + _
                      }), e.abrupt("return");
                    case 142:
                      b = {}, null == x.globalData.SYSTEMINFO ? (b = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", b)) : b = x.globalData.SYSTEMINFO, m = h.compareVersion(b.SDKVersion, "2.20.1"), "search_house_index" != n && "search_house_easy_rent" != n && "search_house" != n && "search_house_I_want" != n || (m = -100), console.log("diff_version_002", m, i, s, c), m >= 0 ? wx.openEmbeddedMiniProgram({
                        appId: i,
                        path: s,
                        allowFullScreen: !0,
                        extraData: c,
                        envVersion: "release",
                        success: function(e) {
                          console.log("openEmbeddedMiniProgram res", e)
                        }
                      }) : wx.navigateToMiniProgram({
                        appId: i,
                        path: s,
                        extraData: c,
                        envVersion: "release",
                        success: function(e) {
                          console.log("navigateToMiniProgram res", e)
                        }
                      }), e.next = 154;
                      break;
                    case 150:
                      return x.globalData.back_url = "INDEX", "express" == n ? x.globalData.back_url = "EXPRESS" : "logistics" == n ? x.globalData.back_url = n : "TAKE_NUM" == n ? (x.globalData.back_url = "TAKE_NUM", wx.setStorageSync("encry_id", "all")) : "market_admin_online_meeting" == n ? x.globalData.back_url = "ONLINE_COURT" : "MEETING_SHOW" == n ? x.globalData.back_url = "MEETING" : "HOT_LINE_12345" == n ? x.globalData.back_url = "HOT_LINE_12345" : "VEHICLE_INFO" == n || ("JWS" == n ? x.globalData.back_url = "JWS" : "ZYZ" == n ? x.globalData.back_url = "ZYZ" : "home_pass_power" == n || "buy_bulk_oil" == n && (x.globalData.back_url = "buy_bulk_oil")), wx.showModal({
                        title: "平安码丨平安白云",
                        content: r,
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          if (1 == e.confirm) wx.navigateTo({
                            url: "../../../component/pages/form_ocr_01/form"
                          });
                          else if ("gov_hall" == n || "gov_hall" == n || "gov_hall" == n || "gov_hall" == n) {
                            var a = {};
                            null == x.globalData.SYSTEMINFO ? (a = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", a)) : a = x.globalData.SYSTEMINFO;
                            var t = h.compareVersion(a.SDKVersion, "2.20.1");
                            console.log("diff_version_002", t, i, s, c), t >= 0 ? wx.openEmbeddedMiniProgram({
                              appId: i,
                              path: s,
                              allowFullScreen: !0,
                              extraData: c,
                              envVersion: "release",
                              success: function(e) {
                                console.log("openEmbeddedMiniProgram res", e)
                              }
                            }) : wx.navigateToMiniProgram({
                              appId: i,
                              path: s,
                              extraData: c,
                              envVersion: "release",
                              success: function(e) {
                                console.log("navigateToMiniProgram res", e)
                              }
                            })
                          }
                        }
                      }), e.abrupt("return");
                    case 154:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }(),
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 320:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [298, 314]
    ])
  }))), function(e, a) {
    return f.apply(this, arguments)
  }),
  avatar_nickname_box_close: function() {
    this.setData({
      avatar_nickname_box_type: !1
    })
  },
  gohomeUpload: function(e) {
    var a = wx.getStorageSync("bleRecord");
    if ("" != a && null != a && null != a && a.length > 0) {
      for (var t = 0; t < a.length; t++) {
        var n = a[t];
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/upload_bluetooth_open_record",
          method: "POST",
          data: n,
          header: {
            "Content-type": "application/json",
            cloud_shield_token: e
          },
          success: function(e) {
            console.log("upload record res", e), e.data[0].resp_code
          },
          fail: function(e) {}
        })
      }
      wx.setStorageSync("bleRecord", [])
    }
  },
  onShow: (w = t(a().mark((function e() {
    var n, o, i, s, r, c, _, l, d, u, g, p, w, f, b, m, k, v;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return n = this, "YES" == wx.getStorageSync("mailbox_auto_login") && (wx.removeStorageSync("mailbox_auto_login"), n.setData({
            avatar_nickname_box_type: !0
          })), n.data.icon_version_id_update = wx.getStorageSync("icon_version_id"), n.data.bg_version_id_update = wx.getStorageSync("bg_version_id"), n.data.ad_version_id_update = wx.getStorageSync("ad_version_id"), n.data.video_version_id_update = wx.getStorageSync("video_version_id"), e.next = 8, h.async_get_net_work_type();
        case 8:
          if (o = e.sent, n.data.net_work_type = o.networkType, console.log("that.data.net_work_type", n.data.net_work_type), "none" !== n.data.net_work_type) {
            e.next = 15;
            break
          }
          return n.setData({
            count_down_str: ""
          }), wx.showToast({
            title: "您处于离线状态",
            icon: "none",
            duration: 3e3
          }), e.abrupt("return");
        case 15:
          if (console.log("my.js onshow"), i = this, wx.hideLoading(), null == x.globalData.SYSTEMINFO) s = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", s);
          else try {
            -1 == x.globalData.SYSTEMINFO.errMsg.indexOf("ok") && (console.log("app.globalData.SYSTEMINFO.errMsg not found:", x.globalData.SYSTEMINFO.errMsg), s = wx.getSystemInfoSync()), console.log("app.globalData.SYSTEMINFO.errMsg ok:", x.globalData.SYSTEMINFO.errMsg), s = x.globalData.SYSTEMINFO
          } catch (e) {
            console.log(e), s = wx.getSystemInfoSync()
          }
          if (r = s.windowHeight, c = s.windowWidth, s.pixelRatio, s.model, s.version, x.globalData.access_token = null, _ = wx.getStorageSync("openid"), l = wx.getStorageSync("unionid"), "" == _ || null == _ || null == _ || "[object Undefined]" == _ || "" == l || null == l || null == l || "[object Undefined]" == l) {
            e.next = 33;
            break
          }
          x.globalData.unionid = l, x.globalData.openid = _, e.next = 55;
          break;
        case 33:
          if ("none" === n.data.net_work_type) {
            e.next = 55;
            break
          }
          return e.prev = 34, e.next = 37, h.wx_login();
        case 37:
          if (d = e.sent, console.log("login_result:", d), "000000000000" != d.data[0].resp_code) {
            e.next = 46;
            break
          }
          x.globalData.openid = d.data[1].openid, x.globalData.unionid = d.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), e.next = 48;
          break;
        case 46:
          return wx.showModal({
            title: "提示",
            content: d.data[0].resp_msg + "(" + d.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 48:
          e.next = 55;
          break;
        case 50:
          return e.prev = 50, e.t0 = e.catch(34), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 55:
          i.setData({
            openid: x.globalData.openid
          }), "none" !== n.data.net_work_type && n.get_user_notice(x.globalData.openid, "", ""), "none" !== n.data.net_work_type && (u = {
            openId: x.globalData.openid,
            oper_type: "INDEX"
          }, g = "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
            url: g,
            method: "POST",
            dataType: "json",
            data: u,
            success: function() {
              var e = t(a().mark((function e(t) {
                var o, s, r, c, _, l;
                return a().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("首页 onshow 检查进度结果", t), i.data.gohome_today_date = t.data[0].today_date, "000000000003" != t.data[0].resp_code) {
                        e.next = 53;
                        break
                      }
                      x.globalData.access_token = t.data[0].access_token, i.gohomeUpload(t.data[0].access_token), i.get_location_role(), 0 == i.data.has_load_is_bank_staff && i.get_is_bank_staff(), o = wx.getStorageSync("avatar"), s = wx.getStorageSync("nick_name"), r = wx.getStorageSync("nick_name_last_date"), c = wx.getStorageSync("ask_nick_name_today"), i.setData({
                        sho_login_flag: 1
                      }), console.log("获取保存的用户信息 nick_name", s), e.next = 20;
                      break;
                    case 20:
                      return e.prev = 20, _ = {
                        openId: x.globalData.openid
                      }, e.next = 25, h.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_01/get_wx_user_info", _);
                    case 25:
                      "" == (t = e.sent).data[0].nickName ? i.setData({
                        nick_name: "云小盾",
                        avatar: "../page_001_welcome_to_baiyun/image/img_13202_0_6.png",
                        login_tip: "请登录",
                        sho_login_flag: 0
                      }) : (o = t.data[0].avatarUrl, "微信用户" == (s = t.data[0].nickName) ? (i.setData({
                        sho_login_flag: 0
                      }), i.setData({
                        nick_name: "云小盾",
                        avatar: "../page_001_welcome_to_baiyun/image/img_13202_0_6.png",
                        login_tip: "请登录"
                      })) : (wx.setStorageSync("avatar", o), wx.setStorageSync("nick_name", s), i.setData({
                        nick_name: s,
                        avatar: o,
                        login_tip: "我的信息"
                      }))), e.next = 34;
                      break;
                    case 29:
                      e.prev = 29, e.t0 = e.catch(20), console.log("获取保存的用户信息 e", e.t0), i.setData({
                        sho_login_flag: 0
                      }), i.setData({
                        nick_name: "云小盾",
                        avatar: "../page_001_welcome_to_baiyun/image/img_13202_0_6.png",
                        login_tip: "请登录"
                      });
                    case 34:
                      if (l = (new Date).getTime(), null == c || null == c || "" == c) {
                        e.next = 48;
                        break
                      }
                      if (!(l - c > 864e5)) {
                        e.next = 45;
                        break
                      }
                      if (!(l - r > 2592e6)) {
                        e.next = 42;
                        break
                      }
                      return i.get_user_info_role(), e.abrupt("return");
                    case 42:
                    case 43:
                      e.next = 46;
                      break;
                    case 45:
                    case 46:
                      e.next = 50;
                      break;
                    case 48:
                      return i.get_user_info_role(), e.abrupt("return");
                    case 50:
                      return e.abrupt("return");
                    case 53:
                      return n.setData({
                        message: "../../../../image/without_notice.png",
                        user_notice_list: [],
                        notice_num: 0
                      }), i.setData({
                        sho_login_flag: 0
                      }), e.abrupt("return");
                    case 57:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [20, 29]
                ])
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }(),
            fail: function(e) {
              console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e)
            }
          })), "none" !== n.data.net_work_type && (u = {
            openId: x.globalData.openid,
            unionId: x.globalData.unionid
          }, g = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_openId_unionId", console.log(g, u), wx.request({
            url: g,
            method: "POST",
            dataType: "json",
            data: u,
            success: function(e) {},
            fail: function(e) {
              console.log("upload_openId_unionId 提交失败，", e)
            }
          }));
        case 59:
          p = (new Date).getTime(), console.log("浏览广告日期", p), w = "";
          try {
            w = wx.getStorageSync("day")
          } catch (e) {}
          x.globalData.show_ad_cover = !1, parseInt(p) - parseInt(w) < 9e5 && (x.globalData.show_ad_cover = !1), 1 == x.globalData.show_ad_cover ? (wx.getStorage({
            key: "cancel",
            success: function(e) {
              n.setData({
                cancel: e.data
              })
            },
            fail: function(e) {
              n.returnGetIcon("cancel")
            }
          }), f = this.data.timeout_id, clearTimeout(f), this.data.timer = 10, m = 600 / (b = 1800), k = r / 2 - (b = .33 * c / m) / 2 - 110, console.log(r, b, k), i.setData({
            ad_cover_dispaly: "",
            close_ad_button_dispaly: "flex",
            ad_cover_height: r - 0,
            close_ad_button_height: k,
            ad_001: "https://xcx.pinganbaiyun.cn/questionare/img/anti_fraud_propaganda.jpg"
          }), i.run_timer()) : i.setData({
            ad_cover_dispaly: "none",
            close_ad_button_dispaly: "none",
            ad_cover_dispaly_big_img: "none",
            close_ad_button_dispaly_big_img: "none"
          }), "none" !== n.data.net_work_type && (g = "https://xcx.pinganbaiyun.cn/mini_program/api_05_rent_house_mini_program/get_yasf_list", wx.request({
            url: g,
            method: "GET",
            dataType: "json",
            data: {
              foo: "foo"
            },
            success: function(e) {
              "000000000000" == e.data[0].resp_code ? i.setData({
                weather_temp: e.data[0].temp2
              }) : wx.showModal({
                title: "提示",
                content: "获取数据异常-3:" + e.data[0].resp_code + e.data[0].resp_msg,
                showCancel: !1
              })
            },
            fail: function(e) {
              console.log("失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取数据异常-4," + e.errMsg,
                showCancel: !1
              })
            }
          })), "" != (v = wx.getStorageSync("s_001_yjm_checkin")) && null != v && null != v && "[object Undefined]" != v && i.setData({
            isShowModel_yjm_res: !0
          }), x.globalData.app_version = i.data.version_info;
        case 69:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [34, 50]
    ])
  }))), function() {
    return w.apply(this, arguments)
  }),
  get_is_bank_staff: function() {
    var e = this;
    wx.request({
      url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/get_user_is_bank_staff",
      method: "POST",
      data: {},
      header: {
        "Content-type": "application/json",
        cloud_shield_token: x.globalData.access_token
      },
      success: function(a) {
        if ((console.log("bank_res", a), wx.hideLoading(), "000000000000" == a.data[0].resp_code) && (e.data.has_load_is_bank_staff = !0, a.data[0].is_bank_staff)) {
          for (var t = 0; t < e.data.module_list.length; t++) {
            var n = e.data.module_list[t];
            if ("政务服务" == n.title) {
              for (var o = !1, i = 0; i < n.item_list.length; i++) {
                if ("银行客户风险核查" == n.item_list[i].title) {
                  o = !0;
                  break
                }
              }
              0 == o && n.item_list.push({
                icon: "../page_001_welcome_to_baiyun/image/银行客户风险核查.svg",
                title: "银行客户风险核查",
                subtitle: "智能查询，防范欺诈风险",
                sub_item_list: []
              })
            }
          }
          e.setData({
            module_list: e.data.module_list
          })
        }
      },
      fail: function(e) {}
    })
  },
  get_user_notice: (p = t(a().mark((function e(t, n, o) {
    var i, s, r, c, _, l, d, u, g, p, w, f;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (i = this, "" == t || null == t || null == t) {
            e.next = 8;
            break
          }
          return s = {
            openId: t,
            cur_page: 1,
            state: "0"
          }, r = b.get_url() + "p_049_user_msg_server/api_001_user/get_notice_list", e.next = 6, h.wx_request(r, s);
        case 6:
          if ("000000000000" == (c = e.sent).data[0].resp_code) {
            for (_ = c.data[0].total_rec, l = c.data[0].national_anti_fraud, d = c.data[0].wmxg, u = [], g = 1; g < c.data.length; g++)(p = {}).notice_title = c.data[g].notice_title, p.notice_content = c.data[g].notice_content, p.notice_code = c.data[g].notice_code, p.jump_page = c.data[g].jump_page, p.jump_param = c.data[g].jump_param, p.create_date = c.data[g].create_date, p.busi_type = c.data[g].busi_type, u.push(p);
            w = i.data.message, 0 == _ && (w = "../../../../image/without_notice.png"), i.setData({
              notice_num: _,
              user_notice_list: u,
              message: w,
              national_anti_fraud: l,
              wmxg: d
            }), f = "mode_default";
            try {
              f = wx.getStorageSync("current_mode") || "mode_default"
            } catch (e) {
              f = "mode_default", console.log("1733918556103", e)
            }
            console.log("1733918408549 mode", f), "mode_simple" === f && (console.log("1733918408550------------------ mode_storage", f), i.quickGotoSimple())
          }
        case 8:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(e, a, t) {
    return p.apply(this, arguments)
  }),
  getIconData: function(e, a) {
    var t = this;
    "wearther" != a && "all" != a || wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/sv_003_get_icon_base64",
      method: "POST",
      dataType: "json",
      data: {
        file_id: "wearther.png",
        icon_type: "icon",
        version_id: e
      },
      header: {
        "content-type": "application/json"
      },
      success: function(e) {
        "000000000000" == e.data[0].resp_code && (t.setData({
          wearther: e.data[0].img_base64
        }), wx.setStorage({
          key: "wearther",
          data: e.data[0].img_base64
        }))
      },
      fail: function(e) {
        e && (wx.showModal({
          title: "提示",
          content: "请在网络良好的环境打开小程序",
          showCancel: !1
        }), console.log("缓存异常two", e))
      }
    }), "message" != a && "all" != a || wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/sv_003_get_icon_base64",
      method: "POST",
      dataType: "json",
      data: {
        file_id: "message.png",
        icon_type: "icon",
        version_id: e
      },
      header: {
        "content-type": "application/json"
      },
      success: function(e) {
        "000000000000" == e.data[0].resp_code && (t.setData({
          message: e.data[0].img_base64
        }), wx.setStorage({
          key: "message",
          data: e.data[0].img_base64
        }))
      },
      fail: function(e) {
        e && wx.showModal({
          title: "提示",
          content: "请在网络良好的环境打开小程序",
          showCancel: !1
        })
      }
    }), "role_header" != a && "all" != a || wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/sv_003_get_icon_base64",
      method: "POST",
      dataType: "json",
      data: {
        file_id: "role_header.png",
        icon_type: "icon",
        version_id: e
      },
      header: {
        "content-type": "application/json"
      },
      success: function(e) {
        "000000000000" == e.data[0].resp_code && (t.setData({
          role_header: e.data[0].img_base64
        }), wx.setStorage({
          key: "role_header",
          data: e.data[0].img_base64
        }))
      },
      fail: function(e) {
        e && wx.showModal({
          title: "提示",
          content: "请在网络良好的环境打开小程序",
          showCancel: !1
        })
      }
    }), "icon_04" != a && "all" != a || wx.request({
      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/sv_003_get_icon_base64",
      method: "POST",
      dataType: "json",
      data: {
        file_id: "icon_04.png",
        icon_type: "icon",
        version_id: e
      },
      header: {
        "content-type": "application/json"
      },
      success: function(e) {
        "000000000000" == e.data[0].resp_code && (t.setData({
          icon_04: e.data[0].img_base64
        }), wx.setStorage({
          key: "icon_04",
          data: e.data[0].img_base64
        }))
      },
      fail: function(e) {
        e && wx.showModal({
          title: "提示",
          content: "请在网络良好的环境打开小程序",
          showCancel: !1
        })
      }
    })
  },
  getAddData: function(e, a, t) {},
  getVersion: (g = t(a().mark((function e() {
    var t, n, o, i;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return t = this, e.prev = 1, n = {}, e.next = 6, h.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_01/sv_002_get_icon_version", n);
        case 6:
          o = e.sent, "000000000000" == (i = o.data)[0].resp_code && (t.data.icon_version_id = o.data[1].version_id, t.data.bg_version_id = o.data[2].version_id, t.data.ad_version_id = o.data[3].version_id, t.data.video_version_id = o.data[4].version_id, "" != t.data.icon_version_id_update && t.data.icon_version_id_update != i[1].version_id && t.getIconData(i[1].version_id, "all"), "" == t.data.ad_version_id_update && "" == t.data.video_version_id_update || t.data.ad_version_id_update == i[3].version_id && t.data.video_version_id_update == i[4].version_id || t.getAddData(i[3].version_id, i[4].version_id, "all"), wx.setStorage({
            key: "icon_version_id",
            data: i[1].version_id
          }), wx.setStorage({
            key: "bg_version_id",
            data: i[2].version_id
          }), wx.setStorage({
            key: "ad_version_id",
            data: i[3].version_id
          }), wx.setStorage({
            key: "video_version_id",
            data: i[4].version_id
          })), e.next = 14;
          break;
        case 11:
          e.prev = 11, e.t0 = e.catch(1), e.t0 && wx.showModal({
            title: "提示",
            content: "请在网络良好的环境打开小程序",
            showCancel: !1
          });
        case 14:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [1, 11]
    ])
  }))), function() {
    return g.apply(this, arguments)
  }),
  returnGetIcon: function(e) {
    this.getAddData(this.data.ad_version_id, this.data.video_version_id, e), this.getIconData(this.data.icon_version_id, e)
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  go_id_card: function() {
    wx.navigateTo({
      url: "../../../index/index"
    })
  },
  get_type: function(e) {
    var a = "",
      t = [],
      n = e.indexOf("type=");
    if (-1 != n) {
      t = (e = e.substr(n, e.length - n)).split("&");
      for (var o = 0; o < t.length; o++) {
        var i = t[o].split("=");
        "type" == i[0] && (a = i[1])
      }
    }
    return a
  },
  get_encry_id: function(e) {
    var a = "",
      t = [],
      n = e.indexOf("id=");
    return -1 != n && (t = (e = e.substr(n, e.length - n)).split("&"), console.log("url_param_arr", t), a = t[0].substr(3, t[0].length - 3), console.log("wechat_code:", a)), a
  },
  jump_2_shedao: (u = t(a().mark((function n(o, i) {
    var s, r, c;
    return a().wrap((function(n) {
      for (;;) switch (n.prev = n.next) {
        case 0:
          r = (s = this).get_type(o), console.log("type:", r), c = s.get_encry_id(o), console.log("encry_id 001:", c), c = encodeURIComponent(c), console.log("encodeURIComponent encry_id 002:", c), wx.showLoading(), wx.login({
            success: function(n) {
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
                method: "POST",
                dataType: "json",
                data: {
                  code: n.code
                },
                success: function(n) {
                  if (console.log("拉取login", n), "000000000000" == n.data[0].resp_code) {
                    x.globalData.openid = n.data[1].openid;
                    var o = {
                      openId: x.globalData.openid,
                      oper_type: "GET_TOKEN"
                    };
                    wx.request({
                      url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                      method: "POST",
                      dataType: "json",
                      data: o,
                      success: (s = t(a().mark((function t(n) {
                        var o, s, _, l, d, u, g, p, w, f, b;
                        return a().wrap((function(a) {
                          for (;;) switch (a.prev = a.next) {
                            case 0:
                              if (console.log("检查进度结果", n), 200 == n.statusCode) {
                                a.next = 4;
                                break
                              }
                              return wx.showModal({
                                title: "提示",
                                content: "(1726112116111)网络异常statusCode:" + n.statusCode,
                                showCancel: !1,
                                success: function(e) {}
                              }), a.abrupt("return");
                            case 4:
                              if ("000000000003" != n.data[0].resp_code) {
                                a.next = 52;
                                break
                              }
                              if (o = n.data[0].access_token, x.globalData.access_token = o, a.prev = 7, !(i.length > 0)) {
                                a.next = 18;
                                break
                              }
                              return s = {
                                code_id: i
                              }, _ = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/judge_is_shedao_staff", a.next = 13, h.wx_request(_, s, o);
                            case 13:
                              return n = a.sent, console.log("person res:", _, e(n), n), wx.hideLoading(), "000000000000" == n.data[0].resp_code ? (l = n.data[0].company_code, d = n.data[0].user_name, u = n.data[0].user_id_card, g = n.data[0].user_phone, p = n.data[0].user_upload_file_id, w = n.data[0].busi_type, wx.setStorageSync("access_token", x.globalData.access_token), wx.setStorageSync("openid", x.globalData.openid), wx.redirectTo({
                                url: "../../../../module_003_online_buzi/p_002_shedao/shedao/shedao_index?company_code=" + l + "&user_name=" + d + "&user_id_card=" + u + "&user_phone=" + g + "&busi_type=" + w + "&user_upload_file_id=" + p + "&person_id=" + b + "&access_token=" + o
                              })) : "" != n.data[0].resp_msg && null != n.data[0].resp_msg && null != n.data[0].resp_msg ? wx.showModal({
                                title: "提示",
                                content: n.data[0].resp_msg + n.data[0].resp_code,
                                showCancel: !1
                              }) : wx.showModal({
                                title: "提示",
                                content: "网络出错",
                                showCancel: !1
                              }), a.abrupt("return");
                            case 18:
                              return s = {
                                type: r,
                                encry_id: c,
                                sys_id: "tencent"
                              }, _ = "https://xcx.pinganbaiyun.cn/qrcode/api_001_qrcode/sv_002_get_qrcode_decry", a.next = 22, h.wx_request(_, s);
                            case 22:
                              if (f = a.sent, console.log("res:", _, e(f), f), wx.hideLoading(), "000000000000" != f.data[0].resp_code) {
                                a.next = 43;
                                break
                              }
                              if (f.data[0].url, b = f.data[0].scence, f.data[0].jump_type, "person" != r) {
                                a.next = 40;
                                break
                              }
                              return console.log("个人码解密结果,tb_001的id：", b), s = {
                                person_id: b
                              }, _ = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/judge_is_shedao_staff", a.next = 35, h.wx_request(_, s, o);
                            case 35:
                              return n = a.sent, console.log("person res:", _, e(n), n), wx.hideLoading(), "000000000000" == n.data[0].resp_code ? (l = n.data[0].company_code, d = n.data[0].user_name, u = n.data[0].user_id_card, g = n.data[0].user_phone, p = n.data[0].user_upload_file_id, w = n.data[0].busi_type, wx.setStorageSync("access_token", x.globalData.access_token), wx.setStorageSync("openid", x.globalData.openid), wx.redirectTo({
                                url: "../../../../module_003_online_buzi/p_002_shedao/shedao/shedao_index?company_code=" + l + "&user_name=" + d + "&user_id_card=" + u + "&user_phone=" + g + "&busi_type=" + w + "&user_upload_file_id=" + p + "&person_id=" + b + "&access_token=" + o
                              })) : "" != n.data[0].resp_msg && null != n.data[0].resp_msg && null != n.data[0].resp_msg ? wx.showModal({
                                title: "提示",
                                content: n.data[0].resp_msg + n.data[0].resp_code,
                                showCancel: !1
                              }) : wx.showModal({
                                title: "提示",
                                content: "网络出错",
                                showCancel: !1
                              }), a.abrupt("return");
                            case 40:
                              return a.abrupt("return");
                            case 43:
                              wx.showModal({
                                title: "提示",
                                content: f.data[0].resp_msg + f.data[0].resp_code,
                                showCancel: !1
                              });
                            case 44:
                              a.next = 50;
                              break;
                            case 46:
                              a.prev = 46, a.t0 = a.catch(7), console.log("获取保存的用户信息 e", a.t0), wx.showModal({
                                title: "提示19993",
                                content: a.t0,
                                showCancel: !1
                              });
                            case 50:
                              a.next = 55;
                              break;
                            case 52:
                              return x.globalData.back_url = "KNIFE", wx.showModal({
                                title: "平安码丨平安白云",
                                content: "体验服务，需要您实名注册。",
                                showCancel: !0,
                                cancelText: "暂不注册",
                                confirmText: "现在注册",
                                success: function(e) {
                                  1 == e.confirm && wx.navigateTo({
                                    url: "../../../component/pages/form_ocr_01/form"
                                  })
                                }
                              }), a.abrupt("return");
                            case 55:
                            case "end":
                              return a.stop()
                          }
                        }), t, null, [
                          [7, 46]
                        ])
                      }))), function(e) {
                        return s.apply(this, arguments)
                      }),
                      fail: function(e) {
                        wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                          title: "提示",
                          content: "获取状态异常-1," + e.errMsg,
                          showCancel: !1
                        })
                      }
                    })
                  } else wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-3:" + n.data[0].resp_code + n.data[0].resp_msg,
                    showCancel: !1
                  });
                  var s
                },
                fail: function(e) {
                  wx.hideLoading(), console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-4," + e.errMsg,
                    showCancel: !1
                  })
                }
              })
            },
            fail: function(e) {
              wx.hideLoading(), console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取状态异常," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 8:
        case "end":
          return n.stop()
      }
    }), n, this)
  }))), function(e, a) {
    return u.apply(this, arguments)
  }),
  go_scan_code: function() {
    var n = this;
    wx.scanCode({
      success: function(o) {
        return t(a().mark((function t() {
          var i, s, r, c, _, l, d, u, g, p, w, f, b, k, v, y, S, D, T, M, I, C;
          return a().wrap((function(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (console.log("扫一扫识别结果", o), -1 == o.result.indexOf('{"codeId":"')) {
                  a.next = 6;
                  break
                }
                if (!(JSON.parse(o.result).codeId.length > 0)) {
                  a.next = 6;
                  break
                }
                return wx.showToast({
                  title: "不再识别穗康码",
                  icon: "none"
                }), a.abrupt("return");
              case 6:
                if (-1 == (i = o.result).indexOf("abcdefg.bygafj.scrryxbddewm==||")) {
                  a.next = 16;
                  break
                }
                if (s = i.split("==||")[1], r = parseInt(s) - 16816816888, !((new Date).getTime() - r > 72e5)) {
                  a.next = 14;
                  break
                }
                return wx.showModal({
                  title: "平安码丨平安白云",
                  content: "二维码已失效",
                  showCancel: !1,
                  success: function(e) {}
                }), a.abrupt("return");
              case 14:
                return n.go_rent_house("grid_qrcode_add_member", i.split("==||")[2]), a.abrupt("return");
              case 16:
                if (null != i && null != i || (i = ""), c = /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/, !(o.path && -1 != o.path.indexOf("page/company/pages/form/form") || o.path && -1 != o.path.indexOf("page/rent_house/pages/form_scan_qrcode/form") || o.path && -1 != o.path.indexOf("page_001_lottery"))) {
                  a.next = 23;
                  break
                }
                return wx.navigateTo({
                  url: "/" + o.path
                }), a.abrupt("return");
              case 23:
                if (!o.result || -1 == o.result.indexOf("https://lf.pinganbaiyun.cn/visitor")) {
                  a.next = 28;
                  break
                }
                return n.setData({
                  show_visitor_modal: !0
                }), a.abrupt("return");
              case 28:
                if (!o.rawData || -1 == o.rawData.indexOf("ay9+IUV3dTViJCNRN3NJZiZkJCc6")) {
                  a.next = 33;
                  break
                }
                return n.setData({
                  show_duty_modal: !0
                }), a.abrupt("return");
              case 33:
                if (!c.test(i) || -1 != o.result.indexOf("id") || -1 != o.result.indexOf("qm")) {
                  a.next = 40;
                  break
                }
                return _ = i.substr(0, 36), l = "../../../../module_001/p_009_housenumber/housenumber_index?uuid_house=" + _, wx.navigateTo({
                  url: l
                }), a.abrupt("return");
              case 40:
                if (!o.result || -1 == o.result.indexOf("https://xcx.pinganbaiyun.cn/inner_meeting/www/index.html#/v_006_show_pdf?")) {
                  a.next = 48;
                  break
                }
                return d = h.getQueryString(o.result, "type"), u = decodeURIComponent(h.getQueryString(o.result, "id")), g = "../../../../module_001/p_012_inner_meeting_qrcode/inner_meeting_qrcode?type=" + d + "&id=" + u, wx.navigateTo({
                  url: g
                }), a.abrupt("return");
              case 48:
                if (-1 == o.result.indexOf("https://xcx.pinganbaiyun.cn/qrcode/?type=rent") && -1 == o.result.indexOf("https://xcx.pinganbaiyun.cn/qrcode/?type=company") && -1 == o.result.indexOf("https://xcx.pinganbaiyun.cn/qrcode/?type=person") && (-1 == o.result.indexOf("id") || -1 == o.result.indexOf("qm"))) {
                  a.next = 114;
                  break
                }
                if (-1 == o.result.indexOf("https://xcx.pinganbaiyun.cn/qrcode/?type=person") && (-1 == o.result.indexOf("id") || -1 == o.result.indexOf("qm"))) {
                  a.next = 57;
                  break
                }
                if (-1 == o.result.indexOf("https://xcx.pinganbaiyun.cn/qrcode/?type=person")) {
                  a.next = 55;
                  break
                }
                return n.jump_2_shedao(o.result, ""), a.abrupt("return");
              case 55:
                return n.jump_2_shedao(o.result, o.result), a.abrupt("return");
              case 57:
                if (p = x.globalData.openid, console.log("app.globalData.openId:", x.globalData.openId), null != p && null != p && "" != p) {
                  a.next = 72;
                  break
                }
                return a.prev = 60, a.next = 63, h.wx_login();
              case 63:
                w = a.sent, console.log("login_result:", w), "000000000000" == w.data[0].resp_code && (x.globalData.openid = w.data[1].openid, p = w.data[1].openid, console.log("util.wx_login.openId:", p)), a.next = 72;
                break;
              case 68:
                return a.prev = 68, a.t0 = a.catch(60), wx.showModal({
                  title: "提示",
                  content: "请您再次扫码",
                  showCancel: !1,
                  success: function(e) {}
                }), a.abrupt("return");
              case 72:
                return a.prev = 72, f = {
                  openId: p
                }, b = JSON.stringify(f), a.next = 77, m.encrypt_rsa_fun(b);
              case 77:
                return k = a.sent, b = {
                  key: k
                }, v = "https://xcx.pinganbaiyun.cn/strike_black/api_05_rent_house_mini_program/sv_001_get_mass_prevention_user", a.next = 82, h.wx_request(v, b);
              case 82:
                if (y = a.sent, console.log("res_request", e(y), y), "000000000000" != y.data[0].resp_code) {
                  a.next = 88;
                  break
                }
                a.next = 99;
                break;
              case 88:
                if ("00000000106" != y.data[0].resp_code) {
                  a.next = 94;
                  break
                }
                return a.next = 91, h.wx_show_modal("提示", y.data[0].resp_msg, !1);
              case 91:
                return a.abrupt("return");
              case 94:
                if ("00000000105" != y.data[0].resp_code) {
                  a.next = 99;
                  break
                }
                return a.next = 97, h.wx_show_modal("提示", y.data[0].resp_msg, !1);
              case 97:
                return wx.navigateTo({
                  url: "../../../component/pages/form_ocr_01/form"
                }), a.abrupt("return");
              case 99:
                a.next = 105;
                break;
              case 101:
                return a.prev = 101, a.t1 = a.catch(72), wx.showModal({
                  title: "提示",
                  content: "获取群防力量信息异常:" + a.t1,
                  showCancel: !1,
                  success: function(e) {}
                }), a.abrupt("return");
              case 105:
                return "https://xcx.pinganbaiyun.cn/strike_black/third_part/crack_down_black/vue/p_085_mass_prevention/www/index.html", (S = {}).resultStr = encodeURIComponent(o.result), D = JSON.stringify(S), console.log("jump_params", D), T = "../../../page_006_common_webview/page_006_common_webview?url=https://xcx.pinganbaiyun.cn/strike_black/third_part/crack_down_black/vue/p_085_mass_prevention/www/index.html&params=" + D, console.log("COMMON_WEBVIEW navigate_url", T), wx.navigateTo({
                  url: T
                }), a.abrupt("return");
              case 114:
                if (M = o.result, console.log("state_enc:", M), I = wx.getStorageSync("openid"), C = wx.getStorageSync("unionid"), "" == I || null == I || null == I || "[object Undefined]" == I || "" == C || null == C || null == C || "[object Undefined]" == C) {
                  a.next = 125;
                  break
                }
                x.globalData.unionid = C, x.globalData.openid = I, a.next = 146;
                break;
              case 125:
                return a.prev = 125, a.next = 128, h.wx_login();
              case 128:
                if (w = a.sent, console.log("login_result:", w), "000000000000" != w.data[0].resp_code) {
                  a.next = 137;
                  break
                }
                x.globalData.openid = w.data[1].openid, x.globalData.unionid = w.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), a.next = 139;
                break;
              case 137:
                return wx.showModal({
                  title: "提示",
                  content: w.data[0].resp_msg + "(" + w.data[0].resp_code + ")",
                  showCancel: !1,
                  success: function(e) {}
                }), a.abrupt("return");
              case 139:
                a.next = 146;
                break;
              case 141:
                return a.prev = 141, a.t2 = a.catch(125), console.log("e:", a.t2), wx.showModal({
                  title: "提示",
                  content: "" + JSON.stringify(a.t2),
                  showCancel: !1,
                  success: function(e) {}
                }), a.abrupt("return");
              case 146:
                f = {
                  state: M,
                  openId: p = I
                }, v = "https://xcx.pinganbaiyun.cn/mini_program/api_01/get_login_state_xcx", console.log(v, f), wx.request({
                  url: v,
                  method: "POST",
                  dataType: "json",
                  data: f,
                  success: function(e) {
                    if (wx.hideLoading(), console.log("1756893229055 get_login_state", e), "000000000000" == e.data[0].resp_code) {
                      e.data[0].login_ip, e.data[0].business_sys_client_login_date;
                      var a = e.data[0].msg_output,
                        t = e.data[0].title_output,
                        n = e.data[0].update_url;
                      wx.showModal({
                        title: t,
                        content: a,
                        showCancel: !0,
                        success: function(e) {
                          if (1 == e.confirm) {
                            var a = {
                                state: M,
                                name: "",
                                id_card: "",
                                openId: p
                              },
                              t = n;
                            wx.request({
                              url: t,
                              method: "POST",
                              dataType: "json",
                              data: a,
                              success: function(e) {
                                if (console.log("res:", e), "000000000000" == e.data[0].resp_code) wx.showModal({
                                  title: "提示",
                                  content: "授权成功 登录页面将跳转",
                                  showCancel: !1,
                                  success: function(e) {}
                                });
                                else {
                                  if ("00005223" == e.data[0].resp_code) return x.globalData.back_url = "INDEX", void wx.showModal({
                                    title: "提示",
                                    content: "体验扫码登录功能，需要您实名注册。",
                                    showCancel: !0,
                                    cancelText: "暂不注册",
                                    confirmText: "现在注册",
                                    success: function(e) {
                                      1 == e.confirm && wx.navigateTo({
                                        url: "../../../component/pages/form_ocr_01/form"
                                      })
                                    }
                                  });
                                  wx.showModal({
                                    title: "提示",
                                    content: e.data[0].resp_msg,
                                    showCancel: !1,
                                    success: function(e) {}
                                  })
                                }
                              },
                              fail: function(e) {
                                console.log("331231 fail:", e), wx.showModal({
                                  title: "授权失败",
                                  content: e,
                                  showCancel: !1,
                                  success: function(e) {}
                                })
                              }
                            })
                          }
                        }
                      })
                    } else if ("1756892998912" == e.data[0].resp_code) {
                      var o = !1;
                      if (null != x.globalData.location_info && null != x.globalData.location_info.latitude && null != x.globalData.location_info.latitude && "" != x.globalData.location_info.latitude && (o = !0), 0 == o) return void wx.showModal({
                        title: "云盾",
                        content: "刷脸认证需要您打开定位.",
                        showCancel: !1,
                        success: function(e) {}
                      });
                      e.data[0].login_ip, e.data[0].business_sys_client_login_date, a = e.data[0].msg_output, t = e.data[0].title_output, n = e.data[0].update_url;
                      wx.showModal({
                        title: t,
                        content: a,
                        showCancel: !0,
                        success: function(e) {
                          if (1 == e.confirm) {
                            x.globalData.state_enc = M;
                            wx.navigateTo({
                              url: "../../../component/pages/camera_plugin_barcode/form?buzi_type=app_001_inner_xcx_face_login"
                            })
                          }
                        }
                      })
                    } else "0800001" == e.data[0].resp_code ? (x.globalData.state_enc = M, wx.navigateTo({
                      url: "/page/temperature/temperature?jump_to=" + M
                    })) : wx.showModal({
                      title: "平安码丨平安白云",
                      content: e.data[0].resp_msg,
                      showCancel: !1,
                      success: function(e) {}
                    })
                  },
                  fail: function(e) {
                    wx.hideLoading(), console.log("dencryp fail:", e)
                  }
                });
              case 151:
              case "end":
                return a.stop()
            }
          }), t, null, [
            [60, 68],
            [72, 101],
            [125, 141]
          ])
        })))()
      },
      fail: function(e) {
        console.log("scanCode err", e)
      }
    })
  },
  close_visitor_modal: function() {
    this.setData({
      show_visitor_modal: !1
    })
  },
  close_duty_modal: function() {
    this.setData({
      show_duty_modal: !1
    })
  },
  go_rent_house: (d = t(a().mark((function e(t, n) {
    var o, i, s, r;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), o = wx.getStorageSync("openid"), i = wx.getStorageSync("unionid"), "" == o || null == o || null == o || "[object Undefined]" == o || "" == i || null == i || null == i || "[object Undefined]" == i) {
            e.next = 9;
            break
          }
          x.globalData.unionid = i, x.globalData.openid = o, e.next = 30;
          break;
        case 9:
          return e.prev = 9, e.next = 12, h.wx_login();
        case 12:
          if (s = e.sent, console.log("login_result:", s), "000000000000" != s.data[0].resp_code) {
            e.next = 21;
            break
          }
          x.globalData.openid = s.data[1].openid, x.globalData.unionid = s.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), e.next = 23;
          break;
        case 21:
          return wx.showModal({
            title: "提示",
            content: s.data[0].resp_msg + "(" + s.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 23:
          e.next = 30;
          break;
        case 25:
          return e.prev = 25, e.t0 = e.catch(9), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 30:
          r = {
            openId: x.globalData.openid,
            oper_type: "RENT_HOUSE"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: r,
            success: function(e) {
              if (wx.hideLoading(), console.log("检查进度结果", e), 200 == e.statusCode) {
                if ("000000000003" != e.data[0].resp_code) return x.globalData.back_url = "RENT_HOUSE", void wx.showModal({
                  title: "安居管家",
                  content: "体验房屋自主申报及住宿自助登记功能，需要您实名注册。",
                  showCancel: !0,
                  cancelText: "暂不注册",
                  confirmText: "现在注册",
                  success: function(e) {
                    1 == e.confirm && wx.navigateTo({
                      url: "../../../component/pages/form_ocr_01/form"
                    })
                  }
                });
                var a = e.data[0].access_token;
                if (x.globalData.access_token = a, "bank_customer_info_query" == t) return wx.showLoading({
                  title: "请稍等...",
                  mask: !0
                }), void wx.request({
                  url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/get_user_is_bank_staff",
                  method: "POST",
                  data: {},
                  header: {
                    "Content-type": "application/json",
                    cloud_shield_token: a
                  },
                  success: function(e) {
                    console.log("bank_res", e), wx.hideLoading(), "000000000000" == e.data[0].resp_code ? 0 == e.data[0].is_bank_staff ? wx.showModal({
                      title: "提示",
                      content: "您非银行职员，请先登记为银行职员"
                    }) : wx.navigateTo({
                      url: "/module_004/p_009_bank_search/customer_info_search?access_token=" + a
                    }) : wx.showModal({
                      title: "提示",
                      content: e.data[0].resp_msg + "(" + e.data[0].resp_code + ")"
                    })
                  },
                  fail: function(e) {
                    wx.hideLoading(), wx.showModal({
                      title: "提示",
                      content: "请求失败" + e
                    })
                  }
                });
                if ("electric" == t) {
                  var o = "jump_to=GO_ELECTRIC_METER@@@",
                    i = "../../../third_part/pages/rent_house/form?" + (o += JSON.stringify({}));
                  return void wx.navigateTo({
                    url: i
                  })
                }
                if ("electric_policy" == t) return o = "jump_to=GO_ELECTRIC_POLICY@@@", i = "../../../third_part/pages/rent_house/form?" + (o += JSON.stringify({})), void wx.navigateTo({
                  url: i
                });
                if ("GO_ELECTRIC_METER_FAULT" == t) return o = "jump_to=GO_ELECTRIC_METER_FAULT@@@", i = "../../../third_part/pages/rent_house/form?" + (o += JSON.stringify({})), void wx.navigateTo({
                  url: i
                });
                if ("GO_ELECTRIC_METER_BIND" == t) return o = "jump_to=GO_ELECTRIC_METER_BIND@@@", i = "../../../third_part/pages/rent_house/form?" + (o += JSON.stringify({})), void wx.navigateTo({
                  url: i
                });
                if ("GO_ELECTRIC_METER_PROVE" == t) return o = "jump_to=GO_ELECTRIC_METER_PROVE@@@", i = "../../../third_part/pages/rent_house/form?" + (o += JSON.stringify({})), void wx.navigateTo({
                  url: i
                });
                if ("GO_ELECTRIC_METER_APPEAL" == t) return o = "jump_to=GO_ELECTRIC_METER_APPEAL@@@", i = "../../../third_part/pages/rent_house/form?" + (o += JSON.stringify({})), void wx.navigateTo({
                  url: i
                });
                if ("water_supply" == t) return o = "jump_to=GO_WATER_METER@@@", i = "../../../third_part/pages/rent_house/form?" + (o += JSON.stringify({})), void wx.navigateTo({
                  url: i
                });
                if ("GO_WATER_SUPPLY_BIND" == t) return o = "jump_to=GO_WATER_SUPPLY_BIND@@@", i = "../../../third_part/pages/rent_house/form?" + (o += JSON.stringify({})), void wx.navigateTo({
                  url: i
                });
                if ("GO_WATER_SUPPLY_POLICY" == t) return o = "jump_to=GO_WATER_SUPPLY_POLICY@@@", i = "../../../third_part/pages/rent_house/form?" + (o += JSON.stringify({})), void wx.navigateTo({
                  url: i
                });
                if ("grid_qrcode_add_member" == t) {
                  o = "jump_to=GO_GRID_QRCODE_ADD@@@";
                  var s = {
                    data: n
                  };
                  return i = "../../../third_part/pages/rent_house/form?" + (o += JSON.stringify(s)), void wx.navigateTo({
                    url: i
                  })
                }
                if ("work_upload_location" == t) {
                  var r = "../../../../module_004/work_upload_location/index?access_token=" + a;
                  return void wx.navigateTo({
                    url: r
                  })
                }
                if ("welcome_to_baiyun" == t) {
                  var c = {
                      buzi_type: "welcome_to_baiyun"
                    },
                    _ = "../../../third_part/pages/rent_house/form?jump_to=GO_RENTER_INDEX@@@params:" + JSON.stringify(c);
                  return _ = encodeURI(_), console.log("jump_url", _), void wx.navigateTo({
                    url: _
                  })
                }
                if ("address_search" == t) {
                  var l = {
                      buzi_type: "address_search"
                    },
                    d = "../../../third_part/pages/rent_house/form?jump_to=GO_RENTER_INDEX@@@params:" + JSON.stringify(l);
                  return d = encodeURI(d), console.log("jump_url", d), void wx.navigateTo({
                    url: d
                  })
                }
                if ("admin_house" == t) {
                  var u = "../../../third_part/pages/rent_house/form?jump_to=HOUSE_LIST";
                  return u = encodeURI(u), console.log("jump_url", u), void wx.navigateTo({
                    url: u
                  })
                }
                wx.navigateTo({
                  url: "../../../third_part/pages/rent_house/form"
                })
              } else wx.showModal({
                title: "提示",
                content: "(1726112116112)网络异常statusCode:" + e.statusCode,
                showCancel: !1,
                success: function(e) {}
              })
            },
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 31:
        case "end":
          return e.stop()
      }
    }), e, null, [
      [9, 25]
    ])
  }))), function(e, a) {
    return d.apply(this, arguments)
  }),
  go_book_live_card: (l = t(a().mark((function e() {
    var n, o, i, s;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), n = wx.getStorageSync("openid"), o = wx.getStorageSync("unionid"), "" == n || null == n || null == n || "[object Undefined]" == n || "" == o || null == o || null == o || "[object Undefined]" == o) {
            e.next = 9;
            break
          }
          x.globalData.unionid = o, x.globalData.openid = n, e.next = 30;
          break;
        case 9:
          return e.prev = 9, e.next = 12, h.wx_login();
        case 12:
          if (i = e.sent, console.log("login_result:", i), "000000000000" != i.data[0].resp_code) {
            e.next = 21;
            break
          }
          x.globalData.openid = i.data[1].openid, x.globalData.unionid = i.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), e.next = 23;
          break;
        case 21:
          return wx.showModal({
            title: "提示",
            content: i.data[0].resp_msg + "(" + i.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 23:
          e.next = 30;
          break;
        case 25:
          return e.prev = 25, e.t0 = e.catch(9), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 30:
          s = {
            openId: x.globalData.openid,
            oper_type: "INDEX"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: s,
            success: function() {
              var e = t(a().mark((function e(t) {
                var n, o, i, s, r, c, _;
                return a().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", t), 200 == t.statusCode) {
                        e.next = 5;
                        break
                      }
                      return wx.showModal({
                        title: "提示",
                        content: "(1726112116113)网络异常statusCode:" + t.statusCode,
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 5:
                      if ("000000000003" != t.data[0].resp_code) {
                        e.next = 44;
                        break
                      }
                      return n = t.data[0].access_token, x.globalData.access_token = n, e.prev = 8, wx.showLoading({
                        title: "请稍等...",
                        mask: !0
                      }), o = {
                        buzi_type: "show_yjm_code"
                      }, e.next = 14, h.wx_request("https://xcx.pinganbaiyun.cn/health_passport/api_004_motorcycles/sv_001_get_gd_security_authcode", o);
                    case 14:
                      if (i = e.sent, wx.hideLoading(), "000000000000" != i.data[0].resp_code) {
                        e.next = 28;
                        break
                      }
                      return s = i.data[0].code, r = "pages/common/thirdPartyRouter/thirdPartyRouter?feat=credentials&refer=paby&authcode=" + s, console.log("粤居码办理居住证path", r), c = {}, null == x.globalData.SYSTEMINFO ? (c = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", c)) : c = x.globalData.SYSTEMINFO, _ = h.compareVersion(c.SDKVersion, "2.20.1"), console.log("diff_version_1695095856167", _), _ >= 0 ? wx.openEmbeddedMiniProgram({
                        appId: "wx9f75b01dcb4b1a79",
                        path: r,
                        allowFullScreen: !0,
                        extraData: {},
                        envVersion: "release",
                        success: function(e) {
                          console.log("navigateToMiniProgram res", e)
                        }
                      }) : wx.navigateToMiniProgram({
                        appId: "wx9f75b01dcb4b1a79",
                        path: r,
                        extraData: {},
                        envVersion: "release",
                        success: function(e) {
                          console.log("navigateToMiniProgram res", e)
                        }
                      }), e.abrupt("return");
                    case 28:
                      if ("-00000350001" != i.data[0].resp_code) {
                        e.next = 32;
                        break
                      }
                      wx.showModal({
                        title: "提示",
                        content: "请您再次操作",
                        showCancel: !1,
                        success: function(e) {}
                      }), e.next = 34;
                      break;
                    case 32:
                      return wx.showModal({
                        title: "粤居码居住证办理提示",
                        content: "系统异常，请稍后再试！",
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 34:
                      e.next = 42;
                      break;
                    case 36:
                      return e.prev = 36, e.t0 = e.catch(8), wx.hideLoading(), console.log("e:", e.t0), wx.showModal({
                        title: "提示",
                        content: "" + JSON.stringify(e.t0),
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 42:
                      e.next = 47;
                      break;
                    case 44:
                      return x.globalData.back_url = "INDEX", wx.showModal({
                        title: "平安码丨平安白云",
                        content: "办理居住证功能，需要您实名注册。",
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          1 == e.confirm && wx.navigateTo({
                            url: "../../../component/pages/form_ocr_01/form"
                          })
                        }
                      }), e.abrupt("return");
                    case 47:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [8, 36]
                ])
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }(),
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 31:
        case "end":
          return e.stop()
      }
    }), e, null, [
      [9, 25]
    ])
  }))), function() {
    return l.apply(this, arguments)
  }),
  go_company: (_ = t(a().mark((function e() {
    var t, n, o, i;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), t = wx.getStorageSync("openid"), n = wx.getStorageSync("unionid"), "" == t || null == t || null == t || "[object Undefined]" == t || "" == n || null == n || null == n || "[object Undefined]" == n) {
            e.next = 9;
            break
          }
          x.globalData.unionid = n, x.globalData.openid = t, e.next = 30;
          break;
        case 9:
          return e.prev = 9, e.next = 12, h.wx_login();
        case 12:
          if (o = e.sent, console.log("login_result:", o), "000000000000" != o.data[0].resp_code) {
            e.next = 21;
            break
          }
          x.globalData.openid = o.data[1].openid, x.globalData.unionid = o.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), e.next = 23;
          break;
        case 21:
          return wx.showModal({
            title: "提示",
            content: o.data[0].resp_msg + "(" + o.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 23:
          e.next = 30;
          break;
        case 25:
          return e.prev = 25, e.t0 = e.catch(9), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 30:
          i = {
            openId: x.globalData.openid,
            oper_type: "COMPANY"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: i,
            success: function(e) {
              if (wx.hideLoading(), console.log("检查进度结果", e), 200 == e.statusCode) {
                if ("000000000003" == e.data[0].resp_code) {
                  var a = e.data[0].access_token;
                  return x.globalData.access_token = a, void wx.navigateTo({
                    url: "../../../third_part/pages/company/form"
                  })
                }
                return x.globalData.back_url = "COMPANY", void wx.showModal({
                  title: "乐业管家",
                  content: "体验企业自主申报及员工考勤功能，需要您实名注册。",
                  showCancel: !0,
                  cancelText: "暂不注册",
                  confirmText: "现在注册",
                  success: function(e) {
                    1 == e.confirm && wx.navigateTo({
                      url: "../../../component/pages/form_ocr_01/form"
                    })
                  }
                })
              }
              wx.showModal({
                title: "提示",
                content: "(1726112116114)网络异常statusCode:" + e.statusCode,
                showCancel: !1,
                success: function(e) {}
              })
            },
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 31:
        case "end":
          return e.stop()
      }
    }), e, null, [
      [9, 25]
    ])
  }))), function() {
    return _.apply(this, arguments)
  }),
  go_yasf: function() {
    wx.showLoading({
      title: "请稍等...",
      mask: !0
    }), wx.navigateTo({
      url: "../../../third_part/pages/yasf/form?which_src=src_yasf_menu"
    })
  },
  go_job: function() {
    wx.navigateTo({
      url: "../../../../module_001/job/index/component"
    })
  },
  go_preferential_activity: function() {
    wx.navigateTo({
      url: "../../../../module_001/preferential_activity/index/index"
    })
  },
  get_location_role: function(e) {
    var n = this,
      o = x;
    wx.getSetting({
      success: function(i) {
        var s;
        console.log("获取用户授权设置..."), console.log(i), null == i.authSetting["scope.userLocation"] || null == i.authSetting["scope.userLocation"] ? (console.log("用户未设置过授权,弹出请求授权界面 userLocation..."), wx.authorize({
          scope: "scope.userLocation",
          success: function(i) {
            var s;
            console.log("authorize scope.userLocation success...", i), wx.getLocation({
              type: "wgs84",
              altitude: !1,
              success: (s = t(a().mark((function t(i) {
                return a().wrap((function(a) {
                  for (;;) switch (a.prev = a.next) {
                    case 0:
                      console.log("res.getLocation:", i), o.globalData.location_info = i, n.data.latitude = i.latitude, n.data.longitude = i.longitude, 1 == e && n.calling(), n.f_006_upload_location_buzi();
                    case 6:
                    case "end":
                      return a.stop()
                  }
                }), t)
              }))), function(e) {
                return s.apply(this, arguments)
              }),
              fail: function(e) {
                o.globalData.get_role_01 = !1, n.setData({
                  showModal_location: !0
                })
              }
            })
          },
          fail: function(e) {
            console.log("authorize scope.userLocation fail 用户不允许授权...", e), o.globalData.get_role_01 = !1, n.setData({
              showModal_location: !0
            })
          }
        })) : 1 == i.authSetting["scope.userLocation"] ? (console.log("用户已设置过授权,且授权允许,不弹出请求授权界面 userLocation..."), wx.getLocation({
          type: "wgs84",
          altitude: !1,
          success: (s = t(a().mark((function t(i) {
            return a().wrap((function(a) {
              for (;;) switch (a.prev = a.next) {
                case 0:
                  o.globalData.location_info = i, console.log(i), 1 == e && n.calling(), n.f_006_upload_location_buzi();
                case 4:
                case "end":
                  return a.stop()
              }
            }), t)
          }))), function(e) {
            return s.apply(this, arguments)
          }),
          fail: function(a) {
            1 == e && wx.showModal({
              title: "提示",
              content: "请检查手机定位权限或微信定位权限是否打开",
              showCancel: !1,
              success: function(e) {}
            })
          }
        })) : 0 == i.authSetting["scope.userLocation"] && (console.log("用户已设置过授权,且授权拒绝,需要调用login,再次弹出授权页面 userLocation..."), o.globalData.get_role_01 = !1, n.setData({
          showModal_location: !0
        }))
      }
    })
  },
  get_user_info_role: function() {
    this.setData({
      sho_login_flag: 0
    }), this.setData({
      nick_name: "云小盾",
      avatar: "../page_001_welcome_to_baiyun/image/img_13202_0_6.png",
      login_tip: "请登录"
    })
  },
  hideModal_location: function() {},
  get_location_role_result: function(e) {
    console.log("get_location_role_result", e), 0 == e.detail.authSetting["scope.userLocation"] ? (this.setData({
      showModal_location: !0
    }), console.log("用户选择了否")) : (console.log("用户选择了是"), this.setData({
      showModal_location: !1
    }))
  },
  hideModal_help: function() {
    this.setData({
      showModal_help: !1
    })
  },
  hide_jiefen_code: function() {
    this.setData({
      show_jiefen_code: !1,
      jiefen_code_url: ""
    })
  },
  save_jiefen_code: function() {
    var e = this;
    wx.showActionSheet({
      itemList: ["保存到相册"],
      success: function(a) {
        0 === a.tapIndex && wx.downloadFile({
          url: e.data.jiefen_code_url,
          success: function(e) {
            wx.saveImageToPhotosAlbum({
              filePath: e.tempFilePath,
              success: function() {
                wx.showToast({
                  title: "保存成功",
                  icon: "success"
                })
              },
              fail: function(e) {
                console.log("保存失败", e), e.errMsg.indexOf("auth deny") > -1 ? wx.showModal({
                  title: "提示",
                  content: "需要授权保存到相册",
                  success: function(e) {
                    e.confirm && wx.openSetting()
                  }
                }) : wx.showToast({
                  title: "保存失败",
                  icon: "none"
                })
              }
            })
          },
          fail: function(e) {
            console.log("下载失败", e), wx.showToast({
              title: "下载失败",
              icon: "none"
            })
          }
        })
      }
    })
  },
  enterprise_service: function() {
    wx.showLoading({
      title: "加载中"
    }), wx.navigateTo({
      url: "../../../../module_002_fda/p_001_fda/index/index"
    }), wx.hideLoading()
  },
  fda_confrim: function() {
    wx.showLoading({
      title: "加载中"
    }), wx.navigateTo({
      url: "../../../../module_002_fda/p_001_fda/cloud_comfirm/index/index"
    }), wx.hideLoading()
  },
  address_lib: function() {
    wx.showLoading({
      title: "加载中"
    }), wx.navigateTo({
      url: "../../../../module_002_fda/p_001_fda/address_lib/middle_page/middle_page"
    }), wx.hideLoading()
  },
  upload_ur_location: function() {
    this.go_rent_house("work_upload_location")
  },
  video_check_click: function() {
    wx.navigateTo({
      url: "../../../page_006_common_webview/page_006_common_webview?scene=que&encry_id=NE%2BMaF%2BUOec%2Ft0KLq2u0EQ27%2FKf0LGQG&check_register=YES"
    })
  },
  go_help: function() {
    console.log("go_help");
    this.setData({
      showModal_help: !0
    })
  },
  go_video: function() {
    wx.navigateTo({
      url: "../../../../module_001/house_manager/test_video/test_video"
    })
  },
  go_signature: function() {
    wx.navigateTo({
      url: "../../../../module_001/signature/signature"
    })
  },
  click_swiper_01: function(e) {
    var a = "../../../third_part/pages/yasf/form?which_src=01";
    console.log("click_swiper_01", a), wx.navigateTo({
      url: a
    })
  },
  click_swiper_02: function(e) {
    console.log("click_swiper_02", "../../../third_part/pages/yasf/form?which_src=02")
  },
  click_swiper_03: function(e) {},
  click_swiper_04: function(e) {},
  click_swiper_05: function(e) {},
  click_swiper_06: function(e) {
    this.go_rent_house("GO_ELECTRIC_METER_FAULT")
  },
  click_swiper_07: function(e) {
    this.f_002_go_mini_app("p_147_agriculture")
  },
  click_swiper_08: function(e) {
    this.f_002_go_mini_app("by_grid_index")
  },
  click_swiper_10: function(e) {
    console.log(8899), this.f_002_go_mini_app("search_house_index")
  },
  click_swiper_11: function(e) {
    var a = "../../../third_part/pages/yasf/form?which_src=11";
    console.log("click_swiper_11", a), wx.navigateTo({
      url: a
    })
  },
  get_user_info_result_login: function(e) {
    var a = this,
      t = this;
    if ("我的信息" != t.data.login_tip || "云小盾" == t.data.nick_name || "微信用户" == t.data.nick_name) return t.can_use_editable_nick_name() ? (console.log("可编辑昵称弹出"), void t.setData({
      avatar_nickname_box_type: !0
    })) : void wx.getUserProfile({
      desc: "请授权用于完善个人资料",
      success: function(e) {
        if (console.log("getUserProfile success", e), "getUserProfile:ok" != e.errMsg) {
          var n = (new Date).getTime();
          return console.log("set ask_nick_name_today", n), wx.setStorageSync("ask_nick_name_today", n), a.setData({
            sho_login_flag: 1
          }), void a.go_id_card()
        }
        x.globalData.userInfo = JSON.stringify(e.userInfo), x.globalData.USERINFO_post = JSON.stringify(e.userInfo);
        var o = JSON.parse(x.globalData.USERINFO_post),
          i = o.avatarUrl,
          s = o.nickName,
          r = (new Date).getTime();
        n = r;
        wx.setStorageSync("avatar", i), wx.setStorageSync("nick_name", s), wx.setStorageSync("nick_name_last_date", r), wx.setStorageSync("ask_nick_name_today", n), t.setData({
          avatar: i,
          nick_name: s,
          login_tip: "我的信息",
          sho_login_flag: 1
        });
        var c = {
            openId: x.globalData.openid,
            unionId: x.globalData.unionid,
            nick_name: s,
            avatar: i
          },
          _ = "https://xcx.pinganbaiyun.cn/mini_program/api_01/upload_openId_unionId";
        console.log(_, c), wx.request({
          url: _,
          method: "POST",
          dataType: "json",
          data: c,
          success: function(e) {},
          fail: function(e) {
            console.log("提交失败，", e)
          }
        }), a.go_id_card()
      },
      fail: function(e) {
        console.log("getUserProfile fail", e), a.go_id_card()
      }
    });
    t.go_id_card()
  },
  hideModal_user_info: function() {},
  bindsuccess_miniProgram: function(e) {
    console.log("bindsuccess_miniProgram", e)
  },
  bindfail_miniProgram: function(e) {
    console.log("bindfail_miniProgram", e)
  },
  bindcomplete_miniProgram: function(e) {
    console.log("bindcomplete_miniProgram", e)
  },
  run_timer: function() {
    var e = this,
      a = e.data.timer - 1;
    if (0 != a) {
      var t = a + "秒后自动关闭...";
      e.setData({
        count_down_str: t,
        timer: a
      });
      var n = setTimeout((function() {
        e.run_timer()
      }), 1e3);
      e.data.timeout_id = n
    } else {
      a = 11, e.setData({
        timer: a,
        ad_cover_dispaly: "none",
        close_ad_button_dispaly: "none"
      });
      var o = (new Date).getTime();
      wx.setStorage({
        key: "day",
        data: o,
        success: function(e) {},
        fail: function(e) {},
        complete: function(e) {}
      })
    }
  },
  hide_ad_cover: function() {
    this.setData({
      close_ad_button_dispaly: "none",
      ad_cover_dispaly: "none"
    });
    var e = (new Date).getTime();
    wx.setStorage({
      key: "day",
      data: e,
      success: function(e) {},
      fail: function(e) {},
      complete: function(e) {}
    })
  },
  tap_ad_cover: function() {
    this.setData({
      ad_cover_dispaly: "none",
      ad_cover_dispaly_big_img: "block",
      close_ad_button_dispaly_big_img: "block"
    })
  },
  hide_big_ad_cover: function() {
    this.setData({
      ad_cover_dispaly: "none",
      close_ad_button_dispaly: "none",
      ad_cover_dispaly_big_img: "none",
      close_ad_button_dispaly_big_img: "none"
    });
    var e = (new Date).getTime();
    wx.setStorage({
      key: "day",
      data: e,
      success: function(e) {},
      fail: function(e) {},
      complete: function(e) {}
    })
  },
  form_submit_housenumber: function() {
    wx.redirectTo({
      url: "/module_001/p_009_housenumber/housenumber_index"
    })
  },
  go_grade_house: function() {
    wx.redirectTo({
      url: "../../../../module_001/grade_house/index/component"
    })
  },
  get_ad_img_height: function(e) {
    var a = (wx.getSystemInfoSync().windowWidth - 100) * e.detail.height / e.detail.width + "px";
    this.setData({
      swiperH: a
    })
  },
  swiper_change: function(e) {
    this.setData({
      nowIdx: e.detail.current
    }), "autoplay" == e.detail.source && this.setData({
      autoplay: !1
    })
  },
  go_visitor: function() {
    this.setData({
      show_visitor_modal: !0
    })
  },
  fireworks_report_click: function() {
    this.go_clue_report(1), h.save_redis("烟花爆竹举报")
  },
  use_barcode_face_check: (c = t(a().mark((function n() {
    var o, i, s, r;
    return a().wrap((function(n) {
      for (;;) switch (n.prev = n.next) {
        case 0:
          if (wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), o = wx.getStorageSync("openid"), i = wx.getStorageSync("unionid"), "" == o || null == o || null == o || "[object Undefined]" == o || "" == i || null == i || null == i || "[object Undefined]" == i) {
            n.next = 9;
            break
          }
          x.globalData.unionid = i, x.globalData.openid = o, n.next = 30;
          break;
        case 9:
          return n.prev = 9, n.next = 12, h.wx_login();
        case 12:
          if (s = n.sent, console.log("login_result:", s), "000000000000" != s.data[0].resp_code) {
            n.next = 21;
            break
          }
          x.globalData.openid = s.data[1].openid, x.globalData.unionid = s.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), n.next = 23;
          break;
        case 21:
          return wx.showModal({
            title: "提示",
            content: s.data[0].resp_msg + "(" + s.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), n.abrupt("return");
        case 23:
          n.next = 30;
          break;
        case 25:
          return n.prev = 25, n.t0 = n.catch(9), console.log("e:", n.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(n.t0),
            showCancel: !1,
            success: function(e) {}
          }), n.abrupt("return");
        case 30:
          r = {
            openId: x.globalData.openid,
            oper_type: "MY_QRCODE"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: r,
            success: function() {
              var n = t(a().mark((function t(n) {
                var o, i, s, r, c, _, l, d;
                return a().wrap((function(a) {
                  for (;;) switch (a.prev = a.next) {
                    case 0:
                      if (console.log("检查进度结果", n), 200 == n.statusCode) {
                        a.next = 4;
                        break
                      }
                      return wx.showModal({
                        title: "提示",
                        content: "(1726112116115)网络异常statusCode:" + n.statusCode,
                        showCancel: !1,
                        success: function(e) {}
                      }), a.abrupt("return");
                    case 4:
                      if ("000000000003" != n.data[0].resp_code) {
                        a.next = 67;
                        break
                      }
                      return o = n.data[0].access_token, x.globalData.access_token = o, a.prev = 7, i = {
                        access_token: x.globalData.access_token
                      }, s = JSON.stringify(i), a.next = 12, m.encrypt_rsa_fun(s);
                    case 12:
                      return r = a.sent, i = {
                        key: r
                      }, c = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_008_get_face_check_log", a.next = 17, h.wx_request(c, i);
                    case 17:
                      if (n = a.sent, wx.hideLoading(), console.log("res:", c, e(n), n), "000000000000" != n.data[0].resp_code) {
                        a.next = 57;
                        break
                      }
                      if (_ = n.data[0].last_used_time, console.log("last_date:", _), l = (new Date).getTime(), d = l - _, console.log("diff_date", _, l, d), !(d > 6048e5)) {
                        a.next = 30;
                        break
                      }
                      wx.showModal({
                        title: "平安码丨平安白云",
                        content: "我的凭证需要您刷脸验证",
                        showCancel: !0,
                        cancelText: "暂不验证",
                        confirmText: "刷脸验证",
                        success: function(e) {
                          1 != e.confirm || wx.navigateTo({
                            url: "../../../component/pages/camera_plugin_barcode/form"
                          })
                        }
                      }), a.next = 55;
                      break;
                    case 30:
                      return a.prev = 30, i = {
                        access_token: x.globalData.access_token
                      }, c = "https://xcx.pinganbaiyun.cn/health_passport/api_002_rent_house_company/sv_009_get_my_qrcode", a.next = 35, h.wx_request(c, i);
                    case 35:
                      if (n = a.sent, console.log("res:", c, e(n), n), "000000000000" != n.data[0].resp_code) {
                        a.next = 48;
                        break
                      }
                      return x.globalData.page_qrcode_qr_code = n.data[0].png_string, x.globalData.page_qrcode_name = n.data[0].name, x.globalData.page_qrcode_id_card = n.data[0].id_card, x.globalData.page_qrcode_mobile_phone = n.data[0].mobile_phone, x.globalData.page_qrcode_expire_date = n.data[0].timestamp, x.globalData.page_qrcode_avatar = n.data[0].avatar_string, wx.navigateTo({
                        url: "../../../component/pages/form_03/form"
                      }), a.abrupt("return");
                    case 48:
                      wx.showModal({
                        title: "提示",
                        content: n.data[0].resp_msg + n.data[0].resp_code,
                        showCancel: !1
                      });
                    case 49:
                      a.next = 55;
                      break;
                    case 51:
                      a.prev = 51, a.t0 = a.catch(30), console.log("异常 e", a.t0), wx.showModal({
                        title: "异常",
                        content: a.t0,
                        showCancel: !1
                      });
                    case 55:
                      a.next = 58;
                      break;
                    case 57:
                      wx.showModal({
                        title: "提示",
                        content: n.data[0].resp_msg + n.data[0].resp_code,
                        showCancel: !1
                      });
                    case 58:
                      a.next = 65;
                      break;
                    case 60:
                      a.prev = 60, a.t1 = a.catch(7), wx.hideLoading(), console.log("获取保存的用户信息 e", a.t1), wx.showModal({
                        title: "异常",
                        content: a.t1,
                        showCancel: !1
                      });
                    case 65:
                      a.next = 68;
                      break;
                    case 67:
                      wx.showModal({
                        title: "提示",
                        content: "您还未登录 请先登录",
                        showCancel: !1
                      });
                    case 68:
                    case "end":
                      return a.stop()
                  }
                }), t, null, [
                  [7, 60],
                  [30, 51]
                ])
              })));
              return function(e) {
                return n.apply(this, arguments)
              }
            }(),
            fail: function(e) {
              console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 31:
        case "end":
          return n.stop()
      }
    }), n, null, [
      [9, 25]
    ])
  }))), function() {
    return c.apply(this, arguments)
  }),
  click_swiper: function(e) {
    var a = e.currentTarget.dataset.post_index;
    e.currentTarget.dataset.post_remark;
    console.log("click_swiper index", a), "1" == a ? this.click_swiper_01() : "2" == a ? this.click_swiper_02() : "3" == a ? this.click_swiper_03() : "4" == a ? this.click_swiper_04() : "5" == a ? this.click_swiper_05() : "6" == a ? this.click_swiper_06() : "7" == a ? this.click_swiper_07() : "8" == a ? this.click_swiper_08() : "9" == a ? this.setData({
      show_white_cloud_code: !0
    }) : "10" == a ? this.click_swiper_10() : "11" == a && this.click_swiper_11()
  },
  go_yasf_001: function() {
    wx.showLoading({
      title: "请稍等...",
      mask: !0
    }), wx.navigateTo({
      url: "../../../third_part/pages/yasf/form?which_src=yasf_001"
    })
  },
  go_yasf_002: function() {
    wx.showLoading({
      title: "请稍等...",
      mask: !0
    }), wx.navigateTo({
      url: "../../../third_part/pages/yasf/form?which_src=yasf_002"
    })
  },
  go_yasf_003: function() {
    wx.showLoading({
      title: "请稍等...",
      mask: !0
    }), wx.navigateTo({
      url: "../../../third_part/pages/yasf/form?which_src=yasf_003"
    })
  },
  more_items: function() {
    wx.showModal({
      title: "更多功能",
      content: "即将推出 敬请期待",
      showCancel: !1
    })
  },
  go_tech_defense: function() {
    wx.navigateTo({
      url: "../../../../module_001/tech_defense/index/index"
    })
  },
  go_standardization_column: function() {
    wx.navigateTo({
      url: "../../../../module_006/news/info_news_index"
    })
  },
  get_notice_list: function() {
    var e = x.globalData.access_token;
    if ("" != e && null != e && null != e) {
      this.data.notice_num;
      wx.navigateTo({
        url: "../../../../module_001/user_notice/gain_notice/component?notice_num=" + this.data.notice_num
      })
    }
  },
  jump_notice_page: function(e) {
    var a = this,
      t = e.currentTarget.dataset.jump_param,
      n = e.currentTarget.dataset.notice_code,
      o = e.currentTarget.dataset.jump_page,
      i = e.currentTarget.dataset.create_date,
      s = e.currentTarget.dataset.notice_title,
      r = e.currentTarget.dataset.notice_content;
    if (a.setData({
        notice_title: s,
        notice_content: r,
        notice_code: n,
        jump_page: o,
        jump_param: t,
        create_date: i
      }), "" != o && null != o && null != o) {
      var c = {
        openId: x.globalData.openid,
        oper_type: "USER_NOTICE"
      };
      wx.request({
        url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
        method: "POST",
        dataType: "json",
        data: c,
        success: function(e) {
          if (wx.hideLoading(), console.log("检查进度结果", e), 200 == e.statusCode)
            if ("000000000003" == e.data[0].resp_code) {
              var t = e.data[0].access_token;
              x.globalData.access_token = t, a.confirm_notice();
              var n = a.data.jump_page,
                o = a.data.jump_param;
              if (n.indexOf("http://") > -1 || n.indexOf("https://") > -1) {
                console.log("在webview跳转", n);
                var i = "../../../../module_001/user_notice/audit/component?" + n + o + "&access_token=" + t;
                console.log("url", i), wx.navigateTo({
                  url: i
                })
              } else {
                console.log("在小程序内跳转", n);
                n = n.replace("src=", "");
                console.log("在小程序内跳转", n), wx.navigateTo({
                  url: n,
                  fail: function(e) {
                    console.error("在小程序内跳转异常：", e)
                  }
                })
              }
            } else {
              if (n.indexOf("p_001_fanzha/install_fanzha_app") > -1) return void a.go_national_anti_fraud();
              i = "../../../../module_001/user_notice/audit/component?" + n + o + "&access_token=" + x.globalData.access_token;
              wx.navigateTo({
                url: i
              })
            }
          else wx.showModal({
            title: "提示",
            content: "(1726112116116)网络异常statusCode:" + e.statusCode,
            showCancel: !1,
            success: function(e) {}
          })
        },
        fail: function(e) {
          wx.hideLoading()
        }
      })
    } else a.setData({
      show_notice_modal: !0
    })
  },
  confirm_notice: function() {
    var e = this;
    e.setData({
      show_notice_modal: !1
    });
    var a = {
        notice_code: e.data.notice_code,
        openId: x.globalData.openid
      },
      t = b.get_url() + "p_049_user_msg_server/api_001_user/update_notice_state";
    wx.request({
      url: t,
      method: "POST",
      dataType: "json",
      data: a,
      success: function(a) {
        e.get_user_notice(x.globalData.openid, x.globalData.session_key, "")
      }
    })
  },
  go_fda: function() {
    wx.navigateTo({
      url: "../../../../module_002_fda/p_001_fda/index/index"
    })
  },
  go_clue_report: function(e) {
    var a = "../../../../page/strike_black/form?scene=111";
    1 == e ? a += "&fireworks=1" : 4 == e && (a += "&fireworks=4"), wx.navigateTo({
      url: a
    }), h.save_redis("所(队)长信箱")
  },
  go_clue_report2: function() {
    wx.navigateTo({
      url: "../../../../module_001/p_019_mailbox/mailbox?style=111"
    }), h.save_redis("分局长信箱")
  },
  go_takeout_boy: function() {
    wx.navigateTo({
      url: "../../../../module_003_online_buzi/p_003_takeout_boy/rider_site/form"
    })
  },
  go_home: (r = t(a().mark((function t() {
    var n, o, i, s, r, c, _, l, d, u, g;
    return a().wrap((function(a) {
      for (;;) switch (a.prev = a.next) {
        case 0:
          return n = this, a.next = 3, h.async_get_net_work_type();
        case 3:
          if (o = a.sent, n.data.net_work_type = o.networkType, console.log("go_home that.data.net_work_type", n.data.net_work_type), "none" === n.data.net_work_type) {
            a.next = 48;
            break
          }
          if (wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), i = wx.getStorageSync("openid"), s = wx.getStorageSync("unionid"), "" == i || null == i || null == i || "[object Undefined]" == i || "" == s || null == s || null == s || "[object Undefined]" == s) {
            a.next = 15;
            break
          }
          x.globalData.unionid = s, x.globalData.openid = i, a.next = 45;
          break;
        case 15:
          return a.prev = 15, a.next = 18, h.wx_login();
        case 18:
          if (r = a.sent, console.log("login_result:", r), "000000000000" != r.data[0].resp_code) {
            a.next = 27;
            break
          }
          x.globalData.openid = r.data[1].openid, x.globalData.unionid = r.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), a.next = 31;
          break;
        case 27:
          return (c = {}).errMsg = r.data[0].resp_msg + "(" + r.data[0].resp_code + ")", n.f_005_enter_go_home_by_cache(c), a.abrupt("return");
        case 31:
          a.next = 45;
          break;
        case 33:
          if (a.prev = 33, a.t0 = a.catch(15), console.log("1726106996310 e:", a.t0), "" == (_ = wx.getStorageSync("goHomeObj")) || null == _ || null == _) {
            a.next = 43;
            break
          }
          return l = "../../../../page/opendoor/opendoor_index?phone=" + _.phone + "&name=" + _.name + "&id_card=" + _.id_card + "&login_token=" + _.login_token + "&gohome_today_date=" + n.data.gohome_today_date, wx.navigateTo({
            url: l
          }), a.abrupt("return");
        case 43:
          wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(a.t0),
            showCancel: !1,
            success: function(e) {}
          });
        case 44:
          return a.abrupt("return");
        case 45:
          d = {
            openId: x.globalData.openid,
            oper_type: "INDEX"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: d,
            success: function(a) {
              if (wx.hideLoading(), console.log("检查进度结果 1726064379936 ", e(a), a), 200 != a.statusCode) {
                var t = {};
                return t.errMsg = "网络异常statusCode:" + a.statusCode, void n.f_005_enter_go_home_by_cache(t)
              }
              if ("000000000003" != a.data[0].resp_code) {
                if ("000000000001" == a.data[0].resp_code || "000000000002" == a.data[0].resp_code || "000000000004" == a.data[0].resp_code) return x.globalData.back_url = "INDEX", void wx.showModal({
                  title: "门禁",
                  content: "体验门禁开锁功能请您注册",
                  showCancel: !0,
                  cancelText: "暂不注册",
                  confirmText: "确定",
                  success: function(e) {
                    1 == e.confirm && wx.navigateTo({
                      url: "../../../component/pages/form_ocr_01/form"
                    })
                  }
                });
                var o = {};
                return o.errMsg = a.data[0].resp_msg + "(" + a.data[0].resp_code + ")", void n.f_005_enter_go_home_by_cache(o)
              }
              var i = a.data[0].access_token;
              wx.showLoading({
                title: "请稍等...",
                mask: !0
              });
              var s = wx.getStorageSync("goHomeObj"),
                r = "";
              "" != s && null != s && null != s && (r = s.login_token);
              var c = !1,
                _ = 0;
              _ = setTimeout((function() {
                if (wx.hideLoading(), clearTimeout(_), 0 == c) {
                  var e = wx.getStorageSync("goHomeObj");
                  if (console.log("goHomeObj 55001023", e), "" != e && null != e && null != e) {
                    var a = "../../../../page/opendoor/opendoor_index?access_token=" + i + "&phone=" + e.phone + "&name=" + e.name + "&id_card=" + e.id_card + "&login_token=" + e.login_token + "&gohome_today_date=" + n.data.gohome_today_date;
                    wx.navigateTo({
                      url: a
                    })
                  } else wx.showModal({
                    title: "提示",
                    content: "网络超时"
                  })
                }
              }), 3e3), wx.request({
                url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/go_home_service_login",
                method: "POST",
                data: {
                  openId: x.globalData.openid,
                  login_token: r
                },
                header: {
                  "Content-type": "application/json",
                  cloud_shield_token: i
                },
                success: function(e) {
                  if (console.log("go_home_login", e), c = !0, wx.hideLoading(), "000000000000" != e.data[0].resp_code) {
                    var a = wx.getStorageSync("goHomeObj");
                    if (console.log("goHomeObj 55001023", a), "" != a && null != a && null != a) {
                      var t = "../../../../page/opendoor/opendoor_index?access_token=" + i + "&phone=" + a.phone + "&name=" + a.name + "&id_card=" + a.id_card + "&login_token=" + a.login_token + "&gohome_today_date=" + n.data.gohome_today_date;
                      wx.navigateTo({
                        url: t
                      })
                    } else wx.showModal({
                      title: "提示",
                      content: e.data[0].resp_msg
                    })
                  } else {
                    var o = e.data[0].phone,
                      s = e.data[0].name,
                      r = e.data[0].id_card,
                      _ = e.data[0].token,
                      l = {
                        phone: o,
                        name: s,
                        id_card: r,
                        login_token: _
                      };
                    wx.setStorageSync("goHomeObj", l);
                    var d = "../../../../page/opendoor/opendoor_index?access_token=" + i + "&phone=" + o + "&name=" + s + "&id_card=" + r + "&login_token=" + _ + "&gohome_today_date=" + n.data.gohome_today_date;
                    wx.navigateTo({
                      url: d
                    })
                  }
                },
                fail: function(e) {
                  c = !0, wx.hideLoading();
                  var a = wx.getStorageSync("goHomeObj");
                  if ("" != a && null != a && null != a) {
                    var t = "../../../../page/opendoor/opendoor_index?access_token=" + i + "&phone=" + a.phone + "&name=" + a.name + "&id_card=" + a.id_card + "&login_token=" + a.login_token + "&gohome_today_date=" + n.data.gohome_today_date;
                    wx.navigateTo({
                      url: t
                    })
                  } else wx.showModal({
                    title: "提示",
                    content: "请检查网络"
                  })
                }
              })
            },
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e);
              var a = wx.getStorageSync("goHomeObj");
              if ("" != a && null != a && null != a) {
                var t = "../../../../page/opendoor/opendoor_index?phone=" + a.phone + "&name=" + a.name + "&id_card=" + a.id_card + "&login_token=" + a.login_token + "&gohome_today_date=" + n.data.gohome_today_date;
                wx.navigateTo({
                  url: t
                })
              } else wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          }), a.next = 55;
          break;
        case 48:
          if ("none" !== n.data.net_work_type) {
            a.next = 53;
            break
          }
          "" != (u = wx.getStorageSync("goHomeObj")) && null != u && null != u ? (g = "../../../../page/opendoor/opendoor_index?phone=" + u.phone + "&name=" + u.name + "&id_card=" + u.id_card + "&login_token=" + u.login_token + "&gohome_today_date=" + n.data.gohome_today_date, wx.navigateTo({
            url: g
          })) : wx.showModal({
            title: "离线状态",
            content: "请在网络良好的环境打开小程序",
            showCancel: !1,
            success: function(e) {}
          }), a.next = 55;
          break;
        case 53:
          return wx.showModal({
            title: "提示",
            content: "状态异常(" + n.data.net_work_type + ")",
            showCancel: !1,
            success: function(e) {}
          }), a.abrupt("return");
        case 55:
        case "end":
          return a.stop()
      }
    }), t, this, [
      [15, 33]
    ])
  }))), function() {
    return r.apply(this, arguments)
  }),
  go_population_service_brigade: function() {
    wx.navigateTo({
      url: "../../../../module_003_online_buzi/p_001_online_buzi/Population_services_index/Population_services_index"
    })
  },
  go_md: function() {
    wx.navigateTo({
      url: "../../../../module_003_online_buzi/p_001_online_buzi/form/?type=0"
    })
  },
  query_registered_residence: function() {
    h.save_redis("查询户籍档案"), this.setData({
      show_apply_person_type: !0,
      select_query_type: !0
    })
  },
  border_defense_certificate: function() {
    h.save_redis("边防证审核"), wx.showModal({
      title: "温馨提醒",
      content: "系统升级中，办理边防证可先前往广州市公安局白云分局综合办证厅一楼（白云区广云路11号）咨询办理。",
      showCancel: !1,
      confirmText: "我知道了",
      confirmColor: "#409eff"
    })
  },
  business_record: function() {
    h.save_redis("网办业务记录"), wx.showLoading({
      title: "请稍等...",
      mask: !0
    }), wx.login({
      success: function(e) {
        wx.request({
          url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/login",
          method: "POST",
          dataType: "json",
          data: {
            code: e.code
          },
          success: function(e) {
            if (console.log("拉取login", e), "000000000000" == e.data[0].resp_code) {
              x.globalData.openid = e.data[1].openid, console.log("拉取login成功", x.globalData.openid);
              var a = {
                openId: x.globalData.openid,
                oper_type: "WBYW"
              };
              wx.request({
                url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
                method: "POST",
                dataType: "json",
                data: a,
                success: function(e) {
                  if (wx.hideLoading(), console.log("检查进度结果", e), 200 == e.statusCode) {
                    if ("000000000003" == e.data[0].resp_code) {
                      var a = e.data[0].access_token;
                      return x.globalData.access_token = a, wx.setStorageSync("access_token", x.globalData.access_token), wx.setStorageSync("openid", x.globalData.openid), void wx.navigateTo({
                        url: "../../../../module_003_online_buzi/p_001_online_buzi/Business_record/Business_record"
                      })
                    }
                    return x.globalData.back_url = "WBYW", void wx.showModal({
                      title: "平安码丨平安白云",
                      content: "无犯罪证明，需要您实名注册。",
                      showCancel: !0,
                      cancelText: "暂不注册",
                      confirmText: "现在注册",
                      success: function(e) {
                        1 == e.confirm && (wx.setStorageSync("busi_type", "wbyw_Business_record"), wx.setStorageSync("second_type", ""), x.globalData.register_type = "SELF", wx.navigateTo({
                          url: "../../../component/pages/form_ocr_01/form"
                        }))
                      }
                    })
                  }
                  wx.showModal({
                    title: "提示",
                    content: "(1726112116117)网络异常statusCode:" + e.statusCode,
                    showCancel: !1,
                    success: function(e) {}
                  })
                },
                fail: function(e) {
                  wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                    title: "提示",
                    content: "获取状态异常-1," + e.errMsg,
                    showCancel: !1
                  })
                }
              })
            } else wx.hideLoading(), wx.showModal({
              title: "提示",
              content: "获取状态异常-3:" + e.data[0].resp_code + e.data[0].resp_msg,
              showCancel: !1
            })
          },
          fail: function(e) {
            wx.hideLoading(), console.log("拉取手机号失败-0161，将无法正常使用开放接口等服务", e), wx.showModal({
              title: "提示",
              content: "获取状态异常-4," + e.errMsg,
              showCancel: !1
            })
          }
        })
      },
      fail: function(e) {
        wx.hideLoading(), console.log("wx.login -0162接口调用失败，将无法正常使用开放接口等服务", e), wx.showModal({
          title: "提示",
          content: "获取状态异常," + e.errMsg,
          showCancel: !1
        })
      }
    })
  },
  p_005_public_video_filing: function() {
    wx.navigateTo({
      url: "/module_003_online_buzi/p_005_public_video_filing/public_video_filing_login_page/public_video_filing_login_page"
    })
  },
  radio_click1: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      radio_text: e.currentTarget.dataset.text,
      radio_checked1: !0,
      radio_checked2: !1
    })
  },
  go_call_phone: (s = t(a().mark((function e() {
    var n, o, i, s, r;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (h.save_redis("快速报警"), n = this, o = wx.getStorageSync("openid"), i = wx.getStorageSync("unionid"), "" == o || null == o || null == o || "[object Undefined]" == o || "" == i || null == i || null == i || "[object Undefined]" == i) {
            e.next = 10;
            break
          }
          x.globalData.unionid = i, x.globalData.openid = o, e.next = 31;
          break;
        case 10:
          return e.prev = 10, e.next = 13, h.wx_login();
        case 13:
          if (s = e.sent, console.log("login_result:", s), "000000000000" != s.data[0].resp_code) {
            e.next = 22;
            break
          }
          x.globalData.openid = s.data[1].openid, x.globalData.unionid = s.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), e.next = 24;
          break;
        case 22:
          return wx.showModal({
            title: "提示",
            content: s.data[0].resp_msg + "(" + s.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 24:
          e.next = 31;
          break;
        case 26:
          return e.prev = 26, e.t0 = e.catch(10), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 31:
          r = {
            openId: x.globalData.openid,
            oper_type: "INDEX"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: r,
            success: function() {
              var e = t(a().mark((function e(t) {
                var o;
                return a().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", t), 200 == t.statusCode) {
                        e.next = 5;
                        break
                      }
                      return wx.showModal({
                        title: "提示",
                        content: "(1726112116118)网络异常statusCode:" + t.statusCode,
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 5:
                      if (console.log(66666, t.data[0].resp_code), "000000000003" != t.data[0].resp_code) {
                        e.next = 15;
                        break
                      }
                      o = t.data[0].access_token, x.globalData.access_token = o, console.log("access_token", o), wx.showLoading({
                        title: "请稍等...",
                        mask: !0
                      }), x.globalData.access_token = o, n.get_sfz_030(o), e.next = 17;
                      break;
                    case 15:
                      return wx.showModal({
                        title: "服务热线功能需要您实名注册",
                        content: "服务热线功能需要您实名注册",
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          1 == e.confirm && wx.navigateTo({
                            url: "../../../component/pages/form_ocr_01/form"
                          })
                        }
                      }), e.abrupt("return");
                    case 17:
                      return e.abrupt("return");
                    case 18:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }(),
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 35:
        case "end":
          return e.stop()
      }
    }), e, this, [
      [10, 26]
    ])
  }))), function() {
    return s.apply(this, arguments)
  }),
  get_sfz_030: (i = t(a().mark((function e(t) {
    var n;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          (n = this).data.access_token_030 = t, n.get_location_for_emergency_call();
        case 3:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(e) {
    return i.apply(this, arguments)
  }),
  get_location_for_emergency_call: function() {
    var e = this;
    wx.showLoading({
      title: "正在获取位置...",
      mask: !0
    }), wx.getSetting({
      success: function(a) {
        console.log("快速报警-获取用户授权设置...", a), null == a.authSetting["scope.userLocation"] || null == a.authSetting["scope.userLocation"] ? (console.log("快速报警-用户未设置过授权,弹出请求授权界面..."), wx.hideLoading(), wx.authorize({
          scope: "scope.userLocation",
          success: function(a) {
            console.log("快速报警-授权成功", a), e.doGetLocationForEmergency()
          },
          fail: function(a) {
            console.log("快速报警-用户拒绝授权", a), wx.showModal({
              title: "需要位置权限",
              content: "快速报警需要获取您的位置信息以便就近派警，请授权位置权限",
              confirmText: "去设置",
              success: function(a) {
                a.confirm && wx.openSetting({
                  success: function(a) {
                    a.authSetting["scope.userLocation"] && e.get_location_for_emergency_call()
                  }
                })
              }
            })
          }
        })) : 0 == a.authSetting["scope.userLocation"] ? (console.log("快速报警-用户已拒绝过授权"), wx.hideLoading(), wx.showModal({
          title: "需要位置权限",
          content: "快速报警需要获取您的位置信息以便就近派警，请在设置中开启位置权限",
          confirmText: "去设置",
          success: function(a) {
            a.confirm && wx.openSetting({
              success: function(a) {
                a.authSetting["scope.userLocation"] && e.get_location_for_emergency_call()
              }
            })
          }
        })) : 1 == a.authSetting["scope.userLocation"] && (console.log("快速报警-用户已授权,直接获取位置"), e.doGetLocationForEmergency())
      },
      fail: function(e) {
        wx.hideLoading(), console.log("快速报警-获取授权设置失败", e), wx.showToast({
          title: "获取授权状态失败",
          icon: "none",
          duration: 2e3
        })
      }
    })
  },
  doGetLocationForEmergency: function() {
    var e = this,
      a = x;
    wx.showLoading({
      title: "正在定位...",
      mask: !0
    }), wx.getLocation({
      type: "wgs84",
      altitude: !1,
      success: function(t) {
        console.log("快速报警-获取位置成功:", t), wx.hideLoading(), a.globalData.location_info = t, e.data.latitude = t.latitude, e.data.longitude = t.longitude, e.calling()
      },
      fail: function(a) {
        console.log("快速报警-获取位置失败:", a), wx.hideLoading();
        var t = "定位失败";
        a.errMsg && (a.errMsg.indexOf("auth deny") > -1 ? t = "位置权限被拒绝，请在设置中开启" : a.errMsg.indexOf("timeout") > -1 ? t = "定位超时，请检查网络或GPS信号" : a.errMsg.indexOf("fail") > -1 && (t = "定位失败，请检查手机定位服务是否开启")), wx.showModal({
          title: "定位失败",
          content: t + "，是否重试？",
          confirmText: "重试",
          cancelText: "取消",
          success: function(a) {
            a.confirm ? setTimeout((function() {
              e.doGetLocationForEmergency()
            }), 500) : a.cancel && wx.showModal({
              title: "提示",
              content: "请确保已开启手机定位服务和微信位置权限",
              confirmText: "去设置",
              cancelText: "知道了",
              success: function(e) {
                e.confirm && wx.openSetting()
              }
            })
          }
        })
      }
    })
  },
  calling: function() {
    var n = this,
      o = this;
    console.log("sdk_url", " ");
    var i, s = n.data.access_token_030,
      r = k + "api_05_rent_house_mini_program/get_sfz?third_part_app_id=MJXT&third_part_secret_key=f773304547114db5&access_token=" + s + "&sdk_url= ";
    wx.request({
      url: r,
      success: (i = t(a().mark((function t(i) {
        var s, r, c, _, l, d;
        return a().wrap((function(a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              if ("000000000000" != i.data[0].resp_code) {
                a.next = 18;
                break
              }
              return console.log("获取token，", i.data), s = i.data[0].cloud_shield_token, r = {
                latitude: n.data.latitude,
                longitude: n.data.longitude
              }, c = JSON.stringify(r), a.next = 7, m.encrypt_rsa_fun(c);
            case 7:
              return _ = a.sent, c = {
                key: _
              }, l = k + "api_05_rent_house_mini_program/get_police_station_and_phone", a.next = 12, h.wx_request3(l, c, s);
            case 12:
              i = a.sent, wx.hideLoading(), console.log("get_police_station_and_phone res:", l, e(i), i), "000000000000" == i.data[0].resp_code ? (console.log("lllphone_number", i.data[0].phone), d = i.data[0].phone, wx.makePhoneCall({
                phoneNumber: d,
                success: function() {
                  console.log("拨打电话成功！")
                },
                fail: function() {
                  console.log("拨打电话失败！")
                }
              })) : null != i.data[0].resp_msg && null != i.data[0].resp_msg && o.setData({
                showModal_location: !0
              }), a.next = 19;
              break;
            case 18:
              null != i.data[0].resp_msg && null != i.data[0].resp_msg && wx.showToast({
                icon: "none",
                title: "获取token失败，" + i.data[0].resp_msg
              });
            case 19:
            case "end":
              return a.stop()
          }
        }), t)
      }))), function(e) {
        return i.apply(this, arguments)
      }),
      fail: function(e) {
        console.log("fail233555", e), wx.showToast({
          icon: "none",
          title: e
        })
      }
    })
  },
  radio_click2: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      radio_text: e.currentTarget.dataset.text,
      radio_checked1: !1,
      radio_checked2: !0
    })
  },
  border_radio_click1: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      border_radio_text: e.currentTarget.dataset.text,
      border_radio_checked1: !0,
      border_radio_checked2: !1
    })
  },
  border_radio_click2: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      border_radio_text: e.currentTarget.dataset.text,
      border_radio_checked1: !1,
      border_radio_checked2: !0
    })
  },
  border_next_one: function() {
    var e = this;
    return t(a().mark((function t() {
      var n, o, i, s, r;
      return a().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (console.log("border_next_one", e.data.border_radio_text), "" != e.data.border_radio_text) {
              a.next = 4;
              break
            }
            return wx.showToast({
              title: "请选择办理身份!",
              icon: "none",
              duration: 1500
            }), a.abrupt("return");
          case 4:
            if (wx.showLoading({
                title: "请稍等...",
                mask: !0
              }), n = e, o = wx.getStorageSync("openid"), i = wx.getStorageSync("unionid"), "" == o || null == o || null == o || "[object Undefined]" == o || "" == i || null == i || null == i || "[object Undefined]" == i) {
              a.next = 14;
              break
            }
            x.globalData.unionid = i, x.globalData.openid = o, a.next = 35;
            break;
          case 14:
            return a.prev = 14, a.next = 17, h.wx_login();
          case 17:
            if (s = a.sent, console.log("login_result:", s), "000000000000" != s.data[0].resp_code) {
              a.next = 26;
              break
            }
            x.globalData.openid = s.data[1].openid, x.globalData.unionid = s.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), a.next = 28;
            break;
          case 26:
            return wx.showModal({
              title: "提示",
              content: s.data[0].resp_msg + "(" + s.data[0].resp_code + ")",
              showCancel: !1,
              success: function(e) {}
            }), a.abrupt("return");
          case 28:
            a.next = 35;
            break;
          case 30:
            return a.prev = 30, a.t0 = a.catch(14), console.log("e:", a.t0), wx.showModal({
              title: "提示",
              content: "" + JSON.stringify(a.t0),
              showCancel: !1,
              success: function(e) {}
            }), a.abrupt("return");
          case 35:
            "WBYW", r = {
              openId: x.globalData.openid,
              oper_type: "WBYW"
            }, "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
              method: "POST",
              dataType: "json",
              data: r,
              success: function(e) {
                if (wx.hideLoading(), console.log("检查进度结果", e), 200 == e.statusCode) {
                  if ("000000000003" == e.data[0].resp_code) {
                    var a = e.data[0].access_token;
                    return x.globalData.access_token = a, wx.setStorageSync("access_token", x.globalData.access_token), wx.setStorageSync("openid", x.globalData.openid), n.guabi_select_query(), void wx.navigateTo({
                      url: "../../../../module_003_online_buzi/p_001_online_buzi/Border_defense_certificate1/Border_defense_certificate1?selected_text=" + n.data.border_radio_text
                    })
                  }
                  wx.showModal({
                    title: "边防证审核",
                    content: "边防证审核功能，需要您实名注册。",
                    showCancel: !0,
                    cancelText: "暂不注册",
                    confirmText: "现在注册",
                    success: function(e) {
                      1 == e.confirm && (x.globalData.back_url = "WBYW", wx.setStorageSync("busi_type", "wbyw_border_cer"), x.globalData.register_type = "SELF", wx.navigateTo({
                        url: "../../../component/pages/form_ocr_01/form"
                      }))
                    }
                  })
                } else wx.showModal({
                  title: "提示",
                  content: "(1726112116119)网络异常statusCode:" + e.statusCode,
                  showCancel: !1,
                  success: function(e) {}
                })
              },
              fail: function(e) {
                wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                  title: "提示",
                  content: "获取状态异常-1," + e.errMsg,
                  showCancel: !1
                })
              }
            });
          case 36:
          case "end":
            return a.stop()
        }
      }), t, null, [
        [14, 30]
      ])
    })))()
  },
  next_one: function() {
    var e = this;
    return t(a().mark((function t() {
      var n, o, i, s, r;
      return a().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (n = e, "" != e.data.radio_text) {
              a.next = 4;
              break
            }
            return wx.showToast({
              title: "请选择办理身份!",
              icon: "none",
              duration: 1e3
            }), a.abrupt("return");
          case 4:
            if (wx.showLoading({
                title: "请稍等...",
                mask: !0
              }), o = wx.getStorageSync("openid"), i = wx.getStorageSync("unionid"), "" == o || null == o || null == o || "[object Undefined]" == o || "" == i || null == i || null == i || "[object Undefined]" == i) {
              a.next = 13;
              break
            }
            x.globalData.unionid = i, x.globalData.openid = o, a.next = 34;
            break;
          case 13:
            return a.prev = 13, a.next = 16, h.wx_login();
          case 16:
            if (s = a.sent, console.log("login_result:", s), "000000000000" != s.data[0].resp_code) {
              a.next = 25;
              break
            }
            x.globalData.openid = s.data[1].openid, x.globalData.unionid = s.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), a.next = 27;
            break;
          case 25:
            return wx.showModal({
              title: "提示",
              content: s.data[0].resp_msg + "(" + s.data[0].resp_code + ")",
              showCancel: !1,
              success: function(e) {}
            }), a.abrupt("return");
          case 27:
            a.next = 34;
            break;
          case 29:
            return a.prev = 29, a.t0 = a.catch(13), console.log("e:", a.t0), wx.showModal({
              title: "提示",
              content: "" + JSON.stringify(a.t0),
              showCancel: !1,
              success: function(e) {}
            }), a.abrupt("return");
          case 34:
            "WBYW", r = {
              openId: x.globalData.openid,
              oper_type: "WBYW"
            }, "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state", wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
              method: "POST",
              dataType: "json",
              data: r,
              success: function(e) {
                if (wx.hideLoading(), console.log("检查进度结果", e), 200 == e.statusCode) {
                  if ("000000000003" == e.data[0].resp_code) {
                    var a = e.data[0].access_token;
                    return x.globalData.access_token = a, wx.setStorageSync("access_token", x.globalData.access_token), wx.setStorageSync("openid", x.globalData.openid), "人员查询" == n.data.radio_text ? (wx.navigateTo({
                      url: "../../../../module_003_online_buzi/p_001_online_buzi/Personal_inquiry1/Personal_inquiry1"
                    }), void n.setData({
                      show_apply_person_type: !1,
                      select_query_type: !1,
                      radio_checked1: !1,
                      radio_text: ""
                    })) : (wx.navigateTo({
                      url: "../../../../module_003_online_buzi/p_001_online_buzi/Unit_query1/Unit_query1"
                    }), void n.setData({
                      show_apply_person_type: !1,
                      select_query_type: !1,
                      radio_checked2: !1,
                      radio_text: ""
                    }))
                  }
                  return x.globalData.back_url = "WBYW", void wx.showModal({
                    title: "平安码丨平安白云",
                    content: "查询户籍档案，需要您实名注册。",
                    showCancel: !0,
                    cancelText: "暂不注册",
                    confirmText: "现在注册",
                    success: function(e) {
                      1 == e.confirm && (wx.setStorageSync("busi_type", "wbyw_query_household_register"), wx.setStorageSync("second_type", n.data.radio_text), x.globalData.register_type = "SELF", wx.navigateTo({
                        url: "../../../component/pages/form_ocr_01/form"
                      }))
                    }
                  })
                }
                wx.showModal({
                  title: "提示",
                  content: "(1726112116120)网络异常statusCode:" + e.statusCode,
                  showCancel: !1,
                  success: function(e) {}
                })
              },
              fail: function(e) {
                wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                  title: "提示",
                  content: "获取状态异常-1," + e.errMsg,
                  showCancel: !1
                })
              }
            });
          case 35:
          case "end":
            return a.stop()
        }
      }), t, null, [
        [13, 29]
      ])
    })))()
  },
  radio_residence_click1: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      residence_permit_text: e.currentTarget.dataset.text,
      residence_permit_checked1: !0,
      residence_permit_checked2: !1
    })
  },
  radio_residence_click2: function(e) {
    console.log(e.currentTarget.dataset.text), this.setData({
      residence_permit_text: e.currentTarget.dataset.text,
      residence_permit_checked1: !1,
      residence_permit_checked2: !0
    })
  },
  next_one_two: function() {
    if ("" != this.data.residence_permit_text) {
      var e = 1;
      return 2 == (e = "线上申请" == this.data.residence_permit_text ? 2 : 1) ? void wx.showToast({
        title: "线上申请功能暂不开放!",
        icon: "none",
        duration: 1e3
      }) : (wx.navigateTo({
        url: "../../../../module_003_online_buzi/p_001_online_buzi/Temporary_residence_permit1/Temporary_residence_permit1?apply_type=" + e
      }), void this.setData({
        show_apply_person_type: !1,
        residence_permit_select_type: !1,
        residence_permit_checked1: !1,
        residence_permit_checked2: !1,
        residence_permit_text: ""
      }))
    }
    wx.showToast({
      title: "请选择办理身份!",
      icon: "none",
      duration: 1e3
    })
  },
  number_radio: function(e) {
    console.log(e.currentTarget.dataset);
    var a = e.currentTarget.dataset.title,
      t = e.currentTarget.dataset.index,
      n = this.data.number_type_datalist;
    n.forEach((function(e) {
      a == e.title ? e.checked = !0 : e.checked = !1
    })), this.setData({
      number_title: a,
      number_type_datalist: n,
      number_index: t
    })
  },
  guabi_select_query: function() {
    var e = this.data.number_type_datalist;
    e.forEach((function(e) {
      e.checked = !1
    })), this.setData({
      show_border_cert_sel: !1,
      select_query_type: !1,
      show_apply_person_type: !1,
      radio_text: "",
      radio_checked1: !1,
      radio_checked2: !1,
      residence_permit_select_type: !1,
      residence_permit_checked1: !1,
      residence_permit_checked2: !1,
      residence_permit_text: "",
      number_type: !1,
      number_title: "",
      number_type_datalist: e
    })
  },
  onUnload: function() {
    clearTimeout(this.data.timeout_id)
  },
  onShareAppMessage: function(e) {
    return {
      title: "群众诉求 一码通办",
      imageUrl: "https://qv1.pinganbaiyun.cn/img/img_004_index/white_cloud_code.png"
    }
  },
  onShareTimeline: function(e) {
    return {
      title: "群众诉求 一码通办",
      imageUrl: "https://qv1.pinganbaiyun.cn/img/img_004_index/white_cloud_code.png"
    }
  },
  go_national_anti_fraud: function() {
    wx.showModal({
      title: "国家反诈中心app",
      content: "请您配警官扫警官的巡逻码进行确认",
      showCancel: !1,
      success: function(e) {
        e.confirm
      }
    })
  },
  go_gd_code: (o = t(a().mark((function e() {
    var n, o, i, s;
    return a().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (console.log("go_gd_code"), wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), n = wx.getStorageSync("openid"), o = wx.getStorageSync("unionid"), "" == n || null == n || null == n || "[object Undefined]" == n || "" == o || null == o || null == o || "[object Undefined]" == o) {
            e.next = 10;
            break
          }
          x.globalData.unionid = o, x.globalData.openid = n, e.next = 31;
          break;
        case 10:
          return e.prev = 10, e.next = 13, h.wx_login();
        case 13:
          if (i = e.sent, console.log("login_result:", i), "000000000000" != i.data[0].resp_code) {
            e.next = 22;
            break
          }
          x.globalData.openid = i.data[1].openid, x.globalData.unionid = i.data[1].unionid, wx.setStorageSync("openid", x.globalData.openid), wx.setStorageSync("unionid", x.globalData.unionid), e.next = 24;
          break;
        case 22:
          return wx.showModal({
            title: "提示",
            content: i.data[0].resp_msg + "(" + i.data[0].resp_code + ")",
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 24:
          e.next = 31;
          break;
        case 26:
          return e.prev = 26, e.t0 = e.catch(10), console.log("e:", e.t0), wx.showModal({
            title: "提示",
            content: "" + JSON.stringify(e.t0),
            showCancel: !1,
            success: function(e) {}
          }), e.abrupt("return");
        case 31:
          s = {
            openId: x.globalData.openid,
            oper_type: "INDEX"
          }, wx.request({
            url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/check_state",
            method: "POST",
            dataType: "json",
            data: s,
            success: function() {
              var e = t(a().mark((function e(t) {
                var n, o, i, s, r, c, _;
                return a().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (wx.hideLoading(), console.log("检查进度结果", t), 200 == t.statusCode) {
                        e.next = 5;
                        break
                      }
                      return wx.showModal({
                        title: "提示",
                        content: "(1726112116121)网络异常statusCode:" + t.statusCode,
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 5:
                      if ("000000000003" != t.data[0].resp_code) {
                        e.next = 44;
                        break
                      }
                      return n = t.data[0].access_token, x.globalData.access_token = n, e.prev = 8, wx.showLoading({
                        title: "请稍等...",
                        mask: !0
                      }), o = {
                        buzi_type: "show_yjm_code"
                      }, e.next = 14, h.wx_request("https://xcx.pinganbaiyun.cn/health_passport/api_004_motorcycles/sv_001_get_gd_security_authcode", o);
                    case 14:
                      if (i = e.sent, wx.hideLoading(), "000000000000" != i.data[0].resp_code) {
                        e.next = 28;
                        break
                      }
                      return s = i.data[0].code, r = "pages/common/thirdPartyRouter/thirdPartyRouter?feat=qrCode&refer=paby&authcode=" + s, console.log("gd_security_path", r), c = {}, null == x.globalData.SYSTEMINFO ? (c = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", c)) : c = x.globalData.SYSTEMINFO, _ = h.compareVersion(c.SDKVersion, "2.20.1"), console.log("diff_version_002", _), _ >= 0 ? wx.openEmbeddedMiniProgram({
                        appId: "wx9f75b01dcb4b1a79",
                        path: r,
                        allowFullScreen: !0,
                        extraData: {},
                        envVersion: "release",
                        success: function(e) {
                          console.log("navigateToMiniProgram res", e)
                        }
                      }) : wx.navigateToMiniProgram({
                        appId: "wx9f75b01dcb4b1a79",
                        path: r,
                        extraData: {},
                        envVersion: "release",
                        success: function(e) {
                          console.log("navigateToMiniProgram res", e)
                        }
                      }), e.abrupt("return");
                    case 28:
                      if ("-00000350001" != i.data[0].resp_code) {
                        e.next = 32;
                        break
                      }
                      wx.showModal({
                        title: "提示",
                        content: "请您再次亮码",
                        showCancel: !1,
                        success: function(e) {}
                      }), e.next = 34;
                      break;
                    case 32:
                      return wx.showModal({
                        title: "粤居码亮码提示",
                        content: "系统异常，请稍后再试！",
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 34:
                      e.next = 42;
                      break;
                    case 36:
                      return e.prev = 36, e.t0 = e.catch(8), wx.hideLoading(), console.log("e:", e.t0), wx.showModal({
                        title: "提示",
                        content: "" + JSON.stringify(e.t0),
                        showCancel: !1,
                        success: function(e) {}
                      }), e.abrupt("return");
                    case 42:
                      e.next = 47;
                      break;
                    case 44:
                      return x.globalData.back_url = "INDEX", wx.showModal({
                        title: "平安码丨平安白云",
                        content: "粤居码亮码功能，需要您实名注册。",
                        showCancel: !0,
                        cancelText: "暂不注册",
                        confirmText: "现在注册",
                        success: function(e) {
                          1 == e.confirm && wx.navigateTo({
                            url: "../../../component/pages/form_ocr_01/form"
                          })
                        }
                      }), e.abrupt("return");
                    case 47:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [8, 36]
                ])
              })));
              return function(a) {
                return e.apply(this, arguments)
              }
            }(),
            fail: function(e) {
              wx.hideLoading(), console.log("获取用户手机号失败，将无法正常使用开放接口等服务", e), wx.showModal({
                title: "提示",
                content: "获取状态异常-1," + e.errMsg,
                showCancel: !1
              })
            }
          });
        case 32:
        case "end":
          return e.stop()
      }
    }), e, null, [
      [10, 26]
    ])
  }))), function() {
    return o.apply(this, arguments)
  }),
  quickGotoSimple: function() {
    console.log("1733919102491 quickGotoSimple"), wx.reLaunch({
      url: "/module_004/simple/simple",
      success: function() {}
    })
  },
  gotoSimple: function(e) {
    var a = function() {
        console.warn("跳转到关怀版失败。"), wx.removeStorageSync("request_current_mode")
      },
      t = function(e) {
        wx.setStorageSync("current_mode", e), "mode_simple" === e && wx.reLaunch({
          url: "/module_004/simple/simple",
          success: function() {
            wx.setStorageSync("current_mode", "mode_simple")
          },
          fail: a
        })
      },
      n = wx.getStorageSync("current_mode");
    "mode_simple" !== e || "mode_default" !== n ? "mode_default" !== e && "mode_simple" !== e ? "mode_default" === e || "mode_simple" === e ? t(e) : a() : t(n) : this.setData({
      showToggleCurrentMode: !0
    })
  },
  go_electric_service: function() {
    h.save_redis("供电服务");
    this.go_rent_house("electric")
  },
  confirm_avatar_nickname: function() {
    console.log(this.data.avatarUrl, this.data.nick_name_editable, "头像昵称");
    if ("https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0" != this.data.avatarUrl)
      if ("" != this.data.nick_name_editable) {
        this.setData({
          avatar_nickname_box_type: !1
        });
        var e = {};
        e.nickName = this.data.nick_name_editable, e.avatarUrl = this.data.avatarUrl, e.gender = "", e.language = "", e.city = "", e.province = "", e.country = "", x.globalData.userInfo = JSON.stringify(e), x.globalData.USERINFO_post = JSON.stringify(e), console.log("用户信息 app.globalData.USERINFO_post", x.globalData.USERINFO_post);
        var a = JSON.parse(x.globalData.USERINFO_post),
          t = a.avatarUrl,
          n = a.nickName,
          o = (new Date).getTime(),
          i = o;
        if (wx.setStorageSync("avatar", t), wx.setStorageSync("nick_name", n), wx.setStorageSync("nick_name_last_date", o), wx.setStorageSync("ask_nick_name_today", i), this.setData({
            avatar: t,
            nick_name: n,
            login_tip: "我的信息",
            sho_login_flag: 1
          }), "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0" != this.data.avatarUrl) {
          var s = {
            XM: "",
            ZJHM: "",
            USERINFO: JSON.stringify(x.globalData.USERINFO_post),
            openId: x.globalData.openid,
            unionId: x.globalData.unionid
          };
          console.log("sv_016_upload_file_avatar", s), h.wx_upload_file("https://xcx.pinganbaiyun.cn/p_021_health_passport/api_004_motorcycles/sv_016_upload_file_avatar", s, this.data.avatarUrl, x.globalData.access_token)
        }
        this.go_id_card()
      } else wx.showToast({
        title: "请填写微信昵称",
        icon: "none",
        duration: 2e3
      });
    else wx.showToast({
      title: "请选择微信头像",
      icon: "none",
      duration: 2e3
    })
  },
  nicknameInput: function(e) {
    this.setData({
      nick_name_editable: e.detail.value
    })
  },
  bindblur_nickname: function(e) {
    this.setData({
      nick_name_editable: e.detail.value
    })
  },
  compareVersion: function(e, a) {
    e = e.split("."), a = a.split(".");
    for (var t = Math.max(e.length, a.length); e.length < t;) e.push("0");
    for (; a.length < t;) a.push("0");
    for (var n = 0; n < t; n++) {
      var o = parseInt(e[n]),
        i = parseInt(a[n]);
      if (o > i) return 1;
      if (o < i) return -1
    }
    return 0
  },
  onChooseAvatar: function(e) {
    var a = e.detail.avatarUrl;
    this.setData({
      avatarUrl: a
    })
  },
  can_use_editable_nick_name: function() {
    var e = wx.getSystemInfoSync().SDKVersion;
    return console.log(e, "获取基础库版本"), this.compareVersion(e, "2.21.2") >= 0
  },
  go_uva: function() {
    wx.showLoading({
      title: "加载中"
    }), wx.navigateTo({
      url: "../../../../module_004/p_002_uva/index/index"
    }), wx.hideLoading()
  },
  check_in_again: function() {
    console.log("入住失败后走平安码丨平安白云入住 check_in_again...");
    try {
      var e = wx.getStorageSync("s_001_yjm_checkin");
      if ("" != e && null != e && null != e && "[object Undefined]" != e) {
        var a = "../../../../page/rent_house/pages/form_join_rent_house/form?scene=" + JSON.parse(e).rent_house_rec_id;
        console.log("check_in_again", a), wx.removeStorageSync("s_001_yjm_checkin"), this.setData({
          isShowModel_yjm_res: !1
        }), wx.navigateTo({
          url: a
        })
      }
    } catch (e) {
      console.log("入住失败后走平安码丨平安白云入住 check_in_again", e)
    }
  },
  go_subscribe: function() {
    this.setData({
      isShowModel_yjm_res: !1,
      show_ask_send_msg: !0
    })
  },
  buttontap_send_msg: function(e) {
    var a = this;
    try {
      var t = wx.getStorageSync("s_001_yjm_checkin");
      if ("" != t && null != t && null != t && "[object Undefined]" != t) {
        var n = JSON.parse(t);
        wx.removeStorageSync("s_001_yjm_checkin");
        var o = {
          buzi_type: "yjm_check_in"
        };
        o.house_number_code = n.house_number_code, o.scene = n.rent_house_rec_id;
        var i = "../../../third_part/pages/rent_house/form?jump_to=GO_RENTER_INDEX@@@params:" + JSON.stringify(o);
        if (i = encodeURI(i), console.log("点击订阅消息之后的buttontap_send_msg jump_url", i), 0 == e.detail.index) return a.setData({
          show_ask_send_msg: !1
        }), void wx.redirectTo({
          url: i
        });
        wx.requestSubscribeMessage({
          tmplIds: ["CPmyrM7azETkz6139saJweMduYZy_8NUlNiuft0GvVQ"],
          success: function(e) {
            a.setData({
              show_ask_send_msg: !1
            }), wx.redirectTo({
              url: i
            })
          },
          fail: function(e) {
            console.log("requestSubscribeMessage fail res", e), a.setData({
              show_ask_send_msg: !1
            }), wx.redirectTo({
              url: i
            })
          }
        })
      }
    } catch (e) {
      console.log("订阅消息弹框里面的按钮 是否点击订阅 发送审批通过提醒 微信弹框 e", e)
    }
  },
  go_smallest_unit: function(a) {
    var t = "";
    t = "object" == e(a) ? a.currentTarget.dataset.index : a;
    var n = {};
    null == x.globalData.SYSTEMINFO ? (n = wx.getSystemInfoSync(), console.log("wx.getSystemInfoSync()", n)) : n = x.globalData.SYSTEMINFO;
    var o = h.compareVersion(n.SDKVersion, "2.20.1");
    console.log("diff_version 1703057417312", o);
    var i = !1;
    o >= 0 && (i = !0);
    var s = "";
    0 == t ? s = "pages/yuejuma/nav/index?lb=3" : 1 == t ? s = "pages/yuejuma/nav/index?lb=2" : 2 == t ? s = "pages/yuejuma/nav/index?lb=1" : 3 == t && (s = "pages/yuejuma/nav/index?lb=4"), console.log(t, s), 1 == i ? wx.openEmbeddedMiniProgram({
      appId: "wx6312c9a023ebb038",
      path: s,
      allowFullScreen: !0,
      extraData: {},
      envVersion: "release",
      success: function(e) {
        console.log("navigateToMiniProgram res", e)
      }
    }) : wx.navigateToMiniProgram({
      appId: "wx6312c9a023ebb038",
      path: s,
      extraData: {},
      envVersion: "release",
      success: function(e) {
        console.log("navigateToMiniProgram res", e)
      }
    })
  },
  f_004_go_welcome_to_baiyun: function() {
    wx.navigateTo({
      url: "../page_001_welcome_to_baiyun/page_001_welcome_to_baiyun"
    })
  },
  f_005_enter_go_home_by_cache: function(a) {
    var t = wx.getStorageSync("goHomeObj");
    if ("" == t || null == t || null == t) null != a && null != a && "object" == e(a) && wx.showModal({
      title: "提示",
      content: "获取状态异常(1726065699178):" + JSON.stringify(a),
      showCancel: !1
    });
    else {
      var n = "../../../../page/opendoor/opendoor_index?phone=" + t.phone + "&name=" + t.name + "&id_card=" + t.id_card + "&login_token=" + t.login_token + "&gohome_today_date=" + this.data.gohome_today_date;
      wx.navigateTo({
        url: n
      })
    }
  },
  hide_change_white_cloud_code: function() {
    this.f_004_go_welcome_to_baiyun(), h.save_redis("平安码")
  },
  f_006_upload_location_buzi: function() {
    var n = this;
    return t(a().mark((function t() {
      var o, i, s, r, c, _, l, d, u, g;
      return a().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            return i = x, null != (o = n).data.options_data && null != o.data.options_data && "face_scan" == o.data.options_data.buzi_type && o.f_007_face_scan_buzi(), s = i.globalData.location_info.accuracy, r = i.globalData.location_info.horizontalAccuracy, c = i.globalData.location_info.latitude, _ = i.globalData.location_info.longitude, l = i.globalData.location_info.speed, d = i.globalData.location_info.verticalAccuracy, u = {
              openId: x.globalData.openid,
              accuracy: s,
              horizontalAccuracy: r,
              latitude: c,
              longitude: _,
              speed: l,
              verticalAccuracy: d
            }, "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log", wx.request({
              url: "https://xcx.pinganbaiyun.cn/mini_program/api_01/location_log",
              method: "POST",
              dataType: "json",
              data: u,
              success: function(e) {},
              fail: function(e) {}
            }), g = "Android", a.prev = 11, a.next = 14, wx.getRendererUserAgent().then((function(e) {
              -1 != e.indexOf("iPhone") && (g = "iOS")
            }));
          case 14:
            a.next = 19;
            break;
          case 16:
            a.prev = 16, a.t0 = a.catch(11), console.log("getRendererUserAgent e", a.t0);
          case 19:
            console.log("mobile_phone_OS 001", g), "Android" == g && wx.startWifi({
              success: function(a) {
                console.log("startWifi", a.errMsg), wx.getWifiList({
                  success: function(e) {
                    console.log("getWifiList success 001", e), wx.onGetWifiList((function(e) {
                      console.log("onGetWifiList 001", e);
                      for (var a = wx.getStorageSync("wifi_list_storage"), t = [], n = {}, o = 0; o < e.wifiList.length; o++)
                        if ("" != e.wifiList[o].SSID && null != e.wifiList[o].SSID && null != e.wifiList[o].SSID && "" != e.wifiList[o].BSSID && null != e.wifiList[o].BSSID && null != e.wifiList[o].BSSID) {
                          var s = !1;
                          if (Array.isArray(a))
                            for (var r = 0; r < a.length; r++)
                              if (e.wifiList[o].SSID == a[r].SSID) {
                                s = !0;
                                break
                              } 0 == s && t.push(e.wifiList[o])
                        } if (t.length > 0 && (a = Array.isArray(a) ? a.concat(t) : t, wx.setStorageSync("wifi_list_storage", a)), console.log("new_wifi_arr", t), n.wifiList = t, 0 != n.wifiList.length) {
                        var c = {
                          openId: x.globalData.openid,
                          location_info: i.globalData.location_info,
                          wifi: n,
                          buzi_type: "wx.onGetWifiList"
                        };
                        wx.request({
                          url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_004_motorcycles/sv_029_upload_wifi",
                          method: "POST",
                          dataType: "json",
                          data: c,
                          success: function(e) {},
                          fail: function(e) {}
                        })
                      }
                    }))
                  },
                  fail: function(e) {
                    console.log("getWifiList fail 001", e)
                  }
                }), wx.onWifiConnected((function(a) {
                  console.log("onWifiConnected", a);
                  var t = wx.getStorageSync("wifi_connected_storage");
                  if (console.log("wifi_connected_storage", a.wifi.SSID, e(t), t), "object" != e(t) || !t.hasOwnProperty("wifi") || (console.log("wifi_connected_storage.wifi.SSID", t.wifi.SSID, a.wifi.SSID), t.wifi.SSID != a.wifi.SSID)) {
                    wx.setStorageSync("wifi_connected_storage", a);
                    var n = {
                      openId: x.globalData.openid,
                      location_info: i.globalData.location_info,
                      wifi: a,
                      buzi_type: "wx.onWifiConnected"
                    };
                    wx.request({
                      url: "https://xcx.pinganbaiyun.cn/p_021_health_passport/api_004_motorcycles/sv_029_upload_wifi",
                      method: "POST",
                      dataType: "json",
                      data: n,
                      success: function(e) {},
                      fail: function(e) {}
                    })
                  }
                }))
              }
            });
          case 21:
          case "end":
            return a.stop()
        }
      }), t, null, [
        [11, 16]
      ])
    })))()
  },
  f_007_face_scan_buzi: function() {
    var e = this;
    return t(a().mark((function t() {
      var n, o, i, s, r, c, _, l;
      return a().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (n = e, o = !1, null != x.globalData.location_info && null != x.globalData.location_info.latitude && null != x.globalData.location_info.latitude && "" != x.globalData.location_info.latitude && (o = !0), 0 != o) {
              a.next = 6;
              break
            }
            return wx.showModal({
              title: "提示",
              content: "刷脸认证需要您打开定位.请稍后再试",
              showCancel: !1,
              success: function(e) {
                n.f_007_face_scan_buzi()
              }
            }), a.abrupt("return");
          case 6:
            return a.prev = 6, wx.showLoading({
              title: "请稍等...",
              mask: !0
            }), i = {
              buzi_type: n.data.options_data.buzi_type,
              encry_id: n.data.options_data.encry_id,
              openId: x.globalData.openid
            }, "https://xcx.pinganbaiyun.cn/mini_program/api_01/get_login_state_xcx", a.next = 12, h.wx_request("https://xcx.pinganbaiyun.cn/mini_program/api_01/get_login_state_xcx", i);
          case 12:
            if (s = a.sent, wx.hideLoading(), "1756892998912" != s.data[0].resp_code) {
              a.next = 26;
              break
            }
            return s.data[0].login_ip, s.data[0].business_sys_client_login_date, r = s.data[0].business_sys_id, c = s.data[0].msg_output, _ = s.data[0].title_output, s.data[0].update_url, l = s.data[0].state_enc, wx.showModal({
              title: _,
              content: c,
              showCancel: !0,
              success: function(e) {
                if (1 == e.confirm) {
                  x.globalData.state_enc = l;
                  var a = "../../../component/pages/camera_plugin_barcode/form?buzi_type=" + r;
                  wx.navigateTo({
                    url: a
                  })
                }
              }
            }), a.abrupt("return");
          case 26:
            wx.showModal({
              title: "提示",
              content: s.data[0].resp_msg + "(" + s.data[0].resp_code + ")",
              showCancel: !1,
              success: function(e) {}
            });
          case 27:
            a.next = 35;
            break;
          case 29:
            return a.prev = 29, a.t0 = a.catch(6), wx.hideLoading(), console.log("1757074345749 e:", a.t0), wx.showModal({
              title: "提示",
              content: "" + JSON.stringify(a.t0),
              showCancel: !1,
              success: function(e) {}
            }), a.abrupt("return");
          case 35:
          case "end":
            return a.stop()
        }
      }), t, null, [
        [6, 29]
      ])
    })))()
  }
});