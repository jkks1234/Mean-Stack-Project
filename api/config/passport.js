 require('../data/db.js');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
mongoose = require('mongoose');
const User = mongoose.model('reach_regis');

module.exports = function(passport){
	var opts = {};
	console.log("hello");
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
	console.log(opts);
	// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = 'hello';
	console.log("hello");
	passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
		
			User.findOne({_id: jwt_payload.data._id}, function(err, user) {

				if(err){
					// console.log("test1");
					return done(err,false);
				}
				if(user){
					// console.log("test2");
					return done(null , user);
				}
				else{
					// console.log("test3");
					return done(null, false);
				}
			});
	}));
}