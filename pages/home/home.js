// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
    console.log("11123213")
    wx.request({
      url: 'https://data.xinxueshuo.cn/nsi-1.0/manager/communityUser/panel_list', //仅为示例，并非真实的接口地址
      data: {
       
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
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
    return {
      title: "开发版 李国龙", //转发显示标题
      path: "pages/home/home", //转发当前的页面
      imageUrl: "https://img03.sogoucdn.com/app/a/100520093/6270c5456a002579-393298cca4ae5d06-cf2f095a923820e092f2d2a94561598e.jpg"  //转发显示的图片
    }
  }
})