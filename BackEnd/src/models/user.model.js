const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Role = require('./role.model')

const User = new Schema({
    _idRole: Schema.Types.ObjectId,
    username: { type: String, require: true, unique: true, minlength: 6, maxlength: 25},
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, minlength: 6 },
    roles: [
        { type: Schema.Types.ObjectId, ref: 'Role' }
    ]
}, { timestamps: true })

module.exports = mongoose.model('User', User)