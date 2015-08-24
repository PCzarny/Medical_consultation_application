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
		vm.data = {
			id: 1,
			name : 'Eva',
			question : 'Will insulin make my patient gain weight?',
			photo : 'img/John.jpg',
			numberOfConversations: 3,
			numberOfPeers: 5,
			numberOfDiscussion: 9,
			moreActivity: 3,
			activities: [{
				type: 'COMMENTED',
				photo: 'img/Animal.jpg'
			},{
				type: 'COMMENTED',
				photo: 'img/Animal.jpg'
			},{
				type: 'ANSWERED',
				photo: 'img/John.jpg'
			}]
		};
	}
})();