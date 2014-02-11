'use strict';

/** Schema for documents **/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicsSchema = new Schema({
	name: {
		first: {type: String, default: null},
		last: {type: String, default: null}
	},
	title: {type: String, default: null},
	month: {type: String, default: null},
	votes: {type: Number, default: 0}
});

module.exports = mongoose.model('Topics', TopicsSchema);