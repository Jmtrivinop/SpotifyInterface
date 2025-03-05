const {Router} = require('express');
const {oauth2Client, scopes} = require('../config/oauth');

const router = Router();

router.get('/google', (req, res) => {

    const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',

    // If you only need one scope, you can pass it as a string
    scope: scopes
    });

    return res.redirect(url);

});

router.get('/google/callback', async (req, res) => {


    try {
        
        const code =  req.query.code

        if (!code) {
            return res.status(401).json({
                message: "No code provided"
            })
        }

        // This will provide an object with the access_token and refresh_token.
        // Save these somewhere safe so they can be used at a later time.
        const {tokens} = await oauth2Client.getToken(code)
        oauth2Client.setCredentials(tokens);

        console.log(tokens);

        return res.status(200).json({message: "Success"});



    } catch (error) {
        console.error("Error en el callback de Google OAuth:", error);
        return res.status(500).json({ error: "Error al procesar la autenticación" });
    }

});


module.exports = router;