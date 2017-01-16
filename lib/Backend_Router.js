Router.configure({
    //layoutTemplate: 'mainLayout',
    notFoundTemplate: "notFound"
});
Router.route('/signin',{
	layoutTemplate: 'signin'
});
// admin Products
Router.route('/cpanel/dashboad',{
	layoutTemplate: 'mainLayout',
	name:'dashboad'
});

Router.route('/cpanel/category',{
	layoutTemplate: 'mainLayout',
	name:'category',
	waitOn:function(){
		return [Meteor.subscribe("allcategory")]
	}
});
Router.route('/cpanel/category/edit/:id',{
	layoutTemplate: 'mainLayout',
	name:'categoryedit',
	data:function(){
		var id = this.params.id;
		var result = categories.findOne({'_id':id});
		return {GetOneCategory:result};
	},
	waitOn:function(){
		var id = this.params.id;
		return [Meteor.subscribe("oneCategory",id)]
	}
});
Router.route('/cpanel/category/add',{
	layoutTemplate: 'mainLayout',
	name:'categoryadd'
});


Router.route('/cpanel/user/add',{
	layoutTemplate: 'mainLayout',
	name:'adduser'
});
Router.route('/cpanel/user',{
	layoutTemplate: 'mainLayout',
	name:'user'
});
Router.route('/cpanel/user/edit/:id',{
	layoutTemplate: 'mainLayout',
	name:'useredit',
	data:function(){
		var id = this.params.id;
		var result = users.findOne({'_id':id});
		return {GetOne:result};
	}
});



Router.route('/cpanel/article',{
	layoutTemplate: 'mainLayout',
	name:'article'
});
Router.route('/cpanel/article/add',{
	layoutTemplate: 'mainLayout',
	name:'addarticle'
});
Router.route('/cpanel/article/edit/:id',{
	layoutTemplate: 'mainLayout',
	name:'editarticle',
	data:function(){
		var id = this.params.id;
		var result = article.findOne({'_id':id});
		return {GetOne:result};
	}
});