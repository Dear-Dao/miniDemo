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
      count:0,
      tittle:['盖伦','小炮','盲僧']
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
   touchstart(){
      console.log('touchstart触摸开始')
   },

   touchmove() {
      console.log('touchmove手指一动')
   },
   touchend() {
      console.log('touchend结束触摸')
   },
   tap() {
      console.log('tap')
   },
   longpress(){
      consloe.log('longpress')
   },
   handevent(event){
      console.log(event)
   },
   handItem(event){
      // consloe.log(event)
      console.log(event)
      const dataset = event.currentTarget.dataset
      const item = dataset.item
      const index = dataset.index
      console.log(item)
      console.log(index)
   
   },
   captureView1(){
      console.log('captureView1')
   },
   bindview1(){
      console.log('bindview1')
   },
   captureView2() {
      console.log('captureView2')
   },
   bindview2() {
      console.log('bindview2')
   },
   captureView3() {
      console.log('captureView3')
   },
   bindview3() {
      console.log('bindview3')
   }



})