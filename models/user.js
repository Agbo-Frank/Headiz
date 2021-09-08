var mongoose = require('mongoose')
var { isEmail } = require('validator')
const bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'Please Enter your First name'],
    },
    lname: {
        type: String,
        required: [true, 'Please Enter your last name'],
    },
    email: {
        type: String,
        required: [true, 'Please Enter your email'],
        unique: [true, 'the email already exists'],
        validate: [isEmail, 'Please Enter a valid name']
    },
    password:{
        type: String,
        required: [true, ' please enter a password']
    },
    pnumber: {
        type: Number
    }
})
userSchema.pre('save', async function (next) {
    var salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})
userSchema.statics.Login = async function(email, password){
    var u = await this.findOne({
        email: email
    })
    if(u){
        var auth = bcrypt.compare(password, u.password)
        if(auth){
            return u;
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}

module.exports = mongoose.model('User', userSchema)