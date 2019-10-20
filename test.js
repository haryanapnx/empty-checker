const isEmpty = require('./index')
const assert = require('assert')

// true when value = 0
assert.strictEqual(true, isEmpty(0), '0 is empty');
// true when value = ""
assert.strictEqual(true, isEmpty(""), '"" is empty');
// false when value = "1"
assert.strictEqual(false, isEmpty(1), '1 is not empty');
// true when value = "0"
assert.strictEqual(true, isEmpty("0"), '0 is empty');
// true when value  = {}
assert.strictEqual(true, isEmpty({}), '{} is empty');
// true when value  = " "
assert.strictEqual(true, isEmpty(" "), '" " is empty');
// false when value  = " a s d  "
assert.strictEqual(false, isEmpty(" a s d "), '" a s d " is not empty');

console.log("test running successfully");
