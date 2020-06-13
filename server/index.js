const Hapi = require('@hapi/hapi')
const routes = require("./routes")
const inert = require('inert')

const init = async () => {
  const server = new Hapi.Server({port: 3000, host: 'localhost'})
  /* server.register(inert, (err) => {

    if (err) {
        throw err
    }
  })*/
  server.route(routes)
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
