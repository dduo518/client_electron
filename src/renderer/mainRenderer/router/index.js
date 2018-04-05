import Vue from 'vue'
import Router from 'vue-router'
import subject from './subject'
import charge from './charge'
import student from './student'
import teacher from './teacher'
import setting from './setting'
import wechat from './wechat'
Vue.use(Router)
let routers = [
  {
    path: '/',
    name: 'index',
    components: {
      default: require('@/components/index/center-content').default
    },
    meta: {
      keepAlive: true // 不需要缓存
    }
  }, {
    path: '*',
    redirect: '/'
  }
]
routers.push(...subject)
routers.push(...charge)
routers.push(...student)
routers.push(...setting)
routers.push(...wechat)
routers.push(...teacher)

const router = new Router({
  routes: routers
})

export default router
