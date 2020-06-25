// const usuarios = require('./mongoose')
const validação = require('./validação')

async function listarUsuarios () {
  return await usuarios.usuario.find({})
}
async function criarUsuario (nome, email, senha, telefone) {
  let valido = validação.publicacao([nome, email, senha, telefone])
  if (valido) {
    return await usuarios.usuario.create({nome, email, senha, telefone})
  }
}

module.exports = {
  listarUsuarios,
  criarUsuario,
}