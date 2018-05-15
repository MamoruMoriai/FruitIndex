var express = require('express');
var app = express();
var data = ['apple', 'orange', 'mango', 'peach'];

app.get('/apple', function(reg, res) {
  res.send('Apple Index : ' + String(data.indexOf('apple')));
});
app.get('/orange', function(reg, res) {
  res.send('Orange Index : ' + String(data.indexOf('orange')));
});
app.get('/mango', function(reg, res) {
  res.send('Mango Index : ' + String(data.indexOf('mango')));
});
app.get('/peach', function(reg, res) {
  res.send('Peach Index : ' + String(data.indexOf('peach')));
});

app.listen(process.env.PORT || 8080);
