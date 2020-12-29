const usuarios = require('./usuarios')
const Token = require('./auth.JWT')

async function logarUsuario(req, res) {
  if (typeof(req.payload) == "object") {
    var user = req.payload
  } else {
    var user = JSON.parse(req.payload)
  }
  return await usuarios.logarUsuarios(user.email, user.senha)
    .then(async (user) => {
      const { _id, nome, email, telefone } = user
      try {
        const token = await Token.generateToken({ _id, nome, email, telefone })
        console.log("Usuário logado com sucesso!")
        return res.response({ token }).code(200)
      } catch (err) {
        console.log("Erro ao gerar o Token, tente logar novamente")
        return res.response("Erro ao gerar o Token, tente logar novamente").code(500)
      }
    })
    .catch((err) => {
      // TODO: Gerenciar melhor o erro e passar claramente o erro lançado
      console.warn("Erro ao logar os usuário!")
      return res.response("Erro ao autenticar usuário! Verifique se o usuário e senha estão corretos!").code(401)
    })
}

async function criarUsuario(req, res) {
  console.log(req.payload)
  return await usuarios.criarUsuario(req.payload.nome, req.payload.login, req.payload.email, req.payload.fone, req.payload.senha, req.payload.data)
    .then((user) => {
      const {nome, email, telefone} = user
       return Token.generateToken({nome, email, telefone})
        .then((token)=>{
          console.log("Usuário cadastrado com sucesso!")
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