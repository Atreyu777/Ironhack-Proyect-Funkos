const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true },
    name: String,
    password: String,
    avatar: {
        type: String, 
        default: '/server/public/images/avatarWalle.jpg' || '/server/public/images/avatarEva.jpg',
    }, 
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User