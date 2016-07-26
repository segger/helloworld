// app/routes/auth.js
var express = require('express');
var authRouter = express.Router();
var User = require('../models/user');
var db = require('../../config/db');
var passport = require('passport');
var jwt = require('jwt-simple');

authRouter.post('/signup', function(req, res) {
  if(!req.body.name || !req.body.password) {
    res.json({
      success: false,
      msg: 'Name and password needed'
    });
  } else {
    var newUser = new User({
      name: req.body.name,
      password: req.body.password
    });

    newUser.save(function(err) {
      if(err) {
        return res.json({
          success: false,
          msg: 'Name already exists'
        });
      }
      res.json({
        success: true,
        msg: 'Successful created new user'
      });
    });
  }
});

authRouter.post('/authenticate', function(req, res) {
  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if(err) throw err;
    if(!user) {
      res.send({
        success: false,
        msg: 'Authentication failed. User not found'
      });
    } else {
      console.log("user exists");
      user.comparePassword(req.body.password, function(err, isMatch) {
        if(isMatch && !err) {
          var token = jwt.encode(user, db.secret);
          res.json({
            success: true,
            token: 'JWT ' + token
          });
        } else {
          res.send({
            success: false,
            msg: 'Authentication failed'
          });
        }
      });
    }
  })
});

getToken = function(headers) {
  if(headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if(parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
}

authRouter.get('/memberinfo', passport.authenticate('jwt', {session: false}), function(req, res) {
  var token = getToken(req.headers);
  if(token) {
    var decoded = jwt.decode(token, db.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
      if(err) throw err;
      if(!user) {
        return res.status(403).send({
          success: false,
          msg: 'Authentication failed'
        });
      } else {
        res.json({
          success: true,
          msg: 'Welcome in!'
        });
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      msg: 'No token present'
    });
  }
})

module.exports = authRouter;
