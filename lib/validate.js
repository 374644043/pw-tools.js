/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-07-25 13:09:38
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-07-26 13:27:39
 */
/**
 * @description: 判断传入参数是否为空
 * @param {*} val
 * @return {Boolean}
 */
export const isEmpty = (val) => {
  return val === undefined || val === null || val === '' ||
  (Array.prototype.isPrototypeOf(val) && val.length === 0) ||
  (Object.prototype.isPrototypeOf(val) && Object.keys(val).length === 0)
}
/**
 * @description: 判断传入参数是否为完整的url地址
 * @param {String} val
 * @return {Boolean}
 */
export const isUrl = (val) => {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(val)
}
/**
 * @description: 判断传入参数是否为手机号
 * @param {String} val
 * @return {Boolean}
 */
export const isPhone = (val) => {
  return /^1[3456789]\d{9}$|^0\d{2,3}-?\d{7,8}$/.test(val)
}

const isTrueValidateCodeBy18IdCard = (aIdCard) => {
  const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
  const ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]
  let sum = 0
  if (aIdCard[17].toLowerCase() == 'x') {
    aIdCard[17] = 10
  }
  for (let i = 0; i < 17; i++) {
    sum += Wi[i] * aIdCard[i]
  }
  const valCodePosition = sum % 11
  if (aIdCard[17] == ValideCode[valCodePosition]) {
    return true
  } else {
    return false
  }
}
const isValidityBrithBy18IdCard = (idCard) => {
  const year = idCard.substring(6, 10)
  const month = idCard.substring(10, 12)
  const day = idCard.substring(12, 14)
  const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day))
  if (
    tempDate.getFullYear() != parseFloat(year) ||
        tempDate.getMonth() != parseFloat(month) - 1 ||
        tempDate.getDate() != parseFloat(day)
  ) {
    return false
  } else {
    return true
  }
}
/**
 * @description: 判断传入参数是否为身份证号
 * @param {String} idCard
 * @return {Boolean}
 */
export const idCardValidate = (idCard) => {
  if (idCard.length == 18) {
    const aIdCard = idCard.split('')
    if (
      isValidityBrithBy18IdCard(idCard) &&
            isTrueValidateCodeBy18IdCard(aIdCard)
    ) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export default {
  isEmpty,
  isUrl,
  isPhone,
  idCardValidate,
}
