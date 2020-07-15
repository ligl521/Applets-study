// pages/one/one.js
import request from "../../service/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[],
    title:"one",
    condition:false,
    pageNum:1,//学校数据第几张页面
  },
  // js代码展示
  detailbtn(){
    wx:wx.navigateTo({
      url: '/pages/control/control'
    })  
  },
  //展示弹框
  handeleshowToast(){
    wx.showToast({
      title:"成功",//显示文字
      icon:"loading", //图标  默认成功
      duration:2000, //延时时间
      image:"../../one.img", //自定义图标
      mask:true, //遮罩层
      success:function(){  //失败回调
        console.log("成功回调")
      },
      fail:function(){  //失败回调
        console.log("失败的回调")
      },
      complete:function(){ //完成时调用
        console.log("完成函数的调用")
      }
    })
    console.log("======")
  },
  //确定取消按钮
  handeleshowModal(){
    wx.showModal({
      title: '确定取消按钮', //标题
      content: '我是内容',  //内容
      showCancel:true, //取消按钮是否显示 false不显示
      cancelText:"退出", //修改取消按钮显示文字
      success:function(res){  //成功回调
        console.log(res)
        if(res.cancel){  //用户点击取消按钮
          console.log("用户点击取消按钮")
        };
        if(res.confirm){ //用户你点击确定按钮
          console.log("用户点击确定按钮")
        }
      }
    })
  },
  //loding加载
  handeleshowLoading(){
    wx.showLoading({
      title: '加载中',
      mask:true  //遮罩层
    })
    //取消loding
    wx.hideLoading()
  },
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    //获取数据
    request({
      url: '/new/school/list.do',
      method:"get",
      data:{
        pageNum: this.data.pageNum,
        pageSize: 20,
        searchKey:"",
        verifySign: 1,
      },
    }).then(res => {
      // 拼接数据
      for(var i=0;i<res.data.data.list.length;i++){
        this.data.dataList.push(res.data.data.list[i])
      }
      console.log(this.data.dataList)
      this.setData({
        dataList: this.data.dataList
      })
      this.data.condition = false;
    }).catch(err => {
      console.log(err)
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
    console.log("刷新")
    wx.stopPullDownRefresh();  //停止下拉刷新
    
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      pageNum:this.data.pageNum+1
    })
    // this.onLoad();
    this.setData({
      condition:true
    })
    console.log(this.data.pageNum)
    console.log("加载加载")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return{
      title:"hello lgl", //转发显示标题
      path:"pages/one/one", //转发当前的页面
      imageUrl:"https://tidu.com/timg.jpg"  //转发显示的图片
    }
  }
})