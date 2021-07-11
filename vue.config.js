module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/mymovie/'
      : '/',
      devServer: { proxy: { '/api': { target: 'https://boiling-everglades-57930.herokuapp.com/', changeOrigin: true, ws: true, pathRewrite: { '^/api':  'https://m055165.github.io/mymovie/', } } }
    }
  }
  