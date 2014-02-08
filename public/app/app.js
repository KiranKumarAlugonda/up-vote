'use strict';

var app = angular.module('app', ['topicsModule']).config(['$routeProvider', function ($routeProvider, $locationProvider) {

	/** Routes **/
	$routeProvider.when('/', {
		templateUrl: '/app/common/main.html',
		controller: 'mainController'
	});

	$routeProvider.when('/topics', {
		templateUrl: '/app/topics/partials/topics.html',
		controller: 'topicsController'
	});

	$routeProvider.when('/topics/add', {
		templateUrl: '/app/topics/partials/topics-add.html',
		controller: 'topicsAddController'
	});

	$routeProvider.otherwise('/');
}]);

/**  Main Controller **/
app.controller('mainController', ['$scope', function ($scope) {
	// Namespace object for variables and functions
	$scope.mainControllerNS = {};

	// variables
	$scope.mainControllerNS.title = 'Up Vote!';

}]);