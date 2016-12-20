var mongoose = require('mongoose'); 
var Post = mongoose.model('Post');

exports.getPosts = function(req, res) {  
    Post.find(function(err, posts) {
	    if(err) res.send(500, err.message);
	    console.log(posts);
        res.status(200).jsonp(posts);
	});       
};

exports.newPost = function(req, res){
	post = new Post({
		title : req.body.title, 
		body: req.body.body, 
		postedBy: req.body.postedBy,
		rate: req.body.rate
	});
	console.log(post);
	post.save(function(err, post) {
	if(err) return res.send(500, err.message);
    res.status(200).jsonp(post);
	});
}