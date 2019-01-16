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
      url: 'http://localhost:8080/queryItemById',
      data:{id:options.id},
      dataType:"json",
      success:function(e){
        //console.log(e);
        that.setData({
          result: e.data
        });
        //在判断是否被收藏过
        var itemid = options.id;
        var userid = e.data.user.id;
        wx.request({
          url: 'http://localhost:8080/queryCollectionByUserIdAndItemId',
          method:'post',
          data:{
            itemid: itemid,
            userid: userid
          },
          dataType:'json',
          success:function(result){
            //console.log(result);
            if (result.data.length>0){
              //已经被我收藏
              that.setData({
                coll_flag:true
              });
            }else{
              //没有被我收藏
              that.setData({
                coll_flag: false
              });
            }
          }
        })
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
  collectiontap:function(e){
    var that = this;
    //用户ID
    var userid = e.currentTarget.dataset.userid;
    //项目ID
    var itemid = e.currentTarget.dataset.itemid;
    //console.log(that.data.coll_flag);
    if (that.data.coll_flag==false){
      //调用收藏接口
      wx.request({
        url: 'http://localhost:8080/addCollection',
        method:'POST',
        data:{
          userid: userid,
          itemid: itemid
        },
        dataType:'json',
        success:function(res){
          //console.log(res.data);
          if(res.data=='ok'){
              that.setData({
                coll_flag: !that.data.coll_flag
              });
          }
        }
      })
    }else{
      //调用删除收藏接口
      wx.request({
        url: 'http://localhost:8080/deleteCollectionByUserIdAndItemId',
        method:'POST',
        data:{
          userid: userid,
          itemid: itemid
        },
        dataType:'json',
        success:function(result){
          //console.log(result);
          if (result.data == 'ok') {
            that.setData({
              coll_flag: !that.data.coll_flag
            });
          }
        }
      })
    }
  }
})