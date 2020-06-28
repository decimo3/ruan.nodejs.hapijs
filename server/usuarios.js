const usuarios = require('./mongoose')
const validação = require('./validacao')

async function logarUsuarios (email, senha) {
  const result =  await usuarios.usuario.exists({email})
  if (result) {
    const user = await usuarios.usuario.findOne()
    if (user.senha == senha) {
      const resultado = []
      return resultado
    } else {
      throw new Error("email ou senha inválidos");
      
    }
  } else {
    throw new Error("Usuário não existe!");
    
  }
}
async function criarUsuario (nome, email, senha, telefone) {
  let valido = validação.publicacao([nome, email, senha, telefone])
  if (valido) {
    return await usuarios.usuario.create({nome, email, senha, telefone})
  }
}

module.exports = {
  logarUsuarios,
  criarUsuario,
}