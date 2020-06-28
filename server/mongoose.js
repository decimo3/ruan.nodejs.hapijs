const bancodados = require('mongoose') // Mongoose main page https://mongoosejs.com/
try { bancodados.connect(`mongodb://localhost:27017/depoimentos`, {useNewUrlParser: true, useUnifiedTopology: true}) }
catch (error) { throw new Error("Banco de dados está inacessível!") }

var estruturaPublicação = new bancodados.Schema({
  nome: String,
  titulo: String,
  depoimento: String,
  favorito: Boolean,
  timestamps: {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
})

var estruturaUsuário = new bancodados.Schema({
  nome: String,
  senha: String,
  email: String,
  telefone: Number,
  timestamps: {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
})

const postagens = bancodados.model('postagems', estruturaPublicação);

const usuario = bancodados.model('usuarios', estruturaUsuário);

module.exports = {postagens, usuario}