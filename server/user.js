Meteor.methods({
	InsertUser:function(obj,email,password, roles){
		targetUserId = Accounts.createUser({
            email: email,
            password: password,
            profile: obj
        });
        Roles.setUserRoles(targetUserId,roles);
	},
	RemoveUser:function(id){
		Meteor.users.remove({'_id':id});
	},
	UpdateUser:function(id,obj,email, roles){
		var attr={
            emails:[{address: email,verified: "false"}],
            profile:obj,
            roles:[roles]
        }
        return Meteor.users.update({_id:id},{$set: attr});
	},
    UpdatePassport:function(id,passport){
        var attr = {
            passport:passport
        }
        return Meteor.users.update({'_id':id},{$set:attr});
    },
    registerUser:function(email,password,obj,roles){
        targetUserId = Accounts.createUser({
            email: email,
            password: password,
            profile: obj
        });
        Roles.setUserRoles(targetUserId,roles);
    },
    countUser:function(){
        var alluser=Meteor.users.find({});
        return alluser.count();
    }
});