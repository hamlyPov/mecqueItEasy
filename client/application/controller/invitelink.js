Template.inviteuser.helpers({
	GetuserInvite:function(){
		var id = Meteor.userId();
		var result = Meteor.users.find({'profile.affiliate':id}).map(function(document, index){
			document.index = index+1;
			return document;
		});
		return result;
	}
});