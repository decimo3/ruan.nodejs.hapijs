const handles = require("./handles")

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handles.inicio
  },
  {
    method: 'GET',
    path: '/api/v1/ola',
    handler: handles.olamundo
  },
  {
    method: 'GET',
    path: '/api/v1/nome',
    handler: handles.meunome
  },
  {
    method: 'GET',
    path: '/api/v1/nome/{name}',
    handler: handles.receberNome
  }
]