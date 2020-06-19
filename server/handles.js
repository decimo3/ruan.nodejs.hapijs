const publicacoes = require('./publicações')
const usuarios = require('./usuarios')

async function noContent(request, response) {
  await response.file('../public/404.html').code(404)
}

async function listarPublicação (request, response) {
  console.log("Buscando as publicações...")
return await publicacoes.listarPublicação()
  .then(console.log("Sucesso ao resgatar publicaçõesssssss"))
  .catch((err) => {console.warn("Erro ao resgatar as publicações", err)})
}
async function criarPublicação (request, response) {
  console.log("Salvando a publicação no banco...")
return await publicacoes.criarPublicação(request.payload.nome, request.payload.titulo, request.payload.depoimento)
  .then(console.log("Publicação salva com sucesso!"))
  .catch((err) => {console.error("Erro ao criar publicação", err)})
}
async function listarUsuarios () {
  console.log("Acessando a lista de usuários...")
  return await usuarios.listarUsuarios()
  .then(console.log("Sucesso ao resgatar os usuários"))
  .catch((err) => {console.warn("Erro ao consultar o banco de dados", err)})
}
async function criarUsuario (request, response) {
  console.log("Salvando usuario no banco...")
return await usuarios.criarUsuario(request.payload.nome, request.payload.email, request.payload.senha, request.payload.telefone)
  .then(console.log("Sucesso ao criar usuario!"))
  .catch((err) => {console.error("Erro ao criar", err)})
}
module.exports = {
  noContent,
  listarPublicação,
  criarPublicação,
  listarUsuarios,
  criarUsuario,

}