
// include the Lo-Dash library
var _ = require("lodash");

var worker = function(user) {
    var greeting = _.template('Hello <%= name %> (logins: <%= count %>)')

    return greeting({'name': user.name, 'count' : user.login.length})
};

// export the worker function as a nodejs module
module.exports = worker;


/*

 'use strict';

 var _ = require("lodash");

 var template = function (inputvar) {

 var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

 return _.template(mytemplate)(inputvar);
 };

 module.exports = template;

 */