const Artist = require('../models/Artist')
const Album = require('../models/Album')
const Song = require('../models/Song')

const songController = {
    index: (req, res) => {
        Song.find().populate('song')
            .then(song => {
                console.log(song)
                res.render('index', {
                    song: song
                })
            })
    },
    new: (req, res) => {
        res.render('song/addSong')
    },
    show: (req, res) => {
        console.log(req.params.id)
        Song.findById(req.params.id).populate('albumSong').then((songFromDb) => {
            res.render(
                'song/showSong',
                { song: songFromDb }
            )
        })
    },
    // needs push to array??????
    create: (req, res) => {
        Song.create(req.body).then((savedSong) => {
            res.send(savedSong)
        })
        res.redirect('index')
    },
    edit: (req, res) => {
        Song.findById(req.params.id).then(song => {
            res.render('artist/showSong', {
                song: song
            })
        })
    },
    update: (req, res) => {
        Song.findByIdAndUpdate(req.params.id, req.body).then((updatedSong) => {
            updateSong.save()
            res.redirect(`/artist/${updatedSong._id}`)
        })
    },
    delete: (req, res) => {
        Song.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('index')
        })
    }
}

module.exports = songController