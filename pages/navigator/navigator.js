// pages/navigator/navigator.js
Page({

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      //从页面跳转中获取数据
      console.log(options)
   },
   //页面退出执行
   onUnload(){
      //1.获取页面对象
      //getCurrentPages 当前所有栈中的页面
      const pages = getCurrentPages()
      console.log(pages);
      //拿到需要的页面对象
      const index = pages[pages.length - 2]
      //2.调用页面对象中的setData方法
      index.setData({
         title:'呵呵呵'
        
      })

   }
   
})