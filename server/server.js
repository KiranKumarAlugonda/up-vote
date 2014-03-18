// Module dependencies

var express = require('express');
var http = require('http');
var path = require('path');

// Route dependencies
var topics = require('./topics/topics-routes.js');

var server = express();

// all environments
server.set('port', process.env.PORT || 80);
server.set('view engine', 'jade');
server.use(express.favicon());
server.use(express.logger('dev'));
server.use(express.bodyParser());
server.use(express.methodOverride());
server.use(express.cookieParser());
server.use(express.static(path.join(__dirname, '../public')));

// development only
if ('development' == server.get('env')) {
	server.use(express.errorHandler());
}

/* This is the IE cache issue solution */
server.use(function (req, res, next) {
	//TODO: move this to a separate file
	res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
	res.header('Pragma', 'no-cache');
	res.header('Expires', 0);
	next();
});

server.use(server.router);

// Static Routes
server.get('/', function (req, res) {
	res.sendfile(path.join(__dirname, '../public/app/index.html'));
});

// API Routes
server.get('/api/topics', topics.listAllTopics);
server.post('/api/topics', topics.addATopic);
server.put('/api/topics', topics.updateATopic);
server.delete('/api/topics/:id', topics.removeATopic);

//TODO: routes for 404 and 500 pages

http.createServer(server).listen(server.get('port'), function () {
	console.log('Express server listening on port ' + server.get('port'));
});
