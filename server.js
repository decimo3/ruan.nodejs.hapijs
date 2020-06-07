function start() {
    const express = require("express")
    const server = express()

    
    function helloword(req, res) {
        res.send("hello word")
    }

    server.get("/", helloword)
}
start()