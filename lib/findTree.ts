/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2023-10-30 09:07:09
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2023-10-30 15:57:12
 */
const findTree = <T, U>(tree: T[], searchKey: string, searchVal: U, childrenKey = 'children') => {
  let res: T | undefined
  for (let index = 0; index < tree.length; index++) {
    if (tree[index][searchKey] === searchVal) {
      res = tree[index]
      break
    } else if (tree[index][childrenKey]) {
      const result = findTree<T, U>(tree[index][childrenKey], searchKey, searchVal, childrenKey)
      if (result) {
        res = result
        break
      }
    }
  }
  return res
}

export default findTree