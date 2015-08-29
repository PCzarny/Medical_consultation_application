(function (angular) {
	'use strict';
	
	angular.module('app')
		.directive('navigationBar', NavigationBar);
	
	function NavigationBar() {
		return {
			restrict: 'E',
			replace: 'true',
			templateUrl: 'shared/navigation-bar/navigation-bar.html',
			scope: {
				type : '@',
				data : '=',
				displayOption : '='
			},
			controller: NavigationBarController,
			controllerAs: 'vm',
			link: NavigationBarLinkFunction
		};
	}
	function NavigationBarLinkFunction ($scope, $element, $attrs, $ctrl) {
		$(window).scroll(function () {
			$('.navigation').css('top', $(window).scrollTop());
		});
	}
	function NavigationBarController ($scope) {
		var vm = this;
		
		vm.goBack = goBack;
		vm.clear = clear;
		vm.sort = 'my';
		vm.searchTopics = true;
		
		///////////////////////////////
		function goBack () {
			window.history.back();
		}
		
		function clear() {
			//$scope.data.searchTag = '';
			if(vm.searchTopics) {
				$scope.displayOption.searchTag = {question: $scope.displayOption.searchTag};
			}
			else{
				$scope.displayOption.searchTag = $scope.displayOption.searchTag.question;
			}
		}
		
	}
})(angular);