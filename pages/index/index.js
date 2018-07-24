// pages/index/index.js
Page({


  onLoad() {

  },

  protocol() {
    wx.navigateTo({url: '/pages/protocol/protocol'})
  },

  //同意协议
  agree(e) {
    console.log(e)
  }
})
