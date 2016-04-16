var http = require('http');
var through = require('through2');
var stream = require('stream')

function write (buf, _, next) {
	this.push(buf.toString().toUpperCase());
	next();
}

function end (done) { 
	done(); 
}

var outStream = through(write, end)

var server = http.createServer(function (req, res) {
	var inpData = ""
	if (req.method === 'POST') {
		req.on('data', function(data) {
			inpData += data
		})
		req.on('end', function() {
			 res.writeHead(200, {'Content-Type': 'text/html'});
				var inputStream = new stream.Readable();
				inputStream.push(inpData)
				inputStream.push(null)
     		inputStream.pipe(outStream)
									 .pipe(res)
		})
  }
});


server.listen(process.argv[2]);


/**


var http = require('http');
  var through = require('through2');

  var server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
          req.pipe(through(function (buf, _, next) {
              this.push(buf.toString().toUpperCase());
              next();
          })).pipe(res);
      }
      else res.end('send me a POST\n');
  });
  server.listen(parseInt(process.argv[2]));
 
*/
