// catalog/my-slots/my-slots.js
/**
 * Component构造器的传入使用：
 *    1.properties ：让我们的使用者可以给组件传入数据
 *    2.data： 定义组件内部的初始化数据
 *    3.method:用于定于组件内部的函数
 *    4.options :定义组件的配置选项
 *       4.1 ：使用多插槽是为 multipleSlots ：true
 *       4.2 ：styleIsolation:样式的隔离方式
 */

Component({
   options:{
      multipleSlots:true
   },
   //1.properties ：让我们的使用者可以给组件传入数据
   properties:{
      title:{
         type:Array,
         value:[
            '',''
         ]
      }
   },
   //2.data： 定义组件内部的初始化数据
   data:{
      count:12
   },
   //3.method:用于定于组件内部的函数
   method:{
      
   }

})
