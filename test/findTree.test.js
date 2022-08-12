/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-08-12 15:03:45
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-08-12 16:45:45
 */
import findTree from '../lib/findTree'

test('基础调用', () => {
  expect(JSON.stringify(findTree([{
    uuid: '1',
    pid: 'test',
    val: '111',
  }, {
    uuid: '2',
    pid: '1',
    val: '222',
  }, {
    uuid: '3',
    pid: '2',
    val: '333',
  }, {
    uuid: '4',
    pid: 'test',
    val: '444',
  }], 'pid', 'test'))).toBe(JSON.stringify({
    uuid: '1',
    pid: 'test',
    val: '111',
  }))
})
test('自定义childrenKey', () => {
  expect(JSON.stringify(findTree([
    {
      uuid: '1',
      pid: 'test',
      val: '111',
      list: [
        {
          uuid: '2',
          pid: '1',
          val: '222',
          list: [
            {
              uuid: '3',
              pid: '2',
              val: '333',
            },
          ],
        },
      ],
    },
    {
      uuid: '4',
      pid: 'test',
      val: '444',
    },
  ], 'pid', '2', 'list'))).toBe(JSON.stringify({
    uuid: '3',
    pid: '2',
    val: '333',
  }))
})
