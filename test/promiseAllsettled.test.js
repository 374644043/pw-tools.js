/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-08-15 16:19:03
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-08-15 16:28:26
 */
import promiseAllsettled from '../lib/promiseAllsettled'

test('基础测试', async () => {
  const promise1 = Promise.resolve(3)
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'foo')
  })
  const promises = [promise1, promise2]
  const results = await promiseAllsettled(promises)
  expect(results[0].status + ' ' + results[1].status).toBe('fulfilled rejected')
})
