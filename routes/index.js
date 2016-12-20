var express = require('express');
var router = express.Router();
var path = require('path');
//var api = require('api.js');


router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../r8/index.html'));
});


module.exports = router;
