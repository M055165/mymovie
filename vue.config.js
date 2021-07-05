module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vuemovie/'
      : '/',
      devServer: {
        proxy: {
          '/api': {
            target: 'https://serene-big-bend-98628.herokuapp.com/', //对应自己的接口
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
  }
  