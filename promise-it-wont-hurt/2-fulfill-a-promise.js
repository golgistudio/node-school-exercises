'use strict'

var promise = new Promise(function(resolve, reject) {

	setTimeout(() => {
		resolve ('FULFILLED!');
	}, 300);

})

promise.then(function(result) {
		console.log(result);
	}, function(err) {
		console.log(err);
	})
