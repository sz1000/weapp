// pages/shopingDetails/shopingDetails.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {},
    list: [],
  },
  goodsInfo:{},
  /**
   * 1：绑定点击事件
   * 2：获取缓存中购物车数据 数组
   * 3：先判断当前商品是否存在购物车
   * 4：已经存在购物车就执行购物车数量++ =>从新把购物车数组添加缓存
   * 5：不存在购物车数组中  直接给购物车添加一个元素，带上购买数量num  =>从新把购物车数组添加缓存
   * 6：弹出提示添加成功
   */
  //加入购物车
  addCart() {
    console.log(123)
    //先获取混村中购物车数据
    let list = wx.getStorageSync('shopingList') || []; //获取本地缓存中
    console.log(list)
    let index = list.findIndex((v, i) => {
      v.id === this.data.goodsObj.id
    })
    if (index === -1) {
      console.log("第一次添加")
      this.goodsInfo.num = 1
      list.push(this.goodsInfo)

    } else {
      console.log("存在gouwuche")
      list[index].num++;
    }
    wx.setStorageSync('shopingList', list)
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true, //手抖快点击
      success(res) {
        console.log("成功")
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    this.setData({
      goodsObj:{id}
    })
    console.log(this.data.goodsObj)
    let shopingList = wx.getStorageSync('shopingList')
    console.log(shopingList)

    var list = shopingList.filter(function (item) {
      return item.id == id
    })
    console.log(list)
    this.setData({
      list,
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