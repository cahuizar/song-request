const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
require('dotenv').config();
const {
  check,
  validationResult
} = require('express-validator');

const router = express.Router();

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user)
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error')

  }
});

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public

router.post('/',
  [
    check('email', 'Please enter a valid email address.').isEmail(),
    check('password', 'Please enter a valid password').exists()
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({
      msg: 'Invalid credentials'
    });
    const {
      email,
      password
    } = req.body;
    try {
      let user = await User.findOne({
        email
      });
      if (!user) res.status(400).json({
        msg: 'Invalid email and password combination'
      });
      let isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) res.status(400).json({
        msg: 'Invalid email and password combinations'
      });
      const payload = {
        user: {
          id: user.id
        }
      }
      jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: 100000
      }, (err, token) => {
        if (err) throw err;
        res.json({
          token
        })
      })
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        msg: 'Server error, please try again...'
      })
    }

  });

module.exports = router;