const app = getApp()

Page({


  onLoad() {

  },

  protocol() {
    wx.navigateTo({url: '/pages/protocol/protocol'})
  },

  //同意协议
  agree(e) {
    app.data.agree = e.detail.value.length
  }
})
