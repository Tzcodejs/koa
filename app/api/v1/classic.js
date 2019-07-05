const Router = require('koa-router')
const router = new Router()
const { HttpException, ParameterException } = require('../../../core/http-exception')
const { PositiveIntegerValidator } = require('../../validators/validator')

router.post('/v1/:id/classic/latest', (ctx, next) => {
  // 异常的处理，全局异常的处理
  const path = ctx.params
  const query = ctx.request.query
  const header = ctx.request.header
  const body = ctx.request.body

  const v = new PositiveIntegerValidator().validate(ctx)
  // 获取参数
  v.get('')

})

module.exports = router