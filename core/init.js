const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager{
    // 入口方法
    static initCore(app){
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.loadConfig()
    }

    // 导入配置文件
    static loadConfig(path = ''){
        const configPath = path || process.cwd() + '/config/config.js'
        const config = require(configPath)
        global.config = config
    }

    static initLoadRouters(){
        // 可以通过process.cwd()拿到绝对路径
        const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module, apiDirectory,{
            visit:whenLoadMoule
        })
        
        // 循环注册路由
        function whenLoadMoule(obj){
            if(obj instanceof Router){
                InitManager.app.use(obj.routes())
            }
        }
    }
}

module.exports = InitManager