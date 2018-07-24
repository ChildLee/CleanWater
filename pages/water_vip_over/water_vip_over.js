const app = getApp()

Page({
  data: {
    order_vip: {}
  },

  onLoad() {
    this.setData({
      order_vip: app.data.order_vip
    })
  }
})
