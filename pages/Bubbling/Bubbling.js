// pages/Bubbling/Bubbling.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numbonw:0
  },
  handle:function(){
    this.setData({
      numbonw: this.data.numbonw+1
    })
    console.log(11111)
  },
  one:function(){
    console.log("one")
  },
  two:function(){
    console.log("two")
  },
  three:function(){
    console.log("three")
  },
  onel: function () {
    console.log("onel")
  },
  twol: function () {
    console.log("twol")
  },
  threel: function () {
    console.log("threel")
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