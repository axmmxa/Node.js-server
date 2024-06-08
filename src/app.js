console.log("App loaded")

import {server, PORT} from "./server"


//Routen anlegen
server.get("/", (req,res,next)=>{
    res.send("Das ist der Altrupedia Server")
})


//Server Port
server.listen(PORT, () => {
    console.log("Server ist gestartet")
})