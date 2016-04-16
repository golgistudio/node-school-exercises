function Spy(target, method) {
  var func = target[method]

  var numTimesInvoked = {
    count: 0
  }

  // replace method with spy method
  target[method] = function() {
    numTimesInvoked.count++ // track function was called
    return func.apply(this, arguments) // invoke original function
  }

  return numTimesInvoked
}

module.exports = Spy
