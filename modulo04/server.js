const express = require('express')
const nunjuncks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjuncks.configure("views",{
    express: server,
    autoescape: false
})

server.listen(3000, function(){
    console.log("Server rodando!")
})