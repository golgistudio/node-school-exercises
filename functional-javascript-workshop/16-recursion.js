function getDependencies(mod, result) {
  result = result || []
  var dependencies = mod && mod.dependencies || []
  Object.keys(dependencies).forEach(function(depItem) {
    var key = depItem + '@' + mod.dependencies[depItem].version
    if (result.indexOf(key) === -1) {
			result.push(key)
		}
    getDependencies(mod.dependencies[depItem], result)
  })
  return result.sort()
}

module.exports = getDependencies
