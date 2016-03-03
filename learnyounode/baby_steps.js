

var count = 0
var numArgs = process.argv.length

for (var i = 2; i < numArgs; i++ ) {
	count += parseInt(process.argv[i])

}

console.log(count)