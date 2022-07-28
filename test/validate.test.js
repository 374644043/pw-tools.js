/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-07-26 09:18:56
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-07-27 11:43:40
 */
import validate from '../lib/validate'

// 校验isEmpty
test('0不为空', () => expect(validate.isEmpty(0)).toBe(false))
test('非空字符串不为空', () => expect(validate.isEmpty('0')).toBe(false))
test('false不为空', () => expect(validate.isEmpty(true)).toBe(false))
test('true不为空', () => expect(validate.isEmpty(false)).toBe(false))
test('undefined为空', () => expect(validate.isEmpty(undefined)).toBe(true))
test('null为空', () => expect(validate.isEmpty(null)).toBe(true))
test('空字符串为空', () => expect(validate.isEmpty('')).toBe(true))
test('空对象为空', () => expect(validate.isEmpty({})).toBe(true))
test('空数组为空', () => expect(validate.isEmpty([])).toBe(true))

// 校验isUrl
test('必须有http头', () => expect(validate.isUrl('www.baidu.com')).toBe(false))
test('不能是非http头', () => expect(validate.isUrl('ws://www.baidu.com')).toBe(false))
test('http', () => expect(validate.isUrl('http://www.baidu.com')).toBe(true))
test('https', () => expect(validate.isUrl('https://www.baidu.com')).toBe(true))
test('可以包含路由', () => expect(validate.isUrl('http://www.baidu.com/search')).toBe(true))

// 校验isPhone
test('位数不足', () => expect(validate.isPhone('1300150122')).toBe(false))
test('非正常手机号', () => expect(validate.isPhone('11111111111')).toBe(false))
test('不能含有区域头', () => expect(validate.isPhone('+8613001501223')).toBe(false))
test('130号段', () => expect(validate.isPhone('13001501223')).toBe(true))
test('136号段', () => expect(validate.isPhone('13697678483')).toBe(true))
test('139号段', () => expect(validate.isPhone('13964418092')).toBe(true))
test('165号段', () => expect(validate.isPhone('16553551156')).toBe(true))
test('166号段', () => expect(validate.isPhone('16605338868')).toBe(true))
test('178号段', () => expect(validate.isPhone('17861118633')).toBe(true))

// 校验idCardValidate
test('错误号码', () => expect(validate.isPhone('21611561132121315x')).toBe(false))
