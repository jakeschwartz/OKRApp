/**
 * List functions to be exported from the design doc.
 */

var templates = require('duality/templates');

// Export a list with phrases
exports.OKRs = function (head, req) {


    // generate the markup for a list of phrases
    var content = templates.render('OKRs.html', req, {
            });

};