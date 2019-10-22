// catalog/myprop/myprop.js
Component({
   /**
    * 组件的属性列表
    * tilte是自己定义的名称
    String 表示类型
    */
   properties: {
      //title:String 或者下面的写法
      title:{
         type:String,
         value:'我是默认的',
         observer:function(newvalue,oldvalue){
            console.log(newvalue, oldvalue)
         }
      }
   },
   //设置外部样式类定义
   externalClasses: ['titlecolor']

   
})
