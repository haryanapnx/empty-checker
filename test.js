const isEmpty = require('./index')
const assert = require('assert')
// true when value = 0
assert.equal(true, isEmpty(0), '0 is empty');

// true when value = ""
assert.equal(true, isEmpty(""), '"" is empty');

// false when value = "1"
assert.equal(false, isEmpty(1), '1 is not empty');

// true when value = "0"
assert.equal(true, isEmpty("0"), '0 is empty');

// true when value = "0"
// console.log(emptyObject)
return assert.equal(true, isEmpty({}), '{} is empty');