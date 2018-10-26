const Artist = require('../models/Artist')
const Album = require('../models/Album')
const Song = require('../models/Song')

const artistController = {
    index: (req, res) => {
        Artist.find().populate('artist')
            .then(artist => {
                console.log(artist)
                res.render('index', {
                    artist: artist
                })
            })
    }
}

module.exports = artistController