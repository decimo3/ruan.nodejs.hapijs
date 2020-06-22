// require('dotenv/config')
// const { MONGO_PORT } = process.env;
// const { MONGO_HOST } = process.env;
// const { MONGO_DB } = process.env;

const bancodados = require('mongoose') // Mongoose main page https://mongoosejs.com/
try{
  bancodados.connect(`mongodb://localhost:27017/depoimentos`, {useNewUrlParser: true, useUnifiedTopology: true})
} catch (error) {
  console.error(error)
}

var estruturaPublicação = new bancodados.Schema({
  nome: String,
  titulo: String,
  depoimento: String,
  dataHora: Date,
})

var estruturaUsuário = new bancodados.Schema({
  nome: String,
  email: String,
  senha: String,
  telefone: Number,
})

const postagens = bancodados.model('postagems', estruturaPublicação);

const usuario = bancodados.model('usuarios', estruturaUsuário);

module.exports = {postagens, usuario}