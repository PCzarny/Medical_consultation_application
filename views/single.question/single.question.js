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
	
	SingleQuestionController.$inject = ['$scope', 'QuestionService', '$routeParams', '$rootScope'];
	function SingleQuestionController($scope, QuestionService, $routeParams, $rootScope) {
		var vm = this;
		
		vm.showProfile = showProfile;
		vm.toggleFollow = toggleFollow;
		vm.voteQuestion = voteQuestion;
		vm.vote = vote;
		
		activate();
		
		///////////////////////////////
		function activate() {
			vm.questionId = $routeParams.id;
			QuestionService.getById(vm.questionId, function(d){
				vm.data = d;
			});
		}
		
		function showProfile(id) {
			$rootScope.$broadcast('showProfile', id);
		}
		
		function toggleFollow() {
			vm.data.follow = !vm.data.follow;
		}
		
		function voteQuestion(step) {
			vm.data.upvotes += step;
		}
		
		function vote(step, activity) {
			activity.upvotes += step; 
		}
	}
})();