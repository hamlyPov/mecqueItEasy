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
	},
    registerUser:function(email,password,obj,roles){
        targetUserId = Accounts.createUser({
            email: email,
            password: password,
            profile: obj
        });
        Roles.setUserRoles(targetUserId,roles);
    },
    updateProfile:function(email,obj){
         Meteor.users.update({ _id: Meteor.userId() }, { $set: { "emails.0.address": email },{profile:obj} });
    }
});