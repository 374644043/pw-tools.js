export const dictFilter = <T = any>(val: unknown, dict: T[], searchKey: keyof T, showKey: keyof T) => {
  const data = dict.find((item) => item[searchKey] === val)
  return data ? data[showKey] : ''
}
