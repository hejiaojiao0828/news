module.exports = {
 
  // whether to use eslint-loader
  lintOnSave: true,

  devServer: {
    // open: process.platform === 'darwin',
    // host: '0.0.0.0',
    port: 8080,
    open: true,
    // https: false,
    // hotOnly: false,
    // proxy: null, // string | Object
    // proxy: 'http://localhost:3000',
    proxy: {//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api':{//axios访问 /api ==  target + /api  
        target:'http://localhost:3000',
        changeOrigin:true,//创建虚拟服务器 
        // ws:true,//websocket代理
      }
    }
    // before: app => {}
 
  }
}