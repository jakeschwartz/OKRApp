/**
 * Show functions to be exported from the design doc.
 */


// Sort phrases by date of creation
exports.objectives = {

    map: function (doc) {
		// Include only if the document contains a phrase
        if (doc.type == 'objective') {
            emit(doc._id, doc.goal);
        }
    }
};


exports.byOwner = {
	
	map: function(doc) {
  		emit(doc.owner, doc);
	}
};