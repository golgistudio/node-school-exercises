var inputs = process.argv.slice(2);

var output = ""
var result = inputs.map((item) => {
							return item.substring(0,1)
						})
							.reduce((prev, curr, index, array) => {
								output += curr
						}, output)

console.log(`[${inputs}] becomes "${output}"`)
