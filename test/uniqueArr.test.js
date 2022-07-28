/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-07-28 11:06:39
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-07-28 11:18:50
 */
import uniqueArr from '../lib/uniqueArr'

// 校验uniqueArr方法
test('数字数组去重', () => {
  const result = JSON.stringify([0, 3, 32])
  expect(JSON.stringify(uniqueArr([0, 3, 32, 3]))).toBe(result)
})
test('字符串数组去重', () => {
  const result = JSON.stringify(['0', '3', '32'])
  expect(JSON.stringify(uniqueArr(['0', '3', '32', '3']))).toBe(result)
})
test('object数组去重', () => {
  expect(JSON.stringify(uniqueArr([{
    a: 1,
    b: 3,
    c: 32,
    d: 3,
  }, {
    b: 3,
    c: 32,
    d: 3,
  }, {
    a: 123,
    b: 3,
    c: 32,
    d: 3,
  }, {
    a: 1,
    b: 3,
    d: 3,
  }], 'a'))).toBe(JSON.stringify([{
    a: 1,
    b: 3,
    c: 32,
    d: 3,
  }, {
    b: 3,
    c: 32,
    d: 3,
  }, {
    a: 123,
    b: 3,
    c: 32,
    d: 3,
  }]))
})
