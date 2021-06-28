Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    list: [],
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    tabList: [],
    tab:[],
  },
  
  //获取输入值
  getInputValue: function (e) {
    let value = e.detail.value
    this.setData({
      inputValue: value,
    })
    this.getList(value)
  },
  //删除输入框值
  cancelInput: function () {
    this.setData({
      inputValue: ''
    })
  },
  getList(value) {
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
    var that = this
    wx.request({
      // url: 'https://tybaby.kodin.cn/api/v1/products?isCustomer=1&=1&name='+value+'&page=1', //仅为示例，并非真实的接口地址
      url: 'https://tybaby.kodin.cn/api/v1/products',
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          list: res.data.data

        })
      }
    })
  },
  //列表详情页
  toListDetails(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    // 路由跳转并带参数(跳转到 B 页面)
    wx.navigateTo({
      url: '../listDetails/listDetails?index=' + this.data.list[index].name
    })
  },
  //  tabs切换逻辑
  swichNav: function (e) {
    console.log(e.target.dataset.current, e.currentTarget.dataset.current)
    var that = this;
    switch (e.currentTarget.dataset.current) {
      case '0':
        console.log(1111)
        that.setData({
          currentTab: e.currentTarget.dataset.current,
          tabs: [{
              name: "未成1"
            },
            {
              name: "未完成2"
            }
          ]
        });
        break;
      case '1':
        console.log(22222)
        that.setData({
          currentTab: e.currentTarget.dataset.current,
          tabs: [{
              name: "完成1"
            },
            {
              name: "完成2"
            }
          ]
        });
        break;
      case '2':
        console.log(33333)
        that.setData({
          currentTab: e.currentTarget.dataset.current,
          tabs: [{
              name: "333"
            },
            {
              name: "第三"
            }
          ]
        });
    }
  },
  bindChange: function (e) {
    console.log(e)
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList(this.inputValue)//列表数据
    
    this.getTabList()//自定义组件tab数据
    
  },
  
  getTabList() {
    this.setData({
      tabList: [{
          id: '101',
          text: '第一条内容',
          idx: 0
        },
        {
          id: '102',
          text: '第二条内容',
          idx: 1
        },
        {
          id: '103',
          text: '第三条内容',
          idx: 2
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