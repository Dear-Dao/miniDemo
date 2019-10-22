// pages/index/index.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      count: 0,
      name:'',
      age:''
   },
   celCount(event){
      console.log(event)
      this.setData({
         count:this.data.count+2,
         //重event中拿去数据
         name : event.detail.name,
         age: event.detail.age,
      })
   },
   handclickData(event){
      console.log(event)
   },
   handtapCpn(){
      // 调用组件对象调用setData即可
      //获取组件对象 使用selectComponent 方法通过调用class名称 或者id
      const sel = this.selectComponent('.sel-class')

      console.log(sel)
      //有两种方法修改，建议第二种
      //1.修改数据 sel代表之前的this 通过setData方法
      // sel.setData({
      //    counter: sel.data.counter + 8
      // })

      //2.通过方法对组件数据的修改
      sel.chooseData(10)
   }


})