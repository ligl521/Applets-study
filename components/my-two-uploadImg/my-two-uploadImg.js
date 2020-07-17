// components/my-two-uploadImg/my-two-uploadImg.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    btnUplodaFila:function(){
      console.log(11111)
      wx.chooseMessageFile({
        count: 10,
        type: 'image',
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles;
          console.log(tempFilePaths.length)
          for(var i=0;i<tempFilePaths.length;i++){
            console.log(tempFilePaths[i].path)
            wx.uploadFile({
              url: 'https://data.xinxueshuo.cn/nsi-1.0/manager/talent/upload.do?type=nsi-event/vis-2019/live-logo/', // 仅为示例，非真实的接口地址
              filePath: tempFilePaths[i].path,
              name: 'file',
              formData: { user: 'test' },
              success(res) {
                let cs = JSON.parse(res.data)
                console.log(cs)

              },
            });
          }

        }
      })
  
    },
  }
})
