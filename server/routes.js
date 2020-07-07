const handles = require("./handles")
const validation = require("./validacao")

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/publicacoes',
    handler: handles.listarPublicacoes
  },
  {
    method: 'POST',
    path: '/api/v1/publicacao',
    handler: handles.criarPublicacao,
    options: {
      validate: {
        payload: validation.criarPost,
      },
    },
  },
  {
    method: 'POST',
    path: '/api/v1/login',
    handler: handles.logarUsuario,
    options: {
      validate: {
        payload: validation.loginUser,
      },
    },
  },
  {
    method: 'POST',
    path: '/api/v1/usuario',
    handler: handles.criarUsuario,
    options: {
      validate: {
        payload: validation.criarUser,
      },
    },
  },
]