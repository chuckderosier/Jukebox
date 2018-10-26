const Artist = require('../models/Artist.js')
const Album = require('../models/Album.js')
const Song = require('../models/Song.js')
const mongoose = require('./connection')

// CLASSIC ROCK SEED
const cantStandLosingYou = new Song({
    songName: "Can't Stand losing You",
    songDescription: "A bit sad",
    songLyrics: "Dont stand so close to me Lyrics",
    songLink: ""
})
const nextToYou = new Song({
    songName: "Next To You",
    songDescription: "Fun Tune",
    songLyrics: "NA",
    songLink: ""
})
const outlandosDAmour = new Album({
    albumName: "Outlandos D'Amour",
    albumSong: [nextToYou, cantStandLosingYou],
    albumDescription: "Good Stuff",
    albumYear: 1978
})

const canaryInACoalmine = new Song({
    songName: "Canary In A Coalmine",
    songDescription: "Good Tune",
    songLyrics: "No Lyrics Available",
    songLink: ""
})
const drivenToTears = new Song({
    songName: "Driven To Tears",
    songDescription: "Great Tune",
    songLyrics: "Driven To Tears Lyrics",
    songLink: "https://www.youtube.com/watch?v=XuoOSGkX7no"
})
const zenyattaMondatta = new Album({
    albumName: "Zenyatta Mondatta",
    albumSong: [drivenToTears, canaryInACoalmine],
    albumDescription: "Excellent Album",
    albumYear: 1980
})

const police = new Artist({
    artistName: "Police",
    artistAlbum: [zenyattaMondatta, outlandosDAmour],
    artistGenre: "Classic Rock",
    artsistDescription: "Good Band"
})
// MODERN ROCK SEED
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
    artistGenre: "Modern Rock",
    artsistDescription: "Good Band"
})

Artist.remove({})
    .then(() => drivenToTears.save())
    .then(() => canaryInACoalmine.save())
    .then(() => zenyattaMondatta.albumSong.push(drivenToTears, canaryInACoalmine))
    .then(() => zenyattaMondatta.save())
    .then(() => nextToYou.save())
    .then(() => cantStandLosingYou.save())
    .then(() => outlandosDAmour.albumSong.push(nextToYou, cantStandLosingYou))
    .then(() => outlandosDAmour.save())
    .then(() => police.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())