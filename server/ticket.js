Meteor.methods({
	updateStaus:function (id,status) {
		return ticket.update({_id:id},{$set:{status:status}});
	},
	updateInvoice:function(id,invoice){
		return ticket.update({_id:id},{$set:{invoice:invoice}})
	},
	SaveTicket:function(obj){
		ticket.insert(obj);
	}
});