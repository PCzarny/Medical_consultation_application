(function() {
	'use strict';

	angular.module('profile', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/profile/:id', {
				templateUrl: 'views/profile/profile.html',
				controller: 'ProfileController',
				controllerAs: 'vm' 
			});
		}])
		.controller('ProfileController', ProfileController);
	
	ProfileController.$inject = ['$scope'];
	function ProfileController($scope) {
		var vm = this;
		vm.name = 'Eva';
		vm.question = 'Will insulin make my patient gain weight?';
	}
})();