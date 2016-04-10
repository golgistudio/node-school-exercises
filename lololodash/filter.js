var _ = require ("lodash");

// Use lodash to filter the users to return only the active users
var worker = function (users) {
    return _.filter(users, {'active': true});
}

module.exports = worker;

