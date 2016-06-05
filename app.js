var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/crud', function(req, res) {
  res.send('Goodbye World!');
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});

