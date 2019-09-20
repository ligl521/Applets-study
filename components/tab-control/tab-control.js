// components/tab-control/tab-control.js
Component({
  
  //组件的属性列表 （子组件获取父组件titles的值）
  properties: {
    titles:{
      type:Array,
      value:[] //默认值不传 显示value里面的值
    }
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
    //子组件给父组件发送事件
    btn:function(event){
      //获取index
      const index = event.currentTarget.dataset.index;
      //事件通知外部
      this.triggerEvent("itemclick",{index,titles:this.properties.titles[index]},{})
    },                              

  }
})
