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
				data : '='
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
		vm.sort = 'my';
		
		///////////////////////////////
		function goBack () {
			window.history.back();
		}
		
	}
})(angular);