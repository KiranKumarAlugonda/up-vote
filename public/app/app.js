'use strict';

var app = angular.module('app', ['ngRoute', 'uvNavbar', 'topicsModule']).config(['$routeProvider', function ($routeProvider) {

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

/** Footer Controller **/
app.controller('footerController', ['$scope', function ($scope) {
	// Namespace object for variables and functions
	$scope.footerControllerNS = {};

	// variables
	//TODO: put this is an external file
	$scope.footerControllerNS.version = '0.2';
	$scope.footerControllerNS.builtIn = 'L.A.';
	$scope.footerControllerNS.builtBy = 'Idea Nerd';

}]);