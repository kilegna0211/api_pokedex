var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');

mongoose.connect('mongodb://localhost/pokedex');

var app = express();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

//configuration templating
nunjucks.configure('views', {
  autoescape: true,
  express: app
})

console.log('pokedex lancé');
app.listen(3000);
