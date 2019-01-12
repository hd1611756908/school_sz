//app.js
App({
  onLaunch: function () {
    var that = this;
    //判断是否授权,如果授权获取用户信息置位
    wx.getSetting({
      success(res){
        if (res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success(e){
              //console.log(e);
              that.globalData.userInfo=e
            }
          })
        }
      }
    });
  },
  globalData: {
    userInfo:null
  }
})