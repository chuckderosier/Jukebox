const mongoose = require('../db/connection')
const Schema = mongoose.Schema

let Artist = new Schema({
    artistName: String,
    artistDescription: String,
    artistAlbum: [{
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }],
    artistLinks: String
})

module.exports = mongoose.model('Artist', Artist)
