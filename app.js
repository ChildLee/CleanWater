import api from './api/index'
import dateformat from './utils/dateformat'

App({
  api,

  dateformat,

  data: {
    index: -1
  },

  onLaunch() {
    //获取用户的授权设置。
    wx.getSetting({
      success(res) {
        if (!res['authSetting']['scope.userInfo']) {
          //强制授权
          wx.redirectTo({url: '/pages/access/access'})
        }
      }
    })
  }

})
