const mongoose = require('../db/connection')
const Schema = mongoose.Schema

let albumSchema = new Schema({
	name: String
})

const Artist = new Schema({
    name: String,
    description: String,
    album: [albumSchema],
    links: String
})

module.exports = {
	Artist: mongoose.model('Artist', Artist),
	Album: mongoose.model('album', albumSchema),
}