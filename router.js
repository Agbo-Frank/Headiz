var { Router } = require('express')
var controller = require('./controller')
var bodyParser = require('body-parser')
var { authenticate } = require('./routhesProtector')
var { sendData } = require('./routhesProtector')
var Upload = require('./uploadMiddleware')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var router = Router()

router.get('*', sendData)
router.get('/', controller.homePage)
router.get('/account', authenticate, controller.account)
router.get('/bills', authenticate, controller.billing)
router.get('/contact', controller.contact)
router.get('/dashboard', authenticate, controller.dashboard)
router.get('/forgetpassword', controller.forgetPassword)
router.put('/forgetpassword', urlencodedParser, controller.forgetPassword_put)
router.get('/signupLogin', controller.signupLogin)
router.get('/login', controller.login)
router.post('/login', urlencodedParser, controller.login_post)
router.get('/signup', controller.signUp)
router.post('/signup', urlencodedParser, controller.signUp_post)
router.get('/order', authenticate, controller.order)
router.get('/products', controller.product)
router.get('/cart', authenticate, controller.cart)
router.get('/successpage', controller.success)
router.get('/upload', authenticate, controller.upload)
router.post('/upload', Upload.single("image"), controller.upload_post)
router.get('/my-product', authenticate, controller.userProduct)
router.get('/logout', controller.logout)

module.exports = router