var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userCtrl = require('../controllers/users.js');
var postsCtrl = require('../controllers/posts.js');
//var db = require('./db.js');


router.get('/', function(req, res){
	res.render('index', {title: "the madafaca API"});
});

//Users routing
router.route('/users')

.post(function(req, res){
	userCtrl.newUser(req, res);
})

.get(function(req, res){
	userCtrl.getUsers(req, res);
});


//Posts routing
router.route('/posts')
.get(function(req, res){
	postsCtrl.getPosts(req, res);
})
.post(function(req, res){
	postsCtrl.newPost(req, res);
});
module.exports = router;