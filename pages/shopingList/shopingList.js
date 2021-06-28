// pages/shopingList/shopingList.js
const app = getApp(); //新建页面时 默认引入
const ajax = app.myRequest(); //初始化一个的request() 实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    gage: 0,
    size: 20,
  },
  todetails(e) {
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    // wx.navigateTo({
    //   url: 'pages/shopingDetails/shopingDetails'
    // })
    wx.navigateTo({
      url: '/pages/shopingDetails/shopingDetails?id='+id
    })
    
  },
  getShopingList() {
    console.log(ajax)
    let that = this;
    // let page = that.data.page;
    // let size = that.data.size;
    // /cmsCategory/front/categoryByChannelID?channelID=2
    //cmsArticle/front/articleByChannelID?channelID=2&page=0&size=20&sort=id,desc
    ajax.get('//goods/list', {
      // channelID: 2,
      // page: page,
      // size: size,
      // sort: 1
      // isCustomer:1,
      // onSale:1,
      // page:1
    }).then(res => {
      // const total = res.data.total;
      // this.setData({
      //   totalPeges:Math.ceil(total/size)
      // })
      // console.log(that.data.totalPeges)
      // console.log(res.data.content)

      this.setData({
        shopingList: res.data.data
        // list:[...that.data.list,...res.data.content]
      })
      console.log(that.data.shopingList)
      wx.setStorageSync('shopingList', res.data.data)
    }).catch(e => {
      console.log(e)
    })

    // let list = await api.request('/products',data)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShopingList()
  },
  //https://api.it120.cc/tz/shop/goods/list

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