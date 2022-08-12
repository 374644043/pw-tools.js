/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-08-12 10:40:11
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-08-12 16:40:56
 */
/**
 * @description: list to tree
 * @param {object[]} list
 * @param {string} parentKey
 * @param {string} idKey
 * @param {string | number | null} topVal
 * @return {object[]}
 */
export default (list, parentKey = 'parentId', idKey = 'id', topVal = '0') => {
  const map = {}
  const roots = []
  let node = []

  for (let i = 0; i < list.length; i += 1) {
    map[list[i][idKey]] = i // initialize the map
  }

  for (let i = 0; i < list.length; i += 1) {
    node = list[i]
    if (node[parentKey] !== topVal) {
      const parentIndex = map[node[parentKey]]
      if (parentIndex === undefined) {
        roots.push(node)
      } else {
        if (list[parentIndex].children) {
          list[parentIndex].children.push(node)
        } else {
          list[parentIndex].children = [node]
        }
      }
    } else {
      roots.push(node)
    }
  }
  return roots
}
