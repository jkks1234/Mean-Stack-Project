var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema(
{
	title:
	{
		type :String,
		require :true
	},
	body :
	{
		type :String,
		require :true
	},
	createdon:{
		type :Date,
		"default": Date.now
	},
	name:
	{
		type :String,
		require :true
	},
	email:
  	{
  		type : String,
  		require :true
  	}
	
});
mongoose.model('article',articleSchema,'articlet');