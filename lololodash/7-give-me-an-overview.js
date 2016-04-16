// include the Lo-Dash library
var _ = require("lodash");

var worker = function(articles) {

    var results = _.reduce(articles, function(result, item) {

        // Find any matches to the current article in the results
        var match = _.find(result, {'article' : item.article});

        // Update the results
        if (match) {
            match.total_orders += item.quantity
        } else {
            result.push({'article': item.article, 'total_orders': item.quantity})
        }
        return result
    }, [])

    // Sort the results by the total_orders
    return _.sortBy( results, 'total_orders').reverse()
};

// export the worker function as a nodejs module
module.exports = worker;

/*
 'use strict';

 var _ = require("lodash");

 var overview = function (orders) {

 var overviewarray = [],
 total = 0;

 // Group by article
 orders = _.groupBy(orders, 'article');

 _.forEach(orders, function (item, key) {

 key = parseInt(key);
 total = 0;

 // If only one article
 if (item.length === 1) {
 total = item[0].quantity;

 // Else make sum of all orders
 } else {
 total = _.reduce(item, function(sum, item) {
 return sum + item.quantity;
 }, 0);
 }

 overviewarray.push({
 article: key,
 total_orders: total
 });

 });

 // Order
 overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

 return overviewarray;
 };

 module.exports = overview;


 */
