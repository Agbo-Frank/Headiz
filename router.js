var { Router } = require('express')
var controller = require('./controller')

var router = Router()

router.get('/', controller.homePage)
router.get('/account', controller.account)
router.get('/billing', controller.billing)
router.get('/contact', controller.contact)
router.get('/dashboard', controller.dashboard)
router.get('/forgetpassword', controller.forgetPassword)
router.get('/login', controller.login)
router.get('/signup', controller.signUp)
router.get('/order', controller.order)
router.get('/products', controller.product)
router.get('/cart', controller.cart)
router.get('/successpage', controller.success)
router.get('/upload', controller.upload)
router.get('/my-product', controller.userProduct)

module.exports = router