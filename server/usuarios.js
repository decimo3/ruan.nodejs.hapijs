const usuarios = require('./mongoose')

async function logarUsuarios(email, senha) {
  const result = await usuarios.usuario.exists({ email })
  if (result) {
    const user = await usuarios.usuario.findOne({ email })
    if (user.senha == senha) {
      return user
    } else {
      throw new Error("email ou senha inválidos");
    }
  } else {
    throw new Error("Usuário não existe!");
  }
}

async function criarUsuario(nome, login, email, fone, senha, data) {
  const existEmail = await usuarios.usuario.exists({ email })
  if (existEmail != true) {
    const existTelefone = await usuarios.usuario.exists({ telefone: fone })
    if (existTelefone != true) {
      return await usuarios.usuario.create({ nome, login, email, fone, senha, data })
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