const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/js', {
      target: 'https://www.jianshu.com/asimov',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '^/js': '' },
    })
  )
  app.use(
    createProxyMiddleware('/zhi', {
      target: 'https://news-at.zhihu.com/api/4',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '^/zhi': '' },
    })
  )
}
