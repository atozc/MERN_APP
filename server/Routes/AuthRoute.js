const { Signup, Login } = require('../Controllers/AuthController')
const router = require('express').Router()
const { userVerification } = require('../Middlewares/AuthMiddleware')

//Register
router.post('/signup', Signup)

//Login
router.post('/login', Login)

//Verify user with token
router.post('/', userVerification)

module.exports = router
