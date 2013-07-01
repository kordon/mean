var mean = process.env.MEAN_COVERAGE ? require('../lib-cov/mean.js') : require('..'),
    assert = require('chai').assert

suite('Mean');

test('result', function(){
  assert.ok(mean([111, 222, 333, 444, 555]) === 333)
})