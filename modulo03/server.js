const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data_videos")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})


server.get("/", (req, res) => {
    return res.render("about")
})

server.get("/portfolio", (req, res) => {
    return res.render("portfolio", { items: videos })
})

server.get("/video", (req, res) => {
    const id = req.query.id;
    const video = videos.find(function (video) {
        if (video.id == id) {
            return true;
        }
    })

    if (!video) {
        return res.send("video not found")
    }

    return res.render("video", { video })
})


server.listen(5000, () => {
    console.log("Server is runing")
})