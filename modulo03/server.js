const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data_videos")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",{
    express:server
})


server.get("/", (req, res) => {
    return res.render("about")
})

server.get("/portfolio", (req, res) => {
    return res.render("portfolio", {items: videos})
})

server.get("/video", (req, res)=>{
    const id = req.query.id;
    return res.send(id)
})


server.listen(5000, () => {
    console.log("Server is runing")
})