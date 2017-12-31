const mongoose = require('mongoose');
const Album = require('./album');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: String,
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: String,
    labelName: String,
    retired: Boolean,
    albums: [Album]
}, {
    usePushEach: true
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;