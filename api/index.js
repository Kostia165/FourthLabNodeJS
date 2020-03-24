// index.js
var express = require('express');
var app = express();

app.route('/').get(function (req, res){
	res.send('Hello World!');
});

module.exports.app = app