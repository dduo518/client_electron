/**
 * 整个生命周期内可重复使用的值
 */

const state = {
  subjectCache: [],
  teacherCache: [],
  salesCache: []
}

const mutations = {
  // 启动获取用户信息
  GET_APP_CACHE (state, data) {
    state.subjectCache = data.subjects
    state.teacherCache = data.teachers
    state.salesCache = data.sales
  }
}
const actions = {
  GET_APP_CACHE ({ commit, dispatch }) {
    dispatch('GET_USER_INFO')
    return this.$api.gobalCache()
  }
}

export default {
  state,
  mutations,
  actions
}
