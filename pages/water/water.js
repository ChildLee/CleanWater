const app = getApp()

Page({

  data: {
    water_package_id: -1,
    water: []
  },

  onLoad(e) {
    this.data.mac_id = e.mac_id
    this.get_water_package()
  },


  /**
   * 获取水量套餐包
   */
  get_water_package() {
    app.api.get_water_package().then(res => {
      this.setData({
        water: res.data
      })
    })
  },

  /**
   * 统一下单
   */
  unifiedOrder() {
    return app.api.create_order({
      'type': '2',                           //:订单类型 1:用户充值 2：用户购买套餐
      'water_package_id': this.data.water_package_id,  //:套餐ID 当 type = 1时 可不填 type = 2时 必填
      'device_id': this.data.mac_id,                      //:设备ID 当 type = 1时 可不填 type = 2时 必填
      'user_id': wx.getStorageSync('user_id')                     //:用户ID 必填
    })
  },

  tab(e) {
    app.data.water = e.currentTarget.dataset.item
    this.setData({
      water_package_id: e.currentTarget.dataset.id
    })
  },

  //支付
  pay() {
    wx.showLoading({title: '请稍后'})
    if (this.data.water_package_id === -1) {
      wx.showToast({title: '请选择水量', icon: 'none'})
    } else {
      this.unifiedOrder().then(res => {
        wx.hideLoading()
        wx.requestPayment({
          'timeStamp': res.data.timeStamp,
          'nonceStr': res.data.nonceStr,
          'package': res.data.package,
          'signType': res.data.signType,
          'paySign': res.data.paySign,
          success(res) {
            wx.navigateTo({url: '/pages/water_over/water_over'})
          }
        })
      })
    }
  }
})
