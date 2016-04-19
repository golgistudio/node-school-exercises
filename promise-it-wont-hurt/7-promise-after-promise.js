'use strict';

var firstPromise = first();

var secondPromise = firstPromise.then(function(result) {
	return second(result);
}) ;

secondPromise.then(console.log)

