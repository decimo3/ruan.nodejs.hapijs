const handlesUser = require('./handles.user')
const isValidUser = require('./validacao')

module.exports = [
    {
        method: 'POST',
        path: '/api/v1/login/',
        options: {
            auth: false,
        //     validate: {
        //         payload: isValidUser.loginUser,
        //     },
        },
        handler: handlesUser.logarUsuario,
    },
    {
        method: 'POST',
        path: '/api/v1/usuario/',
        options: {
            auth: false,
            validate: {
                payload: isValidUser.criarUser,
            },
        },
        handler: handlesUser.criarUsuario,
    },
]