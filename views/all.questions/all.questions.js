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
		vm.data = [{
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
		},{
			id: 2,
			name : 'John',
			question : 'Will insulin make my patient gain weight?',
			photo : 'img/Animal.jpg',
			numberOfConversations: 1,
			numberOfPeers: 1,
			numberOfDiscussion: 2,
			moreActivity: 0,
			activities: [{
				type: 'COMMENTED',
				photo: 'img/Animal.jpg'
			},{
				type: 'ANSWERED',
				photo: 'img/John.jpg'
			}]
		}]
	}
})();