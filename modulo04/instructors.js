const fs = require('fs')

// create
exports.post =  function (req, res) {
    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == "")
            return res.send("please fill all fields")
    }
    fs.writeFile("data.json", JSON.stringify(req.body), function(err){
        if (err) 
            console.log(err)

        return res.redirect("/instructors")
    })
    return res.send(req.body)
}

// update

// delete