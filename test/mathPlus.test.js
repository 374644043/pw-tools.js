/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-08-16 15:17:33
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-08-16 15:24:31
 */
import MathPlus from '../lib/mathPlus'

test('数字求和', () => {
  expect(MathPlus.sum([1, 2, 3])).toBe(6)
})
test('对象求和', () => {
  expect(MathPlus.sum([{a: 1}, {b: 2}, {a: 3}], 'a')).toBe(4)
})
test('混合求和', () => {
  expect(MathPlus.sum([{a: 1}, 2, {a: 3}], 'a')).toBe(6)
})
