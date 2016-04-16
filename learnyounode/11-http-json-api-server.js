var http = require('http')
var url = require('url')

var portNum = process.argv[2]

var server = http.createServer(function(req, res) {
	if (req.method === 'GET') {
	  var urlObj = url.parse (req.url)
		var params = urlObj.query.split('=')

		var date = new Date(params[1])

		if (urlObj.pathname === '/api/parsetime') {
			res.writeHead(200, {'Content-type': 'application/json'})
		  var responseBody = {
					'hour': date.getHours(), 
					'minute' : date.getMinutes(), 
					'second' : date.getSeconds()
			}
			res.write(JSON.stringify(responseBody))
			res.end()
			
		} else if (urlObj.pathname  === '/api/unixtime') {
			res.writeHead(200, {'Content-type': 'application/json'})
			var responseBody = {
				'unixtime': date.getTime()
			}
			res.write(JSON.stringify(responseBody))
			res.end()
		}
	}
})

server.listen(portNum)



/* 

 var http = require('http')
     var url = require('url')

     function parsetime (time) {
       return {
         hour: time.getHours(),
         minute: time.getMinutes(),
         second: time.getSeconds()
       }
     }

     function unixtime (time) {
       return { unixtime : time.getTime() }
     }

     var server = http.createServer(function (req, res) {
       var parsedUrl = url.parse(req.url, true)
       var time = new Date(parsedUrl.query.iso)
       var result

       if (/^\/api\/parsetime/.test(req.url))
         result = parsetime(time)
       else if (/^\/api\/unixtime/.test(req.url))
         result = unixtime(time)

       if (result) {
         res.writeHead(200, { 'Content-Type': 'application/json' })
         res.end(JSON.stringify(result))
       } else {
         res.writeHead(404)
         res.end()
       }
     })
     server.listen(Number(process.argv

*/
