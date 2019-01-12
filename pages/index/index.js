// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    //判断是否授权过
    if (app.globalData.userInfo){
      //console.log("已经授权");
      //跳转到tabbar页面
      wx.switchTab({
        url: '/pages/home/home',
      })
    }
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
   * 用户授权
   */
  getuserinfo: function (e) {
    //console.log("===用户授权===");
    //console.log(e);
    //点击确定
    if (e.detail.errMsg === "getUserInfo:ok"){
      //console.log("允许授权");
      var user = e.detail.userInfo;
      //点击开始使用将获取的用户数据保存到数据库中

      //用户名
      var nickName=user.nickName;
      //用户性别
      var gender= user.gender==1?'男':'女';
      //用户头像
      var avatarUrl=user.avatarUrl;
      var params={};
      params.userName = nickName;
      params.headshot = avatarUrl;
      params.gender = gender;
      //console.log(params);
      //跳转到tabbar页面
      wx.request({
        url: 'http://localhost:8080/addUser',
        data: params,
        method:'POST',
        dataType:'json',
        success:function(e){
          //跳转tabbar页面
          wx.switchTab({
            url: '/pages/home/home',
          })
        }
      })

    } else {  //点击拒绝
      //console.log("拒绝授权");
      //跳转拒绝授权页面
      wx.reLaunch({
        url: '/pages/reindex/reindex',
      })
    }
  }
})