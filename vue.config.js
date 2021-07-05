module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/mymovie/'
      : '/',
      devServer: {
        proxy: {
          '/api': {
            target: 'https://mysterious-springs-00009.herokuapp.com/', //对应自己的接口
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
  }
  