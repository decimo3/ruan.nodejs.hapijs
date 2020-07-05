function requisicao(...args) {
  let result = true
  args.forEach(element => {
    if ((element == '') || (element == undefined) || (element == null)) {
      return false
    }
  })
  return result
}
module.exports = {
  requisicao,
}