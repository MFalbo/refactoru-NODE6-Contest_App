var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser());

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


var submissions1 = [];
var submissions2 = [];

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/submit', function(req, res) {
	res.render('submit', {submissions1: submissions1, submissions2: submissions2});
});

app.post('/formsubmit', function(req, res){
	if(submissions1.length > 4){
		submissions2.push(req.body);
	}
	else{
		submissions1.push(req.body);
	}
	res.redirect('/submissions');
});

app.get('/submissions', function(req, res) {
	res.render('submissions', {submissions1: submissions1, submissions2: submissions2});
});

app.get('/winners', function(req, res) {
	res.render('winner');
});


var port = process.env.PORT || 6920;

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
