// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
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
    btn:function(event){
      console.log("----------",event)
      const index = event.currentTarget.dataset.index;
      console.log(this)
      //事件通知外部
      this.triggerEvent("itemclick",{index,titles:this.properties.titles[index]},{})
    },

  }
})
