var User = require('./models/user')
var Product = require('./models/product')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
require('dotenv').config()

var jwtSecret = process.env.SECRET

var maxAge = 60 * 60 * 24
function tokenGen(id) {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: maxAge
    })
}

function errorHandler(err){
    var error = {
        fname: '',
        lname: '',
        email: '',
        password: '',
    }

    if(err.message.includes('User validation failed')){
       Object.values(err.errors).forEach(e => {
        error[e.path] = e.properties.message
       })
    }
    return error
}

module.exports.homePage = (req, res) => {
    res.render('Headiz')
}
module.exports.account = (req, res) => {
    res.render('account-details')
}
module.exports.billing = (req, res) => {
    res.render('bills')
}
module.exports.contact = (req, res) => {
    res.render('contact')
}
module.exports.dashboard = (req, res) => {
    res.render('dashboard')
}
module.exports.forgetPassword = (req, res) => {
    res.render('forgetpassword')
}
module.exports.forgetPassword_put = async (req, res) => {
    try {
        var gen_pword = Math.floor(Math.random() * 100000)
        gen_pword = gen_pword.toString()
        console.log(gen_pword);
        var salt = await bcrypt.genSalt()
        var new_password = await bcrypt.hash(gen_pword, salt)
        var u = await User.findOne(req.body)
        var updated_pw = await u.updateOne({ password: new_password})
        res.status(200).json({newpword: new_password})
    } catch (err) {
       var error = errorHandler(err)
       res.status(400).json({ error })
        console.log(error);
    }
}
module.exports.signupLogin = (req, res) => {
    res.render('signin-up-page')
}
module.exports.login = (req, res) => {
    res.render('login')
}
module.exports.login_post = async (req, res) => {

    try{
       var u = await User.Login(req.body.email, req.body.password)
       var token = await tokenGen(u._id)
       res.cookie('jwt', token, {
           maxAge: maxAge * 1000,
           httpOnly: true
       })
       res.status(200).json({ user: u._id})
    }
    catch (err){
        console.log(err);
        res.status(400).json({err})
    }
}
module.exports.signUp = (req, res) => {
    res.render('register')
}
module.exports.signUp_post = async (req, res) => {
    try{
        var user = await User.create(req.body)
        var token = await tokenGen(user._id)
        res.cookie('jwt', token, {
            maxAge: maxAge * 1000,
            httpOnly: true,
        })
        res.status(200).json({user})
    }
    catch (err) {
        var error = errorHandler(err)
        res.status(400).json({ error })
    }
}
module.exports.order = (req, res) => {
    res.render('order')
}
module.exports.product = (req, res) => {
    res.render('product')
}
module.exports.cart = (req, res) => {
    res.render('savedItems')
}
module.exports.success = (req, res) => {
    res.render('successpage')
}
module.exports.upload = (req, res) => {
    res.render('upload')
}
module.exports.upload_post = async (req, res) => {
    try {
        var { category, type, pname, price, message} = req.body
        var token = req.cookies.jwt
        var { path } = req.file
    
        if(token){
            jwt.verify(token, jwtSecret, async (err, decodoedToken) => {
                var p = await Product.create({
                    userId: decodoedToken.id,
                    path: path,
                    category: category,
                    type: type,
                    productName: pname,
                    price: price,
                    description: message
                }) 
                res.status(200).redirect('upload')
            })
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports.userProduct = (req, res) => {
    res.render("user's-products")
}
module.exports.logout = (req, res) => {
    res.cookie('jwt', '', {
        maxAge: 1
    })
    res.redirect('/')
}
