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

Template.userregister.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

Template.userregister.events({
	'click #btnnext':function(e){
		e.preventDefault();
		var username=$("#firstname").val();
		var familyname=$("#familyname").val();
		var dob=$("#dob").val();
		var phone=$("#phone").val();
		var email=$("#email").val();
		var password=$("#pwd").val();
		if(username==''||familyname==''||dob==''||phone==''||email==''||password==''){
			$("#error").html("<b style='color:red'>please fill out the form </b>")
		}else{
			$("#registerform").addClass("hidden");
			$("#nextrgister").removeClass("hidden")
		}
		
	},
	'click #btnregister':function(e){
		e.preventDefault();
		var affiliate = Router.current().params.id;
		var username=$("#firstname").val();
		var familyname=$("#familyname").val();
		var dob=$("#dob").val();
		var phone=$("#phone").val();
		var email=$("#email").val();
		var password=$("#pwd").val();
		var role="affiliate"
		var numpayment=$("#numpayment").val();
		var selecttype=$("#selecttype").val();
		var obj={
			username:username,
			familyname:familyname,
			dob:dob,
			phone:phone,
			type:selecttype,
			numpayment:numpayment,
			affiliate:affiliate
		}
		Meteor.call("registerUser",email,password,obj,role,function(err){
			if(!err){
				Router.go("/user/profile");
			}
		});

	},
	"change #selecttype":function(e){
		e.preventDefault();
		var selecttype=$("#selecttype").val();
		if(selecttype=="hajj"){
			 option =' <option>1</option> <option>2</option><option>3</option>'
			 $("#numpayment").html(option);

		}else if(selecttype=="omrah"){
			option =' <option>1</option> <option>2</option><option>4</option><option>6</option>'
			$("#numpayment").html(option);
		}
	}
});

Template.profile.helpers({
	getProfileEdit:function(){
		var id=Meteor.userId();
		console.log(id);
		return Meteor.users.findOne({_id:id});
	},
	CountInvite:function(){	
		var id = Meteor.userId();	
		return Meteor.users.find({'profile.affiliate':id}).count();
	},
	GenerateButton:function(){
		var id = Meteor.userId();	
		var result = Meteor.users.find({'profile.affiliate':id}).count();
		if(result >= 5){
			return true;
		}else{
			return false;
		}
	},
	GetProduct:function(){
		var result = product.find().map(function(document, index){
			document.index = index+1;
			return document;
		});
		return result;
	},
	getagencyname:function(id){
		return Meteor.users.findOne({'_id':id}).profile.username;
	},
	GetallAgency:function(){
		return Meteor.users.find({'roles':'agency'});
	}
});
Template.editprofile.events({
	'click #btneditprofile':function(e){
		e.preventDefault();
		var username=$("#username").val();
		var familyname=$("#familyname").val();
		var dob=$("#dob").val();
		var phone=$("#phone").val();
		var email=$("#email").val();
		var numpayment=$("#numpayment").val();
		var selecttype=$("#selecttype").val();
		var obj={
			username:username,
			familyname:familyname,
			dob:dob,
			phone:phone,
			type:selecttype,
			numpayment:numpayment
		}
		var id=Meteor.userId();
		Meteor.call("UpdateProfile",id,email,obj);
	}
});
Template.editprofile.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});
