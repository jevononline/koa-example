var controller = require('../controller/role.controller');
var Router = require('koa-router');
var router = new Router({ prefix: '/role' });
router.get('/', controller.page);
router.put('/', controller.add);
router.post('/:roleId', controller.edit);

module.exports = router;