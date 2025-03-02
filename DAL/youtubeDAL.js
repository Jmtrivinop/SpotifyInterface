const axios = require('axios')

const API_KEY = process.env.API_KEY

async function searchVideosByQuery(query) {

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            q: query,
            key: API_KEY
        }
    })

    console.log(response.data)
    return response.data
}

async function searchVideoById(videoId) {

    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
            part: 'snippet',
            id: videoId,
            key: API_KEY
        }

    })

    return response.data
}

async function getMyVideos(accesToken) {
        
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
}

async function getMySubscriptions(accesToken) {
        
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
}


async function getMyPlaylist(accesToken) {
        
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {

        headers: {
            authorization: `Bearer ${accesToken}`
        },
        params: {

            part: 'snippet',
            mine: true,

        }

    })

    return response.data

}

async function getTrendingVideos() {
        
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {

        params: {

            part: 'snippet',
            chart: 'mostPopular',
            regionCode: 'CO',
            key: API_KEY

        }

    })

    return response.data

}

async function getChannelById(channelId) {
    
    const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
        params: {
            part: 'snippet',
            id: channelId,
            key: API_KEY
        }
    })

    return response.data

}

module.exports = {searchVideosByQuery, searchVideoById, getMyVideos, getMySubscriptions, getMyPlaylist, getTrendingVideos, getChannelById}