const mongoose = require('../db/connection')
const Schema = mongoose.Schema

let songSchema = new Schema({
    name: String
})

const Album = new Schema({
    name: String,
    description: String,
    song: [songSchema],
    year: Number
})

module.exports = {
    Artist: mongoose.model('Album', Album),
    Album: mongoose.model('Song', songSchema),
}