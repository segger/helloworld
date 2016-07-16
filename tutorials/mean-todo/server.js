// set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration
//mongoose.connect('mongodb://localhost:27017/meandb');
var db = mongoose.connect('mongodb://127.0.0.1/mean-todo-db');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/vnd.api+json' }));
app.use(methodOverride());

// model
var Todo = mongoose.model('Todo', {
    text : String
});

// routes
// api
app.get('/api/todos', function(req, res) {
    Todo.find(function(err, todos) {
        if(err)
          res.send(err);
        res.json(todos);
    });
});

app.post('/api/todos', function(req, res) {
    Todo.create({
        text : req.body.text,
        done : false
    }, function(err, todo) {
        if(err)
          res.send(err);
        Todo.find(function(err, todos) {
            if(err)
              res.send(err);
            res.json(todos);
        });
    });
});

app.delete('/api/todos/:todo_id', function(req, res) {
    Todo.remove({
        _id : req.params.todo_id
    }, function(err, todo) {
        if(err)
            res.send(err);
        Todo.find(function(err, todos) {
            if(err)
                res.send(err);
            res.json(todos);
        });
    });
});

// application
app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

// start
app.listen(9090);
console.log("App listen on port 9090");
