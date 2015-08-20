(function(){
	'use strict';
	
	angular.module('app', [
		'ngRoute',
		'all.questions'
	])
		.controller('MainController', MainController);
	
	function MainController ($scope) {
		var vm = this;
	}
})();