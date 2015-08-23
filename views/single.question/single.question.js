(function() {
	'use strict';

	angular.module('single.question', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/question/:id', {
				templateUrl: 'views/single.question/single.question.html',
				controller: 'SingleQuestionController',
				controllerAs: 'vm' 
			});
		}])
		.controller('SingleQuestionController', SingleQuestionController);
	
	SingleQuestionController.$inject = ['$scope'];
	function SingleQuestionController($scope) {
		var vm = this;
		vm.name = 'Eva';
		vm.question = 'Will insulin make my patient gain weight?';
	}
})();