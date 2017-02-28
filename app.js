'use strict'

var express = require('express');

var app = express();

app.use(express.static('build'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  // res.render('index');
  res.render("index");
});



app.listen(3000, function(){
  console.log("The server is running on port 3000.");
});
