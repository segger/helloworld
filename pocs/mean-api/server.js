// server.js

// modules ================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// configuration ==========================
var db = require('./config/db');
var port = process.env.PORT || 9005;
mongoose.connect(db.url);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.ap+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

// routes ==================================
app.use(express.static(__dirname + '/public'));
require('./server/routes')(app);

app.listen(port);
console.log('mean-api up on port ' + port);

exports = module.exports = app;
