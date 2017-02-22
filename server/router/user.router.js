var controller = require('../controller/user.controller');
var Router = require('koa-router');
var router = new Router();
router.get('/user', controller.page);
router.put('/user', controller.add);
router.get('/user/:userId', controller.findById);
router.post('/user/:userId', controller.edit);


module.exports = router;