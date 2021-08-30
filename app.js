var express = require('express')
var ejs = require('ejs')
var router = require('./router')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cookieParser = require('cookie-parser')

const port = process.env.PORT || 5000

var app = express()

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.connect('mongodb://localhost/Headiz')
.then(res => app.listen(port, ()=> {
    console.log('connected successfully');
}))

app.set('view engine', 'ejs')

app.use('/', express.static('asserts'))
app.use(router)


