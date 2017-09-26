var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
var reach_docSchema = new mongoose.Schema(
{
	name:
	{
		type :String,
		require :true
	},
	email:
	{
		type :String,
		require : true
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
	password :
	{
		type :String,
		require :true
	},
	lat :
	{
		 type: SchemaTypes.Double
		
	},
	lon :
	{
		 type: SchemaTypes.Double
		
	}
});
mongoose.model('reach_doc',reach_docSchema,'Reach_doc');