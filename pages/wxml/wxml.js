// pages/wxml/wxml.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      message:'你好',
      name:'科比',
      age:'18',
      nowTime:new Date().toLocaleString(),
      isActive:false,
      isShow:true,
      score:60,
      movies:['泡良','瞎子','艾希'],
      nums:[
         ['123','456','789'],
         ['323', '356', '989'], 
         ['223', '556', '689']
         ],
      number:[3, 2, 1],
      color:'yellow'

   },
   onLoad(){
      setInterval(()=>{
         this.setData({
            nowTime: new Date().toLocaleString()
         })
      },1000)
   },
   handcolor(){
      this.setData({
         isActive:!this.data.isActive
      })
   },
   chosecolr(){
      this.setData({
         isShow:!this.data.isShow
      })
   },
   upscore(){
      this.setData({
         score:this.data.score + 6
      })
   },
   showcolor(){
      console.log('123123'),
      this.setData({
         color:'red'
      })
   }


   
})