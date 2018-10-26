const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Album = new Schema({
    albumName: String,
    albumDescription: String,
    albumSong: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }],
    albumYear: Number
})

module.exports = mongoose.model('Album', Album)


