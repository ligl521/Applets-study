// pages/control/control.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['adawad','adada'],
    aa:"李国龙 李国龙"
  },
  //接受子组件发送的数据
  btnadd:function(event){
    console.log("------",event)
  },
  // js 详情返回
  backbtn(){
    wx.navigateBack({
      delta:1 //跳转层级
    })
  },
  //点击＋10的事件
  handleAdd:function(){
      1.//获取组件对象
      let my_add = this.selectComponent(".addbtn")
      
      //2.重新赋值
      // my_add.setData({
      //   numadd: my_add.data.numadd+10
      // })

      //3.通过方法对数据修改
      my_add.incrementCounter(10)

  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //取值
    console.log(options)
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
    //1.获取首页的页面对象
    //getCurrenPages当前所有栈的页面
    const pages = getCurrentPages();
    //获取第一个目标对象
    const home = pages[pages.length-2];
    //调用setData页面对象
    home.setData({
      title:"two"
    })
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