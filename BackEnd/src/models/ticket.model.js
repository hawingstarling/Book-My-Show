const mongoose = require(mongoose)

const Schema = mongoose.Schema

const User = require('./user.model')

const Ticket = new Schema({
    dateBooking: { type: Date, require: true },
    timeBooking: { type: String, require: true },
    total: { type: Float32Array, require: true },
    seat: { type: String, require: true },
    // movie: MovieID
    // user: UserID
}, { timestamps: true })

module.exports = mongoose.model('Ticket', Ticket)