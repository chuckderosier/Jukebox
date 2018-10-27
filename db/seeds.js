const Artist = require('../models/Artist.js')
const Album = require('../models/Album.js')
const Song = require('../models/Song.js')
const mongoose = require('./connection')

//OLDIES
const rollOverBeethoven = new Song({
    songName: "Roll Over Beethoven",
    songDescription: "",
    songLyrics: "",
    songLink: "https://www.youtube.com/watch?v=zD80CostTV0"
})
const johnnyBGoode = new Song({
    songName: "Johnny B. Goode",
    songDescription: "Others who have covered the song: Peter Tosh, Elvis Presley, Judas Priest, Jerry Lee Lewis, Jimi Hendrix, Johhny Winter, Sex Pistols and the Grateful Dead.",
    songLyrics: "",
    songLink: "https://www.youtube.com/watch?v=ZFo8-JqzSCM"
})
const johnnyBGoode45 = new Album({
    albumName: "Johnny B. Goode 45",
    albumSong: [johnnyBGoode, rollOverBeethoven],
    albumDescription: "Excellent Album",
    albumYear: 1980
})
const chuckBerry = new Artist({
    artistName: "Chuck Berry",
    artistAlbum: [johnnyBGoode45],
    artsistDescription: "50's artist",
    artistGenre: "Oldies",
    artistLink: "https://jerryleelewis.com/"
})
// CLASSIC ROCK SEED
const cantStandLosingYou = new Song({
    songName: "Can't Stand losing You",
    songDescription: "",
    songLyrics: "",
    songLink: "https://www.youtube.com/watch?v=nH0vjLwMyc4"
})
const nextToYou = new Song({
    songName: "Next To You",
    songDescription: "Fun Tune",
    songLyrics: "If you click the show more below the video it will show you the lyrics.",
    songLink: "https://www.youtube.com/watch?v=PRLFAqYAZ_o"
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
    songLyrics: "Lyrics are below video.",
    songLink: "https://www.youtube.com/watch?v=dQEIYjS1ePY"
})
const drivenToTears = new Song({
    songName: "Driven To Tears",
    songDescription: "Great Tune",
    songLyrics: "",
    songLink: "https://www.youtube.com/watch?v=XuoOSGkX7no"
})
const zenyattaMondatta = new Album({
    albumName: "Zenyatta Mondatta",
    albumSong: [drivenToTears, canaryInACoalmine],
    albumDescription: "",
    albumYear: 1980
})
const police = new Artist({
    artistName: "The Police",
    artistAlbum: [zenyattaMondatta, outlandosDAmour],
    artsistDescription: "80's Band",
    artistGenre: "Classic Rock",
    artistLink: ""
})
// MODERN ROCK SEED
const cogwheel = new Song({
    songName: "Teeth of a Cogwheel",
    songDescription: "Bad Tune",
    songLyrics: "",
    songLink: "https://www.youtube.com/watch?v=3ahipGkK8W0"
})
const raysOnPionions = new Song({
    songName: "Rays On Pinions",
    songDescription: "S",
    songLyrics: "",
    songLink: "https://baroness.bandcamp.com/album/red-album"
})
const redAlbum = new Album({
    albumName: "The Red Album",
    albumSong: [raysOnPionions, cogwheel],
    albumDescription: "Red Album is the debut studio album released by the progressive metal band Baroness. Red Album was named Album of the Year by heavy metal magazine Revolver.",
    albumYear: 2007
})
const baroness = new Artist({
    artistName: "Baroness",
    artistAlbum: [redAlbum],
    artistGenre: "Modern Rock",
    artsistDescription: "Baroness is an American heavy metal band from Savannah, Georgia whose original members grew up together in Lexington, Virginia.",
    artistLink: "http://yourbaroness.com/"
})
// SECOND MODERN ROCK
const valleyOfDebris = new Song({
    songName: "Valley of Debris",
    songDescription: "",
    songLyrics: "",
    songLink: "https://www.youtube.com/watch?v=_vu0PCT-6AQ"
})
const allThisTime = new Album({
    albumName: "All This Time",
    albumSong: [valleyOfDebris],
    albumDescription: "Second album.",
    albumYear: 2014
})
const heartlessBastards = new Artist({
    artistName: "Heartless Bastards",
    artistAlbum: [allThisTime],
    artistGenre: "Modern Rock",
    artsistDescription: "Heartless Bastards are an American garage rock band formed in Cincinnati, Ohio in 2003.",
    artistLink: "https://www.theheartlessbastards.com/index.html"
})

Artist.remove({})
// OLDIES
    .then(() => rollOverBeethoven.save()
    .then(() => johnnyBGoode.save())
    .then(() => johnnyBGoode45.albumSong.push(rollOverBeethoven, johnnyBGoode))
    .then(() => johnnyBGoode45.save())
    .then(() => chuckBerry.artistAlbum.push(johnnyBGoode45))
    .then(() => chuckBerry.save())
// CLASSIC
    .then(() => drivenToTears.save())
    .then(() => canaryInACoalmine.save())
    .then(() => zenyattaMondatta.albumSong.push(drivenToTears, canaryInACoalmine))
    .then(() => zenyattaMondatta.save())
    .then(() => nextToYou.save())
    .then(() => cantStandLosingYou.save())
    .then(() => outlandosDAmour.albumSong.push(nextToYou, cantStandLosingYou))
    .then(() => outlandosDAmour.save())
    .then(() => police.artistAlbum.push(outlandosDAmour, zenyattaMondatta))
    .then(() => police.save())
// MODERN
    .then(() => raysOnPionions.save()
    .then(() => cogwheel.save())
    .then(() => redAlbum.albumSong.push(raysOnPionions, cogwheel))
    .then(() => redAlbum.save())
    .then(() => baroness.artistAlbum.push(redAlbum))
    .then(() => baroness.save())
// MODERN TWO
    .then(() => valleyOfDebris.save())
    .then(() => allThisTime.albumSong.push(valleyOfDebris))
    .then(() => allThisTime.save())
    .then(() => heartlessBastards.artistAlbum.push(allThisTime))
    .then(() => heartlessBastards.save())

    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())