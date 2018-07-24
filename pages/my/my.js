const app = getApp()

Page({

  data: {
    balance: 0
  },

  onShow() {
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          setIndex: app.data.index,
          info: res.userInfo,
          balance: wx.getStorageSync('money')
        })
      }
    })
  }
})
