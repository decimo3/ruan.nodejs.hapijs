const Path = require('path')
const Hapi = require('@hapi/hapi')
const Inert = require('@hapi/inert')
const routes = require("./routes")
const logs = require('./logs')
require('dotenv').config()

const init = async () => {
  const server = new Hapi.Server({
    port: 3000,
    host: 'localhost',
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  })
  
  await server.register([
    {
      plugin: require('hapi-cors'),
      options: {
        origins: ['*']
      }
    },
    Inert
  ])
  server.route(routes)
await server.start()
console.log(logs.printHash())
console.log(logs.textoHash(`Server running at: ${server.info.uri}`))
console.log(logs.textoHash(`Pressione ctrl + C para finalizar o servidor!`))
console.log(logs.printHash())
} // Fim da declaração da função init
process.on('unhandledRejection', (err) => {
  console.error(err)
  process.exit(1)
})
process.on("beforeExit", (exit) => {
  console.log("Saindo da aplicação... Porta sendo liberada...", exit)
  process.exit(1)
})
init();
