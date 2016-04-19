'use strict'

var promise = new Promise(function(resolve, reject) {
	resolve('PROMISE VALUE');
})

function onReject(error) {
		console.log(error.message);
}

promise.then( console.log,  onReject)

console.log('MAIN PROGRAM')

