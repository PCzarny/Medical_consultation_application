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
		$scope.$on('showProfile', show);
		
		
		function show (event, args) {
			$ctrl.userId = args;
			$ctrl.getData();
			$('.editModal').modal('show');
		}
	}
	
	ProfileModalController.$inject = ['$scope', 'ProfileService'];
	function ProfileModalController($scope, ProfileService) {
		var vm = this;
		
		vm.getData = getData;
		
		/////////////////////////////
		function getData() {
			ProfileService.getById(vm.userId, function(d) {
				vm.data = d;
			});
		}
	}
})();