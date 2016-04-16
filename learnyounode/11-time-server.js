var net = require('net')

var portNum = process.argv[2]

var server = net.createServer(function (socket) {
       // socket handling logic
	var date = new Date()
	var month = +date.getMonth() + 1
	if (month < 10) {
		month = '0' + month
	}
	var data = date.getFullYear() + '-' + month + '-' + date.getDate()
	data += " " + date.getHours() + ':' + date.getMinutes() + '\n'
	socket.end(data)
})

server.listen(portNum)

/*

var net = require('net')

     function zeroFill(i) {
       return (i < 10 ? '0' : '') + i
     }

     function now () {
       var d = new Date()
       return d.getFullYear() + '-'
         + zeroFill(d.getMonth() + 1) + '-'
         + zeroFill(d.getDate()) + ' '
         + zeroFill(d.getHours()) + ':'
         + zeroFill(d.getMinutes())
     }

     var server = net.createServer(function (socket) {
       socket.end(now() + '\n')
     })

     server.listen(Number(process.argv[2]))
 */
