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


var estruturaDB = new bancodados.Schema({
  nome: String,
  titulo: String,
  depoimento: String,
  dataHora: Date,
})

var estruturaDB = new bancodados.Schema({
  nome: String,
  email: String,
  senha: String,
  telefone: Number,
})

const postagens = bancodados.model('postagems', estruturaDB);

const usuario = bancodados.model('usuarios', estruturaDB);

module.exports = {
  postagens,
  usuario
}