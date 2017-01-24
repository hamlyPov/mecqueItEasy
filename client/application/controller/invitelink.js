Template.inviteuser.helpers({
	GetRoot:function(){
		var roots = Iron.Location.get().rootUrl;
		return roots;
	},
	GetuserInvite:function(){
		var id = Meteor.userId();
		var result = Meteor.users.find({'profile.affiliate':id}).map(function(document, index){
			document.index = index+1;
			return document;
		});
		return result;
	}
});