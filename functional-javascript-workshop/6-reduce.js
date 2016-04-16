function countWords(inputWords) {
	var result = {}
	inputWords.reduce(function(previousValue, currentValue, currentIndex, array) {
		if (result[currentValue] === undefined) {
			result[currentValue] = 1
		} else {
			result[currentValue] += 1
		}
	}, result)
	return result
}


module.exports = countWords
