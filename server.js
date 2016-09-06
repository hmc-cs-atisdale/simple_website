var express = require("express");
var server = require('http').createServer(app)
var app = express();
var viewpath = __dirname + '/views/';

app.get('/', function (req, res) {
  res.render(viewpath + 'index.jade',
  { title : 'Home' }
  )
})

app.listen(3005,function(){
  console.log("Live at Port 3005");
});
