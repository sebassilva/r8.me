var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var mongoose = require('mongoose');
var userCtrl = require('../controllers/users.js');
=======
//var db = require('./db.js');
>>>>>>> 761fd5584662a65ff5c7060cb3dd3752187e9a1e


router.get('/', function(req, res){
	res.render('index', {title: "the madafaca API"});
});

router.post('/newUser', function(req, res){
	userCtrl.newUser(req, res);
});

router.get('/users', function(req, res){
	userCtrl.getUsers(req, res);
});
module.exports = router;