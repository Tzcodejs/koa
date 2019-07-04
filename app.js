const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')

const app = new Koa()

// 根据数据类型 主题拆分

// 中间件就是一个函数

// 定义函数后使用use注册中间件

// ctx是上下文
app.use(parser())
app.use(catchError)
InitManager.initCore(app)

app.listen(3000)