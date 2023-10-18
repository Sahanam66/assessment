const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://api.minebrat.com/api/v1',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/search',
    createProxyMiddleware(proxy)
  );
};