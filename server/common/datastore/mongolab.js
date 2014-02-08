'use strict';

// Load modules
var mongo = require('mongodb')
	, mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, ObjectId = mongoose.SchemaTypes.ObjectId
	, mongooseTypes = require('mongoose-types');

// Load models
var Topics = require('../../topics/topics-model.js');

function Models() {
	var self = this;
	this.Topics = Topics;
	var options = {
		user: 'web-app',
		pass: '36hjd;pq24y-kgasw-035uad',
		server: {keepAlive: 1}
	}
	mongoose.connect('mongodb://@ds027759.mongolab.com:27759/up-vote', options);
	this.connection = mongoose.connection;
};

module.exports = new Models();



