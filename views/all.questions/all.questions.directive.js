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
		
		vm.showQuestion = function () {
			$location.path('/question/' + $scope.questionInfo.id);
		};
		
		vm.showProfile = function (id) {
			$rootScope.$broadcast('showProfile', id);
		};
		
		vm.setMaxActivities = function() {
			var w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			if(w > 900)
				vm.maxActivieties = 4;
			else if(w > 780)
				vm.maxActivieties = 3;
			else if(w > 660)
				vm.maxActivieties = 2;
			else if(w > 400)
				vm.maxActivieties = 1;
			else
				vm.maxActivieties = 0;
			
			vm.showActivities = $scope.questionInfo.activities.slice(0, vm.maxActivieties);
		};
		
		$scope.$watch('questionInfo', function () {
			vm.showActivities = $scope.questionInfo.activities.slice(0, vm.maxActivieties);
		});
		vm.setMaxActivities();
		$(window).resize( function () {
			vm.setMaxActivities();
			$scope.$apply();
		});
		
	}
})(angular);