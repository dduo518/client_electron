let routers = [{
  path: '/student',
  name: 'student',
  components: {
    default: require('@/components/student/center-content').default
  },
  meta: {
    keepAlive: false // 不需要缓存
  },
  children: [
    {
      path: '/addStudent/:user_id',
      name: 'addStudent',
      components: {
        addPage: require('@/components/student/addPage').default
      },
      props: true
    }
  ]
}
]
module.exports = routers
