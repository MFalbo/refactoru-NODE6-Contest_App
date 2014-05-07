var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser());

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


var submissions = [];

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/submit', function(req, res) {
	res.render('submit', {submissions: submissions});
});

app.post('/formsubmit', function(req, res){
	submissions.push(req.body);
	res.redirect('/submissions');
});

app.get('/submissions', function(req, res) {
	res.render('submissions', {submissions:submissions});
});

app.get('/winners', function(req, res) {
	res.render('winner');
});

var server = app.listen(6920, function() {
	console.log('Express server listening on port ' + server.address().port);
});
