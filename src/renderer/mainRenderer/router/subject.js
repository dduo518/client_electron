let routers = [{
    path: '/subject',
    name: 'subject',
    components: {
        default: require('@/components/subject/center-content').default,
        right: require('@/components/subject/right-content').default
    },
    meta: {
        keepAlive: true // 不需要缓存
    },
    children: [{
        path: '', component: require('@/components/subject/todayManage').default 
    }, {
        path: 'todayManage',
        components: {
            childSubject: require('@/components/subject/todayManage').default
        }
    }, {
        path: 'teacherManage',
        components: {
            childSubject: require('@/components/subject/teacherManage').default
        }
    }, {
        path: 'subjectManage',
        components: {
            childSubject: require('@/components/subject/subjectManage').default
        }
    }, {
        path: 'awaitDo',
        components: {
            childSubject: require('@/components/subject/awaitDo').default
        }
    }, {
    path: 'awaitManage',
    components: {
        childSubject: require('@/components/subject/awaitManage').default
            }
        }]
}]
module.exports = routers
