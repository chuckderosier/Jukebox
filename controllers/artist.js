const Artist = require('../models/Artist')
const Album = require('../models/Album')
const Song = require('../models/Song')

const artistController = {
    index: (req, res) => {
        const storeId = req.params.storesId
        Store.findById(storeId).populate('products')
            .then(store => {
                const product = store.product
                res.send('products', {product: product})
            })
    }
}

module.exports = artistController