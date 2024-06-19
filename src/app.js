console.log("App loaded")


// Server Einstellungen 
import {server, PORT} from "./server"
import { ProfileRoutes } from "../routes/profileRoutes"

//Einstellung render engine
server.set("view engine", "ejs")



//+++Routen anlegen

//main route
server.get("/", (req,res,next)=>{
    res.render("main/index")
})



server.use(ProfileRoutes)



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