import express from "express";

export let ProfileRoutes = express.Router()


// use as url http://localhost:3000/profile?name=max
ProfileRoutes.get("/profile", (req,res)=>{
    res.send("Moinsen User")
    console.log(req.query.name)
})

// get the userid
ProfileRoutes.get("/profile/:userid",(req,res,next)=>{
    res.send("Hallo User")
    console.log("User hat sich eingelogt", console.log(req.params.userid))
})
