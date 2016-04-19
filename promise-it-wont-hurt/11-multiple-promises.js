'use strict';

function all(promise1, promise2) {

	return  new Promise(function(resolve, reject) {
		var counter = 0;
		var output = [];

		promise1.then(function(result) {
			counter++;
			output[0] = result;
			if (counter >= 2) {
				resolve(output)
			}
		});

		promise2.then(function(result) {
			counter++;
			output[1] = result;

			if (counter >= 2) {
				resolve(output)
			}
		});
	});
}


var p1 = new Promise(console.log, null);
var p2 = new Promise(console.log, null);

setTimeout(function() {
	all(p1, p2)
}, 650);
