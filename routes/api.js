var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userCtrl = require('../controllers/users.js');


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