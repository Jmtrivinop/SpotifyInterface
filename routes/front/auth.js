const Router = require('express')
const path = require('path');

const {response, request} = require('express')

const router = Router()

router.get('/login', (req = request, res = response) => {


    return res.render('auth/login', {title: 'Login'})

})

module.exports = router;