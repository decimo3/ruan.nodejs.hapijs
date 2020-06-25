const bancodados = require('mongoose') // Mongoose main page https://mongoosejs.com/
try { bancodados.connect(`mongodb://localhost:27017/depoimentos`, {useNewUrlParser: true, useUnifiedTopology: true}) }
catch (error) { throw new Error("Banco de dados está inacessível!") }

var estruturaPublicação = new bancodados.Schema({
  nome: String,
  titulo: String,
  depoimento: String,
  favorito: Boolean,
  timestamps: {
    createdAt: Number,
    updatedAt: Number,
  }
})

var estruturaUsuário = new bancodados.Schema({
  nome: String,
  email: String,
  senha: String,
  telefone: Number,
  timestamps: {
    createdAt: Number,
    updatedAt: Number,
  }
})

const postagens = bancodados.model('postagems', estruturaPublicação);

const usuario = bancodados.model('usuarios', estruturaUsuário);

module.exports = {postagens, usuario}