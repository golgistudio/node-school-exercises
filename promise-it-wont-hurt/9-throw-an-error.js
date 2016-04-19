'use strict';

function parsePromise(input) {

	return new Promise(function(resolve, reject) {
		try {
			resolve(JSON.parse(input));

		} catch(err) {
			reject(err);
		}
	});
}

parsePromise(process.argv[2]).then(null, console.log);
