var fs = require('fs')
var path = require('path')


module.exports = function filter (pathname, extension ) {
	function callback(err, data) {

		for (var i = 0; i < data.length; i++) {
			var fileExtension = path.extname(data[i])

			if (fileExtension === extension) {
				console.log(data[i])
			}
		}
	
	}

	fs.readdir(pathname, callback)
}

