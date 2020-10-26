module.exports = {
    publicPath: "./", //公共路径（必须的）
    devServer: {
        host: "0.0.0.0", //不固定ip
        port: '8080',
        open: true, //是否自动打开浏览器
        proxy: {
            //配置代理解决vue中的跨域问题
            "/api": {
                target: "http://localhost:3000/api/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}