App({
//小程序的生命周期

   //生命周期回调——监听小程序初始化。
  onLaunch: function () {
     //登录操作
     //code：只有5分钟的有效时间
     wx.login({
        success: function (res) {
           console.log(res)
           //获取code
         //   const code = res.code;
         //   //将code发送到服务器的接口
         //   wx.request({
         //      url: 'http://123.207.32.32:3000/login',
         //      method:'post',
         //      data:{
         //         code
         //      },
         //      success:function(res){
         //         console.log(res)
         //      }
         //   })
        }
     })
  }
})
