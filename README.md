## pc桌面应用

#### 登陆框

<img src='./static/TIM截图20180113101437.png' width=580 height=302 />

#### 主功能系统区

<img src='./static/TIM截图20180114011918.png' width=1587 height=600 />

* nodb 做本地数据库 

* vue-electron vue集成electron 脚手架

* element-ui 前端ui库

* vuex 状态管理

* vue-router 路由管理

#### 文件目录结构 client文件

`````
├── client
│   └── src
|       ├── main  // 主进程文件
|       |   ├── configs
|       |   ├── ipc // ipc 通讯模块
|       |   ├── utils // 工具库
|       |   ├── store // 数据统一管理
|       |   ├── index.js 
|       |   └── index.dev.js
|       ├── renderer  // 渲染进程文件
|       |   ├── assets // 渲染进程共享资源文件
|       |   ├── login  // 登陆窗体渲染进程
|       |   └── mainRenderer  // 主渲染进程
|       ├── apiUrl.js // api 配置文件，俩个进程共享 
|       ├── index.ejs // 渲染进程模板文件
|       └── ipcCfg.js // 主进程与渲染进程 ipc 通讯 共享 channel
├── README.md
└── package.json
`````
#### 开发环境启动
`````
$ npm i
$ npm run dev
`````
#### 主进程与渲染进程通讯
该应用最为复杂的就是关于主进程与渲染进程之间的通讯，还有当多个渲染进程的时候如何在俩个或多个渲染进程之间通讯
通讯有主动方式也有被动的方式，在electron 进程中主要的通讯还是ipc 主进程用ipcMain 渲染进程是ipcRenderer.
在这里主要还是用ipc 发送/接收信号(channel)的方式进行，为了更好的统一管理信号，所有的信号都统一在ipcCfg.js注册，然后主进程中在ipc文件夹里面进行处理，
在渲染进程中，如果有用到vuex的进程那么统一在store中作为发送接收处理通道。

#### 应用打包
```
$ yarn run build  // 不要用npm 用npm 会报错

```