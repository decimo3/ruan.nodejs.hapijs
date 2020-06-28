const handles = require("./handles")

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: {
      file: 'index.html'
    }
  },
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
    method: 'POST',
    path: '/api/v1/login',
    handler: handles.logarUsuario
  },
  {
    method: 'POST',
    path: '/api/v1/usuarios',
    handler: handles.criarUsuario
  },
]