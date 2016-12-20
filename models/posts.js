exports = module.exports = function(app, mongoose) {
	var PostSchema = new mongoose.Schema({
		title: 		{type: String }, 
		body: 		{type: String},
		postedBy:   {type: String},  
		rate: 		{type: Number}, 
	});

	mongoose.model('Post', PostSchema);
};
