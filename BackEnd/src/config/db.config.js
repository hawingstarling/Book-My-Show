const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/bookmyshow', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect succesfull.');
    } catch (error) {
        console.log('connect failure.');
    }
}

module.exports = { connect }