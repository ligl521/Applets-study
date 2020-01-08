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
    "pageSize":15,
    "pageNum":1,
    "homeTotal":"",
    "isRefresh":true
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
          this.data.checkArr.push(that.data.DataList[i].itemId) 
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
        checkNum:this.data.checkNum-1,
        checkArr: []
      })
      // 循环取值id
      for (var i = 0; i < that.data.DataList.length; i++) {
        if (that.data.DataList[i].phone == true) {
          this.data.checkArr.push(that.data.DataList[i].itemId)
          console.log(this.data.checkArr)
        }
      }
    }else{
      var Ranking = 'DataList['+ e.detail.value[0] + '].phone';
      this.setData({
        [Ranking]:true,
        checkNum:0,
        checkArr:[]
      })
      // 循环取值id
      for(var i=0;i<that.data.DataList.length;i++){
        if(that.data.DataList[i].phone == true){
          this.setData({
            checkNum:this.data.checkNum+1
          })
          this.data.checkArr.push(that.data.DataList[i].itemId) 
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
  // 数据加载
  getData:function(){
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    console.log(that.data.pageNum)
    wx.request({
      // url:"www.baidu.com",
      url: 'https://data.xinxueshuo.cn/nsi-1.0/manager/postItem/list.do?pageNum=1&pageSize=10&isCheck=0&title=', 
      data: {
        pageSize: that.data.pageSize,
        pageNum: that.data.pageNum,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        //全部条数
        that.data.homeTotal = res.data.data.total;
        // 取消loding
        wx.hideLoading();
        if (that.data.isRefresh){
          // 获取pagenum++ 数据重新渲染
          var DataListTwo = res.data.data.list;
          console.log(DataListTwo)
          for (var i = 0; i < DataListTwo.length;i++){
            that.data.DataList.push(DataListTwo[i]);
          }
          console.log(that.data.DataList)
        }
        that.setData({
          DataList: that.data.DataList
        })
      }
    })
    
  },
  //123按钮
  btn:function(){
    console.log(this.data.checkArr)
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
  // 批量拒绝
  refuse:function(){
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定拒绝通过吗',
      success(res) {
        if (res.confirm) {
          // 通过操作
          wx.request({
            // url:"www.baidu.com",
            url: 'http://192.168.0.102:8080/nsi-1.0/manager/postItem/verify_failed.do',
            data: {
              itemId: that.data.checkArr
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'  // 默认值
            },
            method: "post",
            // 成功返回
            success(res) {
              wx.showToast({
                title: '审核已拒绝',
                icon: 'success',
                duration: 1000
              })
             
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 批量通过
  adopt:function(){
    var that = this;
    if(that.data.checkArr.length == 0){
      console.log(that.data.checkArr.length == 0)
    }else{
      console.log(that.data.checkArr)
      // wx.showModal({
      //   title: '提示',
      //   content: '确定通过审核吗',
      //   success(res) {
      //     if (res.confirm) {
      //       // 通过操作
      //       wx.request({
      //         // url:"www.baidu.com",
      //         url: 'http://192.168.0.102:8080/nsi-1.0/manager/postItem/verify_success.do',
      //         data: {
      //           itemId: that.data.checkArr
      //         },
      //         header: {
      //           'content-type': 'application/x-www-form-urlencoded;charset=utf-8'  // 默认值
      //         },
      //         method: "post",
      //         // 成功返回
      //         success(res) {
      //           wx.showToast({
      //             title: '审核已通过',
      //             icon: 'success',
      //             duration: 1000
      //           })
      //           this.getData();
      //         }
      //       }) 
      //     } else if (res.cancel) {
      //       console.log('用户点击取消')
      //     }
      //   }
      // })
    }

  },






  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getData();
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
    var that = this;
    wx.stopPullDownRefresh();
    this.data.isRefresh = false;
    that.getData();
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    if(that.data.pageNum <= Math.ceil(that.data.homeTotal/15)){
      that.data.pageNum = that.data.pageNum+1;
      console.log(that.data.pageNum);
      that.getData();
    }else{
      wx.showToast({
        title: '加载完毕',
        icon: 'success',
        duration: 1000
      })

    }
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