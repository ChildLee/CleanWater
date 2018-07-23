Component({
  properties: {
    setIndex: {
      type: Number,
      value: 0
    }
  },
  data: {
    index: 0
  },
  methods: {
    tab(e) {
      if (Number(e.currentTarget.dataset.index)) {
        console.log(1)
      }
    },
    scanCode() {
      wx.scanCode({
        success(res) {
          console.log(res)
        }
      })
    }
  }
})
