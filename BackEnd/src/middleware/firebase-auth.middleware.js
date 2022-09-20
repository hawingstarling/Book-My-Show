const admin = require('../firebase/services')

const firebaseMiddleware = {
    verifyToken: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]

        try {
            const decodeToken = await admin.auth().verifyIdToken(token)
            if (decodeToken) {
                req.user = decodeToken
                return next()
            }
            return res.json({ message: 'Un-authorization.' })
        } catch (e) {
            return res.json({ message: 'Internal Error.' })
        }
    }
}

module.exports = firebaseMiddleware