// pages/mylist/mylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: [
      {
        id: 1001,
        imgsrc: '/pages/imgs/item.jpg',
        title: '学府路理工大学图书馆丢失华为手机一部',
        category: '手机',
        time: '2019-01-12',
        address: '哈尔滨市-南岗区',
        detail: '本人在2019年1月12日晚在哈尔滨理工大学图书馆自习之后，将一部华为手机落在了图书馆的自习室桌面上，若有拾到的同学请联系我 QQ1611756998或者微信 18746092678'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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