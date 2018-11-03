const Song = require('../models/Song')
const Album = require('../models/Album')

const songController = {
    index: (req, res) => {
        Song.find().populate('song')
            .then(song => {
                res.render('song/show', {
                    song: song
                })
            })
    },
    new: (req, res) => {
        res.render('song/new')
    },
    show: (req, res) => {
        Song.findById(req.params.id).populate('albumSong').then((song) => {
            res.render(
                'song/show',
                { song: song }
            )
        })
    },
    create: (req, res) => {
        Album.findById(req.params.id).then((album) => {
            Song.create(req.body).then((savedSong) => {
                album.albumSong.push(savedSong)
                Album.save()
            }).then(() => {
                res.redirect(`/song/${savedSong._id}`)
            })
        })
    },
    edit: (req, res) => {
        Song.findById(req.params.id).then(song => {
            res.render('song/edit', {
                song: song
            })
        })
    },
    update: (req, res) => {
        Song.findByIdAndUpdate(req.params.id, req.body).then((updatedSong) => {
            res.redirect(`/song/${updatedSong._id}`)
        })
    },
    delete: (req, res) => {
        Song.findByIdAndRemove(req.params.id).then(() => {
            res.redirect(`/album/${album._id}`)
        })
    }
}

module.exports = songController