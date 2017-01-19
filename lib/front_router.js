Router.configure({
    layoutTemplate: 'frontLayout',
    notFoundTemplate: "notFound"
});

// admin Products
Router.route('/',{
	name:'homefront'
});
Router.route('/user/register',{
	name:'userregister'
});

Router.route('/user/profile',{
	name:'profile',
	waitOn:function(){
		return [Meteor.subscribe("GetInvitedUser",Meteor.userId())]
	}
});
Router.route('/user/password',{
	name:'changepassword'
});
// Router.map(function () {
//     this.route('agency', {
//         path: '/agency/register',
//         template: 'agency',
//         onAfterAction: function () {
// 		    Tracker.afterFlush(function () {
// 		    	$('.reg').validate();
// 		    });
// 		}
// 	});
// });
Router.route('/agency/register',{
	name:'agency'
});
/*Router.route('/profile?id=:id',{
	template:'profile'
});*/
Router.route('/profile/edit/:id',{
	name:'editprofile'
});
Router.route('/registertype',{
	name:'registertype'
});

Router.route('/register/affiliate/:id',{
	template:'userregister'
});
Router.route('/ticket',{
	name:'ticket',
	waitOn:function(){
		return [Meteor.subscribe("allticketByUser",Meteor.userId())]
	}
});