
Meteor.publish("myUserPagination", function (page,limit) {
    var limit=parseInt(limit);
    page = (page)? page:1;
    var skip = (page<=1)? 0 : (page - 1) * limit;
    return Meteor.users.find({},{limit:limit, skip:skip})
});

Meteor.publish('images', function (){ 
  return images.find({});
});

/*Meteor.publish('orders', function (){ 
  return orders.find({});

});*/


Meteor.publish('allcategory', function (){ 
  return categories.find({});
});
Meteor.publish("oneCategory",function(id){
	return categories.find({_id:id});
});

Meteor.publish("article",function(){
  return article.find({});
});
Meteor.publish("product",function(){
  return product.find({});
});
Meteor.publish("allticket",function(){
  return ticket.find({});
});
Meteor.publish("allticketByUser",function(uid){
  return ticket.find({agency:uid});
});
Meteor.publish("myAdminTicket",function(page,limit){
    //var limit = 4;
    var limit=parseInt(limit);
    page = (page)? page:1;
    var skip = (page<=1)? 0 : (page - 1) * limit;
    return ticket.find({},{limit:limit, skip:skip})
});

Meteor.publish("GetInvitedUser",function(id){
    return Meteor.users.find({'profile.affiliate':id});
});