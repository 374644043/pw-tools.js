/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-08-12 14:13:40
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-08-12 14:26:44
 */
import list2tree from '../lib/list2tree'

// 校验list2tree方法
test('基础用法', () => {
  expect(JSON.stringify(list2tree([{
    id: '1',
    parentId: '0',
    val: '111',
  }, {
    id: '2',
    parentId: '1',
    val: '222',
  }, {
    id: '3',
    parentId: '2',
    val: '333',
  }, {
    id: '4',
    parentId: '0',
    val: '444',
  }]))).toBe(JSON.stringify([
    {
      id: '1',
      parentId: '0',
      val: '111',
      children: [
        {
          id: '2',
          parentId: '1',
          val: '222',
          children: [
            {
              id: '3',
              parentId: '2',
              val: '333',
            },
          ],
        },
      ],
    },
    {
      id: '4',
      parentId: '0',
      val: '444',
    },
  ]))
})
test('自定义parentKey', () => {
  expect(JSON.stringify(list2tree([{
    id: '1',
    pid: '0',
    val: '111',
  }, {
    id: '2',
    pid: '1',
    val: '222',
  }, {
    id: '3',
    pid: '2',
    val: '333',
  }, {
    id: '4',
    pid: '0',
    val: '444',
  }], 'pid'))).toBe(JSON.stringify([
    {
      id: '1',
      pid: '0',
      val: '111',
      children: [
        {
          id: '2',
          pid: '1',
          val: '222',
          children: [
            {
              id: '3',
              pid: '2',
              val: '333',
            },
          ],
        },
      ],
    },
    {
      id: '4',
      pid: '0',
      val: '444',
    },
  ]))
})
test('自定义idKey', () => {
  expect(JSON.stringify(list2tree([{
    uuid: '1',
    pid: '0',
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
    pid: '0',
    val: '444',
  }], 'pid', 'uuid'))).toBe(JSON.stringify([
    {
      uuid: '1',
      pid: '0',
      val: '111',
      children: [
        {
          uuid: '2',
          pid: '1',
          val: '222',
          children: [
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
      pid: '0',
      val: '444',
    },
  ]))
})
test('自定义topVal', () => {
  expect(JSON.stringify(list2tree([{
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
  }], 'pid', 'uuid', 'test'))).toBe(JSON.stringify([
    {
      uuid: '1',
      pid: 'test',
      val: '111',
      children: [
        {
          uuid: '2',
          pid: '1',
          val: '222',
          children: [
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
  ]))
})
