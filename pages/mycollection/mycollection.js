// pages/mycollection/mycollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: [
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.useris);
    wx.request({
      url: 'http://localhost:8080/queryCollectionByUserId',
      method:'POST',
      data:{
        userid: options.useris
      },
      dataType:"json",
      success:function(res){
        console.log(res.data);
        that.setData({
          result: res.data
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
   * 获取详情
   */
  querydetail: function (e) {
    //跳转到详情页面
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id,
    })
  }
})