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
    //获取用户信息
    userInfo(e) {
      if (e.detail.userInfo) {
        if (app.data.index !== 1) {
          app.data.index = 1
          wx.redirectTo({url: '/pages/my/my'})
        }
      } else {
        wx.redirectTo({url: '/pages/access/access'})
      }
    },
    scanCode() {
      if (!app.data.agree) {
        return wx.showToast({title: '未同意《用户协议》不能享受服务', icon: 'none'})
      }
      if (app.data.index !== -1) {
        app.data.index = -1
        wx.redirectTo({url: '/pages/index/index'})
      }
      wx.scanCode({
        success(res) {
          app.api.bind_device({
            'device_mac': res.result,//:设备MAC地址
            'user_id': wx.getStorageSync('user_id') //:用户ID
          }).then(res => {
            if (res['errcode'] !== 0) {
              return wx.showToast({title: res['errmsg'], icon: 'none'})
            } else {
              return res.data
            }
          }).then(res => {
            if (res && Number(res.state) === 1) {
              if (wx.getStorageSync('isVIP')) {
                wx.navigateTo({url: `/pages/water_vip/water_vip?mac_id=${res.id}`})
              } else {
                wx.navigateTo({url: `/pages/water/water?mac_id=${res.id}`})
              }
            }
          })
        }
      })
    }
  }
})
