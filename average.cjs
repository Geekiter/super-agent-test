'use strict';

/**
 * 计算数值数组的平均值。
 * 零依赖实现：空数组返回 0，不会产生除零错误。
 *
 * @param {number[]} numbers 普通数值数组
 * @returns {number} 平均值；空数组返回 0
 */
function average(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('average(numbers) 需要一个数组');
  }

  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  for (const n of numbers) {
    if (typeof n !== 'number' || Number.isNaN(n)) {
      throw new TypeError('average(numbers) 只接受数值数组');
    }
    sum += n;
  }

  return sum / numbers.length;
}

// 同时支持 require('average.cjs') 与 const { average } = require('average.cjs')
module.exports = average;
module.exports.average = average;
