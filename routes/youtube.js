const Router = require('express')

const {searchVideosByQuery} = require('../DAL/youtubeDAL')

const {response, request} = require('express')

const router = Router()

router.get('/', (req = request, res = response) => {

    return res.send('ok youtube')

})

router.get('/getVideos/:query', async (req = request, res = response) => {

    try {
     
        const {query} = req.params

        const response = await searchVideosByQuery(query)
    
        return res.status(200).json({message: response})
    
        
    } catch (error) {
        
        return res.status(500).json({error: error})

    }
})

module.exports = router