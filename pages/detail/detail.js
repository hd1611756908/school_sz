// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: {

    },
    coll_flag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //console.log(options);
    //根据ID查询详情
    wx.request({
      url: 'http://localhost:8080/queryQsInfoById',
      data:{id:options.id},
      dataType:"json",
      success:function(e){
        
        that.setData({
          result: e.data
        });
        
      }
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
   * 收藏
   */
  collectiontap:function(){
    this.setData({
      coll_flag: !this.data.coll_flag
    });
  }
})