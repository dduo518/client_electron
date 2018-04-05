// 引入mockjs
const Mock = require('mockjs')

const apiUrl = require('./../apiUrl')
let url = apiUrl.url + apiUrl.auth + apiUrl.version + apiUrl.router

// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceNewsData = function () {
  let articles = []
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }

  return {
    articles: articles
  }
}
// mock login
const login = function () {
  return {
    data: {
      access_token: 'access_token',
      success: true,
      data: {
        username: 'z_chong'
      }
    }
  }
}
const studentLists = function (data) {
  let lists = []
  let limit = 10
  let page = 1
  let params = data.body
  if (params) {
    limit = JSON.parse(params).limit
    page = JSON.parse(params).page
  };
  for (var i = 0; i < limit; i++) {
    let list = {
      user_id: Random.id(),
      name: Random.cname(),
      teacher: {
        user_id: Random.id(),
        value: Random.cname()
      },
      subject: {
        user_id: Random.id(),
        value: Random.cname()
      },
      parent: Random.cname(),
      class: 40,
      remainClass: Random.integer(1, 40)
    }
    lists.push(list)
  }
  return {
    success: true,
    data: {
      paging: {
        total: 50,
        page: page,
        limit: limit
      },
      data: lists
    }
  }
}

const getstudent = function (data) {
  let user = JSON.parse(data.body)
  return {
    data: {
      name: Random.cname(),
      user_id: user.user_id,
      phone: Random.email(),
      parentname: Random.cname(),
      parentphone: Random.integer(),
      subject: {
        id: Random.id(),
        value: Random.cname()
      },
      sex: 1,
      teacher: {
        id: Random.id(),
        value: Random.cname()
      },
      level: '',
      note: '',
      remainClass: 20,
      class: 40,
      time: Random.date(),
      birthday: Random.date('yyyy-MM-dd'),
      address: Random.county(true),
      age: ''
    },
    success: true
  }
}

// 启动的时候获取缓存
const gobalCache = function (data) {  
  let teachers = []
  let subjects = []
  let sales = []

  for (let i = 0; i < 6; i++) {
    let _teacher = {}
    _teacher.id = Random.id()
    _teacher.name = Random.cname()
    teachers.push(_teacher)
    let _subject = {}
    _subject.id = Random.id()
    _subject.name = Random.cname()
    subjects.push(_subject)
    let _sale = {}
    _sale.id = Random.id()
    _sale.name = Random.cname()
    sales.push(_sale)
  };

  return {
    teachers: teachers,
    subjects: subjects,
    sales: sales
  }
}
const addstudent = function (data) {
  return {
    success: true
  }
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData)
Mock.mock(url + '/login', 'post', login)
Mock.mock(url + '/studentLists', 'post', studentLists)
Mock.mock(url + '/getstudent', 'post', getstudent)
Mock.mock(url + '/gobalCache', 'post', gobalCache)
Mock.mock(url + '/addstudent', 'post', addstudent)
