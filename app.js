require('./api/data/db.js');
var express = require('express');
var app     = express();
var port    = process.env.PORT || 2217;
var path = require('path');
var bodyParser= require('body-parser');
var cors = require('cors');
var passport = require('passport');
var route   = require('./api/routes');

app.use(cors());
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended : false}));
app.use(passport.initialize());
app.use(passport.session());

require('./api/config/passport')(passport);

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/fonts', express.static(__dirname + '/fonts'));

//app.use('/uploads/showPhoto', express.static('./uploads'))

app.use('/api',route);

app.listen(port);

console.log('successfully connected to port '+ port );