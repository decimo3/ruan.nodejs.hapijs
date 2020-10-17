const usuarios = require('./usuarios')
const Token = require('./auth.JWT')

async function logarUsuario(req, res) {
  const user = JSON.parse(req.payload)
  return await usuarios.logarUsuarios(user.email, user.senha)
    .then((token) => {
      let Token = JSON.stringify({ token })
      console.log(Token)
      return res.response(Token).code(200)
    })
    .catch((err) => {
      // TODO: Gerenciar melhor o erro e passar claramente o erro lançado
      console.warn("Erro ao logar os usuário!", err)
      return res.response(JSON.stringify({ err })).code(401)
    })
}

async function criarUsuario(req, res) {
  return await usuarios.criarUsuario(req.payload.nome, req.payload.email, req.payload.senha, req.payload.telefone)
    .then((user) => {
      const {nome, email, telefone} = user
      Token.generateToken({nome, email, telefone})
        .then((token)=>{
          return res.response(token).code(201)
        })
        .catch((err)=>{
          throw new Error(err)
        })
    })
    .catch((err) => {
      // TODO: Gerenciar melhor o erro e passar claramente o erro lançado
      console.error("Erro ao criar o usuário", err)
      return res.response().code(401)
    })
}

module.exports = {
  logarUsuario,
  criarUsuario,
}