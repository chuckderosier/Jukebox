var express = require('express')
var router = express.Router()
const artistController =require('../controllers/artist.js')
const albumController =require('../controllers/album.js')
const songController =require('../controllers/song.js')

// artist routes
router.get('/', artistController.index)
router.get('/artist/:id', artistController.show)
router.get('/addArtist', artistController.new)
router.post('/addArtist', artistController.create)
router.get('/:id/editArtist', artistController.edit)
router.patch('/artist/:id', artistController.update)
router.delete('/artist/:id', artistController.delete)
// album routes
router.get('/', albumController.index)
router.get('/album/:id', albumController.show)
router.get('/addAlbum', albumController.new)
router.post('/addAlbum', albumController.create)
router.get('/:id/editAlbum', albumController.edit)
router.patch('/album/:id', albumController.update)
router.delete('/album/:id', albumController.delete)
// song routes
// router.get('/', songController.index)
router.get('/song/:id', songController.show)
router.get('/addSong', songController.new)
router.post('/addSong', songController.create)
router.get('/:id/editSong', songController.edit)
router.patch('/song/:id', songController.update)
router.delete('/song/:id', songController.delete)

module.exports = router
