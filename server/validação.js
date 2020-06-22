function publicação(nome, titulo, depoimento) {
  if ((nome == '') || (nome == undefined) || (nome == null)) {
    return false
  } else {
    console.log(`Validação.nome: ${nome}`)
    if ((nome == '') || (nome == undefined) || (nome == null)) {
      return false
    } else {
      console.log(`Validação.titulo: ${titulo}`)
      if ((nome == '') || (nome == undefined) || (nome == null)) {
        return false
      } else {
        console.log(`Validação.depoimento: ${depoimento}`)
        return true
      }
    }
  }
}
module.exports = {
  publicação,
}