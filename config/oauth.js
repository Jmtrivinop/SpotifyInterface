const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    "1050578482114-arv15kugb4btotriu2jds5g5k8042i8m.apps.googleusercontent.com",
    "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",
    "http://localhost:3000/api/auth/google/callback"
    );

    // generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
'openid',
'https://www.googleapis.com/auth/youtube.readonly',
'https://www.googleapis.com/auth/userinfo.email',
'https://www.googleapis.com/auth/youtube.download',
'https://www.googleapis.com/auth/youtube',
'https://www.googleapis.com/auth/youtube.force-ssl',
'https://www.googleapis.com/auth/youtubepartner',
'https://www.googleapis.com/auth/youtubepartner-channel-audit',
'https://www.googleapis.com/auth/youtube.upload',
'https://www.googleapis.com/auth/youtube.channel-memberships.creator',
'https://www.googleapis.com/auth/youtube.third-party-link.creator',

];

module.exports = {oauth2Client, scopes};