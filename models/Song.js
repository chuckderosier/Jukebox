const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Song = new Schema({
    name: String,
    description: String,
    lyrics: String,
    link: String
})

module.exports = mongoose.model('Song', Song)
