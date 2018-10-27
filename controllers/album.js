const Artist = require('../models/Artist')
const Album = require('../models/Album')
const Song = require('../models/Song')

const albumController = {
    index: (req, res) => {
        Album.find().populate('album')
            .then(album => {
                console.log(album)
                res.render('index', {
                    album: album
                })
            })
    },
    new: (req, res) => {
        res.render('album/addAlbum')
    },
    show: (req, res) => {
        console.log(req.params.id)
        Album.findById(req.params.id).populate('artistAlbum').then((albumFromDb) => {
            res.render(
                'album/showAlbum',
                { album: albumFromDb }
            )
        })
    },
    // needs push to array??????
    create: (req, res) => {
        Album.create(req.body).then((savedAlbum) => {
            res.send(savedAlbum)
        })
        res.redirect('index')
    },
    edit: (req, res) => {
        Album.findById(req.params.id).then(album => {
            res.render('showAlbum', {
                album: album
            })
        })
    },
    update: (req, res) => {
        Album.findByIdAndUpdate(req.params.id, req.body).then((updatedAlbum) => {
            res.redirect(`/${updatedAlbum}`)
        })
    },
    delete: (req, res) => {
        Album.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('index')
        })
    }
}

module.exports = albumController