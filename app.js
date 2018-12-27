var express = require('express');
var app = express();

// root
app.get('/', function(req, res){
  console.log('Someone visited root directory');
  res.send('Hi there, welcome to my assignment');
});

// Tell express to listen for requests (start server)
app.listen('8080', '127.0.0.1', function(){
  console.log('Server has started');
});

// For cloud9
// app.listen(process.env.PORT, process.env.IP);