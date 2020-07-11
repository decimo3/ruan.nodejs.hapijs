const handlesUser = require('./handles.user')
const isValidUser = require('./validacao')

module.exports = [
    {
        method: 'POST',
        path: '/api/v1/login/',
        handler: handlesUser.logarUsuario,
        options: {
            validate: {
                payload: isValidUser.loginUser,
            },
        },
    },
    {
        method: 'POST',
        path: '/api/v1/usuario/',
        handler: handlesUser.criarUsuario,
        options: {
            validate: {
                payload: isValidUser.criarUser,
            },
        },
    },
]