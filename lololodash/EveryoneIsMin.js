var _ = require ("lodash");

// Use lodash to filter the users to return only the active users
var worker = function (temps) {
    console.log (temps)
    hotArray = []
    warmArray = []

    // Loop through each of the cities
    _.forEach(temps, function(item, index) {

        // If every temp is over 19, add it to the hot list
        if (_.every(item, function(itemEntry) {
                return (itemEntry > 19)
            })) {
            hotArray.push(index)
        } else {
            // If any entry is over 19, add it to the warm list
            if (_.some(item, function(itemEntry) {
                    return (itemEntry > 19)
                })) {
                warmArray.push(index)
            }
        }
    })

    return {
        "hot": hotArray,
        "warm": warmArray
    }
}

module.exports = worker;

/*
Alternative approach

 'use strict';

 var _ = require("lodash");

 var tempsort = function (item) {
    var result = {
        hot: [],
        warm: []
    };

    function check_temp (item) {
        return item > 19;
    }

    _.forEach(item, function (town, townname) {

        if (_.every(town, check_temp)) {
            result.hot.push(townname);
        } else if (_.some(town, check_temp)) {
            result.warm.push(townname);
        }
    });

    return result;
 };

 module.exports = tempsort;

 */