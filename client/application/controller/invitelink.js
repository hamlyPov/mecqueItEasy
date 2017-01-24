Template.inviteuser.helpers({
	GetRoot:function(){
		var roots = window.location.href;
		var fullurl = roots.replace(/(http.*?\/\/.*?\/)(.*)/g,"$1");
		return fullurl;
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
Template.inviteuser.events({
	"click #btn-copy":function(e){
		e.preventDefault();
		var copyText = $('.link-text').select();
		try {
		    var successful = document.execCommand('copy');
		    var msg = successful ? 'successful' : 'unsuccessful';
		    console.log('Copying text command was ' + msg);
		} catch (err) {
		    console.log('Oops, unable to copy');
		}
  			//copyText.select();
		//alert('copy');
	}
})