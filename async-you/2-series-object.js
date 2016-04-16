var http = require('http')
var async = require('async');

var url1 = process.argv[2]
var url2 = process.argv[3]

async.series({
  requestOne: function (cb) {
    http.get(url1, function (res) {
      var body = '';
      res.on('data', function (chunk) {
        body += chunk.toString();
      }).on('end', function () {
        cb(null, body);
      });
    }).on('error', function (err) {
      return cb(err);
    });
  },

  requestTwo: function (cb) {
    http.get(url2, function (res) {
      var body = '';
      res.on('data', function (chunk) {
        body += chunk.toString();
      }).on('end', function () {
        cb(null, body);
      });
    }).on('error', function (err) {
      return cb(err);
    });
  }
}, function (err, result) {
  if (err) {
    return console.error(err);
  }

  console.log(result);
});


