const state = {
  loding: false,
  lists: {
    data: [],
    paging: {
      page: 1,
      limit: 10,
      total: 0
    }
  },
  studentForm: {
    name: '',
    phone: '',
    parentname: '',
    parentphone: '',
    subject: {
      id: '',
      value: ''
    },
    sex: '',
    teacher: {
      id: '',
      value: ''
    },
    level: '',
    note: '',
    remainClass: '',
    class: '',
    time: '',
    birthday: '',
    address: '',
    age: '',
    subjectTime: '',
    step: 2
  }
}
const mutations = {
  GET_STUENT_LISTS (state, data) {
    state.lists = data.data
  },
  CHANGE_SIZE (state, data) {
    if (data.limit) {
      state.lists.paging.limit = data.limit
    }
    if (data.page) {
      state.lists.paging.page = data.page
    }
  },
  LODING (state) {
    state.loding = !state.loding
  },
  GET_STUDENT (state, data) {
    console.log(data)
    state.studentForm = data.data
  },
  CLEAR_CACHE (state) {
    for (let key in state.studentForm) {
      if (typeof state.studentForm[key] === 'string') {
        state.studentForm[key] = ''
      } else {
        for (let _key in state.studentForm[key]) {
          state.studentForm[key][_key] = ''
        }
      }
    }
  },
  UPDATE_FORM (state, obj) {
    state.studentForm[obj.type] = obj.value
  }
}
const actions = {
  GET_STUENT_LISTS ({ commit, dispatch }) {
    commit('LODING')
    this.$api.getStudentList({
      limit: this.state.student.lists.paging.limit,
      page: this.state.student.lists.paging.page
    }).then(data => {
      commit('GET_STUENT_LISTS', data)
      commit('LODING')
    })
  },
  CHANGE_SIZE ({ commit, dispatch }, data) {
    commit('CHANGE_SIZE', data)
    dispatch('GET_STUENT_LISTS')
  },
  GET_STUDENT ({ commit, dispatch }, data) {
    commit('LODING')
    this.$api.getStudent(data).then(data => {
      commit('GET_STUDENT', data)
      commit('LODING')
    }).catch(e => {
      commit('LODING')
    })
  },
  CLEAR_CACHE ({ commit, dispatch }) {
    commit('CLEAR_CACHE')
  },
  SUBMIT_FORM ({ commit, dispatch }) {
    commit('LODING')
    return this.$api.addStudent(this.state.studentForm)
  }
}
export default {
  state,
  mutations,
  actions
}
