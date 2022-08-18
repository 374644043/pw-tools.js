/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-08-16 14:22:51
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-08-18 09:16:12
 */
/**
 * @description: math加强类，用来补充Math类中没有的常规数学计算
 */
class MathPlus {
  /**
   * @description: 构造函数，暂无操作
   * @return {void}
   */
  constructor() {}
  /**
   * @description: 对传入的数据进行求和
   * @param {any[]} numbers
   * @param {string} sumField
   * @return {number}
   */
  static sum(numbers, sumField) {
    let res = 0
    numbers.forEach((n) => {
      if (typeof n === 'number') {
        res += n
      } else {
        if (sumField && n[sumField]) {
          res += n[sumField]
        }
      }
    })
    return res
  }
}

export default MathPlus
