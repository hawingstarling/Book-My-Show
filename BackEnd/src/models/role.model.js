const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Role = new Schema({
    name: { type: String }
}, { timestamps: true })

module.exports = mongoose.model('Role', Role)