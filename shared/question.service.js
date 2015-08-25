(function (angular) {
	'use strict';
	
	angular.module('single.question')
		.service('QuestionService', QuestionService);
	
	function QuestionService() {
		var service = {};
		
		var data = [
			{
				id : 0,
				user : {id : 0, name : 'John', photo : 'img/John.jpg'},
				question : 'Will insulin make my patient gain weight?',
				content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
				stat: {
					numberOfConversations: 3,
					numberOfPeers: 5,
					numberOfDiscussion: 9
				},
				upvotes : -1,
				lastUpdate : 'yesterday',
				activities: [{
					type: 'COMMENTED',
					user : {id : 2, name: 'Dr Animal', photo: 'img/Animal.jpg'},
				},{
					type: 'COMMENTED',
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				}],
				conversations : [[{
					id : 0,
					user : {id : 2, name: 'Dr Animal', photo: 'img/Animal.jpg'},
					time : "1 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 0,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "2 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 0,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "3 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}],[{
					id : 0,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "4 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 0,
					user : {id : 2, name: 'Dr Animal', photo: 'img/Animal.jpg'},
					time : "5 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}],[{
					id : 0,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "6 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 0,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "7 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}],[{
					id : 0,
					user : {id : 2, name: 'Dr Animal', photo: 'img/Animal.jpg'},
					time : "6 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}]
				],
				follow : true
			},{
				id : 1,
				user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				question : 'Will insulin make my patient gain weight?',
				stat: {
					numberOfConversations: 3,
					numberOfPeers: 5,
					numberOfDiscussion: 9
				},
				upvotes : 0,
				lastUpdate : 'yesterday',
				activities: [{
					type: 'COMMENTED',
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				},{
					type: 'COMMENTED',
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				}],
				conversations : [[{
					id : 0,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "1 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvoted : 0
				},{
					id : 0,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "1 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvoted : 0
				},{
					id : 0,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "1 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvoted : 0
				}],[{
					id : 0,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "1 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvoted : 0
				},{
					id : 0,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "1 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvoted : 0
				}]
				],
				follow : true
			},{
				id : 2,
				user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				question : 'Will insulin make my patient gain weight?',
				stat: {
					numberOfConversations: 3,
					numberOfPeers: 5,
					numberOfDiscussion: 9
				},
				upvotes : 0,
				lastUpdate : 'yesterday',
				activities: [{
					type: 'COMMENTED',
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				},{
					type: 'COMMENTED',
					user : {id : 2, name : 'Eva', photo : 'img/Animal.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
				}],
				conversations : [[{
					id : 0,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "1 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvoted : 0
				},{
					id : 1,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "1 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvoted : 0
				},{
					id : 2,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "1 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvoted : 0
				}],[{
					id : 3,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "1 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvoted : 0
				},{
					id : 4,
					user : {id : 1, name : 'John', photo : 'img/John.jpg'},
					time : "1 hour ago",
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvoted : 0
				}]
				],
				follow : false
			}];
		
		service.getAll = function(nr, cb) {
			cb(data.slice(0, nr));
		};
		
		service.getById = function (id, cb) {
			cb(data[id]);
		} 
			
		return service;
	};
})(angular);