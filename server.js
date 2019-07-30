const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const requireDir = require("require-dir")

// App Start
const app = express()
app.use(express.json())
app.use(cors())

// DataBase
    // Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://api:API2019@cluster0-shard-00-00-rxknu.mongodb.net:27017,cluster0-shard-00-01-rxknu.mongodb.net:27017,cluster0-shard-00-02-rxknu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", 
    { useNewUrlParser: true }).then(function(){
        console.log("DataBase Conected")
    }).catch(function(err){
        console.log("Erro ao se conectar: "+err)
    })
    //Models
    requireDir("./src/models")

app.use("/api", require("./src/routes"))

app.listen(5001);