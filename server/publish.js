
Meteor.publish("users", function () {
    return Meteor.users.find();
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
