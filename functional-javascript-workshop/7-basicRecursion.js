function reduce(arr, fn, initial) {
  return (function step(index, value) {
    			if (index >= arr.length ) {
						return value 
					}
    			return step(index + 1, fn(value, arr[index], index, arr)) 
 			})(0, initial) 
}

module.exports = reduce
