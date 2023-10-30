/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2023-10-30 13:42:37
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2023-10-30 13:50:17
 */
class MathPlus {
  constructor() {}
  static sum<T>(numbers: T[], sumField?: keyof T) {
    let res = 0
    numbers.forEach((n) => {
      if (typeof n === 'number') {
        res += n
      } else {
        if (sumField) {
          const number = n[sumField]
          if (typeof number === 'number') {
            res += number
          }
        }
      }
    })
    return res
  }
}

export default MathPlus