import Vue from 'vue'
import Vuex from 'vuex'
import api from './../../axios/api'
import IPC from './../../../ipcCfg'
import modules from './modules'

let electron = require('electron')

Vue.use(Vuex)
let store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
store.$electron = electron
store.$IPC = IPC.INDEXIPC
store.$api = api
export default store
