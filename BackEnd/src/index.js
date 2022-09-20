const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const db = require('./config/db.config')
const route = require('./routes')
const admin = require('./firebase/services')

// Variable environment
dotenv.config()
const port = process.env.PORT || 5000

// Config static file
app.use(express.static(path.join(__dirname, 'public')))

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors())

// Middleware is integrated in express version 4.16
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// HTTP logger morgan
app.use(morgan('combined'))

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
  }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

// Connect mongoose
db.connect()
// Route
route(app)

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
})