let routers = [{
  path: '/setting',
  name: 'setting',
  components: {
    default: require('@/components/setting/center-content').default,
    right: require('@/components/setting/right-content').default
  },
  meta: {
    keepAlive: true // 不需要缓存
  }
}]
module.exports = routers
