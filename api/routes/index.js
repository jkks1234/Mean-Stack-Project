var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var users = require('../data/reach_regis');
var article=mongoose.model('article');
var passport = require('passport');
var jwt = require('jsonwebtoken');


router.get('/',(req,res)=>
{
	res.send('hi there');

});

router.post('/addone',(req,res)=>
{
	if(req.body.name!=null && req.body.phonenumber!=null && req.body.email!=null && req.body.password!=null){
	users.findOne({email:req.body.email },function(err,user)
	{
		if(user)
		{
			res.status(200)
			   .json({succes : false,msg :'email already exists'});

		}
	

else{
	users.create({

		name :req.body.name,
		phonenumber : req.body.phonenumber,
		email : req.body.email,
		password : req.body.password,
		
	},function(err,users)
	{
		if(err)
		{
			res
			   .json({success : false,msg :'failed to Register'});

		}
		else
		{
			res.json({success : true,msg :'User registered'});
		}

	});
}
});
}
});

router.post('/login',(req,res)=>
{
	var email = req.body.email;
	var	password = req.body.password;
	
	users
		.findOne({
			email : req.body.email,
			password : req.body.password
		},function(err,users)
		{
			if(err)
			{
				res
				   .json({success : false,msg :'ERROR OCCURED'});
			}
			else
			{
				var token = jwt.sign({data:users},'hello', {
          			expiresIn: 604800 	// expires in 24 hours
       				 });
				res.json({
					success:true,
					token:'JWT '+token,
					user:{
						id:users._id,
						name:users.name,
						email:users.email
					}
				})
			}
		});
	
});

router.get('/showall',(req,res)=>
{

	article
		.find({}).sort({createdon: -1}).exec(function(err,articles)
		{
			if(err){
				console.log('err in finding :'+ err);
				res
				  .status(500)
				  .json(err);
			}
			else{
				console.log("found "+articles.length +"articles");
				console.log(articles);
				res
				  .json(articles);
			}
		});
});

router.get('/showone',passport.authenticate('jwt',{session:false}),(req,res)=>
{

	users.getUserById(req.user._id,function(err,person)
		{console.log(person);

			if(err)
			{
				console.log(err);
			}
			else
			{
				console.log(person.email);
				  article
						.find({email:person.email})
						.exec(function(err,articles)
						{
							if(err){
								console.log('err in finding :'+ err);
								res
								  .status(500)
								  .json(err);
							}
							else{
								console.log("found "+articles.length +"articles");
								res
								  .json(articles);
							}
						})
			}
		});
});

router.post('/addarticle',passport.authenticate('jwt',{session:false}),(req,res)=>
{
	console.log('it worked '+req.user._id);
	var a,b;
	users.getUserById(req.user._id,function(err,person)
		{
			if(err)
			{
				console.log(err);
			}
			else
			{
				article
					.create({
						title : req.body.title,
						body  :req.body.body,
						name  :person.name,
						email :person.email
					},function(err,articles)
					{
						if(err)
						{
							console.log('error creating article :'+err);
							res
								.status(400)
								.json(err);
						}
						else{
							console.log('article created successfully',articles);
							res
							  .status(200)
							  .json(articles);
						}
					});
			}
		});
	
});

router.get('/delete/:id',passport.authenticate('jwt',{session:false}),(req,res)=>
{
	var t=req.params.id;
	console.log(t);
	article
		.deleteOne({"_id":t},function(err,article)
		{
			if(err)
			{
				res
				   .json({ success : false,msg :err});
			}
		else
			{
				res
				   .json({ success : true , article:article});
			}
		});
		
	
});
router.get('/listone/:id',(req,res)=>{
	var t=req.params.id;
	article.findById(t,function(err,article)
	{
		if(err)
			{
				res
				   .json({ success : false,msg :'ERROR OCCURED'});
			}
		else
			{
				res
				   .json({ success : true , article:article});
			}
	})
});

module.exports =router;