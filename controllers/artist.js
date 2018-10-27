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
                { artist: artistFromDb }
            )
        })
    },
    // needs push to array??????
    create: (req, res) => {
        Artist.create(req.body).then((savedArtist) => {
            res.send(savedArtist)
        })
        res.redirect('index')
    },
    edit: (req, res) => {
        Artist.findById(req.params.id).then(artist => {
            res.render('showArtist', {
                artist: artist
            })
        })
    },
    update: (req, res) => {
        Artist.findByIdAndUpdate(req.params.id, req.body).then((updatedArtist) => {
            res.redirect(`/${updatedArtist}`)
        })
    },
    delete: (req, res) => {
        Artist.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('index')
        })
    }
}

module.exports = artistController