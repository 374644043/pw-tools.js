/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-07-28 11:41:42
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-07-28 15:16:29
 */
import getQueryObject from '../lib/getQueryObject'

// 校验getQueryObject方法
test('无参数', () => expect(JSON.stringify(getQueryObject('http://localhost:8080/#/diy-form/652881639728269290'))).toBe(JSON.stringify({})))
test('有参数', () => expect(JSON.stringify(getQueryObject('http://192.168.19.115:7111/#/user/login?redirect=%2F'))).toBe(JSON.stringify({redirect: '/'})))
