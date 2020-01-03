// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "DataList": [
      { phone: false, num:1},
      { phone: false, num: 1},
      { phone: false, num: 1},
      { phone: false, num: 1},
      { phone: false, num: 1},
      { phone: false, num: 1},
      { phone: false, num: 1}
    ],
    "boxCheckedTotal": false,
    "boxChecked": false,
    "boxCheckbox": 1,
    "listArr":[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 全选
  checkboxChange: function (e) {
    var that = this;
    console.log( e.detail.value[0])
    if (e.detail.value[0]){
      console.log(this.data.DataList[2].phone = true)
      for (var i = 0; i < this.data.DataList.length; i++){
        that.data.listArr.push(this.data.DataList[i])
        var mtext = "DataList[" + i + "].phone"
        this.setData({
          [mtext]: 'true'
        })
       
      }
      console.log(that.data.DataList)
    }else{
      that.setData({ boxChecked: false });
      for (var i = 0; i < this.data.DataList.length; i++) {
        console.log(i)
        var mtext = "DataList[" + i + "].phone"
        that.setData({
          [mtext]: false
        })
      }
    }
  },

  //单个选
  checkboxChangeChild:function(e){
  
    var that = this;
    console.log(e.target)
    if (e.detail.value[0] == undefined){
      console.log(e.target.dataset.index)
      var Ranking = 'DataList[' + e.detail.value[0] + '].phone';
      that.setData({
        // [Ranking]: false,
        // boxCheckedTotal:false,

      })
    }else{
      console.log(this.data.DataList[e.detail.value[0]].phone)
      var Ranking = 'DataList['+ e.detail.value[0] + '].phone';
      this.setData({
        [Ranking]:true
      })
      
      
    }
    console.log(this.data.DataList)
    console.log(e.detail.value[0])

  },

  //123按钮
  btn:function(){
    console.log(this.data.DataList)
  },









  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    console.log("11123213")
    wx.request({
      // url:"www.baidu.com",
      url: 'https://data.xinxueshuo.cn/nsi-1.0/manager/postItem/list.do?pageNum=1&pageSize=10&isCheck=0&title=', //仅为示例，并非真实的接口地址
      data: {
       
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          // DataList: res.data.data.list
        })
        console.log(res.data.data.list)
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