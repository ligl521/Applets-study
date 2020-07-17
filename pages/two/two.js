 // pages/two/two.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pro:45454.555555,
    proo:["111","222","333"],
    aa:"",
    value:"",
    fileList: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1' }, { url: 'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/vis-2019/live-logo/1594884075276.jpg', name: '图片2' }, { url: 'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/vis-2019/live-logo/1594884683151.jpg', name: '图片3' },],
    phone:"",//手机号
    errorPhone:"",//手机号验证提示
    updataFile:false,//文件上传按钮是否禁止
  },
  adbtn:function(event){
    console.log(event)
    console.log(event.currentTarget.dataset.item)
    this.setData({
      aa : event.currentTarget.dataset.item
    })
  },
  // 渐变按钮
  btnForm:function(){
    console.log(this.data)
    console.log(this.data.phone == "")
    console.log(!(/^1[34578]\d{9}$/.test(18353077779)))
    if (this.data.phone == ""){
      this.setData({
        errorPhone:"请输入手机号"
      })
    }else{
      console.log(this.data.phone)
      if (!(/^1[34578]\d{9}$/.test(this.data.phone))){
        this.setData({
          errorPhone: "请验证手机号"
        })
        console.log('失败 ')
        
      }else{
        console.log('成功 ')
        this.setData({
          errorPhone: ""
        })
      }
    }
  },
  onChange: function (event){
    console.log(event.detail)
    this.setData({
      phone: event.detail
    })
    if (this.data.phone == "") {
      this.setData({
        errorPhone: "请输入手机号"
      })
    } else {
      console.log(this.data.phone)
      if (!(/^1[34578]\d{9}$/.test(this.data.phone))) {
        this.setData({
          errorPhone: "请验证手机号"
        })
        console.log('失败 ')

      } else {
        console.log('成功 ')
        this.setData({
          errorPhone: ""
        })
      }
    }
    console.log();
  },
  deleteFile:function(e){
    console.log(e)
  },
  // 上传文件
  afterRead(event) {
    var that = this;
    const { file } = event.detail;
    console.log(this.data.fileList)
    
    // var jsonstr = '{ "code": 0, "count": 0, "data": { "uri": "1594886691323.jpg", "url": "https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/vis-2019/live-logo/1594886691323.jpg" } }';
    // let cs = JSON.parse(jsonstr)
    // console.log(cs)

    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://data.xinxueshuo.cn/nsi-1.0/manager/talent/upload.do?type=nsi-event/vis-2019/live-logo/', // 仅为示例，非真实的接口地址
      filePath: file.path,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        let cs = JSON.parse(res.data)
        console.log(cs)
        // 上传完成需要更新 fileList
        let aa = {};
        aa.url = cs.data.url;
        console.log(that.data.fileList.push(aa))
        console.log(that.data.fileList)
        that.setData({ fileList: that.data.fileList });
        // const { fileList = [] } = this.data;
        // fileList.push({ ...file, url: res.data });
        // this.setData({ fileList });
      },
    });
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