var userData = function(theAction) {
	$.couch.session({
	    success: function(data) {
	       	$.couch.db("_users").openDoc("org.couchdb.user:" + data.userCtx.name, {
		    	success: function(data) {
		        	theAction(data);
		    	},
		    	error: function(status) {
		        	console.log(status);
		    	}
			});
	    }
	});
};

