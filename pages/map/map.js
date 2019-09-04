Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: null,
    longitude: null,
    markers: [{
      id: 1,
      latitude: null,
      longitude: null,
      name: 'T.I.T 创意园'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var markers_new = [];
    markers_new.push({
      id: 1,
      latitude: options.longitude,
      longitude: options.latitude
    });
    this.setData({
      longitude: options.latitude,
      latitude: options.longitude,
      markers: markers_new 
    });
    
  },

  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res);
        this.setData({
          longitude: res.latitude,
          latitude: res.longitude
        })
        this.moveToLocation();
        console.log(res.latitude);
        console.log(res.longitude);
        
      }
    })
  },

  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
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
    
  }
})