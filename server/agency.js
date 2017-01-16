Meteor.methods({
	RegisterAgency:function(username,email,siret_num,contact_name,phone,address,password, roles){
		targetUserId = Accounts.createUser({
            email: email,
            password: password,
            profile: {
            	username:username,
            	siret_num:siret_num,
            	contact_name:contact_name,
            	phone:phone,
            	address:address
            },
            time: Date.now()
        });
        Roles.setUserRoles(targetUserId,roles);
	},
});