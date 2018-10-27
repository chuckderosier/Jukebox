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
    },
    new: (req, res) => {
        res.render('artist/addArtist')
    },
    show: (req, res) => {
        console.log(req.params.id)
        Artist.findById(req.params.id).populate('artistAlbum').then((artistFromDb) => {
            res.render(
                'artist/showArtist',
                {artist: artistFromDb}
            )
        })
    },  
}

module.exports = artistController