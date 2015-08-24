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
	
	AllQuestionsItemController.$inject = ['$scope', '$location'];
	function AllQuestionsItemController($scope, $location) {
		var vm = this;
		vm.showQuestion = function () {
			$location.path('/question/' + $scope.questionInfo.id);
		}
	}
})(angular);