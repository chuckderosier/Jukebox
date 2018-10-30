const Song = require('../models/Song')

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
        Song.create(req.body).then((savedSong) => {
            savedSong.save()
        })
        res.redirect(`/album/${savedSong._id}`)
    },
    edit: (req, res) => {
        Song.findById(req.params.id).then(song => {
            res.render('song/show', {
                song: song
            })
        })
    },
    update: (req, res) => {
        Song.findByIdAndUpdate(req.params.id, req.body).then((updatedSong) => {
            updateSong.save()
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