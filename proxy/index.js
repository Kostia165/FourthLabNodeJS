var userService = require('./service');
// index.js
var express = require('express');
var app = express();
var request = require('request');
var config = require('./config.js');

app.get('/', function(req, res) {
    request('http://' + config.get('ip') + ':' + config.get('port') +'/' , function(error, response, body) {
        res.send(body);
    });
});

app.get('/:name', function(req, res) {
    var userInstance = new userService();
    res.send(userInstance.authorizate(req.params.name));
});

module.exports.app = app
