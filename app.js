'use strict'
var express = require('express')
var path = require('path')
var app = express()


var bodyParser = require('body-parser')

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/public')))

// Use morgan to log request in dev mode


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

var port = 3000
app.listen(port) // Listen on port defined in config file
console.log('App listening on http://localhost:' + port)

var apiRoute = require('./route.js')

app.use('/api', apiRoute)

