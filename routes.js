var express = require('express');
var router = express.Router();
var cities = require('./cities.json');
var _ = require('lodash');

router.get('/city', function(req, res, next) {
  const name = req.query.name;
  const city = cities.find(city => _.includes(city.description.toLowerCase(), name.toLowerCase()))
  res.json({city});
});

module.exports = router;
