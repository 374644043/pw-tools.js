/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2023-10-30 09:23:34
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2023-10-30 13:41:54
 */
import deepClone from "./deepClone"

const list2tree = <T, U>(list: T[], idKey: keyof T, parentKey: keyof T, topVal: U) => {
  const map: Record<string | number, number> = {}
  const roots: T[] = []
  const data = deepClone(list)
  for (let index = 0; index < data.length; index++) {
    map[data[index][idKey]] = index
    data[index].children = []
  }
  for (let index = 0; index < data.length; index++) {
    const node = data[index]
    if (node[parentKey] !== topVal) {
      const parentIndex = map[node[parentKey]]
      if (parentIndex === undefined) {
        roots.push(node)
      } else {
        data[parentIndex].children.push(node)
      }
    } else {
      roots.push(node)
    }
  }
  return roots
}

export default list2tree