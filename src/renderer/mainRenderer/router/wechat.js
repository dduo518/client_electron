let routers = [{
  path: '/wechat',
  name: 'wechat',
  components: {
    default: require('@/components/wechat/center-content').default,
    right: require('@/components/wechat/right-content').default
  },
  meta: {
    keepAlive: true // 不需要缓存
  }
}]
module.exports = routers
