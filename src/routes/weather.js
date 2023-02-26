var express = require('express');
var router = express.Router();

const weatherController = require('../controllers/weatherControl.js');

/* GET weather API information */
router.get('/', function (req, res, next) {
  res.send(weatherController.current_weather(req, res));
});

module.exports = router;
