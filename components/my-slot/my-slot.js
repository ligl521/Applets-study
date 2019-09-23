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
  },


  //组件中监听生命周期函数
    //1.监听所在页面的生命周期
  pageLifetimes:{
    show(){
      console.log("监听组件所在页面显示出来时")
    },
    hide(){
      console.log("监听组件所在页面隐藏起来时")
    },
    resize(){
      console.log("监听页面尺寸的改变")
    }
  },
  //2.监听组件本身的声明周期
  lifetimes:{
    created(){
      console.log("组件被创建出来时")
    },
    attached(){
      console.log("组件被添加到页面")
    },
    ready(){
      console.log("组件被渲染出来时")
    },
    moved(){
      console.log("组件被移动到另一个节点")
    },
    detached(){
      console.log("组件被移除掉")
    }
  }
})
