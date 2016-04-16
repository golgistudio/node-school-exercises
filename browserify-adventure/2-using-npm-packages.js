var uniq = require("uniq")
var prompt = require('prompt')

prompt.start()
prompt.get(['message'], function(err, result) {
	console.log(uniq(result.message.split(',')))
})

