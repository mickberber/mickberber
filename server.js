var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;
const morgan = require('morgan');

//log requests
app.use(morgan('dev'));

app.use(express.static(__dirname + '/dist'));
app.use('/src/assets', express.static(__dirname + '/src/assets'));

app.get('/', function(req, res) {
  res.send(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function() {
  console.log('Listening at :' + port);
});
