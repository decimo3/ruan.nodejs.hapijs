const handlesPost = require('./handles.post')
const isValidPost = require('./validacao')

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/publicacoes/',
    options: {
      auth: false,
    },
    handler: handlesPost.listarPublicacoes
  },
  {
    method: 'POST',
    path: '/api/v1/publicacao/',
    handler: handlesPost.criarPublicacao,
    options: {
      validate: {
        payload: isValidPost.criarPost,
      },
    },
  },
]