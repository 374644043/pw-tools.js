/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-08-12 14:29:51
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-08-12 16:55:59
 */
/**
 * @description: 树结构数据查询
 * @param {object[]} tree
 * @param {string} searchKey
 * @param {unknown} searchVal
 * @param {string} childrenKey
 * @return {object}
 */
const findTree = (tree, searchKey, searchVal, childrenKey = 'children') => {
  let res
  if (Array.prototype.isPrototypeOf(tree) && tree.length > 0) {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i][searchKey] === searchVal) {
        res = tree[i]
        break
      } else if (tree[i][childrenKey]) {
        const result = findTree(
            tree[i][childrenKey],
            searchKey,
            searchVal,
            childrenKey,
        )
        if (result) {
          res = result
          break
        }
      }
    }
  }
  return res
}
export default findTree
