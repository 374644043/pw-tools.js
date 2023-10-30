/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2023-10-30 13:51:06
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2023-10-30 16:02:31
 */
const promiseAllSettled = async <T>(promiseList: Promise<T>[]) => {
  const results: ({
    status: 'fulfilled' | 'rejected'
    value?: T
    reason?: T
  } | null)[] = []
  promiseList.forEach((promise, index) => {
    results.push(null)
    promise.then(res => results[index] = {
      status: 'fulfilled',
      value: res,
    }).catch(err => results[index] = {
      status: 'rejected',
      reason: err,
    })
  })
  const checkFinished = (resolve: (value?: unknown) => void) => {
    if (results.some(res => res === null)) {
      setTimeout(() => checkFinished(resolve), 500)
    } else {
      resolve()
    }
  }
  await new Promise(checkFinished)
  return results
}

export default promiseAllSettled