// aboutme.ts
var app = getApp()
interface List {
  id: string
  title:string
  img:string
  cTime:string
}

Page({
  data: {
    newsList:[
      {id:"1",title:"aaaaaaaaaaa",img:"../../images/1.png",cTime:"2022-10-10 09:13"},
      {id:"2",title:"bbbbbbbb",img:"../../images/1.png",cTime:"2022-10-10 09:13"},
      {id:"3",title:"ccccccccc",img:"../../images/1.png",cTime:"2022-10-10 09:13"},
      {id:"4",title:"dddddddd",img:"../../images/1.png",cTime:"2022-10-10 09:13"}
    ] as Array<List>
  },
  bindViewTap:function(){
    wx.navigateTo({
      url:'../logs/logs'
    })
  },
  onLoad: function(){
    var that = this
    wx.request({
      url: 'http://localhost:443/getList',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)//打印到控制台
          that.setData({
            newsList: res.data as Array<List>
          })
      }
    })
  }
})
