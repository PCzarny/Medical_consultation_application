(function (angular) {
	'use strict';
	
	angular.module('profile')
		.service('ProfileService', ProfileService);
	
	function ProfileService() {
		var service = {};
		
		var data = [{
			id : 0,
			name : 'John',
			photo : 'img/John.jpg',
			stat: {
				numberOfPeers : 6,
				numberOfDiscussion : 3,
				numberOfQuestions : 1,
				numberOfFindings: 5
			},
			joinedUsers : [
				{id : 1, name: 'Eva', photo: 'img/Eva.jpg'},
				{id : 2, name: 'Dr Animal', photo: 'img/Animal.jpg'},
				{id : 3, name: 'Jack Sparrow', photo: 'img/Jack.jpg'}
			],
			hottest : {
				id : 0,
				user : {id : 2, name: 'Dr Animal', photo: 'img/Animal.jpg'},
				activity : 'FOUND THE GUARDIAN ARTICLE',
				topic: 'Vegan diet to stop diabetes progress',
				stat: {
					numberOfPeers : 6,
					numberOfDiscussion : 3,
					numberOfConversations : 1,
					numberOfUpvotes: 5
				}
			}
		},{
			id : 1,
			name : 'Eva',
			photo : 'img/Eva.jpg',
			time : '5 months',
			lastSeen : 'Saturday afternoon',
			activityLevel : 2,
			stat: {
				numberOfPeers : 6,
				numberOfDiscussion : 3,
				numberOfQuestions : 1,
				numberOfFindings: 5
			},
			joinedUsers : [
				{id : 0, name: 'John', photo: 'img/JohnEva.jpg'},
				{id : 2, name: 'Dr Animal', photo: 'img/Animal.jpg'},
				{id : 3, name: 'Jack Sparrow', photo: 'img/Jack.jpg'}
			],
			hottest : {
				id : 0,
				user : {id : 2, name: 'Dr Animal', photo: 'img/Animal.jpg'},
				activity : 'FOUND THE GUARDIAN ARTICLE',
				topic: 'Vegan diet to stop diabetes progress',
				stat: {
					numberOfPeers : 6,
					numberOfDiscussion : 3,
					numberOfConversations : 1,
					numberOfUpvotes: 5
				}
			}
		}];
				
		service.getById = function (id, cb) {
			cb(data[id]);
		} 
		return service;
	};
})(angular);