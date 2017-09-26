var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
var reach_regis = new mongoose.Schema(
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

    address : {
    	type:String,
    	require : true
    
  	},
  	city:
  	{
  		type : String,
  		require :true
  	},
    email:
  	{
  		type : String,
  		require :true
  	},
  	verified: 
  	{
      type: Boolean,
      default: false
    }
});
mongoose.model('reach_regis',reach_regis,'Reach_regis');