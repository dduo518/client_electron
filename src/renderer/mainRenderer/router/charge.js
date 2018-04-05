let routers = [{
  path: '/charge',
  name: 'charge',
  components: {
    default: require('@/components/charge/center-content').default,
    right: require('@/components/charge/right-content').default
  },
  meta: {
    keepAlive: true // 不需要缓存
  }
}]
module.exports = routers
