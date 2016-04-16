
var duplexer = require('duplexer2')

var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
	var newProcess = spawn(cmd, args)
	return duplexer(newProcess.stdin, newProcess.stdout)
};
