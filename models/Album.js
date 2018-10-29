const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Album = new Schema({
    albumName: String,
    albumSong: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    albumDescription: String,
    albumYear: Number
})

module.exports = mongoose.model('Album', Album)


