'use strict';

angular.module('app', ['ngRoute', 'ngResource', 'uvNavbar', 'topicsModule']).config(['$routeProvider', function ($routeProvider) {

		/** Routes **/
		$routeProvider.when('/', {
			templateUrl: 'app/app.html',
			controller: 'appController'
		});

		$routeProvider.when('/topics', {
			templateUrl: 'app/topics-pages/topics.html',
			controller: 'topicsController'
		});

		$routeProvider.when('/topics/add', {
			templateUrl: 'app/topics-pages/topics-add.html',
			controller: 'topicsAddController'
		});

		$routeProvider.otherwise('/');
	}])

/**  Main Controller **/
	.controller('appController', ['$scope', function ($scope) {
		// Namespace object for variables and functions
		$scope.mainControllerNS = {};

		// variables
		$scope.mainControllerNS.title = 'Up Vote!';

	}])

/** Footer Controller **/
	.controller('footerController', ['$scope', function ($scope) {
		// Namespace object for variables and functions
		$scope.footerControllerNS = {};

		// variables
		//TODO: Set these as variables and constants so we have examples of those things
		$scope.footerControllerNS.builtIn = 'L.A.';
		$scope.footerControllerNS.builtBy = 'Idea Nerd';

	}]);