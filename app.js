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
    let user_id = wx.getStorageSync('user_id')
    if (!user_id) {
      wx.showLoading({title: '加载中~', mask: true})
      wx.login({
        success(res) {
          api.get_open_id({code: res.code}).then(res => {
            return res.data['openid']
          }).then(openid => {
            return api.register({open_id: openid})
          }).then(res => {
            user_id = res.data['id']
            return api.get_user_info({user_id: res.data.id})
          }).then(res => {
            let isVIP = false
            if (Number(res.data['money']) > 0) {
              isVIP = true
            }
            wx.setStorageSync('money', res.data['money'])
            wx.setStorageSync('max_dosage', res.data['max_dosage'])
            wx.setStorageSync('isVIP', isVIP)
            wx.setStorageSync('user_id', user_id)
            wx.hideLoading()
          })
        }
      })
    } else {
      api.get_user_info({user_id: user_id}).then(res => {
        let isVIP = false
        if (Number(res.data['money']) > 0) {
          isVIP = true
        }
        wx.setStorageSync('money', res.data['money'])
        wx.setStorageSync('max_dosage', res.data['max_dosage'])
        wx.setStorageSync('isVIP', isVIP)
      })
    }
  }
})
