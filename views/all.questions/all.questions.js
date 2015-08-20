(function() {
	'use strict';

	angular.module('all.questions', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'views/all.questions/all.questions.html',
				controller: 'AllQuestionsController',
				controllerAs: 'vm' 
			});
		}])
		.controller('AllQuestionsController', AllQuestionsController);
	
	AllQuestionsController.$inject = ['$scope'];
	function AllQuestionsController($scope) {
		var vm = this;
		vm.name = 'Eva';
		vm.question = 'Will insulin make my patient gain weight?';
	}
})();