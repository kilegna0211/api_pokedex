var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');

require('./api/models/Pokemon');
require('./api/models/Type');

mongoose.connect('mongodb://localhost:27017/pokedex');

var app = express();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/', require('./api/routes/pokemons'));
app.use('/types', require('./api/routes/types'));

//configuration templating
nunjucks.configure('views', {
  autoescape: true,
  express: app
})

console.log('pokedex lancé');
app.listen(3000);
