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
  }
]