(function(){
	'use strict';
	
	angular.module('app', [
		'ngRoute',
		'all.questions',
		'single.question'
	])
		.controller('MainController', MainController);
	
	function MainController ($scope) {
		var vm = this;
	}
})();