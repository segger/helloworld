// server.js

// modules ===================================================
var express = require('express');
var app = express();
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
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/vnd.api+json' }));
app.use(passport.initialize());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

// routes ======================================================
require('./app/routes')(app);

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

// start app ====================================================
app.listen(port);
console.log("App listen on port " + port);

// expose app
exports = module.exports = app;
