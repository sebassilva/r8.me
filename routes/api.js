var express = require('express');
var router = express.Router();
//var db = require('./db.js');


router.get('/', function(req, res){
	res.render('index', {title: "Welcome to rate API"});
});

router.get('/newUser/:name', function(req, res){
	var name = req.params.name;
	

	res.render('index', {title: name});

});

router.get('/users', function(req, res){
	var user = new User();
	var usuarios = user.find();
	res.end('index', {title: usuarios});
});
module.exports = router;