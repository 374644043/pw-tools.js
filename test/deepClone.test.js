/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-08-15 09:46:29
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-08-15 13:38:01
 */
import deepClone from '../lib/deepClone'

test('深复制数组', () => {
  const orignArr = [
    {
      a: {
        b: '111',
      },
    },
  ]
  const resultArr = deepClone(orignArr)
  resultArr[0].a.b = '2222'
  expect(orignArr[0].a.b).toBe('111')
})
test('深复制对象', () => {
  const orignObj = {
    a: {
      b: '111',
    },
  }
  const resultObj = deepClone(orignObj)
  resultObj.a.b = '2222'
  expect(orignObj.a.b).toBe('111')
})
test('不需要深复制的内容直接返回', () => {
  expect(deepClone('111')).toBe('111')
})
