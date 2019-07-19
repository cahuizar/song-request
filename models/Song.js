const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
  firtsName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  song: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    defaulf: Date.now
  }
});

module.exports = mongoose.model('song', SongSchema)