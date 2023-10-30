/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2023-10-30 15:09:35
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2023-10-30 15:54:09
 */
export const isEmpty = <T>(val: T) => val === undefined || val === null || (typeof val === 'string' && val === '') || (Array.isArray(val) && val.length === 0) || (Object.prototype.isPrototypeOf(val) && Object.keys(val).length === 0)

export const isUrl = (val: string) => /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(val)

export const isPhone = (val: string) => /^1[3456789]\d{9}$|^0\d{2,3}-?\d{7,8}$/.test(val)

const isTrueValidateCodeBy18IdCard = (aIdCard: string[]) => {
  const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
  const ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]
  let sum = 0
  if (aIdCard[17].toLowerCase() === 'x') {
    aIdCard[17] = '10'
  }
  for (let i = 0; i < 17; i++) {
    sum += Wi[i] * parseInt(aIdCard[i])
  }
  const valCodePosition = sum % 11
  if (aIdCard[17] === `${ValideCode[valCodePosition]}`) {
    return true
  } else {
    return false
  }
}
const isValidityBrithBy18IdCard = (idCard: string) => {
  const year = idCard.substring(6, 10)
  const month = idCard.substring(10, 12)
  const day = idCard.substring(12, 14)
  const tempDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  if (
    tempDate.getFullYear() != parseInt(year) ||
        tempDate.getMonth() != parseInt(month) - 1 ||
        tempDate.getDate() != parseInt(day)
  ) {
    return false
  } else {
    return true
  }
}
export const idCardValidate = (idCard: string) => {
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