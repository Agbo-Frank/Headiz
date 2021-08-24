var express = require('express')
var ejs = require('ejs')
var router = require('./router')

var app = express()

app.set('view engine', 'ejs')

app.use('/', express.static('asserts'))
app.use(router)


app.listen(5000)