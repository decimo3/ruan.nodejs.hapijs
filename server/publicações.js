const publicacoes = require('mongoose') // Mongoose main page https://mongoosejs.com/
publicacoes.connect('mongodb://localhost:27017/depoimentos', {useNewUrlParser: true, useUnifiedTopology: true})

var estruturaDB = new publicacoes.Schema({
  nome: String,
  titulo: String,
  depoimento: String,
  dataHora: Date,
})

var postagem = publicacoes.model('postagem', estruturaDB);

async function listarPublicação () {
  console.log("Consultando o banco...")
  try {
    let a = await postagem.find({})
    console.log("Sucesso ao resgatar as publicações")
    return a
  } catch {
    console.warn("Erro em consultar o banco de dados!")
    return await postagem.find({})
  }
}
async function criarPublicação (nome="Nome de teste", titulo="Titulo de teste", depoimento="Depoimento de teste") {
  console.log("Salvando no banco...")
  let dataHora = Date.now()
  return await postagem.create({nome, titulo, depoimento, dataHora})
}

module.exports = {
  listarPublicação,
  criarPublicação,
}