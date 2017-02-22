var controller = require('../controller/status.controller');
var Router = require('koa-router');
var router = new Router({ prefix: '/status' });
router.get('/', controller.get);

module.exports = router;