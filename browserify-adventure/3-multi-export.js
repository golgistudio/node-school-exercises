var uniq = require("uniq")
var prompt = require('prompt')

prompt.start()
prompt.get(['string1', 'string2'], function(err, result) {
	console.log(uniq(result.message.split(',')))
})

