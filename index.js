function onload() {
    const express = require("express")
    const server = express()
    server.listen(3001, () => console.log("Servidor iniciou na porta 3001!"))
    function helloword(req, res) {
      res.redirect('./index.html')
    }
    function retornoEcho(req, res) {
      res.send("resposta")
    }
    server.get("/", helloword)
    server.post("/", retornoEcho)
  }
  onload()