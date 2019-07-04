const requireDirectory = require('requireDirectory')
const Router = require('koa-router')

class InitManager{
    // 入口方法
    static initCore(app){
        InitManager.app = app
        InitManager.initLoadRouters()
    }

    static initLoadRouters(){
        // 可以通过process.cwd()拿到绝对路径
        const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module, apiDirectory,{
            visit:whenLoadMoule
        })
        
        // 循环注册路由
        function whenLoadMoule(){
            if(obj instanceof Router){
                InitManager.app.use(obj.routes())
            }
        }
    }
}

module.exports = InitManager