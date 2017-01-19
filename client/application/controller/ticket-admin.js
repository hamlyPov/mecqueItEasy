Template.adminticket.helpers({
	getallTicket:function () {
    var status=Session.get("TICKETSTATUS");
    if(status && status!=="all"){
      return ticket.find({status:status})
    }else{
      return ticket.find({});  
    }
		
	},
  checkInvoice:function(invoice){
    if(invoice){
      return true;
    }else{
      return false;
    }
  }
});
Template.adminticket.events({
  'click #btnstatus':function(e){
    e.preventDefault();
    var id=this._id;
    var status="ready"
    if(confirm("Are You Sure to update status to ready")){
       Meteor.call("updateStaus",id,status);
    }
   
  },
  'click #btnremove':function(e){
    e.preventDefault();
    var id=this._id;
    if (confirm("Are you sure to delete this")) {
      ticket.remove(id);
    }
    
  },
  "change #selstatus":function(e){
    e.preventDefault();
    var status=$("#selstatus").val();
    Session.set("TICKETSTATUS",status);
  }
});