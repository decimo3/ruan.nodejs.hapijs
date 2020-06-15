const Hapi = require('@hapi/hapi')
const routes = require("./routes")

const init = async () => {
  const server = new Hapi.Server({port: 3000, host: 'localhost'})
  server.route(routes)
  await server.register({
    plugin: require('hapi-cors'),
    options: {
      origins: ['http://localhost:5500']
    }
  })
  await server.start()
    console.log(`Server running at: ${server.info.uri}`)
} // Fim da declaração da função init
process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})
process.on("beforeExit", (exit) => {
  console.log("Saindo da aplicação... Porta sendo liberada...")
  process.exit(1)
})
init();
