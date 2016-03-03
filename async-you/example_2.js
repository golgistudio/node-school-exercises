
 var http = require('http')
 var async = require('async')
 var fs = require('fs')



async.waterfall([
      function getdata(url, cb){
        var body = '';
        // response is JSON encoded object like the following {port: 3132}
        http.get(url, function(res){
          res.on('data', function(chunk){
            body += chunk.toString();
          });
          res.on('end', function(){
            cb(null, body);
          });
        }).on('error', function(err) {
          cb(err);
        });
      }
])


function callback(err, body) {

	if (err === null) {
		console.log(body)
	}

}

var fileName = process.argv[2]

fs

getData(url, callback)

