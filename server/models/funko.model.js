const mongoose = require('mongoose')
const Schema = mongoose.Schema

const funkoSchema = new Schema ({
    name:{type: String, required: true},
    type: { //no se si esto esta bien desarollado asi
        type: String,
        enum: ['NORMAL', 'EXCLUSIVE', 'GITD'],
        default: 'NORMAL'
    },
    description: String,
    image: {
        type: String} // quiero cambiarlo por File, pero da error
}, {
    timestamps: true
})
const Funko = mongoose.model('Funko', funkoSchema)
module.exports = Funko