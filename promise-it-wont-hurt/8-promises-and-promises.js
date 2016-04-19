'use strict';

function attachTitle(input) {
	return 'DR. ' + input;

}

var promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle)
			.then(console.log);


