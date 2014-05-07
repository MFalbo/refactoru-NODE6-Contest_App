var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/submit', function(req, res) {
	res.render('submit');
});

app.post('/formsubmit', function(req, res){
	res.redirect('/success');
});

app.get('/success', function(req, res) {
	res.send('<h1>Congratulations Your Video Has Been Submitted!!!</h1><a href="/">Return Home</a>');
});

app.get('/submissions', function(req, res) {
	res.render('submissions');
});

app.get('/winners', function(req, res) {
	res.render('winner');
});

var server = app.listen(6920, function() {
	console.log('Express server listening on port ' + server.address().port);
});
