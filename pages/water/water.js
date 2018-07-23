// pages/water/water.js
Page({

  data: {
    tabIndex: 0,
    water: [{
      mete: 200,
      price: 0.5
    }, {
      mete: 300,
      price: 0.7
    }, {
      mete: 500,
      price: 1.0
    }]
  },

  onLoad() {

  },

  tab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  }
})
