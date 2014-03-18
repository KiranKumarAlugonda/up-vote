'use strict';

angular.module('topicsModule', [])

/** Controllers **/
	.controller('topicsController', ['$scope', 'topicsService', function ($scope, topicsService) {
		// Namespace object for variables and functions
		$scope.topicsControllerNS = {};

		// variables
		$scope.topicsControllerNS.title = 'Topics List';
		$scope.topicsControllerNS.topics = undefined;

		// service calls
		topicsService.getTopics().then(function (topics) {
			$scope.topicsControllerNS.topics = topics;
		});

		// functions
		$scope.topicsControllerNS.upVote = function (index) {
			var topic = $scope.topicsControllerNS.topics[index];
			topic.votes++;
			topicsService.updateTopic(topic).then(function (topic) {
				$scope.topicsControllerNS.topics[index] = topic;
			});
		};
		$scope.topicsControllerNS.removeTopic = function (id) {
			topicsService.deleteTopic(id).then(function (response) {
				for (var i = 0; i < $scope.topicsControllerNS.topics.length; i++) {
					if ($scope.topicsControllerNS.topics[i]._id == id) {
						$scope.topicsControllerNS.topics.splice(i, 1);
					}
				}
			});
		};
	}])

	.controller('topicsAddController', ['$scope', 'topicsService', function ($scope, topicsService) {
		// Namespace object for variables and functions
		$scope.topicsAddControllerNS = {};


		// variables

		/* This is an example of a model variable */
		$scope.topicsAddControllerNS.newTopic = {
			name: {
				first: undefined,
				last: undefined
			},
			title: undefined,
			votes: 0
		};

		// functions
		/* This is an example of a model function */
		$scope.topicsAddControllerNS.addTopic = function (newTopic) {
			topicsService.addTopic(newTopic).then(function (topic) {
				window.alert('Added: ' + topic.title);
			});
		};
		$scope.topicsAddControllerNS.isValidForm = function () {
			if ($scope.addTopicForm.firstName.$valid &&
				$scope.addTopicForm.lastName.$valid &&
				$scope.addTopicForm.title.$valid &&
				$scope.addTopicForm.month.$valid) {
				return false;
			}
			else {
				return true;
			}
		};
	}])

/** Service Factories **/
	.factory('topicsService', ['$http', function ($http) {
		//TODO: use a config objects for all $http calls and implement some better non 200 status code handling
		var TopicsService = {
			getTopics: function () {
				var promise = $http.get('/api/topics').then(function (response) {
					if (response.status === 200) {
						return response.data;
					} else {
						window.alert(response.data.message);
						return response.data
					}
				});
				return promise;
			},
			addTopic: function (topic) {
				var config = {
					method: 'POST',
					url: '/api/topics',
					data: topic
				}

				var promise = $http(config).then(function (response) {
					if (response.status === 200) {
						return response.data;
					} else {
						window.alert(response.data.message);
						return response.data
					}
				});
				return promise;
			},
			updateTopic: function (topic) {
				var config = {
					method: 'PUT',
					url: '/api/topics',
					data: topic
				}

				var promise = $http(config).then(function (response) {
					if (response.status === 200) {
						return response.data;
					} else {
						window.alert(response.data.message);
						return response.data
					}
				});
				return promise;
			},
			deleteTopic: function (id) {
				var config = {
					method: 'DELETE',
					url: '/api/topics/' + id
				};

				var promise = $http(config).then(function (response) {
					if (response.status === 200) {
						return response.data;
					} else {
						window.alert(response.data.message);
						return response.data
					}
				});
				return promise;
			}
		}
		return TopicsService;
	}]);