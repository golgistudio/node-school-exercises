var through = require('through2')
var split = require('split')


var count = 0
function write(buffer, encoding, next) {
	var output = ""
	if (count % 2) {
		output = buffer.toString().toUpperCase()
	} else {
		output = buffer.toString().toLowerCase()
	}
	count++
	this.push(output)	
	this.push('\n')	
	next()
}

function end(done) {
	done()
}


var stream = through(write, end)

process.stdin
	.pipe(split())
	.pipe(stream) 
  .pipe(process.stdout)
