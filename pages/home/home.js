// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "DataList": [
      // { phone: false, num:"liskjksdjfklsdfjsdlkfj"},
      // { phone: false, num:"kdjfkldjfklsdjfkldsjfklsd"},
      // { phone: false, num:"fjks会计师的花费金额非加快速度djfksdjflksdfsdfsxzc"},
      // { phone: false, num:"fjksdjfksdjflksdfsdfsxzc"},
      // { phone: false, num:"fjksdjfksdjflksdfsdfsxzc"},
      // { phone: false, num:"fjksdjfksdjflksdfsdfsxzc"},
      // { phone: false, num:"fjksdjfksdjflksdfsdfsxzc"}
    ],
    "boxCheckedTotal": false,
    "boxChecked": false,
    "boxCheckbox": 1,
    "listArr":[],
    "checkNum":0,
    "checkArr":[],
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
      // 多选框全部选中
      for (var i = 0; i < this.data.DataList.length; i++){
        that.data.listArr.push(this.data.DataList[i])
        var mtext = "DataList[" + i + "].phone"
        this.setData({
          [mtext]: true,
          checkNum:0
        })
      }
      // 赋值id
      this.setData({checkArr:[]});
      for(var i=0;i<that.data.DataList.length;i++){
        console.log(that.data.DataList[i])
        if(that.data.DataList[i].phone == true){
          this.setData({
            checkNum:this.data.checkNum+1
          })
          this.data.checkArr.push(that.data.DataList[i].num) 
          console.log(this.data.checkArr)
        }
      }
    }else{
      that.setData({ boxChecked: false });
      for (var i = 0; i < this.data.DataList.length; i++) {
        console.log(i)
        var mtext = "DataList[" + i + "].phone"
        that.setData({
          [mtext]: false,
        })
      }
    }
  },
  //单个选
  checkboxChangeChild:function(e){
  
    var that = this;
    // console.log(e.target)
    if (e.detail.value[0] == undefined){
      // console.log(e.target.dataset.index)
      var Ranking = 'DataList[' + e.target.dataset.index + '].phone';
      that.setData({
        [Ranking]: false,
        boxCheckedTotal:false,
        checkNum:this.data.checkNum-1
      })
    }else{

      console.log(e)
      var Ranking = 'DataList['+ e.detail.value[0] + '].phone';
      this.setData({
        [Ranking]:true,
        checkNum:0,
        checkArr:[]
      })
      for(var i=0;i<that.data.DataList.length;i++){
        if(that.data.DataList[i].phone == true){
          this.setData({
            checkNum:this.data.checkNum+1
          })
          this.data.checkArr.push(that.data.DataList[i].num) 
          console.log(this.data.checkArr)
          if(this.data.checkNum == that.data.DataList.length){
            that.setData({
              boxCheckedTotal:true
            })
          }
        }
      }
      
      
    }
    // console.log(this.data.DataList)
    // console.log(e.detail.value[0])

  },

  //123按钮
  btn:function(){
    console.log(this.data.DataList)
  },
  //跳转详情
  btnUpDetalis:function(e){
    console.log(e.currentTarget)
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    wx:wx.navigateTo({
      url:"/pages/details/details?id=" + id,
    });

    wx.setStorage({
      key: "key",
      data: e.currentTarget.dataset.index
    })
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
          DataList: res.data.data.list
        })
        console.log(res.data.data.list)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      // url:"www.baidu.com",
      url: 'https://data.xinxueshuo.cn/nsi-1.0/manager/postItem/list.do?pageNum=1&pageSize=10&isCheck=0&title=', 
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          DataList: res.data.data.list
        })
        console.log(res.data.data.list)
      }
    })
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