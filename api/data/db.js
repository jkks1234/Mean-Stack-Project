var mongoose = require('mongoose');
var dburl = 'mongodb://52.88.1.241:28000/reach';
var retry = null;
mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dburl);
});

require('./reach_doc.model');
require('./reach_regis');