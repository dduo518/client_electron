import Vue from 'vue'

import App from './App'
import router from './router'
import IPC from './../../ipcCfg'
import Api from './../../apiUrl'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

// Vue.http = Vue.prototype.$http = axios
Vue.http = Vue.prototype.$api = Api

Vue.config.productionTip = false

// 引入通讯
Vue.prototype.$_IPC = IPC.LOGINIPC

require('./../mock.js')

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
