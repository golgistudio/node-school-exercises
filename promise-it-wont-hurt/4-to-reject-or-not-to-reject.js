'use strict'

var promise = new Promise(function(resolve, reject) {
	resolve('I FIRED');
	reject(new Error('I DID NOT FILE'));
})

function onReject(error) {
		console.log(error.message);
}

promise.then(function(result) {
		console.log(result);
	}, onReject)

