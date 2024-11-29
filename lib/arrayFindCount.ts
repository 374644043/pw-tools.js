export default <T = any>(arr: T[], findMethod: (item: T, index: number) => boolean) => {
  let count = 0
  arr.forEach((item, index) => findMethod(item, index) && count++)
  return count
}
