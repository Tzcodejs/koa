const Sequelize = require('sequelize')
const {
  dbName,
  host,
  port,
  user,
  password 
} = require('../config/config').database

// dbname,user,password,{}
const sequelize = new Sequelize(dbName, user, password, {
  dialect:'mysql',
  host:host,
  port:port,
  // 显示原生sql
  logging:true,
  // 时区
  timezone:'+08:00',
  define:{
    // create_time update_time delete_time
    timestamps:true,
    paranoid:true,
    createdAt:'created_at',
    updatedAt:'updated_at',
    deletedAt:'deleted_at',
    underscored:true
  }
})

sequelize.sync({
  // 会删除原表数据，添加字段(开发阶段可以打开)
  force:false
})

module.exports = {
  sequelize
}