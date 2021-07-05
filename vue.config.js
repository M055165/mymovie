module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/mymovie/'
      : '/',
      devServer: {
        proxy: {
          '/api': {
            target: 'http://192.168.0.12:8800/', //对应自己的接口
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
  }
  