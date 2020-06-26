const handles = require("./handles")

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/publicacoes',
    handler: handles.listarPublicacoes
  },
  {
    method: 'POST',
    path: '/api/v1/publicacoes',
    handler: handles.criarPublicacao
  },
  {
    method: 'GET',
    path: '/api/v1/usuarios',
    handler: handles.listarUsuario
  },
  {
    method: 'POST',
    path: '/api/v1/usuarios',
    handler: handles.criarUsuario
  },
]