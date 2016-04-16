var filter = require('./module.js')

var pathname = process.argv[2]
var extension = "." + process.argv[3]

filter(pathname, extension)
