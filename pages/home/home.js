// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:0,
    sysheight:0,
    result:{
      xw:[
        {
          id:1001,
          primaryImg:'/pages/imgs/item.jpg',
          title:'学府路理工大学图书馆丢失华为手机一部',
          category:'手机',
          loseDate:'2019-01-12',
          region:'哈尔滨市-南岗区',
          detailDesc:'本人在2019年1月12日晚在哈尔滨理工大学图书馆自习之后，将一部华为手机落在了图书馆的自习室桌面上，若有拾到的同学请联系我 QQ1611756998或者微信 18746092678'
        }
      ],
      xr:[
        {
          id: 1002,
          primaryImg: '/pages/imgs/ren.png',
          title: '学府路黑龙江大学学府夜市走失一个美丽漂亮的小萝莉',
          category: '女人',
          time: '2019-01-12',
          address: '哈尔滨市-南岗区',
          detail: '本人的家人在2019-01-01号在黑龙江大学附近夜市逛街时不慎与家人走失,上身穿蓝色短袖，下身穿藏蓝色运动裤，头发金黄色，如果有看见的朋友请及时请联系我必有重谢, QQ1611756998或者微信 18746092678'
        }
      ],
      xc:[
        {
          id: 1003,
          primaryImg: '/pages/imgs/gou.png',
          title: '本人的拉布拉多狗狗在博物馆逛街时走失',
          category: '宠物',
          time: '2019-01-12',
          address: '哈尔滨市-南岗区',
          detail: '本人的宠物拉布拉多在2019年1月1日在博物馆逛街时由于外部因素冲撞造成狗狗受惊走失，如果有看见的朋友请及时请联系我必有重谢, QQ1611756998或者微信 18746092678'
        }
      ],
      sz:[
        {
          id: 1004,
          primaryImg: '/pages/imgs/bao.png',
          title: '本人在2019年1月1日在哈尔滨工业大学图书馆捡到钱包一个',
          category: '包',
          loseDate: '2019-01-12',
          region: '哈尔滨市-南岗区',
          detailDesc: '本人在2019年1月1日下午在哈尔滨工业大学图书馆自习室捡到黑色女士皮包一个,里面有现金若干,身份证,银行卡若干,如果失主看见此条消息可以联系我活着图书管管理员, QQ1611756998或者微信 18746092678'
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取系统有效高度
    var that=this;
    wx.getSystemInfo({
      success: function(e) {
        that.setData({
          sysheight: e.windowHeight-47
        });
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var r = {};
    wx.request({
      url: 'http://localhost:8080/queryItemList',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        console.log(res);
        that.setData({
          result: res.data
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 点击选项卡事件
   */
  bindTap:function(e){
    this.setData({
      status: e.currentTarget.dataset.status
    });
  },
  /**
   * 滑动事件
   */
  bindchange:function(e){
    this.setData({
      status: e.detail.current
    });
  },
  /**
   * 获取详情
   */
  querydetail:function(e){
    //跳转到详情页面
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id,
    })
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh:function() {
    
    var that = this;
    var r = {};
    wx.request({
      url: 'http://localhost:8080/queryQsInfoList',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        that.setData({
          result: res.data
        });
      }
    })
    wx.stopPullDownRefresh()
  }
})