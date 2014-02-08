var db = require('../common/datastore/mongolab.js');

exports.listAllTopics = function (req, res) {
	//query the database for all topics
	db.Topics.find(function (err, topics) {
		if (err) {
			console.log('ERROR:' + err);
			return res.send({message: 'A server-side error occurred. Please try again later.'}, 500);
		}
		if (!topics || topics.length === 0) {
			return res.send({message: 'No topics found.'}, 400);
		}
		return res.send(topics, 200);
	});
};

exports.addATopic = function (req, res) {
	console.log(req.body);
	db.Topics.create(req.body, function (err, result) {
		if (err) {
			console.log('ERROR:' + err);
			return res.send({message: 'A server-side error occurred. Please try again later.'}, 500);
		}
		return res.send(result, 200);
	});
};

exports.updateATopic = function (req, res) {
	console.log(req.body);
	db.Topics.findById(req.body._id, function (err, topic) {
		if (err) {
			console.log('ERROR:' + err);
			return res.send({message: 'A server-side error occurred. Please try again later.'}, 500);
		}
		if (!topic || topic.length === 0) {
			return res.send({message: 'Topic not found.'}, 400);
		}

		topic.name = req.body.name;
		topic.title = req.body.title;
		topic.votes = req.body.votes;

		topic.save(function (err) {
			if (err) {
				console.log('ERROR: ' + err);
				return res.send({message: 'A server-side error occurred. Please try again later.'}, 500);
			}
			return res.send(topic, 200);
		});
	});
};