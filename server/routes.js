const handles = require("./handles")

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/publicacao',
    handler: handles.listarPublicacao
  },
  {
    method: 'POST',
    path: '/api/v1/publicacao',
    handler: handles.criarPublicacao
  },
  {
    method: 'GET',
    path: '/api/v1/usuarios',
    handler: handles.listarUsuarios
  },
]