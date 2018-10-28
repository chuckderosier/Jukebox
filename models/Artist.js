const mongoose = require('../db/connection')
const Schema = mongoose.Schema

let Artist = new Schema({
    artistName: String,
    artistAlbum: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }],
    artistGenre: String,
    artistDescription: String,
    artistLink: String
})

module.exports = mongoose.model('Artist', Artist)
