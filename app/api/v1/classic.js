const Router = require('koa-router')
const router = new Router()
const { HttpException, ParameterException } = require('../../../core/http-exception')
const { PositiveIntegerValidator } = require('../../validators/validator')

router.post('/v1/:id/classic/latest', async (ctx, next) => {
  
  // 用户系统
  // 账号，密码，附属信息，昵称，email，手机
  // 注册，登录
  // MongonDB 存储js对象，文档型数据库
  // Redis Key：value 主要用来做缓存


  // 异常的处理，全局异常的处理
  const path = ctx.params
  const query = ctx.request.query
  const header = ctx.request.header
  const body = ctx.request.body

  const v = await new PositiveIntegerValidator().validate(ctx)
  // 获取参数
  v.get('')

})

module.exports = router