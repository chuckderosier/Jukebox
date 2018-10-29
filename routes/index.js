var express = require('express')
var router = express.Router()
const artistController =require('../controllers/artist.js')
const albumController =require('../controllers/album.js')
const songController =require('../controllers/song.js')

// artist routes
router.get('/', artistController.index)
router.get('/artist/:id', artistController.show)
router.get('/artist/add', artistController.new)
router.post('/artist/add', artistController.create)
router.get('/artist/:id/edit', artistController.edit)
router.patch('/artist/:id', artistController.update)
router.delete('/artist/:id', artistController.delete)
// album routes
router.get('/', albumController.index)
router.get('/album/:id', albumController.show)
router.get('/album/add', albumController.new)
router.post('/album/add', albumController.create)
router.get('/album/:id/edit', albumController.edit)
router.patch('/album/:id', albumController.update)
router.delete('/album/:id', albumController.delete)
// song routes
// router.get('/', songController.index)
router.get('/song/:id', songController.show)
router.get('/song/add', songController.new)
router.post('/song/add', songController.create)
router.get('/song/:id/edit', songController.edit)
router.patch('/song/:id', songController.update)
router.delete('/song/:id', songController.delete)

module.exports = router
