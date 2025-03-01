const axios = require('axios')

const API_KEY = process.env.API_KEY

async function searchVideosByQuery(query) {

    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: query,
                key: API_KEY
            }
        })

        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("Error al obtener los videos:", error.response.data);
    }
}

async function searchVideoById(videoId) {

    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet',
                id: videoId,
                key: API_KEY
            }

        })

        return response.data
    } catch (error) {
        
        console.error('Error obteniendo el video', error)

    }

}

async function getMyVideos(accesToken) {

    try {
        
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {

            headers: {
                authorization: `Bearer ${accesToken}`
            },
            params: {

                part: 'snippet',
                forMine: true,
                type: 'video'

            }

        })

        return response.data

    } catch (error) {
        
        console.error('Error obteniendo el video', error)

    }

}

async function getMySubscriptions(accesToken) {

    try {
        
        const response = await axios.get('https://www.googleapis.com/youtube/v3/subscriptions', {

            headers: {
                authorization: `Bearer ${accesToken}`
            },
            params: {

                part: 'snippet',
                mine: true,

            }

        })

        return response.data

    } catch (error) {
        
        console.error('Error obteniendo el video', error)

    }


}

module.exports = {searchVideosByQuery, searchVideoById, getMyVideos, getMySubscriptions}