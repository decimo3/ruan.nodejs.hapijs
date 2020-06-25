const logs = require('./logs')
const Hapi = require('@hapi/hapi')
const routes = require("./routes")
// require('dotenv/config')
// const { HAPI_PORT } = process.env;
// const { HAPI_HOST } = process.env;

const init = async () => {
  const server = new Hapi.Server({
    port: 3000,
    host: 'localhost',
  })
  server.route(routes)
  await server.register([
    {
      plugin: require('hapi-cors'),
      options: {
        origins: ['*']
      }
    }
  ])
await server.start()
console.log(logs.printhash())
console.log(`Server running at: ${server.info.uri}`)
console.log(`Pressione ctrl + C para finalizar o servidor!`)
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
