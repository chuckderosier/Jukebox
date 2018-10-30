const Artist = require('../models/Artist')

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
        res.render('artist/add')
    },
    show: (req, res) => {
        Artist.findById(req.params.id).populate('artistAlbum').then((artistFromDb) => {
            res.render(
                'artist/show',
                { artist: artistFromDb }
            )
        })
    },
    create: (req, res) => {
        Artist.create(req.body).then((savedArtist) => {
            console.log("HERE")
            savedArtist.save()
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
            updatedArtist.save()
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