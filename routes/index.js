var express = require('express')
var router = express.Router()
const artistController =require('../controllers/artist.js')
const albumController =require('../controllers/album.js')
const songController =require('../controllers/song.js')

// artist routes
router.get('/', artistController.index)
router.get('/artist/new', artistController.new)
router.post('/artist/new', artistController.create)
router.get('/artist/:id', artistController.show)
router.get('/artist/:id/edit', artistController.edit)
router.patch('/artist/:id', artistController.update)
router.delete('/artist/:id', artistController.delete)
// album routes
router.get('/artist/:id/album', albumController.index)
router.get('/artist/:id/album/new', albumController.new)
router.post('/artist/:id/album/new', albumController.create)
router.get('/artist/:id/album/:id', albumController.show)
router.get('/artist/:id/album/:id/edit', albumController.edit)
router.patch('/artist/:id/album/:id', albumController.update)
router.delete('/artist/:id/album/:id', albumController.delete)
// song routes
router.get('/artist/:id/album/:id/song', songController.index)
router.get('/artist/:id/album/:id/song/new', songController.new)
router.post('/artist/:id/album/:id/song/new', songController.create)
router.get('/artist/:id/album/:id/song/:id', songController.show)
router.get('/artist/:id/album/:id/song/:id/edit', songController.edit)
router.patch('/artist/:id/album/:id/song/:id', songController.update)
router.delete('/artist/:id/album/:id/song/:id', songController.delete)

module.exports = router
