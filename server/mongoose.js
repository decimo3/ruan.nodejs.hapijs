const mongoose = require('mongoose') // Mongoose main page https://mongoosejs.com/
mongoose.connect('mongodb://localhost:27017/depoimentos', {useNewUrlParser: true, useUnifiedTopology: true})

var estruturaDB = new mongoose.Schema({
  nome: String,
  titulo: String,
  depoimento: String,
  dataHora: Date,
})

var postagem = mongoose.model('postagem', estruturaDB);

async function listar () {
  console.log("Consultando o banco...")
  return await postagem.find({})
}
async function criar (nome="Nome de teste", titulo="Titulo de teste", depoimento="Depoimento de teste") {
  console.log("Salvando no banco...")
  let dataHora = Date.now()
  return await postagem.create({nome, titulo, depoimento, dataHora})
}

module.exports = {
  listar,
  criar,
}