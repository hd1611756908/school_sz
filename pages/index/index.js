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
    //console.log(app.globalData.userInfo);
    //判断是否授权过
    if (app.globalData.userInfo){
      console.log("已经授权");
      // wx.switchTab({
      //   url: '/pages/home/home',
      // })
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
      //console.log("允许授权");
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
                //授权成功
                wx.getUserInfo({
                  success:function(ress){
                    //用户头像
                    //console.log(ress);
                    var avatarUrl = ress.userInfo.avatarUrl;
                    app.globalData.avatarUrl = avatarUrl;
                    //用户名
                    var username = ress.userInfo.nickName;
                    //用户性别
                    var gender = ress.userInfo.gender;
                    //openid
                    var openid = res.data.openid;
                    app.globalData.openid=openid;
                    //console.log(app.globalData);
                    //判断曾经是否授权过，查询数据库使用openid
                    wx.request({
                      url: 'http://localhost:8080/checkUserLogin',
                      method:'post',
                      data: {"openid":openid},
                      dataType:'json',
                      success:function(result){
                        //如果返回true授权过直接跳转页面，如果false第一次授权，向数据库中插入用户
                        if(result.data){
                          console.log("授权过");
                          //已经授权跳转首页tabbar页面
                          wx.switchTab({
                            url: '/pages/home/home',
                          })
                        }else{
                          //第一次授权，向数据库中插入数据，然后跳转首页
                          console.log("第一次授权");
                          wx.request({
                            url: 'http://localhost:8080/addUser',
                            method:"post",
                            data:{
                              "openid":openid,
                              "name":username,
                              "gender": gender
                            },
                            dataType:"json",
                            success:function(resu){
                              //console.log(resu);
                              if(resu.data=='ok'){
                                //console.log("插入用户成功");
                                wx.switchTab({
                                  url: '/pages/home/home',
                                })
                              }else{
                                console.log("插入失败重新授权");
                                wx.reLaunch({
                                  url: '/pages/reindex/reindex'
                                })
                              }
                            }
                          })
                        }
                      }
                    })
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