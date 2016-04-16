function loadUsers(userIds, load, done) {
  var count = 0
  var users = []
  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user
			count++
      if (count === userIds.length) {
				return done(users)
			}
    })
  })
}

module.exports = loadUsers
