Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectarray:[],
    index:0,
    date:'2019-01-01',
    region:['北京市','北京市','昌平区'],
    primaryimg:'',
    detailimgs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this;
      wx.request({
        url: 'http://localhost:8080/queryCategorys',
        method:'get',
        dataType:'json',
        success:function(e){
          that.setData({
            selectarray: e.data
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
    var that=this;
    //标题
    var title = e.detail.value.title;
    //启事类型id
    var selectId = this.data.selectarray[this.data.index].categoryId;
    //失物类别
    var loseCategory = e.detail.value.category;
    //发布人
    var publishUser = e.detail.value.publishuser;
    //丢失时间
    var loseDate=this.data.date;
    //省市区
    var region=this.data.region;
    //具体地点
    var addressDetail = e.detail.value.address;
    //详情描述
    var detailDesc = e.detail.value.detailaddress;
    //主图
    var primaryimg = this.data.primaryimg;
    //详情图
    var detailimgs=this.data.detailimgs;

    var parmas={};
    parmas.title = title;
    parmas.selectId = selectId;
    parmas.loseCategory = loseCategory;
    parmas.publishUser = publishUser;
    parmas.loseDate = loseDate;
    parmas.region = region;
    parmas.addressDetail = addressDetail;
    parmas.detailDesc = detailDesc;
    parmas.primaryimg = primaryimg;
    parmas.detailimgs = detailimgs;

    wx.request({
      url: 'http://localhost:8080/addQsInfo',
      method:'POST',
      data:parmas,
      dataType:'json',
      success:function(e){
        console.log(e);
        //跳转首页 tabbar页面
        wx.switchTab({
          url: '/pages/home/home',
        })
      }

    })


  },
  /**
   * 表单重置
   */
  bindreset:function(){
    console.log("表单重置");
    //失物类型置0
    this.setData({
      index: 0,
      date: '2019-01-01',
      region: ['北京市', '北京市', '昌平区'],
      primaryimg: '',
      detailimgs: []
    });
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
    this.setData({
      region: e.detail.value
    });
  },
  /**
   * 选择主图
   */
  chooseImagePrimary:function(){
    var that=this;
    //调用选择图片微信API
    wx.chooseImage({
      count: 1,
      success: function(e) {
        // 显示进度
        wx.showToast({
          title: '上传中',
          icon: 'loading',
          duration: 2000
        });
        //获取选择到的图片
        that.setData({
          primaryimg: e.tempFilePaths[0]
        });
      },
    });
    
  },
  /**
   * 选择详情图
   */
  chooseImageDetail:function(){
    var that = this;
    var deimgs = that.data.detailimgs;
    wx.chooseImage({
      count: 2,
      success: function (e) {
        // 显示进度
        wx.showToast({
          title: '上传中',
          icon: 'loading',
          duration: 2000
        });
        // 前端展示
        that.setData({
          detailimgs: e.tempFilePaths
        });
      }
    })
  },
  /**
   * 删除主图
   */
  deleteprimary:function(e){
    var that=this;
    // 删除提示
    wx.showModal({
      title: '删除图片',
      content: '是否删除?',
      success:function(res){
        if(res.confirm){
          that.setData({
            primaryimg: ''
          });
        }
      }
    })
  },
  /**
   * 删除详情图
   */
  deletedetail:function(e){
    var that = this;
    // 删除提示
    wx.showModal({
      title: '删除图片',
      content: '是否删除?',
      success: function (res) {
        if (res.confirm) {
          //获取要删除图片的数组下标
          var index = e.currentTarget.dataset.idx;
          
          //被删除的数组
          var detailimgs = that.data.detailimgs;
          
          detailimgs.splice(index,1);
          
          that.setData({
            detailimgs: detailimgs
          });
        }
      }
    })
  }


})