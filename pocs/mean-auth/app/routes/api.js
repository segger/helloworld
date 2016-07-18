// app/routes/api.js
var express = require('express');
var apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
  res.send('api home');
});

module.exports = apiRouter;
