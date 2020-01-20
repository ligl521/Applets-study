Page({
  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    Length: 6,        //输入框个数  
    isFocus: true,    //聚焦  
    Value: "",        //输入的内容  
    ispassword: false, //是否密文显示 true为密文， false为明文。
    hiddenBox: true,  //控制显示隐藏
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 验证密码
  password_input: function (e) {
    var that = this;
    var inputValue = e.detail.value;
    console.log();
    if (inputValue == "111111"){
      wx.redirectTo({
        url: '/pages/AdministratorsList/AdministratorsList'
      })
    }else{
      if (e.detail.value.length == 6){
        this.setData({
          hiddenBox:false
        })
      }else{
        this.setData({
          hiddenBox: true
        })
      }
    }
    that.setData({
      Value: inputValue
    })
  },

  Tap() {
    var that = this;
    that.setData({
      isFocus: true,
    })
  },

  getFocus: function () {
    this.setData({
      focus: !this.data.focus
    })
  },
})