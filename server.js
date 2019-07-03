const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// App Start
const app = express()

// DataBase
    // Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://localhost/apirest", { useNewUrlParser: true }).then(function(){
        console.log("DataBase Conected")
    }).catch(function(err){
        console.log("Erro ao se conectar: "+err)
    })
    //Models
    requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(0988);