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
    var that = this;
    //判断是否授权
    if (e.detail.errMsg==='getUserInfo:ok'){
      console.log("允许授权");
      //获取code
      wx.login({
        success:function(e){
          if(e.code){
            wx.request({
              url: 'http://localhost:8080/authorizationUser',
              method:'POST',
              data:{
                code: e.code
              },
              dataType:'json',
              success: function (res) {
                //console.log(res.data.openid);
                //授权成功
                wx.getUserInfo({
                  success:function(ress){
                    //用户名
                    var username = ress.userInfo.nickName;
                    //用户性别
                    var gender = ress.userInfo.gender;
                    //openid
                    var openid = res.data.openid;
                    console.log(username);
                    console.log(gender);
                    console.log(openid);
                    //插入数据
                    
                  }
                })
              }
            })
          }else{
            console.log("授权失败,稍后请重新授权");
            wx.reLaunch({
              url: '/pages/reindex/reindex'
            })
          }
        } 
      })
    }else{
      console.log("取消授权");
      //跳转到重新授权页面
      wx.reLaunch({
        url: '/pages/reindex/reindex'
      })
    }
  }
})