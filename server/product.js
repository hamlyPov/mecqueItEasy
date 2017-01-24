Meteor.methods({
	countProduct:function() {
		return product.find({}).count();
	}
})