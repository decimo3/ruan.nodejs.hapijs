const usuarios = require('mongoose') // Mongoose main page https://mongoosejs.com/
usuarios.connect('mongodb://localhost:27017/usuarios', {useNewUrlParser: true, useUnifiedTopology: true})

var estruturaDB = new usuarios.Schema({
  nome: String,
  email: String,
  senha: String,
  telefone: Number,
})

var usuario = usuarios.model('usuario', estruturaDB);

async function listarUsuarios () {
  console.log("Buscando usuario...")
  return await usuario.find({})
}
async function criarUsuario (nome="Nome de teste", email="Titulo de teste", senha="Depoimento de teste", telefone=21975429768) {
  console.log("Salvando usuario...")
  return await usuario.create({nome, email, senha, telefone})
}

module.exports = {
  listarUsuarios,
  criarUsuario,
}