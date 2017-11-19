var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/Article';
var retry = null;
mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dburl);
});

require('./articles.model');
	
require('./reach_regis');