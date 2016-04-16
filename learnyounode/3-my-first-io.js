var fs = require('fs')

var inputFile = process.argv[2]

var buf = fs.readFileSync(inputFile)

var str = buf.toString()

var lines = str.split('\n')


console.log(lines.length -1)