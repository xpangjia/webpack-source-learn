var webpack = require('../node_modules/webpack')  // 直接使用源码中的webpack函数
var options = require('./webpack.config')
var compiler = webpack(options)
compiler.run((err, stats) => {
    if (compiler.close) {
        compiler.close(err2 => {
            console.error("stats")
            console.error(stats)
        });
    } else {
        console.error("err")
        console.error(err)
        console.error("=====")
        console.error(err, stats)
    }
})

