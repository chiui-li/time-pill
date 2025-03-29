// index.ts


// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  methods: {
    // 事件处理函数
    toCases() {
      console.log(123)
      wx.navigateTo({
        url: '../cases/cases',
      })
    },
    loginAct() {
      console.log(2222)
      wx.login({
        success(res) {
          console.log(res)
          if (res.code) {
            wx.request({
              'url': 'http://localhost:2000/api/sys/basic/login/wechat',
              'method': 'POST',
              'data': {
                code: res.code
              }
            })
          }
        }
      })
    }
  },
})
