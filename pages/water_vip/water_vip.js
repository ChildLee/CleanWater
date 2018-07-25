const app = getApp()

Page({

  data: {
    money: 0,
    max_dosage: 0
  },

  onLoad(e) {
    this.data.mac_id = e.mac_id
  },

  onShow() {
    this.setData({
      money: wx.getStorageSync('money'),
      max_dosage: wx.getStorageSync('max_dosage')
    })
  },

  stopWater() {
    app.api.close_water({
      user_id: wx.getStorageSync('user_id'),
      device_id: this.data.mac_id
    }).then(res => {
      app.data.order_vip = res.data
      wx.navigateTo({url: '/pages/water_vip_over/water_vip_over'})
    })
  }
})
