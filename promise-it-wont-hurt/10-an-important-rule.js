'use strict'

function alwaysThrows() {
	throw(new Error('OH NOES'));
}

function iterate(input) {
	console.log(input)
	return input + 1;
}

Promise.resolve(1)
				.then(iterate)
				.then(iterate)
				.then(iterate)
				.then(iterate)
				.then(iterate)
				.then(alwaysThrows)
				.then(iterate)
				.then(iterate)
				.then(iterate)
				.then(iterate)
				.then(null, console.log);
