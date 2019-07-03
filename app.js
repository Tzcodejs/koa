const Koa = require('koa')
const InitManager = require('./core/init')

const app = new Koa()

InitManager.initCore(app)

// 根据数据类型 主题拆分

// 中间件就是一个函数

// 定义函数后使用use注册中间件

// ctx是上下文

app.use(router.routes())

app.listen(3000)