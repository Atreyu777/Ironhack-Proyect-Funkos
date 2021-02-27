const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FunkoSchema = new Schema ({
    name:{type: String, required: true},
    type: { //no se si esto esta bien desarollado asi
        type: String,
        enum: ['NORMAL', 'EXCLUSIVE', 'GITD'],
        default: 'NORMAL'
    },
    image: {
        type: String}
}, {
    timestamps: true
})
const Funko = mongoose.model('Funko', FunkoSchema)
module.exports = Funko