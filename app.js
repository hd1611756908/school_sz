//app.js
App({
  onLaunch: function () {
    var that = this;
    //判断是否授权,如果授权获取用户信息置位
    wx.getSetting({
      success(res){
        that.globalData.userInfo =true;
      }
    });
  },
  globalData: {
    userInfo:null,
  }
})