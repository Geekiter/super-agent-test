'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const average = require('./average.cjs');

test('average([2, 4]) 返回 3', () => {
  assert.equal(average([2, 4]), 3);
});

test('average([]) 返回 0', () => {
  assert.equal(average([]), 0);
});
