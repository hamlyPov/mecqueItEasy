Template.agency.onRendered(function(){
    $('.reg').validate({
        rules: {
        	username: {
        		required: true
        	},
        	siretnum:{
        		required: true
        	},
        	contactname:{
        		required: true
        	},
            email: {
                required: true,
                email: true
            },
            phone:{
            	required: true,
            	number: true
            },
            address:{
            	required: true
            },
            password: {
                required: true,
                minlength: 6
            },
            agree:{
            	required: true
            }
        }
    });
});
Template.editprofile.onRendered(function(){
    $('.regedit').validate({
        rules: {
        	username: {
        		required: true
        	},
        	siretnum:{
        		required: true
        	},
        	contactname:{
        		required: true
        	},
            email: {
                required: true,
                email: true
            },
            phone:{
            	required: true,
            	number: true
            },
            address:{
            	required: true
            }
        }
    });
});
Template.agency.events({
	"click #btn-register": function(e){
		e.preventDefault();
		var html = '';
		var username = $('[name="username"]').val();
		var email = $('[name="email"]').val();
		var siret_num = $('[name="siretnum"]').val();
		var contact_name = $('[name="contactname"]').val();
		var phone = $('[name="phone"]').val();
		var address = $('[name="address"]').val();
		var password = $('[name="password"]').val();
		var roles = 'agency';
		var timestamp = Date.now();
		var obj = {
			username:username,
        	siret_num:siret_num,
        	contact_name:contact_name,
        	phone:phone,
        	address:address,
        	time:timestamp
		}
		if(username || email || siret_num || contact_name || phone || address || password == ""){
			html += '<div class="alert alert-danger">';
			  	html += '<strong>Input Field!</strong> can not be empty.';
			html += '</div>';
			$('#msg-error').append(html);
		}else{
			Meteor.call('registerUser',email,password,obj,roles,function(error, response){
				if(error){
					console.log('error: '+error.reason);
				}else{console.log('RegisterAgency Successfully');}
			});
		}
	},
	"focus input":function(e){
		e.preventDefault();
		//alert('focus');
		$('#msg-error').html('');
	}
});
Template.editprofile.events({
	"click #btn-update": function(e){
		e.preventDefault();
		var id = $('[name="profileId"]').val();
		var username = $('[name="username"]').val();
		var email = $('[name="email"]').val();
		var siret_num = $('[name="siretnum"]').val();
		var contact_name = $('[name="contactname"]').val();
		var phone = $('[name="phone"]').val();
		var address = $('[name="address"]').val();
		var timestamp = $('[name="timestamp"]').val();
		var obj = {
			username:username,
        	siret_num:siret_num,
        	contact_name:contact_name,
        	phone:phone,
        	address:address,
        	time:timestamp
		}
		Meteor.call('UpdateProfile',id,email,obj,function(error, response){
			if(error){
				console.log('error: '+error.reason);
			}else{
				console.log('UpdateProfile Successfully');
				Router.go('/profile');
			}
		});
	}
});
