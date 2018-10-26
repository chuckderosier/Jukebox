var express = require('express')
var router = express.Router()
const artistController =require('../controllers/artist.js') // back 1 directories and calls the file
const albumController =require('../controllers/album.js')
const songController =require('../controllers/song.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

// artist routes
router.get('/artist/new', artistController.new)
// router.get('/artist/:id', artistController.show)
// router.post('/artist', artistController.create)
// router.get('/artist/:id', artistController.show)
// router.get('/recipe/:id/edit', nameController.edit)
// router.patch('/artist/:id', artistController.update)
// router.delete('/artist/:id', artistController.delete)


module.exports = router
