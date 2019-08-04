const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  songName: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('song', SongSchema);
