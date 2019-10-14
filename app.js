App({
   //生命周期函数
   /**
    * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）小程序启动则会执行
    */
   onLaunch: function() {
      console.log('小程序初始化操作成功过：onLaunch')
      
      
   },

   /**
    * 当小程序启动，或从后台进入前台显示，会触发 onShow
    */
   onShow: function(options) {
      console.log('界面显示出来会执行 onShow')
      //小程序的启动模式
      //console.log(options),
      // wx.getUserInfo({
      //    success:function(res){
      //       console.log(res.userInfo)
      //    }
      // })
      
   },

   //设置全局数据
   globalData:{
      name: '世界',
      age: 18
   },

   /**
    * 当小程序从前台进入后台，会触发 onHide
    */
   onHide: function() {
      console.log('界面被隐藏时会执行 onHide')
   },

   /**
    * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
    */
   onError: function(msg) {
      console.log('小程序发生错误时会执行 onError')
   }
})