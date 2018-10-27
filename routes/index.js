var express = require('express')
var router = express.Router()
const artistController =require('../controllers/artist.js') // back 1 directories and calls the file
const albumController =require('../controllers/album.js')
const songController =require('../controllers/song.js')

// artist routes
router.get('/', artistController.index)
router.get('/artist/:id', artistController.show)
router.get('/addArtist', artistController.new)
router.post('/addArtist', artistController.create)
router.get('/artist/:id/editArtist', nameController.edit)
router.patch('/artist/:id', artistController.update)
router.delete('/artist/:id', artistController.delete)
// album routes
router.get('/', albumController.index)
router.get('/album/:id', albumController.show)
router.get('/addAlbum', albumController.new)
router.post('/addAlbum', albumController.create)
router.get('/album/:id/editAlbum', nameController.edit)
router.patch('/album/:id', albumController.update)
router.delete('/album/:id', albumController.delete)

module.exports = router
