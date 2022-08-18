/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-08-15 14:41:07
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-08-15 16:18:13
 */
/**
 * @description: 针对目前浏览器不兼容Promise.allSettled封装的方法，接受参数和返回与Promise.allSettled相同
 * @param {Promise[]} promiseList
 * @return {object[]}
 */
export default (promiseList) => {
  return new Promise((resolve) => {
    const results = promiseList.flatMap(() => '')
    promiseList.forEach((pl, pli) => {
      pl.then((res) => results[pli] = {
        status: 'fulfilled',
        value: res,
      }).catch((err) => results[pli] = {
        status: 'rejected',
        reason: err,
      })
    })
    const checkFinished = (resolve1) => {
      if (results.some((r) => !r)) {
        setTimeout(() => checkFinished(resolve1), 500)
      } else {
        resolve1()
      }
    }
    new Promise(checkFinished).then(() => resolve(results))
  })
}
