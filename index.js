function Then () {}

Then.prototype.resolve = function () {}
Then.prototype.reject = function () {}
Then.prototype.then = function () {}

module.exports.deferred = function () {
  var then = new Then()
  return {
    promise: then,
    resolve: then.resolve,
    reject: then.reject
  }
}
