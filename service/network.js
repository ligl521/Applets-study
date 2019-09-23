export default function request(options){
  return new Promise((resolve,reject) => {
    let url = "https://data.xinxueshuo.cn/nsi-1.0";
    wx.request({
      url: url+options.url,
      method: options.method || "get",
      data: options.data || {},
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })

  })
}