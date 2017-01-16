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