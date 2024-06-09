console.log("App loaded")

import {server, PORT} from "./server"


//+++Routen anlegen

//main route
server.get("/", (req,res,next)=>{
    res.send("Das ist der Altrupedia Server")
})



//dynamische route
// use as url http://localhost:3000/profile?name=max
server.get("/profile", (req,res)=>{
    res.send("Moinsen User")
    console.log(req.query.name)
})


server.get("/profile/:userid",(req,res,next)=>{
    res.send("Hallo User")
    console.log("User hat sich eingelogt", console.log(req.params.userid))
})



//404 handler
server.use((req,res,next)=>{
    res.status(404).json({
        status:"Seite existiert nicht"
    })
})



//weitere Routen
server.get("/neueRoute", (req,res,next)=>{
    res.send("Das isy eine neue Route")
})

//status zuruckgeben
server.get("/status", (req,res, next)=>{
    res.sendStatus(500)
})

//json zuruckgeben 
server.get("/json", (req,res)=>{
    res.json({
        name: "Stephan",
        position:"the owner"
    })
})







//Server Port
server.listen(PORT, () => {
    console.log("Server ist gestartet")
})