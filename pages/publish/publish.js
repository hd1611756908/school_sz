// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectarray:[
      {
        id: 2001,
        name: '寻物启事'
      }, {
        id: 2002,
        name: '寻人启事'
      }, {
        id: 2003,
        name: '寻宠启事'
      }, {
        id: 2004,
        name: '失物招领'
      }
    ],
    index:0,
    date:'2019-01-01',
    region:['北京市','北京市','昌平区'],
    customItem:'全部'
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
   * 下拉列表
   */
  selectchange:function(e){
    this.setData({
      index: e.detail.value
    });
  },
  /**
   * 表单提交
   */
  bindsubmit:function(e){
    console.log("表单提交");
  },
  /**
   * 表单重置
   */
  bindreset:function(e){
    console.log("表单重置");
  },
  /**
   * 丢失时间设置
   */
  changetime:function(e){
    this.setData({
      date: e.detail.value
    });
  },
  /**
   * 省市区选择
   */
  changeregion:function(e){
    console.log(e);
    this.setData({
      region: e.detail.value
    });
  }
})