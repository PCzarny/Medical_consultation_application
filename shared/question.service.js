(function (angular) {
	'use strict';
	
	angular.module('single.question')
		.service('QuestionService', QuestionService);
	
	function QuestionService() {
		var service = {};
		
		var data = [
			{
				id : 0,
//				userId : 1,
				user : {id : 1, name: 'Anthony', photo: 'img/Anthony.jpg'},
				label : 'Found The guardian article',
				shortLabel: 'Found',
				question : 'Will insulin make my patient gain weight?',
				content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
				stat: {
					numberOfConversations: 3,
					numberOfPeers: 5,
					numberOfDiscussion: 9
				},
				upvotes : -1,
				lastUpdate : new Date('2015-08-23T10:58:00'),
				activities: [{
					type: 'COMMENTED',
					user : {id : 2, name: 'Jim', photo: 'img/Jim.jpg'},
				},{
					type: 'COMMENTED',
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
				}],
				conversations : [[{
					id : 0,
					user : {id : 2, name: 'Jim', photo: 'img/Jim.jpg'},
					time : new Date('2015-08-22T10:35:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 0,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-22T10:38:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 0,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-22T10:40:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}],[{
					id : 0,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-22T10:31:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 0,
					user : {id : 2, name: 'Jim', photo: 'img/Jim.jpg'},
					time : new Date('2015-08-22T10:40:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}],[{
					id : 0,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-22T10:48:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 0,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-22T10:50:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}],[{
					id : 0,
					user : {id : 3, name: 'Dr Animal', photo: 'img/Animal.jpg'},
					time : new Date('2015-08-23T10:58:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}]
				],
				follow : true
			},{
				id : 1,
				user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
				label : 'is asking',
				shortLabel: 'asked',
				question : '1 Will insulin make my patient gain weight?',
				stat: {
					numberOfConversations: 3,
					numberOfPeers: 5,
					numberOfDiscussion: 9
				},
				upvotes : 0,
				lastUpdate : new Date('2015-08-22T10:58:00'),
				activities: [{
					type: 'COMMENTED',
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
				},{
					type: 'COMMENTED',
					user : {id : 3, name: 'Dr Animal', photo: 'img/Animal.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 4, name: 'Liv', photo: 'img/livTyler.jpg'},
				}],
				conversations : [[{
					id : 0,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-22T09:58:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 0,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-22T10:15:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 0,
					user : {id : 3, name: 'Dr Animal', photo: 'img/Animal.jpg'},
					time : new Date('2015-08-22T10:25:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}],[{
					id : 0,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-01T10:30:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 0,
					user : {id : 3, name: 'Dr Animal', photo: 'img/Animal.jpg'},
					time : new Date('2015-08-22T10:58:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}]
				],
				follow : true
			},{
				id : 2,
				label : 'is asking',
				shortLabel: 'asked',
				user : {id : 3, name: 'Dr Animal', photo: 'img/Animal.jpg'},
				question : 'Will insulin make my patient gain weight?',
				stat: {
					numberOfConversations: 3,
					numberOfPeers: 5,
					numberOfDiscussion: 9
				},
				upvotes : 0,
				lastUpdate : new Date('2015-08-01T11:51:00'),
				activities: [{
					type: 'COMMENTED',
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
				},{
					type: 'COMMENTED',
					user : {id : 2, name : 'Jim', photo : 'img/Jim.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 3, name: 'Dr Animal', photo: 'img/Animal.jpg'},
				},{
					type: 'ANSWERED',
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
				}],
				conversations : [[{
					id : 0,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-01T10:32:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 1,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-01T10:55:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 2,
					user : {id : 3, name: 'Dr Animal', photo: 'img/Animal.jpg'},
					time : new Date('2015-08-01T10:58:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}],[{
					id : 3,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-01T11:01:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				},{
					id : 4,
					user : {id : 1, name : 'Anthony', photo : 'img/Anthony.jpg'},
					time : new Date('2015-08-01T11:51:00'),
					content : "Numbers of tingling in your feet should be reported to your doctor at your regular visits",
					upvotes : 0
				}]
				],
				follow : false
			}];
		
		service.getAll = function(nr, cb) {
			cb(data);
		};
		
		service.getById = function (id, cb) {
			cb(data[id]);
		} 
			
		return service;
	};
})(angular);