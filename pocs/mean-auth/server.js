// server.js

// modules ===================================================
var express = require('express');
var app = express();
//var router = express.Router();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var jwt = require('jwt-simple');

// configuration ==============================================
// database
var db = require('./config/db');
var port = process.env.PORT || 9008
mongoose.connect(db.url);
require('./config/passport')(passport);

// application
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/vnd.api+json' }));
app.use(passport.initialize());
app.use(methodOverride('X-HTTP-Method-Override'));

// routes ======================================================

//app.use('/api', require('./app/routes/api')(router));
//app.use('/auth', require('./app/routes/')(app));
//app.use('/default', require('./app/routes/default'));
require('./app/routes')(app);

app.get('*', function(req, res) {
    res.sendFile('./public/index.html');
});

// start app ====================================================
app.listen(port);
console.log("App listen on port " + port);

// expose app
exports = module.exports = app;
