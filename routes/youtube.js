const Router = require('express')

const {searchVideosByQuery, searchVideoById, getMyVideos, getMySubscriptions, getMyPlaylist, getTrendingVideos} = require('../DAL/youtubeDAL')

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

router.get('/getVideoById/:videoId' , async (req = request, res = response) => {

    try {
        
        const {videoId} = req.params

        const response = await searchVideoById(videoId)

        return res.status(200).json({message: response})


    } catch (error) {
        return res.status(500).json({error: error})
    }

})

router.get('/getMyVideos', async (req = request, res = response) => {

    try {

        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {

            return res.status(401).json({error: 'Token requerido'})

        }
        
        const response = await getMyVideos(token)

        return res.status(200).json({message: response})

    } catch (error) {
        return res.status(500).json({error: error})
    }


})

router.get('/getMySubscriptions', async (req = request, res = response) => {

    try {

        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {

            return res.status(401).json({error: 'Token requerido'})

        }
        
        const response = await getMySubscriptions(token)

        return res.status(200).json({message: response})

    } catch (error) {
        return res.status(500).json({error: error})
    }


})


router.get('/getMyPlaylist', async (req = request, res = response) => {

    try {

        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {

            return res.status(401).json({error: 'Token requerido'})

        }
        
        const response = await getMyPlaylist(token)

        return res.status(200).json({message: response})

    } catch (error) {
        return res.status(500).json({error: error})
    }

})

router.get('/getTrendingVideos', async (req = request, res = response) => {

    try {
        
        const response = await getTrendingVideos()

        return res.status(200).json({message: response})

    } catch (error) {

        return res.status(500).json({error: error})
    }

})

module.exports = router