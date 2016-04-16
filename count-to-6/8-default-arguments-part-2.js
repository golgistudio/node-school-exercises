module.exports = (input, count = input.length) => {
	return `${input}${'!'.repeat(count)}`
}
