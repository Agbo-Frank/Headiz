module.exports.homePage = (req, res) => {
    res.render('Headiz')
}
module.exports.account = (req, res) => {
    res.render('account-details')
}
module.exports.billing = (req, res) => {
    res.render('billing')
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
module.exports.login = (req, res) => {
    res.render('login')
}
module.exports.signUp = (req, res) => {
    res.render('register')
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
module.exports.userProduct = (req, res) => {
    res.render("user's-products")
}
