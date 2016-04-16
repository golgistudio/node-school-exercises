module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(prev, curr, index, arr) {
    prev.push(fn.call(thisArg, curr, index, arr))
    return prev
  }, [])
}
