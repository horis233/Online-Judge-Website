var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var indexRouter = require('./routes/index');
var path = require("path");

var mongoose = require('mongoose');

mongoose.connect("mongodb://user:user@ds241059.mlab.com:41059/horis-coj")
app.use(express.static(path.join(__dirname, '../public/')));
app.use('/api/v1', restRouter);
app.use('/', indexRouter);


app.listen(3000, function(){
  console.log('App listening on port 3000!')
});
