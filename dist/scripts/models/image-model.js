var image = Backbone.Model.extend({
	defaults:{
		url: null,
		caption: null,
	},


	validate: function(attr, options){
			if(attr.url.length === 0) {
				return 'You must enter a url';
			}
			return false;
	},


	urlRoot: "http://tiy-fee-rest.herokuapp.com/collections/zamariac"
	// idAttribute : "_id"

});


// validatejs