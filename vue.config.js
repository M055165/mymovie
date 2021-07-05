module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vuemovie/'
      : '/',
      devServer: {
        proxy: {
          '/api': {
            target: 'https://radiant-headland-78801.herokuapp.com/', //对应自己的接口
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
  }
  