const mongoose = require('mongoose')
const Schema = mongoose.Schema

const conversationSchema = new Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    funko: {
        type: Schema.Types.ObjectId,
        ref: 'Funko'
    },
    messages: [{
        username: { 
            type: String, 
            unique: true, 
            required: true, 
            trim: true
        },
        text: String
    }]
    },{
        timestamps: true
    }
)
conversationSchema.statics.getUsersConversation = function (id) {
    return mongoose.model('message').find({ user: id })
}
conversationSchema.statics.getFunkoConversation = function (id) {
    return mongoose.model('message').find({ funko: id })
}

const Conversation = mongoose.model('Conversation', conversationSchema)
module.exports = Conversation

