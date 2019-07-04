// 继承内置的对象
class HttpException extends Error {
  // 接收用户传递进来的参数
  constructor(msg = '服务器异常', errorCode = 10000, code = 400) {
    super()
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
  }
}

// 具体的异常类
class ParameterException extends HttpException{
  constructor( msg, errorCode ){
    super()
    this.code = 400
    this.msg = msg || '参数错误'
    this.errorCode = errorCode || 10000
  }
}

module.exports = { HttpException, ParameterException }