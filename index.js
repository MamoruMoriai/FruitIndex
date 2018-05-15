var express = require('express');
var app = express();
var data = ['apple', 'orange', 'mango', 'peach'];

app.get('/apple', function(reg, res) {
  res.send(data[0]);
});
app.get('/orange', function(reg, res) {
  res.send(data[1]);
});
app.get('/mango', function(reg, res) {
  res.send(data[2]);
});
app.get('/peach', function(reg, res) {
  res.send(data[3]);
});

app.listen(process.env.PORT || 8080);
