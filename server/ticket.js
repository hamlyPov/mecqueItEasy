Meteor.methods({
	updateStaus:function (id,status) {
		return ticket.update({_id:id},{$set:{status:status}});
	},
	updateInvoice:function(id,invoice){
		var status="pending"
		return ticket.update({_id:id},{$set:{invoice:invoice,status:status}})
	}
});