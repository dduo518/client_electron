let routers = [{
  path: '/teacher',
  name: 'teacher',
  components: {
    // default: require('@/components/teacher/center-content').default,
    right: require('@/components/teacher/right-content').default
  },
  meta: {
    keepAlive: true // 不需要缓存
  }
}]
module.exports = routers
