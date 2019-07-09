// 重命名
const { sequelize } = require('../../core/db')
const { Sequelize, Model } = require('sequelize')

// 定义一个模型
class User extends Model{}

// 新建表
User.init({
  // 主键字段去区别用户，不能重复，不能为空
  // 数字的查询性能是最好的，但是如果使用数字遇到并发会遇到计算重复的情况

  // 接口鉴权 比如Token

  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    // 自增长
    autoIncrement:true
  },
  nickname:Sequelize.STRING,
  email:{
    type:Sequelize.STRING(128),
    unique:true
  },
  password:Sequelize.STRING,
  openid:{
    type:Sequelize.STRING(64), //64是长度
    unique:true
  }
  // 微信小程序openid是唯一不变的，但是换了小程序就会变
  // 也有一个唯一的id，就是 unionid
},{
  sequelize,
  tableName:'user'
})

module.exports = {
  User
}