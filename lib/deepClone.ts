/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2023-10-30 08:51:37
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2023-10-30 09:05:15
 */
const deepClone = <T>(input: T) => {
  if (typeof input !== 'object' || input === null) {
    return input
  }
  const result: any = Array.isArray(input) ? [] : {}
  for (const key in input) {
    result[key] = deepClone(input[key])
  }
  return result
}

export default deepClone