const Router = require('koa-router')
const router = new Router()
const { HttpException, ParameterException } = reqiure('../../../core/http-exception')
const { PositiveIntegerValidator } = require('../../validators/validator')

router.post('/v1/:id/classic/latest', (ctx, next) => {
  // 异常的处理，全局异常的处理
  const path = ctx.params
  const query = ctx.request.query
  const header = ctx.request.header
  const body = ctx.request.body

  if(true){
    const error = new HttpException('为什么错误', 10001, 400)
    throw error
  }
})

module.exports = router