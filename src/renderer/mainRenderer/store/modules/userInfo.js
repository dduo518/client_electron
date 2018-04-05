const state = {
  main: 0,
  userInfo: ''
}

const mutations = {
  // 启动获取用户信息
  GET_USER_INFO (state, userInfo) {
    state.userInfo = userInfo.user
    state.access_token = userInfo.access_token
  }
}

const actions = {
  GET_USER_INFO ({ commit }) {
    var userInfo = this.$electron.ipcRenderer.sendSync(this.$IPC.GETUSERINFO)
    commit('GET_USER_INFO', userInfo)
  }
}

export default {
  state,
  mutations,
  actions
}
