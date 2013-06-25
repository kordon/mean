/**
 * Get the mean interval
 *
 * @returns {number} mean
 */
module.exports = function (intervals) {
  return intervals.reduce(function (prev, curr) {
    return prev + curr
  }) / intervals.length
}