// pages/scanCode/scanCode.js
Page({

  onLoad(e) {
    const code = e.code
    this.getUser_id().then(user_id => {
      console.log(user_id)
    })


    // app.api.bind_device({
    //   'device_mac': mac,//:设备MAC地址
    //   'user_id':user_id //:用户ID
    // }).then(res => {
    //   if (res['errcode'] !== 0) {
    //     return wx.showToast({title: res['errmsg'], icon: 'none'})
    //   } else {
    //     return res.data
    //   }
    // }).then(res => {
    //   if (res && Number(res.state) === 1) {
    //     if (wx.getStorageSync('isVIP')) {
    //       wx.redirectTo({url: `/pages/water_vip/water_vip?mac=${mac}&mac_id=${res.id}&tds=${res['tds_after']}`})
    //     } else {
    //       wx.redirectTo({url: `/pages/water/water?mac_id=${res.id}&tds=${res['tds_after']}`})
    //     }
    //   }
    // })
  },

  getUser_id() {
    return new Promise((resolve, reject) => {
      setInterval(function () {
        const user_id = wx.getStorageSync('user_id')
        if (user_id) {
          clearInterval(this)
          resolve(user_id)
        }
      })
    })
  }
})
