http = require("http")

http.get(process.argv[2], function(res) {
  var collect = "";
  res.setEncoding('utf8');
  res.on("data", function(data) {
		collect += data
	})
  res.on("end", function() {
	console.log(collect.length)
	console.log(collect)
  })

}).on('error', function(e) {
  console.log("Got error: " + e.message);
})
