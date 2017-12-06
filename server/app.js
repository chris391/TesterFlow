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

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database: 'bruger_ci_dev'
// });
//
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//
//   console.log('connected as id ' + connection.threadId);
// });

app.get('/languages', function (req, res) {

  console.log('jhei');
  // connection.query('SELECT * FROM languages', function (error, results, fields) {
  //   if (error) throw error;
  //
  //   console.log(results);
  //   // res.json(results);
  //   // results.json(docs);
  // });
});


module.exports = app;
