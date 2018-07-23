// pages/access/access.js
Page({
  data: {
    switch: false
  },
  switch(e) {
    this.setData({
      switch: !e.detail.value
    })
  },

  userInfo(e) {
    console.log(e)
  }
})
