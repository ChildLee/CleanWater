// pages/access/access.js
Page({
  data: {
    switch: true
  },
  switch(e) {
    this.setData({
      switch: !e.detail.value
    })
  }
})
