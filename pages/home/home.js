// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    inputValue: '',
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
      }
    ],
    arr: [{
        text: "家电",
        url: "http://img0.imgtn.bdimg.com/it/u=2394972844,3024358326&fm=26&gp=0.jpg",
        id: "1"
      },
      {
        text: "香茗",
        url: "http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg",
        id: "2"
      },
      {
        text: "更多",
        url: "http://img4.imgtn.bdimg.com/it/u=2939038876,2702387014&fm=26&gp=0.jpg",
        id: "3"
      }
    ],
    images: [{
        text: "服务",
        url: "http://img0.imgtn.bdimg.com/it/u=2394972844,3024358326&fm=26&gp=0.jpg",
        id: "1"
      },
      {
        text: "服务",
        url: "http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg",
        id: "2"
      }
    ],
    footArr: [{
      text: '浮窗',
      id:'fc'
    }, {
      text: '添加我的小程序',
      id:'add'
    }, {
      text: '关于预约服务',
      id:'about'
    }, {
      text: '取消',
      id:'cancel'
    }],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500
  },

  //获取输入值
  getInputValue: function (e) {
    console.log(e)
    let value = e.detail.value
    this.setData({
      inputValue: value,
    })
    console.log(value)
  },
  //删除输入框值
  cancelInput: function () {
    this.setData({
      inputValue: ''
    })
  },
  // 事件处理函数
  // bindViewTap() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  toTapPage(e){
    console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    let id = this.data.footArr[index].id
    if(this.data.footArr[index].id=="about"){
      wx.navigateTo({
        url: '../about/about?id='+id
      })
    }
    
    
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