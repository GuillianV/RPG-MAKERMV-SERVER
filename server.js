//---------------Gestion des imports
let express = require("express")
let app = express()

let http = require("http");
let server = http.Server(app)

let socketio = require("socket.io")
let io = socketio(server)

let gitignore = require("./modules/gitignore.js")

let { Pool, Client } = require('pg');

let myDatabase = require("./modules/databaseConnect.js")

//-----------------GEstion des paths
app.get("/", (req, res) => {
    console.log("someone at /")
})
//-----------------------Gestion des variables locales


//-----------------------Connexion 1 client
io.on("connect", (socket) => {

    console.log(socket.id +" is connected")

    require('./modules/rmmv.js')(socket,io,myDatabase);
    
})
//-----------------------Tous les clients

//----Port d'ecoute
server.listen(gitignore.listenPort)
