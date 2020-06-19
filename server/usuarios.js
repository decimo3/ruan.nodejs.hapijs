require("./mongoose")

async function listarUsuarios () {
  console.log("Buscando usuario...")
  return await usuarios.find({})
}
async function criarUsuario (nome="Nome de teste", email="Titulo de teste", senha="Depoimento de teste", telefone=21975429768) {
  console.log("Salvando usuario...")
  return await usuarios.create({nome, email, senha, telefone})
}

module.exports = {
  listarUsuarios,
  criarUsuario,
}