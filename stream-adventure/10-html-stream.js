var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var convert = through( function(chunk, enc, callback) {
	this.push(chunk.toString().toUpperCase())
	callback()
})


var stream = tr.select('.loud').createStream();

process.stdin.pipe(tr).pipe(process.stdout);

stream.pipe(convert).pipe(stream)


/*

/ Here's the reference solution:

  var trumpet = require('trumpet');
  var through = require('through2');
  var tr = trumpet();

  var loud = tr.select('.loud').createStream();
  loud.pipe(through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  })).pipe(loud);

  process.stdin.pipe(tr).pipe(process.stdout);

*/
