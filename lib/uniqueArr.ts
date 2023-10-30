/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2023-10-30 14:41:43
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2023-10-30 15:09:00
 */
const uniqueArr = <T>(arr: T[], uniqueKey?: keyof T) => {
  if (arr.some(Object.prototype.isPrototypeOf)) {
    if (uniqueKey === undefined) {
      throw new Error("uniqueArr need uniqueKey when arr has object child")
    }
    const result: T[] = []
    const uniqueVals: unknown[] = []
    arr.forEach(a => {
      if (uniqueVals.includes(a[uniqueKey])) {
        uniqueVals.push(a[uniqueKey])
        result.push(a)
      }
    })
    return result
  } else {
    return Array.from(new Set(arr))
  }
}

export default uniqueArr