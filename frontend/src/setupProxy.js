const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: 'https://casa-de-backend.cyclic.app',
      changeOrigin: true,
    })
  );
};
