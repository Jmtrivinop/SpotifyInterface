const Router = require('express')

const {response, request} = require('express')

const router = Router()

router.get('/', (req = request, res = response) => {

    return res.render('home/index', {title: 'Home'})

})

module.exports = router;