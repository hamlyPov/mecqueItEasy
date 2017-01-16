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

Router.route('/agency/register',{
	name:'agency'
});
Router.route('/profile',{
	name:'profile'
});
Router.route('/profile/edit/:id',{
	name:'editprofile'
});
Router.route('/registertype',{
	name:'registertype'
});