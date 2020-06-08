function onload() {
    const express = require("express")
    const server = express()
    server.listen(5500, () => console.log("Servidor iniciou na porta 5500!"))
    function helloword(req, res) {
      res.send('Olá mundo!')
    }
    function retornoEcho(req, res) {
      res.send("resposta")
    }
    server.get("/", helloword)
    server.post("/", retornoEcho)
  }
  onload()