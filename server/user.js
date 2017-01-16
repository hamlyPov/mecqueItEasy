Meteor.methods({
	InsertUser:function(username,email,password, roles){
		targetUserId = Accounts.createUser({
            email: email,
            password: password,
            profile: {username:username}
        });
        Roles.setUserRoles(targetUserId,roles);
	},
	RemoveUser:function(id){
		users.remove({'_id':id});
	},
	UpdateUser:function(id,username,email, roles){
		var attr={
            emails:[{address: email,verified: "false"}],
            profile:{
              username:username
            },
            roles:[roles]
        }
        return Meteor.users.update({_id:id},{$set: attr});
	}
});