(function (angular) {
	'use strict';
	
	angular.module('all.questions')
		.directive('allQuestionsItem', AllQuestionsItem);
	
	function AllQuestionsItem() {
		return {
			restrict: 'E',
			replace:'true',
			templateUrl: 'views/all.questions/all.questions.directive.html',
			scope: {
				questionInfo : '='
			},
			controller: AllQuestionsItemController,
			controllerAs: 'vm'
		};
	}
	
	AllQuestionsItemController.$inject = ['$scope', '$location', '$rootScope'];
	function AllQuestionsItemController($scope, $location, $rootScope) {
		var vm = this;
		vm.maxActivieties = 4;
		
		vm.showQuestion = function () {
			$location.path('/question/' + $scope.questionInfo.id);
		};
		
		vm.showProfile = function (id) {
			$rootScope.$broadcast('showProfile', id);
		}
	}
})(angular);