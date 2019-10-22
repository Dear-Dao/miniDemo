// catalog/event/event.js
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
      celCount(){
         //向外界触发事件
         //自定义组件触发事件时，需要使用 triggerEvent 方法
         this.triggerEvent('celCount', {name:'daodao',age:'18'}, {})
      }
   }
})
