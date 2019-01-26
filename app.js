'use strict'

const express = require('express')
const path = require('path')
const app = express()
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '/dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

var port = 3000
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})


app.use('/api',
    proxy({
        target: `http://localhost:5000`,
        pathRewrite: (path, req) => {
            return path.split('/').slice(2).join('/');
        }
    })
);

app.get('/', function (req, res, next) {
    res.sendfile('./public/index.html')
})