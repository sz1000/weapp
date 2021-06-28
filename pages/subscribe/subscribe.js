// pages/subscribe/subscribe.js
const order = ['demo1', 'demo2', 'demo3']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    toView: 'green',
    list: [{
      text: "个人造型服务",
      url: "http://img0.imgtn.bdimg.com/it/u=2394972844,3024358326&fm=26&gp=0.jpg",
      id: "1",
      stores: "上海国金中心",
      serviceTime: "2021-05-10",
      status:"已过期",
      bg:"#ed3f14"
    },
    {
      text: "皮具护理服务",
      url: "http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg",
      id: "2",
      stores: "上海国金中心",
      serviceTime: "2021-05-10",
      status:"已服务",
      bg:"#19be6b"
    },
    {
      text: "个人定制服务",
      url: "http://img4.imgtn.bdimg.com/it/u=2939038876,2702387014&fm=26&gp=0.jpg",
      id: "3",
      stores: "上海国金中心",
      serviceTime: "2021-05-10",
      status:"未开始",
      bg:"#80848f"
    },
    {
      text: "个人定制服务",
      url: "http://img4.imgtn.bdimg.com/it/u=2939038876,2702387014&fm=26&gp=0.jpg",
      id: "3",
      stores: "上海国金中心",
      serviceTime: "2021-05-10",
      status:"进行中",
      bg:"#5cadff"
    }
  ],
  },
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})