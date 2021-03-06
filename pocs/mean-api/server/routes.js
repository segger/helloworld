// app/routes.js

var Nerd = require('./models/nerd');

module.exports = function(app) {
    app.get('/api/nerds', function(req, res) {
        Nerd.find(function(err, nerds) {
            if(err) {
                res.send(err);
            }
            res.json(nerds);
        });
    });

    app.get('*', function(req, res) {
        res.sendFile('./public/index.html');
    });
};
