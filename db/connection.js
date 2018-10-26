const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/artist')
    .then(() => {
        console.log('Connected to MongoDB')
    })

    .catch((err) => {
        console.log(err)
    })

module.exports = mongoose

mongoose.connect(process.env.MONGODB_URI)