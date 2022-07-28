/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-07-28 11:36:29
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-07-28 11:39:56
 */
/**
 * @description: 根据传入的url解析出参数对象返回，不传默认解析当前地址
 * @param {String} url
 * @return {Object}
 */
export default (url = window.location.href) => {
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}
