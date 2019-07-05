const { LinValidator, Rule } = require('../../core/lin-validator.js')

class PositiveIntegerValidator extends LinValidator{
  constructor(){
    super()
    this.id = [
      // 接收三个参数
      // 可以定义多个rule，而且是且关系
      new Rule('isInt', '需要正整数', {min:1})
    ]
  }
}

module.exports = {
  PositiveIntegerValidator
}