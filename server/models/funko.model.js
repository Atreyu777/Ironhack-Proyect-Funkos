const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FunkoSchema = new Schema ({
    name:{type: String, unique: true},
    type: { //no se si esto esta bien desarollado asi
        type: String,
        enum: ['NORMAL', 'EXCLUSIVE', 'GITD'],
        default: 'NORMAL'
    },
    image: {
        type: File}
}, {
    timestamps: true
})
const Funko = mongoose.model('Funko', funkoSchema)
module.exports = Funko