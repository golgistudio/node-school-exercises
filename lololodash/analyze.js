// include the Lo-Dash library
var _ = require("lodash");

var worker = function(freelancers) {

    var totalIncome = _.reduce(freelancers, function(result, freelancer) {
        return result + freelancer.income
    }, 0)

    console.log(totalIncome);

    var averageIncome = totalIncome / freelancers.length;

    console.log(averageIncome)

    var results  = {
        "average" : averageIncome,
        "underperform" : [],
        "overperform" : []
    }

    results.overperform = _.filter(freelancers, function(freelancer) {
        return (freelancer.income > averageIncome)
    })

    results.overperform = _.sortBy(results.overperform, 'income')

    results.underperform = _.filter(freelancers, function(freelancer) {
        return (freelancer.income <= averageIncome)
    })

    results.underperform = _.sortBy(results.underperform, 'income')

    return results
};

// export the worker function as a nodejs module
module.exports = worker;


/*


 'use strict';

 var _ = require("lodash");

 var analyze = function (item) {

 var average,
 underperform,
 overperform;

 // Sort
 item = _.sortBy(item, "income");

 // Sum of all incomes
 average = _.reduce(item, function(sum, num) {
 return sum + num.income;
 }, 0);

 // calculate average
 average = average / item.length;

 // filter underperformer
 underperform = _.filter(item, function (num) {
 return num.income <= average;
 });

 // filter overperformer
 overperform = _.filter(item, function (num) {
 return num.income > average;
 });

 return {
 average: average,
 underperform: underperform,
 overperform: overperform
 };

 };

 module.exports = analyze;

 */