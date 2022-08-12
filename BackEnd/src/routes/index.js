const authRoute = require('./auth.routes')
const userRoute = require('./user.routes')

function route(app) {
    app.use('/auth', authRoute)
    app.use('/user', userRoute)
    
    app.get('/', (req, res) => {
        res.send('hello standard lord.')
    })
}

module.exports = route