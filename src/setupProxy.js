const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/oauth2/authorization/google', {
            target: 'http://localhost:7777/',
            changeOrigin: true
        })
    );
};