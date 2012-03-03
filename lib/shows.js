var templates = require('duality/templates');


// Show the start page

exports.login = function (doc, req) {

    return {
		title: 'Login',
		content: templates.render('userlogin.html', req, {})
    };
};

exports.logout = function (doc, req) {

    return {
		title: 'Logout',
		content: templates.render('userlogout.html', req, {})
    };
};

exports.myOKRs = function (doc, req) {

    return {
		title: 'My OKRs',
		content: templates.render('myOKRs.html', req, {})
    };
};

exports.allOKRs = function (doc, req) {

    return {
		title: 'All OKRs',
		content: templates.render('allOKRs.html', req, {})
    };
};


exports.start = function (doc, req) {

    return {
		title: 'Main Page',
		content: templates.render('userlogin.html', req, {})
    };
};

exports.addOKR = function (doc, req) {

    return {
		title: 'Add OKR',
		content: templates.render('AddOKR.html', req, {})
    };
};

exports.createuser = function (doc, req) {

    return {
		title: 'Create User',
		content: templates.render('createuser.html', req, {})
    };
};



// Show your OKR
exports.OKR = function (doc, req) {
	return {
		title: "As Measured By. . . .",
		content: templates.render('OKR.html', req, {
			objective1: doc["objective-1"].goal,
			objective2: doc["objective-2"].goal,
			objective3: doc["objective-3"].goal,
			objective4: doc["objective-4"].goal,
			o1kr1: doc["objective-1"].kr1,
			o1kr2: doc["objective-1"].kr2,
			o1kr3: doc["objective-1"].kr3,
			o1kr4: doc["objective-1"].kr4,
			o2kr1: doc["objective-2"].kr1,
			o2kr2: doc["objective-2"].kr2,
			o2kr3: doc["objective-2"].kr3,
			o2kr4: doc["objective-2"].kr4,
			o3kr1: doc["objective-3"].kr1,
			o3kr2: doc["objective-3"].kr2,
			o3kr3: doc["objective-3"].kr3,
			o3kr4: doc["objective-3"].kr4,
			o4kr1: doc["objective-4"].kr1,
			o4kr2: doc["objective-4"].kr2,
			o4kr3: doc["objective-4"].kr3,
			o4kr4: doc["objective-4"].kr4,
			period: doc.period,
			owner: doc.owner,
			_rev: doc._rev,
			_id: doc._id,
		})
	};
};


// Show 404 - not found page
exports.not_found = function (doc, req) {
    return {
        title: '404 - Not Found',
        content: templates.render('404.html', req, {})
    };
};
