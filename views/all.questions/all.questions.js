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
	
	AllQuestionsController.$inject = ['$scope', 'QuestionService'];
	function AllQuestionsController($scope, QuestionService) {
		var vm = this;
		vm.data = [];
		vm.listLength = 1;
		
		vm.getData = getData;
		vm.loadMore = loadMore;
		
		activate();
		/////////////////////////////////
		function activate() {
			vm.getData();
		};
		
		function getData() {
			QuestionService.getAll(vm.listLength, function(d) {
				vm.data = d;
			});
		}
		
		function loadMore() {
			vm.listLength = vm.listLength + 2;
			vm.getData();
		}
	}
})();