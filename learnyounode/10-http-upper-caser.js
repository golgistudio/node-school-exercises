var map = require('through2-map')
var stream = require('stream')
var http = require('http')
var fs = require('fs')

var portNum = process.argv[2]

var server = http.createServer(function(req, res) {
	var inpData = ''
	if (req.method === 'POST') {
      req.on('data', function(data) {
				inpData += data

      });
      req.on('end', function() {
      	res.writeHead(200, {'Content-Type': 'text/html'});
				var inputStream = new stream.Readable();
				inputStream.push(inpData.toString())
				inputStream.push(null)
     		inputStream.pipe(map(function (chunk) {
       		return chunk.toString().toUpperCase()
     		})).pipe(res)
      });
	}
})

server.listen(portNum)



/* 

var http = require('http')
     var map = require('through2-map')

     var server = http.createServer(function (req, res) {
       if (req.method != 'POST')
         return res.end('send me a POST\n')

       req.pipe(map(function (chunk) {
         return chunk.toString().toUpperCase()
       })).pipe(res)
     })

     server.listen(Number(process.argv[2]))


*/
