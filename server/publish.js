
Meteor.publish("users", function () {
    return users.find();
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