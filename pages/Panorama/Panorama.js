var wxPano = requirePlugin("wxPano")
Page({
  data: {
    panolist: [{
      name: "xindamen",
      src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569759999124&di=84b4a1117e44b8bf047b017bbbd28e20&imgtype=0&src=http%3A%2F%2Ffwpano813.img.detuyun.cn%2F14346141115582795f122d9%2Fthumb%2F500_500%2Ffp6fhd6inzuvuzmv.jpg",
      infospots: [ //信息标记
        {
          type: "modal",
          modal: {
            title: "wxPano",
            content: "欢迎使用wxPano"
          },
          position: { x: 0.092, y: 0.434 },
          size: 1,
          icon: "info"
        },
        {
          type: "page",
          page: function () {
            wx.navigateTo({
              url: "ar",
              success(evt) {
                console.log(evt);
              }
            })
          },
          position: { x: 0.437, y: 0.447 },
          size: 1,
          icon: "info"
        }
      ]
    }],
    entrypanoname: "xindamen"
  },
  onReady: function () {
    wxPano.onReady = function () { //wxPano初始化完成后会触发此事件
      console.log("wxPano plugin ready!");
      console.log("Plugin Secret:", wxPano.getPluginSecret());
    }
  },
  covertap: function () {
    var panoId = wxPano.addPano({
      name: "dongdamen",
      src: 'https://www.aiotforest.com/pano-1-2048-1024.jpg',
      infospots: [{
        type: "pano",
        entryname: "xindamen",
        position: { x: 0.695, y: 0.503 },
        size: 1,
        icon: "arrow"
      }, {
        type: "modal",
        modal: {
          title: "东大门",
          content: "对面有公交站和唐家湾轻轨站"
        },
        position: { x: 0.092, y: 0.434 },
        size: 1,
        icon: "info"
      }]
    });
    wxPano.navigateMethod({
      type: "pano",
      entryname: "dongdamen"
    });
  },
  setCameraLookAt: function () {
    wxPano.setCameraLookAt({
      x: 0.5, y: 0.5
    })
  },
  enableTouch: function () {
    wxPano.enableTouch();
  },
  disableTouch: function () {
    wxPano.disableTouch();
  },
  getPanoInfo: function () {
    console.log(wxPano.getPanoInfo());
  }
})