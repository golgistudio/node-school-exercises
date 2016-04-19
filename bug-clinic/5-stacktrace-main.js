
var scenario = require('./5-stacktrace.js');

function processResults(error, results) {
  if (error) {
		console.error(error)
	}
	console.log(results);
}

scenario(process.argv[2], processResults);
