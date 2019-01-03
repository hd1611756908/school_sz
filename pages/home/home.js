// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:0,
    sysheight:0
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
  }
})