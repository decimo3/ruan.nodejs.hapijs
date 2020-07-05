const usuarios = require('./mongoose')
const vakidacao = require('./validacao')

async function logarUsuarios (email, senha) {
  const result =  await usuarios.usuario.exists({email})
  if (result) {
    const user = await usuarios.usuario.findOne({email})
    if (user.senha == senha) {
      const resultado = []
      return resultado //TODO responder requisição com um token
    } else {
      throw new Error("email ou senha inválidos");
      
    }
  } else {
    throw new Error("Usuário não existe!");
    
  }
}
async function criarUsuario (nome, email, senha, telefone) {
  let valido = vakidacao.requisicao([nome, email, senha, telefone])
  if (valido) {
    const result =  await usuarios.usuario.exists({email})
    if (result != true) {
      return await usuarios.usuario.create({nome, email, senha, telefone})
    } else {
      throw new Error("Já existe usuário com esse e-mail!")
    }

  }
}

module.exports = {
  logarUsuarios,
  criarUsuario,
}