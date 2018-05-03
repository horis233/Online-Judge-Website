var express = require('express');
var app = express();
var http = require('http');
const socketIO = require('socket.io');
const io = socketIO();
const editorSocketService = require('./services/editorSocketService')(io);

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds133249.mlab.com:33249/coj-ganqianjun');

var restRouter = require('./routes/rest.js');
var indexRouter = require('./routes/index.js');

var path = require('path');
app.use( express.static( path.join( __dirname, '../production' ) ));

app.use('/', indexRouter);

app.use('/api/v1', restRouter);

app.use( function(req, res, next) {
  res.sendFile( 'index.html', {
    root: path.join( __dirname, '../production' )
  })
})

var server = http.createServer(app);

io.attach(server);

server.on('error', onError);
server.listen(3000);
server.on('listening', onListening);

function onError(error){
    console.log('redis error');
    throw error;
}

function onListening(){
    console.log('App listening on port 3000')
}
