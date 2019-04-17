const Album = require('../models/Album')
const Artist = require('../models/Artist')

const albumController = {
    index: (req, res) => {
        Album.find().populate('album')
            .then(album => {
                res.render('album/show', {
                    album: album
                })
            })
    },
    new: (req, res) => {
        res.render('album/new')
    },
    show: (req, res) => {
        Album.findById(req.params.id).populate('albumSong').then((album) => {
            res.render(
                'album/show',
                { album: album }
            )
        })
    },
    create: (req, res) => {
        console.log('1111111111')
        Artist.findById(req.params.id).then((artist) => {
            Album.create(req.body).then((newAlbum) => {
                artist.artistAlbum.push(newAlbum)
                Artist.save()
                Album.save()
            }).then(() => {
                res.redirect(`artist/${artist.id}`)
            })
        })
    },
    edit: (req, res) => {
        Album.findById(req.params.id).then(album => {
            res.render('album/edit', {
                album: album
            })
        })
    },
    update: (req, res) => {
        Album.findByIdAndUpdate(req.params.id, req.body).then((updatedAlbum) => {
            res.redirect(`/album/${updatedAlbum._id}`)
        })
    },
    delete: (req, res) => {
        Album.findByIdAndRemove(req.params.id).then(() => {
            res.redirect(`/artist/${artist._id}`)
        })
    }
}

module.exports = albumController