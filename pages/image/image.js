// pages/image/image.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      imagePath:''
   },
   
   handphoto(){
     wx.chooseImage({
        //es6的箭头函数 才能获取响应式对象
        success: (res) => {
           //1.取出获取的路径
           const path =  res.tempFilePaths[0]
           //2.设置路径
           this.setData({
              imagePath:path
           })
        },
     })
   },
   handlephoto(){
      console.log('图片加载完成')
   }
  
})