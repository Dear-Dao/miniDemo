// pages/index/index.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      name:'世界',
      title:'哈哈哈',
      age:18,
      pig:1,
      students:[
         {id: 110, name:'kebo',age:'12'},
         {id: 111, name: 'james', age: '13' },
         {id: 112, name: 'lin', age: '14' }
      ],
      count:0
   },
   /**
    * 绑定点击事件
    */
   upclick(){
   // 1.  错误做法 界面不会刷新
       console.log('按钮+发生'),
      // this.data.count += 1,
      // console.log(this.data.count)
   // 2this.setData()
      this.setData({
         count:this.data.count + 1,
         age:this.data.age + 2
      })
   },

   /**
    * 绑定点击事件
    */
   downclick() {
      // 1.  错误做法 界面不会刷新
      console.log('按钮-发生'),
         // this.data.count += 1,
         // console.log(this.data.count)
         // 2this.setData()
         this.setData({
            count: this.data.count - 1,
            age: this.data.age - 2
         })
   },

   //跳转页面函数
   chosePage(){
      //跳转某一页
      wx.navigateTo({
         url: '/pages/navigator/navigator',
      }),
      //跳转上一页
      wx.navigateBack({
         //返回层级设置
         delta:''
      }),
      wx.na

   }
})