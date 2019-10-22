// catalog/select/select.js
Component({
   /**
    * 组件的属性列表
    */
   properties: {
      open:{
         type:Array,
         value: ['流行 ', '新款  ', '时尚 ']
      }
   },

   /**
    * 组件的初始数据
    */
   data: {
      counter:12
   },

   /**
    * 组件的方法列表
    */
   methods: {
      chooseData(num){
         this.setData({
            counter: this.data.counter + num
         })
      }
   }
})
