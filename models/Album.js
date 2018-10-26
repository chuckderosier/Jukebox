const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Album = new Schema({
    albumSong: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }],
    albumDescription: String,
    albumYear: Number
})

module.exports = mongoose.model('Album', Album)


