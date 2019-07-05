const { HttpException } = require('../core/http-exception')
// 中间件本质上就是一个函数 
// 全局异常监听AOP面向切面编程
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    // HTTP Status 2xx 4xx 5xx
    // message
    // error_code
    // request_url
    // 判断是生产环境还是开发环境
    if(global.config.environment === 'dev'){
      throw error
    }
    
    if(error instanceof HttpException){
      // 已知异常
      ctx.body = {
        msg:error.msg,
        error_code:error.errorCode,
        request:`${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    }else{
      // 未知异常
      ctx.body = {
        msg:'mistake',
        error_code:999,
        request:`${ctx.method} ${ctx.path}`
      }
      ctx.status = 500
    }
  }
}

module.exports = catchError