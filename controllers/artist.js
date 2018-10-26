const Artist = require('../models/Artist')
const Album = require('../models/Album')
const Song = require('../models/Song')

const artistController = {
    index: (req, res) => {
        const artistId = req.params.artistId
        Artist.findById(artistId).populate('artist')
            .then(artist => {
                res.render('index', {
                    artist: artist
                })
            })
    }
}

module.exports = artistController