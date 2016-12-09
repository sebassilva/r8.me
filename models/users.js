exports = module.exports = function(app, mongoose) {
	var UserSchema = new mongoose.Schema({
		name: 		{type: String }, 
		mail: 		{type: String}, 
		rate: 		{type: Number}
	});

	mongoose.model('User', UserSchema);
};
