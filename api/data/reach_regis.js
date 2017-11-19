var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
var User = new mongoose.Schema(
{
	name:
	{
		type :String,
		require :true
	},
	phonenumber:
	{
		type : Number,
		require :true
	},

  	password:
  	{
  		type : String,
  		require :true
  	},
    email:
  	{
  		type : String,
  		require :true
  	},
});
const user = module.exports = mongoose.model('reach_regis',User,'user');

module.exports.getUserById = function(id,callback){
	user.findById(id,callback);
}
module.exports.getUserByUsername = function(username,callback){
	const query={username:username};

	user.findOne(query,callback);
}