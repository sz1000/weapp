// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "../../static/images/right.png",
    storeList: [{
      id: 1,
      name: '上海国金中心',
      address: '上海市普陀区'
    }, {
      id: 2,
      name: '上海八佰伴',
      address: '上海市浦东新区张杨路501号'
    }, {
      id: 3,
      name: '上海第一百货',
      address: '上海市黄浦区'
    }, {
      id: 4,
      name: '上海八佰伴',
      address: '上海市浦东新区张杨路501号'
    }, {
      id: 5,
      name: '上海第一百货',
      address: '上海市黄浦区'
    }]
  },
  toSelectStore(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    // 路由跳转并带参数(跳转到 B 页面)
    wx.navigateTo({
      url: '../tosubscribe/tosubscribe?index=' + this.data.storeList[index].name
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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