var jwt = require('jsonwebtoken')
var User = require('./models/user')
require('dotenv').config()

var jwtSecret = process.env.SECRET

var authenticate = (req, res, next) => {
    var token = req.cookies.jwt

    if(token){
        var auth = jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err){
                res.redirect('login')
            }
            else{
                 next()
            }
        })
    }
    else{
        res.redirect('login')
    }
}

var sendData = function(req, res, next) {
    var token = req.cookies.jwt

    if(token){
        var verified = jwt.verify(token, jwtSecret, async (err, decodedToken) => {
            if (err){
                res.locals.user = null
                next()
            }
            else{
                var u = await User.findById(decodedToken.id)
                res.locals.user = u
                next()
            }
        })
    }else{
        res.locals. user = null
        next()
    }
}

module.exports = { authenticate, sendData }