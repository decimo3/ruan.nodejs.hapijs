const handles = require("./handles")

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/publicacao',
    handler: handles.listarPublicação
  },
  {
    method: 'POST',
    path: '/api/v1/publicacao',
    handler: handles.criarPublicação
  },
  {
    method: 'GET',
    path: '/api/v1/usuarios',
    handler: handles.listarUsuarios
  },
  {
    method: 'POST',
    path: '/api/v1/usuarios',
    handler: handles.listarUsuarios
  },
]