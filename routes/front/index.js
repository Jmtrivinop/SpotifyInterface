const Router = require('express')

const {response, request} = require('express')

const router = Router()

router.use('/auth', require('./auth'))

router.use('/home', require('./home'))

module.exports = router;