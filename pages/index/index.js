// pages/index/index.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      name:'世界',
      age:18,
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

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {

   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function () {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function () {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function () {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function () {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function () {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function () {

   }
})