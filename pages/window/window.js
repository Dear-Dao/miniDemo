// pages/window/window.js
Page({


   data: {
      count: 1
   },
   //展示弹窗
   showToast() {
      wx.showToast({
         title: '我是toast弹窗，党的许浩雁',
         duration: 3000,
         icon: 'loading',
         image: '/pages/img/tabbar/index.png',
         mask: true,
         success: function() {
            console.log('展示成功')
         },
         fail: function() {
            console.log('展示失败')
         },
         complete: function() {
            console.log('展示完成')
         }

      })
   },
   ShowModel() {
      wx.showModal({
         title: 'ShowModel',
         content: '你好不夏侯渊',
         //showCancel:false,
         cancelText: 'out',
         cancelColor: 'red',
         confirmText: '提交',
         success: function(res) {
            if (res.cancel) {
               console.log("用户点击取消")
            }
            if (res.confirm) {
               console.log("用户点击提交")
            }
         }
      })
   },
   ShowLoading() {
      // 会一直显示
      wx.showLoading({
         title: '加载ing',
         mask: true
      })
      //设置定时器
      setTimeout(() => {
         //关闭显示
         wx.hideLoading()
      }, 1000)
   },
   showActionSheet() {
      wx.showActionSheet({
         itemList: ['拍照', '相册'],
         //itemColor: 'greenyellow',
         success: function(res) {
            console.log(res)
            if (res.tapIndex == 0) {
               console.log(res.tapIndex)
            } else {
               console.log(res.tapIndex)
            }
         }
      })
   },
   // 分享小程序
   onShareAppMessage: function(optins) {
      return {
         title: "转发的标题", // 默认是小程序的名称(可以写slogan等)
　　　　  path: '/pages/index/index', // 默认是当前页面，必须是以‘/’开头的完整路径
         imageUrl: '/pages/img/2.jpg', //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
　　　   success: function(res) {　　　　　　 // 转发成功之后的回调   　　　　　　
            if (res.errMsg == 'shareAppMessage:ok') {　　　　　　}　　　　
         },
　　　　 fail: function() {　　　　　　 // 转发失败之后的回调 　　　　　　
            if (res.errMsg == 'shareAppMessage:fail cancel') {　// 用户取消转发
      　　　　　　} 
            else if (res.errMsg == 'shareAppMessage:fail') {　　　　　　　　 // 转发失败，其中 detail message 为详细失败信息
      　　　}　　　　
         }
　　　
      }
   }
})