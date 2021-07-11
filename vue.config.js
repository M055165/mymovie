module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/mymovie/'
      : '/',
      devServer: {
        open: true,
        host: 'https://m055165.github.io/mymovie/',
        proxy: {
          '/api': {
            target: 'https://boiling-everglades-57930.herokuapp.com/', //对应自己的接口
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
  }
  