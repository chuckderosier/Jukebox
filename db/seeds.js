const Artist = require('../models/Artist.js')
const Album = require('../models/Album.js')
const Song = require('../models/Song.js')
const mongoose = require('./connections')

const artist1Album2Song1 = new Song({
    songName: "Dont stand",
    songDescription: "Good Tune",
    songLyrics: "Dont stand so close to me",
    songLink: ""
})
const artist1Album2Song2 = new Song({
    songName: "Do DA",
    songDescription: "Meh Tune",
    songLyrics: "Da do do do da da da da",
    songLink: ""
})
const artist11Album2 = new Album({
    albumName: "",
    albumSong: [artist1Album2Song1, artist1Album2Song2],
    albumDescription: "",
    albumYear: 1982
})

const artist1Album1Song1 = new Song({
    songName: "",
    songDescription: "Bad Tune",
    songLyrics: "None Of Them",
    songLink: ""
})
const artist1Album1Song2 = new Song({
    songName: "",
    songDescription: "Great Tune",
    songLyrics: "Driven To Tears",
    songLink: ""
})
const artist1Album1 = new Album({
    albumName: "",
    albumSong: [artist1Album1Song1, artist1Album1Song2],
    albumDescription: "",
    albumYear: 1984
})

const artist1 = new Artist({
    artistName: "Police",
    artistAlbum: [artist1Album1, artist1Album2],
    artistGenre: "Classic Rock",
    artsistDescription: "Good Band"
})
// NEXT ARTIST
const artist2Album2Song1 = new Song({
    songName: "artist2Album2Song1",
    songDescription: "Good Tune",
    songLyrics: "Dont stand so close to me",
    songLink: ""
})
const artist2Album2Song2 = new Song({
    songName: "artist2Album2Song2",
    songDescription: "Meh Tune",
    songLyrics: "Da do do do da da da da",
    songLink: ""
})
const artist2Album2 = new Album({
    albumName: "artist2Album2",
    albumSong: [artist2Album2Song1, artist2Album2Song2],
    albumDescription: "",
    albumYear: 1982
})

const artist2Album1Song1 = new Song({
    songName: "artist2Album1Song1",
    songDescription: "Bad Tune",
    songLyrics: "None Of Them",
    songLink: ""
})
const artist2Album1Song2 = new Song({
    songName: "artist2Album1Song2",
    songDescription: "Great Tune",
    songLyrics: "Driven To Tears",
    songLink: ""
})
const artist2Album1 = new Album({
    albumName: "artist2Album1",
    albumSong: [artist2Album1Song1, artist2Album1Song2],
    albumDescription: "",
    albumYear: 1984
})

const artist2 = new Artist({
    artistName: "artist2",
    artistAlbum: [artist2Album1, artist2Album2],
    artistGenre: "Classic Rock",
    artsistDescription: "Good Band"
})

Artist.remove({})
    .then(() => Product.insertMany([laptop, shampoo, bread, couch, television, baseballBat, uno]))
    .then(() => kroger.save())
    .then(() => target.save())
    .then(() => walmart.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())