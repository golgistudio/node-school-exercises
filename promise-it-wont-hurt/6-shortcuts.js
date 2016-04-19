'use strict'

// var promise = Promise.resolve('PROMISE VALUE');

var promise = Promise.reject(new Error('REJECT VALUE'));

promise.catch (function(err) {
	console.log('THERE IS AN ERROR!');
	console.log(err.message);
});


