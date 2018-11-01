const app = getApp()

Page({


  onLoad() {
    app.data.index = -1
  },

  protocol() {
    wx.navigateTo({url: '/pages/protocol/protocol'})
  },

  //同意协议
  agree(e) {
    app.data.agree = e.detail.value.length
  },
})
