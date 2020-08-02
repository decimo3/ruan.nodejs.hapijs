const usuarios = require('./mongoose')
const JWT = require('./auth.JWT')

async function logarUsuarios(email, senha) {
  const result = await usuarios.usuario.exists({ email })
  if (result) {
    const user = await usuarios.usuario.findOne({ email })
    if (user.senha == senha) {
      const { _id, nome, email, telefone } = user
      const Token = await JWT.generateToken({ _id, nome, email, telefone })
      return Token
    } else {
      throw new Error("email ou senha inválidos");
    }
  } else {
    throw new Error("Usuário não existe!");
  }
}

async function criarUsuario(nome, email, senha, telefone) {
  const existEmail = await usuarios.usuario.exists({ email })
  if (existEmail != true) {
    const existTelefone = await usuarios.usuario.exists({ telefone })
    if (existTelefone != true) {
      return await usuarios.usuario.create({ nome, email, senha, telefone })
    } else {
      throw new Error("Já existe usuário com esse telefone!")
    }
  } else {
    throw new Error("Já existe usuário com esse e-mail!")
  }
}

module.exports = {
  logarUsuarios,
  criarUsuario,
}