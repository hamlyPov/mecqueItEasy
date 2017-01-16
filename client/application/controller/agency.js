Template.agency.events({
	"click #btn-register": function(e){
		e.preventDefault();
		var username = $('[name="username"]').val();
		var email = $('[name="email"]').val();
		var siret_num = $('[name="siret-num"]').val();
		var contact_name = $('[name="contact-name"]').val();
		var phone = $('[name="phone"]').val();
		var address = $('[name="address"]').val();
		var password = $('[name="password"]').val();
		var roles = 'agency';
		var obj = {
			username:username,
        	siret_num:siret_num,
        	contact_name:contact_name,
        	phone:phone,
        	address:address
		}
		Meteor.call('registerUser',email,password,obj,roles,function(error){
			if(!error){
				alert('register agency successfully');
			}
		});
	}
});
