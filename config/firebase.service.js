// initialize firebase administration to our project
// require the firebaseAdmin file to run admin functions like checking a certification
const admin = require('firebase-admin')
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS)
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

module.exports = admin