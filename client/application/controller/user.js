Template.adduser.events({
	"click #btn-save": function(e){
		e.preventDefault();
		var name = $("[name='name']").val();
		var email = $("[name='email']").val();
		var password = $("[name='password']").val();
		var roles = $("[name='permission'] option:selected").val();
		
		Meteor.call("InsertUser",name, email, password, roles, function(res){
			if(!res){
				alert("insert section successfully!!!!!!!");
				Router.go('/cpanel/user');			}
		});
	}
});	
Template.user.helpers({
	GetUser:function(){
		return users.find();
	},
	Isadmin:function(roles){
		if(roles == "admin"){
			return "disabled";
		}
	}
});
Template.user.events({
	"click .btn-del": function(e){
		e.preventDefault();
		if(confirm("Are you sure want to delete this???")){
			Meteor.call("RemoveUser",this._id);
		}
	}
});
Template.useredit.events({
	"click #btn-update": function(e){
		e.preventDefault();
		var id = $("[name='userid']").val();
		var name = $("[name='name']").val();
		var email = $("[name='email']").val();
		//var password = $("[name='password']").val();
		var roles = $("[name='permission'] option:selected").val();
		Meteor.call("UpdateUser",id, name, email, roles, function(res){
			if(!res){
				alert("Update User successfully!!!!!!!");
				Router.go('/cpanel/user');			}
		});
	}
});	

Template.signin.events({
	"click #btn-signin":function(e){
		e.preventDefault();

		var email = $("[name='email']").val();
		var password = $("[name='password']").val();
		//var user = Meteor.user();
		//var roles = user.roles[0];
		//alert('login'+email+password);
		//console.log("roles== "+user.roles[0]);
		Meteor.loginWithPassword(email, password, function(res){
		    if(!res){	    	
			    Router.go('/cpanel/dashboad');		    	
		    }else{
		    	alert("your email and password Invalid!!!");
		    }
		});
	}
});

