Meteor.methods({
	RegisterAgency:function(email,password,obj,roles){
		targetUserId = Accounts.createUser({
            email: email,
            password: password,
            profile: obj
        });
        Roles.setUserRoles(targetUserId,roles);
	},
});