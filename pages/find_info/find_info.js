const app = getApp()

Page({

  data: {
    url: ''
  },

  onLoad(e) {
    // let article = '<div>我是HTML代码<img src="http://image.chunshuitang.com/goods/401078.jpg"></img></div>';
    // WxParse.wxParse('article', 'html', article, this, 5);

    this.find_info(e.id)
  },

  //发现详情
  find_info(id) {
    app.api.get_Information_detail({id}).then(res => {
      this.setData({
        url: res.data.content
      })
      // wx.request({
      //   url: res.data.content,
      //   success: (res) => {
      //     WxParse.wxParse('article', 'html', res.data, this)
      //   }
      // })
    })
  }
})
