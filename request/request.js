// export const  request=(params)=>{
//   const baseUrl = "https://tybaby.kodin.cn/api/v1"
//   return new Promise((resolve,reject)=>{
//     wx.request({
//       ...params,
//       url:baseUrl+params.url,
//       success:(result)=>{
//         resolve(result);
//         console.log(result)
//       },
//       fail:(err)=>{
//         reject(err);
//       }
//     })
//   })
// }
//-------------------------------
// class Request {
//   constructor (parms) {
//     this.withBaseURL = parms.withBaseURL
//     this.baseURL = parms.baseURL
//   }
//   get(url, data) {
//     return this.request('GET', url, data)
//   }
//   post (url, data) {
//     return this.request('POST', url, data)
//   }
//   put (url, data) {
//     return this.request('PUT', url, data)
//   }
//   request (method, url, data) {
//     const vm = this
//     return new Promise((resolve, reject) => {
//       wx.request({
//         url: vm.withBaseURL ? vm.baseURL + url : url,
//         data,
//         method,
//         success (res) {
//           resolve(res)
//         },
//         fail () {
//           reject({
//             msg: '请求失败',
//             url: vm.withBaseURL ? vm.baseURL + url : url,
//             method,
//             data
//           })
//         }
//       })
//     })
//   }
// }

// const request = new Request({
//   baseURL: 'http://test',
//   withBaseURL: true
// })

// module.exports = request
//----------------------------------
let ajaxTimes = 0;
class request {
  constructor() {
    this._baseUrl = 'http://123.56.180.25:8091/api'
    // this._baseUrl='http://123.56.180.25:8091/api'
    //http://123.56.180.25:8091/api/cmsArticle/front/articleByChannelID?channelID=2&page=0&size=20&sort=id,desc
    //  this._baseUrl = 'https://tybaby.kodin.cn/api/v1';
    //  this._token = wx.getStorageSync('token');
    //  this._header = {'Authorization': 'Bearer ' + token}
  }
  
  /**
   * GET类型的网络请求
   */
  get(url, data, header) {
    return this.requestAll(url, data, header, 'GET')
  }

  /**
   * DELETE类型的网络请求
   */
  deleteRequest(url, data, header) {
    return this.requestAll(url, data, header, 'DELETE')
  }

  /**
   * PUT类型的网络请求
   */
  putRequest(url, data, header) {
    return this.requestAll(url, data, header, 'PUT')
  }

  /**
   * POST类型的网络请求
   */
  postRequest(url, data, header) {
    return this.requestAll(url, data, header, 'POST')
  }

  /**
   * 网络请求
   */
  
  requestAll(url, data, header, method) {
    ajaxTimes++
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: this._baseUrl + url,
        data: data,
        header: header,
        method: method,
        success: (res => {
          if (res.statusCode === 200) {
            //200: 服务端业务处理正常结束
            resolve(res)
          } else {
            //其它错误，提示用户错误信息
            reject(res)
          }
        }),
        fail: (res => {
          reject(res)
        }),
        complete: (res => {
          ajaxTimes--
          if(ajaxTimes===0){
            console.log(ajaxTimes)
            wx.hideLoading({
              success: (res) => {
                console.log("关闭")
              },
            })
          }
          
        }),

      })
    })
  }
}

export default request