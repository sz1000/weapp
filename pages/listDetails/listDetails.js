const app = getApp(); //新建页面时 默认引入
const ajax = app.myRequest(); //初始化一个的request() 实例
console.log(ajax)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    tabs: [],
    list: [],
    page: 0,
    size: 20,
    isFirstLoad: true, // 用于判断List数组是不是空数组，默认true，空的数组  
    hasMore: false,
    totalPeges:1,
  },
  // 自定义事件 用来接收子组件传递的数据
  handItemChange(e) {
    // 接收传递过来的参数
    const {
      index
    } = e.detail;
    console.log(e)
    console.log(index)
    // 3 获取原数组,以下写法等价于 let tabs = this.data.tabs;
    // 最好的方法 let tabs = JSON.stringify(this.data.tabs);深拷贝
    let {
      tabs
    } = this.data;
    console.log(tabs)
    //4 数组循环
    //  1 给每一个循环项 选中属性 改为false 
    //   2 就给当前索引的项 添加激活选中效果就可以了
    //4 数组循环 forEach 遍历数组时, 修改了 v 会导致源数组被修改
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    });
  },
  getList() {
    console.log(ajax)
    let that = this;
    let page = that.data.page;
    let size = that.data.size;
    // /cmsCategory/front/categoryByChannelID?channelID=2
    //cmsArticle/front/articleByChannelID?channelID=2&page=0&size=20&sort=id,desc
    ajax.get('/cmsArticle/front/articleByChannelID', {
      channelID: 2,
      page: page,
      size: size,
      // sort: 1
      // isCustomer:1,
      // onSale:1,
      // page:1
    }).then(res => {
      const total = res.data.total;
      this.setData({
        totalPeges:Math.ceil(total/size)
      })
      console.log(that.data.totalPeges)
      console.log(res.data.content)
      
      this.setData({
        list:[...that.data.list,...res.data.content]
      })
      console.log(that.data.list)
    }).catch(e => {
      console.log(e)
    })

    // let list = await api.request('/products',data)

  },
  getTabs() {
    this.setData({
      tabs: [{
        id: 0,
        name: "首页",
        isActive: true,
        list: [{
            text: '111'
          },
          {
            text: '2222'
          },
          {
            text: '3333'
          },
        ]
      }, {
        id: 1,
        name: "原创",
        isActive: false,
        list: [{
            text: 'zsewd'
          },
          {
            text: 'cwrcwc'
          },
        ]
      }, {
        id: 2,
        name: "分类",
        isActive: false,
        list: [{
            text: '英文想问下'
          },
          {
            text: '从魏晨魏晨'
          },
          {
            text: '趁热吃维持'
          },
        ]
      }, {
        id: 3,
        name: "关于",
        isActive: false,
        list: [{
            text: '000'
          },
          {
            text: '888'
          },
        ]
      }]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.getTabs()
    this.getList()
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
  onPullDownRefresh: function (e) {
    console.log("shuaxin")
    console.log(e)
    // 显示导航栏loading  
    wx.showNavigationBarLoading();
    // 调用接口加载数据  
    this.setData({
      page:0,
      list:[]
    })
    this.getList();
    // 隐藏导航栏loading  
    wx.hideNavigationBarLoading();
    // 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新  
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
    console.log(e)
    console.log("下拉")
    let that = this;
    let page = that.data.page;
    let totalPages = that.data.totalPages;
    //当前页大于总页数
    if (page>=totalPages) {
      wx.showToast({
        title: '没有下一页数据了',
      })
    }else{
      that.setData({
        page: that.data.page + 1, // 每次触发上拉事件，把pageNum+1  
        isFirstLoad: false // 触发到上拉事件，把isFirstLoad设为为false  
      });
      that.getList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})