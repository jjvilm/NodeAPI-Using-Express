var express = require('express');
var router = express.Router();

const indexController = require('../controllers/index.js');

/* GET weather API information */
router.get('/', function (req, res, next) {
  res.send(indexController.indexPage(req, res));
});

module.exports = router;
