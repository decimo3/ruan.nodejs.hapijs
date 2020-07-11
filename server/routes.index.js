const routesUser = require('./routes.user')
const routesPost = require('./routes.post')
module.exports = [...routesUser, ...routesPost]