// components/my-slot/my-slot.js
Component({
  //组件配置选项
  options:{
      multipleSlots:true, //使用多插槽时 设置为true
      //styleIsolation:  样式的隔离方式
  },
  //组件传入的属性
  properties: {

  },

  // 定义内部的属性
  data: {

  },

  //定义方法
  methods: {

  },
  //外界给组件传入额外的数据
  externalClasses:[],
  //监听properties/data的改变
  obsertvers:{
    //例
    counter:function(aa){
      console.log(aa)
    }
  }
})
