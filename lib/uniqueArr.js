/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-07-27 11:45:45
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-07-28 11:01:37
 */
import {isEmpty} from './validate'

/**
 * @description: 将传入的数组进行去重，传入uniqueKey时，数组子元素视为object，根据其uniqueKey对应的值进行去重
 * @param {Array<T>} arr
 * @param {String} uniqueKey
 * @return {Array<T>}
 */
export default (arr, uniqueKey) => {
  if (isEmpty(uniqueKey)) {
    return Array.from(new Set(arr))
  } else {
    const result = []
    const uniqueVals = []
    arr.forEach((a) => {
      if (uniqueVals.indexOf(a[uniqueKey]) < 0) {
        uniqueVals.push(a[uniqueKey])
        result.push(a)
      }
    })
    return result
  }
}
