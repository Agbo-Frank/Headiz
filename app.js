var express = require('express')
var ejs = require('ejs')
var router = require('./router')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cookieParser = require('cookie-parser')
require('dotenv').config()

const port = process.env.PORT || 5000
var mongodbUrl = process.env.MONGODB_URL

var app = express()

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
app.use(cookieParser())

// mongoose.connect('mongodb://localhost/Headiz')
// .then(res => app.listen(port, ()=> {
//     console.log('connected successfully');
// }))

mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true, userCreateIndex: true })
.then(res => app.listen(port, ()=> {
    console.log('connected successfully');
}))
.catch(err => console.log(err))

app.set('view engine', 'ejs')

app.use('/', express.static('asserts'))
app.use(router)
