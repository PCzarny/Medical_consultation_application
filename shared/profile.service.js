(function (angular) {
	'use strict';
	
	angular.module('profile')
		.service('ProfileService', ProfileService);
	
	function ProfileService() {
		var service = {};
		
		var data = [{
			id : 0,
			name : 'Johnny',
			photo : 'img/JohnnyDepp.jpg',
			stat: {
				numberOfPeers : 6,
				numberOfDiscussion : 3,
				numberOfQuestions : 1,
				numberOfFindings: 5
			},
			joinedUsers : [
				{id : 1, name: 'Anthony', photo: 'img/Anthony.jpg'},
				{id : 3, name: 'Dr Animal', photo: 'img/Animal.jpg'},
				{id : 4, name: 'Liv', photo: 'img/livTyler.jpg'}
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
			name : 'Anthony',
			photo : 'img/Anthony.jpg',
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
				{id : 0, name: 'Johnny', photo: 'img/JohnnyDepp.jpg'},
				{id : 2, name: 'Jim', photo: 'img/Jim.jpg'},
				{id : 3, name: 'Dr Animal', photo: 'img/Animal.jpg'}
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
			id : 2,
			name : 'Jim',
			photo : 'img/Jim.jpg',
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
				{id : 0, name: 'Johnny', photo: 'img/JohnnyDepp.jpg'},
				{id : 1, name: 'Anthony', photo: 'img/Anthony.jpg'},
				{id : 4, name: 'Liv', photo: 'img/livTyler.jpg'}
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
			id : 3,
			name : 'Dr Animal',
			photo : 'img/Animal.jpg',
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
				{id : 1, name: 'Anthony', photo: 'img/Anthony.jpg'},
				{id : 2, name: 'Jim', photo: 'img/Jim.jpg'},
				{id : 3, name: 'Johnny', photo: 'img/JohnnyDepp.jpg'}
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
			id : 4,
			name : 'Liv',
			photo : 'img/livTyler.jpg',
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
				{id : 1, name: 'Anthony', photo: 'img/Anthony.jpg'},
				{id : 3, name: 'Dr Animal', photo: 'img/Animal.jpg'},
				{id : 0, name: 'Johnny', photo: 'img/JohnnyDepp.jpg'}
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