var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

var config = JSON.parse(fs.readFileSync('server/config.json'));

var app = express();

// app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 4200));
app.use('/', express.static(__dirname + '/../dist'));
// app.use('/podio', apiRoutes);

// all other routes are handled by Angular
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
});

module.exports = app;
