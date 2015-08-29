(function(){
	'use strict';
	
	angular.module('app', [
		'ngRoute',
		'all.questions',
		'single.question',
		'profile'
	])
		.controller('MainController', MainController);
	
	function MainController ($scope) {
		var vm = this;
		
		$(window).scroll(function () {
			$('.navigation').css('top', $(window).scrollTop());
		});
	}
})();