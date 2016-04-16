// include the Lo-Dash library
var _ = require("lodash");

var worker = function(words) {
    return  _.chain(words)
        .sort()
        .map(function(word) {
            return word.toUpperCase() + 'CHAINED'
        })
};

// export the worker function as a nodejs module
module.exports = worker;

/*
 'use strict';

 var _ = require("lodash");

 var wordsmodify = function (arr) {
    return _.chain(arr)
            .map(function (item) {
            return item + 'Chained';
        })
        .map(function (item) {
            return item.toUpperCase();
        })
        .sortBy()
        .value();
 };
 module.exports = wordsmodify;


 */
