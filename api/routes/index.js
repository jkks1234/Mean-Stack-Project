var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var hospital = mongoose.model('reach_regis');
var reachdoc = mongoose.model('reach_doc');
 
router.get('/',(req,res)=>
{
	res.send('hi there');

});

router.post('/addone',(req,res)=>
{

	hospital.create({
		name :req.body.name,
		phonenumber : req.body.phonenumber,
		email : req.body.email,
		city : req.body.city,
		address : req.body.address
	},function(err,hospital)
	{
		if(err)
		{
			res.status(400)
			   .json(err);
		}
		else
		{
			res.json(hospital);
		}

	});

});

router.post('/login',(req,res)=>
{
	reachdoc
		.findOne({
			email : req.body.email,
			password : req.body.password
		},function(err,doc)
		{
			if(err)
			{
				res.status(400)
				   .json(err);
			}
			else
			{
				res.status(200)
				   .json(doc);
			}
		});
});


module.exports =router;