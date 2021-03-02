const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    
    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true
    },
    name: String,
    email: { 
        type: String, 
        unique: true, 
        required: true 
    },
    password: { 
        type: String, 
        required: true
    },
    avatar: {
        type: String, 
        enum: ['avatarEva.jpg', 'avatarWalle.jpg', 'default.jpg'], 
        default: 'default.jpg'
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