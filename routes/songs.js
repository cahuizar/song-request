const express = require('express');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Song = require('../models/Song');

const router = express.Router();

// @route     GET api/songs
// @desc      Get all the songs
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const songs = await Song.find({}).sort({
      date: -1
    });
    res.json(songs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/songs
// @desc      Add new song
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Please enter your full name / Por favor escribe tu nombre')
        .not()
        .isEmpty(),
      check(
        'songName',
        'Please enter the name of the song / Por favor escribe el nombre de la cancion'
      )
        .not()
        .isEmpty(),
      check(
        'artist',
        'Please enter the artist of the song / Por favor escrbie el nombre del artista'
      )
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        errors: errors.array()
      });
    const { name, songName, artist, link, message } = req.body;
    try {
      let newSong = new Song({
        name,
        songName,
        artist,
        link,
        message
      });
      const song = await newSong.save();
      res.json({
        song
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route     PUT api/songs/:id
// @desc      Update songs
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { name, songName, artist, link } = req.body;

  // Build song object
  const songFields = {};
  if (name) songFields.name = name;
  if (songName) songFields.songName = songName;
  if (artist) songFields.artist = artist;
  if (link) songFields.link = link;

  try {
    let song = await Song.findById(req.params.id);
    if (!song)
      return res.status(404).json({
        msg: 'Song not found'
      });

    song = await Song.findByIdAndUpdate(
      req.params.id,
      {
        $set: songFields
      },
      {
        new: true
      }
    );
    res.json(song);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route     DELETE api/songs/:id
// @desc      Delete song
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let song = await Song.findById(req.params.id);
    if (!song)
      return res.status(404).json({
        msg: 'Song not found'
      });
    await Song.findByIdAndRemove(req.params.id);
    res.json({
      msg: 'Song removed'
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
