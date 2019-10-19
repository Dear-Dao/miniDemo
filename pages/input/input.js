// pages/input/input.js
Page({

   /**
    * 页面的初始数据
    */
   data: {

   },
   bindInput(event){
      console.log('用户输入内容', event)
   },
   bindFocus(event){
      console.log('用户聚焦内容', event)
   },
   bindBlur(event){
      console.log('用户失去内容', event)
   }

  
})