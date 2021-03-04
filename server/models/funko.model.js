const mongoose = require('mongoose')
const Schema = mongoose.Schema

const funkoSchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String, 
        required: true, 
        trim: true
    },
    type: { 
        type: String,
        enum: ['NORMAL', 'EXCLUSIVE', 'GITD'],
        default: 'NORMAL'
    },
    description: String,
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

funkoSchema.statics.getUserFunkos = function (id) {
    return mongoose.model('Funko').find({ owner: id })
}

const Funko = mongoose.model('Funko', funkoSchema)
module.exports = Funko