http = require("http")

var collect = ["","",""];
var done = [0,0,0]

function printAll(collect) {
       console.log(collect[0])
       console.log(collect[1])
       console.log(collect[2])
}

http.get(process.argv[2], function(res) {
  res.setEncoding('utf8');
  res.on("data", function(data) {
		collect[0] += data
	})
  res.on("end", function() {
		done[0] = 1;
    if (done[1] && done[2]) {
	     printAll(collect)
	  }
  })
}).on('error', function(e) {
  console.log("Got error: " + e.message);
})

http.get(process.argv[3], function(res) {
  res.setEncoding('utf8');
  res.on("data", function(data) {
		collect[1] += data
	})
  res.on("end", function() {
		done[1] = 1;
    if (done[0] && done[2]) {
	     printAll(collect)
	  }
	})
}).on('error', function(e) {
  console.log("Got error: " + e.message);
})

http.get(process.argv[4], function(res) {
  res.setEncoding('utf8');
  res.on("data", function(data) {
		collect[2] += data
  	})
  res.on("end", function() {
		done[2] = 1;
    if (done[0] && done[1]) {
	     printAll(collect)
	  }
  })
}).on('error', function(e) {
  console.log("Got error: " + e.message);
})


/*

 var http = require('http')
     var bl = require('bl')
     var results = []
     var count = 0

     function printResults () {
       for (var i = 0; i < 3; i++)
         console.log(results[i])
     }

     function httpGet (index) {
       http.get(process.argv[2 + index], function (response) {
         response.pipe(bl(function (err, data) {
           if (err)
             return console.error(err)

           results[index] = data.toString()
           count++

           if (count == 3)
             printResults()
         }))
       })
     }

     for (var i = 0; i < 3; i++)
       httpGet(i)
*/
