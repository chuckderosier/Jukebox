const mongoose = require('../db/connection')
const Schema = mongoose.Schema

// let albumSchema = new Schema({
// 	name: String
// })

let Artist = new Schema({
    name: String,
    description: String,
    album: String,
    links: String
})

module.exports = mongoose.model('Artist', Artist)

// module.exports = {
// 	Artist: mongoose.model('Artist', Artist),
// 	Album: mongoose.model('Album', albumSchema),
// }