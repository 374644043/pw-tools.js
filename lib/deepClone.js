/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-08-15 09:34:46
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-08-15 09:45:30
 */
/**
 * @description: 对传入变量进行深复制
 * @param {T} obj
 * @return {T}
 */
const deepClone = (obj) => {
  if (typeof obj === 'object') {
    if (Array.prototype.isPrototypeOf(obj)) {
      const newArr = []
      for (let i = 0; i < obj.length; i++) {
        if (typeof obj[i] === 'object') {
          newArr.push(deepClone(obj[i]))
        } else {
          newArr.push(obj[i])
        }
      }
      return newArr
    } else {
      const newObj = {}
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = deepClone(obj[key])
        }
      }
      return newObj
    }
  } else {
    return obj
  }
}

export default deepClone
