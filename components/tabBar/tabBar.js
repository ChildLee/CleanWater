const app = getApp()

Component({
  properties: {
    setIndex: {
      type: Number,
      value: -1
    }
  },
  methods: {
    find() {
      if (app.data.index !== 0) {
        app.data.index = 0
        wx.redirectTo({url: '/pages/find/find'})
      }
    },
    my() {
      if (app.data.index !== 1) {
        app.data.index = 1
        wx.redirectTo({url: '/pages/my/my'})
      }
    },
    scanCode() {
      if (app.data.index !== -1) {
        app.data.index = -1
        wx.redirectTo({url: '/pages/index/index'})
      }

      wx.scanCode({
        success(res) {
          wx.navigateTo({url: '/pages/water/water'})
        }
      })
    }
  }
})
