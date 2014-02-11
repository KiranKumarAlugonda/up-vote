'use strict';

var topicsModule = angular.module('topicsModule', []);

/** Controllers **/
topicsModule.controller('topicsController', ['$scope', 'topicsService', function ($scope, topicsService) {
	// Namespace object for variables and functions
	$scope.topicsControllerNS = {};
	$scope.foo = 'hello world'


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
}]);

topicsModule.controller('topicsAddController', ['$scope', 'topicsService', function ($scope, topicsService) {
	// Namespace object for variables and functions
	$scope.topicsAddControllerNS = {};



	// variables
	$scope.topicsAddControllerNS.newTopic = {
		name: {
			first: undefined,
			last: undefined
		},
		title: undefined,
		votes: 0
	};

	// functions
	$scope.topicsAddControllerNS.addTopic = function (newTopic) {
		topicsService.addTopic(newTopic).then(function (topic) {
			window.alert('Added: ' + topic.title);
		});
	};
	$scope.topicsAddControllerNS.isValidForm = function () {
		if ($scope.addTopicForm.firstName.$valid &&
			$scope.addTopicForm.lastName.$valid &&
			$scope.addTopicForm.title.$valid) {
			return false;
		} else {
			return true;
		}
	};

}]);

/** Service Factories **/
topicsModule.factory('topicsService', ['$http', function ($http) {
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
		}

	}
	return TopicsService;
}]);