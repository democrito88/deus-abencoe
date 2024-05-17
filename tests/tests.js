// test.js
const greet = require('./index');
const assert = require('assert');

assert.strictEqual(greet('World'), 'Hello, World!');
console.log('All tests passed!');
