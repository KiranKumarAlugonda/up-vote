'use strict';

angular.module('uvNavbar', [])
	.directive('uvNavbar', function ($location) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: '../app/components/navbar/uv-navbar-directive.html',
			scope: {},
			link: function (scope, element, attrs) {
				if ($location.path() == '/topics') {
					scope.topicsPageState = 'active';
				}
				if ($location.path() == '/topics/add') {
					scope.topicsAddPageState = 'active';
				}
			}
		}
	});