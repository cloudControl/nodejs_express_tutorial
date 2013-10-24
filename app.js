
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
  res.render('index', { title: 'Express' });
});

app.get('/check/:url/:db?', function(req, res) {
	var url = req.params.url;
	var db = req.params('db', '');
	res.send(200, 'Database detected.');
	res.send(404, 'No database detected.');
});

app.get('/db', function(req, res) {
	res.send(200, 'Database detected.');
	res.send(404, 'No database detected.');
});

app.get('/step', function(req, res) {
	res.redirect('/');

});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
