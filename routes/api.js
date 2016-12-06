var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/test');
	var db = mongoose.connection;
	db.on('error', function (err) {
	console.log('connection error', err);
	});


router.get('/', function(req, res){
	res.render('index', {title: "Welcome to rate API"});
});

router.get('/newUser/:name', function(req, res){
	var name = req.params.name;
	
	db.once('open', function () {
		console.log('connected.');
		var userSchema = mongoose.Schema({
		    name: String
		});
		var User = mongoose.model('User', userSchema);
		var usuario = new User({name: name})
		usuario.save(function (err, usuario) {
		  if (err) return console.error(err);
		});
		usuario.find(function(err, usuarios){
			console.log(usuarios)
		});
	});
	res.render('index', {title: name});

});

router.get('/users', function(req, res){
	db.once('open', function () {
		console.log('connected.');
		var usuarios = db.find();
		res.end('index', {title: usuarios});
	});
});
module.exports = router;