module.exports = function(){
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name: String
});

return mongoose.model('User', userSchema);
}