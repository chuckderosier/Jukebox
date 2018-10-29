const Album = require('../models/Album')

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
        res.render('album/add')
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
        Album.create(req.body).then((savedAlbum) => {
            res.send(savedAlbum)
        })
        res.redirect('/')
    },
    edit: (req, res) => {
        Album.findById(req.params.id).then(album => {
            res.render('album/show', {
                album: album
            })
        })
    },
    update: (req, res) => {
        Album.findByIdAndUpdate(req.params.id, req.body).then((updatedAlbum) => {
            updatedAlbum.save()
            res.redirect(`/album/${updatedAlbum._id}`)
        })
    },
    delete: (req, res) => {
        Album.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = albumController