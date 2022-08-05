const router  = require('express').Router();
const controller = require('../controller/index');

//rutas
router.get('/', controller.news);
router.get('/article/', controller.newsdesc)

module.exports = router;