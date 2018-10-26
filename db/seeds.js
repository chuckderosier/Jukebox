const Artist = require('../models/Artist.js')
const Album = require('../models/Album.js')
const Song = require('../models/Song.js')
const mongoose = require('./connections')

Artist.deleteMany()
    .then(() => {
        return Album.deleteMany()
    }).then (() => {
        return Song.deleteMany()
    })
    .then(() => {
        return Artist.create({
            artistName: "",
            artistAlbum: [],
            artistDesciption: "",
            artistLinks: "",
            artistGenre: ""
        })
    }).then(artistAlbum => {
        someName.album1.push(artistAlbum)
    })
    .then(bandName => {
        const album1 = Album.create({
            albumSong: [],
            albumDescription: "",
            albumYear: ""
    }).then(albumSong => {
        bandName.albumSong.push(albumSong)
    })
    .then(songName=> {
        const song1 = Song.create9({
            songDescription: "",
            songLyrics: "",
            songLink: ""            
        })
    }).then(songName => {
        songName.song1.push(albumSong)
    })
    return Promise.all([album1, album2])
    return Promise.all(song1, song2)
    .then(() => {
        bandName.save()
    })
