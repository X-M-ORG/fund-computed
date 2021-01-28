module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:4001'
      }
    }
  }
}
