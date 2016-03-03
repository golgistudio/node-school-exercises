var fs = require('fs')

var inputFile = process.argv[2]

function callback(err, data) {

	if (!err) {

		var str = data.toString()

		var lines = str.split('\n')

		console.log(lines.length -1)
	}
}

fs.readFile(inputFile, callback)

