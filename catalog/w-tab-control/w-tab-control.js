// catalog/w-tab-control/w-tab-control.js
Component({
   /**
    * 组件的属性列表
    */
   properties: {
      titles:{
         // 属性
         type:Array,
         // 在wxml页面中写或者是js文件中都可以
         // 设置，默认值
         //value:['流行','新款','时尚']
      }
   },

   /**
    * 组件的初始数据
    */
   data: {
      currentIndex:0
   },

   /**
    * 组件的方法列表
    */
   methods: {
      hindclick(event){
         //1.去除index必须设置 data-index
         const index = event.currentTarget.dataset.index;
         console.log(index);
         //2.修改index
         this.setData({
            currentIndex:index
         })

         // 3.通知页面内部的点击事件
         //自定义组件触发事件时，需要使用 triggerEvent 方法：第一个是传递出去页面的名称 ，第二个的对象 及值
         this.triggerEvent('handData', {index,titles:this.properties.titles[index] }, {})
      }
   }
})
