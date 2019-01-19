// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:0,
    sysheight:0,
    result:{
    },
    pageNo:1,
    pageSize:6
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
    var r = {
      pageSize: that.data.pageSize,
      pageNo: 1
    };
    wx.request({
      url: 'http://localhost:8080/queryItemList',
      method: 'GET',
      data:r,
      dataType: 'json',
      success: function (res) {
        console.log(res.data);
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
    var r = {
      pageSize: that.data.pageSize,
      pageNo:1
    };
    wx.request({
      url: 'http://localhost:8080/queryItemList',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        that.setData({
          result: res.data
        });
      }
    })
    wx.stopPullDownRefresh()
  },
  bindscrolltolower:function(e){
    var that = this;
    //加载下一页
    var pageNo = this.data.pageNo+1;
    console.log(pageNo);
    that.setData({
      pageNo:pageNo
    });
    //请求后台
    var r = {
      pageSize: 6,
      pageNo: pageNo
    };
    wx.request({
      url: 'http://localhost:8080/queryItemList',
      method: 'get',
      data: r,
      dataType: 'json',
      success: function (res) {
        console.log(res.data);
        that.setData({
          result: res.data
        });
      }
    })
  }
})