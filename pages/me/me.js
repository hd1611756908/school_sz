// pages/me/me.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid: 0,
    gender: '男',
    username: '枫叶',              avatarUrl:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJcpl3Z0ZC7l9UK9MelCb56TyPmwJthFIo1DRkyyhTf60fVc1UKQyGYUZrHme8oyZ1PoDvdRibHnUA/132'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    
    //用户头像
    var avatarUrl = app.globalData.avatarUrl;
    //console.log(avatarUrl);
    _this.setData({
      avatarUrl: avatarUrl
    });
    //用户openid
    var openid = app.globalData.openid;
    //查询用户信息
    wx.request({
      url: 'http://localhost:8080/queryUserByOpenid',
      method:'post',
      data: { "openid": openid},
      dataType:"json",
      success:function(res){
        //console.log(res.data);
        var gender = res.data.gender==1?'男':'女';
        var name = res.data.name;
        var userid = res.data.id;
        _this.setData({
          userid: userid,
          gender: gender,
          username:name
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
   * 我的启示列表
   */
  mylist:function(e){
    var userid = e.currentTarget.dataset.userid;
    wx.navigateTo({
      url: '/pages/mylist/mylist?useris='+userid
    });
  },
  /**
   * 我的收藏
   */
  mycollection:function(e){
    var userid = e.currentTarget.dataset.userid;
    wx.navigateTo({
      url: '/pages/mycollection/mycollection?useris=' + userid
    })
  }
})