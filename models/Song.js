const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Song = new Schema({
    songName: String,
    songDescription: String,
    songLyrics: String,
    songLink: String
})

module.exports = mongoose.model('Song', Song)
