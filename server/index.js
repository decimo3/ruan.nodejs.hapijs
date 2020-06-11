const Hapi = require('@hapi/hapi')
const routes = require("./routes")

function onload() {
  const server = new Hapi.Server({ port: 3000 })
  server.route(routes)
  server.start((err) => {
    if (err) {
      throw err
    }
    console.log(`Server running at: ${server.info.uri}`)
  })
}
onload()