(function() {
	'use strict';

	angular.module('profile', ['ngRoute'])
		.directive('profileModal', ProfileModal);
	
	function ProfileModal() {
		return {
			restrict: 'E',
			replace: 'true',
			link: ProfileModalLinkFunction,
			templateUrl: 'views/profile/profile.html',
			scope: {},
			controller: ProfileModalController,
			controllerAs: 'vm'
		};
	}
	
	function ProfileModalLinkFunction ($scope, $element, $attrs, $ctrl) {
		console.log("modal created");
		$scope.$on('showProfile', show);
		
		
		function show (event, args) {
			console.log("modal receive", $element);
//			$element.modal('show');
			$('.editModal').modal('show');
		}
	};
	
	function ProfileModalController () {
		
	}
})();