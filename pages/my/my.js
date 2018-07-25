const app = getApp()

Page({

  data: {
    balance: 0
  },

  onLoad() {
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          info: res.userInfo
        })
      }
    })
  },

  onShow() {
    this.setData({
      setIndex: app.data.index,
      balance: wx.getStorageSync('money')
    })
  }
})
