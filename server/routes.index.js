const routesUser = require('./routes.user')
const routesPost = require('./routes.post')
const padrao = {
    method: 'GET',
    path: '/*',
    options: {
        auth: false,
      },
    handler: (request, h) => {
        console.log("Usuário tentando acessar rota inexistente!")
        h.response("Usuário tentando acessar rota inexistente!").code(404)
    }
}
module.exports = [padrao, ...routesUser, ...routesPost]