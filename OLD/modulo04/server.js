const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const bodyParser = require('body-parser');

const server = express()

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(routes)


server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(3000, function(){
    console.log("Server rodando! Na porta 3000")
})