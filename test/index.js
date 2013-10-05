var mean = process.env.MEAN_COVERAGE ? require('../lib-cov/mean.js') : require('..'),
    assert = require('assert')

suite('Mean');

test('result', function () {
  assert.equal(mean([111, 222, 333, 444, 555]), 333)
})

test('empty arrya', function () {
  assert.equal(mean([]), 0)
})