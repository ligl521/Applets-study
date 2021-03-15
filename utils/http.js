//项目URL相同部分，减轻代码量，同时方便项目迁移
//这里因为我是本地调试，所以host不规范，实际上应该是你备案的域名信息
var host = 'https://api.html9.top/cs';
 
/**
 * POST请求，
 * URL：接口
 * postData：参数，json类型
 * doSuccess：成功的回调函数
 * doFail：失败的回调函数
 */

//  post
export function post(url, params) {
  return new Promise((resolve,reject) => {
    wx.request({
      //项目的真正接口，通过字符串拼接方式实现
      url: host + url,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: params,
      method: 'POST',
      success: function (res) {
        //参数值为res.data,直接将返回的数据传入
        resolve(res);
      },
      fail: function (err) {
        reject(err)
      },
    })

  })
}
 
//GET请求，不需传参，直接URL调用，
export function get(url,params) {
  return new Promise((resolve,reject) => {
    wx.request({
      url: host + url,
      header: {
        "content-type": "application/json;charset=UTF-8"
      },
      data: params,
      method: 'GET',
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      },
    })
  })
}
 


