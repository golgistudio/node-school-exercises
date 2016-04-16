// include the Lo-Dash library
var _ = require("lodash");

var worker = function(comments) {

    var results = []
    var groupedComments = _.groupBy(comments, 'username');

    _.forEach(groupedComments, function(commentSet, index) {
        results.push({'username' : index, 'comment_count' : _.size(commentSet)})
    })

    return _.sortBy(results, 'comment_count').reverse()

};

// export the worker function as a nodejs module
module.exports = worker;
