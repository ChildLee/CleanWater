import api from './api/index'
import dateformat from './utils/dateformat'

App({
  api,

  dateformat,

  data: {
    index: -1,
    //默认同意协议
    agree: 1
  },

  onLaunch() {
    //用户登录
    if (!wx.getStorageSync('user_id')) {
      wx.login({
        success(res) {
          api.get_open_id({code: res.code}).then(res => {
            return res.data['openid']
          }).then(openid => {
            return api.register({open_id: openid})
          }).then(res => {
            wx.setStorageSync('user_id', res.data['id'])
            return api.get_user_info({user_id: res.data.id})
          }).then(res => {
            let isVIP = false
            if (Number(res.data['money']) > 0) {
              isVIP = true
            }
            wx.setStorageSync('money', res.data['money'])
            wx.setStorageSync('max_dosage', res.data['max_dosage'])
            wx.setStorageSync('isVIP', isVIP)
          })
        }
      })
    }
  }

})
