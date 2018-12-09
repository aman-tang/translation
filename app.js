//app.js
App({
  onLaunch: function () {
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    curLang: {},
    langList: [
      // {
      //   'chs': '自动检测',
      //   'lang': 'auto',
      //   'index': 0
      // },
      {
        'chs':'中文',
        'lang': 'zh',
        'index': 0
      },
      {
        'chs': '英语',
        'lang': 'en',
        'index': 1
      },
      {
        'chs': '韩语',
        'lang': 'kor',
        'index': 2
      },
      {
        'chs': '日语',
        'lang': 'jp',
        'index': 3
      },
      {
        'chs': '法语',
        'lang': 'fra',
        'index': 4
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        'index': 5
      },
      {
        'chs': '泰语',
        'lang': 'th',
        'index': 6
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        'index': 7
      },
      {
        'chs': '俄语',
        'lang': 'ru',
        'index': 8
      },
      {
        'chs': '葡萄牙语',
        'lang': 'pt',
        'index': 9
      },
      {
        'chs': '德语',
        'lang': 'de',
        'index': 10
      },
      {
        'chs': '意大利语',
        'lang': 'it',
        'index': 11
      },
      {
        'chs': '希腊语',
        'lang': 'el',
        'index': 12
      },
      {
        'chs': '荷兰语',
        'lang': 'nl',
        'index': 13
      },
      {
        'chs': '波兰语',
        'lang': 'pl',
        'index': 14
      },
      {
        'chs': '保加利亚语',
        'lang': 'bul',
        'index': 15
      },
      {
        'chs': '爱沙尼亚语',
        'lang': 'est',
        'index': 16
      },
      {
        'chs': '丹麦语',
        'lang': 'dan',
        'index': 17
      },
      {
        'chs': '芬兰语',
        'lang': 'fin',
        'index': 18
      },
      {
        'chs': '捷克语',
        'lang': 'cs',
        'index': 19
      },
      {
        'chs': '罗马尼亚语',
        'lang': 'rom',
        'index': 20
      },
      {
        'chs': '斯洛文尼亚语',
        'lang': 'slo',
        'index': 21
      },
      {
        'chs': '瑞典语',
        'lang': 'swe',
        'index': 22
      },
      {
        'chs': '匈牙利语',
        'lang': 'hu',
        'index': 23
      },
      {
        'chs': '越南语',
        'lang': 'vie',
        'index': 24
      },
      {
        'chs': '粤语',
        'lang': 'yue',
        'index': 25
      },
      {
        'chs': '文言文',
        'lang': 'wyw',
        'index': 26
      },
      {
        'chs': '繁体中文',
        'lang': 'cht',
        'index': 27
      }
    ]
  }
})