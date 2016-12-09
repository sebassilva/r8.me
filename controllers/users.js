var mongoose = require('mongoose'); 
var User = mongoose.model('User');

exports.getUsers = function(req, res) {  
    User.find(function(err, users) {
	    if(err) res.send(500, err.message);
	    console.log(users);
        res.status(200).jsonp(users);
	});       
};

exports.newUser = function(req, res){
	user = new User({
		name : req.body.name, 
		mail: req.body.mail, 
		rate: 0
	});
	console.log(user);
	user.save(function(err, user) {
	if(err) return res.send(500, err.message);
    res.status(200).jsonp(user);
	});
}