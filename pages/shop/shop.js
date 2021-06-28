// 获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    inputValue: '',
    goods: [],
    // 取消 按钮 是否显示
    isFocus: false,
    list: [{
        text: "个人造型服务",
        url: "http://img0.imgtn.bdimg.com/it/u=2394972844,3024358326&fm=26&gp=0.jpg",
        id: "1",
        explain: "服务说明",
        subscribe: "立即预约"
      },
      {
        text: "皮具护理服务",
        url: "http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg",
        id: "2",
        explain: "服务说明",
        subscribe: "立即预约"
      },
      {
        text: "个人定制服务",
        url: "http://img4.imgtn.bdimg.com/it/u=2939038876,2702387014&fm=26&gp=0.jpg",
        id: "3",
        explain: "服务说明",
        subscribe: "立即预约"
      }
    ],
    arr: [{
        text: "服务",
        url: "http://img0.imgtn.bdimg.com/it/u=2394972844,3024358326&fm=26&gp=0.jpg",
        id: "1"
      },
      {
        text: "服务",
        url: "http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg",
        id: "2"
      },
      {
        text: "服务",
        url: "http://img4.imgtn.bdimg.com/it/u=2939038876,2702387014&fm=26&gp=0.jpg",
        id: "3"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500
  },
  TimeId: -1,
  // 输入框的值改变  就会触发的事件
  handleInput(e) {
    // 1.获取输入框的值
    const {
      value
    } = e.detail;
    console.log(value)
    // 3.准备发送请求获取数据
    this.setData({
      inputValue: value,
      isFocus: true
    })
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
      this.qsearch(value);
    }, 1000)
  },
  // 点击取消按钮
  handleCancel() {
    this.setData({
      inputValue: "",
      isFocus: false,
      goods: []
    })
  },
  // 发送请求获取搜索建议  数据
  qsearch(value) {
    var data = {
      isCustomer: 1,
      onSale: 1,
      page: 1
    }
    if (value != "" && value != undefined) {
      data.name = value
    } else {
      delete data.name
    }
    console.log(data)
    var that = this
    wx.request({
      // url: 'https://tybaby.kodin.cn/api/v1/products?isCustomer=1&=1&name='+value+'&page=1', //仅为示例，并非真实的接口地址
      url: 'https://tybaby.kodin.cn/api/v1/products',
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          goods: res.data.data
        })
      }
    })
  },

  //删除输入框值
  cancelInput: function () {
    this.setData({
      inputValue: ''
    })
    this.qsearch();
  },
  toExplain() {
    wx.navigateTo({
      url: '../explain/explain'
    })
  },
  toSubscribe() {
    wx.navigateTo({
      url: '../tosubscribe/tosubscribe'
    })
  },
  onLoad: function () {
    this.qsearch();
    const _this = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
      }
    })
  }
})