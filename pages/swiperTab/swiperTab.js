// pages/swiperTab/swiperTab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 1,
    tabList:[]
  },

  onLoad: function (options) {
    console.log(options)
  },

  //用户点击tab时调用
  titleClick: function (e) {
    console.log(e.currentTarget.dataset.idx)
    let currentPageIndex =
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  },

  //用户滑动切换tab调用
  swiperTab: function (e) {
    if (e.detail.source == 'touch') {
      this.setData({
        currentIndex: e.detail.current
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tabList:[
        {
          id:'101',
          text:'第一条内容',
          idx:0
        },
        {
          id:'102',
          text:'第二条内容',
          idx:1
        },
        {
          id:'103',
          text:'第三条内容',
          idx:2
        },
      ]
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