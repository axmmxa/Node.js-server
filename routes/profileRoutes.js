import express from "express";

export let ProfileRoutes = express.Router()

let profile = "Alex"


// use as url http://localhost:3000/profile?name=max
ProfileRoutes.get("/profile", (req,res)=>{
    res.render("main/profile", {
        layout:"layouts/html2",
        title:profile
    })
    console.log(req.query.name)
})

// get the userid
ProfileRoutes.get("/profile/:userid",(req,res,next)=>{
    res.send("Hallo User")
    console.log("User hat sich eingelogt", console.log(req.params.userid))
})
