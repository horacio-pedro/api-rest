const express = require("express")
const mongoose = require("mongoose")
const requireDir = require("require-dir")

// App Start
const app = express()
app.use(express.json())

// DataBase
    // Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect(" mongodb://127.0.0.1:27017/apirest", 
    { useNewUrlParser: true }).then(function(){
        console.log("DataBase Conected")
    }).catch(function(err){
        console.log("Erro ao se conectar: "+err)
    })
    //Models
    requireDir("./src/models")

app.use("/api", require("./src/routes"))

app.listen(5001);