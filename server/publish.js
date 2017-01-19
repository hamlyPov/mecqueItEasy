
Meteor.publish("myUserPagination", function (page,limit) {
    var limit=parseInt(limit);
    page = (page)? page:1;
    var skip = (page<=1)? 0 : (page - 1) * limit;
    return Meteor.users.find({},{limit:limit, skip:skip})
});

Meteor.publish('images', function (){ 
  return images.find({});
});

/*Meteor.publish('users', function (){ 
  return Meteor.users.find({});

});
*/

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
  var allticket= ticket.find({ $or: [ { agency:uid }, { customer: uid } ] });
  var alluser=[]
  allticket.forEach(function(val){
    alluser.push(val.customer);
    alluser.push(val.agency);
  });
  var listuser=Meteor.users.find({_id:{$in:alluser}})
  return [allticket,listuser];
});
Meteor.publish("myAdminTicket",function(page,limit){
    //var limit = 4;
    var limit=parseInt(limit);
    page = (page)? page:1;
    var skip = (page<=1)? 0 : (page - 1) * limit;
    return ticket.find({},{limit:limit, skip:skip})
});

Meteor.publish("myprofile",function(id){
    return Meteor.users.find({'profile.affiliate':id});
});