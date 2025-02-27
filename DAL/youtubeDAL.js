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

module.exports = {searchVideosByQuery}