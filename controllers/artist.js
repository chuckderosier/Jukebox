const Artist = require('../models/Artist')

const artistController = {
    index: (req, res) => {
        Artist.find().populate('artist')
            .then(artist => {
                res.render('/', {
                    artist: artist
                })
            })
    },
    new: (req, res) => {
        res.render('artist/new')
    },
    show: (req, res) => {
        Artist.findById(req.params.id).populate('artistAlbum').then((artist) => {
            res.render(
                'artist/show',
                { artist: artist }
            )
        })
    },
    create: (req, res) => {
        Artist.create(req.body).then((savedArtist) => {
            savedArtist.save()
        })
            .then(() => {
                res.redirect('/')
            })
    },
    edit: (req, res) => {
        Artist.findById(req.params.id).then(artist => {
            res.render('artist/edit', {
                artist: artist
            })
        })
    },
    update: (req, res) => {
        Artist.findByIdAndUpdate(req.params.id, req.body).then((updatedArtist) => {
            res.redirect(`/artist/${updatedArtist._id}`)
        })
    },
    delete: (req, res) => {
        Artist.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = artistController